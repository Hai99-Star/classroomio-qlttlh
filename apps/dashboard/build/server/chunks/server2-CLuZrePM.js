import { b as private_env } from './shared-server-DaWdgxVh.js';
import { A as ApiError } from './index4-DxtvI9Cx.js';

function getServerApiErrorMessage(error) {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown server API error";
}
function getApiKeyHeaders() {
  if (!private_env.PRIVATE_SERVER_KEY) {
    throw new Error("PRIVATE_SERVER_KEY is not configured in environment variables");
  }
  return {
    headers: {
      Authorization: `Bearer ${private_env.PRIVATE_SERVER_KEY}`
    }
  };
}
async function safeServerApi(requestFn) {
  try {
    const response = await requestFn();
    const result = await response.json();
    if (typeof result === "object" && result !== null && "success" in result) {
      if (result.success === true) {
        return {
          ok: true,
          status: response.status,
          body: result
        };
      }
      const errorResult = result;
      return {
        ok: false,
        status: response.status,
        message: errorResult?.error ?? errorResult?.message ?? response.statusText
      };
    }
    if (response.ok) {
      return {
        ok: true,
        status: response.status,
        body: result
      };
    }
    return {
      ok: false,
      status: response.status,
      message: response.statusText || "Unexpected server API response"
    };
  } catch (error) {
    return {
      ok: false,
      status: error instanceof ApiError ? error.status ?? 0 : 0,
      message: getServerApiErrorMessage(error)
    };
  }
}

export { getApiKeyHeaders as g, safeServerApi as s };
//# sourceMappingURL=server2-CLuZrePM.js.map
