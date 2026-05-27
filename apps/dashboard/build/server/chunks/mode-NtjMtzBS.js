import { u as userPrefersMode } from './states.svelte-BI9DWQmF.js';

function setMode(mode) {
  userPrefersMode.current = mode;
}
function resetMode() {
  userPrefersMode.current = "system";
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode = "system", themeColors, darkClassNames = ["dark"], lightClassNames = [], defaultTheme = "", modeStorageKey = "mode-watcher-mode", themeStorageKey = "mode-watcher-theme" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem(modeStorageKey) ?? defaultMode;
  const theme = localStorage.getItem(themeStorageKey) ?? defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames.length)
      rootEl.classList.remove(...darkClassNames.filter(Boolean));
    if (lightClassNames.length)
      rootEl.classList.add(...lightClassNames.filter(Boolean));
  } else {
    if (lightClassNames.length)
      rootEl.classList.remove(...lightClassNames.filter(Boolean));
    if (darkClassNames.length)
      rootEl.classList.add(...darkClassNames.filter(Boolean));
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors.light : themeColors.dark);
    }
  }
  if (theme) {
    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorageKey, theme);
  }
  localStorage.setItem(modeStorageKey, mode);
}

export { setMode as a, defineConfig as d, resetMode as r, setInitialMode as s };
//# sourceMappingURL=mode-NtjMtzBS.js.map
