import { t as props_id, g as attributes, j as clsx, c as bind_props, s as setContext, q as element, n as escape_html, l as attr_class, m as attr_style, b as spread_props, d as attr, e as stringify, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { S as Symbol$1, M as MapCache, u as utcMonday, a as utcDay, t as timeMonday, b as timeDay, d as timeYear, e as timeThursday, f as timeSunday, h as cls, r as range$2, i as isArray, w as watch, j as defaultLocale$2, k as isObjectLike, l as baseGetTag, m as defaultWindow, n as d3InterpolatePathExports, o as isStringDate, P as PeriodType, p as periodTypeMappings, q as formatDateWithLocale, s as toTitleCase, v as keys, x as fromEntries, y as entries, D as Duration, z as truncateText, A as getStringWidth, B as DateToken, C as second, E as durationSecond, F as durationMinute, G as durationHour, H as durationDay, I as durationWeek, J as durationMonth, K as durationYear, L as millisecond, N as timeMinute, O as timeHour, Q as timeMonth, R as utcYear, T as utcSunday, U as utcThursday } from './d3-tile-DavCumcS.js';
import { Z as SvelteSet, M as MediaQuery } from './create-id-D7gdjJzW.js';
import { a5 as run, aa as state, J as render_effect, s as set, g as get$1 } from './utils2-DPSDgWhA.js';
import { C as Context } from './context-Dq8HS6q_.js';
import { s as snapshot } from './clone-u51BKwOQ.js';
import { S as Spring, l as loop, r as raf, i as is_date } from './spring-CMJ2WkAz.js';

function linear$3(t) {
  return t;
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicIn(t) {
  return t * t * t;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys2 = Object.keys(b);
    const interpolators = {};
    keys2.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys2.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
class Tween {
  #current;
  #target;
  /** @type {TweenedOptions<T>} */
  #defaults;
  /** @type {import('../internal/client/types').Task | null} */
  #task = null;
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(value, options = {}) {
    this.#current = state(value);
    this.#target = state(value);
    this.#defaults = options;
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(fn, options) {
    const tween = new Tween(fn(), options);
    render_effect(() => {
      tween.set(fn());
    });
    return tween;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(value, options) {
    set(this.#target, value);
    let {
      delay = 0,
      duration = 400,
      easing = linear$3,
      interpolate: interpolate2 = get_interpolator
    } = { ...this.#defaults, ...options };
    if (duration === 0) {
      this.#task?.abort();
      set(this.#current, value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    let started = false;
    let previous_task = this.#task;
    this.#task = loop((now) => {
      if (now < start) {
        return true;
      }
      if (!started) {
        started = true;
        const prev = this.#current.v;
        fn = interpolate2(prev, value);
        if (typeof duration === "function") {
          duration = duration(prev, value);
        }
        previous_task?.abort();
      }
      const elapsed = now - start;
      if (elapsed > /** @type {number} */
      duration) {
        set(this.#current, value);
        return false;
      }
      set(this.#current, fn(easing(elapsed / /** @type {number} */
      duration)));
      return true;
    });
    return this.#task.promise;
  }
  get current() {
    return get$1(this.#current);
  }
  get target() {
    return get$1(this.#target);
  }
  set target(v) {
    this.set(v);
  }
}
const linear$2 = (x2) => x2;
function fade(node, { delay = 0, duration = 400, easing = linear$2 } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const THEMES = { light: "", dark: ".dark" };
const chartContextKey = Symbol("chart-context");
function setChartContext$1(value) {
  return setContext(chartContextKey, value);
}
function Chart_style($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, config } = $$props;
    const colorConfig = config ? Object.entries(config).filter(([, config2]) => config2.theme || config2.color) : null;
    const themeContents = (() => {
      if (!colorConfig || !colorConfig.length) return;
      const themeContents2 = [];
      for (let [_theme, prefix] of Object.entries(THEMES)) {
        let content = `${prefix} [data-chart=${id}] {
`;
        const color2 = colorConfig.map(([key, itemConfig]) => {
          const theme = _theme;
          const color3 = itemConfig.theme?.[theme] || itemConfig.color;
          return color3 ? `	--color-${key}: ${color3};` : null;
        });
        content += color2.join("\n") + "\n}";
        themeContents2.push(content);
      }
      return themeContents2.join("\n");
    })();
    if (themeContents) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      {
        element($$renderer2, "style", void 0, () => {
          $$renderer2.push(`${escape_html(themeContents)}`);
        });
      }
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Chart_container($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      ref = null,
      id = uid,
      class: className,
      children,
      config,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const chartId = `chart-${id || uid.replace(/:/g, "")}`;
    setChartContext$1({
      get config() {
        return config;
      }
    });
    $$renderer2.push(`<div${attributes({
      "data-chart": chartId,
      "data-slot": "chart",
      class: clsx(cn(
        "ui:flex ui:justify-center ui:overflow-visible ui:text-xs ui:aspect-video",
        // Overrides
        //
        // Stroke around dots/marks when hovering
        "ui:[&_.stroke-white]:stroke-transparent",
        // override the default stroke color of lines
        "ui:[&_.lc-line]:stroke-border/50",
        // by default, layerchart shows a line intersecting the point when hovering, this hides that
        "ui:[&_.lc-highlight-line]:stroke-0",
        // by default, when you hover a point on a stacked series chart, it will drop the opacity
        // of the other series, this overrides that
        "ui:[&_.lc-area-path]:opacity-100 ui:[&_.lc-highlight-line]:opacity-100 ui:[&_.lc-highlight-point]:opacity-100 ui:[&_.lc-spline-path]:opacity-100 ui:[&_.lc-text]:text-xs ui:[&_.lc-text-svg]:overflow-visible",
        // We don't want the little tick lines between the axis labels and the chart, so we remove
        // the stroke. The alternative is to manually disable `tickMarks` on the x/y axis of every
        // chart.
        "ui:[&_.lc-axis-tick]:stroke-0",
        // We don't want to display the rule on the x/y axis, as there is already going to be
        // a grid line there and rule ends up overlapping the marks because it is rendered after
        // the marks
        "ui:[&_.lc-rule-x-line:not(.lc-grid-x-rule)]:stroke-0 ui:[&_.lc-rule-y-line:not(.lc-grid-y-rule)]:stroke-0",
        "ui:[&_.lc-grid-x-radial-line]:stroke-border ui:[&_.lc-grid-x-radial-circle]:stroke-border",
        "ui:[&_.lc-grid-y-radial-line]:stroke-border ui:[&_.lc-grid-y-radial-circle]:stroke-border",
        // Legend adjustments
        "ui:[&_.lc-legend-swatch-button]:items-center ui:[&_.lc-legend-swatch-button]:gap-1.5",
        "ui:[&_.lc-legend-swatch-group]:items-center ui:[&_.lc-legend-swatch-group]:gap-4",
        "ui:[&_.lc-legend-swatch]:size-2.5 ui:[&_.lc-legend-swatch]:rounded-[2px]",
        // Labels
        "ui:[&_.lc-labels-text:not([fill])]:fill-foreground ui:[&_text]:stroke-transparent",
        // Tick labels on th x/y axes
        "ui:[&_.lc-axis-tick-label]:fill-muted-foreground ui:[&_.lc-axis-tick-label]:font-normal",
        "ui:[&_.lc-tooltip-rects-g]:fill-transparent",
        "ui:[&_.lc-layout-svg-g]:fill-transparent",
        "ui:[&_.lc-root-container]:w-full",
        className
      )),
      ...restProps
    })}>`);
    Chart_style($$renderer2, { id: chartId, config });
    $$renderer2.push(`<!----> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f2) {
  let compare1, compare2, delta;
  if (f2.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f2(d), x2);
    delta = (d, x2) => f2(d) - x2;
  } else {
    compare1 = f2 === ascending || f2 === descending ? f2 : zero$1;
    compare2 = f2;
    delta = f2;
  }
  function left(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x2, lo = 0, hi = a.length) {
    const i = left(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero$1() {
  return 0;
}
function number$2(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values, valueof) {
  {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
function extent(values, valueof) {
  let min2;
  let max2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min2 === void 0) {
          if (value >= value) min2 = max2 = value;
        } else {
          if (min2 > value) min2 = value;
          if (max2 < value) max2 = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min2 === void 0) {
          if (value >= value) min2 = max2 = value;
        } else {
          if (min2 > value) min2 = value;
          if (max2 < value) max2 = value;
        }
      }
    }
  }
  return [min2, max2];
}
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x2) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y2 = p[j], hi = x2 + y2, lo = Math.abs(x2) < Math.abs(y2) ? x2 - (hi - y2) : y2 - (hi - x2);
      if (lo) p[i++] = lo;
      x2 = hi;
    }
    p[i] = x2;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x2, y2, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x2 = hi;
        y2 = p[--n];
        hi = x2 + y2;
        lo = y2 - (hi - x2);
        if (lo) break;
      }
      if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
        y2 = lo * 2;
        x2 = hi + y2;
        if (y2 == x2 - hi) hi = x2;
      }
    }
    return hi;
  }
}
class InternMap extends Map {
  constructor(entries2, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries2 != null) for (const [key2, value] of entries2) this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}
class InternSet extends Set {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
function compareDefined(compare = ascending) {
  if (compare === ascending) return ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a, b) => {
    const x2 = compare(a, b);
    if (x2 || x2 === 0) return x2;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}
function ascendingDefined(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
function max$2(values, valueof) {
  let max2;
  {
    for (const value of values) {
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  }
  return max2;
}
function min$2(values, valueof) {
  let min2;
  {
    for (const value of values) {
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  }
  return min2;
}
function quickselect(array2, k, left = 0, right = Infinity, compare) {
  k = Math.floor(k);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array2.length - 1, right));
  if (!(left <= k && k <= right)) return array2;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array2, k, newLeft, newRight, compare);
    }
    const t = array2[k];
    let i = left;
    let j = right;
    swap$1(array2, left, k);
    if (compare(array2[right], t) > 0) swap$1(array2, left, right);
    while (i < j) {
      swap$1(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0) ++i;
      while (compare(array2[j], t) > 0) --j;
    }
    if (compare(array2[left], t) === 0) swap$1(array2, left, j);
    else ++j, swap$1(array2, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array2;
}
function swap$1(array2, i, j) {
  const t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}
function greatest(values, compare = ascending) {
  let max2;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element2 of values) {
      const value = compare(element2);
      if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
        max2 = element2;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, max2) > 0 : compare(value, value) === 0) {
        max2 = value;
        defined = true;
      }
    }
  }
  return max2;
}
function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min$2(values);
  if (p >= 1) return max$2(values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max$2(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min$2(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function* flatten(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}
function sum$1(values, valueof) {
  let sum2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        sum2 += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum2 += value;
      }
    }
  }
  return sum2;
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array2, iteratee) {
  var index = -1, length2 = array2 == null ? 0 : array2.length, result = Array(length2);
  while (++index < length2) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object2) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object2) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object2) ? [value] : stringToPath(toString(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object2, path2) {
  path2 = castPath(path2, object2);
  var index = 0, length2 = path2.length;
  while (object2 != null && index < length2) {
    object2 = object2[toKey(path2[index++])];
  }
  return index && index == length2 ? object2 : void 0;
}
function get(object2, path2, defaultValue) {
  var result = object2 == null ? void 0 : baseGet(object2, path2);
  return result === void 0 ? defaultValue : result;
}
function isLiteralObject(obj) {
  return obj && typeof obj === "object" && obj.constructor === Object;
}
function propAccessor(prop) {
  return typeof prop === "function" ? prop : typeof prop === "string" ? (d) => get(d, prop) : (x2) => x2;
}
var objIdMap = /* @__PURE__ */ new WeakMap(), objectCount = 0;
function objectId(object2) {
  if (!objIdMap.has(object2))
    objIdMap.set(object2, ++objectCount);
  return objIdMap.get(object2);
}
function omitNil(obj) {
  if (keys.length === 0) {
    return obj;
  } else {
    return fromEntries(entries(obj).filter(([key, value]) => value != null));
  }
}
function unique(values) {
  return Array.from(new Set(values));
}
function greatestAbs(array2) {
  return greatest(array2, (a, b) => Math.abs(a) - Math.abs(b));
}
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale$1(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string2 = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string2.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
          string2.push(c);
          j = i + 1;
        }
      }
      string2.push(specifier.slice(j, i));
      return string2.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string2) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string2 += "", 0), week, day;
      if (i != string2.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string2, j) {
    var i = 0, n = specifier.length, m = string2.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string2, j)) < 0) return -1;
      } else if (c != string2.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string2, i) {
    var n = periodRe.exec(string2.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string2, i) {
    var n = shortWeekdayRe.exec(string2.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string2, i) {
    var n = weekdayRe.exec(string2.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string2, i) {
    var n = shortMonthRe.exec(string2.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string2, i) {
    var n = monthRe.exec(string2.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string2, i) {
    return parseSpecifier(d, locale_dateTime, string2, i);
  }
  function parseLocaleDate(d, string2, i) {
    return parseSpecifier(d, locale_date, string2, i);
  }
  function parseLocaleTime(d, string2, i) {
    return parseSpecifier(d, locale_time, string2, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f2 = newFormat(specifier += "", formats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f2 = newFormat(specifier += "", utcFormats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string2 = (sign2 ? -value : value) + "", length2 = string2.length;
  return sign2 + (length2 < width ? new Array(width - length2 + 1).join(fill) + string2 : string2);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string2, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string2.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string2, i) {
  var n = percentRe.exec(string2.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
var locale$1;
var timeFormat;
defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  locale$1.parse;
  locale$1.utcFormat;
  locale$1.utcParse;
  return locale$1;
}
function notNull(value) {
  return value != null;
}
function isSVGElement(elem) {
  return !!elem && (elem instanceof SVGElement || "ownerSVGElement" in elem);
}
function isSVGSVGElement(elem) {
  return !!elem && "createSVGPoint" in elem;
}
function isSVGGraphicsElement(elem) {
  return !!elem && "getScreenCTM" in elem;
}
function isTouchEvent(event) {
  return !!event && "changedTouches" in event;
}
function localPoint(event, node) {
  if (!node) {
    node = event.currentTarget ?? event.target;
  }
  if (!node || !event)
    return { x: 0, y: 0 };
  const coords = getPointFromEvent(event);
  const svg = isSVGElement(node) ? node.ownerSVGElement : node;
  const screenCTM = isSVGGraphicsElement(svg) ? svg.getScreenCTM() : null;
  if (isSVGSVGElement(svg) && screenCTM) {
    let point = svg.createSVGPoint();
    point.x = coords.x;
    point.y = coords.y;
    point = point.matrixTransform(screenCTM.inverse());
    return {
      x: point.x,
      y: point.y
    };
  }
  const rect = node.getBoundingClientRect();
  return {
    x: coords.x - rect.left - node.clientLeft,
    y: coords.y - rect.top - node.clientTop
  };
}
function getPointFromEvent(event) {
  if (!event)
    return { x: 0, y: 0 };
  if (isTouchEvent(event)) {
    return event.changedTouches.length > 0 ? {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    } : { x: 0, y: 0 };
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function getFormatNumber(settings, style) {
  const { numbers: numbers2 } = settings.formats;
  const styleSettings = style && style != "none" ? numbers2[style] : {};
  return {
    ...numbers2.defaults,
    ...styleSettings
  };
}
function formatNumberWithLocale(settings, number2, style, options = {}) {
  if (number2 == null) {
    return "";
  }
  if (style === "none") {
    return `${number2}`;
  }
  if (style == null) {
    style = Number.isInteger(number2) ? "integer" : "decimal";
  }
  const defaults = getFormatNumber(settings, style);
  const formatter = Intl.NumberFormat(settings.locale, {
    // Let's always starts with all defaults
    ...defaults,
    ...style !== "default" && {
      style
    },
    // Let's shorten min / max with fractionDigits
    ...{
      minimumFractionDigits: options.fractionDigits ?? defaults.fractionDigits,
      maximumFractionDigits: options.fractionDigits ?? defaults.fractionDigits
    },
    // now we bring in user specified options
    ...omitNil(options),
    ...style === "currencyRound" && {
      style: "currency",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    },
    // Let's overwrite for style=percentRound
    ...style === "percentRound" && {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    },
    // Let's overwrite for style=metric
    ...style === "metric" && {
      style: "decimal",
      notation: "compact",
      minimumFractionDigits: 0
    },
    // Let's overwrite for style=integer
    ...style === "integer" && {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  });
  const value = formatter.format(number2);
  let suffix = options.suffix ?? "";
  if (suffix && Math.abs(number2) >= 2 && options.suffixExtraIfMany !== "") {
    suffix += options.suffixExtraIfMany ?? "s";
  }
  return `${value}${suffix}`;
}
function format$1(value, formatOrConfig, options) {
  if (formatOrConfig && typeof formatOrConfig === "object" && "type" in formatOrConfig) {
    return formatWithLocale(defaultLocale$2, value, formatOrConfig.type, formatOrConfig.options);
  }
  return formatWithLocale(defaultLocale$2, value, formatOrConfig, options);
}
function formatWithLocale(settings, value, formatOrConfig, options) {
  const format2 = formatOrConfig && typeof formatOrConfig === "object" && "type" in formatOrConfig ? formatOrConfig.type : formatOrConfig;
  const formatOptions = formatOrConfig && typeof formatOrConfig === "object" && "type" in formatOrConfig && "options" in formatOrConfig ? formatOrConfig.options : options;
  if (typeof format2 === "function") {
    return format2(value);
  } else if (value instanceof Date || isStringDate(value) || format2 && (format2 in PeriodType || Object.values(periodTypeMappings).includes(format2))) {
    return formatDateWithLocale(settings, value, format2, formatOptions);
  } else if (typeof value === "number") {
    return formatNumberWithLocale(settings, value, format2, formatOptions);
  } else if (typeof value === "string") {
    return value;
  } else if (value == null) {
    return "";
  } else {
    return `${value}`;
  }
}
function sortFunc(value, direction = "asc") {
  const sortDirection = direction === "asc" ? 1 : -1;
  return (a, b) => {
    const valueFn = propAccessor(value);
    const aValue = valueFn(a);
    const bValue = valueFn(b);
    if (aValue == null || bValue == null) {
      if (aValue == null && bValue != null) {
        return -sortDirection;
      } else if (aValue != null && bValue == null) {
        return sortDirection;
      } else {
        return 0;
      }
    }
    return aValue < bValue ? -sortDirection : aValue > bValue ? sortDirection : 0;
  };
}
class MediaQueryPresets {
  width(width) {
    return new MediaQuery(`(min-width: ${width}px)`);
  }
  height(height) {
    return new MediaQuery(`(min-height: ${height}px)`);
  }
  // Matches tailwind defaults (https://tailwindcss.com/docs/responsive-design)
  smScreen = this.width(640);
  mdScreen = this.width(768);
  lgScreen = this.width(1024);
  xlScreen = this.width(1280);
  xxlScreen = this.width(1536);
  screen = new MediaQuery("screen and (min-width: 0)");
  // workaround for https://github.com/sveltejs/svelte/issues/15930
  print = new MediaQuery("print and (min-width: 0)");
  // workaround for https://github.com/sveltejs/svelte/issues/15930
  dark = new MediaQuery("(prefers-color-scheme: dark)");
  light = new MediaQuery("(prefers-color-scheme: light)");
  motion = new MediaQuery("(prefers-reduced-motion: no-preference)");
  motionReduce = new MediaQuery("(prefers-reduced-motion: reduce)");
  landscape = new MediaQuery("(orientation: landscape)");
  portrait = new MediaQuery("(orientation: portrait)");
}
class UniqueState {
  #initial;
  current;
  constructor(initial) {
    this.#initial = initial ?? [];
    this.current = new SvelteSet(initial ?? []);
  }
  /** Clear all values */
  clear() {
    this.current.clear();
  }
  /** Reset to initial values */
  reset() {
    this.clear();
    this.addEach(this.#initial);
  }
  /** Add a value */
  add(value) {
    this.current.add(value);
  }
  /** Add multiple values */
  addEach(values) {
    for (const value of values) {
      this.current.add(value);
    }
  }
  /** Remove a value */
  delete(value) {
    this.current.delete(value);
  }
  /** Toggle a value */
  toggle(value) {
    if (this.current.has(value)) {
      this.current.delete(value);
    } else {
      this.current.add(value);
    }
  }
}
class SelectionState {
  #initial;
  #selected;
  all;
  single;
  max;
  constructor(options = {}) {
    this.#initial = options.initial ?? [];
    this.#selected = new UniqueState(this.#initial);
    this.all = options.all ?? [];
    this.single = options.single ?? false;
    this.max = options.max;
  }
  get current() {
    return this.single ? Array.from(this.#selected.current)[0] ?? null : Array.from(this.#selected.current);
  }
  set current(values) {
    if (Array.isArray(values)) {
      if (this.max == null || values.length < this.max) {
        this.#selected.clear();
        this.#selected.addEach(values);
      } else {
        throw new Error(`Too many values selected.  Current: ${values.length}, max: ${this.max}`);
      }
    } else if (values != null) {
      this.#selected.clear();
      this.#selected.add(values);
    } else {
      this.#selected.clear();
    }
  }
  /** Check if a value is selected */
  isSelected(value) {
    return this.#selected.current.has(value);
  }
  /** Check if the selection is empty */
  isEmpty() {
    return this.#selected.current.size === 0;
  }
  /** Check if all values in `all` are selected */
  isAllSelected() {
    return this.all.every((v) => this.#selected.current.has(v));
  }
  /** Check if any values in `all` are selected */
  isAnySelected() {
    return this.all.some((v) => this.#selected.current.has(v));
  }
  /** Check if the selection is at the maximum */
  isMaxSelected() {
    return this.max != null ? this.#selected.current.size >= this.max : false;
  }
  /** Check if a value is disabled (max reached) */
  isDisabled(value) {
    return !this.isSelected(value) && this.isMaxSelected();
  }
  /** Clear all selected values */
  clear() {
    this.#selected.clear();
  }
  /** Reset to initial values */
  reset() {
    this.#selected.reset();
  }
  /** Toggle a value */
  toggle(value) {
    if (this.#selected.current.has(value)) {
      const prevSelected = [...this.#selected.current];
      this.#selected.clear();
      this.#selected.addEach(prevSelected.filter((v) => v != value));
    } else if (this.single) {
      this.#selected.clear();
      this.#selected.add(value);
    } else {
      if (this.max == null || this.#selected.current.size < this.max) {
        return this.#selected.add(value);
      }
    }
  }
  /** Toggle all values */
  toggleAll() {
    let values;
    if (this.isAllSelected()) {
      values = [...this.#selected.current].filter((v) => !this.all.includes(v));
    } else {
      values = [...this.#selected.current, ...this.all];
    }
    this.#selected.clear();
    this.#selected.addEach(values);
  }
}
function constant$1(x2) {
  return function constant2() {
    return x2;
  };
}
const abs$1 = Math.abs;
const atan2$2 = Math.atan2;
const cos$2 = Math.cos;
const max$1 = Math.max;
const min$1 = Math.min;
const sin$2 = Math.sin;
const sqrt$3 = Math.sqrt;
const epsilon$4 = 1e-12;
const pi$3 = Math.PI;
const halfPi$2 = pi$3 / 2;
const tau$3 = 2 * pi$3;
function acos$1(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi$3 : Math.acos(x2);
}
function asin$2(x2) {
  return x2 >= 1 ? halfPi$2 : x2 <= -1 ? -halfPi$2 : Math.asin(x2);
}
const pi$2 = Math.PI, tau$2 = 2 * pi$2, epsilon$3 = 1e-6, tauEpsilon = tau$2 - epsilon$3;
function append$1(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound$1(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append$1;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
let Path$1 = class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append$1 : appendRound$1(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x12, y12, x2, y2) {
    this._append`Q${+x12},${+y12},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x12, y12, x2, y2, x3, y3) {
    this._append`C${+x12},${+y12},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x12, y12, x2, y2, r) {
    x12 = +x12, y12 = +y12, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x02 = this._x1, y02 = this._y1, x21 = x2 - x12, y21 = y2 - y12, x01 = x02 - x12, y01 = y02 - y12, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x12},${this._y1 = y12}`;
    } else if (!(l01_2 > epsilon$3)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$3) || !r) {
      this._append`L${this._x1 = x12},${this._y1 = y12}`;
    } else {
      let x20 = x2 - x02, y20 = y2 - y02, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon$3) {
        this._append`L${x12 + t01 * x01},${y12 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x12 + t21 * x21},${this._y1 = y12 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x02 = x2 + dx, y02 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x02},${y02}`;
    } else if (Math.abs(this._x1 - x02) > epsilon$3 || Math.abs(this._y1 - y02) > epsilon$3) {
      this._append`L${x02},${y02}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau$2 + tau$2;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x02},${this._y1 = y02}`;
    } else if (da > epsilon$3) {
      this._append`A${r},${r},0,${+(da >= pi$2)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path$1();
}
path.prototype = Path$1.prototype;
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path$1(digits);
}
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x02, y02, x12, y12, x2, y2, x3, y3) {
  var x10 = x12 - x02, y10 = y12 - y02, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon$4) return;
  t = (x32 * (y02 - y2) - y32 * (x02 - x2)) / t;
  return [x02 + t * x10, y02 + t * y10];
}
function cornerTangents(x02, y02, x12, y12, r1, rc, cw) {
  var x01 = x02 - x12, y01 = y02 - y12, lo = (cw ? rc : -rc) / sqrt$3(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x02 + ox, y11 = y02 + oy, x10 = x12 + ox, y10 = y12 + oy, x002 = (x11 + x10) / 2, y002 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt$3(max$1(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x002, dy0 = cy0 - y002, dx1 = cx1 - x002, dy1 = cy1 - y002;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function d3arc() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant$1(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc);
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi$2, a1 = endAngle.apply(this, arguments) - halfPi$2, da = abs$1(a1 - a0), cw = a1 > a0;
    if (!context) context = buffer = path2();
    if (r1 < r0) r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon$4)) context.moveTo(0, 0);
    else if (da > tau$3 - epsilon$4) {
      context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$4) {
        context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon$4 && (padRadius ? +padRadius.apply(this, arguments) : sqrt$3(r0 * r0 + r1 * r1)), rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
      if (rp > epsilon$4) {
        var p0 = asin$2(rp / r0 * sin$2(ap)), p1 = asin$2(rp / r1 * sin$2(ap));
        if ((da0 -= p0 * 2) > epsilon$4) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$4) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos$2(a01), y01 = r1 * sin$2(a01), x10 = r0 * cos$2(a10), y10 = r0 * sin$2(a10);
      if (rc > epsilon$4) {
        var x11 = r1 * cos$2(a11), y11 = r1 * sin$2(a11), x002 = r0 * cos$2(a00), y002 = r0 * sin$2(a00), oc;
        if (da < pi$3) {
          if (oc = intersect(x01, y01, x002, y002, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin$2(acos$1((ax * bx + ay * by) / (sqrt$3(ax * ax + ay * ay) * sqrt$3(bx * bx + by * by))) / 2), lc = sqrt$3(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min$1(rc, (r0 - lc) / (kc - 1));
            rc1 = min$1(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon$4)) context.moveTo(x01, y01);
      else if (rc1 > epsilon$4) {
        t0 = cornerTangents(x002, y002, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2$2(t0.y01, t0.x01), atan2$2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2$2(t0.y01, t0.x01), atan2$2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2$2(t0.cy + t0.y11, t0.cx + t0.x11), atan2$2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2$2(t1.y11, t1.x11), atan2$2(t1.y01, t1.x01), !cw);
        }
      } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon$4) || !(da0 > epsilon$4)) context.lineTo(x10, y10);
      else if (rc0 > epsilon$4) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x002, y002, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2$2(t0.y01, t0.x01), atan2$2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2$2(t0.y01, t0.x01), atan2$2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2$2(t0.cy + t0.y11, t0.cx + t0.x11), atan2$2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2$2(t1.y11, t1.x11), atan2$2(t1.y01, t1.x01), !cw);
        }
      } else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$3 / 2;
    return [cos$2(a) * r, sin$2(a) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}
function array(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function curveLinear(context) {
  return new Linear(context);
}
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}
function d3Line(x$1, y$1) {
  var defined = constant$1(true), context = null, curve = curveLinear, output = null, path2 = withPath(line);
  x$1 = typeof x$1 === "function" ? x$1 : x$1 === void 0 ? x : constant$1(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : y$1 === void 0 ? y : constant$1(y$1);
  function line(data) {
    var i, n = (data = array(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$1(+_), line) : x$1;
  };
  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), line) : y$1;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}
var curveRadialLinear = curveRadial(curveLinear);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}
function lineRadial(l) {
  var c = l.curve;
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  l.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };
  return l;
}
function lineRadial$1() {
  return lineRadial(d3Line().curve(curveRadialLinear));
}
function pointRadial(x2, y2) {
  return [(y2 = +y2) * Math.cos(x2 -= Math.PI / 2), y2 * Math.sin(x2)];
}
class Bump {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x2, y2);
        else this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
}
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}
function noop$1() {
}
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};
function curveLinearClosed(context) {
  return new LinearClosed(context);
}
function stackOffsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}
function none(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack() {
  var keys2 = constant$1([]), order = none, offset = stackOffsetNone, value = stackValue;
  function stack2(data) {
    var sz = Array.from(keys2.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }
    for (i = 0, oz = array(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack2.keys = function(_) {
    return arguments.length ? (keys2 = typeof _ === "function" ? _ : constant$1(Array.from(_)), stack2) : keys2;
  };
  stack2.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), stack2) : value;
  };
  stack2.order = function(_) {
    return arguments.length ? (order = _ == null ? none : typeof _ === "function" ? _ : constant$1(Array.from(_)), stack2) : order;
  };
  stack2.offset = function(_) {
    return arguments.length ? (offset = _ == null ? stackOffsetNone : _, stack2) : offset;
  };
  return stack2;
}
function stackOffsetExpand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    if (y2) for (i = 0; i < n; ++i) series[i][j][1] /= y2;
  }
  stackOffsetNone(series, order);
}
function stackOffsetDiverging(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range$2(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2) h = (g - b) / s + (g < b) * 6;
    else if (g === max2) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
const constant = (x2) => () => x2;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
}
const rgb = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start, end) {
    var r = color2((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x2[i](t);
    return c;
  };
}
function date$1(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object$1(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object$1 : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
function quantize(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}
function constants(x2) {
  return function() {
    return x2;
  };
}
function number$1(x2) {
  return +x2;
}
var unit = [0, 1];
function identity$3(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain, range2, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range2, interpolate2) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range2[i], range2[i + 1]);
  }
  return function(x2) {
    var i2 = bisectRight(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer$1() {
  var domain = unit, range2 = unit, interpolate$1 = interpolate, transform, untransform, unknown, clamp = identity$3, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity$3) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform), range2, interpolate$1)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise(range2, domain.map(transform), interpolateNumber)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$3, rescale()) : clamp !== identity$3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u2) {
    transform = t, untransform = u2;
    return rescale();
  };
}
function continuous() {
  return transformer$1()(identity$3, identity$3);
}
function formatDecimal(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}
function exponent(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
    while (i > 0 && g > 0) {
      if (length2 + g + 1 > width) g = Math.max(1, width - length2);
      t.push(value.substring(i -= g, i + g));
      if ((length2 += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}
function formatRounded(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded(x2 * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};
function identity$2(x2) {
  return x2;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$2 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$2 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=") zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2) value = group(value, Infinity);
      var length2 = valuePrefix.length + value.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill) : "";
      if (comma && zero2) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length2);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f2(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max2) {
  step = Math.abs(step), max2 = Math.abs(max2) - step;
  return Math.max(0, exponent(max2) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x02 = domain[i0], x12 = domain[i1], t;
  if (x12 < x02) {
    t = i0, i0 = i1, i1 = t;
    t = x02, x02 = x12, x12 = t;
  }
  domain[i0] = interval.floor(x02);
  domain[i1] = interval.ceil(x12);
  return domain;
}
function transformPow(exponent2) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent2) : Math.pow(x2, exponent2);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity$3, identity$3), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform(identity$3, identity$3) : exponent2 === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
  };
  return linearish(scale);
}
function pow$2() {
  var scale = powish(transformer$1());
  scale.copy = function() {
    return copy(scale, pow$2()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt$2() {
  return pow$2.apply(null, arguments).exponent(0.5);
}
function date(t) {
  return new Date(t);
}
function number(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function degreesToRadians(degrees2) {
  return degrees2 * Math.PI / 180;
}
function radiansToDegrees(radians2) {
  return radians2 * (180 / Math.PI);
}
function cartesianToPolar(x2, y2) {
  let radians2 = Math.atan2(y2, x2);
  radians2 += Math.PI / 2;
  if (radians2 < 0) {
    radians2 += 2 * Math.PI;
  }
  return {
    radius: Math.sqrt(x2 ** 2 + y2 ** 2),
    radians: radians2
  };
}
function accessor(prop) {
  if (Array.isArray(prop)) {
    return (d) => prop.map((p) => accessor(p)(d));
  } else if (typeof prop === "function") {
    return prop;
  } else if (typeof prop === "string" || typeof prop === "number") {
    return (d) => get(d, prop);
  } else {
    return (d) => d;
  }
}
function chartDataArray(data) {
  if (data == null) {
    return [];
  } else if (Array.isArray(data)) {
    return data;
  } else if ("nodes" in data) {
    return data.nodes;
  } else if ("descendants" in data) {
    return data.descendants();
  }
  return [];
}
function defaultChartPadding(axis = true, legend = false) {
  if (axis === false) {
    return void 0;
  } else {
    return {
      top: axis === true || axis === "y" ? 4 : 0,
      left: axis === true || axis === "y" ? 20 : 0,
      bottom: (axis === true || axis === "x" ? 20 : 0) + (legend === true ? 32 : 0),
      right: axis === true || axis === "x" ? 4 : 0
    };
  }
}
function findRelatedData(data, original, accessor2) {
  return data.find((d) => {
    return accessor2(d)?.valueOf() === accessor2(original)?.valueOf();
  });
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  return arr1.every((k) => {
    return arr2.includes(k);
  });
}
function calcDomain(s, extents, domain) {
  return extents ? partialDomain(extents[s], domain) : domain;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function createChartScale(axis, { domain, scale, padding, nice: nice2, reverse, width, height, range: range2, percentRange }) {
  const defaultRange = getDefaultRange(axis, width, height, reverse, range2, percentRange);
  const trueScale = scale.copy();
  trueScale.domain(domain);
  if (!trueScale.interpolator || typeof trueScale.interpolator === "function" && trueScale.interpolator().name.startsWith("identity")) {
    trueScale.range(defaultRange);
  }
  if (padding) {
    trueScale.domain(padScale(trueScale, padding));
  }
  if (nice2 === true || typeof nice2 === "number") {
    if (typeof trueScale.nice === "function") {
      trueScale.nice(typeof nice2 === "number" ? nice2 : void 0);
    } else {
      console.error(`[Layer Chart] You set \`${axis}Nice: true\` but the ${axis}Scale does not have a \`.nice\` method. Ignoring...`);
    }
  }
  return trueScale;
}
const unpaddable = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function padScale(scale, padding) {
  if (typeof scale.range !== "function") {
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding) || unpaddable.includes(findScaleName(scale))) {
    return scale.domain();
  }
  if (isOrdinalDomain(scale) === true)
    return scale.domain();
  const { lift, ground } = getPadFunctions(scale);
  const d0 = scale.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d).getTime()) : ground(d);
  });
}
function f(name, modifier = "") {
  return `scale${toTitleCase(modifier)}${toTitleCase(name)}`;
}
function findScaleName(scale) {
  if (typeof scale.bandwidth === "function") {
    if (typeof scale.paddingInner === "function") {
      return f("band");
    }
    return f("point");
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return f("ordinal");
  }
  let modifier = "";
  if (scale.interpolator) {
    if (scale.domain().length === 3) {
      modifier = "diverging";
    } else {
      modifier = "sequential";
    }
  }
  if (scale.quantiles) {
    return f("quantile", modifier);
  }
  if (scale.thresholds) {
    return f("quantize", modifier);
  }
  if (scale.constant) {
    return f("symlog", modifier);
  }
  if (scale.base) {
    return f("log", modifier);
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return f("sqrt", modifier);
    }
    return f("pow", modifier);
  }
  if (arraysEqual(Object.keys(scale), ["domain", "range", "invertExtent", "unknown", "copy"])) {
    return f("threshold");
  }
  if (arraysEqual(Object.keys(scale), [
    "invert",
    "range",
    "domain",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ])) {
    return f("identity");
  }
  if (arraysEqual(Object.keys(scale), [
    "invert",
    "domain",
    "range",
    "rangeRound",
    "round",
    "clamp",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ])) {
    return f("radial");
  }
  if (modifier) {
    return f(modifier);
  }
  if (scale.domain()[0] instanceof Date) {
    const d = /* @__PURE__ */ new Date();
    let s = "";
    d.getDay = () => s = "time";
    d.getUTCDay = () => s = "utc";
    scale.tickFormat(0, "%a")(d);
    return f(s);
  }
  return f("linear");
}
function isOrdinalDomain(scale) {
  if (typeof scale.bandwidth === "function")
    return true;
  if (arraysEqual(Object.keys(scale), ["domain", "range", "unknown", "copy"])) {
    return true;
  }
  return false;
}
function calcScaleExtents(flatData, getters, activeScales) {
  const scaleGroups = Object.entries(activeScales).reduce((groups, [key, scaleInfo]) => {
    const domainType = isOrdinalDomain(scaleInfo.scale) === true ? "ordinal" : "other";
    if (!groups[domainType]) {
      groups[domainType] = {};
    }
    groups[domainType][key] = getters[key];
    return groups;
  }, { ordinal: false, other: false });
  let extents = {};
  if (scaleGroups.ordinal) {
    const sortOptions = Object.fromEntries(Object.entries(activeScales).map(([key, scaleInfo]) => [key, scaleInfo.sort]));
    extents = calcUniques(flatData, scaleGroups.ordinal, sortOptions);
  }
  if (scaleGroups.other) {
    const otherExtents = calcExtents(flatData, scaleGroups.other);
    extents = { ...extents, ...otherExtents };
  }
  return extents;
}
function calcUniques(data, fields, sortOptions = {}) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof data}. If you got this error using the <Chart> component, consider passing a flat array to the \`flatData\` prop`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys and accessor functions as values.");
  }
  const uniques = {};
  const keys2 = Object.keys(fields);
  for (const key of keys2) {
    const set2 = new InternSet();
    const accessor2 = fields[key];
    if (!accessor2)
      continue;
    for (const item of data) {
      const value = accessor2(item);
      if (Array.isArray(value)) {
        for (const val of value) {
          set2.add(val);
        }
      } else {
        set2.add(value);
      }
    }
    const results = Array.from(set2);
    if (sortOptions.sort === true || sortOptions[key] === true) {
      results.sort((a, b) => {
        if (typeof a === "number" && typeof b === "number") {
          return a - b;
        }
        return String(a).localeCompare(String(b));
      });
    }
    uniques[key] = results;
  }
  return uniques;
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min2;
  let max2;
  if (percentRange === true) {
    min2 = 0;
    max2 = 100;
  } else {
    min2 = s === "r" ? 1 : 0;
    max2 = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max2, min2] : [min2, max2];
}
function getDefaultRange(s, width, height, reverse, range2, percentRange = false) {
  return !range2 ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range2 === "function" ? range2({ width, height }) : range2;
}
function identity$1(d) {
  return d;
}
function findScaleType(scale) {
  if (scale.constant) {
    return "symlog";
  }
  if (scale.base) {
    return "log";
  }
  if (typeof scale.exponent === "function") {
    const expValue = scale.exponent();
    if (expValue === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function log(sign2) {
  return (x2) => Math.log(sign2 * x2);
}
function exp(sign2) {
  return (x2) => sign2 * Math.exp(x2);
}
function symlog(c) {
  return (x2) => Math.sign(x2) * Math.log1p(Math.abs(x2 / c));
}
function symexp(c) {
  return (x2) => Math.sign(x2) * Math.expm1(Math.abs(x2)) * c;
}
function pow$1(exponent2) {
  return function powFn(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent2) : Math.pow(x2, exponent2);
  };
}
function getPadFunctions(scale) {
  const scaleType = findScaleType(scale);
  switch (scaleType) {
    case "log": {
      const domain = scale.domain();
      const sign2 = Math.sign(domain[0]);
      return { lift: log(sign2), ground: exp(sign2), scaleType };
    }
    case "pow": {
      const exponent2 = 1;
      return {
        lift: pow$1(exponent2),
        ground: pow$1(1 / exponent2),
        scaleType
      };
    }
    case "sqrt": {
      const exponent2 = 0.5;
      return {
        lift: pow$1(exponent2),
        ground: pow$1(1 / exponent2),
        scaleType
      };
    }
    case "symlog": {
      const constant2 = 1;
      return {
        lift: symlog(constant2),
        ground: symexp(constant2),
        scaleType
      };
    }
    default:
      return {
        lift: identity$1,
        ground: identity$1,
        scaleType
      };
  }
}
function createGetter(accessor2, scale) {
  return (d) => {
    const val = accessor2(d);
    if (!scale)
      return void 0;
    if (Array.isArray(val)) {
      return val.map((v) => scale(v));
    }
    return scale(val);
  };
}
function calcExtents(data, fields) {
  if (!Array.isArray(data)) {
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof data}. If you got this error using the <Chart> component, consider passing a flat array to the \`flatData\` prop.`);
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  }
  const extents = {};
  const keys2 = Object.keys(fields);
  const kl = keys2.length;
  let i;
  let j;
  let k;
  let s;
  let min2;
  let max2;
  let acc;
  let val;
  const dl = data.length;
  for (i = 0; i < kl; i += 1) {
    s = keys2[i];
    acc = fields[s];
    min2 = null;
    max2 = null;
    if (!acc)
      continue;
    for (j = 0; j < dl; j += 1) {
      val = acc(data[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== void 0 && val[k] !== null && (typeof val[k] === "string" || Number.isNaN(val[k]) === false)) {
            if (min2 === null || val[k] < min2) {
              min2 = val[k];
            }
            if (max2 === null || val[k] > max2) {
              max2 = val[k];
            }
          }
        }
      } else if (val !== void 0 && val !== null && (typeof val === "string" || Number.isNaN(val) === false)) {
        if (min2 === null || val < min2) {
          min2 = val;
        }
        if (max2 === null || val > max2) {
          max2 = val;
        }
      }
    }
    extents[s] = [min2, max2];
  }
  return extents;
}
function raise(node) {
  if (node.nextSibling) {
    node.parentNode?.appendChild(node);
  }
}
const indent = "    ";
function printObject(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${indent}${key}:`, value);
  });
}
function getRgb(clr) {
  const { r, g, b, opacity: o } = rgb$1(clr);
  if (![r, g, b].every((c) => c >= 0 && c <= 255)) {
    return false;
  }
  return { r, g, b, o };
}
function printValues(scale, method, extraSpace = "") {
  const values = scale[method]();
  const colorValues = colorizeArray(values);
  if (colorValues) {
    printColorArray(colorValues, method, values);
  } else {
    console.log(`${indent}${indent}${toTitleCase(method)}:${extraSpace}`, values);
  }
}
function printColorArray(colorValues, method, values) {
  console.log(`${indent}${indent}${toTitleCase(method)}:    %cArray%c(${values.length}) ` + colorValues[0] + "%c ]", "color: #1377e4", "color: #737373", "color: #1478e4", ...colorValues[1], "color: #1478e4");
}
function colorizeArray(arr) {
  const colors = [];
  const a = arr.map((d, i) => {
    const rgbo = getRgb(d);
    if (rgbo !== false) {
      colors.push(rgbo);
      const space = i === arr.length - 1 ? " " : "";
      return `%c ${d}${space}`;
    }
    return d;
  });
  if (colors.length) {
    return [
      `%c[ ${a.join(", ")}`,
      colors.map((d) => `background-color: rgba(${d.r}, ${d.g}, ${d.b}, ${d.o}); color:${contrast(d)};`)
    ];
  }
  return null;
}
function printScale(s, scale, acc) {
  const scaleName = findScaleName(scale);
  console.log(`${indent}${s}:`);
  console.log(`${indent}${indent}Accessor: "${acc.toString()}"`);
  console.log(`${indent}${indent}Type: ${scaleName}`);
  printValues(scale, "domain");
  printValues(scale, "range", " ");
}
function contrast({ r, g, b }) {
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "black" : "white";
}
function printDebug(obj) {
  console.log("/********* LayerChart Debug ************/");
  console.log("Bounding box:");
  printObject(obj.boundingBox);
  console.log("Data:");
  console.log(indent, obj.data);
  if (obj.flatData) {
    console.log("flatData:");
    console.log(indent, obj.flatData);
  }
  console.log("Scales:");
  Object.keys(obj.activeGetters).forEach((g) => {
    printScale(g, obj[`${g}Scale`], obj[g]);
  });
  console.log("/************ End LayerChart Debug ***************/\n");
}
function filterObject(obj, comparisonObj = {}) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== void 0 && comparisonObj[key] === void 0;
  }));
}
class MotionSpring extends Spring {
  type = "spring";
  constructor(value, options) {
    super(value, options);
  }
}
class MotionTween extends Tween {
  type = "tween";
  constructor(value, options) {
    super(value, options);
  }
}
class MotionNone {
  type = "none";
  #current = null;
  #target = null;
  constructor(value, _options = {}) {
    this.#current = value;
    this.#target = value;
  }
  /**
   * Updates the value immediately and returns a resolved promise
   * to maintain API compatibility with animated motion classes
   */
  set(value, _options = {}) {
    this.#current = value;
    this.#target = value;
    return Promise.resolve();
  }
  get current() {
    return this.#current;
  }
  get target() {
    return this.#target;
  }
  set target(v) {
    this.set(v);
  }
}
function setupTracking(motion, getValue, options) {
  if (options.controlled) return;
}
function createMotion(initialValue, getValue, motionProp, options = {}) {
  const motion = parseMotionProp(motionProp);
  const motionState = motion.type === "spring" ? new MotionSpring(initialValue, motion.options) : motion.type === "tween" ? new MotionTween(initialValue, motion.options) : new MotionNone(initialValue);
  setupTracking(motionState, getValue, options);
  return motionState;
}
function createControlledMotion(initialValue, motionProp) {
  return createMotion(initialValue, () => initialValue, motionProp, { controlled: true });
}
function createMotionTracker() {
  let latestIndex = 0;
  let current = false;
  function handle(promise) {
    latestIndex += 1;
    if (!promise) {
      current = false;
      return;
    }
    let currIndex = latestIndex;
    current = true;
    promise.then(() => {
      if (currIndex === latestIndex) {
        current = false;
      }
    }).catch(() => {
    });
  }
  return {
    handle,
    get current() {
      return current;
    }
  };
}
function extractTweenConfig(prop) {
  const resolved = parseMotionProp(prop);
  if (resolved.type === "tween") return resolved;
}
function parseMotionProp(config, accessor2) {
  if (typeof config === "object" && "type" in config && "options" in config) {
    if (typeof config.options === "object") return config;
    return { type: config.type, options: {} };
  }
  if (config === void 0) return { type: "none", options: {} };
  if (typeof config === "string") {
    if (config === "spring") {
      return { type: "spring", options: {} };
    } else if (config === "tween") {
      return { type: "tween", options: {} };
    }
    return { type: "none", options: {} };
  }
  if (typeof config === "object" && "type" in config) {
    if (config.type === "spring") {
      const { type, ...options } = config;
      return { type: "spring", options };
    } else if (config.type === "tween") {
      const { type, ...options } = config;
      return { type: "tween", options };
    } else {
      return { type: "none", options: {} };
    }
  }
  if (accessor2) {
    const propConfig = config[accessor2];
    if (propConfig !== void 0) {
      return parseMotionProp(propConfig);
    }
  }
  return { type: "none", options: {} };
}
function isAnyScale(scale) {
  return typeof scale === "function" && typeof scale.range === "function";
}
function isScaleBand(scale) {
  return typeof scale.bandwidth === "function";
}
function isScaleTime(scale) {
  const domain = scale.domain();
  return domain[0] instanceof Date || domain[1] instanceof Date;
}
function getRange(scale) {
  if (isAnyScale(scale)) {
    return scale.range();
  }
  console.error("[LayerChart] Your scale doesn't have a `.range` method?");
  return [];
}
function scaleBandInvert(scale) {
  const domain = scale.domain();
  const eachBand = scale.step();
  const paddingOuter = eachBand * (scale.paddingOuter?.() ?? scale.padding());
  return function(value) {
    const index = Math.floor((value - paddingOuter / 2) / eachBand);
    return domain[Math.max(0, Math.min(index, domain.length - 1))];
  };
}
function scaleInvert(scale, value) {
  if (isScaleBand(scale)) {
    return scaleBandInvert(scale)(value);
  } else {
    return scale.invert?.(value);
  }
}
function createScale(scale, domain, range2, context) {
  const scaleCopy = scale.copy();
  if (domain) {
    scaleCopy.domain(domain);
  }
  if (typeof range2 === "function") {
    scaleCopy.range(range2(context));
  } else {
    scaleCopy.range(range2);
  }
  return scaleCopy;
}
function canBeZero(val) {
  if (val === 0) return true;
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc)) return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function isFunction(value) {
  return typeof value === "function";
}
function extract(value, defaultValue) {
  if (isFunction(value)) {
    const getter = value;
    const gotten = getter();
    if (gotten === void 0) return defaultValue;
    return gotten;
  }
  if (value === void 0) return defaultValue;
  return value;
}
function useDebounce(callback, wait) {
  let context = null;
  const wait$ = extract(wait, 250);
  function debounced(...args) {
    if (context) {
      if (context.timeout) {
        clearTimeout(context.timeout);
      }
    } else {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      context = { timeout: null, runner: null, promise, resolve, reject };
    }
    context.runner = async () => {
      if (!context) return;
      const ctx = context;
      context = null;
      try {
        ctx.resolve(await callback.apply(this, args));
      } catch (error) {
        ctx.reject(error);
      }
    };
    context.timeout = setTimeout(context.runner, wait$);
    return context.promise;
  }
  debounced.cancel = async () => {
    if (!context || context.timeout === null) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || context.timeout === null) return;
    }
    clearTimeout(context.timeout);
    context.reject("Cancelled");
    context = null;
  };
  debounced.runScheduledNow = async () => {
    if (!context || !context.timeout) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || !context.timeout) return;
    }
    clearTimeout(context.timeout);
    context.timeout = null;
    await context.runner?.();
  };
  Object.defineProperty(debounced, "pending", {
    enumerable: true,
    get() {
      return !!context?.timeout;
    }
  });
  return debounced;
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow } = options;
  let observer;
  (() => {
    const value = extract(target);
    return new Set(value ? Array.isArray(value) ? value : [value] : []);
  })();
  const stop = () => {
  };
  return {
    stop,
    takeRecords() {
      return observer?.takeRecords();
    }
  };
}
function layerClass(layerName) {
  return `lc-${layerName}`;
}
function isObjectWithClass(val) {
  return typeof val === "object" && val !== null && typeof val !== "function";
}
function extractLayerProps(props, layerName, extraClasses) {
  const className = layerClass(layerName);
  if (isObjectWithClass(props)) {
    return {
      ...props,
      class: cls(className, props.class ?? "", extraClasses)
    };
  }
  return {
    class: cls(className, extraClasses)
  };
}
const DEFAULT_TRANSLATE = { x: 0, y: 0 };
const DEFAULT_SCALE = 1;
const _TransformContext = new Context("TransformContext");
function createDefaultTransformContext() {
  let defaultTranslate = DEFAULT_TRANSLATE;
  let defaultScale = DEFAULT_SCALE;
  const defaultContext = {
    mode: "none",
    get scale() {
      return defaultScale;
    },
    setScale: (value) => {
      defaultScale = value;
    },
    get translate() {
      return defaultTranslate;
    },
    setTranslate: (value) => {
      defaultTranslate = value;
    },
    moving: false,
    dragging: false,
    scrollMode: "none",
    setScrollMode: () => {
    },
    reset: () => {
    },
    zoomIn: () => {
    },
    zoomOut: () => {
    },
    translateCenter: () => {
    },
    zoomTo: () => {
    }
  };
  return defaultContext;
}
function getTransformContext() {
  return _TransformContext.getOr(createDefaultTransformContext());
}
function setTransformContext(transform) {
  return _TransformContext.set(transform);
}
function TransformContext($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      mode = "none",
      motion,
      processTranslate = (x2, y2, deltaX, deltaY) => ({ x: x2 + deltaX, y: y2 + deltaY }),
      disablePointer = false,
      initialScrollMode = "none",
      clickDistance = 10,
      ondragend = () => {
      },
      ondragstart = () => {
      },
      onTransform = () => {
      },
      initialTranslate,
      initialScale,
      onwheel = () => {
      },
      onpointerdown = () => {
      },
      onpointermove = () => {
      },
      ontouchmove = () => {
      },
      onpointerup = () => {
      },
      ondblclick = () => {
      },
      onclickcapture = () => {
      },
      ref: refProp = void 0,
      children,
      class: className,
      transformContext = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    transformContext = {
      get mode() {
        return mode;
      },
      get scale() {
        return scale.current;
      },
      setScale,
      get translate() {
        return translate.current;
      },
      setTranslate,
      get dragging() {
        return dragging;
      },
      get moving() {
        return moving;
      },
      reset,
      zoomIn,
      zoomOut,
      translateCenter,
      zoomTo,
      get scrollMode() {
        return scrollMode;
      },
      setScrollMode
    };
    const ctx = getChartContext();
    let dragging = false;
    let scrollMode = initialScrollMode;
    const resolvedMotion = parseMotionProp(motion);
    const translate = createControlledMotion(initialTranslate ?? DEFAULT_TRANSLATE, resolvedMotion);
    const scale = createControlledMotion(initialScale ?? DEFAULT_SCALE, resolvedMotion);
    function setScrollMode(mode2) {
      scrollMode = mode2;
    }
    function reset() {
      translate.target = initialTranslate ?? DEFAULT_TRANSLATE;
      scale.target = initialScale ?? DEFAULT_SCALE;
    }
    function zoomIn() {
      scaleTo(1.25, {
        x: (ctx.width + ctx.padding.left) / 2,
        y: (ctx.height + ctx.padding.top) / 2
      });
    }
    function zoomOut() {
      scaleTo(0.8, {
        x: (ctx.width + ctx.padding.left) / 2,
        y: (ctx.height + ctx.padding.top) / 2
      });
    }
    function translateCenter() {
      translate.target = { x: 0, y: 0 };
    }
    function zoomTo(center, rect) {
      const newScale = rect ? ctx.width < ctx.height ? ctx.width / rect.width : ctx.height / rect.height : 1;
      translate.target = {
        x: ctx.width / 2 - center.x * newScale,
        y: ctx.height / 2 - center.y * newScale
      };
      if (rect) {
        scale.target = newScale;
      }
    }
    function scaleTo(value, point, options = void 0) {
      const currentScale = scale.current;
      const newScale = scale.current * value;
      setScale(newScale, options);
      const invertTransformPoint = {
        x: (point.x - ctx.padding.left - translate.current.x) / currentScale,
        y: (point.y - ctx.padding.top - translate.current.y) / currentScale
      };
      const newTranslate = {
        x: point.x - ctx.padding.left - invertTransformPoint.x * newScale,
        y: point.y - ctx.padding.top - invertTransformPoint.y * newScale
      };
      setTranslate(newTranslate, options);
    }
    const translating = createMotionTracker();
    const scaling = createMotionTracker();
    const moving = dragging || translating.current || scaling.current;
    function setTranslate(point, options) {
      translating.handle(translate.set(point, options));
    }
    function setScale(value, options) {
      scaling.handle(scale.set(value, options));
    }
    watch([() => scale.current, () => translate.current], () => {
      onTransform({ scale: scale.current, translate: translate.current });
    });
    setTransformContext(transformContext);
    $$renderer2.push(`<div${attributes({
      class: clsx(
        // Touch events cause pointer events to be interrupted.
        // Typically `touch-action: none` works, but doesn't appear to with SVG, but `preventDefault()` works here
        // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#touch-action_css_property
        cls(layerClass("transform-context"), "h-full", className)
      ),
      ...restProps
    })}>`);
    children?.($$renderer2, { transformContext });
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, {
      ref: refProp,
      transformContext,
      setScrollMode,
      reset,
      zoomIn,
      zoomOut,
      translateCenter,
      zoomTo,
      setTranslate,
      setScale
    });
  });
}
const _GeoContext = new Context("GeoContext");
function getGeoContext() {
  return _GeoContext.getOr({ projection: void 0 });
}
function setGeoContext(geo) {
  return _GeoContext.set(geo);
}
function GeoContext($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      projection: projectionProp,
      fitGeojson,
      fixedAspectRatio,
      clipAngle,
      clipExtent,
      rotate,
      scale,
      translate,
      center,
      applyTransform = [],
      reflectX,
      reflectY,
      geoContext: geoContextProp = void 0,
      children
    } = $$props;
    const ctx = getChartContext();
    getTransformContext();
    let projection2 = void 0;
    const geoContext = {
      get projection() {
        return projection2;
      },
      set projection(v) {
        projection2 = v;
      }
    };
    geoContextProp = geoContext;
    setGeoContext(geoContext);
    fixedAspectRatio ? [100, 100 / fixedAspectRatio] : [ctx.width, ctx.height];
    children($$renderer2, { geoContext });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { geoContext: geoContextProp });
  });
}
function tree_add(d) {
  const x2 = +this._x.call(null, d), y2 = +this._y.call(null, d);
  return add(this.cover(x2, y2), x2, y2, d);
}
function add(tree, x2, y2, d) {
  if (isNaN(x2) || isNaN(y2)) return tree;
  var parent, node = tree._root, leaf = { data: d }, x02 = tree._x0, y02 = tree._y0, x12 = tree._x1, y12 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x2 >= (xm = (x02 + x12) / 2)) x02 = xm;
    else x12 = xm;
    if (bottom = y2 >= (ym = (y02 + y12) / 2)) y02 = ym;
    else y12 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x2 === xp && y2 === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x2 >= (xm = (x02 + x12) / 2)) x02 = xm;
    else x12 = xm;
    if (bottom = y2 >= (ym = (y02 + y12) / 2)) y02 = ym;
    else y12 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d, i, n = data.length, x2, y2, xz = new Array(n), yz = new Array(n), x02 = Infinity, y02 = Infinity, x12 = -Infinity, y12 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x2 = +this._x.call(null, d = data[i])) || isNaN(y2 = +this._y.call(null, d))) continue;
    xz[i] = x2;
    yz[i] = y2;
    if (x2 < x02) x02 = x2;
    if (x2 > x12) x12 = x2;
    if (y2 < y02) y02 = y2;
    if (y2 > y12) y12 = y2;
  }
  if (x02 > x12 || y02 > y12) return this;
  this.cover(x02, y02).cover(x12, y12);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}
function tree_cover(x2, y2) {
  if (isNaN(x2 = +x2) || isNaN(y2 = +y2)) return this;
  var x02 = this._x0, y02 = this._y0, x12 = this._x1, y12 = this._y1;
  if (isNaN(x02)) {
    x12 = (x02 = Math.floor(x2)) + 1;
    y12 = (y02 = Math.floor(y2)) + 1;
  } else {
    var z = x12 - x02 || 1, node = this._root, parent, i;
    while (x02 > x2 || x2 >= x12 || y02 > y2 || y2 >= y12) {
      i = (y2 < y02) << 1 | x2 < x02;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x12 = x02 + z, y12 = y02 + z;
          break;
        case 1:
          x02 = x12 - z, y12 = y02 + z;
          break;
        case 2:
          x12 = x02 + z, y02 = y12 - z;
          break;
        case 3:
          x02 = x12 - z, y02 = y12 - z;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x02;
  this._y0 = y02;
  this._x1 = x12;
  this._y1 = y12;
  return this;
}
function tree_data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}
function tree_extent(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Quad(node, x02, y02, x12, y12) {
  this.node = node;
  this.x0 = x02;
  this.y0 = y02;
  this.x1 = x12;
  this.y1 = y12;
}
function tree_find(x2, y2, radius) {
  var data, x02 = this._x0, y02 = this._y0, x12, y12, x22, y22, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
  if (node) quads.push(new Quad(node, x02, y02, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x02 = x2 - radius, y02 = y2 - radius;
    x3 = x2 + radius, y3 = y2 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x12 = q.x0) > x3 || (y12 = q.y0) > y3 || (x22 = q.x1) < x02 || (y22 = q.y1) < y02) continue;
    if (node.length) {
      var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
      quads.push(
        new Quad(node[3], xm, ym, x22, y22),
        new Quad(node[2], x12, ym, xm, y22),
        new Quad(node[1], xm, y12, x22, ym),
        new Quad(node[0], x12, y12, xm, ym)
      );
      if (i = (y2 >= ym) << 1 | x2 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x2 - +this._x.call(null, node.data), dy = y2 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x02 = x2 - d, y02 = y2 - d;
        x3 = x2 + d, y3 = y2 + d;
        data = node.data;
      }
    }
  }
  return data;
}
function tree_remove(d) {
  if (isNaN(x2 = +this._x.call(null, d)) || isNaN(y2 = +this._y.call(null, d))) return this;
  var parent, node = this._root, retainer, previous, next, x02 = this._x0, y02 = this._y0, x12 = this._x1, y12 = this._y1, x2, y2, xm, ym, right, bottom, i, j;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x2 >= (xm = (x02 + x12) / 2)) x02 = xm;
    else x12 = xm;
    if (bottom = y2 >= (ym = (y02 + y12) / 2)) y02 = ym;
    else y12 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i] = next : delete parent[i];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}
function tree_root() {
  return this._root;
}
function tree_size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}
function tree_visit(callback) {
  var quads = [], q, node = this._root, child, x02, y02, x12, y12;
  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x02 = q.x0, y02 = q.y0, x12 = q.x1, y12 = q.y1) && node.length) {
      var xm = (x02 + x12) / 2, ym = (y02 + y12) / 2;
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x12, y12));
      if (child = node[2]) quads.push(new Quad(child, x02, ym, xm, y12));
      if (child = node[1]) quads.push(new Quad(child, xm, y02, x12, ym));
      if (child = node[0]) quads.push(new Quad(child, x02, y02, xm, ym));
    }
  }
  return this;
}
function tree_visitAfter(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x02 = q.x0, y02 = q.y0, x12 = q.x1, y12 = q.y1, xm = (x02 + x12) / 2, ym = (y02 + y12) / 2;
      if (child = node[0]) quads.push(new Quad(child, x02, y02, xm, ym));
      if (child = node[1]) quads.push(new Quad(child, xm, y02, x12, ym));
      if (child = node[2]) quads.push(new Quad(child, x02, ym, xm, y12));
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x12, y12));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}
function defaultX(d) {
  return d[0];
}
function tree_x(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}
function defaultY(d) {
  return d[1];
}
function tree_y(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}
function quadtree(nodes, x2, y2) {
  var tree = new Quadtree(x2 == null ? defaultX : x2, y2 == null ? defaultY : y2, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x2, y2, x02, y02, x12, y12) {
  this._x = x2;
  this._y = y2;
  this._x0 = x02;
  this._y0 = y02;
  this._x1 = x12;
  this._y1 = y12;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy2 = { data: leaf.data }, next = copy2;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy2;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy2 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node) return copy2;
  if (!node.length) return copy2._root = leaf_copy(node), copy2;
  nodes = [{ source: node, target: copy2._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });
        else node.target[i] = leaf_copy(child);
      }
    }
  }
  return copy2;
};
treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;
function Svg($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      innerRef: innerRefProp = void 0,
      zIndex = 0,
      pointerEvents,
      viewBox,
      ignoreTransform = false,
      center = false,
      class: className,
      title,
      defs,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    const ctx = getChartContext();
    const transformCtx = getTransformContext();
    const transform = (() => {
      if (transformCtx.mode === "canvas" && !ignoreTransform) {
        return `translate(${transformCtx.translate.x},${transformCtx.translate.y}) scale(${transformCtx.scale})`;
      } else if (center) {
        return `translate(${center === "x" || center === true ? ctx.width / 2 : 0}, ${center === "y" || center === true ? ctx.height / 2 : 0})`;
      }
    })();
    setRenderContext("svg");
    $$renderer2.push(`<svg${attributes(
      {
        viewBox,
        width: ctx.containerWidth,
        height: ctx.containerHeight,
        class: clsx(cls(layerClass("layout-svg"), "absolute top-0 left-0 overflow-visible", pointerEvents === false && "pointer-events-none", className)),
        role: "figure",
        ...restProps
      },
      void 0,
      void 0,
      { "z-index": zIndex },
      3
    )}>`);
    if (typeof title === "function") {
      $$renderer2.push("<!--[-->");
      title($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<title${attr_class(clsx(layerClass("layout-svg-title")))}>${escape_html(title)}</title>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--><defs>`);
    defs?.($$renderer2);
    $$renderer2.push(`<!----></defs><g${attr_class(clsx(layerClass("layout-svg-g")))}${attr("transform", `translate(${stringify(ctx.padding.left)}, ${stringify(ctx.padding.top)})`)}>`);
    if (transform) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<g${attr("transform", transform)}${attr_class(clsx(layerClass("layout-svg-g-transform")))}>`);
      children?.($$renderer2, { ref });
      $$renderer2.push(`<!----></g>`);
    } else {
      $$renderer2.push("<!--[!-->");
      children?.($$renderer2, { ref });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></g></svg>`);
    bind_props($$props, { ref: refProp, innerRef: innerRefProp });
  });
}
function createId(prefix, uid) {
  return `${prefix}-${uid}`;
}
function ClipPath($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId("clipPath-", uid),
      useId,
      disabled = false,
      children,
      clip: clip2,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const url = `url(#${id})`;
    const renderContext = getRenderContext();
    if (renderContext === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<defs><clipPath${attributes({ id, ...restProps }, void 0, void 0, void 0, 3)}>`);
      clip2?.($$renderer2, { id });
      $$renderer2.push(`<!---->`);
      if (useId) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<use${attr("href", `#${stringify(useId)}`)}></use>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></clipPath></defs>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (children) {
      $$renderer2.push("<!--[-->");
      if (disabled || renderContext !== "svg") {
        $$renderer2.push("<!--[-->");
        children($$renderer2, { id, url, useId });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<g${attr_class(clsx(layerClass("clip-path-g")))}${attr_style("", { "clip-path": url })}>`);
        children($$renderer2, { id, url, useId });
        $$renderer2.push(`<!----></g>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const CanvasContext = new Context("CanvasContext");
const defaultCanvasContext = {
  register: (_) => {
    return () => {
    };
  },
  invalidate: () => {
  }
};
function getCanvasContext() {
  return CanvasContext.getOr(defaultCanvasContext);
}
function setCanvasContext(context) {
  return CanvasContext.set(context);
}
function registerCanvasComponent(component) {
  getCanvasContext();
}
function Canvas($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      canvasContext: canvasContextProp = void 0,
      willReadFrequently = false,
      debug = false,
      zIndex = 0,
      pointerEvents = true,
      fallback,
      center = false,
      ignoreTransform = false,
      disableHitCanvas = false,
      class: className,
      children,
      onclick,
      ondblclick,
      onpointerenter,
      onpointermove,
      onpointerleave: onpointerleave2,
      onpointerdown,
      ontouchmove,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    let context = void 0;
    getChartContext();
    getTransformContext();
    let components = /* @__PURE__ */ new Map();
    let pendingInvalidation = false;
    const { dark } = new MediaQueryPresets();
    watch(() => dark.current, () => {
      canvasContext.invalidate();
    });
    useMutationObserver(() => document.documentElement, () => canvasContext.invalidate(), {});
    function update() {
      return;
    }
    function createCanvasContext() {
      function register(component) {
        const key = Symbol();
        components.set(key, component);
        invalidate();
        return () => {
          components.delete(key);
          invalidate();
        };
      }
      function invalidate() {
        if (pendingInvalidation) return;
        pendingInvalidation = true;
        requestAnimationFrame(update);
      }
      return { register, invalidate };
    }
    const canvasContext = createCanvasContext();
    setCanvasContext(canvasContext);
    setRenderContext("canvas");
    $$renderer2.push(`<canvas${attributes(
      {
        class: clsx(cls(layerClass("layout-canvas"), "absolute top-0 left-0 w-full h-full", pointerEvents === false && "pointer-events-none", className)),
        ...// Prevent touch from interfering with pointer if over data
        restProps
      },
      void 0,
      void 0,
      { "z-index": zIndex }
    )}>`);
    if (fallback) {
      $$renderer2.push("<!--[-->");
      if (typeof fallback === "function") {
        $$renderer2.push("<!--[-->");
        fallback($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`${escape_html(fallback)}`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></canvas> <canvas${attr_class(clsx(cls(layerClass("hit-canvas"), "layerchart-hitcanvas", "absolute top-0 left-0 w-full h-full", "pointer-events-none", "border border-danger", !debug && "opacity-0")))}></canvas> `);
    children?.($$renderer2, { ref, canvasContext: context });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref: refProp, canvasContext: canvasContextProp });
  });
}
function createKey(getValue) {
  const value = getValue();
  const key = value && typeof value === "object" ? objectId(value) : value;
  return {
    get current() {
      return key;
    }
  };
}
function Rect($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      height,
      width,
      x: x2 = 0,
      y: y2 = 0,
      initialX = x2,
      initialY = y2,
      fill,
      fillOpacity,
      stroke,
      initialHeight = height,
      initialWidth = width,
      strokeWidth,
      opacity,
      ref: refProp = void 0,
      motion,
      class: className,
      onclick,
      ondblclick,
      onpointerenter,
      onpointermove,
      onpointerleave: onpointerleave2,
      onpointerover,
      onpointerout,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const motionX = createMotion(initialX, () => x2, parseMotionProp(motion, "x"));
    const motionY = createMotion(initialY, () => y2, parseMotionProp(motion, "y"));
    const motionWidth = createMotion(initialWidth, () => width, parseMotionProp(motion, "width"));
    const motionHeight = createMotion(initialHeight, () => height, parseMotionProp(motion, "height"));
    const renderCtx = getRenderContext();
    createKey(() => fill);
    createKey(() => stroke);
    if (renderCtx === "canvas") {
      registerCanvasComponent();
    }
    if (renderCtx === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<rect${attributes(
        {
          x: motionX.current,
          y: motionY.current,
          width: motionWidth.current,
          height: motionHeight.current,
          fill,
          "fill-opacity": fillOpacity,
          stroke,
          "stroke-width": strokeWidth,
          opacity,
          class: clsx(cls(layerClass("rect"), fill == null && "fill-surface-content", className)),
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        3
      )}></rect>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref: refProp });
  });
}
function RectClipPath($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId("clipPath-", uid),
      x: x2 = 0,
      y: y2 = 0,
      disabled = false,
      children: childrenProp,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    {
      let clip2 = function($$renderer3) {
        Rect($$renderer3, spread_props([{ x: x2, y: y2 }, extractLayerProps(restProps, "clip-path-rect")]));
      }, children = function($$renderer3, { url }) {
        childrenProp?.($$renderer3, { id, url });
        $$renderer3.push(`<!---->`);
      };
      ClipPath($$renderer2, {
        id,
        disabled,
        clip: clip2,
        children,
        $$slots: { clip: true, default: true }
      });
    }
  });
}
function ChartClipPath($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      full = false,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    RectClipPath($$renderer2, spread_props([
      {
        x: full && ctx.padding.left ? -ctx.padding.left : 0,
        y: full && ctx.padding.top ? -ctx.padding.top : 0,
        disabled,
        height: ctx.height + (full ? (ctx.padding?.top ?? 0) + (ctx.padding?.bottom ?? 0) : 0),
        width: ctx.width + (full ? (ctx.padding?.left ?? 0) + (ctx.padding?.right ?? 0) : 0)
      },
      extractLayerProps(restProps, "chart-clip-path")
    ]));
  });
}
const epsilon$2 = 11102230246251565e-32;
const splitter = 134217729;
const resulterrbound = (3 + 8 * epsilon$2) * epsilon$2;
function sum(elen, e, flen, f2, h) {
  let Q, Qnew, hh, bvirt;
  let enow = e[0];
  let fnow = f2[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q = enow;
    enow = e[++eindex];
  } else {
    Q = fnow;
    fnow = f2[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q;
      hh = Q - (Qnew - enow);
      enow = e[++eindex];
    } else {
      Qnew = fnow + Q;
      hh = Q - (Qnew - fnow);
      fnow = f2[++findex];
    }
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
      } else {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f2[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q + enow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (enow - bvirt);
    enow = e[++eindex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q + fnow;
    bvirt = Qnew - Q;
    hh = Q - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f2[++findex];
    Q = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q !== 0 || hindex === 0) {
    h[hindex++] = Q;
  }
  return hindex;
}
function estimate(elen, e) {
  let Q = e[0];
  for (let i = 1; i < elen; i++) Q += e[i];
  return Q;
}
function vec(n) {
  return new Float64Array(n);
}
const ccwerrboundA = (3 + 16 * epsilon$2) * epsilon$2;
const ccwerrboundB = (2 + 12 * epsilon$2) * epsilon$2;
const ccwerrboundC = (9 + 64 * epsilon$2) * epsilon$2 * epsilon$2;
const B = vec(4);
const C1 = vec(8);
const C2 = vec(12);
const D = vec(16);
const u = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  B[2] = _j - (u3 - bvirt) + (_i - bvirt);
  B[3] = u3;
  let det = estimate(4, B);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;
  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const C1len = sum(4, B, 4, u, C1);
  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const C2len = sum(C1len, C1, 4, u, C2);
  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const Dlen = sum(C2len, C2, 4, u, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum) return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);
class Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n = points.length;
    const coords = new Float64Array(n * 2);
    for (let i = 0; i < n; i++) {
      const p = points[i];
      coords[2 * i] = getX(p);
      coords[2 * i + 1] = getY(p);
    }
    return new Delaunator(coords);
  }
  constructor(coords) {
    const n = coords.length >> 1;
    if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n));
    this._hullPrev = new Uint32Array(n);
    this._hullNext = new Uint32Array(n);
    this._hullTri = new Uint32Array(n);
    this._hullHash = new Int32Array(this._hashSize);
    this._ids = new Uint32Array(n);
    this._dists = new Float64Array(n);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < n; i++) {
      const x2 = coords[2 * i];
      const y2 = coords[2 * i + 1];
      if (x2 < minX) minX = x2;
      if (y2 < minY) minY = y2;
      if (x2 > maxX) maxX = x2;
      if (y2 > maxY) maxY = y2;
      this._ids[i] = i;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    let i0, i1, i2;
    for (let i = 0, minDist = Infinity; i < n; i++) {
      const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist) {
        i0 = i;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    for (let i = 0, minDist = Infinity; i < n; i++) {
      if (i === i0) continue;
      const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist && d > 0) {
        i1 = i;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i = 0; i < n; i++) {
      if (i === i0 || i === i1) continue;
      const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
      if (r < minRadius) {
        i2 = i;
        minRadius = r;
      }
    }
    let i2x = coords[2 * i2];
    let i2y = coords[2 * i2 + 1];
    if (minRadius === Infinity) {
      for (let i = 0; i < n; i++) {
        this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n - 1);
      const hull = new Uint32Array(n);
      let j = 0;
      for (let i = 0, d0 = -Infinity; i < n; i++) {
        const id = this._ids[i];
        const d = this._dists[id];
        if (d > d0) {
          hull[j++] = id;
          d0 = d;
        }
      }
      this.hull = hull.subarray(0, j);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
      const i = i1;
      const x2 = i1x;
      const y2 = i1y;
      i1 = i2;
      i1x = i2x;
      i1y = i2y;
      i2 = i;
      i2x = x2;
      i2y = y2;
    }
    const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;
    for (let i = 0; i < n; i++) {
      this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
    }
    quicksort(this._ids, this._dists, 0, n - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i2] = i1;
    hullNext[i1] = hullPrev[i0] = i2;
    hullNext[i2] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i2] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i2;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i2, -1, -1, -1);
    for (let k = 0, xp, yp; k < this._ids.length; k++) {
      const i = this._ids[k];
      const x2 = coords[2 * i];
      const y2 = coords[2 * i + 1];
      if (k > 0 && Math.abs(x2 - xp) <= EPSILON && Math.abs(y2 - yp) <= EPSILON) continue;
      xp = x2;
      yp = y2;
      if (i === i0 || i === i1 || i === i2) continue;
      let start = 0;
      for (let j = 0, key = this._hashKey(x2, y2); j < this._hashSize; j++) {
        start = hullHash[(key + j) % this._hashSize];
        if (start !== -1 && start !== hullNext[start]) break;
      }
      start = hullPrev[start];
      let e = start, q;
      while (q = hullNext[e], orient2d(x2, y2, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
        e = q;
        if (e === start) {
          e = -1;
          break;
        }
      }
      if (e === -1) continue;
      let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
      hullTri[i] = this._legalize(t + 2);
      hullTri[e] = t;
      hullSize++;
      let n2 = hullNext[e];
      while (q = hullNext[n2], orient2d(x2, y2, coords[2 * n2], coords[2 * n2 + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
        t = this._addTriangle(n2, i, q, hullTri[i], -1, hullTri[n2]);
        hullTri[i] = this._legalize(t + 2);
        hullNext[n2] = n2;
        hullSize--;
        n2 = q;
      }
      if (e === start) {
        while (q = hullPrev[e], orient2d(x2, y2, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
          t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
          this._legalize(t + 2);
          hullTri[q] = t;
          hullNext[e] = e;
          hullSize--;
          e = q;
        }
      }
      this._hullStart = hullPrev[i] = e;
      hullNext[e] = hullPrev[n2] = i;
      hullNext[i] = n2;
      hullHash[this._hashKey(x2, y2)] = i;
      hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i = 0, e = this._hullStart; i < hullSize; i++) {
      this.hull[i] = e;
      e = hullNext[e];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x2, y2) {
    return Math.floor(pseudoAngle(x2 - this._cx, y2 - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i = 0;
    let ar = 0;
    while (true) {
      const b = halfedges[a];
      const a0 = a - a % 3;
      ar = a0 + (a + 2) % 3;
      if (b === -1) {
        if (i === 0) break;
        a = EDGE_STACK[--i];
        continue;
      }
      const b0 = b - b % 3;
      const al = a0 + (a + 1) % 3;
      const bl = b0 + (b + 2) % 3;
      const p0 = triangles[ar];
      const pr = triangles[a];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr],
        coords[2 * pr + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );
      if (illegal) {
        triangles[a] = p1;
        triangles[b] = p0;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e = this._hullStart;
          do {
            if (this._hullTri[e] === bl) {
              this._hullTri[e] = a;
              break;
            }
            e = this._hullPrev[e];
          } while (e !== this._hullStart);
        }
        this._link(a, hbl);
        this._link(b, halfedges[ar]);
        this._link(ar, bl);
        const br = b0 + (b + 1) % 3;
        if (i < EDGE_STACK.length) {
          EDGE_STACK[i++] = br;
        }
      } else {
        if (i === 0) break;
        a = EDGE_STACK[--i];
      }
    }
    return ar;
  }
  _link(a, b) {
    this._halfedges[a] = b;
    if (b !== -1) this._halfedges[b] = a;
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i2, a, b, c) {
    const t = this.trianglesLen;
    this._triangles[t] = i0;
    this._triangles[t + 1] = i1;
    this._triangles[t + 2] = i2;
    this._link(t, a);
    this._link(t + 1, b);
    this._link(t + 2, c);
    this.trianglesLen += 3;
    return t;
  }
}
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = (ey * bl - dy * cl) * d;
  const y2 = (dx * cl - ex * bl) * d;
  return x2 * x2 + y2 * y2;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x2 = ax + (ey * bl - dy * cl) * d;
  const y2 = ay + (dx * cl - ex * bl) * d;
  return { x: x2, y: y2 };
}
function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i = left + 1; i <= right; i++) {
      const temp = ids[i];
      const tempDist = dists[temp];
      let j = i - 1;
      while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
      ids[j + 1] = temp;
    }
  } else {
    const median = left + right >> 1;
    let i = left + 1;
    let j = right;
    swap(ids, median, i);
    if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
    if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
    if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
    const temp = ids[i];
    const tempDist = dists[temp];
    while (true) {
      do
        i++;
      while (dists[ids[i]] < tempDist);
      do
        j--;
      while (dists[ids[j]] > tempDist);
      if (j < i) break;
      swap(ids, i, j);
    }
    ids[left + 1] = ids[j];
    ids[j] = temp;
    if (right - i + 1 >= j - left) {
      quicksort(ids, dists, i, right);
      quicksort(ids, dists, left, j - 1);
    } else {
      quicksort(ids, dists, left, j - 1);
      quicksort(ids, dists, i, right);
    }
  }
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}
const epsilon$1 = 1e-6;
class Path2 {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  moveTo(x2, y2) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x2, y2) {
    this._ += `L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  arc(x2, y2, r) {
    x2 = +x2, y2 = +y2, r = +r;
    const x02 = x2 + r;
    const y02 = y2;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x02},${y02}`;
    else if (Math.abs(this._x1 - x02) > epsilon$1 || Math.abs(this._y1 - y02) > epsilon$1) this._ += "L" + x02 + "," + y02;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${x2 - r},${y2}A${r},${r},0,1,1,${this._x1 = x02},${this._y1 = y02}`;
  }
  rect(x2, y2, w, h) {
    this._ += `M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x2, y2) {
    this._.push([x2, y2]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x2, y2) {
    this._.push([x2, y2]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
let Voronoi$1 = class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;
    let bx, by;
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i = 0, j = 0, n = triangles.length, x2, y2; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x13 = points[t1];
      const y13 = points[t1 + 1];
      const x22 = points[t2];
      const y22 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];
      const dx = x22 - x13;
      const dy = y22 - y13;
      const ex = x3 - x13;
      const ey = y3 - y13;
      const ab = (dx * ey - dy * ex) * 2;
      if (Math.abs(ab) < 1e-9) {
        if (bx === void 0) {
          bx = by = 0;
          for (const i2 of hull) bx += points[i2 * 2], by += points[i2 * 2 + 1];
          bx /= hull.length, by /= hull.length;
        }
        const a = 1e9 * Math.sign((bx - x13) * ey - (by - y13) * ex);
        x2 = (x13 + x3) / 2 - a * ey;
        y2 = (y13 + y3) / 2 + a * ex;
      } else {
        const d = 1 / ab;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        x2 = x13 + (ey * bl - dy * cl) * d;
        y2 = y13 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j] = x2;
      circumcenters[j + 1] = y2;
    }
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x02, x12 = points[2 * h];
    let y02, y12 = points[2 * h + 1];
    vectors.fill(0);
    for (let i = 0; i < hull.length; ++i) {
      h = hull[i];
      p0 = p1, x02 = x12, y02 = y12;
      p1 = h * 4, x12 = points[2 * h], y12 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y02 - y12;
      vectors[p0 + 3] = vectors[p1 + 1] = x12 - x02;
    }
  }
  render(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1) return null;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i = 0; i < hull.length; ++i) {
      h0 = h1, h1 = hull[i];
      const t = Math.floor(inedges[h1] / 3) * 2;
      const x2 = circumcenters[t];
      const y2 = circumcenters[t + 1];
      const v = h0 * 4;
      const p = this._project(x2, y2, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x2, y2, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const points = this._clip(i);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n = points.length;
    while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1) n -= 2;
    for (let i2 = 2; i2 < n; i2 += 2) {
      if (points[i2] !== points[i2 - 2] || points[i2 + 1] !== points[i2 - 1])
        context.lineTo(points[i2], points[i2 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) cell.index = i, yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new Polygon();
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x02, y02, x12, y12, context) {
    let S;
    const c0 = this._regioncode(x02, y02);
    const c1 = this._regioncode(x12, y12);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x02, y02);
      context.lineTo(x12, y12);
    } else if (S = this._clipSegment(x02, y02, x12, y12, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x2, y2) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2)) return false;
    return this.delaunay._step(i, x2, y2) === i;
  }
  *neighbors(i) {
    const ci = this._clip(i);
    if (ci) for (const j of this.delaunay.neighbors(i)) {
      const cj = this._clip(j);
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
            yield j;
            break loop;
          }
        }
      }
    }
  }
  _cell(i) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i];
    if (e0 === -1) return null;
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break;
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    if (i === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i);
    if (points === null) return null;
    const { vectors: V } = this;
    const v = i * 4;
    return this._simplify(V[v] || V[v + 1] ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3]) : this._clipFinite(i, points));
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x02, y02, x12 = points[n - 2], y12 = points[n - 1];
    let c0, c1 = this._regioncode(x12, y12);
    let e0, e1 = 0;
    for (let j = 0; j < n; j += 2) {
      x02 = x12, y02 = y12, x12 = points[j], y12 = points[j + 1];
      c0 = c1, c1 = this._regioncode(x12, y12);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P) P.push(x12, y12);
        else P = [x12, y12];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x02, y02, x12, y12, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x12, y12, x02, y02, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);
          else P = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);
        else P = [sx1, sy1];
      }
    }
    if (P) {
      e0 = e1, e1 = this._edgecode(P[0], P[1]);
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P;
  }
  _clipSegment(x02, y02, x12, y12, c0, c1) {
    const flip = c0 < c1;
    if (flip) [x02, y02, x12, y12, c0, c1] = [x12, y12, x02, y02, c1, c0];
    while (true) {
      if (c0 === 0 && c1 === 0) return flip ? [x12, y12, x02, y02] : [x02, y02, x12, y12];
      if (c0 & c1) return null;
      let x2, y2, c = c0 || c1;
      if (c & 8) x2 = x02 + (x12 - x02) * (this.ymax - y02) / (y12 - y02), y2 = this.ymax;
      else if (c & 4) x2 = x02 + (x12 - x02) * (this.ymin - y02) / (y12 - y02), y2 = this.ymin;
      else if (c & 2) y2 = y02 + (y12 - y02) * (this.xmax - x02) / (x12 - x02), x2 = this.xmax;
      else y2 = y02 + (y12 - y02) * (this.xmin - x02) / (x12 - x02), x2 = this.xmin;
      if (c0) x02 = x2, y02 = y2, c0 = this._regioncode(x02, y02);
      else x12 = x2, y12 = y2, c1 = this._regioncode(x12, y12);
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points), p;
    if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
    if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
    if (P = this._clipFinite(i, P)) {
      for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
        c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
        if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
      }
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x2, y2;
      switch (e0) {
        case 5:
          e0 = 4;
          continue;
        case 4:
          e0 = 6, x2 = this.xmax, y2 = this.ymin;
          break;
        case 6:
          e0 = 2;
          continue;
        case 2:
          e0 = 10, x2 = this.xmax, y2 = this.ymax;
          break;
        case 10:
          e0 = 8;
          continue;
        case 8:
          e0 = 9, x2 = this.xmin, y2 = this.ymax;
          break;
        case 9:
          e0 = 1;
          continue;
        case 1:
          e0 = 5, x2 = this.xmin, y2 = this.ymin;
          break;
      }
      if ((P[j] !== x2 || P[j + 1] !== y2) && this.contains(i, x2, y2)) {
        P.splice(j, 0, x2, y2), j += 2;
      }
    }
    return j;
  }
  _project(x02, y02, vx, vy) {
    let t = Infinity, c, x2, y2;
    if (vy < 0) {
      if (y02 <= this.ymin) return null;
      if ((c = (this.ymin - y02) / vy) < t) y2 = this.ymin, x2 = x02 + (t = c) * vx;
    } else if (vy > 0) {
      if (y02 >= this.ymax) return null;
      if ((c = (this.ymax - y02) / vy) < t) y2 = this.ymax, x2 = x02 + (t = c) * vx;
    }
    if (vx > 0) {
      if (x02 >= this.xmax) return null;
      if ((c = (this.xmax - x02) / vx) < t) x2 = this.xmax, y2 = y02 + (t = c) * vy;
    } else if (vx < 0) {
      if (x02 <= this.xmin) return null;
      if ((c = (this.xmin - x02) / vx) < t) x2 = this.xmin, y2 = y02 + (t = c) * vy;
    }
    return [x2, y2];
  }
  _edgecode(x2, y2) {
    return (x2 === this.xmin ? 1 : x2 === this.xmax ? 2 : 0) | (y2 === this.ymin ? 4 : y2 === this.ymax ? 8 : 0);
  }
  _regioncode(x2, y2) {
    return (x2 < this.xmin ? 1 : x2 > this.xmax ? 2 : 0) | (y2 < this.ymin ? 4 : y2 > this.ymax ? 8 : 0);
  }
  _simplify(P) {
    if (P && P.length > 4) {
      for (let i = 0; i < P.length; i += 2) {
        const j = (i + 2) % P.length, k = (i + 4) % P.length;
        if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) {
          P.splice(j, 2), i -= 2;
        }
      }
      if (!P.length) P = null;
    }
    return P;
  }
};
const tau$1 = 2 * Math.PI, pow = Math.pow;
function pointX(p) {
  return p[0];
}
function pointY(p) {
  return p[1];
}
function collinear(d) {
  const { triangles, coords } = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = 2 * triangles[i], b = 2 * triangles[i + 1], c = 2 * triangles[i + 2], cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1]) - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}
function jitter(x2, y2, r) {
  return [x2 + Math.sin(x2 + y2) * r, y2 + Math.cos(x2 - y2) * r];
}
class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_, i) => i).sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]);
      const e = this.collinear[0], f2 = this.collinear[this.collinear.length - 1], bounds = [points[2 * e], points[2 * e + 1], points[2 * f2], points[2 * f2 + 1]], r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const p = jitter(points[2 * i], points[2 * i + 1], r);
        points[2 * i] = p[0];
        points[2 * i + 1] = p[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }
    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
      if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
    }
    for (let i = 0, n = hull.length; i < n; ++i) {
      hullIndex[hull[i]] = i;
    }
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      inedges[hull[0]] = 1;
      if (hull.length === 2) {
        inedges[hull[1]] = 0;
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
      }
    }
  }
  voronoi(bounds) {
    return new Voronoi$1(this, bounds);
  }
  *neighbors(i) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear2 } = this;
    if (collinear2) {
      const l = collinear2.indexOf(i);
      if (l > 0) yield collinear2[l - 1];
      if (l < collinear2.length - 1) yield collinear2[l + 1];
      return;
    }
    const e0 = inedges[i];
    if (e0 === -1) return;
    let e = e0, p0 = -1;
    do {
      yield p0 = triangles[e];
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return;
      e = halfedges[e];
      if (e === -1) {
        const p = hull[(_hullIndex[i] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e !== e0);
  }
  find(x2, y2, i = 0) {
    if ((x2 = +x2, x2 !== x2) || (y2 = +y2, y2 !== y2)) return -1;
    const i0 = i;
    let c;
    while ((c = this._step(i, x2, y2)) >= 0 && c !== i && c !== i0) i = c;
    return c;
  }
  _step(i, x2, y2) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
    let c = i;
    let dc = pow(x2 - points[i * 2], 2) + pow(y2 - points[i * 2 + 1], 2);
    const e0 = inedges[i];
    let e = e0;
    do {
      let t = triangles[e];
      const dt = pow(x2 - points[t * 2], 2) + pow(y2 - points[t * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t;
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break;
      e = halfedges[e];
      if (e === -1) {
        e = hull[(_hullIndex[i] + 1) % hull.length];
        if (e !== t) {
          if (pow(x2 - points[e * 2], 2) + pow(y2 - points[e * 2 + 1], 2) < dc) return e;
        }
        break;
      }
    } while (e !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { points, halfedges, triangles } = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r) {
    if (r === void 0 && (!context || typeof context.moveTo !== "function")) r = context, context = null;
    r = r == void 0 ? 2 : +r;
    const buffer = context == null ? context = new Path2() : void 0;
    const { points } = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x2 = points[i], y2 = points[i + 1];
      context.moveTo(x2 + r, y2);
      context.arc(x2, y2, r, 0, tau$1);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { hull, points } = this;
    const h = hull[0] * 2, n = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i = 1; i < n; ++i) {
      const h2 = 2 * hull[i];
      context.lineTo(points[h2], points[h2 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? context = new Path2() : void 0;
    const { points, triangles } = this;
    const t0 = triangles[i *= 3] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new Polygon();
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}
function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array2 = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array2[i * 2] = fx.call(that, p, i, points);
    array2[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array2;
}
function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi$1 = Math.PI;
var halfPi$1 = pi$1 / 2;
var quarterPi = pi$1 / 4;
var tau = pi$1 * 2;
var degrees$1 = 180 / pi$1;
var radians$1 = pi$1 / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2$1 = Math.atan2;
var cos$1 = Math.cos;
var hypot = Math.hypot;
var sin$1 = Math.sin;
var sign$1 = Math.sign || function(x2) {
  return x2 > 0 ? 1 : x2 < 0 ? -1 : 0;
};
var sqrt$1 = Math.sqrt;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi$1 : Math.acos(x2);
}
function asin$1(x2) {
  return x2 > 1 ? halfPi$1 : x2 < -1 ? -halfPi$1 : Math.asin(x2);
}
function noop() {
}
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object2, stream) {
    streamGeometry(object2.geometry, stream);
  },
  FeatureCollection: function(object2, stream) {
    var features = object2.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object2, stream) {
    stream.sphere();
  },
  Point: function(object2, stream) {
    object2 = object2.coordinates;
    stream.point(object2[0], object2[1], object2[2]);
  },
  MultiPoint: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
  },
  LineString: function(object2, stream) {
    streamLine(object2.coordinates, stream, 0);
  },
  MultiLineString: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) streamLine(coordinates2[i], stream, 0);
  },
  Polygon: function(object2, stream) {
    streamPolygon(object2.coordinates, stream);
  },
  MultiPolygon: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n) streamPolygon(coordinates2[i], stream);
  },
  GeometryCollection: function(object2, stream) {
    var geometries = object2.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates2, stream, closed) {
  var i = -1, n = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i = -1, n = coordinates2.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates2[i], stream, 1);
  stream.polygonEnd();
}
function geoStream(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}
function spherical$1(cartesian2) {
  return [atan2$1(cartesian2[1], cartesian2[0]), asin$1(cartesian2[2])];
}
function cartesian$1(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos$1(phi);
  return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
}
function cartesianDot$1(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross$1(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}
var W0, W1, X0$1, Y0$1, Z0$1, X1$1, Y1$1, Z1$1, X2$1, Y2$1, Z2$1, lambda00, phi00, x0$4, y0$4, z0;
var centroidStream$1 = {
  sphere: noop,
  point: centroidPoint$1,
  lineStart: centroidLineStart$1,
  lineEnd: centroidLineEnd$1,
  polygonStart: function() {
    centroidStream$1.lineStart = centroidRingStart$1;
    centroidStream$1.lineEnd = centroidRingEnd$1;
  },
  polygonEnd: function() {
    centroidStream$1.lineStart = centroidLineStart$1;
    centroidStream$1.lineEnd = centroidLineEnd$1;
  }
};
function centroidPoint$1(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  var cosPhi = cos$1(phi);
  centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
}
function centroidPointCartesian(x2, y2, z) {
  ++W0;
  X0$1 += (x2 - X0$1) / W0;
  Y0$1 += (y2 - Y0$1) / W0;
  Z0$1 += (z - Z0$1) / W0;
}
function centroidLineStart$1() {
  centroidStream$1.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  var cosPhi = cos$1(phi);
  x0$4 = cosPhi * cos$1(lambda);
  y0$4 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidStream$1.point = centroidLinePoint;
  centroidPointCartesian(x0$4, y0$4, z0);
}
function centroidLinePoint(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  var cosPhi = cos$1(phi), x2 = cosPhi * cos$1(lambda), y2 = cosPhi * sin$1(lambda), z = sin$1(phi), w = atan2$1(sqrt$1((w = y0$4 * z - z0 * y2) * w + (w = z0 * x2 - x0$4 * z) * w + (w = x0$4 * y2 - y0$4 * x2) * w), x0$4 * x2 + y0$4 * y2 + z0 * z);
  W1 += w;
  X1$1 += w * (x0$4 + (x0$4 = x2));
  Y1$1 += w * (y0$4 + (y0$4 = y2));
  Z1$1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0$4, y0$4, z0);
}
function centroidLineEnd$1() {
  centroidStream$1.point = centroidPoint$1;
}
function centroidRingStart$1() {
  centroidStream$1.point = centroidRingPointFirst;
}
function centroidRingEnd$1() {
  centroidRingPoint(lambda00, phi00);
  centroidStream$1.point = centroidPoint$1;
}
function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= radians$1, phi *= radians$1;
  centroidStream$1.point = centroidRingPoint;
  var cosPhi = cos$1(phi);
  x0$4 = cosPhi * cos$1(lambda);
  y0$4 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidPointCartesian(x0$4, y0$4, z0);
}
function centroidRingPoint(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  var cosPhi = cos$1(phi), x2 = cosPhi * cos$1(lambda), y2 = cosPhi * sin$1(lambda), z = sin$1(phi), cx = y0$4 * z - z0 * y2, cy = z0 * x2 - x0$4 * z, cz = x0$4 * y2 - y0$4 * x2, m = hypot(cx, cy, cz), w = asin$1(m), v = m && -w / m;
  X2$1.add(v * cx);
  Y2$1.add(v * cy);
  Z2$1.add(v * cz);
  W1 += w;
  X1$1 += w * (x0$4 + (x0$4 = x2));
  Y1$1 += w * (y0$4 + (y0$4 = y2));
  Z1$1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0$4, y0$4, z0);
}
function geoCentroid(object2) {
  W0 = W1 = X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = 0;
  X2$1 = new Adder();
  Y2$1 = new Adder();
  Z2$1 = new Adder();
  geoStream(object2, centroidStream$1);
  var x2 = +X2$1, y2 = +Y2$1, z = +Z2$1, m = hypot(x2, y2, z);
  if (m < epsilon2) {
    x2 = X1$1, y2 = Y1$1, z = Z1$1;
    if (W1 < epsilon) x2 = X0$1, y2 = Y0$1, z = Z0$1;
    m = hypot(x2, y2, z);
    if (m < epsilon2) return [NaN, NaN];
  }
  return [atan2$1(y2, x2) * degrees$1, asin$1(z / m) * degrees$1];
}
function compose(a, b) {
  function compose2(x2, y2) {
    return x2 = a(x2, y2), b(x2[0], x2[1]);
  }
  if (a.invert && b.invert) compose2.invert = function(x2, y2) {
    return x2 = b.invert(x2, y2), x2 && a.invert(x2[0], x2[1]);
  };
  return compose2;
}
function rotationIdentity(lambda, phi) {
  if (abs(lambda) > pi$1) lambda -= Math.round(lambda / tau) * tau;
  return [lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    lambda += deltaLambda;
    if (abs(lambda) > pi$1) lambda -= Math.round(lambda / tau) * tau;
    return [lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos$1(deltaPhi), sinDeltaPhi = sin$1(deltaPhi), cosDeltaGamma = cos$1(deltaGamma), sinDeltaGamma = sin$1(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos$1(phi), x2 = cos$1(lambda) * cosPhi, y2 = sin$1(lambda) * cosPhi, z = sin$1(phi), k = z * cosDeltaPhi + x2 * sinDeltaPhi;
    return [
      atan2$1(y2 * cosDeltaGamma - k * sinDeltaGamma, x2 * cosDeltaPhi - z * sinDeltaPhi),
      asin$1(k * cosDeltaGamma + y2 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos$1(phi), x2 = cos$1(lambda) * cosPhi, y2 = sin$1(lambda) * cosPhi, z = sin$1(phi), k = z * cosDeltaGamma - y2 * sinDeltaGamma;
    return [
      atan2$1(y2 * cosDeltaGamma + z * sinDeltaGamma, x2 * cosDeltaPhi + k * sinDeltaPhi),
      asin$1(k * cosDeltaPhi - x2 * sinDeltaPhi)
    ];
  };
  return rotation;
}
function geoRotation(rotate) {
  rotate = rotateRadians(rotate[0] * radians$1, rotate[1] * radians$1, rotate.length > 2 ? rotate[2] * radians$1 : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians$1, coordinates2[1] * radians$1);
    return coordinates2[0] *= degrees$1, coordinates2[1] *= degrees$1, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians$1, coordinates2[1] * radians$1);
    return coordinates2[0] *= degrees$1, coordinates2[1] *= degrees$1, coordinates2;
  };
  return forward;
}
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos$1(radius), sinRadius = sin$1(radius), step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = spherical$1([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
    stream.point(point[0], point[1]);
  }
}
function circleRadius(cosRadius, point) {
  point = cartesian$1(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}
function clipBuffer() {
  var lines = [], line;
  return {
    point: function(x2, y2, m) {
      line.push([x2, y2, m]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}
function pointEqual(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}
function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function clipRejoin(segments, compareIntersection2, startInside, interpolate2, stream) {
  var subject = [], clip2 = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0) return;
    var n2, p0 = segment[0], p1 = segment[n2], x2;
    if (pointEqual(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i) stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon;
    }
    subject.push(x2 = new Intersection(p0, segment, null, true));
    clip2.push(x2.o = new Intersection(p0, null, x2, false));
    subject.push(x2 = new Intersection(p1, segment, null, false));
    clip2.push(x2.o = new Intersection(p1, null, x2, true));
  });
  if (!subject.length) return;
  clip2.sort(compareIntersection2);
  link(subject);
  link(clip2);
  for (i = 0, n = clip2.length; i < n; ++i) {
    clip2[i].e = startInside = !startInside;
  }
  var start = subject[0], points, point;
  while (1) {
    var current = start, isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate2(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate2(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n = array2.length)) return;
  var n, i = 0, a = array2[0], b;
  while (++i < n) {
    a.n = b = array2[i];
    b.p = a;
    a = b;
  }
  a.n = b = array2[0];
  b.p = a;
}
function longitude(point) {
  return abs(point[0]) <= pi$1 ? point[0] : sign$1(point[0]) * ((abs(point[0]) + pi$1) % tau - pi$1);
}
function polygonContains(polygon, point) {
  var lambda = longitude(point), phi = point[1], sinPhi = sin$1(phi), normal = [sin$1(lambda), -cos$1(lambda), 0], angle = 0, winding = 0;
  var sum2 = new Adder();
  if (sinPhi === 1) phi = halfPi$1 + epsilon;
  else if (sinPhi === -1) phi = -halfPi$1 - epsilon;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring, m, point0 = ring[m - 1], lambda02 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi02 = sin$1(phi0), cosPhi02 = cos$1(phi0);
    for (var j = 0; j < m; ++j, lambda02 = lambda1, sinPhi02 = sinPhi1, cosPhi02 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin$1(phi1), cosPhi1 = cos$1(phi1), delta = lambda1 - lambda02, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi$1, k = sinPhi02 * sinPhi1;
      sum2.add(atan2$1(k * sign2 * sin$1(absDelta), cosPhi02 * cosPhi1 + k * cos$1(absDelta)));
      angle += antimeridian ? delta + sign2 * tau : delta;
      if (antimeridian ^ lambda02 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross$1(cartesian$1(point0), cartesian$1(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross$1(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle < -epsilon || angle < epsilon && sum2 < -epsilon2) ^ winding & 1;
}
function clip(pointVisible, clipLine2, interpolate2, start) {
  return function(sink) {
    var line = clipLine2(sink), ringBuffer = clipBuffer(), ringSink = clipLine2(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip2 = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip2.point = pointRing;
        clip2.lineStart = ringStart;
        clip2.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip2.point = point;
        clip2.lineStart = lineStart;
        clip2.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          clipRejoin(segments, compareIntersection, startInside, interpolate2, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate2(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate2(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip2.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip2.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point2;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point2 = segment[i])[0], point2[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip2;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi$1 - epsilon : halfPi$1 - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi$1 - epsilon : halfPi$1 - b[1]);
}
const clipAntimeridian = clip(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi$1, -halfPi$1]
);
function clipAntimeridianLine(stream) {
  var lambda02 = NaN, phi0 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi$1 : -pi$1, delta = abs(lambda1 - lambda02);
      if (abs(delta - pi$1) < epsilon) {
        stream.point(lambda02, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$1 : -halfPi$1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi$1) {
        if (abs(lambda02 - sign0) < epsilon) lambda02 -= sign0 * epsilon;
        if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
        phi0 = clipAntimeridianIntersect(lambda02, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda02 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda02 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda02, phi0, lambda1, phi1) {
  var cosPhi02, cosPhi1, sinLambda0Lambda1 = sin$1(lambda02 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1) - sin$1(phi1) * (cosPhi02 = cos$1(phi0)) * sin$1(lambda02)) / (cosPhi02 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi$1;
    stream.point(-pi$1, phi);
    stream.point(0, phi);
    stream.point(pi$1, phi);
    stream.point(pi$1, 0);
    stream.point(pi$1, -phi);
    stream.point(0, -phi);
    stream.point(-pi$1, -phi);
    stream.point(-pi$1, 0);
    stream.point(-pi$1, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi$1 : -pi$1;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}
function clipCircle(radius) {
  var cr = cos$1(radius), delta = 2 * radians$1, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
  function interpolate2(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos$1(lambda) * cos$1(phi) > cr;
  }
  function clipLine2(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi$1 : -pi$1), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect2(point0, point1);
          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point2 = intersect2(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect2(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          if (!(c & c0) && (t = intersect2(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect2(a, b, two) {
    var pa = cartesian$1(a), pb = cartesian$1(b);
    var n1 = [1, 0, 0], n2 = cartesianCross$1(pa, pb), n2n2 = cartesianDot$1(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross$1(n1, n2), A = cartesianScale(n1, c1), B2 = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B2);
    var u2 = n1xn2, w = cartesianDot$1(A, u2), uu = cartesianDot$1(u2, u2), t2 = w * w - uu * (cartesianDot$1(A, A) - 1);
    if (t2 < 0) return;
    var t = sqrt$1(t2), q = cartesianScale(u2, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical$1(q);
    if (!two) return q;
    var lambda02 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
    if (lambda1 < lambda02) z = lambda02, lambda02 = lambda1, lambda1 = z;
    var delta2 = lambda1 - lambda02, polar = abs(delta2 - pi$1) < epsilon, meridian = polar || delta2 < epsilon;
    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda02) < epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta2 > pi$1 ^ (lambda02 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u2, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical$1(q1)];
    }
  }
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi$1 - radius, code2 = 0;
    if (lambda < -r) code2 |= 1;
    else if (lambda > r) code2 |= 2;
    if (phi < -r) code2 |= 4;
    else if (phi > r) code2 |= 8;
    return code2;
  }
  return clip(visible, clipLine2, interpolate2, smallRadius ? [0, -radius] : [-pi$1, radius - pi$1]);
}
function clipLine(a, b, x02, y02, x12, y12) {
  var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
  r = x02 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  r = y02 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}
var clipMax = 1e9, clipMin = -clipMax;
function clipRectangle(x02, y02, x12, y12) {
  function visible(x2, y2) {
    return x02 <= x2 && x2 <= x12 && y02 <= y2 && y2 <= y12;
  }
  function interpolate2(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a === 0 || a === 3 ? x02 : x12, a > 1 ? y12 : y02);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x02) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y02) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = clipBuffer(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point(x2, y2) {
      if (visible(x2, y2)) activeStream.point(x2, y2);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m = ring2.length, point2 = ring2[0], a0, a1, b0 = point2[0], b1 = point2[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point2 = ring2[j], b0 = point2[0], b1 = point2[1];
          if (a1 <= y12) {
            if (b1 > y12 && (b0 - a0) * (y12 - a1) > (b1 - a1) * (x02 - a0)) ++winding;
          } else {
            if (b1 <= y12 && (b0 - a0) * (y12 - a1) < (b1 - a1) * (x02 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate2(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          clipRejoin(segments, compareIntersection2, startInside, interpolate2, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint(x2, y2) {
      var v = visible(x2, y2);
      if (polygon) ring.push([x2, y2]);
      if (first) {
        x__ = x2, y__ = y2, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x2, y2);
        }
      } else {
        if (v && v_) activeStream.point(x2, y2);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x2 = Math.max(clipMin, Math.min(clipMax, x2)), y2 = Math.max(clipMin, Math.min(clipMax, y2))];
          if (clipLine(a, b, x02, y02, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x2, y2);
            clean = false;
          }
        }
      }
      x_ = x2, y_ = y2, v_ = v;
    }
    return clipStream;
  };
}
var lengthSum$1, lambda0, sinPhi0, cosPhi0;
var lengthStream$1 = {
  sphere: noop,
  point: noop,
  lineStart: lengthLineStart,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop
};
function lengthLineStart() {
  lengthStream$1.point = lengthPointFirst$1;
  lengthStream$1.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream$1.point = lengthStream$1.lineEnd = noop;
}
function lengthPointFirst$1(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  lambda0 = lambda, sinPhi0 = sin$1(phi), cosPhi0 = cos$1(phi);
  lengthStream$1.point = lengthPoint$1;
}
function lengthPoint$1(lambda, phi) {
  lambda *= radians$1, phi *= radians$1;
  var sinPhi = sin$1(phi), cosPhi = cos$1(phi), delta = abs(lambda - lambda0), cosDelta = cos$1(delta), sinDelta = sin$1(delta), x2 = cosPhi * sinDelta, y2 = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta, z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum$1.add(atan2$1(sqrt$1(x2 * x2 + y2 * y2), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
function length(object2) {
  lengthSum$1 = new Adder();
  geoStream(object2, lengthStream$1);
  return +lengthSum$1;
}
var coordinates = [null, null], object = { type: "LineString", coordinates };
function geoDistance(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length(object);
}
const identity = (x2) => x2;
var areaSum = new Adder(), areaRingSum = new Adder(), x00$2, y00$2, x0$3, y0$3;
var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop;
    areaSum.add(abs(areaRingSum));
    areaRingSum = new Adder();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum = new Adder();
    return area;
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaPointFirst(x2, y2) {
  areaStream.point = areaPoint;
  x00$2 = x0$3 = x2, y00$2 = y0$3 = y2;
}
function areaPoint(x2, y2) {
  areaRingSum.add(y0$3 * x2 - x0$3 * y2);
  x0$3 = x2, y0$3 = y2;
}
function areaRingEnd() {
  areaPoint(x00$2, y00$2);
}
var x0$2 = Infinity, y0$2 = x0$2, x1 = -x0$2, y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[x0$2, y0$2], [x1, y1]];
    x1 = y1 = -(y0$2 = x0$2 = Infinity);
    return bounds;
  }
};
function boundsPoint(x2, y2) {
  if (x2 < x0$2) x0$2 = x2;
  if (x2 > x1) x1 = x2;
  if (y2 < y0$2) y0$2 = y2;
  if (y2 > y1) y1 = y2;
}
var X0 = 0, Y0 = 0, Z0 = 0, X1 = 0, Y1 = 0, Z1 = 0, X2 = 0, Y2 = 0, Z2 = 0, x00$1, y00$1, x0$1, y0$1;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x2, y2) {
  X0 += x2;
  Y0 += y2;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x2, y2) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0$1 = x2, y0$1 = y2);
}
function centroidPointLine(x2, y2) {
  var dx = x2 - x0$1, dy = y2 - y0$1, z = sqrt$1(dx * dx + dy * dy);
  X1 += z * (x0$1 + x2) / 2;
  Y1 += z * (y0$1 + y2) / 2;
  Z1 += z;
  centroidPoint(x0$1 = x2, y0$1 = y2);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x00$1, y00$1);
}
function centroidPointFirstRing(x2, y2) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00$1 = x0$1 = x2, y00$1 = y0$1 = y2);
}
function centroidPointRing(x2, y2) {
  var dx = x2 - x0$1, dy = y2 - y0$1, z = sqrt$1(dx * dx + dy * dy);
  X1 += z * (x0$1 + x2) / 2;
  Y1 += z * (y0$1 + y2) / 2;
  Z1 += z;
  z = y0$1 * x2 - x0$1 * y2;
  X2 += z * (x0$1 + x2);
  Y2 += z * (y0$1 + y2);
  Z2 += z * 3;
  centroidPoint(x0$1 = x2, y0$1 = y2);
}
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x2, y2) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x2, y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x2, y2);
        break;
      }
      default: {
        this._context.moveTo(x2 + this._radius, y2);
        this._context.arc(x2, y2, this._radius, 0, tau);
        break;
      }
    }
  },
  result: noop
};
var lengthSum = new Adder(), lengthRing, x00, y00, x0, y0;
var lengthStream = {
  point: noop,
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = noop;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length2 = +lengthSum;
    lengthSum = new Adder();
    return length2;
  }
};
function lengthPointFirst(x2, y2) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x2, y00 = y0 = y2;
}
function lengthPoint(x2, y2) {
  x0 -= x2, y0 -= y2;
  lengthSum.add(sqrt$1(x0 * x0 + y0 * y0));
  x0 = x2, y0 = y2;
}
let cacheDigits, cacheAppend, cacheRadius, cacheCircle;
class PathString {
  constructor(digits) {
    this._append = digits == null ? append : appendRound(digits);
    this._radius = 4.5;
    this._ = "";
  }
  pointRadius(_) {
    this._radius = +_;
    return this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line === 0) this._ += "Z";
    this._point = NaN;
  }
  point(x2, y2) {
    switch (this._point) {
      case 0: {
        this._append`M${x2},${y2}`;
        this._point = 1;
        break;
      }
      case 1: {
        this._append`L${x2},${y2}`;
        break;
      }
      default: {
        this._append`M${x2},${y2}`;
        if (this._radius !== cacheRadius || this._append !== cacheAppend) {
          const r = this._radius;
          const s = this._;
          this._ = "";
          this._append`m0,${r}a${r},${r} 0 1,1 0,${ -2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
          cacheRadius = r;
          cacheAppend = this._append;
          cacheCircle = this._;
          this._ = s;
        }
        this._ += cacheCircle;
        break;
      }
    }
  }
  result() {
    const result = this._;
    this._ = "";
    return result.length ? result : null;
  }
}
function append(strings) {
  let i = 1;
  this._ += strings[0];
  for (const j = strings.length; i < j; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  const d = Math.floor(digits);
  if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
  if (d > 15) return append;
  if (d !== cacheDigits) {
    const k = 10 ** d;
    cacheDigits = d;
    cacheAppend = function append2(strings) {
      let i = 1;
      this._ += strings[0];
      for (const j = strings.length; i < j; ++i) {
        this._ += Math.round(arguments[i] * k) / k + strings[i];
      }
    };
  }
  return cacheAppend;
}
function d3GeoPath(projection2, context) {
  let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
  function path2(object2) {
    if (object2) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      geoStream(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object2) {
    geoStream(object2, projectionStream(areaStream));
    return areaStream.result();
  };
  path2.measure = function(object2) {
    geoStream(object2, projectionStream(lengthStream));
    return lengthStream.result();
  };
  path2.bounds = function(object2) {
    geoStream(object2, projectionStream(boundsStream));
    return boundsStream.result();
  };
  path2.centroid = function(object2) {
    geoStream(object2, projectionStream(centroidStream));
    return centroidStream.result();
  };
  path2.projection = function(_) {
    if (!arguments.length) return projection2;
    projectionStream = _ == null ? (projection2 = null, identity) : (projection2 = _).stream;
    return path2;
  };
  path2.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString(digits)) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path2;
  };
  path2.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) digits = null;
    else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    if (context === null) contextStream = new PathString(digits);
    return path2;
  };
  return path2.projection(projection2).digits(digits).context(context);
}
function d3geoTransform(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x2, y2) {
    this.stream.point(x2, y2);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function fit(projection2, fitBounds, object2) {
  var clip2 = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip2 != null) projection2.clipExtent(null);
  geoStream(object2, projection2.stream(boundsStream));
  fitBounds(boundsStream.result());
  if (clip2 != null) projection2.clipExtent(clip2);
  return projection2;
}
function fitExtent(projection2, extent2, object2) {
  return fit(projection2, function(b) {
    var w = extent2[1][0] - extent2[0][0], h = extent2[1][1] - extent2[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x2 = +extent2[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y2 = +extent2[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x2, y2]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b) {
    var w = +width, k = w / (b[1][0] - b[0][0]), x2 = (w - k * (b[1][0] + b[0][0])) / 2, y2 = -k * b[0][1];
    projection2.scale(150 * k).translate([x2, y2]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b) {
    var h = +height, k = h / (b[1][1] - b[0][1]), x2 = -k * b[0][0], y2 = (h - k * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k).translate([x2, y2]);
  }, object2);
}
var maxDepth = 16, cosMinDistance = cos$1(30 * radians$1);
function resample(project, delta2) {
  return +delta2 ? resample$1(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x2, y2) {
      x2 = project(x2, y2);
      this.stream.point(x2[0], x2[1]);
    }
  });
}
function resample$1(project, delta2) {
  function resampleLineTo(x02, y02, lambda02, a0, b0, c0, x12, y12, lambda1, a1, b1, c1, depth, stream) {
    var dx = x12 - x02, dy = y12 - y02, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = sqrt$1(a * a + b * b + c * c), phi2 = asin$1(c /= m), lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda02 - lambda1) < epsilon ? (lambda02 + lambda1) / 2 : atan2$1(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x02, dy2 = y2 - y02, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x02, y02, lambda02, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x12, y12, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda002, x002, y002, a00, b00, c00, lambda02, x02, y02, a0, b0, c0;
    var resampleStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x2, y2) {
      x2 = project(x2, y2);
      stream.point(x2[0], x2[1]);
    }
    function lineStart() {
      x02 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c = cartesian$1([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x02, y02, lambda02, a0, b0, c0, x02 = p[0], y02 = p[1], lambda02 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x02, y02);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda002 = lambda, phi), x002 = x02, y002 = y02, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x02, y02, lambda02, a0, b0, c0, x002, y002, lambda002, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}
var transformRadians = transformer({
  point: function(x2, y2) {
    this.stream.point(x2 * radians$1, y2 * radians$1);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x2, y2) {
      var r = rotate(x2, y2);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k, dx, dy, sx, sy) {
  function transform(x2, y2) {
    x2 *= sx;
    y2 *= sy;
    return [dx + k * x2, dy - k * y2];
  }
  transform.invert = function(x2, y2) {
    return [(x2 - dx) / k * sx, (dy - y2) / k * sy];
  };
  return transform;
}
function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
  if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
  var cosAlpha = cos$1(alpha), sinAlpha = sin$1(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x2, y2) {
    x2 *= sx;
    y2 *= sy;
    return [a * x2 - b * y2 + dx, dy - b * x2 - a * y2];
  }
  transform.invert = function(x2, y2) {
    return [sx * (ai * x2 - bi * y2 + ci), sy * (fi - bi * x2 - ai * y2)];
  };
  return transform;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k = 150, x2 = 480, y2 = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = clipAntimeridian, x02 = null, y02, x12, y12, postclip = identity, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point) {
    return projectRotateTransform(point[0] * radians$1, point[1] * radians$1);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees$1, point[1] * degrees$1];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x02 = y02 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians$1) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x02 = y02 = x12 = y12 = null, identity) : clipRectangle(x02 = +_[0][0], y02 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x02 == null ? null : [[x02, y02], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x2 = +_[0], y2 = +_[1], recenter()) : [x2, y2];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians$1, phi = _[1] % 360 * radians$1, recenter()) : [lambda * degrees$1, phi * degrees$1];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians$1, deltaPhi = _[1] % 360 * radians$1, deltaGamma = _.length > 2 ? _[2] % 360 * radians$1 : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians$1, recenter()) : alpha * degrees$1;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
  };
  projection2.fitExtent = function(extent2, object2) {
    return fitExtent(projection2, extent2, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = scaleTranslateRotate(k, x2 - center[0], y2 - center[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose(project, transform);
    projectRotateTransform = compose(rotate, projectTransform);
    projectResample = resample(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}
function azimuthalInvert(angle) {
  return function(x2, y2) {
    var z = sqrt$1(x2 * x2 + y2 * y2), c = angle(z), sc = sin$1(c), cc = cos$1(c);
    return [
      atan2$1(x2 * sc, z * cc),
      asin$1(z && y2 * sc / z)
    ];
  };
}
function stereographicRaw(x2, y2) {
  var cy = cos$1(y2), k = 1 + cos$1(x2) * cy;
  return [cy * sin$1(x2) / k, sin$1(y2) / k];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});
function geoStereographic() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}
const pi = Math.PI;
const halfPi = pi / 2;
const degrees = 180 / pi;
const radians = pi / 180;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sign = Math.sign || function(x2) {
  return x2 > 0 ? 1 : x2 < 0 ? -1 : 0;
};
const sqrt = Math.sqrt;
function asin(x2) {
  return x2 > 1 ? halfPi : x2 < -1 ? -halfPi : Math.asin(x2);
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}
function cartesianAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function cartesianNormalize(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  return [d[0] / l, d[1] / l, d[2] / l];
}
function spherical(cartesian2) {
  return [
    atan2(cartesian2[1], cartesian2[0]) * degrees,
    asin(max(-1, min(1, cartesian2[2]))) * degrees
  ];
}
function cartesian(coordinates2) {
  const lambda = coordinates2[0] * radians, phi = coordinates2[1] * radians, cosphi = cos(phi);
  return [cosphi * cos(lambda), cosphi * sin(lambda), sin(phi)];
}
function excess(triangle) {
  triangle = triangle.map((p) => cartesian(p));
  return cartesianDot(triangle[0], cartesianCross(triangle[2], triangle[1]));
}
function geoDelaunay(points) {
  const delaunay = geo_delaunay_from(points), triangles = geo_triangles(delaunay), edges = geo_edges(triangles, points), neighbors = geo_neighbors(triangles, points.length), find = geo_find(neighbors, points), circumcenters = geo_circumcenters(triangles, points), { polygons, centers } = geo_polygons(circumcenters, triangles, points), mesh = geo_mesh(polygons), hull = geo_hull(triangles, points), urquhart = geo_urquhart(edges, triangles);
  return {
    delaunay,
    edges,
    triangles,
    centers,
    neighbors,
    polygons,
    mesh,
    hull,
    urquhart,
    find
  };
}
function geo_find(neighbors, points) {
  function distance2(a, b) {
    let x2 = a[0] - b[0], y2 = a[1] - b[1], z = a[2] - b[2];
    return x2 * x2 + y2 * y2 + z * z;
  }
  return function find(x2, y2, next) {
    if (next === void 0) next = 0;
    let cell, dist2, found = next;
    const xyz = cartesian([x2, y2]);
    do {
      cell = next;
      next = null;
      dist2 = distance2(xyz, cartesian(points[cell]));
      neighbors[cell].forEach((i) => {
        let ndist = distance2(xyz, cartesian(points[i]));
        if (ndist < dist2) {
          dist2 = ndist;
          next = i;
          found = i;
          return;
        }
      });
    } while (next !== null);
    return found;
  };
}
function geo_delaunay_from(points) {
  if (points.length < 2) return {};
  let pivot = 0;
  while (isNaN(points[pivot][0] + points[pivot][1]) && pivot++ < points.length) ;
  const r = geoRotation(points[pivot]), projection2 = geoStereographic().translate([0, 0]).scale(1).rotate(r.invert([180, 0]));
  points = points.map(projection2);
  const zeros = [];
  let max2 = 1;
  for (let i = 0, n = points.length; i < n; i++) {
    let m = points[i][0] ** 2 + points[i][1] ** 2;
    if (!isFinite(m) || m > 1e32) zeros.push(i);
    else if (m > max2) max2 = m;
  }
  const FAR = 1e6 * sqrt(max2);
  zeros.forEach((i) => points[i] = [FAR, 0]);
  points.push([0, FAR]);
  points.push([-FAR, 0]);
  points.push([0, -FAR]);
  const delaunay = Delaunay.from(points);
  delaunay.projection = projection2;
  const { triangles, halfedges, inedges } = delaunay;
  for (let i = 0, l = halfedges.length; i < l; i++) {
    if (halfedges[i] < 0) {
      const j = i % 3 == 2 ? i - 2 : i + 1;
      const k = i % 3 == 0 ? i + 2 : i - 1;
      const a = halfedges[j];
      const b = halfedges[k];
      halfedges[a] = b;
      halfedges[b] = a;
      halfedges[j] = halfedges[k] = -1;
      triangles[i] = triangles[j] = triangles[k] = pivot;
      inedges[triangles[a]] = a % 3 == 0 ? a + 2 : a - 1;
      inedges[triangles[b]] = b % 3 == 0 ? b + 2 : b - 1;
      i += 2 - i % 3;
    } else if (triangles[i] > points.length - 3 - 1) {
      triangles[i] = pivot;
    }
  }
  return delaunay;
}
function geo_edges(triangles, points) {
  const _index = /* @__PURE__ */ new Set();
  if (points.length === 2) return [[0, 1]];
  triangles.forEach((tri) => {
    if (tri[0] === tri[1]) return;
    if (excess(tri.map((i) => points[i])) < 0) return;
    for (let i = 0, j; i < 3; i++) {
      j = (i + 1) % 3;
      _index.add(extent([tri[i], tri[j]]).join("-"));
    }
  });
  return Array.from(_index, (d) => d.split("-").map(Number));
}
function geo_triangles(delaunay) {
  const { triangles } = delaunay;
  if (!triangles) return [];
  const geo_triangles2 = [];
  for (let i = 0, n = triangles.length / 3; i < n; i++) {
    const a = triangles[3 * i], b = triangles[3 * i + 1], c = triangles[3 * i + 2];
    if (a !== b && b !== c) {
      geo_triangles2.push([a, c, b]);
    }
  }
  return geo_triangles2;
}
function geo_circumcenters(triangles, points) {
  return triangles.map((tri) => {
    const c = tri.map((i) => points[i]).map(cartesian), V = cartesianAdd(
      cartesianAdd(cartesianCross(c[1], c[0]), cartesianCross(c[2], c[1])),
      cartesianCross(c[0], c[2])
    );
    return spherical(cartesianNormalize(V));
  });
}
function geo_neighbors(triangles, npoints) {
  const neighbors = [];
  triangles.forEach((tri) => {
    for (let j = 0; j < 3; j++) {
      const a = tri[j], b = tri[(j + 1) % 3];
      neighbors[a] = neighbors[a] || [];
      neighbors[a].push(b);
    }
  });
  if (triangles.length === 0) {
    if (npoints === 2) neighbors[0] = [1], neighbors[1] = [0];
    else if (npoints === 1) neighbors[0] = [];
  }
  return neighbors;
}
function geo_polygons(circumcenters, triangles, points) {
  const polygons = [];
  const centers = circumcenters.slice();
  if (triangles.length === 0) {
    if (points.length < 2) return { polygons, centers };
    if (points.length === 2) {
      const a = cartesian(points[0]), b = cartesian(points[1]), m = cartesianNormalize(cartesianAdd(a, b)), d = cartesianNormalize(cartesianCross(a, b)), c = cartesianCross(m, d);
      const poly = [
        m,
        cartesianCross(m, c),
        cartesianCross(cartesianCross(m, c), c),
        cartesianCross(cartesianCross(cartesianCross(m, c), c), c)
      ].map(spherical).map(supplement);
      return polygons.push(poly), polygons.push(poly.slice().reverse()), { polygons, centers };
    }
  }
  triangles.forEach((tri, t) => {
    for (let j = 0; j < 3; j++) {
      const a = tri[j], b = tri[(j + 1) % 3], c = tri[(j + 2) % 3];
      polygons[a] = polygons[a] || [];
      polygons[a].push([b, c, t, [a, b, c]]);
    }
  });
  const reordered = polygons.map((poly) => {
    const p = [poly[0][2]];
    let k = poly[0][1];
    for (let i = 1; i < poly.length; i++) {
      for (let j = 0; j < poly.length; j++) {
        if (poly[j][0] == k) {
          k = poly[j][1];
          p.push(poly[j][2]);
          break;
        }
      }
    }
    if (p.length > 2) {
      return p;
    } else if (p.length == 2) {
      const R0 = o_midpoint(
        points[poly[0][3][0]],
        points[poly[0][3][1]],
        centers[p[0]]
      ), R1 = o_midpoint(
        points[poly[0][3][2]],
        points[poly[0][3][0]],
        centers[p[0]]
      );
      const i0 = supplement(R0), i1 = supplement(R1);
      return [p[0], i1, p[1], i0];
    }
  });
  function supplement(point) {
    let f2 = -1;
    centers.slice(triangles.length, Infinity).forEach((p, i) => {
      if (p[0] === point[0] && p[1] === point[1]) f2 = i + triangles.length;
    });
    if (f2 < 0) f2 = centers.length, centers.push(point);
    return f2;
  }
  return { polygons: reordered, centers };
}
function o_midpoint(a, b, c) {
  a = cartesian(a);
  b = cartesian(b);
  c = cartesian(c);
  const s = sign(cartesianDot(cartesianCross(b, a), c));
  return spherical(cartesianNormalize(cartesianAdd(a, b)).map((d) => s * d));
}
function geo_mesh(polygons) {
  const mesh = [];
  polygons.forEach((poly) => {
    if (!poly) return;
    let p = poly[poly.length - 1];
    for (let q of poly) {
      if (q > p) mesh.push([p, q]);
      p = q;
    }
  });
  return mesh;
}
function geo_urquhart(edges, triangles) {
  return function(distances) {
    const _lengths = /* @__PURE__ */ new Map(), _urquhart = /* @__PURE__ */ new Map();
    edges.forEach((edge, i) => {
      const u2 = edge.join("-");
      _lengths.set(u2, distances[i]);
      _urquhart.set(u2, true);
    });
    triangles.forEach((tri) => {
      let l = 0, remove = -1;
      for (let j = 0; j < 3; j++) {
        let u2 = extent([tri[j], tri[(j + 1) % 3]]).join("-");
        if (_lengths.get(u2) > l) {
          l = _lengths.get(u2);
          remove = u2;
        }
      }
      _urquhart.set(remove, false);
    });
    return edges.map((edge) => _urquhart.get(edge.join("-")));
  };
}
function geo_hull(triangles, points) {
  const _hull = /* @__PURE__ */ new Set(), hull = [];
  triangles.map((tri) => {
    if (excess(tri.map((i) => points[i > points.length ? 0 : i])) > 1e-12)
      return;
    for (let i = 0; i < 3; i++) {
      let e = [tri[i], tri[(i + 1) % 3]], code = `${e[0]}-${e[1]}`;
      if (_hull.has(code)) _hull.delete(code);
      else _hull.add(`${e[1]}-${e[0]}`);
    }
  });
  const _index = /* @__PURE__ */ new Map();
  let start;
  _hull.forEach((e) => {
    e = e.split("-").map(Number);
    _index.set(e[0], e[1]);
    start = e[0];
  });
  if (start === void 0) return hull;
  let next = start;
  do {
    hull.push(next);
    let n = _index.get(next);
    _index.set(next, -1);
    next = n;
  } while (next > -1 && next !== start);
  return hull;
}
function geoVoronoi(data) {
  const v = function(data2) {
    v.delaunay = null;
    v._data = data2;
    if (typeof v._data === "object" && v._data.type === "FeatureCollection") {
      v._data = v._data.features;
    }
    if (typeof v._data === "object") {
      const temp = v._data.map((d) => [v._vx(d), v._vy(d), d]).filter((d) => isFinite(d[0] + d[1]));
      v.points = temp.map((d) => [d[0], d[1]]);
      v.valid = temp.map((d) => d[2]);
      v.delaunay = geoDelaunay(v.points);
    }
    return v;
  };
  v._vx = function(d) {
    if (typeof d == "object" && "type" in d) {
      return geoCentroid(d)[0];
    }
    if (0 in d) return d[0];
  };
  v._vy = function(d) {
    if (typeof d == "object" && "type" in d) {
      return geoCentroid(d)[1];
    }
    if (1 in d) return d[1];
  };
  v.x = function(f2) {
    if (!f2) return v._vx;
    v._vx = f2;
    return v;
  };
  v.y = function(f2) {
    if (!f2) return v._vy;
    v._vy = f2;
    return v;
  };
  v.polygons = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    if (!v.delaunay) return false;
    const coll = {
      type: "FeatureCollection",
      features: []
    };
    if (v.valid.length === 0) return coll;
    v.delaunay.polygons.forEach(
      (poly, i) => coll.features.push({
        type: "Feature",
        geometry: !poly ? null : {
          type: "Polygon",
          coordinates: [
            [...poly, poly[0]].map((i2) => v.delaunay.centers[i2])
          ]
        },
        properties: {
          site: v.valid[i],
          sitecoordinates: v.points[i],
          neighbours: v.delaunay.neighbors[i]
          // not part of the public API
        }
      })
    );
    if (v.valid.length === 1)
      coll.features.push({
        type: "Feature",
        geometry: { type: "Sphere" },
        properties: {
          site: v.valid[0],
          sitecoordinates: v.points[0],
          neighbours: []
        }
      });
    return coll;
  };
  v.triangles = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    if (!v.delaunay) return false;
    return {
      type: "FeatureCollection",
      features: v.delaunay.triangles.map((tri, index) => {
        tri = tri.map((i) => v.points[i]);
        tri.center = v.delaunay.centers[index];
        return tri;
      }).filter((tri) => excess(tri) > 0).map((tri) => ({
        type: "Feature",
        properties: {
          circumcenter: tri.center
        },
        geometry: {
          type: "Polygon",
          coordinates: [[...tri, tri[0]]]
        }
      }))
    };
  };
  v.links = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    if (!v.delaunay) return false;
    const _distances = v.delaunay.edges.map(
      (e) => geoDistance(v.points[e[0]], v.points[e[1]])
    ), _urquart = v.delaunay.urquhart(_distances);
    return {
      type: "FeatureCollection",
      features: v.delaunay.edges.map((e, i) => ({
        type: "Feature",
        properties: {
          source: v.valid[e[0]],
          target: v.valid[e[1]],
          length: _distances[i],
          urquhart: !!_urquart[i]
        },
        geometry: {
          type: "LineString",
          coordinates: [v.points[e[0]], v.points[e[1]]]
        }
      }))
    };
  };
  v.mesh = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    if (!v.delaunay) return false;
    return {
      type: "MultiLineString",
      coordinates: v.delaunay.edges.map((e) => [
        v.points[e[0]],
        v.points[e[1]]
      ])
    };
  };
  v.cellMesh = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    if (!v.delaunay) return false;
    const { centers, polygons } = v.delaunay;
    const coordinates2 = [];
    for (const p of polygons) {
      if (!p) continue;
      for (let n = p.length, p0 = p[n - 1], p1 = p[0], i = 0; i < n; p0 = p1, p1 = p[++i]) {
        if (p1 > p0) {
          coordinates2.push([centers[p0], centers[p1]]);
        }
      }
    }
    return {
      type: "MultiLineString",
      coordinates: coordinates2
    };
  };
  v._found = void 0;
  v.find = function(x2, y2, radius) {
    v._found = v.delaunay.find(x2, y2, v._found);
    if (!radius || geoDistance([x2, y2], v.points[v._found]) < radius)
      return v._found;
  };
  v.hull = function(data2) {
    if (data2 !== void 0) {
      v(data2);
    }
    const hull = v.delaunay.hull, points = v.points;
    return hull.length === 0 ? null : {
      type: "Polygon",
      coordinates: [[...hull.map((i) => points[i]), points[hull[0]]]]
    };
  };
  return data ? v(data) : v;
}
function geoCurvePath(projection2, curve, context) {
  const pathContext = path();
  const geoPath = d3GeoPath(projection2, curveContext(curve(pathContext)));
  const fn = (object2) => {
    geoPath(object2);
    return pathContext + "";
  };
  Object.setPrototypeOf(fn, geoPath);
  return fn;
}
function curveContext(curve) {
  return {
    beginPath() {
    },
    moveTo(x2, y2) {
      curve.lineStart();
      curve.point(x2, y2);
    },
    arc(x2, y2, radius, startAngle, endAngle, anticlockwise) {
    },
    lineTo(x2, y2) {
      curve.point(x2, y2);
    },
    closePath() {
      curve.lineEnd();
    }
  };
}
function geoFitObjectTransform(projection2, size, object2) {
  const newProjection = projection2.fitSize(size, object2);
  const translate = newProjection.translate();
  return { translate: { x: translate[0], y: translate[1] }, scale: newProjection.scale() };
}
function GeoPath($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      fill,
      stroke,
      strokeWidth,
      opacity,
      geoTransform,
      geojson,
      tooltipContext,
      curve = curveLinearClosed,
      onclick,
      class: className,
      ref: refProp = void 0,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const geo = getGeoContext();
    const projection2 = geoTransform && geo.projection ? d3geoTransform(geoTransform(geo.projection)) : geo.projection;
    const geoPath = (() => {
      if (!projection2) return;
      if (curve === curveLinearClosed) {
        return d3GeoPath(projection2);
      }
      return geoCurvePath(projection2, curve);
    })();
    const renderCtx = getRenderContext();
    createKey(() => fill);
    createKey(() => stroke);
    const _onPointerEnter = (e) => {
      restProps.onpointerenter?.(e);
      tooltipContext?.show(e, geojson);
    };
    const _onPointerMove = (e) => {
      restProps.onpointermove?.(e);
      tooltipContext?.show(e, geojson);
    };
    const _onPointerLeave = (e) => {
      restProps.onpointerleave?.(e);
      tooltipContext?.hide();
    };
    if (renderCtx === "canvas") {
      registerCanvasComponent({
        events: {
          pointerenter: restProps.onpointerenter || tooltipContext ? _onPointerEnter : void 0,
          pointermove: restProps.onpointermove || tooltipContext ? _onPointerMove : void 0,
          pointerleave: restProps.onpointerleave || tooltipContext ? _onPointerLeave : void 0,
          pointerdown: restProps.onpointerdown,
          touchmove: restProps.ontouchmove
        }
      });
    }
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2, { geoPath });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (renderCtx === "svg") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path${attributes(
          {
            ...restProps,
            d: geojson ? geoPath?.(geojson) : "",
            fill,
            stroke,
            "stroke-width": strokeWidth,
            opacity,
            class: clsx(cls(layerClass("geo-path"), fill == null && "fill-transparent", className))
          },
          void 0,
          void 0,
          void 0,
          3
        )}></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref: refProp });
  });
}
function Group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      x: x2,
      initialX: initialXProp,
      y: y2,
      initialY: initialYProp,
      center = false,
      preventTouchMove = false,
      opacity = void 0,
      motion,
      transitionIn: transitionInProp,
      transitionInParams: transitionInParamsProp,
      class: className,
      children,
      ref: refProp = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const initialX = initialXProp ?? x2;
    const initialY = initialYProp ?? y2;
    const trueX = x2 ?? (center === "x" || center === true ? ctx.width / 2 : 0);
    const trueY = y2 ?? (center === "y" || center === true ? ctx.height / 2 : 0);
    const motionX = createMotion(initialX, () => trueX, motion);
    const motionY = createMotion(initialY, () => trueY, motion);
    transitionInProp ? transitionInProp : extractTweenConfig(motion)?.options ? fade : () => {
    };
    const transform = (() => {
      if (center || x2 != null || y2 != null) {
        return `translate(${motionX.current}px, ${motionY.current}px)`;
      }
    })();
    const renderCtx = getRenderContext();
    if (renderCtx === "canvas") {
      registerCanvasComponent({
        events: {
          click: restProps.onclick,
          dblclick: restProps.ondblclick,
          pointerenter: restProps.onpointerenter,
          pointermove: restProps.onpointermove,
          pointerleave: restProps.onpointerleave,
          pointerdown: restProps.onpointerdown
        }
      });
    }
    if (renderCtx === "canvas") {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (renderCtx === "svg") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<g${attributes(
          {
            class: clsx(cls(layerClass("group-g"), className)),
            opacity,
            ...restProps
          },
          void 0,
          void 0,
          { transform },
          3
        )}>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----></g>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div${attributes(
          {
            ...restProps,
            class: clsx(cls(layerClass("group-div"), "absolute", className))
          },
          void 0,
          void 0,
          { transform, opacity }
        )}>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref: refProp });
  });
}
function flattenPathData(pathData, yOverride = 0) {
  let result = pathData;
  result = result.replace(/([MLTQCSAZ])(-?\d*\.?\d+),(-?\d*\.?\d+)/g, (match, command, x2, y2) => {
    return `${command}${x2},${yOverride}`;
  });
  result = result.replace(/([v])(-?\d*\.?\d+)/g, (match, command, l) => {
    return `${command}${0}`;
  });
  return result;
}
function Marker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      type,
      id = createId("marker-", uid),
      size = 10,
      markerWidth = size,
      markerHeight = size,
      markerUnits = "userSpaceOnUse",
      orient = "auto-start-reverse",
      refX = ["arrow", "triangle"].includes(type ?? "") ? 9 : 5,
      refY = 5,
      viewBox = "0 0 10 10",
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<defs><marker${attributes(
      {
        id,
        markerWidth,
        markerHeight,
        markerUnits,
        orient,
        refX,
        refY,
        viewBox,
        ...restProps,
        class: clsx(cls(
          layerClass("marker"),
          "overflow-visible",
          // stroke
          restProps.stroke == null && (["arrow", "circle-stroke", "line"].includes(type ?? "") ? "stroke-[context-stroke]" : type === "circle" ? "stroke-surface-100" : "stroke-none"),
          // extra stroke attrs
          "[stroke-linecap:round] [stroke-linejoin:round]",
          //fill
          restProps.fill == null && (["triangle", "dot", "circle"].includes(type ?? "") ? "fill-[context-stroke]" : type === "circle-stroke" ? "fill-surface-100" : "fill-none"),
          className
        ))
      },
      void 0,
      void 0,
      void 0,
      3
    )}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (type === "triangle") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M 0 0 L 10 5 L 0 10 z"${attr_class(clsx(layerClass("marker-triangle")))}></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (type === "arrow") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<polyline points="0 0, 10 5, 0 10"${attr_class(clsx(layerClass("marker-arrow")))}></polyline>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (type === "circle" || type === "circle-stroke" || type === "dot") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<circle${attr("cx", 5)}${attr("cy", 5)}${attr("r", 5)}${attr_class(clsx(layerClass("marker-circle")))}></circle>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (type === "line") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<polyline points="5 0, 5 10"${attr_class(clsx(layerClass("marker-line")))}></polyline>`);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></marker></defs>`);
  });
}
function MarkerWrapper($$renderer, $$props) {
  let { id, marker } = $$props;
  if (typeof marker === "function") {
    $$renderer.push("<!--[-->");
    marker($$renderer, { id });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
    if (marker) {
      $$renderer.push("<!--[-->");
      Marker($$renderer, spread_props([
        { id, type: typeof marker === "string" ? marker : void 0 },
        typeof marker === "object" ? marker : null
      ]));
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
}
function Spline($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    const ctx = getChartContext();
    let {
      data,
      pathData,
      x: x2,
      y: y2,
      motion,
      draw,
      curve,
      defined,
      fill,
      stroke,
      strokeWidth,
      fillOpacity,
      class: className,
      marker,
      markerStart: markerStartProp,
      markerMid: markerMidProp,
      markerEnd: markerEndProp,
      startContent,
      endContent,
      opacity,
      pathRef: pathRefProp = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let pathRef = void 0;
    const markerStart = markerStartProp ?? marker;
    const markerMid = markerMidProp ?? marker;
    const markerEnd = markerEndProp ?? marker;
    const markerStartId = markerStart ? createId("marker-start", uid) : "";
    const markerMidId = markerMid ? createId("marker-mid", uid) : "";
    const markerEndId = markerEnd ? createId("marker-end", uid) : "";
    function getScaleValue(data2, scale, accessor2) {
      let value = accessor2(data2);
      if (Array.isArray(value)) {
        value = max$2(value);
      }
      if (scale.domain().length) {
        return scale(value);
      } else {
        return value;
      }
    }
    const xAccessor = x2 ? accessor(x2) : ctx.x;
    const yAccessor = y2 ? accessor(y2) : ctx.y;
    const xOffset = isScaleBand(ctx.xScale) ? ctx.xScale.bandwidth() / 2 : 0;
    const yOffset = isScaleBand(ctx.yScale) ? ctx.yScale.bandwidth() / 2 : 0;
    const extractedTween = extractTweenConfig(motion);
    const tweenedOptions = extractedTween ? {
      type: extractedTween.type,
      options: { interpolate: d3InterpolatePathExports.interpolatePath, ...extractedTween.options }
    } : void 0;
    function defaultPathData() {
      if (!tweenedOptions) {
        return "";
      } else if (pathData) {
        return flattenPathData(pathData, Math.min(ctx.yScale(0) ?? ctx.yRange[0], ctx.yRange[0]));
      } else if (ctx.config.x) {
        const path2 = ctx.radial ? lineRadial$1().angle((d2) => ctx.xScale(xAccessor(d2)) + 0).radius((d2) => Math.min(ctx.yScale(0), ctx.yRange[0])) : d3Line().x((d2) => ctx.xScale(xAccessor(d2)) + xOffset).y((d2) => Math.min(ctx.yScale(0), ctx.yRange[0]));
        path2.defined(defined ?? ((d2) => xAccessor(d2) != null && yAccessor(d2) != null));
        if (curve) path2.curve(curve);
        return path2(data ?? ctx.data);
      }
    }
    const d = (() => {
      const path2 = ctx.radial ? lineRadial$1().angle((d2) => getScaleValue(d2, ctx.xScale, xAccessor) + 0).radius((d2) => getScaleValue(d2, ctx.yScale, yAccessor) + yOffset) : d3Line().x((d2) => getScaleValue(d2, ctx.xScale, xAccessor) + xOffset).y((d2) => getScaleValue(d2, ctx.yScale, yAccessor) + yOffset);
      path2.defined(defined ?? ((d2) => xAccessor(d2) != null && yAccessor(d2) != null));
      if (curve) path2.curve(curve);
      return pathData ?? path2(data ?? ctx.data) ?? "";
    })();
    const tweenedState = createMotion(defaultPathData(), () => d, tweenedOptions);
    const renderCtx = getRenderContext();
    createKey(() => fill);
    createKey(() => stroke);
    if (renderCtx === "canvas") {
      registerCanvasComponent({
        events: {
          click: restProps.onclick,
          pointerenter: restProps.onpointerenter,
          pointermove: restProps.onpointermove,
          pointerleave: restProps.onpointerleave,
          pointerdown: restProps.onpointerdown,
          pointerover: restProps.onpointerover,
          pointerout: restProps.onpointerout,
          touchmove: restProps.ontouchmove
        }
      });
    }
    const endPointDuration = (() => {
      if (typeof draw === "object" && draw.duration !== void 0 && typeof draw.duration !== "function") {
        return draw.duration;
      }
      return 800;
    })();
    const endPoint = createControlledMotion(void 0, draw ? {
      type: "tween",
      duration: () => endPointDuration,
      easing: typeof draw === "object" && draw.easing ? draw.easing : cubicInOut,
      interpolate() {
        return (t) => {
          const totalLength = 0;
          const point = pathRef?.getPointAtLength(totalLength * t);
          return point;
        };
      }
    } : { type: "none" });
    if (
      // Anytime the path data changes, redraw
      renderCtx === "svg"
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!---->`);
      {
        $$renderer2.push(`<path${attributes(
          {
            d: tweenedState.current,
            ...restProps,
            class: clsx(cls(layerClass("spline-path"), !fill && "fill-none", !stroke && "stroke-surface-content", className)),
            fill,
            "fill-opacity": fillOpacity,
            stroke,
            "stroke-width": strokeWidth,
            opacity,
            "marker-start": markerStartId ? `url(#${markerStartId})` : void 0,
            "marker-mid": markerMidId ? `url(#${markerMidId})` : void 0,
            "marker-end": markerEndId ? `url(#${markerEndId})` : void 0
          },
          void 0,
          void 0,
          void 0,
          3
        )}></path>`);
        MarkerWrapper($$renderer2, { id: markerStartId, marker: markerStart });
        $$renderer2.push(`<!---->`);
        MarkerWrapper($$renderer2, { id: markerMidId, marker: markerMid });
        $$renderer2.push(`<!---->`);
        MarkerWrapper($$renderer2, { id: markerEndId, marker: markerEnd });
        $$renderer2.push(`<!---->`);
        {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
        if (endContent && endPoint.current) {
          $$renderer2.push("<!--[-->");
          Group($$renderer2, {
            x: endPoint.current.x,
            y: endPoint.current.y,
            class: layerClass("spline-g-end"),
            children: ($$renderer3) => {
              endContent($$renderer3, {
                point: endPoint.current,
                value: {
                  x: ctx.xScale?.invert?.(endPoint.current.x),
                  y: ctx.yScale?.invert?.(endPoint.current.y)
                }
              });
              $$renderer3.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { pathRef: pathRefProp });
  });
}
function Circle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      cx = 0,
      initialCx: initialCxProp,
      cy = 0,
      initialCy: initialCyProp,
      r = 1,
      initialR: initialRProp,
      motion,
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      opacity,
      class: className,
      ref: refProp = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const initialCx = initialCxProp ?? cx;
    const initialCy = initialCyProp ?? cy;
    const initialR = initialRProp ?? r;
    const renderCtx = getRenderContext();
    const motionCx = createMotion(initialCx, () => cx, motion);
    const motionCy = createMotion(initialCy, () => cy, motion);
    const motionR = createMotion(initialR, () => r, motion);
    createKey(() => fill);
    createKey(() => stroke);
    if (renderCtx === "canvas") {
      registerCanvasComponent({
        events: {
          click: restProps.onclick,
          pointerdown: restProps.onpointerdown,
          pointerenter: restProps.onpointerenter,
          pointermove: restProps.onpointermove,
          pointerleave: restProps.onpointerleave
        }
      });
    }
    if (renderCtx === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<circle${attributes(
        {
          cx: motionCx.current,
          cy: motionCy.current,
          r: motionR.current,
          fill,
          "fill-opacity": fillOpacity,
          stroke,
          "stroke-width": strokeWidth,
          opacity,
          class: clsx(cls(layerClass("circle"), fill == null && "fill-surface-content", className)),
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        3
      )}></circle>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref: refProp });
  });
}
function CircleClipPath($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId("clipPath-", uid),
      cx = 0,
      cy = 0,
      r,
      motion,
      disabled = false,
      ref: refProp = void 0,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let clip2 = function($$renderer4) {
          Circle($$renderer4, spread_props([
            { cx, cy, r, motion },
            extractLayerProps(restProps, "clip-path-circle"),
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              }
            }
          ]));
        };
        ClipPath($$renderer3, { id, disabled, children, clip: clip2, $$slots: { clip: true } });
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref: refProp });
  });
}
function Voronoi2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data,
      r,
      classes = {},
      onclick,
      onpointerenter,
      onpointerdown,
      onpointermove,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    const geo = getGeoContext();
    const points = (data ?? ctx.flatData).map((d) => {
      const xValue = geo.projection ? ctx.x(d) : ctx.xGet(d);
      const yValue = geo.projection ? ctx.y(d) : ctx.yGet(d);
      const x2 = Array.isArray(xValue) ? min$2(xValue) : xValue;
      const y2 = Array.isArray(yValue) ? min$2(yValue) : yValue;
      let point;
      if (ctx.radial) {
        const radialPoint = pointRadial(x2, y2);
        point = [
          radialPoint[0] + ctx.width / 2,
          radialPoint[1] + ctx.height / 2
        ];
      } else {
        point = [x2, y2];
      }
      point.data = d;
      return point;
    });
    const boundWidth = Math.max(ctx.width, 0);
    const boundHeight = Math.max(ctx.height, 0);
    const disableClip = r === 0 || r == null || r === Infinity;
    Group($$renderer2, spread_props([
      restProps,
      {
        class: cls(layerClass("voronoi-g"), classes.root, className),
        children: ($$renderer3) => {
          if (geo.projection) {
            $$renderer3.push("<!--[-->");
            const polygons = geoVoronoi().polygons(points);
            $$renderer3.push(`<!--[-->`);
            const each_array = ensure_array_like(polygons.features);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let feature = each_array[$$index];
              const point = r ? geo.projection?.(feature.properties.sitecoordinates) : null;
              CircleClipPath($$renderer3, {
                cx: point?.[0],
                cy: point?.[1],
                r: r ?? 0,
                disabled: point == null || disableClip,
                children: ($$renderer4) => {
                  GeoPath($$renderer4, {
                    geojson: feature,
                    class: cls(layerClass("voronoi-geo-path"), "fill-transparent stroke-transparent", classes.path),
                    onclick: (e) => onclick?.(e, { data: feature.properties.site.data, feature }),
                    onpointerenter: (e) => onpointerenter?.(e, { data: feature.properties.site.data, feature }),
                    onpointermove: (e) => onpointermove?.(e, { data: feature.properties.site.data, feature }),
                    onpointerdown: (e) => onpointerdown?.(e, { data: feature.properties.site.data, feature }),
                    onpointerleave,
                    ontouchmove: (e) => {
                      e.preventDefault();
                    }
                  });
                },
                $$slots: { default: true }
              });
            }
            $$renderer3.push(`<!--]-->`);
          } else {
            $$renderer3.push("<!--[!-->");
            const voronoi = Delaunay.from(points).voronoi([0, 0, boundWidth, boundHeight]);
            $$renderer3.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(points);
            for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
              let point = each_array_1[i];
              const pathData = voronoi.renderCell(i);
              if (pathData) {
                $$renderer3.push("<!--[-->");
                CircleClipPath($$renderer3, {
                  cx: point[0],
                  cy: point[1],
                  r: r ?? 0,
                  disabled: disableClip,
                  children: ($$renderer4) => {
                    Spline($$renderer4, {
                      pathData,
                      class: cls(layerClass("voronoi-path"), "fill-transparent stroke-transparent", classes.path),
                      onclick: (e) => onclick?.(e, { data: point.data, point }),
                      onpointerenter: (e) => onpointerenter?.(e, { data: point.data, point }),
                      onpointermove: (e) => onpointermove?.(e, { data: point.data, point }),
                      onpointerleave,
                      onpointerdown: (e) => onpointerdown?.(e, { data: point.data, point }),
                      ontouchmove: (e) => {
                        e.preventDefault();
                      }
                    });
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function quadtreeRects(quadtree2, showLeaves = true) {
  const rects = [];
  quadtree2.visit((node, x02, y02, x12, y12) => {
    if (showLeaves || Array.isArray(node)) {
      rects.push({ x: x02, y: y02, width: x12 - x02, height: y12 - y02 });
    }
  });
  return rects;
}
function asAny(x2) {
  return x2;
}
function handleBarTooltipPayload({ ctx, data, metaCtx }) {
  const seriesItems = metaCtx.stackSeries ? [...metaCtx.visibleSeries].reverse() : metaCtx.visibleSeries;
  const payload = seriesItems.map((s) => {
    const seriesTooltipData = s.data ? findRelatedData(s.data, data, ctx.x) : data;
    const valueAccessor = accessor(s.value ?? (s.data ? ctx.y : s.key));
    const label = metaCtx.orientation === "vertical" ? ctx.x(data) : ctx.y(data);
    const name = s.label ?? (s.key !== "default" ? s.key : "value");
    const value = seriesTooltipData ? valueAccessor(seriesTooltipData) : void 0;
    const color2 = s.color ?? ctx.cScale?.(ctx.c(data));
    return {
      ...s.data,
      chartType: "bar",
      color: color2,
      label,
      name,
      value,
      valueAccessor,
      key: s.key,
      payload: data,
      rawSeriesData: s,
      formatter: format$1
    };
  });
  return payload;
}
function handleAreaTooltipPayload({ ctx, data, metaCtx }) {
  const seriesItems = metaCtx.stackSeries ? [...metaCtx.visibleSeries].reverse() : metaCtx.visibleSeries;
  const payload = seriesItems.map((s) => {
    const seriesTooltipData = s.data ? findRelatedData(s.data, data, ctx.x) : data;
    const valueAccessor = accessor(s.value ?? (s.data ? asAny(ctx.y) : s.key));
    const label = ctx.x(data);
    const name = s.label ?? (s.key !== "default" ? s.key : "value");
    const value = seriesTooltipData ? valueAccessor(seriesTooltipData) : void 0;
    const color2 = s.color ?? ctx.cScale?.(ctx.c(data));
    return {
      ...s.data,
      chartType: "area",
      color: color2,
      label,
      name,
      value,
      valueAccessor,
      key: s.key,
      payload: data,
      rawSeriesData: s,
      formatter: format$1
    };
  });
  return payload;
}
function handleLineTooltipPayload({ ctx, data, metaCtx }) {
  return metaCtx.visibleSeries.map((s) => {
    const seriesTooltipData = s.data ? findRelatedData(s.data, data, ctx.x) : data;
    const label = ctx.x(data);
    const valueAccessor = accessor(s.value ?? (s.data ? asAny(ctx.y) : s.key));
    const name = s.label ?? (s.key !== "default" ? s.key : "value");
    const value = seriesTooltipData ? valueAccessor(seriesTooltipData) : void 0;
    const color2 = s.color ?? ctx.cScale?.(ctx.c(data));
    return {
      ...s.data,
      chartType: "line",
      color: color2,
      label,
      name,
      value,
      valueAccessor,
      key: s.key,
      payload: data,
      rawSeriesData: s,
      formatter: format$1
    };
  });
}
function handlePieOrArcTooltipPayload({ ctx, data, metaCtx }) {
  const keyAccessor = accessor(metaCtx.key);
  const labelAccessor = accessor(metaCtx.label);
  const valueAccessor = accessor(metaCtx.value);
  const colorAccessor = accessor(metaCtx.color);
  return [
    {
      key: keyAccessor(data),
      label: labelAccessor(data) || keyAccessor(data),
      value: valueAccessor(data),
      color: colorAccessor(data) ?? ctx.cScale?.(ctx.c(data)),
      payload: data,
      chartType: "pie",
      labelAccessor,
      keyAccessor,
      valueAccessor,
      colorAccessor
    }
  ];
}
function handleScatterTooltipPayload({ ctx, data, metaCtx }) {
  return [{ payload: data, key: "" }];
}
const _TooltipMetaContext = new Context("TooltipMetaContext");
function getTooltipMetaContext() {
  return _TooltipMetaContext.getOr(null);
}
function setTooltipMetaContext(v) {
  return _TooltipMetaContext.set(v);
}
function getTooltipPayload({ ctx, tooltipData, metaCtx }) {
  if (!metaCtx)
    return [{ payload: tooltipData, key: "" }];
  switch (metaCtx.type) {
    case "bar":
      return handleBarTooltipPayload({ ctx, data: tooltipData, metaCtx });
    case "area":
      return handleAreaTooltipPayload({ ctx, data: tooltipData, metaCtx });
    case "line":
      return handleLineTooltipPayload({ ctx, data: tooltipData, metaCtx });
    case "pie":
    case "arc":
      return handlePieOrArcTooltipPayload({ ctx, data: tooltipData, metaCtx });
    case "scatter":
      return handleScatterTooltipPayload({ ctx, data: tooltipData, metaCtx });
  }
}
const _TooltipContext = new Context("TooltipContext");
function getTooltipContext() {
  return _TooltipContext.get();
}
function setTooltipContext(tooltip) {
  return _TooltipContext.set(tooltip);
}
function TooltipContext($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    const geoCtx = getGeoContext();
    let {
      ref: refProp = void 0,
      debug = false,
      findTooltipData = "closest",
      hideDelay = 0,
      locked = false,
      mode = "manual",
      onclick = () => {
      },
      radius = Infinity,
      raiseTarget = false,
      tooltipContext: tooltipContextProp = void 0,
      children
    } = $$props;
    let x2 = 0;
    let y2 = 0;
    let data = null;
    let payload = [];
    let isHoveringTooltipArea = false;
    let isHoveringTooltipContent = false;
    const metaCtx = getTooltipMetaContext();
    const tooltipContext = {
      get x() {
        return x2;
      },
      get y() {
        return y2;
      },
      get data() {
        return data;
      },
      get payload() {
        return payload;
      },
      show: showTooltip,
      hide: hideTooltip,
      get mode() {
        return mode;
      },
      get isHoveringTooltipArea() {
        return isHoveringTooltipArea;
      },
      get isHoveringTooltipContent() {
        return isHoveringTooltipContent;
      },
      set isHoveringTooltipContent(value) {
        isHoveringTooltipContent = value;
      }
    };
    tooltipContextProp = tooltipContext;
    setTooltipContext(tooltipContext);
    let hideTimeoutId;
    const bisectX = bisector((d) => {
      const value = ctx.x(d);
      if (Array.isArray(value)) {
        return value[0];
      } else {
        return value;
      }
    }).left;
    const bisectY = bisector((d) => {
      const value = ctx.y(d);
      if (Array.isArray(value)) {
        return value[0];
      } else {
        return value;
      }
    }).left;
    function findData(previousValue, currentValue, valueAtPoint, accessor2) {
      switch (findTooltipData) {
        case "closest":
          if (currentValue === void 0) {
            return previousValue;
          } else if (previousValue === void 0) {
            return currentValue;
          } else {
            return Number(valueAtPoint) - Number(accessor2(previousValue)) > Number(accessor2(currentValue)) - Number(valueAtPoint) ? currentValue : previousValue;
          }
        case "left":
          return previousValue;
        case "right":
        default:
          return currentValue;
      }
    }
    function showTooltip(e, tooltipData) {
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
      }
      if (locked) {
        return;
      }
      const containerNode = e.target.closest(".lc-root-container");
      const point = localPoint(e, containerNode);
      if (tooltipData == null) {
        switch (mode) {
          case "bisect-x": {
            let xValueAtPoint;
            if (ctx.radial) {
              const { radians: radians2 } = cartesianToPolar(point.x - ctx.width / 2, point.y - ctx.height / 2);
              xValueAtPoint = scaleInvert(ctx.xScale, radians2);
            } else {
              xValueAtPoint = scaleInvert(ctx.xScale, point.x - ctx.padding.left);
            }
            const index = bisectX(ctx.flatData, xValueAtPoint, 1);
            const previousValue = ctx.flatData[index - 1];
            const currentValue = ctx.flatData[index];
            tooltipData = findData(previousValue, currentValue, xValueAtPoint, ctx.x);
            break;
          }
          case "bisect-y": {
            const yValueAtPoint = scaleInvert(ctx.yScale, point.y - ctx.padding.top);
            const index = bisectY(ctx.flatData, yValueAtPoint, 1);
            const previousValue = ctx.flatData[index - 1];
            const currentValue = ctx.flatData[index];
            tooltipData = findData(previousValue, currentValue, yValueAtPoint, ctx.y);
            break;
          }
          case "bisect-band": {
            const xValueAtPoint = scaleInvert(ctx.xScale, point.x);
            const yValueAtPoint = scaleInvert(ctx.yScale, point.y);
            if (isScaleBand(ctx.xScale)) {
              const bandData = ctx.flatData.filter((d) => ctx.x(d) === xValueAtPoint).sort(sortFunc(ctx.y));
              const index = bisectY(bandData, yValueAtPoint, 1);
              const previousValue = bandData[index - 1];
              const currentValue = bandData[index];
              tooltipData = findData(previousValue, currentValue, yValueAtPoint, ctx.y);
            } else if (isScaleBand(ctx.yScale)) {
              const bandData = ctx.flatData.filter((d) => ctx.y(d) === yValueAtPoint).sort(sortFunc(ctx.x));
              const index = bisectX(bandData, xValueAtPoint, 1);
              const previousValue = bandData[index - 1];
              const currentValue = bandData[index];
              tooltipData = findData(previousValue, currentValue, xValueAtPoint, ctx.x);
            } else ;
            break;
          }
          case "quadtree-x":
          case "quadtree-y":
          case "quadtree": {
            tooltipData = quadtree$1?.find(point.x - ctx.padding.left, point.y - ctx.padding.top, radius);
            break;
          }
        }
      }
      if (tooltipData) {
        if (raiseTarget) {
          raise(e.target);
        }
        const payloadData = getTooltipPayload({ ctx, tooltipData, metaCtx });
        x2 = point.x;
        y2 = point.y;
        data = tooltipData;
        payload = payloadData;
      } else {
        hideTooltip();
      }
    }
    function hideTooltip() {
      if (locked) {
        return;
      }
      isHoveringTooltipArea = false;
      hideTimeoutId = setTimeout(
        () => {
          if (!isHoveringTooltipArea && !isHoveringTooltipContent) {
            data = null;
            payload = [];
          }
        },
        hideDelay
      );
    }
    const quadtree$1 = (() => {
      if (["quadtree", "quadtree-x", "quadtree-y"].includes(mode)) {
        return quadtree().x((d) => {
          if (mode === "quadtree-y") {
            return 0;
          }
          if (geoCtx.projection) {
            const lat = ctx.x(d);
            const long = ctx.y(d);
            const geoValue = geoCtx.projection([lat, long]) ?? [0, 0];
            return geoValue[0];
          }
          const value = ctx.xGet(d);
          if (Array.isArray(value)) {
            return min$2(value);
          } else {
            return value;
          }
        }).y((d) => {
          if (mode === "quadtree-x") {
            return 0;
          }
          if (geoCtx.projection) {
            const lat = ctx.x(d);
            const long = ctx.y(d);
            const geoValue = geoCtx.projection([lat, long]) ?? [0, 0];
            return geoValue[1];
          }
          const value = ctx.yGet(d);
          if (Array.isArray(value)) {
            return min$2(value);
          } else {
            return value;
          }
        }).addAll(ctx.flatData);
      }
    })();
    const rects = (() => {
      if (mode === "bounds" || mode === "band") {
        return ctx.flatData.map((d) => {
          const xValue = ctx.xGet(d);
          const yValue = ctx.yGet(d);
          const x3 = Array.isArray(xValue) ? xValue[0] : xValue;
          const y3 = Array.isArray(yValue) ? yValue[0] : yValue;
          const xOffset = isScaleBand(ctx.xScale) ? ctx.xScale.padding() * ctx.xScale.step() / 2 : 0;
          const yOffset = isScaleBand(ctx.yScale) ? ctx.yScale.padding() * ctx.yScale.step() / 2 : 0;
          const fullWidth = max$2(ctx.xRange) - min$2(ctx.xRange);
          const fullHeight = max$2(ctx.yRange) - min$2(ctx.yRange);
          if (mode === "band") {
            return {
              x: isScaleBand(ctx.xScale) ? x3 - xOffset : min$2(ctx.xRange),
              y: isScaleBand(ctx.yScale) ? y3 - yOffset : min$2(ctx.yRange),
              width: isScaleBand(ctx.xScale) ? ctx.xScale.step() : fullWidth,
              height: isScaleBand(ctx.yScale) ? ctx.yScale.step() : fullHeight,
              data: d
            };
          } else if (mode === "bounds") {
            return {
              x: isScaleBand(ctx.xScale) || Array.isArray(xValue) ? x3 - xOffset : min$2(ctx.xRange),
              // y: isScaleBand($yScale) || Array.isArray(yValue) ? y - yOffset : min($yRange),
              y: y3 - yOffset,
              width: Array.isArray(xValue) ? xValue[1] - xValue[0] : isScaleBand(ctx.xScale) ? ctx.xScale.step() : min$2(ctx.xRange) + x3,
              height: Array.isArray(yValue) ? yValue[1] - yValue[0] : isScaleBand(ctx.yScale) ? ctx.yScale.step() : max$2(ctx.yRange) - y3,
              data: d
            };
          }
        }).filter((x3) => x3 !== void 0).sort(sortFunc("x"));
      }
      return [];
    })();
    const triggerPointerEvents = [
      "bisect-x",
      "bisect-y",
      "bisect-band",
      "quadtree",
      "quadtree-x",
      "quadtree-y"
    ].includes(mode);
    $$renderer2.push(`<div${attr_class(clsx(cls(layerClass("tooltip-context"), "absolute", debug && triggerPointerEvents && "bg-danger/10 outline outline-danger")))}${attr_style("", {
      top: `${stringify(ctx.padding.top)}px`,
      left: `${stringify(ctx.padding.left)}px`,
      width: `${stringify(ctx.width)}px`,
      height: `${stringify(ctx.height)}px`
    })}><div${attr_class(clsx(
      // Ignore clicks without data (triggered from Legend clicks, for example)
      cls(layerClass("tooltip-context-container"), "absolute")
    ))}${attr_style("", {
      top: `-${stringify(ctx.padding.top ?? 0)}px`,
      left: `-${stringify(ctx.padding.left ?? 0)}px`,
      width: `${stringify(ctx.containerWidth)}px`,
      height: `${stringify(ctx.containerHeight)}px`
    })}>`);
    children?.($$renderer2, { tooltipContext });
    $$renderer2.push(`<!----> `);
    if (mode === "voronoi") {
      $$renderer2.push("<!--[-->");
      Svg($$renderer2, {
        children: ($$renderer3) => {
          Voronoi2($$renderer3, {
            r: radius,
            onpointerenter: (e, { data: data2 }) => {
              showTooltip(e, data2);
            },
            onpointermove: (e, { data: data2 }) => {
              showTooltip(e, data2);
            },
            onpointerleave: () => hideTooltip(),
            onpointerdown: (e) => {
              if (e.target?.hasPointerCapture(e.pointerId)) {
                e.target.releasePointerCapture(e.pointerId);
              }
            },
            onclick: (e, { data: data2 }) => {
              onclick(e, { data: data2 });
            },
            classes: { path: cls(debug && "fill-danger/10 stroke-danger") }
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (mode === "bounds" || mode === "band") {
        $$renderer2.push("<!--[-->");
        Svg($$renderer2, {
          center: ctx.radial,
          children: ($$renderer3) => {
            $$renderer3.push(`<g${attr_class(clsx(layerClass("tooltip-rects-g")))}><!--[-->`);
            const each_array = ensure_array_like(rects);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let rect = each_array[$$index];
              if (ctx.radial) {
                $$renderer3.push("<!--[-->");
                Arc($$renderer3, {
                  innerRadius: rect.y,
                  outerRadius: rect.y + rect.height,
                  startAngle: rect.x,
                  endAngle: rect.x + rect.width,
                  class: cls(layerClass("tooltip-rect"), debug ? "fill-danger/10 stroke-danger" : "fill-transparent"),
                  onpointerenter: (e) => showTooltip(e, rect?.data),
                  onpointermove: (e) => showTooltip(e, rect?.data),
                  onpointerleave: () => hideTooltip(),
                  onpointerdown: (e) => {
                    const target = e.target;
                    if (target?.hasPointerCapture(e.pointerId)) {
                      target.releasePointerCapture(e.pointerId);
                    }
                  },
                  onclick: (e) => {
                    onclick(e, { data: rect?.data });
                  }
                });
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push(`<rect${attr("x", rect?.x)}${attr("y", rect?.y)}${attr("width", rect?.width)}${attr("height", rect?.height)}${attr_class(clsx(cls(layerClass("tooltip-rect"), debug ? "fill-danger/10 stroke-danger" : "fill-transparent")))}></rect>`);
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]--></g>`);
          },
          $$slots: { default: true }
        });
      } else {
        $$renderer2.push("<!--[!-->");
        if (["quadtree", "quadtree-x", "quadtree-y"].includes(mode) && debug) {
          $$renderer2.push("<!--[-->");
          Svg($$renderer2, {
            pointerEvents: false,
            children: ($$renderer3) => {
              ChartClipPath($$renderer3, {
                children: ($$renderer4) => {
                  $$renderer4.push(`<g${attr_class(clsx(layerClass("tooltip-quadtree-g")))}>`);
                  if (quadtree$1) {
                    $$renderer4.push("<!--[-->");
                    $$renderer4.push(`<!--[-->`);
                    const each_array_1 = ensure_array_like(quadtreeRects(quadtree$1, false));
                    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                      let rect = each_array_1[$$index_1];
                      $$renderer4.push(`<rect${attr("x", rect.x)}${attr("y", rect.y)}${attr("width", rect.width)}${attr("height", rect.height)}${attr_class(clsx(cls(layerClass("tooltip-quadtree-rect"), debug ? "fill-danger/10 stroke-danger" : "fill-transparent")))}></rect>`);
                    }
                    $$renderer4.push(`<!--]-->`);
                  } else {
                    $$renderer4.push("<!--[!-->");
                  }
                  $$renderer4.push(`<!--]--></g>`);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { ref: refProp, tooltipContext: tooltipContextProp });
  });
}
const _BrushContext = new Context("BrushContext");
function setBrushContext(brush) {
  return _BrushContext.set(brush);
}
function BrushContext($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      brushContext: brushContextProp = void 0,
      axis = "x",
      handleSize = 5,
      resetOnEnd = false,
      ignoreResetClick = false,
      xDomain,
      yDomain,
      mode = "integrated",
      disabled = false,
      range: range2 = {},
      handle = {},
      classes = {},
      onBrushEnd = () => {
      },
      onBrushStart = () => {
      },
      onChange = () => {
      },
      onReset = () => {
      },
      children
    } = $$props;
    if (xDomain === void 0) {
      xDomain = ctx.xScale.domain();
    }
    if (yDomain === void 0) {
      yDomain = ctx.yScale.domain();
    }
    ctx.config.xDomain;
    ctx.config.yDomain;
    const xDomainMinMax = extent(ctx.xScale.domain());
    xDomainMinMax[0];
    xDomainMinMax[1];
    const yDomainMinMax = extent(ctx.yScale.domain());
    yDomainMinMax[0];
    yDomainMinMax[1];
    const top = ctx.yScale(yDomain?.[1]);
    const bottom = ctx.yScale(yDomain?.[0]);
    const left = ctx.xScale(xDomain?.[0]);
    const right = ctx.xScale(xDomain?.[1]);
    const _range = {
      x: axis === "both" || axis === "x" ? left : 0,
      y: axis === "both" || axis === "y" ? top : 0,
      width: axis === "both" || axis === "x" ? right - left : ctx.width,
      height: axis === "both" || axis === "y" ? bottom - top : ctx.height
    };
    let isActive = false;
    const brushContext = {
      get xDomain() {
        return xDomain;
      },
      set xDomain(v) {
        xDomain = v;
      },
      get yDomain() {
        return yDomain;
      },
      set yDomain(v) {
        yDomain = v;
      },
      get isActive() {
        return isActive;
      },
      set isActive(v) {
        isActive = v;
      },
      get range() {
        return _range;
      },
      get handleSize() {
        return handleSize;
      }
    };
    brushContextProp = brushContext;
    setBrushContext(brushContext);
    if (
      // Set reactively to handle cases where xDomain/yDomain are set externally (ex. `bind:xDomain`)
      disabled
    ) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2, { brushContext });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      const handleClass = layerClass("brush-handle");
      $$renderer2.push(`<div${attr_class(clsx(cls(layerClass("brush-context"), "absolute touch-none")))}${attr_style("", {
        top: `${stringify(ctx.padding.top)}px`,
        left: `${stringify(ctx.padding.left)}px`,
        width: `${stringify(ctx.width)}px`,
        height: `${stringify(ctx.height)}px`
      })}><div${attr_class(clsx(cls(layerClass("brush-container"), "absolute")))}${attr_style("", {
        top: `-${stringify(ctx.padding.top ?? 0)}px`,
        left: `-${stringify(ctx.padding.left ?? 0)}px`,
        width: `${stringify(ctx.containerWidth)}px`,
        height: `${stringify(ctx.containerHeight)}px`
      })}>`);
      children?.($$renderer2, { brushContext });
      $$renderer2.push(`<!----></div> `);
      if (brushContext.isActive) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div${attributes(
          {
            ...range2,
            class: clsx(cls(layerClass("brush-range"), "absolute bg-surface-content/10 cursor-move select-none", "z-10", classes.range, range2?.class))
          },
          void 0,
          void 0,
          {
            left: `${stringify(_range.x)}px`,
            top: `${stringify(_range.y)}px`,
            width: `${stringify(_range.width)}px`,
            height: `${stringify(_range.height)}px`
          }
        )}></div> `);
        if (axis === "both" || axis === "y") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div${attributes(
            {
              ...handle,
              "data-position": "top",
              class: clsx(cls(handleClass, "cursor-ns-resize select-none", "range absolute", "z-10", classes.handle, handle?.class))
            },
            void 0,
            void 0,
            {
              left: `${stringify(_range.x)}px`,
              top: `${stringify(_range.y)}px`,
              width: `${stringify(_range.width)}px`,
              height: `${stringify(handleSize)}px`
            }
          )}></div> <div${attributes(
            {
              ...handle,
              "data-position": "bottom",
              class: clsx(cls(handleClass, "handle bottom", "cursor-ns-resize select-none", "range absolute", "z-10", classes.handle, handle?.class))
            },
            void 0,
            void 0,
            {
              left: `${stringify(_range.x)}px`,
              top: `${stringify(bottom - handleSize)}px`,
              width: `${stringify(_range.width)}px`,
              height: `${stringify(handleSize)}px`
            }
          )}></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (axis === "both" || axis === "x") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div${attributes(
            {
              ...handle,
              "data-position": "left",
              class: clsx(cls(handleClass, "cursor-ew-resize select-none", "range absolute", "z-10", classes.handle, handle?.class))
            },
            void 0,
            void 0,
            {
              left: `${stringify(_range.x)}px`,
              top: `${stringify(_range.y)}px`,
              width: `${stringify(handleSize)}px`,
              height: `${stringify(_range.height)}px`
            }
          )}></div> <div${attributes(
            {
              ...handle,
              "data-position": "right",
              class: clsx(cls(handleClass, "cursor-ew-resize select-none", "range absolute", "z-10", classes.handle, handle?.class))
            },
            void 0,
            void 0,
            {
              left: `${stringify(right - handleSize + 1)}px`,
              top: `${stringify(_range.y)}px`,
              width: `${stringify(handleSize)}px`,
              height: `${stringify(_range.height)}px`
            }
          )}></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { brushContext: brushContextProp });
  });
}
const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
const _ChartContext = new Context("ChartContext");
function getChartContext() {
  return _ChartContext.getOr({});
}
function setChartContext(context) {
  return _ChartContext.set(context);
}
const _RenderContext = new Context("RenderContext");
function getRenderContext() {
  return _RenderContext.get();
}
function setRenderContext(context) {
  return _RenderContext.set(context);
}
function Chart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ssr = false,
      pointerEvents = true,
      position = "relative",
      percentRange = false,
      ref: refProp = void 0,
      x: xProp,
      y: yProp,
      z: zProp,
      r: rProp,
      data = [],
      xDomain: xDomainProp,
      yDomain: yDomainProp,
      zDomain: zDomainProp,
      rDomain: rDomainProp,
      xNice = false,
      yNice = false,
      zNice = false,
      rNice = false,
      xPadding,
      yPadding,
      zPadding,
      rPadding,
      // @ts-expect-error shh
      xScale: xScaleProp = linear(),
      // @ts-expect-error shh
      yScale: yScaleProp = linear(),
      zScale: zScaleProp = linear(),
      rScale: rScaleProp = sqrt$2(),
      flatData: flatDataProp,
      padding: paddingProp = {},
      verbose = true,
      debug = false,
      extents: extentsProp = {},
      xDomainSort = false,
      yDomainSort = false,
      zDomainSort = false,
      rDomainSort = false,
      xReverse = false,
      zReverse = false,
      rReverse = false,
      yRange: _yRangeProp,
      zRange: zRangeProp,
      rRange: rRangeProp,
      xBaseline = null,
      yBaseline = null,
      meta = {},
      children: _children,
      radial = false,
      xRange: _xRangeProp,
      x1: x1Prop,
      x1Domain: x1DomainProp,
      x1Range: x1RangeProp,
      x1Scale: x1ScaleProp,
      y1: y1Prop,
      y1Domain: y1DomainProp,
      y1Range: y1RangeProp,
      y1Scale: y1ScaleProp,
      c: cProp,
      cScale: cScaleProp,
      cDomain: cDomainProp,
      cRange: cRangeProp,
      onResize,
      geo,
      context: contextProp = void 0,
      tooltip,
      transform,
      onTransform,
      ondragend,
      ondragstart,
      brush
    } = $$props;
    let ref = void 0;
    const xRangeProp = _xRangeProp ? _xRangeProp : radial ? [0, 2 * Math.PI] : void 0;
    let containerWidth = 100;
    let containerHeight = 100;
    useDebounce(printDebug, 200);
    const _xDomain = (() => {
      if (xDomainProp !== void 0) return xDomainProp;
      if (xBaseline != null && Array.isArray(data)) {
        const xValues = data.flatMap(accessor(xProp));
        return [min$2([xBaseline, ...xValues]), max$2([xBaseline, ...xValues])];
      }
    })();
    const _yDomain = (() => {
      if (yDomainProp !== void 0) return yDomainProp;
      if (yBaseline != null && Array.isArray(data)) {
        const yValues = data.flatMap(accessor(yProp));
        return [min$2([yBaseline, ...yValues]), max$2([yBaseline, ...yValues])];
      }
    })();
    const yRangeProp = _yRangeProp ?? (radial ? ({ height: height2 }) => [0, height2 / 2] : void 0);
    const yReverse = yScaleProp ? !isScaleBand(yScaleProp) : true;
    const x2 = makeAccessor(xProp);
    const y2 = makeAccessor(yProp);
    const z = makeAccessor(zProp);
    const r = makeAccessor(rProp);
    const c = accessor(cProp);
    const x12 = accessor(x1Prop);
    const y12 = accessor(y1Prop);
    const flatData = flatDataProp ?? data;
    const filteredExtents = filterObject(snapshot(extentsProp));
    const activeGetters = { x: x2, y: y2, z, r };
    const padding = (() => {
      if (typeof paddingProp === "number") {
        return {
          ...defaultPadding,
          top: paddingProp,
          right: paddingProp,
          bottom: paddingProp,
          left: paddingProp
        };
      }
      return { ...defaultPadding, ...paddingProp };
    })();
    const box = (() => {
      const top = padding.top;
      const right = containerWidth - padding.right;
      const bottom = containerHeight - padding.bottom;
      const left = padding.left;
      const width2 = right - left;
      const height2 = bottom - top;
      return { top, left, bottom, right, width: width2, height: height2 };
    })();
    const width = box.width;
    const height = box.height;
    const extents = (() => {
      const scaleLookup = {
        x: { scale: xScaleProp, sort: xDomainSort },
        y: { scale: yScaleProp, sort: yDomainSort },
        z: { scale: zScaleProp, sort: zDomainSort },
        r: { scale: rScaleProp, sort: rDomainSort }
      };
      const getters = filterObject(activeGetters, filteredExtents);
      const activeScales = Object.fromEntries(Object.keys(getters).map((k) => [k, scaleLookup[k]]));
      if (Object.keys(getters).length > 0) {
        const calculatedExtents = calcScaleExtents(flatData, getters, activeScales);
        return { ...calculatedExtents, ...filteredExtents };
      } else {
        return {};
      }
    })();
    const xDomain = calcDomain("x", extents, _xDomain);
    const yDomain = calcDomain("y", extents, _yDomain);
    const zDomain = calcDomain("z", extents, zDomainProp);
    const rDomain = calcDomain("r", extents, rDomainProp);
    const x1Domain = x1DomainProp ?? extent(chartDataArray(data), x12);
    const y1Domain = y1DomainProp ?? extent(chartDataArray(data), y12);
    const cDomain = cDomainProp ?? unique(chartDataArray(data).map(c));
    const snappedPadding = snapshot(xPadding);
    snapshot(extents);
    const xScale = createChartScale("x", {
      scale: xScaleProp,
      domain: xDomain,
      padding: snappedPadding,
      nice: xNice,
      reverse: xReverse,
      percentRange,
      range: xRangeProp,
      height,
      width
    });
    const xGet = createGetter(x2, xScale);
    const yScale = createChartScale("y", {
      scale: yScaleProp,
      domain: yDomain,
      padding: yPadding,
      nice: yNice,
      reverse: yReverse,
      percentRange,
      range: yRangeProp,
      height,
      width
    });
    const yGet = createGetter(y2, yScale);
    const zScale = createChartScale("z", {
      scale: zScaleProp,
      domain: zDomain,
      padding: zPadding,
      nice: zNice,
      reverse: zReverse,
      percentRange,
      range: zRangeProp,
      height,
      width
    });
    const zGet = createGetter(z, zScale);
    const rScale = createChartScale("r", {
      scale: rScaleProp,
      domain: rDomain,
      padding: rPadding,
      nice: rNice,
      reverse: rReverse,
      percentRange,
      range: rRangeProp,
      height,
      width
    });
    const rGet = createGetter(r, rScale);
    const x1Scale = x1ScaleProp && x1RangeProp ? createScale(x1ScaleProp, x1Domain, x1RangeProp, { xScale, width, height }) : null;
    const x1Get = createGetter(x12, x1Scale);
    const y1Scale = y1ScaleProp && y1RangeProp ? createScale(y1ScaleProp, y1Domain, y1RangeProp, { yScale, width, height }) : null;
    const y1Get = createGetter(y12, y1Scale);
    const cScale = cRangeProp ? createScale(cScaleProp ?? ordinal(), cDomain, cRangeProp, { width, height }) : null;
    const cGet = (d) => cScale?.(c(d));
    const xDomainPossiblyNice = xScale.domain();
    const yDomainPossiblyNice = yScale.domain();
    const zDomainPossiblyNice = zScale.domain();
    const rDomainPossiblyNice = rScale.domain();
    const xRange = getRange(xScale);
    const yRange = getRange(yScale);
    const zRange = getRange(zScale);
    const rRange = getRange(rScale);
    const aspectRatio = width / height;
    const config = {
      x: xProp,
      y: yProp,
      z: zProp,
      r: rProp,
      c: cProp,
      x1: x1Prop,
      y1: y1Prop,
      xDomain: _xDomain,
      yDomain: _yDomain,
      zDomain: zDomainProp,
      rDomain: rDomainProp,
      x1Domain: x1DomainProp,
      y1Domain: y1DomainProp,
      cDomain: cDomainProp,
      xRange: _xRangeProp,
      yRange: _yRangeProp,
      zRange: zRangeProp,
      rRange: rRangeProp,
      cRange: cRangeProp,
      x1Range: x1RangeProp,
      y1Range: y1RangeProp
    };
    let geoContext = null;
    let transformContext = null;
    let tooltipContext = null;
    let brushContext = null;
    const context = {
      get activeGetters() {
        return activeGetters;
      },
      get config() {
        return config;
      },
      get width() {
        return width;
      },
      get height() {
        return height;
      },
      get percentRange() {
        return percentRange;
      },
      get aspectRatio() {
        return aspectRatio;
      },
      get containerWidth() {
        return containerWidth;
      },
      get containerHeight() {
        return containerHeight;
      },
      get x() {
        return x2;
      },
      get y() {
        return y2;
      },
      get z() {
        return z;
      },
      get r() {
        return r;
      },
      get c() {
        return c;
      },
      get x1() {
        return x12;
      },
      get y1() {
        return y12;
      },
      get data() {
        return data;
      },
      get xNice() {
        return xNice;
      },
      get yNice() {
        return yNice;
      },
      get zNice() {
        return zNice;
      },
      get rNice() {
        return rNice;
      },
      get xDomainSort() {
        return xDomainSort;
      },
      get yDomainSort() {
        return yDomainSort;
      },
      get zDomainSort() {
        return zDomainSort;
      },
      get rDomainSort() {
        return rDomainSort;
      },
      get xReverse() {
        return xReverse;
      },
      get yReverse() {
        return yReverse;
      },
      get zReverse() {
        return zReverse;
      },
      get rReverse() {
        return rReverse;
      },
      get xPadding() {
        return xPadding;
      },
      get yPadding() {
        return yPadding;
      },
      get zPadding() {
        return zPadding;
      },
      get rPadding() {
        return rPadding;
      },
      get padding() {
        return padding;
      },
      get flatData() {
        return flatData;
      },
      get extents() {
        return extents;
      },
      get xDomain() {
        return xDomainPossiblyNice;
      },
      get yDomain() {
        return yDomainPossiblyNice;
      },
      get zDomain() {
        return zDomainPossiblyNice;
      },
      get rDomain() {
        return rDomainPossiblyNice;
      },
      get cDomain() {
        return cDomain;
      },
      get x1Domain() {
        return x1Domain;
      },
      get y1Domain() {
        return y1Domain;
      },
      get xRange() {
        return xRange;
      },
      get yRange() {
        return yRange;
      },
      get zRange() {
        return zRange;
      },
      get rRange() {
        return rRange;
      },
      get cRange() {
        return cRangeProp;
      },
      get x1Range() {
        return x1RangeProp;
      },
      get y1Range() {
        return y1RangeProp;
      },
      get meta() {
        return meta;
      },
      set meta(v) {
        meta = v;
      },
      get xScale() {
        return xScale;
      },
      get yScale() {
        return yScale;
      },
      get zScale() {
        return zScale;
      },
      get rScale() {
        return rScale;
      },
      get yGet() {
        return yGet;
      },
      get xGet() {
        return xGet;
      },
      get zGet() {
        return zGet;
      },
      get rGet() {
        return rGet;
      },
      get cGet() {
        return cGet;
      },
      get x1Get() {
        return x1Get;
      },
      get y1Get() {
        return y1Get;
      },
      get cScale() {
        return cScale;
      },
      get x1Scale() {
        return x1Scale;
      },
      get y1Scale() {
        return y1Scale;
      },
      get radial() {
        return radial;
      },
      get containerRef() {
        return ref;
      },
      get geo() {
        return geoContext;
      },
      get transform() {
        return transformContext;
      },
      get tooltip() {
        return tooltipContext;
      },
      get brush() {
        return brushContext;
      }
    };
    contextProp = context;
    setChartContext(context);
    const initialTransform = geo?.applyTransform?.includes("translate") && geo?.fitGeojson && geo?.projection ? geoFitObjectTransform(geo.projection(), [width, height], geo.fitGeojson) : void 0;
    const processTranslate = (() => {
      if (!geo) return void 0;
      return (x3, y3, deltaX, deltaY) => {
        if (geo.applyTransform?.includes("rotate") && geoContext?.projection) {
          const projectionScale = geoContext.projection.scale() ?? 0;
          const sensitivity = 75;
          return {
            x: x3 + deltaX * (sensitivity / projectionScale),
            y: y3 + deltaY * (sensitivity / projectionScale) * -1
          };
        } else {
          return { x: x3 + deltaX, y: y3 + deltaY };
        }
      };
    })();
    const brushProps = typeof brush === "object" ? brush : { disabled: !brush };
    const tooltipProps = typeof tooltip === "object" ? tooltip : {};
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (ssr === true || typeof window !== "undefined") {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div${attr_class(clsx(layerClass("root-container")), "svelte-1bsk27l")}${attr_style("", {
          position,
          top: position === "absolute" ? "0" : null,
          right: position === "absolute" ? "0" : null,
          bottom: position === "absolute" ? "0" : null,
          left: position === "absolute" ? "0" : null,
          "pointer-events": pointerEvents === false ? "none" : null
        })}><!---->`);
        {
          TransformContext($$renderer3, spread_props([
            {
              mode: transform?.mode ?? geo?.applyTransform?.length ? "manual" : "none",
              initialTranslate: initialTransform?.translate,
              initialScale: initialTransform?.scale,
              processTranslate
            },
            transform,
            {
              ondragstart,
              onTransform,
              ondragend,
              get transformContext() {
                return transformContext;
              },
              set transformContext($$value) {
                transformContext = $$value;
                $$settled = false;
              },
              children: ($$renderer4) => {
                GeoContext($$renderer4, spread_props([
                  geo,
                  {
                    get geoContext() {
                      return geoContext;
                    },
                    set geoContext($$value) {
                      geoContext = $$value;
                      $$settled = false;
                    },
                    children: ($$renderer5) => {
                      BrushContext($$renderer5, spread_props([
                        brushProps,
                        {
                          get brushContext() {
                            return brushContext;
                          },
                          set brushContext($$value) {
                            brushContext = $$value;
                            $$settled = false;
                          },
                          children: ($$renderer6) => {
                            TooltipContext($$renderer6, spread_props([
                              tooltipProps,
                              {
                                get tooltipContext() {
                                  return tooltipContext;
                                },
                                set tooltipContext($$value) {
                                  tooltipContext = $$value;
                                  $$settled = false;
                                },
                                children: ($$renderer7) => {
                                  _children?.($$renderer7, { context });
                                  $$renderer7.push(`<!---->`);
                                },
                                $$slots: { default: true }
                              }
                            ]));
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            }
          ]));
        }
        $$renderer3.push(`<!----></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref: refProp, context: contextProp });
  });
}
function extractOutsideArc(arcPath) {
  const matches = arcPath.match(/(^.+?)(L|Z)/);
  if (!matches || !matches[1]) return arcPath;
  return matches[1];
}
function normalizeAngle(angle) {
  return (angle % 360 + 360) % 360;
}
function getArcPathMiddle(props) {
  const centerRadius = (props.innerRadius() + props.outerRadius()) / 2;
  const cornerAngleOffset = (() => {
    if (props.cornerRadius() <= 0 || centerRadius <= 0) return 0;
    const effectiveCornerRadius = Math.min(props.cornerRadius(), centerRadius);
    return effectiveCornerRadius * 0.5 / centerRadius;
  })();
  const effectiveStartAngle = (() => {
    if (props.invertCorner()) {
      return props.startAngle() - cornerAngleOffset;
    }
    return props.startAngle() + cornerAngleOffset;
  })();
  const effectiveEndAngle = (() => {
    if (props.invertCorner()) {
      return props.endAngle() + cornerAngleOffset;
    }
    return props.endAngle() - cornerAngleOffset;
  })();
  const path2 = extractOutsideArc(d3arc().outerRadius(centerRadius).innerRadius(centerRadius - 0.5).startAngle(effectiveStartAngle).endAngle(effectiveEndAngle)() ?? "");
  return {
    get current() {
      return path2;
    }
  };
}
function getArcPathInner(props) {
  const cornerAngleOffset = (() => {
    if (props.cornerRadius() <= 0 || props.innerRadius() <= 0) return 0;
    if (props.cornerRadius() >= props.innerRadius()) return Math.PI / 4;
    return props.cornerRadius() * 0.5 / props.innerRadius();
  })();
  const effectiveStartAngle = (() => {
    if (props.invertCorner()) {
      return props.startAngle() - cornerAngleOffset;
    }
    return props.startAngle() + cornerAngleOffset;
  })();
  const effectiveEndAngle = (() => {
    if (props.invertCorner()) {
      return props.endAngle() + cornerAngleOffset;
    }
    return props.endAngle() - cornerAngleOffset;
  })();
  const path2 = extractOutsideArc(d3arc().innerRadius(props.innerRadius()).outerRadius(props.innerRadius() + 0.5).startAngle(effectiveStartAngle).endAngle(effectiveEndAngle)() ?? "");
  return {
    get current() {
      return path2;
    }
  };
}
function getArcPathOuter(props) {
  const cornerAngleOffset = (() => {
    if (props.cornerRadius() <= 0 || props.outerRadius() <= 0) return 0;
    return props.cornerRadius() * 0.5 / props.outerRadius();
  })();
  const effectiveStartAngle = (() => {
    if (props.invertCorner()) {
      return props.startAngle() - cornerAngleOffset;
    }
    return props.startAngle() + cornerAngleOffset;
  })();
  const effectiveEndAngle = (() => {
    if (props.invertCorner()) {
      return props.endAngle() + cornerAngleOffset;
    }
    return props.endAngle() - cornerAngleOffset;
  })();
  const path2 = extractOutsideArc(d3arc().innerRadius(props.outerRadius() - 0.5).outerRadius(props.outerRadius()).startAngle(effectiveStartAngle).endAngle(effectiveEndAngle)() ?? "");
  return {
    get current() {
      return path2;
    }
  };
}
function pointOnCircle(radius, angle) {
  const adjustedAngle = angle - Math.PI / 2;
  return [
    radius * Math.cos(adjustedAngle),
    radius * Math.sin(adjustedAngle)
  ];
}
function createArcTextProps(props, opts = {}, position) {
  const effectiveStartAngleRadians = (() => {
    const start = props.startAngle();
    const end = props.endAngle();
    const offset = opts.startOffset;
    if (offset) {
      try {
        const percentage = parseFloat(offset.slice(0, -1)) / 100;
        if (!isNaN(percentage) && percentage >= 0 && percentage <= 1) {
          const span = end - start;
          return start + span * percentage;
        } else {
          console.warn("Invalid percentage for startOffset:", offset);
        }
      } catch (e) {
        console.warn("Could not parse startOffset percentage:", offset, e);
      }
    }
    return start;
  })();
  const effectiveStartDegrees = radiansToDegrees(effectiveStartAngleRadians);
  const normalizedStartDegrees = normalizeAngle(effectiveStartDegrees);
  const startDegrees = radiansToDegrees(props.startAngle());
  const endDegrees = radiansToDegrees(props.endAngle());
  const isClockwise = startDegrees < endDegrees;
  const isTopCw = isClockwise && (normalizedStartDegrees >= 270 || normalizedStartDegrees <= 90);
  const isTopCcw = !isClockwise && (normalizedStartDegrees > 270 || normalizedStartDegrees <= 90);
  const isBottomCw = isClockwise && normalizedStartDegrees < 270 && normalizedStartDegrees >= 90;
  const isBottomCcw = !isClockwise && normalizedStartDegrees <= 270 && normalizedStartDegrees > 90;
  const reverseText = isTopCcw || isBottomCw;
  const pathGenProps = {
    ...props,
    startAngle: () => reverseText ? props.endAngle() : props.startAngle(),
    endAngle: () => reverseText ? props.startAngle() : props.endAngle(),
    invertCorner: () => isBottomCw || isBottomCcw
  };
  const innerPath = getArcPathInner(pathGenProps);
  const middlePath = getArcPathMiddle(pathGenProps);
  const outerPath = getArcPathOuter(pathGenProps);
  const innerDominantBaseline = (() => {
    if (isBottomCw || isBottomCcw) return "auto";
    if (isTopCw || isTopCcw) return "hanging";
    return "auto";
  })();
  const outerDominantBaseline = (() => {
    if (isBottomCw || isBottomCcw) return "hanging";
    return void 0;
  })();
  const sharedProps = (() => {
    if (reverseText) {
      return { startOffset: opts.startOffset ?? "100%", textAnchor: "end" };
    }
    return { startOffset: opts.startOffset ?? void 0 };
  })();
  const radialPositionProps = (() => {
    if (position !== "outer-radial") return {};
    const midAngle = (props.startAngle() + props.endAngle()) / 2;
    const basePadding = opts.radialOffset ?? opts.outerPadding ?? 23;
    const midAngleDegrees = normalizeAngle(radiansToDegrees(midAngle));
    let textAnchor = "middle";
    let effectivePadding = basePadding;
    const isBottomZone = midAngleDegrees > 45 && midAngleDegrees < 135;
    const isTopZone = midAngleDegrees > 225 && midAngleDegrees < 315;
    const isRightZone = midAngleDegrees <= 45 || midAngleDegrees >= 315;
    const isLeftZone = midAngleDegrees >= 135 && midAngleDegrees <= 225;
    const positionRadius = props.outerRadius() + effectivePadding;
    const [x2, y2] = pointOnCircle(positionRadius, midAngle);
    if (isRightZone) {
      textAnchor = "start";
      if (midAngleDegrees > 350 || midAngleDegrees < 10) textAnchor = "start";
    } else if (isLeftZone) {
      textAnchor = "end";
      if (midAngleDegrees > 170 && midAngleDegrees < 190) textAnchor = "end";
    } else if (isBottomZone) {
      textAnchor = "middle";
    } else if (isTopZone) {
      textAnchor = "middle";
    }
    return { x: x2, y: y2, textAnchor, dominantBaseline: "middle" };
  })();
  const current = (() => {
    if (position === "inner") {
      return {
        path: innerPath.current,
        ...sharedProps,
        dominantBaseline: innerDominantBaseline
      };
    } else if (position === "outer") {
      return {
        path: outerPath.current,
        ...sharedProps,
        dominantBaseline: outerDominantBaseline
      };
    } else if (position === "middle") {
      return {
        path: middlePath.current,
        ...sharedProps,
        dominantBaseline: "middle"
      };
    } else if (position === "centroid") {
      const centroid = props.centroid();
      return {
        x: centroid[0],
        y: centroid[1],
        textAnchor: "middle",
        verticalAnchor: "middle"
      };
    } else {
      return radialPositionProps;
    }
  })();
  return {
    get current() {
      return current;
    }
  };
}
function Arc($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      trackRef: trackRefProp = void 0,
      motion,
      value = 0,
      initialValue = 0,
      domain = [0, 100],
      range: range2 = [0, 360],
      // degrees
      startAngle: startAngleProp,
      endAngle: endAngleProp,
      innerRadius: innerRadiusProp,
      outerRadius: outerRadiusProp,
      cornerRadius = 0,
      padAngle = 0,
      trackStartAngle: trackStartAngleProp,
      trackEndAngle: trackEndAngleProp,
      trackInnerRadius: trackInnerRadiusProp,
      trackOuterRadius: trackOuterRadiusProp,
      trackCornerRadius: trackCornerRadiusProp,
      trackPadAngle: trackPadAngleProp,
      fill,
      fillOpacity,
      stroke = "none",
      strokeWidth,
      opacity,
      data,
      offset = 0,
      onpointerenter = () => {
      },
      onpointermove = () => {
      },
      onpointerleave: onpointerleave2 = () => {
      },
      ontouchmove = () => {
      },
      tooltipContext,
      track = false,
      children,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    let trackRef = void 0;
    const ctx = getChartContext();
    const endAngle = endAngleProp ?? degreesToRadians(ctx.config.xRange ? max$2(ctx.xRange) : max$2(range2));
    const motionEndAngle = createMotion(initialValue, () => value, motion);
    const scale = linear().domain(domain).range(range2);
    function getOuterRadius(outerRadius2, chartRadius) {
      if (!outerRadius2) {
        return chartRadius;
      } else if (outerRadius2 > 1) {
        return outerRadius2;
      } else if (outerRadius2 > 0) {
        return chartRadius * outerRadius2;
      } else if (outerRadius2 < 0) {
        return chartRadius + outerRadius2;
      } else {
        return outerRadius2;
      }
    }
    const outerRadius = getOuterRadius(outerRadiusProp, (Math.min(ctx.xRange[1], ctx.yRange[0]) ?? 0) / 2);
    const trackOuterRadius = trackOuterRadiusProp ? getOuterRadius(trackOuterRadiusProp, (Math.min(ctx.xRange[1], ctx.yRange[0]) ?? 0) / 2) : outerRadius;
    function getInnerRadius(innerRadius2, outerRadius2) {
      if (innerRadius2 == null) {
        return Math.min(...ctx.yRange);
      } else if (innerRadius2 > 1) {
        return innerRadius2;
      } else if (innerRadius2 > 0) {
        return outerRadius2 * innerRadius2;
      } else if (innerRadius2 < 0) {
        return outerRadius2 + innerRadius2;
      } else {
        return innerRadius2;
      }
    }
    const innerRadius = getInnerRadius(innerRadiusProp, outerRadius);
    const trackInnerRadius = trackInnerRadiusProp ? getInnerRadius(trackInnerRadiusProp, trackOuterRadius) : innerRadius;
    const startAngle = startAngleProp ?? degreesToRadians(range2[0]);
    const trackStartAngle = trackStartAngleProp ?? startAngleProp ?? degreesToRadians(range2[0]);
    const trackEndAngle = trackEndAngleProp ?? endAngleProp ?? degreesToRadians(range2[1]);
    const trackCornerRadius = trackCornerRadiusProp ?? cornerRadius;
    const trackPadAngle = trackPadAngleProp ?? padAngle;
    const arcEndAngle2 = endAngleProp ?? degreesToRadians(scale(motionEndAngle.current));
    const arc = d3arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(arcEndAngle2).cornerRadius(cornerRadius).padAngle(padAngle);
    const trackArc = d3arc().innerRadius(trackInnerRadius).outerRadius(trackOuterRadius).startAngle(trackStartAngle).endAngle(trackEndAngle).cornerRadius(trackCornerRadius).padAngle(trackPadAngle);
    const angle = ((startAngle ?? 0) + (endAngle ?? 0)) / 2;
    const xOffset = Math.sin(angle) * offset;
    const yOffset = -Math.cos(angle) * offset;
    const trackArcCentroid = (() => {
      const centroid = trackArc.centroid();
      return [centroid[0] + xOffset, centroid[1] + yOffset];
    })();
    const boundingBox = trackRef ? trackRef.getBBox() : {};
    const onPointerEnter = (e) => {
      onpointerenter?.(e);
      tooltipContext?.show(e, data);
    };
    const onPointerMove = (e) => {
      onpointermove?.(e);
      tooltipContext?.show(e, data);
    };
    const onPointerLeave = (e) => {
      onpointerleave2?.(e);
      tooltipContext?.hide();
    };
    function getTrackTextProps(position, opts = {}) {
      return createArcTextProps(
        {
          startAngle: () => trackStartAngle,
          endAngle: () => trackEndAngle,
          outerRadius: () => trackOuterRadius + (opts.outerPadding ? opts.outerPadding : 0),
          innerRadius: () => trackInnerRadius,
          cornerRadius: () => trackCornerRadius,
          centroid: () => trackArcCentroid
        },
        opts,
        position
      ).current;
    }
    function getArcTextProps(position, opts = {}) {
      return createArcTextProps(
        {
          startAngle: () => startAngle,
          endAngle: () => arcEndAngle2,
          outerRadius: () => outerRadius + (opts.outerPadding ? opts.outerPadding : 0),
          innerRadius: () => innerRadius,
          cornerRadius: () => cornerRadius,
          centroid: () => trackArcCentroid
        },
        opts,
        position
      ).current;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (track) {
        $$renderer3.push("<!--[-->");
        Spline($$renderer3, spread_props([
          { pathData: trackArc(), stroke: "none" },
          extractLayerProps(track, "arc-track"),
          {
            get pathRef() {
              return trackRef;
            },
            set pathRef($$value) {
              trackRef = $$value;
              $$settled = false;
            }
          }
        ]));
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      Spline($$renderer3, spread_props([
        {
          pathData: arc(),
          transform: `translate(${stringify(xOffset)}, ${stringify(yOffset)})`,
          fill,
          fillOpacity,
          stroke,
          "stroke-width": strokeWidth,
          opacity
        },
        restProps,
        {
          class: cls(layerClass("arc-line"), className),
          onpointerenter: onPointerEnter,
          onpointermove: onPointerMove,
          onpointerleave: onPointerLeave,
          ontouchmove: (e) => {
            ontouchmove?.(e);
            if (!tooltipContext) return;
            e.preventDefault();
          },
          get pathRef() {
            return ref;
          },
          set pathRef($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!----> `);
      children?.($$renderer3, {
        centroid: trackArcCentroid,
        boundingBox,
        value: motionEndAngle.current,
        getTrackTextProps,
        getArcTextProps
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref: refProp, trackRef: trackRefProp });
  });
}
function Html($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      zIndex = 0,
      pointerEvents = true,
      role,
      "aria-label": label,
      "aria-labelledby": labelledBy,
      "aria-describedby": describedBy,
      center = false,
      ignoreTransform = false,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    const roleVal = role || (label || labelledBy || describedBy ? "figure" : void 0);
    const ctx = getChartContext();
    const transformCtx = getTransformContext();
    const transform = (() => {
      if (transformCtx.mode === "canvas" && !ignoreTransform) {
        return `translate(${transformCtx.translate.x}px,${transformCtx.translate.y}px) scale(${transformCtx.scale})`;
      } else if (center) {
        return `translate(${center === "x" || center === true ? ctx.width / 2 : 0}px, ${center === "y" || center === true ? ctx.height / 2 : 0}px)`;
      }
    })();
    setRenderContext("html");
    $$renderer2.push(`<div${attributes(
      {
        class: clsx(cls(layerClass("layout-html"), "absolute top-0 left-0", pointerEvents === false && "pointer-events-none", className)),
        role: roleVal,
        "aria-label": label,
        "aria-labelledby": labelledBy,
        "aria-describedby": describedBy,
        ...restProps
      },
      void 0,
      void 0,
      {
        transform,
        "transform-origin": "top left",
        "z-index": zIndex,
        "pointer-events": pointerEvents === false ? "none" : null,
        top: `${stringify(ctx.padding.top)}px`,
        bottom: `${stringify(ctx.padding.bottom)}px`,
        left: `${stringify(ctx.padding.left)}px`,
        right: `${stringify(ctx.padding.right)}px`
      }
    )}>`);
    children?.($$renderer2, { ref });
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref: refProp });
  });
}
function Layer($$renderer, $$props) {
  let { type, children, $$slots, $$events, ...restProps } = $$props;
  if (type === "canvas") {
    $$renderer.push("<!--[-->");
    Canvas($$renderer, spread_props([
      restProps,
      {
        children: ($$renderer2) => {
          children?.($$renderer2);
          $$renderer2.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  } else {
    $$renderer.push("<!--[!-->");
    if (type === "svg") {
      $$renderer.push("<!--[-->");
      Svg($$renderer, spread_props([
        restProps,
        {
          children: ($$renderer2) => {
            children?.($$renderer2);
            $$renderer2.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
    } else {
      $$renderer.push("<!--[!-->");
      if (type === "html") {
        $$renderer.push("<!--[-->");
        Html($$renderer, spread_props([
          restProps,
          {
            children: ($$renderer2) => {
              children?.($$renderer2);
              $$renderer2.push(`<!---->`);
            },
            $$slots: { default: true }
          }
        ]));
      } else {
        $$renderer.push("<!--[!-->");
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]-->`);
}
function ColorRamp($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      interpolator,
      steps = 10,
      height = "20px",
      width = "100%",
      ref: refProp = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let href = "";
    $$renderer2.push(`<image${attributes(
      {
        href,
        preserveAspectRatio: "none",
        height,
        width,
        ...extractLayerProps(restProps, "color-ramp")
      },
      void 0,
      void 0,
      void 0,
      3
    )}></image>`);
    bind_props($$props, { ref: refProp });
  });
}
function Legend($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      scale: scaleProp,
      title = "",
      width = 320,
      height = 10,
      ticks: ticks2 = width / 64,
      tickFormat: tickFormatProp,
      tickValues: tickValuesProp,
      tickFontSize = 10,
      tickLength: tickLengthProp = 4,
      placement,
      orientation = "horizontal",
      onclick,
      onpointerenter,
      onpointerleave: onpointerleave2,
      variant = "ramp",
      classes = {},
      ref: refProp = void 0,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    const scale = scaleProp ?? ctx.cScale;
    const scaleConfig = (() => {
      if (!scale) {
        return {
          xScale: void 0,
          interpolator: void 0,
          swatches: void 0,
          tickLabelOffset: 0,
          tickLine: true,
          tickLength: tickLengthProp,
          tickFormat: tickFormatProp,
          tickValues: tickValuesProp
        };
      } else if (scale.interpolate) {
        const n = Math.min(scale.domain().length, scale.range().length);
        const xScale = scale.copy().rangeRound?.(quantize(interpolate(0, width), n));
        const interpolator = scale.copy().domain(quantize(interpolate(0, 1), n));
        const _tickFormat = tickFormatProp ?? xScale?.tickFormat?.();
        return {
          xScale,
          interpolator,
          tickFormat: _tickFormat,
          tickLabelOffset: 0,
          tickLine: true,
          tickValues: tickValuesProp,
          tickLength: tickLengthProp,
          swatches: void 0
        };
      } else if (scale.interpolator) {
        const xScale = Object.assign(scale.copy().interpolator(interpolateRound(0, width)), {
          range() {
            return [0, width];
          }
        });
        const interpolator = scale.interpolator();
        let tickValues = tickValuesProp;
        if (!xScale.ticks) {
          if (tickValues === void 0) {
            const n = Math.round(ticks2 + 1);
            tickValues = range$2(n).map((i) => quantile(scale.domain(), i / (n - 1)));
          }
        }
        const tickFormat2 = tickFormatProp ?? xScale.tickFormat?.();
        return {
          interpolator,
          tickValues,
          tickFormat: tickFormat2,
          swatches: void 0,
          tickLabelOffset: 0,
          tickLine: true,
          tickLength: tickLengthProp,
          xScale
        };
      } else if (scale.invertExtent) {
        const thresholds = scale.thresholds ? scale.thresholds() : (
          // scaleQuantize
          scale.quantiles ? scale.quantiles() : (
            // scaleQuantile
            scale.domain()
          )
        );
        const xScale = linear().domain([-1, scale.range().length - 1]).rangeRound([0, width]);
        const swatches = scale.range().map((d, i) => {
          return {
            x: xScale(i - 1),
            y: 0,
            width: xScale(i) - xScale(i - 1),
            height,
            fill: d
          };
        });
        const tickValues = range$2(thresholds.length);
        const tickFormat2 = (i) => {
          const value = thresholds[i];
          return tickFormatProp ? format$1(value, tickFormatProp) : value;
        };
        return {
          xScale,
          swatches,
          tickValues,
          tickFormat: tickFormat2,
          tickLabelOffset: 0,
          tickLine: true,
          tickLength: tickLengthProp,
          interpolator: void 0
        };
      } else {
        const xScale = band().domain(scale.domain()).rangeRound([0, width]);
        const swatches = scale.domain().map((d) => {
          return {
            x: xScale(d),
            y: 0,
            width: Math.max(0, xScale.bandwidth() - 1),
            height,
            fill: scale(d)
          };
        });
        const tickValues = scale.domain();
        const tickLabelOffset = xScale.bandwidth() / 2;
        const tickLine = false;
        const tickLength = 0;
        return {
          xScale,
          tickFormat: tickFormatProp,
          tickLabelOffset,
          tickLine,
          tickLength,
          tickValues,
          swatches,
          interpolator: void 0
        };
      }
    })();
    $$renderer2.push(`<div${attributes({
      ...restProps,
      "data-placement": placement,
      class: clsx(cls(
        layerClass("legend-container"),
        "inline-block",
        "z-1",
        // stack above tooltip context layers (band rects, voronoi, ...)
        placement && [
          "absolute",
          {
            "top-left": "top-0 left-0",
            top: "top-0 left-1/2 -translate-x-1/2",
            "top-right": "top-0 right-0",
            left: "top-1/2 left-0 -translate-y-1/2",
            center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            right: "top-1/2 right-0 -translate-y-1/2",
            "bottom-left": "bottom-0 left-0",
            bottom: "bottom-0 left-1/2 -translate-x-1/2",
            "bottom-right": "bottom-0 right-0"
          }[placement]
        ],
        className,
        classes.root
      ))
    })}><div${attr_class(clsx(cls(layerClass("legend-title"), "text-[10px] font-semibold", classes.title)))}>${escape_html(title)}</div> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2, {
        values: scaleConfig.tickValues ?? scaleConfig.xScale?.ticks?.(ticks2) ?? [],
        scale
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (variant === "ramp") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<svg${attr("width", width)}${attr("height", height + tickLengthProp + tickFontSize)}${attr("viewBox", `0 0 ${stringify(width)} ${stringify(height + tickLengthProp + tickFontSize)}`)}${attr_class(clsx(cls(layerClass("legend-ramp-svg"), "overflow-visible")))}><g${attr_class(clsx(layerClass("legend-ramp-g")))}>`);
        if (scaleConfig.interpolator) {
          $$renderer2.push("<!--[-->");
          ColorRamp($$renderer2, {
            width,
            height,
            interpolator: scaleConfig.interpolator,
            class: layerClass("legend-color-ramp")
          });
        } else {
          $$renderer2.push("<!--[!-->");
          if (scaleConfig.swatches) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<!--[-->`);
            const each_array = ensure_array_like(scaleConfig.swatches);
            for (let i = 0, $$length = each_array.length; i < $$length; i++) {
              let swatch = each_array[i];
              $$renderer2.push(`<rect${attributes({ ...extractLayerProps(swatch, "legend-swatch") }, void 0, void 0, void 0, 3)}></rect>`);
            }
            $$renderer2.push(`<!--]-->`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></g><g${attr_class(clsx(layerClass("legend-tick-group")))}><!--[-->`);
        const each_array_1 = ensure_array_like(tickValuesProp ?? scaleConfig.xScale?.ticks?.(ticks2) ?? []);
        for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
          let tick = each_array_1[i];
          $$renderer2.push(`<text text-anchor="middle"${attr("x", scaleConfig.xScale?.(tick) + scaleConfig.tickLabelOffset)}${attr("y", height + tickLengthProp + tickFontSize)}${attr_class(clsx(cls(layerClass("legend-tick-text"), "text-[10px] fill-surface-content", classes.label)))}${attr_style("", { "font-size": tickFontSize })}>${escape_html(tickFormatProp ? format$1(tick, asAny(tickFormatProp)) : tick)}</text>`);
          if (scaleConfig.tickLine) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<line${attr("x1", scaleConfig.xScale?.(tick))}${attr("y1", 0)}${attr("x2", scaleConfig.xScale?.(tick))}${attr("y2", height + tickLengthProp)}${attr_class(clsx(cls(layerClass("legend-tick-line"), "stroke-surface-content", classes.tick)))}></line>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></g></svg>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (variant === "swatches") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div${attr_class(clsx(cls(layerClass("legend-swatch-group"), "flex gap-x-4 gap-y-1", orientation === "vertical" && "flex-col", classes.items)))}><!--[-->`);
          const each_array_2 = ensure_array_like(scaleConfig.tickValues ?? scaleConfig.xScale?.ticks?.(ticks2) ?? []);
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let tick = each_array_2[$$index_2];
            const color2 = scale?.(tick) ?? "";
            const item = { value: tick, color: color2 };
            $$renderer2.push(`<button${attr_class(clsx(cls(layerClass("legend-swatch-button"), "flex items-center gap-1 truncate", !onclick && "cursor-auto", typeof classes.item === "function" ? classes.item(item) : classes.item)))}><div${attr_class(clsx(cls(layerClass("legend-swatch"), "h-4 w-4 shrink-0 rounded-full", classes.swatch)))}${attr_style("", { "background-color": color2 })}></div> <div${attr_class(clsx(cls(layerClass("legend-swatch-label"), "text-xs text-surface-content truncate whitespace-nowrap", classes.label)))}>${escape_html(tickFormatProp ? format$1(tick, asAny(tickFormatProp)) : tick)}</div></button>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { ref: refProp });
  });
}
function TooltipHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      colorRef: colorRefProp = void 0,
      value,
      format: format2,
      color: color2,
      classes = { root: "", color: "" },
      props = { root: {}, color: {} },
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cls(layerClass("tooltip-header"), "font-semibold whitespace-nowrap border-b mb-1 pb-1 flex items-center gap-2", classes.root, props.root?.class, className)),
      ...restProps
    })}>`);
    if (color2) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(clsx(cls(layerClass("tooltip-header-color"), "color", "inline-block size-2 rounded-full bg-[var(--color)]", classes.color)))}${attr_style("", { "--color": color2 })}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (children) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(format2 ? format$1(value, asAny(format2)) : value)}`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { ref: refProp, colorRef: colorRefProp });
  });
}
function TooltipItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      labelRef: labelRefProp = void 0,
      valueRef: valueRefProp = void 0,
      colorRef: colorRefProp = void 0,
      label,
      value,
      format: format2,
      valueAlign = "left",
      color: color2,
      classes = { root: "", label: "", value: "", color: "" },
      props = { root: {}, label: {}, value: {}, color: {} },
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      ...props.root,
      class: clsx(cls(layerClass("tooltip-item-root"), "contents", classes.root, className, props.root?.class)),
      ...restProps
    })}><div${attributes({
      ...props.label,
      class: clsx(cls(layerClass("tooltip-item-label"), "label", "flex items-center gap-2 whitespace-nowrap", classes.label, props.label?.class))
    })}>`);
    if (color2) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes(
        {
          ...props.color,
          class: clsx(cls(layerClass("tooltip-item-color"), "color", "inline-block size-2 rounded-full bg-[var(--color)]", classes.color, props.color?.class))
        },
        void 0,
        void 0,
        { "--color": color2 }
      )}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (typeof label === "function") {
      $$renderer2.push("<!--[-->");
      label($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(label)}`);
    }
    $$renderer2.push(`<!--]--></div> <div${attributes({
      ...props.value,
      class: clsx(cls(
        layerClass("tooltip-item-value"),
        "value",
        "tabular-nums",
        {
          "text-right": valueAlign === "right",
          "text-center": valueAlign === "center"
        },
        classes.value,
        props.value?.class
      ))
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(format2 ? format$1(value, asAny(format2)) : value)}`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, {
      ref: refProp,
      labelRef: labelRefProp,
      valueRef: valueRefProp,
      colorRef: colorRefProp
    });
  });
}
function TooltipList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cls(layerClass("tooltip-list"), "grid grid-cols-[1fr_auto] gap-x-2 gap-y-1 items-start", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref: refProp });
  });
}
function TooltipSeparator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref: refProp = void 0,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cls(layerClass("tooltip-separator"), "rounded-sm bg-surface-content/20 my-1 col-span-full h-px", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref: refProp });
  });
}
function Tooltip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      anchor = "top-left",
      classes = {},
      contained = "container",
      motion = "spring",
      pointerEvents = false,
      variant = "default",
      x: x2 = "pointer",
      xOffset = x2 === "pointer" ? 10 : 0,
      y: y2 = "pointer",
      yOffset = y2 === "pointer" ? 10 : 0,
      children,
      rootRef: rootRefProp = void 0,
      props = { root: {}, container: {}, content: {} },
      class: className
    } = $$props;
    const ctx = getChartContext();
    const tooltipCtx = getTooltipContext();
    let tooltipWidth = 0;
    let tooltipHeight = 0;
    function alignValue(value, align, additionalOffset, tooltipSize) {
      const alignOffset = align === "center" ? tooltipSize / 2 : align === "end" ? tooltipSize : 0;
      return value + (align === "end" ? -additionalOffset : additionalOffset) - alignOffset;
    }
    const positions = (() => {
      if (!tooltipCtx.data) {
        const tooltipX = run(() => tooltipCtx.x);
        const tooltipY = run(() => tooltipCtx.y);
        return { x: tooltipX, y: tooltipY };
      }
      const xBandOffset = isScaleBand(ctx.xScale) ? ctx.xScale.step() / 2 - ctx.xScale.padding() * ctx.xScale.step() / 2 : 0;
      const xValue = typeof x2 === "number" ? x2 : x2 === "data" ? ctx.xGet(tooltipCtx.data) + ctx.padding.left + xBandOffset : tooltipCtx.x;
      let xAlign = "start";
      switch (anchor) {
        case "top-left":
        case "left":
        case "bottom-left":
          xAlign = "start";
          break;
        case "top":
        case "center":
        case "bottom":
          xAlign = "center";
          break;
        case "top-right":
        case "right":
        case "bottom-right":
          xAlign = "end";
          break;
      }
      const yBandOffset = isScaleBand(ctx.yScale) ? ctx.yScale.step() / 2 - ctx.yScale.padding() * ctx.yScale.step() / 2 : 0;
      const yValue = typeof y2 === "number" ? y2 : y2 === "data" ? ctx.yGet(tooltipCtx.data) + ctx.padding.top + yBandOffset : tooltipCtx.y;
      let yAlign = "start";
      switch (anchor) {
        case "top-left":
        case "top":
        case "top-right":
          yAlign = "start";
          break;
        case "left":
        case "center":
        case "right":
          yAlign = "center";
          break;
        case "bottom-left":
        case "bottom":
        case "bottom-right":
          yAlign = "end";
          break;
      }
      const rect = {
        top: alignValue(yValue, yAlign, yOffset, tooltipHeight),
        left: alignValue(xValue, xAlign, xOffset, tooltipWidth),
        // set below
        bottom: 0,
        right: 0
      };
      rect.bottom = rect.top + tooltipHeight;
      rect.right = rect.left + tooltipWidth;
      if (contained === "container") {
        if (typeof x2 !== "number") {
          if ((xAlign === "start" || xAlign === "center") && rect.right > ctx.containerWidth) {
            rect.left = alignValue(xValue, "end", xOffset, tooltipWidth);
          }
          if ((xAlign === "end" || xAlign === "center") && rect.left < ctx.padding.left) {
            rect.left = alignValue(xValue, "start", xOffset, tooltipWidth);
          }
        }
        rect.right = rect.left + tooltipWidth;
        if (typeof y2 !== "number") {
          if ((yAlign === "start" || yAlign === "center") && rect.bottom > ctx.containerHeight) {
            rect.top = alignValue(yValue, "end", yOffset, tooltipHeight);
          }
          if ((yAlign === "end" || yAlign === "center") && rect.top < ctx.padding.top) {
            rect.top = alignValue(yValue, "start", yOffset, tooltipHeight);
          }
        }
        rect.bottom = rect.top + tooltipHeight;
      }
      return { x: rect.left, y: rect.top };
    })();
    const motionX = createMotion(tooltipCtx.x, () => positions.x, motion);
    const motionY = createMotion(tooltipCtx.y, () => positions.y, motion);
    if (tooltipCtx.data) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attributes(
        {
          ...props.root,
          class: clsx(cls("root", layerClass("tooltip-root"), classes.root, props.root?.class))
        },
        "svelte-1nyj6mk",
        { "pointer-events-none": !pointerEvents },
        {
          top: `${stringify(motionY.current)}px`,
          left: `${stringify(motionX.current)}px`
        }
      )}><div${attributes(
        {
          ...props.container,
          class: clsx(cls(
            layerClass("tooltip-container"),
            variant !== "none" && ["text-sm py-1 px-2 h-full rounded-sm elevation-1"],
            {
              default: [
                "bg-surface-100/90 dark:bg-surface-300/90 backdrop-filter backdrop-blur-[2px] text-surface-content",
                "[&_.label]:text-surface-content/75"
              ],
              invert: [
                "bg-surface-content/90 backdrop-filter backdrop-blur-[2px] text-surface-100 border border-surface-content",
                "[&_.label]:text-surface-100/50"
              ],
              none: ""
            }[variant],
            classes.container,
            props.container?.class,
            className
          ))
        },
        "svelte-1nyj6mk"
      )}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div${attributes(
          {
            ...props.content,
            class: clsx(cls(layerClass("tooltip-content"), classes.content))
          },
          "svelte-1nyj6mk"
        )}>`);
        children($$renderer2, { data: tooltipCtx.data, payload: tooltipCtx.payload });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { rootRef: rootRefProp });
  });
}
class HighlightKey {
  current = null;
  set = (seriesKey) => {
    this.current = seriesKey;
  };
}
class SeriesState {
  #series = [];
  selectedSeries = new SelectionState();
  selectedKeys = new SelectionState();
  highlightKey = new HighlightKey();
  constructor(getSeries) {
    this.#series = getSeries();
  }
  get series() {
    return this.#series;
  }
  get isDefaultSeries() {
    return this.#series.length === 1 && this.#series[0].key === "default";
  }
  get allSeriesData() {
    return this.#series.flatMap((s) => s.data?.map((d) => ({ seriesKey: s.key, ...d }))).filter((d) => d);
  }
  get visibleSeries() {
    return this.#series.filter((s) => this.selectedSeries.isEmpty() || this.selectedSeries.isSelected(s.key));
  }
}
function createLegendProps(opts) {
  return {
    scale: opts.seriesState.isDefaultSeries ? void 0 : ordinal(opts.seriesState.series.map((s) => s.key), opts.seriesState.series.map((s) => s.color)),
    tickFormat: (key) => opts.seriesState.series.find((s) => s.key === key)?.label ?? key,
    placement: "bottom",
    variant: "swatches",
    onclick: (_, item) => opts.seriesState.selectedSeries.toggle(item.value),
    onpointerenter: (_, item) => opts.seriesState.highlightKey.current = item.value,
    onpointerleave: () => opts.seriesState.highlightKey.current = null,
    ...opts.props,
    classes: {
      item: (item) => opts.seriesState.visibleSeries.length && !opts.seriesState.visibleSeries.some((s) => s.key === item.value) ? "opacity-50" : "",
      ...opts.props?.classes
    }
  };
}
function Line($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      x1: x12,
      initialX1 = x12,
      y1: y12,
      initialY1 = y12,
      x2,
      initialX2 = x2,
      y2,
      initialY2 = y2,
      class: className,
      strokeWidth,
      opacity,
      fill,
      stroke,
      marker,
      markerEnd,
      markerStart,
      markerMid,
      motion,
      fillOpacity,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const markerStartId = markerStart || marker ? createId("marker-start", uid) : "";
    const markerMidId = markerMid || marker ? createId("marker-mid", uid) : "";
    const markerEndId = markerEnd || marker ? createId("marker-end", uid) : "";
    const motionX1 = createMotion(initialX1, () => x12, motion);
    const motionY1 = createMotion(initialY1, () => y12, motion);
    const motionX2 = createMotion(initialX2, () => x2, motion);
    const motionY2 = createMotion(initialY2, () => y2, motion);
    const renderCtx = getRenderContext();
    createKey(() => fill);
    createKey(() => stroke);
    if (renderCtx === "canvas") {
      registerCanvasComponent({
        events: {
          click: restProps.onclick,
          pointerenter: restProps.onpointerenter,
          pointermove: restProps.onpointermove,
          pointerleave: restProps.onpointerleave
        }
      });
    }
    if (renderCtx === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<line${attributes(
        {
          x1: motionX1.current,
          y1: motionY1.current,
          x2: motionX2.current,
          y2: motionY2.current,
          fill,
          stroke,
          "fill-opacity": fillOpacity,
          "stroke-width": strokeWidth,
          opacity,
          "marker-start": markerStartId ? `url(#${markerStartId})` : void 0,
          "marker-mid": markerMidId ? `url(#${markerMidId})` : void 0,
          "marker-end": markerEndId ? `url(#${markerEndId})` : void 0,
          class: clsx(cls(layerClass("line"), stroke === void 0 && "stroke-surface-content", className)),
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        3
      )}></line>`);
      MarkerWrapper($$renderer2, { id: markerStartId, marker: markerStart ?? marker });
      $$renderer2.push(`<!---->`);
      MarkerWrapper($$renderer2, { id: markerMidId, marker: markerMid ?? marker });
      $$renderer2.push(`<!---->`);
      MarkerWrapper($$renderer2, { id: markerEndId, marker: markerEnd ?? marker });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Rule($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      x: x2 = false,
      xOffset = 0,
      y: y2 = false,
      yOffset = 0,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    const xRangeMinMax = extent(ctx.xRange);
    const yRangeMinMax = extent(ctx.yRange);
    function showRule(value, axis) {
      switch (typeof value) {
        case "boolean":
          return value;
        case "string":
          return true;
        default:
          if (axis === "x") {
            return ctx.xScale(value) >= xRangeMinMax[0] && ctx.xScale(value) <= xRangeMinMax[1];
          } else {
            return ctx.yScale(value) >= yRangeMinMax[0] && ctx.yScale(value) <= yRangeMinMax[1];
          }
      }
    }
    Group($$renderer2, {
      class: layerClass("rule-g"),
      children: ($$renderer3) => {
        if (showRule(x2, "x")) {
          $$renderer3.push("<!--[-->");
          const xCoord = x2 === true || x2 === "left" ? xRangeMinMax[0] : x2 === "right" ? xRangeMinMax[1] : ctx.xScale(x2) + xOffset;
          if (ctx.radial) {
            $$renderer3.push("<!--[-->");
            const [x12, y12] = pointRadial(xCoord, Number(yRangeMinMax[0]));
            const [x22, y22] = pointRadial(xCoord, Number(yRangeMinMax[1]));
            Line($$renderer3, spread_props([
              restProps,
              {
                x1: x12,
                y1: y12,
                x2: x22,
                y2: y22,
                class: cls(layerClass("rule-x-radial-line"), "stroke-surface-content/10", className)
              }
            ]));
          } else {
            $$renderer3.push("<!--[!-->");
            Line($$renderer3, spread_props([
              restProps,
              {
                x1: xCoord,
                x2: xCoord,
                y1: ctx.yRange[0] || 0,
                y2: ctx.yRange[1] || 0,
                class: cls(layerClass("rule-x-line"), "stroke-surface-content/50", className)
              }
            ]));
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (showRule(y2, "y")) {
          $$renderer3.push("<!--[-->");
          if (ctx.radial) {
            $$renderer3.push("<!--[-->");
            Circle($$renderer3, {
              r: y2 === true || y2 === "bottom" ? yRangeMinMax[1] : y2 === "top" ? yRangeMinMax[0] : ctx.yScale(y2) + yOffset,
              class: cls(layerClass("rule-y-radial-circle"), "fill-none stroke-surface-content/50", className)
            });
          } else {
            $$renderer3.push("<!--[!-->");
            Line($$renderer3, spread_props([
              restProps,
              {
                x1: ctx.xRange[0] || 0,
                x2: ctx.xRange[1] || 0,
                y1: y2 === true || y2 === "bottom" ? yRangeMinMax[1] : y2 === "top" ? yRangeMinMax[0] : ctx.yScale(y2) + yOffset,
                y2: y2 === true || y2 === "bottom" ? yRangeMinMax[1] : y2 === "top" ? yRangeMinMax[0] : ctx.yScale(y2) + yOffset,
                class: cls(layerClass("rule-y-line"), "stroke-surface-content/50", className)
              }
            ]));
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}
function getPathLength(pathRef) {
  return 0;
}
function Text($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      value,
      x: x2 = 0,
      initialX = x2,
      y: y2 = 0,
      initialY = y2,
      dx = 0,
      dy = 0,
      lineHeight = "1em",
      capHeight = "0.71em",
      width,
      scaleToFit = false,
      textAnchor = "start",
      verticalAnchor = "end",
      dominantBaseline = "auto",
      rotate,
      opacity = 1,
      strokeWidth = 0,
      stroke,
      fill,
      fillOpacity,
      motion,
      svgRef: svgRefProp = void 0,
      ref: refProp = void 0,
      class: className,
      svgProps = {},
      truncate = false,
      path: path2,
      pathId = createId("text-path", uid),
      startOffset = "0%",
      transform: transformProp,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const renderCtx = getRenderContext();
    let style = void 0;
    const resolvedWidth = path2 ? getPathLength() : width;
    const defaultTruncateOptions = {
      maxChars: void 0,
      position: "end",
      maxWidth: resolvedWidth
    };
    const truncateConfig = (() => {
      if (typeof truncate === "boolean") {
        if (truncate) return defaultTruncateOptions;
        return false;
      }
      return { ...defaultTruncateOptions, ...truncate };
    })();
    const rawText = value != null ? value.toString().replace(/\\n/g, "\n") : "";
    const textValue = (() => {
      if (!truncateConfig) return rawText;
      return truncateText(rawText, truncateConfig);
    })();
    const spaceWidth = getStringWidth(" ", style) || 0;
    const wordsByLines = (() => {
      const lines = textValue.split("\n");
      return lines.flatMap((line) => {
        const words = line.split(/(?:(?!\u00A0+)\s+)/);
        if (width == null) {
          return [{ words }];
        } else {
          return words.reduce(
            (result, item) => {
              const currentLine = result[result.length - 1];
              const itemWidth = getStringWidth(item, style) || 0;
              if (currentLine && (width == null || scaleToFit || (currentLine.width || 0) + itemWidth + spaceWidth < width)) {
                currentLine.words.push(item);
                currentLine.width = currentLine.width || 0;
                currentLine.width += itemWidth + spaceWidth;
              } else {
                const newLine = { words: [item], width: itemWidth };
                result.push(newLine);
              }
              return result;
            },
            []
          );
        }
      });
    })();
    const lineCount = wordsByLines.length;
    function getPixelValue(cssValue) {
      if (typeof cssValue === "number") return cssValue;
      const result = cssValue.match(/([\d.]+)(\D+)/);
      const number2 = Number(result?.[1]);
      switch (result?.[2]) {
        case "px":
          return number2;
        case "em":
        case "rem":
          return number2 * 16;
        default:
          return 0;
      }
    }
    const startDy = (() => {
      if (verticalAnchor === "start") {
        return getPixelValue(lineHeight);
      } else if (verticalAnchor === "middle") {
        return (lineCount - 1) / 2 * -getPixelValue(lineHeight) + getPixelValue(capHeight) / 2;
      } else {
        return (lineCount - 1) * -getPixelValue(lineHeight) - getPixelValue(capHeight) / 2;
      }
    })();
    const scaleTransform = (() => {
      if (scaleToFit && lineCount > 0 && typeof x2 == "number" && typeof y2 == "number" && typeof width == "number") {
        const lineWidth = wordsByLines[0].width || 1;
        const sx = width / lineWidth;
        const sy = sx;
        const originX = x2 - sx * x2;
        const originY = y2 - sy * y2;
        return `matrix(${sx}, 0, 0, ${sy}, ${originX}, ${originY})`;
      } else {
        return "";
      }
    })();
    const rotateTransform = rotate ? `rotate(${rotate}, ${x2}, ${y2})` : "";
    const transform = transformProp ?? `${scaleTransform} ${rotateTransform}`;
    function isValidXOrY(xOrY) {
      return (
        // number that is not NaN or Infinity
        typeof xOrY === "number" && Number.isFinite(xOrY) || // for percentage
        typeof xOrY === "string"
      );
    }
    const motionX = createMotion(initialX, () => x2, motion);
    const motionY = createMotion(initialY, () => y2, motion);
    createKey(() => fill);
    createKey(() => stroke);
    if (renderCtx === "canvas") {
      registerCanvasComponent();
    }
    if (renderCtx === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<svg${attributes(
        {
          x: dx,
          y: dy,
          ...svgProps,
          class: clsx(cls(layerClass("text-svg"), "overflow-visible [paint-order:stroke]", svgProps?.class))
        },
        void 0,
        void 0,
        void 0,
        3
      )}>`);
      if (path2) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<defs><!---->`);
        {
          $$renderer2.push(`<path${attr("id", pathId)}${attr("d", path2)}></path>`);
        }
        $$renderer2.push(`<!----></defs><text${attributes(
          {
            dy,
            ...restProps,
            fill,
            "fill-opacity": fillOpacity,
            stroke,
            "stroke-width": strokeWidth,
            opacity,
            transform: transformProp,
            class: clsx(cls(layerClass("text"), fill === void 0 && "fill-surface-content", className))
          },
          void 0,
          void 0,
          void 0,
          3
        )}><textPath${attr_style(`text-anchor: ${stringify(textAnchor)};`)}${attr("dominant-baseline", dominantBaseline)}${attr("href", `#${stringify(pathId)}`)}${attr("startOffset", startOffset)}${attr_class(clsx(cls(layerClass("text-path"))))}>${escape_html(wordsByLines.map((line) => line.words.join(" ")).join())}</textPath></text>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (isValidXOrY(x2) && isValidXOrY(y2)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<text${attributes(
            {
              x: motionX.current,
              y: motionY.current,
              transform,
              "text-anchor": textAnchor,
              "dominant-baseline": dominantBaseline,
              ...restProps,
              fill,
              "fill-opacity": fillOpacity,
              stroke,
              "stroke-width": strokeWidth,
              opacity,
              class: clsx(cls(layerClass("text"), fill === void 0 && "fill-surface-content", className))
            },
            void 0,
            void 0,
            void 0,
            3
          )}><!--[-->`);
          const each_array = ensure_array_like(wordsByLines);
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let line = each_array[index];
            $$renderer2.push(`<tspan${attr("x", motionX.current)}${attr("dy", index === 0 ? startDy : getPixelValue(lineHeight))}${attr_class(clsx(layerClass("text-tspan")))}>${escape_html(line.words.join(" "))}</tspan>`);
          }
          $$renderer2.push(`<!--]--></text>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></svg>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { svgRef: svgRefProp, ref: refProp });
  });
}
function getDurationFormat(duration, options = {
  multiline: false
}) {
  const { multiline = false, placement = "bottom" } = options;
  return function(date2, i) {
    let result = "";
    if (+duration >= +new Duration({ duration: { years: 1 } })) {
      result = format$1(date2, "year");
    } else if (+duration >= +new Duration({ duration: { days: 28 } })) {
      const isFirst = i === 0 || +timeYear.floor(date2) === +date2;
      if (multiline) {
        result = [format$1(date2, "month", { variant: "short" }), isFirst && format$1(date2, "year")];
      } else {
        result = format$1(date2, "month", { variant: "short" }) + (isFirst ? ` '${format$1(date2, "year", { variant: "short" })}` : "");
      }
    } else if (+duration >= +new Duration({ duration: { days: 1 } })) {
      const isFirst = i === 0 || date2.getDate() <= duration.days;
      if (multiline) {
        result = [
          format$1(date2, "custom", { custom: DateToken.DayOfMonth_numeric }),
          isFirst && format$1(date2, "month", { variant: "short" })
        ];
      } else {
        result = format$1(date2, "day", { variant: "short" });
      }
    } else if (+duration >= +new Duration({ duration: { hours: 1 } })) {
      const isFirst = i === 0 || +timeDay.floor(date2) === +date2;
      if (multiline) {
        result = [
          format$1(date2, "custom", { custom: DateToken.Hour_numeric }),
          isFirst && format$1(date2, "day", { variant: "short" })
        ];
      } else {
        result = isFirst ? format$1(date2, "day", { variant: "short" }) : format$1(date2, "custom", { custom: DateToken.Hour_numeric });
      }
    } else if (+duration >= +new Duration({ duration: { minutes: 1 } })) {
      const isFirst = i === 0 || +timeDay.floor(date2) === +date2;
      if (multiline) {
        result = [
          format$1(date2, "time", { variant: "short" }),
          isFirst && format$1(date2, "day", { variant: "short" })
        ];
      } else {
        result = format$1(date2, "time", { variant: "short" });
      }
    } else if (+duration >= +new Duration({ duration: { seconds: 1 } })) {
      const isFirst = i === 0 || +timeDay.floor(date2) === +date2;
      result = [
        format$1(date2, "time"),
        multiline && isFirst && format$1(date2, "day", { variant: "short" })
      ];
    } else if (+duration >= +new Duration({ duration: { milliseconds: 1 } })) {
      const isFirst = i === 0 || +timeDay.floor(date2) === +date2;
      result = [
        format$1(date2, "custom", {
          custom: [
            DateToken.Hour_2Digit,
            DateToken.Minute_2Digit,
            DateToken.Second_2Digit,
            DateToken.MiliSecond_3,
            DateToken.Hour_woAMPM
          ]
        }),
        multiline && isFirst && format$1(date2, "day", { variant: "short" })
      ];
    } else {
      result = date2.toString();
    }
    if (Array.isArray(result)) {
      switch (placement) {
        case "top":
          return result.filter(Boolean).reverse().join("\n");
        case "bottom":
          return result.filter(Boolean).join("\n");
        case "left":
          return result.filter(Boolean).reverse().join(" ");
        case "right":
          return result.filter(Boolean).join(" ");
        default:
          return result.filter(Boolean).join("\n");
      }
    } else {
      return result;
    }
  };
}
function resolveTickVals(scale, ticks2, count) {
  if (Array.isArray(ticks2))
    return ticks2;
  if (typeof ticks2 === "function")
    return ticks2(scale) ?? [];
  if (isLiteralObject(ticks2) && "interval" in ticks2) {
    if (ticks2.interval === null || !("ticks" in scale) || typeof scale.ticks !== "function") {
      return [];
    }
    return scale.ticks(ticks2.interval);
  }
  if (isScaleBand(scale)) {
    return ticks2 && typeof ticks2 === "number" ? scale.domain().filter((_, i) => i % ticks2 === 0) : scale.domain();
  }
  if (scale.ticks && typeof scale.ticks === "function") {
    return scale.ticks(count ?? (typeof ticks2 === "number" ? ticks2 : void 0));
  }
  return [];
}
function resolveTickFormat(options) {
  const { scale, ticks: ticks2, count, formatType, multiline, placement } = options;
  if (formatType) {
    return (tick) => format$1(tick, formatType);
  }
  if (isScaleTime(scale) && count) {
    if (isLiteralObject(ticks2) && "interval" in ticks2 && ticks2.interval != null) {
      const start = ticks2.interval.floor(/* @__PURE__ */ new Date());
      const end = ticks2.interval.ceil(/* @__PURE__ */ new Date());
      return getDurationFormat(new Duration({ start, end }), { multiline, placement });
    } else {
      const [start, end] = timeTicks(scale.domain()[0], scale.domain()[1], count);
      return getDurationFormat(new Duration({ start, end }), { multiline, placement });
    }
  }
  if (scale.tickFormat) {
    return scale.tickFormat(count);
  }
  return (tick) => `${tick}`;
}
function Axis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      placement,
      label = "",
      labelPlacement = "middle",
      labelProps,
      rule = false,
      grid = false,
      ticks: ticks2,
      tickSpacing = ["top", "bottom", "angle"].includes(placement) ? 80 : ["left", "right", "radius"].includes(placement) ? 50 : void 0,
      tickMultiline = false,
      tickLength = 4,
      tickMarks = true,
      format: format2,
      tickLabelProps,
      motion,
      transitionIn,
      transitionInParams,
      scale: scaleProp,
      classes = {},
      class: className,
      tickLabel,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    const orientation = placement === "angle" ? "angle" : placement === "radius" ? "radius" : ["top", "bottom"].includes(placement) ? "horizontal" : "vertical";
    const scale = scaleProp ?? (["horizontal", "angle"].includes(orientation) ? ctx.xScale : ctx.yScale);
    const xRangeMinMax = extent(ctx.xRange);
    const yRangeMinMax = extent(ctx.yRange);
    const ctxSize = orientation === "vertical" ? ctx.height : orientation === "horizontal" ? ctx.width : orientation === "radius" ? ctx.height / 2 : orientation === "angle" ? ctx.width : null;
    const tickCount = typeof ticks2 === "number" ? ticks2 : tickSpacing && ctxSize ? Math.round(ctxSize / tickSpacing) : void 0;
    const tickVals = resolveTickVals(scale, ticks2, tickCount);
    const tickFormat2 = resolveTickFormat({
      scale,
      ticks: ticks2,
      count: tickCount,
      formatType: format2,
      multiline: tickMultiline,
      placement
    });
    function getCoords(tick) {
      switch (placement) {
        case "top":
          return {
            x: scale(tick) + (isScaleBand(scale) ? scale.bandwidth() / 2 : 0),
            y: yRangeMinMax[0]
          };
        case "bottom":
          return {
            x: scale(tick) + (isScaleBand(scale) ? scale.bandwidth() / 2 : 0),
            y: yRangeMinMax[1]
          };
        case "left":
          return {
            x: xRangeMinMax[0],
            y: scale(tick) + (isScaleBand(scale) ? scale.bandwidth() / 2 : 0)
          };
        case "right":
          return {
            x: xRangeMinMax[1],
            y: scale(tick) + (isScaleBand(scale) ? scale.bandwidth() / 2 : 0)
          };
        case "angle":
          return { x: scale(tick), y: yRangeMinMax[1] };
        case "radius":
          return {
            x: xRangeMinMax[0],
            y: scale(tick) + (isScaleBand(scale) ? scale.bandwidth() / 2 : 0)
          };
      }
    }
    function getDefaultTickLabelProps(tick) {
      switch (placement) {
        case "top":
          return { textAnchor: "middle", verticalAnchor: "end", dy: -tickLength };
        case "bottom":
          return {
            textAnchor: "middle",
            verticalAnchor: "start",
            dy: tickLength
          };
        case "left":
          return { textAnchor: "end", verticalAnchor: "middle", dx: -tickLength };
        case "right":
          return {
            textAnchor: "start",
            verticalAnchor: "middle",
            dx: tickLength
          };
        case "angle":
          const xValue = scale(tick);
          return {
            textAnchor: xValue === 0 || Math.abs(xValue - Math.PI) < 0.01 || // ~180deg
            Math.abs(xValue - Math.PI * 2) < 0.01 ? (
              // ~360deg
              // ~360deg
              "middle"
            ) : xValue > Math.PI ? "end" : "start",
            verticalAnchor: "middle",
            dx: Math.sin(xValue) * tickLength,
            dy: -Math.cos(xValue) * (tickLength + 4)
            // manually adjusted until Text supports custom styles
          };
        case "radius":
          return { textAnchor: "middle", verticalAnchor: "middle", dx: 2 };
      }
    }
    const resolvedLabelX = (() => {
      if (placement === "left" || orientation === "horizontal" && labelPlacement === "start") {
        return -ctx.padding.left;
      } else if (placement === "right" || orientation === "horizontal" && labelPlacement === "end") {
        return ctx.width + ctx.padding.right;
      }
      return ctx.width / 2;
    })();
    const resolvedLabelY = (() => {
      if (placement === "top" || orientation === "vertical" && labelPlacement === "start") {
        return -ctx.padding.top;
      } else if (orientation === "vertical" && labelPlacement === "middle") {
        return ctx.height / 2;
      } else if (placement === "bottom" || labelPlacement === "end") {
        return ctx.height + ctx.padding.bottom;
      }
      return "0";
    })();
    const resolvedLabelTextAnchor = (() => {
      if (labelPlacement === "middle") {
        return "middle";
      } else if (placement === "right" || orientation === "horizontal" && labelPlacement === "end") {
        return "end";
      }
      return "start";
    })();
    const resolvedLabelVerticalAnchor = (() => {
      if (placement === "top" || orientation === "vertical" && labelPlacement === "start" || placement === "left" && labelPlacement === "middle") {
        return "start";
      }
      return "end";
    })();
    const resolvedLabelProps = {
      value: typeof label === "function" ? "" : void 0,
      x: resolvedLabelX,
      y: resolvedLabelY,
      textAnchor: resolvedLabelTextAnchor,
      verticalAnchor: resolvedLabelVerticalAnchor,
      rotate: orientation === "vertical" && labelPlacement === "middle" ? -90 : 0,
      capHeight: ".5rem",
      // text-[10px]
      ...labelProps,
      class: cls(layerClass("axis-label"), "text-[10px] stroke-surface-100 [stroke-width:2px] font-light", classes.label, labelProps?.class)
    };
    Group($$renderer2, spread_props([
      restProps,
      {
        "data-placement": placement,
        class: cls(layerClass("axis"), `placement-${placement}`, classes.root, className),
        children: ($$renderer3) => {
          if (rule !== false) {
            $$renderer3.push("<!--[-->");
            const ruleProps = extractLayerProps(rule, "axis-rule");
            Rule($$renderer3, spread_props([
              {
                x: placement === "left" || placement === "right" ? placement : placement === "angle",
                y: placement === "top" || placement === "bottom" ? placement : placement === "radius",
                motion
              },
              ruleProps,
              {
                class: cls("stroke-surface-content/50", classes.rule, ruleProps?.class)
              }
            ]));
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (typeof label === "function") {
            $$renderer3.push("<!--[-->");
            label($$renderer3, { props: resolvedLabelProps });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (label) {
              $$renderer3.push("<!--[-->");
              Text($$renderer3, spread_props([resolvedLabelProps]));
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--> <!--[-->`);
          const each_array = ensure_array_like(tickVals);
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            let tick = each_array[index];
            const tickCoords = getCoords(tick);
            const [radialTickCoordsX, radialTickCoordsY] = pointRadial(tickCoords.x, tickCoords.y);
            const [radialTickMarkCoordsX, radialTickMarkCoordsY] = pointRadial(tickCoords.x, tickCoords.y + tickLength);
            const resolvedTickLabelProps = {
              x: orientation === "angle" ? radialTickCoordsX : tickCoords.x,
              y: orientation === "angle" ? radialTickCoordsY : tickCoords.y,
              value: tickFormat2(tick, index),
              ...getDefaultTickLabelProps(tick),
              motion,
              capHeight: "7px",
              lineHeight: "11px",
              ...tickLabelProps,
              class: cls(layerClass("axis-tick-label"), "text-[10px] stroke-surface-100 [stroke-width:2px] font-light", classes.tickLabel, tickLabelProps?.class)
            };
            Group($$renderer3, {
              transitionIn,
              transitionInParams,
              class: layerClass("axis-tick-group"),
              children: ($$renderer4) => {
                if (grid !== false) {
                  $$renderer4.push("<!--[-->");
                  const ruleProps = extractLayerProps(grid, "axis-grid");
                  Rule($$renderer4, spread_props([
                    {
                      x: orientation === "horizontal" || orientation === "angle" ? tick : false,
                      y: orientation === "vertical" || orientation === "radius" ? tick : false,
                      motion
                    },
                    ruleProps,
                    {
                      class: cls("stroke-surface-content/10", classes.rule, ruleProps?.class)
                    }
                  ]));
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (tickMarks) {
                  $$renderer4.push("<!--[-->");
                  const tickClasses = cls(layerClass("axis-tick"), "stroke-surface-content/50", classes.tick);
                  if (orientation === "horizontal") {
                    $$renderer4.push("<!--[-->");
                    Line($$renderer4, {
                      x1: tickCoords.x,
                      y1: tickCoords.y,
                      x2: tickCoords.x,
                      y2: tickCoords.y + (placement === "top" ? -tickLength : tickLength),
                      motion,
                      class: tickClasses
                    });
                  } else {
                    $$renderer4.push("<!--[!-->");
                    if (orientation === "vertical") {
                      $$renderer4.push("<!--[-->");
                      Line($$renderer4, {
                        x1: tickCoords.x,
                        y1: tickCoords.y,
                        x2: tickCoords.x + (placement === "left" ? -tickLength : tickLength),
                        y2: tickCoords.y,
                        motion,
                        class: tickClasses
                      });
                    } else {
                      $$renderer4.push("<!--[!-->");
                      if (orientation === "angle") {
                        $$renderer4.push("<!--[-->");
                        Line($$renderer4, {
                          x1: radialTickCoordsX,
                          y1: radialTickCoordsY,
                          x2: radialTickMarkCoordsX,
                          y2: radialTickMarkCoordsY,
                          motion,
                          class: tickClasses
                        });
                      } else {
                        $$renderer4.push("<!--[!-->");
                      }
                      $$renderer4.push(`<!--]-->`);
                    }
                    $$renderer4.push(`<!--]-->`);
                  }
                  $$renderer4.push(`<!--]-->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                if (tickLabel) {
                  $$renderer4.push("<!--[-->");
                  tickLabel($$renderer4, { props: resolvedTickLabelProps, index });
                  $$renderer4.push(`<!---->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  Text($$renderer4, spread_props([resolvedTickLabelProps]));
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Grid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      x: x2 = false,
      y: y2 = false,
      xTicks,
      yTicks: yTicksProp,
      bandAlign = "center",
      radialY = "circle",
      motion,
      transitionIn: transitionInProp,
      transitionInParams = { easing: cubicIn },
      classes = {},
      class: className,
      ref: refProp = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let ref = void 0;
    const yTicks = yTicksProp ?? (!isScaleBand(ctx.yScale) ? 4 : void 0);
    const tweenConfig = extractTweenConfig(motion);
    const transitionIn = transitionInProp ?? tweenConfig?.options ? fade : () => ({});
    const xTickVals = resolveTickVals(ctx.xScale, xTicks);
    const yTickVals = resolveTickVals(ctx.yScale, yTicks);
    const xBandOffset = isScaleBand(ctx.xScale) ? bandAlign === "between" ? -(ctx.xScale.padding() * ctx.xScale.step()) / 2 : (
      // before
      ctx.xScale.step() / 2 - ctx.xScale.padding() * ctx.xScale.step() / 2
    ) : (
      // center
      0
    );
    const yBandOffset = isScaleBand(ctx.yScale) ? bandAlign === "between" ? -(ctx.yScale.padding() * ctx.yScale.step()) / 2 : (
      // before
      ctx.yScale.step() / 2 - ctx.yScale.padding() * ctx.yScale.step() / 2
    ) : (
      // center
      0
    );
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Group($$renderer3, spread_props([
        { class: cls(layerClass("grid"), classes.root, className) },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            if (x2) {
              $$renderer4.push("<!--[-->");
              const splineProps = extractLayerProps(x2, "grid-x-line");
              Group($$renderer4, {
                transitionIn,
                transitionInParams,
                class: layerClass("grid-x"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!--[-->`);
                  const each_array = ensure_array_like(xTickVals);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let x3 = each_array[$$index];
                    if (ctx.radial) {
                      $$renderer5.push("<!--[-->");
                      const [x12, y12] = pointRadial(ctx.xScale(x3), ctx.yRange[0]);
                      const [x22, y22] = pointRadial(ctx.xScale(x3), ctx.yRange[1]);
                      Line($$renderer5, spread_props([
                        { x1: x12, y1: y12, x2: x22, y2: y22, motion: tweenConfig },
                        splineProps,
                        {
                          class: cls(layerClass("grid-x-radial-line"), "stroke-surface-content/10", classes.line, splineProps?.class)
                        }
                      ]));
                    } else {
                      $$renderer5.push("<!--[!-->");
                      Rule($$renderer5, spread_props([
                        { x: x3, xOffset: xBandOffset, motion },
                        splineProps,
                        {
                          class: cls(layerClass("grid-x-rule"), "stroke-surface-content/10", classes.line, splineProps?.class)
                        }
                      ]));
                    }
                    $$renderer5.push(`<!--]-->`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (isScaleBand(ctx.xScale) && bandAlign === "between" && !ctx.radial && xTickVals.length) {
                    $$renderer5.push("<!--[-->");
                    Rule($$renderer5, spread_props([
                      {
                        x: xTickVals[xTickVals.length - 1],
                        xOffset: ctx.xScale.step() + xBandOffset,
                        motion
                      },
                      splineProps,
                      {
                        class: cls(layerClass("grid-x-end-rule"), "stroke-surface-content/10", classes.line, splineProps?.class)
                      }
                    ]));
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> `);
            if (y2) {
              $$renderer4.push("<!--[-->");
              const splineProps = extractLayerProps(y2, "grid-y-line");
              Group($$renderer4, {
                transitionIn,
                transitionInParams,
                class: layerClass("grid-y"),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!--[-->`);
                  const each_array_1 = ensure_array_like(yTickVals);
                  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                    let y3 = each_array_1[$$index_1];
                    if (ctx.radial) {
                      $$renderer5.push("<!--[-->");
                      if (radialY === "circle") {
                        $$renderer5.push("<!--[-->");
                        Circle($$renderer5, spread_props([
                          { r: ctx.yScale(y3) + yBandOffset, motion },
                          splineProps,
                          {
                            class: cls(layerClass("grid-y-radial-circle"), "fill-none stroke-surface-content/10", classes.line, splineProps?.class)
                          }
                        ]));
                      } else {
                        $$renderer5.push("<!--[!-->");
                        Spline($$renderer5, spread_props([
                          {
                            data: xTickVals.map((x3) => ({ x: x3, y: y3 })),
                            x: "x",
                            y: "y",
                            motion: tweenConfig,
                            curve: curveLinearClosed
                          },
                          splineProps,
                          {
                            class: cls(layerClass("grid-y-radial-line"), "stroke-surface-content/10", classes.line, splineProps?.class)
                          }
                        ]));
                      }
                      $$renderer5.push(`<!--]-->`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                      Rule($$renderer5, spread_props([
                        { y: y3, yOffset: yBandOffset, motion },
                        splineProps,
                        {
                          class: cls(layerClass("grid-y-rule"), "stroke-surface-content/10", classes.line, splineProps?.class)
                        }
                      ]));
                    }
                    $$renderer5.push(`<!--]-->`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (isScaleBand(ctx.yScale) && bandAlign === "between" && yTickVals.length) {
                    $$renderer5.push("<!--[-->");
                    if (ctx.radial) {
                      $$renderer5.push("<!--[-->");
                      Circle($$renderer5, spread_props([
                        {
                          r: ctx.yScale(yTickVals[yTickVals.length - 1]) + ctx.yScale.step() + yBandOffset,
                          motion
                        },
                        splineProps,
                        {
                          class: cls(layerClass("grid-y-radial-circle"), "fill-none stroke-surface-content/10", classes.line, splineProps?.class)
                        }
                      ]));
                    } else {
                      $$renderer5.push("<!--[!-->");
                      Rule($$renderer5, spread_props([
                        {
                          y: yTickVals[yTickVals.length - 1],
                          yOffset: ctx.yScale.step() + yBandOffset,
                          motion
                        },
                        splineProps,
                        {
                          class: cls(layerClass("grid-y-end-rule"), "stroke-surface-content/10", classes.line, splineProps?.class)
                        }
                      ]));
                    }
                    $$renderer5.push(`<!--]-->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref: refProp });
  });
}
function resolveInsets(insets) {
  const all = insets?.all ?? 0;
  const x2 = insets?.x ?? all;
  const y2 = insets?.y ?? all;
  const left = insets?.left ?? x2;
  const right = insets?.right ?? x2;
  const top = insets?.top ?? y2;
  const bottom = insets?.bottom ?? y2;
  return { left, right, bottom, top };
}
function createDimensionGetter(ctx, getOptions) {
  const options = getOptions?.();
  return (item) => {
    const insets = resolveInsets(options?.insets);
    const xDomainMinMax = ctx.xScale.domain();
    const yDomainMinMax = ctx.yScale.domain();
    const _x = accessor(options?.x ?? ctx.x);
    const _y = accessor(options?.y ?? ctx.y);
    const _x1 = accessor(options?.x1 ?? ctx.x1);
    const _y1 = accessor(options?.y1 ?? ctx.y1);
    if (isScaleBand(ctx.yScale)) {
      const y2 = firstValue(ctx.yScale(_y(item)) ?? 0) + (ctx.y1Scale ? ctx.y1Scale(_y1(item)) : 0) + insets.top;
      const height = Math.max(0, ctx.yScale.bandwidth ? (ctx.y1Scale ? ctx.y1Scale.bandwidth?.() ?? 0 : ctx.yScale.bandwidth()) - insets.bottom - insets.top : 0);
      const xValue = _x(item);
      let left = 0;
      let right = 0;
      if (Array.isArray(xValue)) {
        left = min$2(xValue);
        right = max$2(xValue);
      } else if (xValue == null) {
        left = 0;
        right = 0;
      } else if (xValue > 0) {
        left = max$2([0, xDomainMinMax[0]]);
        right = xValue;
      } else {
        left = xValue;
        right = min$2([0, xDomainMinMax[1]]);
      }
      const x2 = ctx.xScale(left) + insets.left;
      const width = Math.max(0, ctx.xScale(right) - ctx.xScale(left) - insets.left - insets.right);
      return { x: x2, y: y2, width, height };
    } else {
      const x2 = firstValue(ctx.xScale(_x(item))) + (ctx.x1Scale ? ctx.x1Scale(_x1(item)) : 0) + insets.left;
      const width = Math.max(0, ctx.xScale.bandwidth ? (ctx.x1Scale ? ctx.x1Scale.bandwidth?.() ?? 0 : ctx.xScale.bandwidth()) - insets.left - insets.right : 0);
      const yValue = _y(item);
      let top = 0;
      let bottom = 0;
      if (Array.isArray(yValue)) {
        top = max$2(yValue);
        bottom = min$2(yValue);
      } else if (yValue == null) {
        top = 0;
        bottom = 0;
      } else if (yValue > 0) {
        top = yValue;
        bottom = max$2([0, yDomainMinMax[0]]);
      } else {
        top = min$2([0, yDomainMinMax[1]]);
        bottom = yValue;
      }
      const y2 = ctx.yScale(top) + insets.top;
      const height = ctx.yScale(bottom) - ctx.yScale(top) - insets.bottom - insets.top;
      return { x: x2, y: y2, width, height };
    }
  };
}
function firstValue(value) {
  return Array.isArray(value) ? value[0] : value;
}
function Bar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      data,
      x: x2 = ctx.x,
      y: y2 = ctx.y,
      x1: x12,
      y1: y12,
      fill,
      fillOpacity,
      stroke: strokeProp = "black",
      strokeWidth = 0,
      opacity,
      radius = 0,
      rounded: roundedProp = "all",
      motion,
      insets,
      initialX,
      initialY,
      initialHeight,
      initialWidth,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const stroke = strokeProp === null || strokeProp === void 0 ? "black" : strokeProp;
    const getDimensions = createDimensionGetter(ctx, () => ({ x: x2, y: y2, x1: x12, y1: y12, insets }));
    const dimensions = getDimensions(data) ?? { x: 0, y: 0, width: 0, height: 0 };
    const isVertical = isScaleBand(ctx.xScale);
    const valueAccessor = accessor(isVertical ? y2 : x2);
    const value = valueAccessor(data);
    const resolvedValue = Array.isArray(value) ? greatestAbs(value) : value;
    const rounded = roundedProp === "edge" ? isVertical ? resolvedValue >= 0 ? "top" : "bottom" : resolvedValue >= 0 ? "right" : "left" : roundedProp;
    const topLeft = ["all", "top", "left", "top-left"].includes(rounded);
    const topRight = ["all", "top", "right", "top-right"].includes(rounded);
    const bottomLeft = ["all", "bottom", "left", "bottom-left"].includes(rounded);
    const bottomRight = ["all", "bottom", "right", "bottom-right"].includes(rounded);
    const width = dimensions.width;
    const height = dimensions.height;
    const diameter = 2 * radius;
    const pathData = `M${dimensions.x + radius},${dimensions.y} h${width - diameter}
      ${topRight ? `a${radius},${radius} 0 0 1 ${radius},${radius}` : `h${radius}v${radius}`}
      v${height - diameter}
      ${bottomRight ? `a${radius},${radius} 0 0 1 ${-radius},${radius}` : `v${radius}h${-radius}`}
      h${diameter - width}
      ${bottomLeft ? `a${radius},${radius} 0 0 1 ${-radius},${-radius}` : `h${-radius}v${-radius}`}
      v${diameter - height}
      ${topLeft ? `a${radius},${radius} 0 0 1 ${radius},${-radius}` : `v${-radius}h${radius}`}
      z`.split("\n").join("");
    if (ctx.radial) {
      $$renderer2.push("<!--[-->");
      Arc($$renderer2, spread_props([
        {
          innerRadius: dimensions.y,
          outerRadius: dimensions.y + dimensions.height,
          startAngle: dimensions.x,
          endAngle: dimensions.x + dimensions.width,
          fill,
          fillOpacity,
          stroke,
          strokeWidth,
          opacity,
          cornerRadius: radius
        },
        extractLayerProps(restProps, "bar")
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
      if (rounded === "all" || rounded === "none" || radius === 0) {
        $$renderer2.push("<!--[-->");
        Rect($$renderer2, spread_props([
          {
            fill,
            fillOpacity,
            stroke,
            strokeWidth,
            opacity,
            rx: rounded === "none" ? 0 : radius,
            motion,
            initialX,
            initialY,
            initialHeight,
            initialWidth
          },
          dimensions,
          extractLayerProps(restProps, "bar")
        ]));
      } else {
        $$renderer2.push("<!--[!-->");
        const tweenMotion = extractTweenConfig(motion);
        Spline($$renderer2, spread_props([
          {
            pathData,
            fill,
            fillOpacity,
            stroke,
            strokeWidth,
            opacity,
            motion: tweenMotion
          },
          extractLayerProps(restProps, "bar")
        ]));
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Highlight($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    const tooltipCtx = getTooltipContext();
    let {
      data,
      x: xProp = ctx.x,
      y: yProp = ctx.y,
      axis: axisProp,
      points = false,
      lines: linesProp = false,
      area = false,
      bar = false,
      motion = "spring",
      onAreaClick,
      onBarClick,
      onPointClick,
      onPointEnter,
      onPointLeave
    } = $$props;
    const x2 = accessor(xProp);
    const y2 = accessor(yProp);
    const highlightData = data ?? tooltipCtx.data;
    const xValue = x2(highlightData);
    const xCoord = Array.isArray(xValue) ? xValue.map((v) => ctx.xScale(v)) : ctx.xScale(xValue);
    const xOffset = isScaleBand(ctx.xScale) && !ctx.radial ? ctx.xScale.bandwidth() / 2 : 0;
    const yValue = y2(highlightData);
    const yCoord = Array.isArray(yValue) ? yValue.map((v) => ctx.yScale(v)) : ctx.yScale(yValue);
    const yOffset = isScaleBand(ctx.yScale) && !ctx.radial ? ctx.yScale.bandwidth() / 2 : 0;
    const axis = axisProp == null ? isScaleBand(ctx.yScale) ? "y" : "x" : axisProp;
    const _lines = (() => {
      let tmpLines = [];
      if (!highlightData) return tmpLines;
      if (axis === "x" || axis === "both") {
        if (Array.isArray(xCoord)) {
          tmpLines = [
            ...tmpLines,
            ...xCoord.filter(notNull).map((xItem, i) => ({
              x1: xItem + xOffset,
              y1: min$2(ctx.yRange),
              x2: xItem + xOffset,
              y2: max$2(ctx.yRange)
            }))
          ];
        } else if (xCoord != null) {
          tmpLines = [
            ...tmpLines,
            {
              x1: xCoord + xOffset,
              y1: min$2(ctx.yRange),
              x2: xCoord + xOffset,
              y2: max$2(ctx.yRange)
            }
          ];
        }
      }
      if (axis === "y" || axis === "both") {
        if (Array.isArray(yCoord)) {
          tmpLines = [
            ...tmpLines,
            ...yCoord.filter(notNull).map((yItem, i) => ({
              x1: min$2(ctx.xRange),
              y1: yItem + yOffset,
              x2: max$2(ctx.xRange),
              y2: yItem + yOffset
            }))
          ];
        } else if (yCoord != null) {
          tmpLines = [
            ...tmpLines,
            {
              x1: min$2(ctx.xRange),
              y1: yCoord + yOffset,
              x2: max$2(ctx.xRange),
              y2: yCoord + yOffset
            }
          ];
        }
      }
      if (ctx.radial) {
        tmpLines = tmpLines.map((l) => {
          const [x12, y12] = pointRadial(l.x1, l.y1);
          const [x22, y22] = pointRadial(l.x2, l.y2);
          return { ...l, x1: x12, y1: y12, x2: x22, y2: y22 };
        });
      }
      return tmpLines;
    })();
    const _area = (() => {
      const tmpArea = { x: 0, y: 0, width: 0, height: 0 };
      if (!highlightData) return tmpArea;
      if (axis === "x" || axis === "both") {
        if (Array.isArray(xCoord)) {
          tmpArea.width = max$2(xCoord) - min$2(xCoord);
        } else if (isScaleBand(ctx.xScale)) {
          tmpArea.width = ctx.xScale.step();
        } else {
          const index = ctx.flatData.findIndex((d) => Number(x2(d)) === Number(x2(highlightData)));
          const isLastPoint = index + 1 === ctx.flatData.length;
          const nextDataPoint = isLastPoint ? max$2(ctx.xDomain) : x2(ctx.flatData[index + 1]);
          tmpArea.width = (ctx.xScale(nextDataPoint) ?? 0) - (xCoord ?? 0);
        }
        tmpArea.x = (Array.isArray(xCoord) ? min$2(xCoord) : xCoord) - (isScaleBand(ctx.xScale) ? ctx.xScale.padding() * ctx.xScale.step() / 2 : 0);
        if (axis === "x") {
          tmpArea.y = min$2(ctx.yRange);
          tmpArea.height = max$2(ctx.yRange) - min$2(ctx.yRange);
        }
      }
      if (axis === "y" || axis === "both") {
        if (Array.isArray(yCoord)) {
          tmpArea.height = max$2(yCoord) - min$2(yCoord);
        } else if (isScaleBand(ctx.yScale)) {
          tmpArea.height = ctx.yScale.step();
        } else {
          const index = ctx.flatData.findIndex((d) => Number(x2(d)) === Number(x2(highlightData)));
          const isLastPoint = index + 1 === ctx.flatData.length;
          const nextDataPoint = isLastPoint ? max$2(ctx.yDomain) : x2(ctx.flatData[index + 1]);
          tmpArea.height = (ctx.yScale(nextDataPoint) ?? 0) - (yCoord ?? 0);
        }
        tmpArea.y = (Array.isArray(yCoord) ? min$2(yCoord) : yCoord) - (isScaleBand(ctx.yScale) ? ctx.yScale.padding() * ctx.yScale.step() / 2 : 0);
        if (axis === "y") {
          tmpArea.width = max$2(ctx.xRange);
        }
      }
      return tmpArea;
    })();
    const _points = (() => {
      let tmpPoints = [];
      if (!highlightData) return tmpPoints;
      if (Array.isArray(xCoord)) {
        if (Array.isArray(highlightData)) {
          const highlightSeriesPoint = highlightData;
          if (Array.isArray(ctx.data)) {
            const seriesPointsData = ctx.data.map((series) => {
              return {
                series,
                point: series.find((d) => y2(d) === y2(highlightSeriesPoint))
              };
            }).filter((d) => d.point);
            tmpPoints = seriesPointsData.map((seriesPoint, i) => {
              return {
                x: ctx.xScale(seriesPoint.point[1]) + xOffset,
                y: yCoord + yOffset,
                fill: ctx.config.c ? ctx.cGet(seriesPoint.series) : null,
                data: { x: seriesPoint.point[1], y: yValue }
              };
            });
          }
        } else {
          tmpPoints = xCoord.filter(notNull).map((xItem, i) => {
            const _key = ctx.config.x?.[i];
            return {
              x: xItem + xOffset,
              y: yCoord + yOffset,
              // TODO: is there a better way to expose the series key/value?
              fill: ctx.config.c ? ctx.cGet({ ...highlightData, $key: _key }) : null,
              data: {
                x: xValue,
                // TODO: use highlightData[$key]?
                y: yValue
              }
            };
          });
        }
      } else if (Array.isArray(yCoord)) {
        if (Array.isArray(highlightData)) {
          const highlightSeriesPoint = highlightData;
          if (Array.isArray(ctx.data)) {
            const seriesPointsData = ctx.data.map((series) => {
              return {
                series,
                point: series.find((d) => x2(d) === x2(highlightSeriesPoint))
              };
            }).filter((d) => d.point);
            tmpPoints = seriesPointsData.map((seriesPoint, i) => ({
              x: xCoord + xOffset,
              y: ctx.yScale(seriesPoint.point[1]) + yOffset,
              fill: ctx.config.c ? ctx.cGet(seriesPoint.series) : null,
              data: { x: xValue, y: seriesPoint.point[1] }
            }));
          }
        } else {
          tmpPoints = yCoord.filter(notNull).map((yItem, i) => {
            const _key = ctx.config.y[i];
            return {
              x: xCoord + xOffset,
              y: yItem + yOffset,
              // TODO: is there a better way to expose the series key/value?
              fill: ctx.config.c ? ctx.cGet({ ...highlightData, $key: _key }) : null,
              data: {
                x: xValue,
                y: yValue
                // TODO: use highlightData[$key] ?
              }
            };
          });
        }
      } else if (xCoord != null && yCoord != null) {
        tmpPoints = [
          {
            x: xCoord + xOffset,
            y: yCoord + yOffset,
            fill: ctx.config.c ? ctx.cGet(highlightData) : null,
            data: { x: xValue, y: yValue }
          }
        ];
      } else {
        tmpPoints = [];
      }
      if (ctx.radial) {
        tmpPoints = tmpPoints.map((p) => {
          const [x3, y3] = pointRadial(p.x, p.y);
          return { ...p, x: x3, y: y3 };
        });
      }
      return tmpPoints;
    })();
    const areaProps = extractLayerProps(area, "highlight-area");
    const barProps = extractLayerProps(bar, "highlight-bar");
    const linesProps = extractLayerProps(linesProp, "highlight-line");
    const pointsProps = extractLayerProps(points, "highlight-point");
    if (highlightData) {
      $$renderer2.push("<!--[-->");
      if (area) {
        $$renderer2.push("<!--[-->");
        if (typeof area === "function") {
          $$renderer2.push("<!--[-->");
          area($$renderer2, { area: _area });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (ctx.radial) {
            $$renderer2.push("<!--[-->");
            Arc($$renderer2, {
              motion: motion === "spring" ? "spring" : void 0,
              startAngle: _area.x,
              endAngle: _area.x + _area.width,
              innerRadius: _area.y,
              outerRadius: _area.y + _area.height,
              class: cls(!areaProps.fill && "fill-surface-content/5", areaProps.class),
              onclick: onAreaClick && ((e) => onAreaClick(e, { data: highlightData }))
            });
          } else {
            $$renderer2.push("<!--[!-->");
            Rect($$renderer2, spread_props([
              { motion: motion === "spring" ? "spring" : void 0 },
              _area,
              areaProps,
              {
                class: cls(!areaProps.fill && "fill-surface-content/5", areaProps.class),
                onclick: onAreaClick && ((e) => onAreaClick(e, { data: highlightData }))
              }
            ]));
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (bar) {
        $$renderer2.push("<!--[-->");
        if (typeof bar === "function") {
          $$renderer2.push("<!--[-->");
          bar($$renderer2);
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          Bar($$renderer2, spread_props([
            {
              motion: motion === "spring" ? "spring" : void 0,
              data: highlightData
            },
            barProps,
            {
              class: cls(!barProps.fill && "fill-primary", barProps.class),
              onclick: onBarClick && ((e) => onBarClick(e, { data: highlightData }))
            }
          ]));
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (linesProp) {
        $$renderer2.push("<!--[-->");
        if (typeof linesProp === "function") {
          $$renderer2.push("<!--[-->");
          linesProp($$renderer2, { lines: _lines });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<!--[-->`);
          const each_array = ensure_array_like(_lines);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let line = each_array[$$index];
            Line($$renderer2, spread_props([
              {
                motion: motion === "spring" ? "spring" : void 0,
                x1: line.x1,
                y1: line.y1,
                x2: line.x2,
                y2: line.y2
              },
              linesProps,
              {
                class: cls("stroke-surface-content/20 stroke-2 [stroke-dasharray:2,2] pointer-events-none", linesProps.class)
              }
            ]));
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (points) {
        $$renderer2.push("<!--[-->");
        if (typeof points === "function") {
          $$renderer2.push("<!--[-->");
          points($$renderer2, { points: _points });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<!--[-->`);
          const each_array_1 = ensure_array_like(_points);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let point = each_array_1[$$index_1];
            Circle($$renderer2, spread_props([
              {
                motion: motion === "spring" ? "spring" : void 0,
                cx: point.x,
                cy: point.y,
                fill: point.fill,
                r: 4,
                strokeWidth: 6
              },
              pointsProps,
              {
                class: cls("stroke-white [paint-order:stroke] drop-shadow-sm", !point.fill && (typeof points === "boolean" || !points.fill) && "fill-primary", pointsProps.class),
                onpointerdown: onPointClick && ((e) => {
                  e.stopPropagation();
                }),
                onclick: onPointClick && ((e) => onPointClick(e, { point, data: highlightData })),
                onpointerenter: onPointEnter && ((e) => {
                  if (onPointClick) {
                    asAny(e.target).style.cursor = "pointer";
                  }
                  onPointEnter(e, { point, data: highlightData });
                }),
                onpointerleave: onPointLeave && ((e) => {
                  if (onPointClick) {
                    asAny(e.target).style.cursor = "default";
                  }
                  onPointLeave(e, { point, data: highlightData });
                })
              }
            ]));
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function isSamePoint(p1, p2) {
  return Math.abs(p1.x - p2.x) < 1e-6 && Math.abs(p1.y - p2.y) < 1e-6;
}
function createDirectPath(source, target) {
  if (isSamePoint(source, target))
    return "";
  return `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
}
function isNearZero(value) {
  return Math.abs(value) < 1e-6;
}
function createSquarePath({ source, target, sweep }) {
  if (sweep === "horizontal-vertical") {
    return `M ${source.x} ${source.y} L ${target.x} ${source.y} L ${target.x} ${target.y}`;
  } else {
    return `M ${source.x} ${source.y} L ${source.x} ${target.y} L ${target.x} ${target.y}`;
  }
}
function createBeveledPath(opts) {
  const { radius, dx, dy, source, target, sweep } = opts;
  const effectiveRadius = Math.max(0, Math.min(radius, Math.abs(dx), Math.abs(dy)));
  if (isNearZero(effectiveRadius)) {
    return createSquarePath(opts);
  }
  const signX = Math.sign(dx);
  const signY = Math.sign(dy);
  if (sweep === "horizontal-vertical") {
    const pBeforeCorner = { x: target.x - effectiveRadius * signX, y: source.y };
    const pAfterCorner = { x: target.x, y: source.y + effectiveRadius * signY };
    return `M ${source.x} ${source.y} L ${pBeforeCorner.x} ${pBeforeCorner.y} L ${pAfterCorner.x} ${pAfterCorner.y} L ${target.x} ${target.y}`;
  } else {
    const pBeforeCorner = { x: source.x, y: target.y - effectiveRadius * signY };
    const pAfterCorner = { x: source.x + effectiveRadius * signX, y: target.y };
    return `M ${source.x} ${source.y} L ${pBeforeCorner.x} ${pBeforeCorner.y} L ${pAfterCorner.x} ${pAfterCorner.y} L ${target.x} ${target.y}`;
  }
}
function createRoundedPath(opts) {
  const { radius, dx, dy, source, target, sweep } = opts;
  const effectiveRadius = Math.max(0, Math.min(radius, Math.abs(dx), Math.abs(dy)));
  if (isNearZero(effectiveRadius)) {
    return createSquarePath(opts);
  }
  const signX = Math.sign(dx);
  const signY = Math.sign(dy);
  if (sweep === "horizontal-vertical") {
    const pBeforeCorner = { x: target.x - effectiveRadius * signX, y: source.y };
    const pAfterCorner = { x: target.x, y: source.y + effectiveRadius * signY };
    const sweepFlag = signX * signY > 0 ? 1 : 0;
    return `M ${source.x} ${source.y} L ${pBeforeCorner.x} ${pBeforeCorner.y} A ${effectiveRadius} ${effectiveRadius} 0 0 ${sweepFlag} ${pAfterCorner.x} ${pAfterCorner.y} L ${target.x} ${target.y}`;
  } else {
    const pBeforeCorner = { x: source.x, y: target.y - effectiveRadius * signY };
    const pAfterCorner = { x: source.x + effectiveRadius * signX, y: target.y };
    const sweepFlag = signX * signY > 0 ? 0 : 1;
    return `M ${source.x} ${source.y} L ${pBeforeCorner.x} ${pBeforeCorner.y} A ${effectiveRadius} ${effectiveRadius} 0 0 ${sweepFlag} ${pAfterCorner.x} ${pAfterCorner.y} L ${target.x} ${target.y}`;
  }
}
const pathStrategies = {
  square: createSquarePath,
  beveled: createBeveledPath,
  rounded: createRoundedPath
};
function getConnectorPresetPath(opts) {
  const { source, target, type } = opts;
  if (isSamePoint(source, target))
    return "";
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  if (type === "straight" || isNearZero(dx) || isNearZero(dy)) {
    return createDirectPath(source, target);
  }
  return (pathStrategies[type] || pathStrategies.square)({ ...opts, dx, dy });
}
const FALLBACK_PATH = "M0,0L0,0";
function getConnectorD3Path({ source, target, sweep, curve }) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const line = d3Line().curve(curve);
  let points = [];
  const isAligned = isNearZero(dx) || isNearZero(dy);
  if (sweep === "none" || isAligned) {
    points = [
      [source.x, source.y],
      [target.x, target.y]
    ];
  } else if (sweep === "horizontal-vertical") {
    points = [
      [source.x, source.y],
      [target.x, source.y],
      [target.x, target.y]
    ];
  } else if (sweep === "vertical-horizontal") {
    points = [
      [source.x, source.y],
      [source.x, target.y],
      [target.x, target.y]
    ];
  }
  if (points.length === 2 && isNearZero(dx) && isNearZero(dx))
    return FALLBACK_PATH;
  const d = line(points);
  if (!d || d.includes("NaN"))
    return FALLBACK_PATH;
  return d;
}
function Connector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      source = { x: 0, y: 0 },
      target = { x: 100, y: 100 },
      sweep: sweepProp,
      type = "rounded",
      radius = 20,
      curve = curveLinear,
      pathRef = void 0,
      pathData: pathDataProp,
      marker,
      markerStart,
      markerMid,
      markerEnd,
      motion,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sweep = (() => {
      if (sweepProp) return sweepProp;
      if (type === "d3") return "none";
      return "horizontal-vertical";
    })();
    const markerStartId = markerStart || marker ? createId("marker-start", uid) : "";
    const markerMidId = markerMid || marker ? createId("marker-mid", uid) : "";
    const markerEndId = markerEnd || marker ? createId("marker-end", uid) : "";
    const extractedTween = extractTweenConfig(motion);
    const tweenOptions = extractedTween ? {
      type: extractedTween.type,
      options: { interpolate: d3InterpolatePathExports.interpolatePath, ...extractedTween.options }
    } : void 0;
    const pathData = (() => {
      if (pathDataProp) return pathDataProp;
      if (type === "d3") {
        return getConnectorD3Path({ source, target, sweep, curve });
      } else {
        return getConnectorPresetPath({ source, target, sweep, type, radius });
      }
    })();
    const motionPath = createMotion("", () => pathData, tweenOptions ? tweenOptions : { type: "none" });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Spline($$renderer3, spread_props([
        {
          pathData: motionPath.current,
          "marker-start": markerStartId ? `url(#${markerStartId})` : void 0,
          "marker-mid": markerMidId ? `url(#${markerMidId})` : void 0,
          "marker-end": markerEndId ? `url(#${markerEndId})` : void 0
        },
        extractLayerProps(restProps, "connector"),
        restProps,
        {
          get pathRef() {
            return pathRef;
          },
          set pathRef($$value) {
            pathRef = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!----> `);
      MarkerWrapper($$renderer3, { id: markerStartId, marker: markerStart });
      $$renderer3.push(`<!----> `);
      MarkerWrapper($$renderer3, { id: markerMidId, marker: markerMid });
      $$renderer3.push(`<!----> `);
      MarkerWrapper($$renderer3, { id: markerEndId, marker: markerEnd });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { pathRef });
  });
}
const FALLBACK_COORDS = { x: 0, y: 0 };
function Link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data,
      sankey = false,
      source: sourceProp,
      target: targetProp,
      orientation: orientationProp,
      x: xProp,
      y: yProp,
      curve: curveProp,
      explicitCoords,
      type = "d3",
      sweep = "none",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sourceAccessor = (() => {
      if (sourceProp) return sourceProp;
      if (sankey) return (d) => ({ node: d.source, y: d.y0, isSource: true });
      return (d) => d.source;
    })();
    const targetAccessor = (() => {
      if (targetProp) return targetProp;
      if (sankey) return (d) => ({ node: d.target, y: d.y1, isSource: false });
      return (d) => d.target;
    })();
    const orientation = (() => {
      if (orientationProp) return orientationProp;
      if (sankey) return "horizontal";
      return "vertical";
    })();
    const curve = (() => {
      if (curveProp) return curveProp;
      if (orientation === "horizontal") return bumpX;
      return bumpY;
    })();
    const xAccessor = (() => {
      if (xProp) return xProp;
      if (sankey) return (d) => d.isSource ? d.node.x1 : d.node.x0;
      return (d) => orientation === "horizontal" ? d.y : d.x;
    })();
    const yAccessor = (() => {
      if (yProp) return yProp;
      if (sankey) return (d) => d.y;
      return (d) => orientation === "horizontal" ? d.x : d.y;
    })();
    const sourceCoords = (() => {
      if (explicitCoords) return { x: explicitCoords.x1, y: explicitCoords.y1 };
      if (!data) return FALLBACK_COORDS;
      try {
        const sourceData = sourceAccessor(data);
        if (sourceData == null) return FALLBACK_COORDS;
        const xVal = xAccessor(sourceData);
        const yVal = yAccessor(sourceData);
        return {
          x: Number.isFinite(xVal) ? xVal : 0,
          y: Number.isFinite(yVal) ? yVal : 0
        };
      } catch (e) {
        console.error("Error accessing source coordinates:", e, "Data:", data);
        return FALLBACK_COORDS;
      }
    })();
    const targetCoords = (() => {
      if (explicitCoords) return { x: explicitCoords.x2, y: explicitCoords.y2 };
      if (!data) return FALLBACK_COORDS;
      try {
        const targetData = targetAccessor(data);
        if (targetData == null) return FALLBACK_COORDS;
        const xVal = xAccessor(targetData);
        const yVal = yAccessor(targetData);
        return {
          x: Number.isFinite(xVal) ? xVal : 0,
          y: Number.isFinite(yVal) ? yVal : 0
        };
      } catch (e) {
        console.error("Error accessing target coordinates:", e, "Data:", data);
        return FALLBACK_COORDS;
      }
    })();
    Connector($$renderer2, spread_props([
      {
        source: sourceCoords,
        target: targetCoords,
        type,
        curve,
        sweep
      },
      extractLayerProps(restProps, "link")
    ]));
  });
}
function Points($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      data,
      x: x2,
      y: y2,
      r = 5,
      offsetX,
      offsetY,
      links = false,
      fill,
      fillOpacity,
      stroke,
      strokeWidth,
      opacity,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function getOffset(value, offset, scale) {
      if (typeof offset === "function") {
        return offset(value, ctx);
      } else if (offset != null) {
        return offset;
      } else if (isScaleBand(scale) && !ctx.radial) {
        return scale.bandwidth() / 2;
      } else {
        return 0;
      }
    }
    const xAccessor = x2 ? accessor(x2) : ctx.x;
    const yAccessor = y2 ? accessor(y2) : ctx.y;
    const pointsData = data ?? ctx.data;
    const getPointObject = (xVal, yVal, d) => {
      const scaledX = ctx.xScale(xVal);
      const scaledY = ctx.yScale(yVal);
      return {
        x: scaledX + getOffset(scaledX, offsetX, ctx.xScale),
        y: scaledY + getOffset(scaledY, offsetY, ctx.yScale),
        r: ctx.config.r ? ctx.rGet(d) : r,
        xValue: xVal,
        yValue: yVal,
        data: d
      };
    };
    const points = pointsData.flatMap((d) => {
      const xValue = xAccessor(d);
      const yValue = yAccessor(d);
      if (Array.isArray(xValue)) {
        return xValue.filter(Boolean).map((xVal) => getPointObject(xVal, yValue, d));
      } else if (Array.isArray(yValue)) {
        return yValue.filter(Boolean).map((yVal) => getPointObject(xValue, yVal, d));
      } else if (xValue != null && yValue != null) {
        return getPointObject(xValue, yValue, d);
      }
      return [];
    });
    const _links = pointsData.flatMap((d) => {
      const xValue = xAccessor(d);
      const yValue = yAccessor(d);
      if (Array.isArray(xValue)) {
        const [xMin, xMax] = extent(ctx.xGet(d));
        const y3 = ctx.yGet(d) + getOffset(ctx.yGet(d), offsetY, ctx.yScale);
        return {
          source: {
            x: xMin + getOffset(xMin, offsetX, ctx.xScale) + (ctx.config.r ? ctx.rGet(d) : r),
            y: y3
          },
          target: {
            x: xMax + getOffset(xMax, offsetX, ctx.xScale) - (ctx.config.r ? ctx.rGet(d) : r),
            y: y3
          },
          data: d
        };
      } else if (Array.isArray(yValue)) {
        const x3 = ctx.xGet(d) + getOffset(ctx.xGet(d), offsetX, ctx.xScale);
        const [yMin, yMax] = extent(ctx.yGet(d));
        return {
          source: { x: x3, y: yMin + getOffset(yMin, offsetY, ctx.yScale) },
          target: { x: x3, y: yMax + getOffset(yMax, offsetY, ctx.yScale) },
          data: d
        };
      }
    });
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2, { points });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (links) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<!--[-->`);
        const each_array = ensure_array_like(_links);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let link2 = each_array[$$index];
          Link($$renderer2, spread_props([
            {
              data: link2,
              stroke: fill ?? (ctx.config.c ? ctx.cGet(link2.data) : null)
            },
            extractLayerProps(links, "points-link")
          ]));
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_1 = ensure_array_like(points);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let point = each_array_1[$$index_1];
        const radialPoint = pointRadial(point.x, point.y);
        Circle($$renderer2, spread_props([
          {
            cx: ctx.radial ? radialPoint[0] : point.x,
            cy: ctx.radial ? radialPoint[1] : point.y,
            r: point.r,
            fill: fill ?? (ctx.config.c ? ctx.cGet(point.data) : null),
            fillOpacity,
            stroke,
            strokeWidth,
            opacity
          },
          extractLayerProps(restProps, "point")
        ]));
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Labels($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    let {
      data,
      value,
      x: x2,
      y: y2,
      placement = "outside",
      offset = placement === "center" ? 0 : 4,
      format: format2,
      key = (_, i) => i,
      children: childrenProp,
      class: className,
      fill,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function getTextProps(point) {
      const pointValue = isScaleBand(ctx.yScale) ? point.xValue : point.yValue;
      const fillValue = typeof fill === "function" ? accessor(fill)(point.data) : fill;
      const displayValue = value ? accessor(value)(point.data) : isScaleBand(ctx.yScale) ? point.xValue : point.yValue;
      const formattedValue = format$1(
        displayValue,
        // @ts-expect-error - improve types
        format2 ?? (value ? void 0 : isScaleBand(ctx.yScale) ? ctx.xScale.tickFormat?.() : ctx.yScale.tickFormat?.())
      );
      if (isScaleBand(ctx.yScale)) {
        if (pointValue < 0) {
          return {
            value: formattedValue,
            fill: fillValue,
            x: point.x + (placement === "outside" ? -offset : offset),
            y: point.y,
            textAnchor: placement === "outside" ? "end" : "start",
            verticalAnchor: "middle",
            capHeight: ".6rem"
          };
        } else {
          return {
            value: formattedValue,
            fill: fillValue,
            x: point.x + (placement === "outside" ? offset : -offset),
            y: point.y,
            textAnchor: placement === "outside" ? "start" : "end",
            verticalAnchor: "middle",
            capHeight: ".6rem"
          };
        }
      } else {
        if (pointValue < 0) {
          return {
            value: formattedValue,
            fill: fillValue,
            x: point.x,
            y: point.y + (placement === "outside" ? offset : -offset),
            capHeight: ".6rem",
            textAnchor: "middle",
            verticalAnchor: placement === "center" ? "middle" : placement === "outside" ? "start" : "end"
          };
        } else {
          return {
            value: formattedValue,
            fill: fillValue,
            x: point.x,
            y: point.y + (placement === "outside" ? -offset : offset),
            capHeight: ".6rem",
            textAnchor: "middle",
            verticalAnchor: placement === "center" ? "middle" : placement === "outside" ? "end" : "start"
          };
        }
      }
    }
    Group($$renderer2, {
      class: layerClass("labels-g"),
      children: ($$renderer3) => {
        {
          let children = function($$renderer4, { points }) {
            $$renderer4.push(`<!--[-->`);
            const each_array = ensure_array_like(points);
            for (let i = 0, $$length = each_array.length; i < $$length; i++) {
              let point = each_array[i];
              const textProps = extractLayerProps(getTextProps(point), "labels-text");
              if (childrenProp) {
                $$renderer4.push("<!--[-->");
                childrenProp($$renderer4, { data: point, textProps });
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
                Text($$renderer4, spread_props([
                  textProps,
                  restProps,
                  {
                    class: cls(
                      "text-xs",
                      placement === "inside" ? "fill-surface-300 stroke-surface-content" : "fill-surface-content stroke-surface-100",
                      textProps.class,
                      className
                    )
                  }
                ]));
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          };
          Points($$renderer3, { data, x: x2, y: y2, children, $$slots: { default: true } });
        }
      },
      $$slots: { default: true }
    });
  });
}
function DefaultTooltip($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { tooltipProps, seriesState, canHaveTotal = false } = $$props;
    const context = getChartContext();
    $$renderer2.push(`<!---->`);
    {
      let children = function($$renderer3, { data, payload }) {
        $$renderer3.push(`<!---->`);
        TooltipHeader($$renderer3, spread_props([{ value: payload[0].label, format: format$1 }, tooltipProps?.header]));
        $$renderer3.push(`<!----> <!---->`);
        TooltipList($$renderer3, spread_props([
          tooltipProps?.list,
          {
            children: ($$renderer4) => {
              $$renderer4.push(`<!--[-->`);
              const each_array = ensure_array_like(payload);
              for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                let p = each_array[i];
                $$renderer4.push(`<!---->`);
                TooltipItem($$renderer4, spread_props([
                  {
                    label: p.name,
                    value: p.value,
                    color: p.color,
                    format: format$1,
                    valueAlign: "right",
                    onpointerenter: () => seriesState.highlightKey.current = p.key,
                    onpointerleave: () => seriesState.highlightKey.current = null
                  },
                  tooltipProps?.item
                ]));
                $$renderer4.push(`<!---->`);
              }
              $$renderer4.push(`<!--]--> `);
              if (canHaveTotal && payload.length > 1 && !tooltipProps?.hideTotal) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<!---->`);
                TooltipSeparator($$renderer4, spread_props([tooltipProps?.separator, { children: void 0 }]));
                $$renderer4.push(`<!----> <!---->`);
                TooltipItem($$renderer4, spread_props([
                  {
                    label: "total",
                    value: sum$1(seriesState.visibleSeries, (s) => {
                      const seriesTooltipData = s.data ? findRelatedData(s.data, data, context.x) : data;
                      const valueAccessor = accessor(s.value ?? (s.data ? context.y : s.key));
                      return valueAccessor(seriesTooltipData);
                    }),
                    format: "integer",
                    valueAlign: "right"
                  },
                  tooltipProps?.item
                ]));
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          }
        ]));
        $$renderer3.push(`<!---->`);
      };
      Tooltip($$renderer2, spread_props([
        { context },
        tooltipProps?.root,
        { children, $$slots: { default: true } }
      ]));
    }
    $$renderer2.push(`<!---->`);
  });
}
function AnnotationLine($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      x: x2,
      y: y2,
      label,
      labelPlacement = "top-right",
      labelXOffset = 0,
      labelYOffset = 0,
      props
    } = $$props;
    const ctx = getChartContext();
    const isVertical = x2 != null;
    const line = {
      x1: x2 ? ctx.xScale(x2) : ctx.xRange[0],
      y1: y2 && !x2 ? ctx.yScale(y2) : ctx.yRange[0],
      x2: x2 ? ctx.xScale(x2) : ctx.xRange[1],
      y2: y2 ? ctx.yScale(y2) : ctx.yRange[1]
    };
    const labelProps = isVertical ? {
      x: line.x1 + (labelPlacement.includes("left") ? -labelXOffset : labelXOffset),
      y: (labelPlacement.includes("top") ? line.y2 : labelPlacement.includes("bottom") ? line.y1 : (line.y1 - line.y2) / 2) + (["top", "bottom-left", "bottom-right"].includes(labelPlacement) ? -labelYOffset : labelYOffset),
      dy: -2,
      // adjust for smaller font size
      textAnchor: labelPlacement.includes("left") ? "end" : labelPlacement.includes("right") ? "start" : "middle",
      verticalAnchor: labelPlacement === "top" ? "end" : (
        // place above line
        labelPlacement === "bottom" ? "start" : (
          // place below line
          labelPlacement.includes("top") ? "start" : labelPlacement.includes("bottom") ? "end" : "middle"
        )
      )
    } : {
      x: (labelPlacement.includes("left") ? line.x1 : labelPlacement.includes("right") ? line.x2 : (line.x2 - line.x1) / 2) + (["left", "top-right", "bottom-right"].includes(labelPlacement) ? -labelXOffset : labelXOffset),
      y: line.y1 + (labelPlacement.includes("top") ? -labelYOffset : labelYOffset),
      dy: -2,
      // adjust for smaller font size
      textAnchor: labelPlacement === "left" ? "end" : (
        // place beside line
        labelPlacement === "right" ? "start" : (
          // place beside line
          labelPlacement.includes("left") ? "start" : labelPlacement.includes("right") ? "end" : "middle"
        )
      ),
      verticalAnchor: labelPlacement.includes("top") ? "end" : labelPlacement.includes("bottom") ? "start" : "middle"
    };
    Line($$renderer2, spread_props([
      { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 },
      props?.line,
      { class: cls("stroke-surface-content", props?.line?.class) }
    ]));
    $$renderer2.push(`<!----> `);
    if (label) {
      $$renderer2.push("<!--[-->");
      Text($$renderer2, spread_props([
        { value: label },
        labelProps,
        props?.label,
        {
          class: cls("text-xs pointer-events-none", props?.label?.class)
        }
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function AnnotationPoint($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      x: x2,
      y: y2,
      r = 4,
      label,
      labelPlacement = "center",
      labelXOffset = 0,
      labelYOffset = 0,
      details,
      props
    } = $$props;
    const ctx = getChartContext();
    const point = {
      x: x2 ? ctx.xScale(x2) + (isScaleBand(ctx.xScale) ? ctx.xScale.bandwidth() / 2 : 0) : 0,
      y: y2 ? ctx.yScale(y2) + (isScaleBand(ctx.yScale) ? ctx.yScale.bandwidth() / 2 : 0) : ctx.height
    };
    const labelProps = {
      x: point.x + ((["top", "center", "bottom"].includes(labelPlacement) ? 0 : r) + labelXOffset) * (labelPlacement.includes("left") ? -1 : 1),
      y: point.y + ((["left", "center", "right"].includes(labelPlacement) ? 0 : r) + labelYOffset) * (labelPlacement.includes("top") ? -1 : 1),
      dy: -2,
      // adjust for smaler font size
      textAnchor: labelPlacement.includes("left") ? "end" : labelPlacement.includes("right") ? "start" : "middle",
      verticalAnchor: labelPlacement.includes("top") ? "end" : labelPlacement.includes("bottom") ? "start" : "middle"
    };
    Circle($$renderer2, spread_props([
      {
        cx: point.x,
        cy: point.y,
        r,
        onpointermove: (e) => {
          if (details) {
            e.stopPropagation();
            ctx.tooltip.show(e, { annotation: { label, details } });
          }
        },
        onpointerleave: () => {
          if (details) {
            ctx.tooltip.hide();
          }
        }
      },
      props?.circle,
      { class: cls("stroke-surface-100", props?.circle?.class) }
    ]));
    $$renderer2.push(`<!----> `);
    if (label) {
      $$renderer2.push("<!--[-->");
      Text($$renderer2, spread_props([
        { value: label },
        labelProps,
        props?.label,
        {
          class: cls("text-xs pointer-events-none", props?.label?.class)
        }
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function LinearGradient($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId("linearGradient-", uid),
      stops = ["var(--tw-gradient-from)", "var(--tw-gradient-to)"],
      vertical = false,
      x1: x12 = "0%",
      y1: y12 = "0%",
      x2 = vertical ? "0%" : "100%",
      y2 = vertical ? "100%" : "0%",
      rotate,
      units = "objectBoundingBox",
      ref: refProp = void 0,
      class: className,
      stopsContent,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    getChartContext();
    const renderCtx = getRenderContext();
    let canvasGradient = void 0;
    if (renderCtx === "canvas") {
      registerCanvasComponent();
    }
    if (renderCtx === "canvas") {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2, { id, gradient: asAny(canvasGradient) });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (renderCtx === "svg") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<defs><linearGradient${attributes(
          {
            id,
            x1: x12,
            y1: y12,
            x2,
            y2,
            gradientTransform: rotate ? `rotate(${rotate})` : "",
            gradientUnits: units,
            ...extractLayerProps(restProps, "linear-gradient")
          },
          void 0,
          void 0,
          void 0,
          3
        )}>`);
        if (stopsContent) {
          $$renderer2.push("<!--[-->");
          stopsContent?.($$renderer2);
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (stops) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<!--[-->`);
            const each_array = ensure_array_like(stops);
            for (let i = 0, $$length = each_array.length; i < $$length; i++) {
              let stop = each_array[i];
              if (Array.isArray(stop)) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<stop${attr("offset", stop[0])}${attr("stop-color", stop[1])}${attr_class(clsx(cls(layerClass("linear-gradient-stop"), className)))}></stop>`);
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(`<stop${attr("offset", `${stringify(i * (100 / (stops.length - 1)))}%`)}${attr("stop-color", stop)}${attr_class(clsx(cls(layerClass("linear-gradient-stop"), className)))}></stop>`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></linearGradient></defs>`);
        children?.($$renderer2, { id, gradient: `url(#${id})` });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref: refProp });
  });
}
function Pattern($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId("pattern-", uid),
      size = 4,
      width = size,
      height = size,
      lines: linesProp,
      circles: circlesProp,
      background,
      patternContent,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const renderCtx = getRenderContext();
    let canvasPattern = null;
    let shapes = [];
    if (linesProp) {
      const lineDefs = Array.isArray(linesProp) ? linesProp : linesProp === true ? [{}] : [linesProp];
      for (const line of lineDefs) {
        const stroke = line.color ?? "var(--color-surface-content)";
        const strokeWidth = line.width ?? 1;
        const opacity = line.opacity ?? 1;
        let rotate = Math.round(line.rotate ?? 0) % 360;
        if (rotate > 180) rotate = rotate - 360;
        else if (rotate > 90) rotate = rotate - 180;
        else if (rotate < -180) rotate = rotate + 360;
        else if (rotate < -90) rotate = rotate + 180;
        let path2 = "";
        if (rotate === 0) {
          path2 = `
        M 0 0 L ${width} 0
        M 0 ${height} L ${width} ${height}
    `;
        } else if (rotate === 90) {
          path2 = `
        M 0 0 L 0 ${height}
        M ${width} 0 L ${width} ${height}
    `;
        } else {
          if (rotate > 0) {
            path2 = `
          M 0 ${-height} L ${width * 2} ${height}
          M ${-width} ${-height} L ${width} ${height}
          M ${-width} 0 L ${width} ${height * 2}
      `;
          } else {
            path2 = `
          M ${-width} ${height} L ${width} ${-height}
          M ${-width} ${height * 2} L ${width * 2} ${-height}
          M 0 ${height * 2} L ${width * 2} 0
      `;
          }
        }
        shapes.push({ type: "line", path: path2, stroke, strokeWidth, opacity });
      }
    }
    if (circlesProp) {
      const circleDefs = Array.isArray(circlesProp) ? circlesProp : circlesProp === true ? [{}] : [circlesProp];
      for (const circle of circleDefs) {
        if (circle.stagger) {
          shapes.push(
            {
              type: "circle",
              cx: size / 4,
              cy: size / 4,
              r: circle.radius ?? 1,
              fill: circle.color ?? "var(--color-surface-content)",
              opacity: circle.opacity ?? 1
            },
            {
              type: "circle",
              cx: size * 3 / 4,
              cy: size * 3 / 4,
              r: circle.radius ?? 1,
              fill: circle.color ?? "var(--color-surface-content)",
              opacity: circle.opacity ?? 1
            }
          );
        } else {
          shapes.push({
            type: "circle",
            cx: size / 2,
            cy: size / 2,
            r: circle.radius ?? 1,
            fill: circle.color ?? "var(--color-surface-content)",
            opacity: circle.opacity ?? 1
          });
        }
      }
    }
    if (renderCtx === "canvas") {
      registerCanvasComponent();
    }
    if (renderCtx === "canvas") {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2, { id, pattern: asAny(canvasPattern) });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (renderCtx === "svg") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<defs><pattern${attributes(
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            ...extractLayerProps(restProps, "pattern")
          },
          void 0,
          void 0,
          void 0,
          3
        )}>`);
        if (patternContent) {
          $$renderer2.push("<!--[-->");
          patternContent?.($$renderer2);
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (background) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<rect${attr("width", width)}${attr("height", height)}${attr("fill", background)}></rect>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--><!--[-->`);
          const each_array = ensure_array_like(shapes.filter((shape) => shape.type === "line"));
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let line = each_array[$$index];
            $$renderer2.push(`<path${attr("d", line.path)}${attr("stroke", line.stroke)}${attr("stroke-width", line.strokeWidth)} fill="none"${attr("opacity", line.opacity)}></path>`);
          }
          $$renderer2.push(`<!--]--><!--[-->`);
          const each_array_1 = ensure_array_like(shapes.filter((shape) => shape.type === "circle"));
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let circle = each_array_1[$$index_1];
            $$renderer2.push(`<circle${attr("cx", circle.cx)}${attr("cy", circle.cy)}${attr("r", circle.r)}${attr("fill", circle.fill)}${attr("opacity", circle.opacity)}></circle>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]--></pattern></defs>`);
        children?.($$renderer2, { id, pattern: `url(#${id})` });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function AnnotationRange($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      x: x2,
      y: y2,
      fill,
      class: className,
      gradient,
      pattern,
      label,
      labelPlacement = "center",
      labelXOffset = 0,
      labelYOffset = 0,
      props
    } = $$props;
    const ctx = getChartContext();
    const rect = {
      x: x2 ? ctx.xScale(x2[0] ?? ctx.xDomain[0]) - (isScaleBand(ctx.xScale) ? ctx.xScale.padding() * ctx.xScale.step() / 2 : 0) : ctx.xRange[0],
      y: y2 ? ctx.yScale(y2[1] ?? ctx.yDomain[1]) : ctx.yRange[1],
      width: x2 ? ctx.xScale(x2[1] ?? ctx.xDomain[1]) - ctx.xScale(x2[0] ?? ctx.xDomain[0]) + (isScaleBand(ctx.xScale) ? ctx.xScale.step() : 0) : ctx.width,
      height: y2 ? ctx.yScale(y2[0] ?? ctx.yDomain[0]) - ctx.yScale(y2[1] ?? ctx.yDomain[1]) : ctx.height
    };
    const labelProps = {
      x: ((labelPlacement.includes("left") ? rect.x : labelPlacement.includes("right") ? (rect.x ?? 0) + rect.width : (rect.x ?? 0) + rect.width / 2) ?? 0) + (labelPlacement.includes("right") ? -labelXOffset : labelXOffset),
      y: ((labelPlacement.includes("top") ? rect.y : labelPlacement.includes("bottom") ? (rect.y ?? 0) + rect.height : (rect.y ?? 0) + rect.height / 2) ?? 0) + (labelPlacement.includes("bottom") ? -labelYOffset : labelYOffset),
      dy: -2,
      // adjust for smaler font size
      textAnchor: labelPlacement.includes("left") ? "start" : labelPlacement.includes("right") ? "end" : "middle",
      verticalAnchor: labelPlacement.includes("top") ? "start" : labelPlacement.includes("bottom") ? "end" : "middle"
    };
    if (fill || className) {
      $$renderer2.push("<!--[-->");
      Rect($$renderer2, spread_props([
        rect,
        props?.rect,
        { fill, class: cls(props?.rect?.class, className) }
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (gradient) {
      $$renderer2.push("<!--[-->");
      {
        let children = function($$renderer3, { gradient: gradient2 }) {
          Rect($$renderer3, spread_props([rect, props?.rect, { fill: gradient2 }]));
        };
        LinearGradient($$renderer2, spread_props([gradient, { children, $$slots: { default: true } }]));
      }
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (pattern) {
      $$renderer2.push("<!--[-->");
      {
        let children = function($$renderer3, { pattern: pattern2 }) {
          Rect($$renderer3, spread_props([rect, props?.rect, { fill: pattern2 }]));
        };
        Pattern($$renderer2, spread_props([pattern, { children, $$slots: { default: true } }]));
      }
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (label) {
      $$renderer2.push("<!--[-->");
      Text($$renderer2, spread_props([
        { value: label },
        labelProps,
        props?.label,
        {
          class: cls("text-xs pointer-events-none", props?.label?.class)
        }
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ChartAnnotations($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { annotations, layer, highlightKey, visibleSeries } = $$props;
    let visibleAnnotations = annotations.filter((a) => (a.layer === layer || a.layer == null && layer === "above") && (highlightKey == null || a.seriesKey == null || a.seriesKey === highlightKey) && visibleSeries.some((s) => a.seriesKey == null || a.seriesKey === s.key));
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(visibleAnnotations);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let annotation = each_array[$$index];
      if (annotation.type === "point") {
        $$renderer2.push("<!--[-->");
        AnnotationPoint($$renderer2, spread_props([annotation]));
      } else {
        $$renderer2.push("<!--[!-->");
        if (annotation.type === "line") {
          $$renderer2.push("<!--[-->");
          AnnotationLine($$renderer2, spread_props([annotation]));
        } else {
          $$renderer2.push("<!--[!-->");
          if (annotation.type === "range") {
            $$renderer2.push("<!--[-->");
            AnnotationRange($$renderer2, spread_props([annotation]));
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}

export { Spline as $, Axis as A, Bar as B, Chart_container as C, DefaultTooltip as D, degreesToRadians as E, max$2 as F, Grid as G, Highlight as H, createMotion as I, min$2 as J, TooltipList as K, Layer as L, TooltipItem as M, format$1 as N, constant$1 as O, array as P, tau$3 as Q, Rule as R, SeriesState as S, Tooltip as T, findRelatedData as U, Points as V, getRenderContext as W, isScaleBand as X, extractTweenConfig as Y, createKey as Z, registerCanvasComponent as _, accessor as a, curveRadialLinear as a0, lineRadial as a1, curveRadial as a2, withPath as a3, curveLinear as a4, flattenPathData as a5, d3Line as a6, x as a7, y as a8, stackOffsetExpand as b, chartDataArray as c, stackOffsetDiverging as d, stackOffsetNone as e, band as f, setTooltipMetaContext as g, Chart as h, isScaleTime as i, defaultChartPadding as j, asAny as k, linear as l, ChartClipPath as m, ChartAnnotations as n, Labels as o, Legend as p, createLegendProps as q, getChartContext as r, stack as s, time as t, Group as u, layerClass as v, extractLayerProps as w, SelectionState as x, HighlightKey as y, Arc as z };
//# sourceMappingURL=ChartAnnotations-BLeXX766.js.map
