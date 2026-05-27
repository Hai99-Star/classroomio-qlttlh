import { c as classroomio } from './index4-3F2xRc80.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-Bx8dlk4A.js';

function getAutomationSetupSecret(secret) {
  return secret ?? "<paste-your-mcp-key>";
}
function getClaudeCodeSnippet(secret) {
  const apiKey = getAutomationSetupSecret(secret);
  return `claude mcp add-json classroomio '{
  "command": "npx",
  "args": ["-y", "@classroomio/mcp"],
  "env": {
    "CLASSROOMIO_API_URL": "https://api.classroomio.com",
    "CLASSROOMIO_API_KEY": "${apiKey}"
  }
}'`;
}
function getCodexSnippet(secret) {
  const apiKey = getAutomationSetupSecret(secret);
  return `codex mcp add classroomio \\
  --env CLASSROOMIO_API_URL=https://api.classroomio.com \\
  --env CLASSROOMIO_API_KEY=${apiKey} \\
  -- npx -y @classroomio/mcp`;
}
function getOpenCodeSnippet(secret) {
  const apiKey = getAutomationSetupSecret(secret);
  return `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "classroomio": {
      "type": "local",
      "command": ["npx", "-y", "@classroomio/mcp"],
      "enabled": true,
      "environment": {
        "CLASSROOMIO_API_URL": "https://api.classroomio.com",
        "CLASSROOMIO_API_KEY": "${apiKey}"
      }
    }
  }
}`;
}
function getCursorSnippet(secret) {
  const apiKey = getAutomationSetupSecret(secret);
  return `{
  "mcpServers": {
    "classroomio": {
      "command": "npx",
      "args": ["-y", "@classroomio/mcp"],
      "env": {
        "CLASSROOMIO_API_URL": "https://api.classroomio.com",
        "CLASSROOMIO_API_KEY": "${apiKey}"
      }
    }
  }
}`;
}
function getDefaultAutomationKeyLabel(type) {
  switch (type) {
    case "mcp":
      return "ClassroomIO MCP";
    case "api":
      return "ClassroomIO API";
    case "zapier":
      return "ClassroomIO Zapier";
  }
}
function getMaskedAutomationSecret(prefix) {
  return `${prefix}...`;
}
class AutomationApi extends BaseApiWithErrors {
  generatedSecret = null;
  isFetched = false;
  keys = [];
  usage = null;
  async listKeys(type) {
    return this.execute({
      requestFn: () => classroomio.organization.automation.keys.$get({ query: type ? { type } : {} }),
      logContext: "fetching automation keys",
      onSuccess: (response) => {
        this.keys = response.data;
        this.isFetched = true;
      }
    });
  }
  async getUsage(type = "mcp") {
    return this.execute({
      requestFn: () => classroomio.organization.automation.usage.$get({ query: { type } }),
      logContext: "fetching automation usage",
      onSuccess: (response) => {
        this.usage = response.data;
      }
    });
  }
  async createKey(type, label) {
    return this.execute({
      requestFn: () => classroomio.organization.automation.keys.$post({
        json: {
          type,
          label: label?.trim() || getDefaultAutomationKeyLabel(type)
        }
      }),
      logContext: "creating automation key",
      onSuccess: (response) => {
        this.generatedSecret = response.data.secret;
        this.keys = [response.data.key, ...this.keys];
        if (this.usage) {
          this.usage = { ...this.usage, activeKeys: this.usage.activeKeys + 1 };
        }
        snackbar.success("snackbar.automation.created");
      },
      onError: (result) => {
        if (typeof result === "string") {
          return;
        }
        this.handleValidationError(result);
        if ("field" in result && result.field) {
          this.errors[result.field] = result.error;
        }
      }
    });
  }
  async revokeKey(keyId) {
    return this.execute({
      requestFn: () => classroomio.organization.automation.keys[":keyId"].$delete({ param: { keyId } }),
      logContext: "revoking automation key",
      onSuccess: (response) => {
        this.keys = this.keys.map((key) => key.id === response.data.id ? response.data : key);
        if (this.usage) {
          const revokedKeyType = response.data.type;
          const activeKeys = this.keys.filter((key) => key.type === revokedKeyType && !key.revokedAt).length;
          this.usage = { ...this.usage, activeKeys };
        }
        snackbar.success("snackbar.automation.revoked");
      }
    });
  }
  async rotateKey(keyId) {
    return this.execute({
      requestFn: () => classroomio.organization.automation.keys[":keyId"].rotate.$post({ param: { keyId } }),
      logContext: "rotating automation key",
      onSuccess: (response) => {
        this.generatedSecret = response.data.secret;
        this.keys = this.keys.map((key) => key.id === response.data.key.id ? response.data.key : key);
        snackbar.success("snackbar.automation.rotated");
      }
    });
  }
  clearGeneratedSecret() {
    this.generatedSecret = null;
  }
}
const automationApi = new AutomationApi();

export { automationApi as a, getClaudeCodeSnippet as b, getCodexSnippet as c, getCursorSnippet as d, getOpenCodeSnippet as e, getMaskedAutomationSecret as g };
//# sourceMappingURL=automation.svelte-B8a4n3-I.js.map
