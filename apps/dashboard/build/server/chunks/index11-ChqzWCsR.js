const AGENT_MODEL_IDS = ["gemini-3.1-flash-lite", "gpt-5.4-mini", "claude-sonnet-3-5", "kimi-k2.6"];
const AGENT_MODELS = {
  "gemini-3.1-flash-lite": {
    provider: "google",
    label: "Gemini 3.1 Flash Lite",
    backendModelId: "gemini-3.1-flash-lite",
    isFree: true,
    costTier: "low",
    contextWindow: 1048576
  },
  "gpt-5.4-mini": {
    provider: "openai",
    label: "GPT-5.4 Mini",
    backendModelId: "gpt-5.4-mini",
    isFree: false,
    costTier: "low",
    contextWindow: 4e5
  },
  "claude-sonnet-3-5": {
    provider: "anthropic",
    label: "Claude Sonnet 4.6",
    backendModelId: "claude-sonnet-4-6",
    isFree: false,
    costTier: "high",
    contextWindow: 1e6
  },
  "kimi-k2.6": {
    provider: "moonshot",
    label: "Kimi K2.6",
    backendModelId: "kimi-k2.6",
    isFree: true,
    costTier: "low",
    contextWindow: 262144
  }
};
const UI_PICKER_MODEL_IDS = [
  "kimi-k2.6",
  "gemini-3.1-flash-lite",
  "gpt-5.4-mini",
  "claude-sonnet-3-5"
];
const DEFAULT_PICKER_MODEL_ID = "gemini-3.1-flash-lite";

export { AGENT_MODELS as A, DEFAULT_PICKER_MODEL_ID as D, UI_PICKER_MODEL_IDS as U, AGENT_MODEL_IDS as a };
//# sourceMappingURL=index11-ChqzWCsR.js.map
