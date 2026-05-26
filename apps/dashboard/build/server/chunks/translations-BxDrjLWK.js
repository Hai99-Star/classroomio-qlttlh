import { w as writable, g as get, d as derived } from './index-AIbsv2Pd.js';
import parser from '@sveltekit-i18n/parser-icu';

var H = Object.defineProperty, q = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var N = (s, t2, e) => t2 in s ? H(s, t2, { enumerable: true, configurable: true, writable: true, value: e }) : s[t2] = e, l = (s, t2) => {
  for (var e in t2 || (t2 = {})) K.call(t2, e) && N(s, e, t2[e]);
  if (x) for (var e of x(t2)) A.call(t2, e) && N(s, e, t2[e]);
  return s;
}, f = (s, t2) => q(s, B(t2));
var L = (s, t2) => {
  var e = {};
  for (var a in s) K.call(s, a) && t2.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && x) for (var a of x(s)) t2.indexOf(a) < 0 && A.call(s, a) && (e[a] = s[a]);
  return e;
};
var C = ["error", "warn", "debug"], $ = ({ logger: s = console, level: t2 = C[1], prefix: e = "[i18n]: " }) => C.reduce((a, r, i) => f(l({}, a), { [r]: (o) => C.indexOf(t2) >= i && s[r](`${e}${o}`) }), {}), c = $({}), V = (s) => {
  c = s;
};
var z = (n) => {
  var d = n, { parser: s, key: t2, params: e, translations: a, locale: r, fallbackLocale: i } = d, o = L(d, ["parser", "key", "params", "translations", "locale", "fallbackLocale"]);
  if (!t2) return c.warn(`No translation key provided ('${r}' locale). Skipping translation...`), "";
  if (!r) return c.warn(`No locale provided for '${t2}' key. Skipping translation...`), "";
  let u = (a[r] || {})[t2];
  if (i && u === void 0 && (c.debug(`No translation provided for '${t2}' key in locale '${r}'. Trying fallback '${i}'`), u = (a[i] || {})[t2]), u === void 0) {
    if (c.debug(`No translation provided for '${t2}' key in fallback '${i}'.`), o.hasOwnProperty("fallbackValue")) return o.fallbackValue;
    c.warn(`No translation nor fallback found for '${t2}' .`);
  }
  return s.parse(u, e, r, t2);
}, h = (...s) => s.length ? s.filter((t2) => !!t2).map((t2) => {
  let e = `${t2}`.toLowerCase();
  try {
    let [a] = Intl.Collator.supportedLocalesOf(t2);
    if (!a) throw new Error();
    e = a;
  } catch (a) {
    c.warn(`'${t2}' locale is non-standard.`);
  }
  return e;
}) : [], w = (s, t2, e) => {
  if (t2 && Array.isArray(s)) return s.map((a) => w(a, t2));
  if (s && typeof s == "object") {
    let a = Object.keys(s).reduce((r, i) => {
      let o = s[i], n = e ? `${e}.${i}` : `${i}`;
      return o && typeof o == "object" && !(t2 && Array.isArray(o)) ? l(l({}, r), w(o, t2, n)) : f(l({}, r), { [n]: w(o, t2) });
    }, {});
    return Object.keys(a).length ? a : null;
  }
  return s;
}, G = (s) => s.reduce((t2, { key: e, data: a, locale: r }) => {
  if (!a) return t2;
  let [i] = h(r), o = f(l({}, t2[i] || {}), { [e]: a });
  return f(l({}, t2), { [i]: o });
}, {}), E = async (s) => {
  try {
    let t2 = await Promise.all(s.map((r) => {
      var i = r, { loader: e } = i, a = L(i, ["loader"]);
      return new Promise(async (o) => {
        let n;
        try {
          n = await e();
        } catch (d) {
          c.error(`Failed to load translation. Verify your '${a.locale}' > '${a.key}' Loader.`), c.error(d);
        }
        o(f(l({ loader: e }, a), { data: n }));
      });
    }));
    return G(t2);
  } catch (t2) {
    c.error(t2);
  }
  return {};
}, W = (s) => (t2) => {
  try {
    if (typeof t2 == "string") return t2 === s;
    if (typeof t2 == "object") return t2.test(s);
  } catch (e) {
    c.error("Invalid route config!");
  }
  return false;
}, F = (s, t2) => {
  let e = true;
  try {
    e = Object.keys(s).filter((a) => s[a] !== void 0).every((a) => s[a] === t2[a]);
  } catch (a) {
  }
  return e;
};
var D = 1e3 * 60 * 60 * 24, O = class {
  constructor(t2) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (t3, e) => {
      let { fallbackLocale: a } = get(this.config), r = Array.from(this.promises).filter((i) => {
        let o = F({ locale: h(t3)[0], route: e }, i);
        return a && (o = o || F({ locale: h(a)[0], route: e }, i)), o;
      }).map(({ promise: i }) => i);
      return Promise.all(r);
    }, get: () => get(this.isLoading) };
    this.privateRawTranslations = writable({});
    this.rawTranslations = { subscribe: this.privateRawTranslations.subscribe, get: () => get(this.rawTranslations) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get(this.translations) };
    this.locales = f(l({}, derived([this.config, this.privateTranslations], ([t3, e]) => {
      if (!t3) return [];
      let { loaders: a = [] } = t3, r = a.map(({ locale: o }) => o), i = Object.keys(e).map((o) => o);
      return Array.from(/* @__PURE__ */ new Set([...h(...r), ...h(...i)]));
    }, [])), { get: () => get(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([t3, e], a) => {
      var r, i;
      t3 !== void 0 && e !== void 0 && !(t3 === ((r = get(this.loaderTrigger)) == null ? void 0 : r[0]) && e === ((i = get(this.loaderTrigger)) == null ? void 0 : i[1])) && (c.debug("Triggering translation load..."), a([t3, e]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([t3, e, a], r) => {
      get(this.initialized) || r(t3 !== void 0 && e !== void 0 && !!Object.keys(a).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([t3, e, a], r) => {
      let i = t3[e];
      i && Object.keys(i).length && !a && r(i);
    }, {});
    this.t = f(l({}, derived([this.config, this.translation], (r) => {
      var [i] = r, o = i, { parser: t3, fallbackLocale: e } = o, a = L(o, ["parser", "fallbackLocale"]);
      return (n, ...d) => z(l({ parser: t3, key: n, params: d, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t3, ...e) => get(this.t)(t3, ...e) });
    this.l = f(l({}, derived([this.config, this.translations], (i) => {
      var [o, ...n] = i, d = o, { parser: t3, fallbackLocale: e } = d, a = L(d, ["parser", "fallbackLocale"]), [r] = n;
      return (u, b, ...k) => z(l({ parser: t3, key: b, params: k, translations: r, locale: u, fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t3, e, ...a) => get(this.l)(t3, e, ...a) });
    this.getLocale = (t3) => {
      let { fallbackLocale: e } = get(this.config) || {}, a = t3 || e;
      if (!a) return;
      let r = this.locales.get();
      return r.find((o) => h(a).includes(o)) || r.find((o) => h(e).includes(o));
    };
    this.setLocale = (t3) => {
      if (t3 && t3 !== get(this.internalLocale)) return c.debug(`Setting '${t3}' locale.`), this.internalLocale.set(t3), this.loading.toPromise(t3, get(this.currentRoute));
    };
    this.setRoute = (t3) => {
      if (t3 !== get(this.currentRoute)) {
        c.debug(`Setting '${t3}' route.`), this.currentRoute.set(t3);
        let e = get(this.internalLocale);
        return this.loading.toPromise(e, t3);
      }
    };
    this.loadConfig = async (t3) => {
      await this.configLoader(t3);
    };
    this.getTranslationProps = async (t3 = this.locale.get(), e = get(this.currentRoute)) => {
      let a = get(this.config);
      if (!a || !t3) return [];
      let r = this.translations.get(), { loaders: i, fallbackLocale: o = "", cache: n = D } = a || {}, d = Number.isNaN(+n) ? D : +n;
      this.cachedAt ? Date.now() > d + this.cachedAt && (c.debug("Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (c.debug("Setting cache timestamp."), this.cachedAt = Date.now());
      let [u, b] = h(t3, o), k = r[u], I = r[b], R = (i || []).map((j) => {
        var T = j, { locale: p } = T, y = L(T, ["locale"]);
        return f(l({}, y), { locale: h(p)[0] });
      }).filter(({ routes: p }) => !p || (p || []).some(W(e))).filter(({ key: p, locale: y }) => y === u && (!k || !(this.loadedKeys[u] || []).includes(p)) || o && y === b && (!I || !(this.loadedKeys[b] || []).includes(p)));
      if (R.length) {
        this.isLoading.set(true), c.debug("Fetching translations...");
        let p = await E(R);
        this.isLoading.set(false);
        let y = Object.keys(p).reduce((T, P) => f(l({}, T), { [P]: Object.keys(p[P]) }), {}), j = R.filter(({ key: T, locale: P }) => (y[P] || []).some((S) => `${S}`.startsWith(T))).reduce((T, { key: P, locale: S }) => f(l({}, T), { [S]: [...T[S] || [], P] }), {});
        return [p, j];
      }
      return [];
    };
    this.addTranslations = (t3, e) => {
      if (!t3) return;
      let a = get(this.config), { preprocess: r } = a || {};
      c.debug("Adding translations...");
      let i = Object.keys(t3 || {});
      this.privateRawTranslations.update((o) => i.reduce((n, d) => f(l({}, n), { [d]: l(l({}, n[d] || {}), t3[d]) }), o)), this.privateTranslations.update((o) => i.reduce((n, d) => {
        let u = true, b = t3[d];
        return typeof r == "function" && (b = r(b)), (typeof r == "function" || r === "none") && (u = false), f(l({}, n), { [d]: l(l({}, n[d] || {}), u ? w(b, r === "preserveArrays") : b) });
      }, o)), i.forEach((o) => {
        let n = Object.keys(t3[o]).map((d) => `${d}`.split(".")[0]);
        e && (n = e[o]), this.loadedKeys[o] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[o] || [], ...n || []]));
      });
    };
    this.loader = async ([t3, e]) => {
      let a = this.getLocale(t3) || void 0;
      c.debug(`Adding loader promise for '${a}' locale and '${e}' route.`);
      let r = (async () => {
        let i = await this.getTranslationProps(a, e);
        i.length && this.addTranslations(...i);
      })();
      this.promises.add({ locale: a, route: e, promise: r }), r.then(() => {
        a && this.locale.get() !== a && this.locale.forceSet(a);
      });
    };
    this.loadTranslations = (t3, e = get(this.currentRoute) || "") => {
      let a = this.getLocale(t3);
      if (a) return this.setRoute(e), this.setLocale(a), this.loading.toPromise(a, e);
    };
    this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (e) => {
      e && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), c.debug("Loader promises have been purged."));
    }), t2 && this.loadConfig(t2);
  }
  async configLoader(t2) {
    if (!t2) return c.error("No config provided!");
    let n = t2, { initLocale: e, fallbackLocale: a, translations: r, log: i } = n, o = L(n, ["initLocale", "fallbackLocale", "translations", "log"]);
    i && V($(i)), [e] = h(e), [a] = h(a), c.debug("Setting config."), this.config.set(l({ initLocale: e, fallbackLocale: a, translations: r }, o)), r && this.addTranslations(r), e && await this.loadTranslations(e);
  }
};
const config = {
  parser: parser(),
  loaders: [
    {
      locale: "en",
      key: "",
      loader: async () => (await import('./en-DCOeBniK.js')).default
    },
    {
      locale: "hi",
      key: "",
      loader: async () => (await import('./hi-D5IwmpLg.js')).default
    },
    {
      locale: "fr",
      key: "",
      loader: async () => (await import('./fr-Dhixh7JF.js')).default
    },
    {
      locale: "pl",
      key: "",
      loader: async () => (await import('./pl-DTa17PFH.js')).default
    },
    {
      locale: "pt",
      key: "",
      loader: async () => (await import('./pt-gcuNT3AV.js')).default
    },
    {
      locale: "de",
      key: "",
      loader: async () => (await import('./de-ncDzIfr6.js')).default
    },
    {
      locale: "vi",
      key: "",
      loader: async () => (await import('./vi-_JuBuGo-.js')).default
    },
    {
      locale: "ru",
      key: "",
      loader: async () => (await import('./ru-DH30wNZc.js')).default
    },
    {
      locale: "es",
      key: "",
      loader: async () => (await import('./es-SEvsqUT1.js')).default
    },
    {
      locale: "da",
      key: "",
      loader: async () => (await import('./da-jd5IjCOp.js')).default
    }
  ]
};
const { t, loading, locales, locale, initialized, translations, loadTranslations } = new O(config);
const selectedLocale = writable("en");
const LOCALE_STORAGE_KEY = "classroomio_locale";
const LOCALE_COOKIE_KEY = "classroomio_locale";
loading.subscribe(async ($loading) => {
  if ($loading) {
    console.log("Loading translations...");
    await loading.toPromise();
  }
});
function handleLocaleChange(newLocale) {
  if (!newLocale) {
    return;
  }
  locale.set(newLocale);
  selectedLocale.set(newLocale);
  persistLocale(newLocale);
}
function getPersistedLocale() {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedLocale) {
      return savedLocale;
    }
  } catch (error) {
    console.warn("Failed to read saved locale from localStorage", error);
  }
  const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE_KEY}=([^;]*)`));
  return cookieMatch?.[1] ? decodeURIComponent(cookieMatch[1]) : null;
}
function persistLocale(newLocale) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  } catch (error) {
    console.warn("Failed to save locale to localStorage", error);
  }
  document.cookie = `${LOCALE_COOKIE_KEY}=${encodeURIComponent(newLocale)}; path=/; max-age=31536000; SameSite=Lax`;
}

export { config as c, getPersistedLocale as g, handleLocaleChange as h, initialized as i, loadTranslations as l, t };
//# sourceMappingURL=translations-BxDrjLWK.js.map
