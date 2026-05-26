import { f as getErrMsg, A as ApiError } from './index4-DxtvI9Cx.js';
import { t } from './translations-BxDrjLWK.js';
import { ZodError } from 'zod/v4';

function mapZodErrorsToTranslations(error, entityName) {
  const errors = {};
  if (!error?.issues) {
    return errors;
  }
  console.log("mapZodErrorsToTranslations error", error, error.issues);
  error.issues.forEach((issue) => {
    const fieldPath = issue.path.join(".");
    const fieldName = issue.path[issue.path.length - 1];
    if (!fieldName) return;
    const translationKeys = buildTranslationKeys(fieldName, issue, entityName);
    const translationParams = buildTranslationParams(issue, fieldName, entityName);
    let translatedMessage = null;
    for (const key of translationKeys) {
      if (key === "validations.generic.custom") {
        translatedMessage = t.get(issue.message);
        break;
      }
      if (issue.code === "invalid_type" && translationParams.received === "undefined") {
        translatedMessage = t.get("validations.generic.required_field");
        break;
      }
      try {
        const translation = t.get(key, translationParams);
        if (translation && translation !== key) {
          translatedMessage = translation;
          break;
        }
      } catch (_error) {
        console.log("t.get validation error", _error);
        translatedMessage = issue.message;
        break;
      }
    }
    errors[fieldPath] = translatedMessage || issue.message;
  });
  return errors;
}
function buildTranslationKeys(fieldName, issue, entityName) {
  const keys = [];
  const errorSuffix = issue.code;
  if (entityName) {
    keys.push(`validations.${entityName}.${fieldName}.${errorSuffix}`);
  }
  keys.push(`validations.${fieldName}.${errorSuffix}`);
  keys.push(`validations.generic.${errorSuffix}`);
  return keys;
}
function buildTranslationParams(issue, fieldName, entityName) {
  const params = {};
  console.log("buildTranslationParams issue", issue);
  console.log("buildTranslationParams fieldName", fieldName);
  console.log("buildTranslationParams entityName", entityName);
  if (fieldName) params.field = fieldName;
  if (entityName) params.entity = entityName;
  if (issue.code) params.code = issue.code;
  if (issue.message) params.message = issue.message;
  const details = issue;
  switch (issue.code) {
    case "invalid_type":
      if ("expected" in details) params.expected = details.expected;
      if ("received" in details) params.received = details.received;
      if ("format" in details) params.format = details.format;
      if (!details.received && !params.format) params.received = "undefined";
      break;
    case "too_small":
      if ("minimum" in details) params.minimum = details.minimum;
      if ("inclusive" in details) params.inclusive = details.inclusive;
      if ("type" in details) params.type = details.type;
      if ("exact" in details) params.exact = details.exact;
      break;
    case "too_big":
      if ("maximum" in details) params.maximum = details.maximum;
      if ("inclusive" in details) params.inclusive = details.inclusive;
      if ("type" in details) params.type = details.type;
      if ("exact" in details) params.exact = details.exact;
      break;
    case "invalid_format":
      if ("format" in details) params.validation = details.format;
      if ("regex" in details) params.regex = details.regex;
      break;
    case "not_multiple_of":
      if ("multipleOf" in details) params.multipleOf = details.multipleOf;
      break;
    case "unrecognized_keys":
      if ("keys" in details) {
        params.keys = Array.isArray(details.keys) ? details.keys.join(", ") : details.keys;
      }
      break;
    case "invalid_union":
      if ("unionErrors" in details) {
        params.unionErrors = Array.isArray(details.unionErrors) ? details.unionErrors.length : details.unionErrors;
      }
      break;
    case "invalid_key":
      if ("key" in details) params.key = details.key;
      break;
    case "invalid_element":
      if ("index" in details) params.index = details.index;
      if ("element" in details) params.element = details.element;
      break;
    case "invalid_value":
      if ("expected" in details) params.expected = details.expected;
      if ("received" in details) params.received = details.received;
      break;
    case "custom":
      if ("params" in details) {
        params.params = typeof details.params === "object" && details.params !== null ? JSON.stringify(details.params) : details.params;
      }
      break;
  }
  return params;
}
function validateWithTranslation(schema, data, entityName) {
  const result = schema.safeParse(data);
  if (!result.success && result.error) {
    return { errors: mapZodErrorsToTranslations(result.error, entityName) };
  }
  return { data: result.data };
}
class BaseApi {
  isLoading = false;
  error = null;
  success = false;
  constructor(loading = false) {
    this.isLoading = loading;
    this.error = null;
  }
  /**
   * Execute an API request with automatic loading and error state management
   * Type is automatically inferred from the RPC call (e.g., classroomio.organization.plan.$post)
   * @param options Configuration for the request
   * @returns The data from the response, or the default return value on error
   */
  async execute(options) {
    const { requestFn, onSuccess, logContext = "API request" } = options;
    this.isLoading = true;
    this.error = null;
    this.success = false;
    try {
      const response = await requestFn();
      const result = await response.json();
      if (typeof result === "object" && result !== null && "success" in result) {
        const apiResult = result;
        if (apiResult.success === false) {
          console.log("apiResult false", apiResult);
          this.error = JSON.stringify(apiResult);
          options.onError?.(apiResult);
          return;
        }
        const typedResult = apiResult;
        this.resetErrors();
        if (onSuccess) {
          await onSuccess(typedResult);
        }
        this.success = true;
        return typedResult;
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }
      console.error(`Error in ${logContext}:`, error);
      this.error = getErrMsg(error, `Error ${logContext}:`);
      const errorResult = this.getServerError(error);
      options.onError?.(errorResult);
    } finally {
      this.isLoading = false;
    }
  }
  getServerError(error) {
    if (error instanceof ApiError) {
      console.log("instance of ApiError", error);
      try {
        const json = JSON.parse(error.message);
        return json;
      } catch (e) {
        console.log("error parsing json", e);
        return error.message;
      }
    }
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }
    return `${error}`;
  }
  resetErrors() {
    this.error = null;
  }
  /**
   * Reset the API state
   */
  reset() {
    this.isLoading = false;
    this.error = null;
  }
}
class BaseApiWithErrors extends BaseApi {
  errors = {};
  handleValidationError(result) {
    const zodValidationError = result.error;
    if (zodValidationError.name === "ZodError") {
      const issues = JSON.parse(zodValidationError.message);
      this.errors = mapZodErrorsToTranslations(new ZodError(issues));
      return;
    }
  }
  resetErrors() {
    this.errors = {};
  }
  /**
   * Reset the API state including errors and success
   */
  reset() {
    super.reset();
    this.errors = {};
    this.success = false;
  }
}

export { BaseApiWithErrors as B, BaseApi as a, mapZodErrorsToTranslations as m, validateWithTranslation as v };
//# sourceMappingURL=base.svelte-C2lk8LDX.js.map
