import 'lodash/isNumber.js';
import { t } from './translations-BxDrjLWK.js';
import z__default from 'zod';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function getSiteNameValidation() {
  return z__default.string().min(5, { message: `${t.get("validations.site_name.min_char")}` }).refine((val) => !/^[-]|[-]$/.test(val), {
    message: `${t.get("validations.site_name.hyphen_rule")}`
  });
}
const processErrors = (error, mapToId) => {
  const errors = {};
  if (Array.isArray(error?.issues)) {
    for (const issue of error.issues) {
      const { message, path } = issue;
      if (!path.length) {
        continue;
      }
      {
        errors[path[0]] = message;
      }
    }
  }
  return errors;
};
const authValidation = (fields = {}) => {
  const schema = z__default.object({
    email: z__default.string().email({
      message: "validations.auth.email.invalid_email"
    }),
    password: z__default.string().min(6, {
      message: "validations.auth.password.min_char"
    })
  });
  const { error } = schema.safeParse(fields);
  return processErrors(error);
};
const updateOrgSiteNameValidation = (siteName) => {
  const schema = z__default.object({
    siteName: getSiteNameValidation()
  });
  const { error } = schema.safeParse({ siteName });
  return processErrors(error);
};
const getDisableSubmit = ({ password, confirmPassword }) => {
  return !!(password && confirmPassword && password !== confirmPassword);
};
const validateEmailInString = (emailsStr) => {
  let error = "";
  let hasError = false;
  if (!emailsStr) {
    return {
      hasError: true,
      error: "Enter an email",
      emails: []
    };
  }
  const emails = emailsStr.split(",").map((_email) => {
    const email = _email.trim();
    if (!validateEmail(email)) {
      hasError = true;
      error += !error.length ? `${t.get("validations.email.not_valid")}: ${email}` : `, ${email}`;
    }
    return email;
  });
  return {
    hasError,
    error,
    emails
  };
};

export { authValidation as a, getDisableSubmit as g, processErrors as p, updateOrgSiteNameValidation as u, validateEmailInString as v };
//# sourceMappingURL=validator-BeZKT7pz.js.map
