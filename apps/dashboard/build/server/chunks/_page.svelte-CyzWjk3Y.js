import { h as head, n as escape_html, a as store_get, u as unsubscribe_stores, f as ensure_array_like, m as attr_style, e as stringify, c as bind_props, b as spread_props, g as attributes } from './index2-Eg0dVEDW.js';
import { t } from './translations-BxDrjLWK.js';
import { c as currentOrg } from './org-t71AQfHV.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import './index6-DijlZyMe.js';
import { P as Page } from './page-CIWgv5lu.js';
import { U as Underline_tabs, a as Underline_tabs_list, b as Underline_tabs_trigger, c as Underline_tabs_content } from './underline-tabs-trigger-kfAMW9ai.js';
import { B as Button, S as Spinner } from './button-McsHA0hU.js';
import { R as Refresh_cw } from './refresh-cw-DDDmx78S.js';
import { E as Empty } from './empty-BlKxfDG3.js';
import { K as Kpi_card, A as Analytics_panel_card } from './kpi-card-Cgi7nW1-.js';
import { G as Globe } from './globe-DoLv90oB.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { L as Layers } from './layers-Ds5JmJ9s.js';
import { E as Eye } from './eye-YINBztCL.js';
import { U as Users } from './users-CS_ofwgc.js';
import { B as Book_open } from './book-open-gUTgx0US.js';
import { U as User_plus } from './user-plus-D7PLE6lr.js';
import { C as Chart_container, S as SeriesState, c as chartDataArray, s as stack, a as accessor, b as stackOffsetExpand, d as stackOffsetDiverging, e as stackOffsetNone, t as time, l as linear, g as setTooltipMetaContext, h as Chart, j as defaultChartPadding, L as Layer, k as asAny, G as Grid, m as ChartClipPath, R as Rule, A as Axis, p as Legend, D as DefaultTooltip, q as createLegendProps, U as findRelatedData, n as ChartAnnotations, V as Points, H as Highlight, o as Labels, r as getChartContext, W as getRenderContext, X as isScaleBand, Y as extractTweenConfig, J as min$2, F as max$2, I as createMotion, Z as createKey, _ as registerCanvasComponent, $ as Spline, w as extractLayerProps, a0 as curveRadialLinear, a1 as lineRadial, a2 as curveRadial, a3 as withPath, P as array, a4 as curveLinear, O as constant$1, a5 as flattenPathData, a6 as d3Line, a7 as x, a8 as y } from './ChartAnnotations-BLeXX766.js';
import { h as cls, n as d3InterpolatePathExports } from './d3-tile-DavCumcS.js';
import 'd3-sankey';
import { T as Trending_up } from './trending-up-KD5BC5T8.js';
import { c as classroomio } from './index4-CY3O4yvX.js';
import { a as BaseApi } from './base.svelte-Bh2VVy5Z.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './create-id-D7gdjJzW.js';
import './tabs-trigger-BTKUSTH_.js';
import './tabs-content-HVCoSzw-.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './context2-Dq8HS6q_.js';
import './index14-HMlD0kYH.js';
import './empty-content-qPjsGDm9.js';
import './dot-field-B9cQMeU_.js';
import './empty-media-ClSn1CG9.js';
import './card-title-BAC38wyM.js';
import './card-header-CpBV_NsL.js';
import './context-Dq8HS6q_.js';
import './clone-u51BKwOQ.js';
import './spring-CMJ2WkAz.js';
import './shared-server-DaWdgxVh.js';
import 'zod/v4';

function d3Area(x0, y0, y1) {
  var x1 = null, defined = constant$1(true), context = null, curve = curveLinear, output = null, path = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant$1(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant$1(0) : constant$1(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant$1(+y1);
  function area(data) {
    var i, j, k, n = (data = array(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return d3Line().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}
function areaRadial() {
  var a = d3Area().curve(curveRadialLinear), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() {
    return lineRadial(x0());
  }, delete a.lineX0;
  a.lineEndAngle = function() {
    return lineRadial(x1());
  }, delete a.lineX1;
  a.lineInnerRadius = function() {
    return lineRadial(y0());
  }, delete a.lineY0;
  a.lineOuterRadius = function() {
    return lineRadial(y1());
  }, delete a.lineY1;
  a.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };
  return a;
}
function Area($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getChartContext();
    const renderCtx = getRenderContext();
    let {
      clipPath,
      curve,
      data,
      defined,
      fill,
      fillOpacity,
      line = false,
      opacity,
      pathData,
      stroke,
      strokeWidth,
      motion,
      x: x2,
      y0,
      y1,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const xAccessor = x2 ? accessor(x2) : ctx.x;
    const y0Accessor = y0 ? accessor(y0) : (d2) => min$2(ctx.yDomain);
    const y1Accessor = y1 ? accessor(y1) : ctx.y;
    const xOffset = isScaleBand(ctx.xScale) ? ctx.xScale.bandwidth() / 2 : 0;
    const yOffset = isScaleBand(ctx.yScale) ? ctx.yScale.bandwidth() / 2 : 0;
    const extractedTween = extractTweenConfig(motion);
    const tweenOptions = extractedTween ? {
      type: extractedTween.type,
      options: { interpolate: d3InterpolatePathExports.interpolatePath, ...extractedTween.options }
    } : void 0;
    function defaultPathData() {
      if (!tweenOptions) {
        return "";
      } else if (pathData) {
        return flattenPathData(pathData, Math.min(ctx.yScale(0), ctx.yRange[0]));
      } else if (ctx.config.x) {
        const path = ctx.radial ? areaRadial().angle((d2) => ctx.xScale(xAccessor(d2))).innerRadius(() => Math.min(ctx.yScale(0), ctx.yRange[0])).outerRadius(() => Math.min(ctx.yScale(0), ctx.yRange[0])) : d3Area().x((d2) => ctx.xScale(xAccessor(d2)) + xOffset).y0(() => Math.min(ctx.yScale(0), ctx.yRange[0])).y1(() => Math.min(ctx.yScale(0), ctx.yRange[0]));
        path.defined(defined ?? ((d2) => xAccessor(d2) != null && y1Accessor(d2) != null));
        if (curve) path.curve(curve);
        return path(data ?? ctx.data);
      }
    }
    const d = (() => {
      const _path = ctx.radial ? areaRadial().angle((d2) => ctx.xScale(xAccessor(d2))).innerRadius((d2) => ctx.yScale(y0Accessor(d2))).outerRadius((d2) => ctx.yScale(y1Accessor(d2))) : d3Area().x((d2) => {
        const v = xAccessor(d2);
        return ctx.xScale(v) + xOffset;
      }).y0((d2) => {
        let value = max$2(ctx.yRange);
        if (y0) {
          value = ctx.yScale(y0Accessor(d2));
        } else if (Array.isArray(ctx.config.y) && ctx.config.y[0] === 0) {
          value = ctx.yScale(ctx.y(d2)[0]);
        }
        return value + yOffset;
      }).y1((d2) => {
        let value = max$2(ctx.yRange);
        if (y1) {
          value = ctx.yScale(y1Accessor(d2));
        } else if (Array.isArray(ctx.config.y) && ctx.config.y[1] === 1) {
          value = ctx.yScale(ctx.y(d2)[1]);
        } else {
          value = ctx.yScale(ctx.y(d2));
        }
        return value + yOffset;
      });
      _path.defined(defined ?? ((d2) => xAccessor(d2) != null && y1Accessor(d2) != null));
      if (curve) _path.curve(curve);
      return pathData ?? _path(data ?? ctx.data) ?? defaultPathData();
    })();
    const tweenState = createMotion(defaultPathData(), () => d, tweenOptions);
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
    if (line) {
      $$renderer2.push("<!--[-->");
      Spline($$renderer2, spread_props([
        { data, x: x2, y: y1, curve, defined, motion },
        extractLayerProps(line, "area-line")
      ]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (renderCtx === "svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<path${attributes(
        {
          d: tweenState.current,
          "clip-path": clipPath,
          fill,
          "fill-opacity": fillOpacity,
          stroke,
          "stroke-width": strokeWidth,
          opacity,
          ...extractLayerProps(restProps, "area-path")
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
  });
}
function AreaChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data = [],
      x: x2,
      y: y2,
      xDomain,
      radial = false,
      series: seriesProp,
      seriesLayout = "overlap",
      axis = true,
      brush = false,
      grid = true,
      labels = false,
      legend = false,
      points = false,
      tooltip = true,
      highlight = true,
      annotations = [],
      rule = true,
      onTooltipClick = () => {
      },
      onPointClick,
      props = {},
      renderContext = "svg",
      profile = false,
      debug = false,
      xScale: xScaleProp,
      children: childrenProp,
      aboveContext,
      belowContext,
      belowMarks,
      aboveMarks,
      marks,
      context = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const series = seriesProp === void 0 ? [
      {
        key: "default",
        label: typeof y2 === "string" ? y2 : "value",
        value: y2,
        color: "var(--color-primary)"
      }
    ] : seriesProp;
    const seriesState = new SeriesState(() => series);
    const stackSeries = seriesLayout.startsWith("stack");
    const chartData = (() => {
      let _chartData = seriesState.allSeriesData.length ? seriesState.allSeriesData : chartDataArray(data);
      if (stackSeries) {
        const seriesKeys = seriesState.visibleSeries.map((s) => s.key);
        const offset = seriesLayout === "stackExpand" ? stackOffsetExpand : seriesLayout === "stackDiverging" ? stackOffsetDiverging : stackOffsetNone;
        const stackData = stack().keys(seriesKeys).value((d, key) => {
          const s = series.find((d2) => d2.key === key);
          const value = accessor(s.value ?? y2 ?? s.key)(d);
          return value;
        }).offset(offset)(_chartData);
        for (let [seriesIndex, s] of series.entries()) {
          if (s.data) {
            s.data = s.data.map((d, i) => {
              return { ...d, stackData: stackData[seriesIndex][i] };
            });
          }
        }
        _chartData = _chartData.map((d, i) => {
          return { ...d, stackData: stackData.map((sd) => sd[i]) };
        });
      }
      return _chartData;
    })();
    const xScale = xScaleProp ?? (accessor(x2)(chartData[0]) instanceof Date ? time() : linear());
    function isStackData(d) {
      return d && typeof d === "object" && "stackData" in d;
    }
    function getStackData(s, d, i) {
      if (s.data) {
        return d.stackData;
      }
      return d.stackData[i] ?? [];
    }
    function getAreaProps(s, i) {
      const lineProps = {
        ...props.line,
        ...typeof props.area?.line === "object" ? props.area.line : null,
        ...typeof s.props?.line === "object" ? s.props.line : null
      };
      const highlightClass = seriesState.visibleSeries.length > 1 && seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key ? "opacity-10" : "";
      return {
        data: s.data,
        y0: stackSeries ? (d) => getStackData(s, d, i)[0] : Array.isArray(s.value) ? s.value[0] : void 0,
        y1: stackSeries ? (d) => getStackData(s, d, i)[1] : Array.isArray(s.value) ? s.value[1] : s.value ?? (s.data ? void 0 : s.key),
        fill: s.color,
        fillOpacity: 0.3,
        ...props.area,
        ...s.props,
        class: cls(
          "transition-opacity",
          // Checking `visibleSeries.length > 1` fixes re-animated tweened areas on hover
          highlightClass,
          props.area?.class,
          s.props?.class
        ),
        line: {
          stroke: s.color,
          ...lineProps,
          class: cls("transition-opacity", highlightClass, lineProps.class)
        }
      };
    }
    function getPointsProps(s, i) {
      return {
        data: s.data,
        y: stackSeries ? (d) => getStackData(s, d, i)[1] : Array.isArray(s.value) ? s.value[1] : s.value ?? (s.data ? void 0 : s.key),
        fill: s.color,
        ...props.points,
        ...typeof points === "object" ? points : null,
        class: cls("stroke-surface-200 transition-opacity", seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key && "opacity-10", props.points?.class, typeof points === "object" && points.class)
      };
    }
    function getLabelsProps(s, i) {
      return {
        data: s.data,
        y: stackSeries ? (d) => isStackData(d) ? getStackData(s, d, i)[1] : void 0 : Array.isArray(s.value) ? s.value[1] : s.value ?? (s.data ? void 0 : s.key),
        ...props.labels,
        ...typeof labels === "object" ? labels : null,
        class: cls("stroke-surface-200 transition-opacity", seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key && "opacity-10", props.labels?.class, typeof labels === "object" && labels.class)
      };
    }
    const brushProps = { ...typeof brush === "object" ? brush : null, ...props.brush };
    function getHighlightProps(s, i) {
      if (!context) return {};
      const seriesTooltipData = s.data && context.tooltip.data ? findRelatedData(s.data, context.tooltip.data, context.x) : null;
      const highlightPointsProps = typeof props.highlight?.points === "object" ? props.highlight.points : null;
      return {
        data: seriesTooltipData,
        y: stackSeries ? (d) => getStackData(s, d, i)[1] : s.value ?? (s.data ? void 0 : s.key),
        lines: i == 0,
        onPointClick: onPointClick ? (e, detail) => onPointClick(e, { ...detail, series: s }) : void 0,
        onPointEnter: () => seriesState.highlightKey.current = s.key,
        onPointLeave: () => seriesState.highlightKey.current = null,
        ...props.highlight,
        points: props.highlight?.points == false ? false : {
          ...highlightPointsProps,
          fill: s.color,
          class: cls("transition-opacity", seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key && "opacity-10", highlightPointsProps?.class)
        }
      };
    }
    function getLegendProps() {
      return createLegendProps({
        seriesState,
        props: {
          ...props.legend,
          ...typeof legend === "object" ? legend : null
        }
      });
    }
    function getGridProps() {
      return {
        x: radial,
        y: true,
        ...typeof grid === "object" ? grid : null,
        ...props.grid
      };
    }
    if (profile) {
      console.time("AreaChart render");
    }
    setTooltipMetaContext({
      type: "area",
      get stackSeries() {
        return stackSeries;
      },
      get visibleSeries() {
        return seriesState.visibleSeries;
      }
    });
    function resolveAccessor(acc) {
      if (stackSeries) {
        return (d) => isStackData(d) ? seriesState.visibleSeries.flatMap((s, i) => d.stackData[i]) : void 0;
      }
      if (acc) return acc;
      return seriesState.visibleSeries.map((s) => s.value ?? s.key);
    }
    function getAxisProps(axisDirection) {
      if (axisDirection === "y") {
        return {
          placement: radial ? "radius" : "left",
          format: seriesLayout === "stackExpand" ? "percentRound" : void 0,
          ...typeof axis === "object" ? axis : null,
          ...props.yAxis
        };
      }
      return {
        placement: radial ? "angle" : "bottom",
        ...typeof axis === "object" ? axis : null,
        ...props.xAxis
      };
    }
    function getRuleProps() {
      return {
        x: 0,
        y: 0,
        ...typeof rule === "object" ? rule : null,
        ...props.rule
      };
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let children = function($$renderer4, { context: context2 }) {
          const snippetProps = {
            context: context2,
            series,
            visibleSeries: seriesState.visibleSeries,
            getAreaProps,
            getLabelsProps,
            getPointsProps,
            getHighlightProps,
            getLegendProps,
            getGridProps,
            getAxisProps,
            getRuleProps,
            highlightKey: seriesState.highlightKey.current,
            setHighlightKey: seriesState.highlightKey.set
          };
          if (childrenProp) {
            $$renderer4.push("<!--[-->");
            childrenProp($$renderer4, snippetProps);
            $$renderer4.push(`<!---->`);
          } else {
            $$renderer4.push("<!--[!-->");
            belowContext?.($$renderer4, snippetProps);
            $$renderer4.push(`<!----> `);
            Layer($$renderer4, spread_props([
              { type: renderContext },
              asAny(renderContext === "canvas" ? props.canvas : props.svg),
              {
                center: radial,
                debug,
                children: ($$renderer5) => {
                  if (typeof grid === "function") {
                    $$renderer5.push("<!--[-->");
                    grid($$renderer5, snippetProps);
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    if (grid) {
                      $$renderer5.push("<!--[-->");
                      Grid($$renderer5, spread_props([getGridProps()]));
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]-->`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  ChartClipPath($$renderer5, {
                    disabled: !brush,
                    children: ($$renderer6) => {
                      ChartAnnotations($$renderer6, {
                        annotations,
                        layer: "below",
                        highlightKey: seriesState.highlightKey.current,
                        visibleSeries: seriesState.visibleSeries
                      });
                      $$renderer6.push(`<!----> `);
                      belowMarks?.($$renderer6, snippetProps);
                      $$renderer6.push(`<!----> `);
                      if (marks) {
                        $$renderer6.push("<!--[-->");
                        marks($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        $$renderer6.push(`<!--[-->`);
                        const each_array = ensure_array_like(seriesState.visibleSeries);
                        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                          let s = each_array[i];
                          Area($$renderer6, spread_props([getAreaProps(s, i)]));
                        }
                        $$renderer6.push(`<!--]-->`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  aboveMarks?.($$renderer5, snippetProps);
                  $$renderer5.push(`<!----> `);
                  if (typeof axis === "function") {
                    $$renderer5.push("<!--[-->");
                    axis($$renderer5, snippetProps);
                    $$renderer5.push(`<!----> `);
                    if (typeof rule === "function") {
                      $$renderer5.push("<!--[-->");
                      rule($$renderer5, snippetProps);
                      $$renderer5.push(`<!---->`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                      if (rule) {
                        $$renderer5.push("<!--[-->");
                        Rule($$renderer5, spread_props([getRuleProps()]));
                      } else {
                        $$renderer5.push("<!--[!-->");
                      }
                      $$renderer5.push(`<!--]-->`);
                    }
                    $$renderer5.push(`<!--]-->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                    if (axis) {
                      $$renderer5.push("<!--[-->");
                      if (axis !== "x") {
                        $$renderer5.push("<!--[-->");
                        Axis($$renderer5, spread_props([getAxisProps("y")]));
                      } else {
                        $$renderer5.push("<!--[!-->");
                      }
                      $$renderer5.push(`<!--]--> `);
                      if (axis !== "y") {
                        $$renderer5.push("<!--[-->");
                        Axis($$renderer5, spread_props([getAxisProps("x")]));
                      } else {
                        $$renderer5.push("<!--[!-->");
                      }
                      $$renderer5.push(`<!--]--> `);
                      if (typeof rule === "function") {
                        $$renderer5.push("<!--[-->");
                        rule($$renderer5, snippetProps);
                        $$renderer5.push(`<!---->`);
                      } else {
                        $$renderer5.push("<!--[!-->");
                        if (rule) {
                          $$renderer5.push("<!--[-->");
                          Rule($$renderer5, spread_props([getRuleProps()]));
                        } else {
                          $$renderer5.push("<!--[!-->");
                        }
                        $$renderer5.push(`<!--]-->`);
                      }
                      $$renderer5.push(`<!--]-->`);
                    } else {
                      $$renderer5.push("<!--[!-->");
                    }
                    $$renderer5.push(`<!--]-->`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  ChartClipPath($$renderer5, {
                    disabled: !brush,
                    full: true,
                    children: ($$renderer6) => {
                      if (typeof points === "function") {
                        $$renderer6.push("<!--[-->");
                        points($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        if (points) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<!--[-->`);
                          const each_array_1 = ensure_array_like(seriesState.visibleSeries);
                          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                            let s = each_array_1[i];
                            Points($$renderer6, spread_props([getPointsProps(s, i)]));
                          }
                          $$renderer6.push(`<!--]-->`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]-->`);
                      }
                      $$renderer6.push(`<!--]--> `);
                      if (typeof highlight === "function") {
                        $$renderer6.push("<!--[-->");
                        highlight($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        if (highlight) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<!--[-->`);
                          const each_array_2 = ensure_array_like(seriesState.visibleSeries);
                          for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
                            let s = each_array_2[i];
                            Highlight($$renderer6, spread_props([getHighlightProps(s, i)]));
                          }
                          $$renderer6.push(`<!--]-->`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]-->`);
                      }
                      $$renderer6.push(`<!--]--> `);
                      if (typeof labels === "function") {
                        $$renderer6.push("<!--[-->");
                        labels($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        if (labels) {
                          $$renderer6.push("<!--[-->");
                          $$renderer6.push(`<!--[-->`);
                          const each_array_3 = ensure_array_like(seriesState.visibleSeries);
                          for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
                            let s = each_array_3[i];
                            Labels($$renderer6, spread_props([getLabelsProps(s, i)]));
                          }
                          $$renderer6.push(`<!--]-->`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                        }
                        $$renderer6.push(`<!--]-->`);
                      }
                      $$renderer6.push(`<!--]--> `);
                      ChartAnnotations($$renderer6, {
                        annotations,
                        layer: "above",
                        highlightKey: seriesState.highlightKey.current,
                        visibleSeries: seriesState.visibleSeries
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              }
            ]));
            $$renderer4.push(`<!----> `);
            aboveContext?.($$renderer4, snippetProps);
            $$renderer4.push(`<!----> `);
            if (typeof legend === "function") {
              $$renderer4.push("<!--[-->");
              legend($$renderer4, snippetProps);
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (legend) {
                $$renderer4.push("<!--[-->");
                Legend($$renderer4, spread_props([getLegendProps()]));
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]--> `);
            if (typeof tooltip === "function") {
              $$renderer4.push("<!--[-->");
              tooltip($$renderer4, snippetProps);
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (tooltip) {
                $$renderer4.push("<!--[-->");
                DefaultTooltip($$renderer4, {
                  tooltipProps: props.tooltip,
                  seriesState,
                  canHaveTotal: stackSeries
                });
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]-->`);
        };
        Chart($$renderer3, spread_props([
          {
            data: chartData,
            x: x2,
            xDomain,
            xScale,
            y: resolveAccessor(y2),
            yBaseline: 0,
            yNice: true,
            radial,
            padding: radial ? void 0 : defaultChartPadding(axis, legend)
          },
          restProps,
          {
            tooltip: tooltip === false ? false : {
              mode: "quadtree-x",
              onclick: onTooltipClick,
              debug,
              ...props.tooltip?.context,
              ...typeof tooltip === "object" ? tooltip : null
            },
            brush: brush && (brush === true || brush.mode == void 0 || brush.mode === "integrated") ? {
              axis: "x",
              resetOnEnd: true,
              xDomain,
              ...brushProps,
              onBrushEnd: (e) => {
                xDomain = e.xDomain;
                brushProps.onBrushEnd?.(e);
              }
            } : false,
            get context() {
              return context;
            },
            set context($$value) {
              context = $$value;
              $$settled = false;
            },
            children,
            $$slots: { default: true }
          }
        ]));
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { context });
  });
}
function Trending_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M16 17h6v-6" }],
      ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "trending-down" },
      /**
       * @component @name TrendingDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTdoNnYtNiIgLz4KICA8cGF0aCBkPSJtMjIgMTctOC41LTguNS01IDVMMiA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trending-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Range_picker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { value, onChange } = $$props;
    const options = [
      { days: 7, labelKey: "analytics.range.7d" },
      { days: 30, labelKey: "analytics.range.30d" },
      { days: 90, labelKey: "analytics.range.90d" }
    ];
    $$renderer2.push(`<div class="inline-flex gap-1 rounded-md border p-1"><!--[-->`);
    const each_array = ensure_array_like(options);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let opt = each_array[$$index];
      Button($$renderer2, {
        variant: value === opt.days ? "default" : "ghost",
        size: "sm",
        onclick: () => onChange(opt.days),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)(opt.labelKey))}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Refresh_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { loading, onClick } = $$props;
    Button($$renderer2, {
      variant: "outline",
      size: "sm",
      disabled: loading,
      onclick: onClick,
      children: ($$renderer3) => {
        Refresh_cw($$renderer3, { class: loading ? "animate-spin" : "" });
        $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.refresh"))}`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Countries_table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, loading = false } = $$props;
    const maxViews = Math.max(1, ...data.map((row) => row.views));
    const totalViews = data.reduce((sum, row) => sum + row.views, 0);
    {
      let children = function($$renderer3) {
        if (loading && data.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex h-32 items-center justify-center">`);
          Spinner($$renderer3, { class: "ui:text-muted-foreground size-6" });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (data.length === 0) {
            $$renderer3.push("<!--[-->");
            Empty($$renderer3, {
              icon: Globe,
              title: store_get($$store_subs ??= {}, "$t", t)("analytics.countries.empty")
            });
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div class="ui:text-muted-foreground mb-2 flex justify-between text-xs font-medium tracking-wide uppercase"><span>${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.countries.country"))}</span> <span>${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.countries.visitors"))}</span></div> <ul class="ui:divide-border divide-y"><!--[-->`);
            const each_array = ensure_array_like(data.slice(0, 10));
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let row = each_array[$$index];
              $$renderer3.push(`<li class="relative py-2.5"><div class="ui:bg-primary/10 absolute inset-y-1 left-0 rounded-r"${attr_style(`width: ${stringify(row.views / maxViews * 100)}%`)} aria-hidden="true"></div> <div class="relative flex items-center justify-between text-sm"><span class="ui:text-foreground font-medium">${escape_html(row.country)}</span> <div class="flex items-center gap-3"><span class="ui:text-muted-foreground tabular-nums">${escape_html(row.enrollments.toLocaleString())}
                  ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.countries.enrollments_short"))}</span> <span class="ui:text-foreground tabular-nums">${escape_html(row.views.toLocaleString())}</span></div></div></li>`);
            }
            $$renderer3.push(`<!--]--></ul>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      };
      Analytics_panel_card($$renderer2, {
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.countries.heading"),
        description: data.length > 0 ? store_get($$store_subs ??= {}, "$t", t)("analytics.countries.subtitle", { total: totalViews.toLocaleString() }) : void 0,
        children
      });
    }
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Funnel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, loading = false } = $$props;
    const stepLabel = (name) => store_get($$store_subs ??= {}, "$t", t)(`analytics.funnel.step.${name}`);
    const topCount = data?.steps[0]?.count ?? 0;
    {
      let children = function($$renderer3) {
        if (loading && !data) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex h-32 items-center justify-center">`);
          Spinner($$renderer3, { class: "ui:text-muted-foreground size-6" });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (!data || data.steps.length === 0 || topCount === 0) {
            $$renderer3.push("<!--[-->");
            Empty($$renderer3, {
              icon: Trending_down,
              title: store_get($$store_subs ??= {}, "$t", t)("analytics.funnel.empty")
            });
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<ol class="space-y-3"><!--[-->`);
            const each_array = ensure_array_like(data.steps);
            for (let index = 0, $$length = each_array.length; index < $$length; index++) {
              let step = each_array[index];
              $$renderer3.push(`<li><div class="mb-1.5 flex items-baseline justify-between"><div class="flex items-baseline gap-2"><span class="ui:text-muted-foreground text-xs font-medium tabular-nums">${escape_html(String(index + 1).padStart(2, "0"))}</span> <span class="ui:text-foreground text-sm font-medium">${escape_html(stepLabel(step.name))}</span></div> <div class="flex items-baseline gap-2"><span class="ui:text-foreground text-sm tabular-nums">${escape_html(step.count.toLocaleString())}</span> `);
              if (step.conversionFromPrev != null) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<span class="ui:bg-primary/10 ui:text-primary rounded px-1.5 py-0.5 text-xs font-medium tabular-nums">${escape_html(Math.round(step.conversionFromPrev * 100))}%</span>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--></div></div> <div class="ui:bg-muted h-2 overflow-hidden rounded-full"><div class="ui:bg-primary h-full rounded-full transition-all"${attr_style(`width: ${stringify(topCount > 0 ? step.count / topCount * 100 : 0)}%`)}></div></div></li>`);
            }
            $$renderer3.push(`<!--]--></ol>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      };
      Analytics_panel_card($$renderer2, {
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.funnel.heading"),
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.funnel.description"),
        children
      });
    }
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Popular_types($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, loading = false } = $$props;
    const maxEnrollments = Math.max(1, ...data.map((row) => row.enrollments));
    const totalEnrollments = data.reduce((sum, row) => sum + row.enrollments, 0);
    function typeLabel(type) {
      return store_get($$store_subs ??= {}, "$t", t)(`analytics.popularTypes.types.${type}`, { default: type });
    }
    {
      let children = function($$renderer3) {
        if (loading && data.length === 0) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex h-32 items-center justify-center">`);
          Spinner($$renderer3, { class: "ui:text-muted-foreground size-6" });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (data.length === 0) {
            $$renderer3.push("<!--[-->");
            Empty($$renderer3, {
              icon: Layers,
              title: store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.empty")
            });
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<ul class="ui:divide-border divide-y"><!--[-->`);
            const each_array = ensure_array_like(data);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let row = each_array[$$index];
              $$renderer3.push(`<li class="relative py-3"><div class="ui:bg-primary/10 absolute inset-y-1 left-0 rounded-r"${attr_style(`width: ${stringify(row.enrollments / maxEnrollments * 100)}%`)} aria-hidden="true"></div> <div class="relative flex items-center justify-between gap-3"><div class="min-w-0"><p class="ui:text-foreground text-sm font-medium">${escape_html(typeLabel(row.type))}</p> <p class="ui:text-muted-foreground text-xs">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.course_count", { count: row.courseCount }))}</p></div> <div class="text-right"><p class="ui:text-foreground text-sm font-semibold tabular-nums">${escape_html(row.enrollments.toLocaleString())}</p> <p class="ui:text-muted-foreground text-xs tabular-nums">${escape_html(row.views.toLocaleString())}
                  ${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.views_short"))}</p></div></div></li>`);
            }
            $$renderer3.push(`<!--]--></ul>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      };
      Analytics_panel_card($$renderer2, {
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.heading"),
        description: data.length > 0 ? store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.subtitle", { total: totalEnrollments.toLocaleString() }) : store_get($$store_subs ??= {}, "$t", t)("analytics.popularTypes.description"),
        children
      });
    }
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Landing_kpis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, loading = false } = $$props;
    const totals = data?.totals ?? {
      landingViews: 0,
      coursePageViews: 0,
      uniqueVisitors: 0,
      enrollments: 0
    };
    const viewSpark = data?.sparkline.map((row) => row.views) ?? [];
    const enrollSpark = data?.sparkline.map((row) => row.enrollments) ?? [];
    $$renderer2.push(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">`);
    Kpi_card($$renderer2, {
      title: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.landing_views"),
      value: totals.landingViews.toLocaleString(),
      description: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.range_description"),
      loading: loading && !data,
      icon: Eye,
      accent: "primary",
      sparkline: viewSpark
    });
    $$renderer2.push(`<!----> `);
    Kpi_card($$renderer2, {
      title: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.unique_visitors"),
      value: totals.uniqueVisitors.toLocaleString(),
      description: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.range_description"),
      loading: loading && !data,
      icon: Users,
      accent: "success"
    });
    $$renderer2.push(`<!----> `);
    Kpi_card($$renderer2, {
      title: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.course_page_views"),
      value: totals.coursePageViews.toLocaleString(),
      description: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.range_description"),
      loading: loading && !data,
      icon: Book_open,
      accent: "warning"
    });
    $$renderer2.push(`<!----> `);
    Kpi_card($$renderer2, {
      title: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.enrollments"),
      value: totals.enrollments.toLocaleString(),
      description: store_get($$store_subs ??= {}, "$t", t)("analytics.kpi.range_description"),
      loading: loading && !data,
      icon: User_plus,
      accent: "primary",
      sparkline: enrollSpark
    });
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Trend_chart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, loading = false } = $$props;
    const chartConfig = {
      views: {
        label: store_get($$store_subs ??= {}, "$t", t)("analytics.trend.views"),
        color: "var(--primary)"
      },
      enrollments: {
        label: store_get($$store_subs ??= {}, "$t", t)("analytics.trend.enrollments"),
        color: "var(--chart-2, var(--primary))"
      }
    };
    const series = [
      {
        key: "views",
        value: "views",
        label: "Views",
        color: "var(--color-views)"
      },
      {
        key: "enrollments",
        value: "enrollments",
        label: "Enrollments",
        color: "var(--color-enrollments)"
      }
    ];
    const hasData = (data?.sparkline.length ?? 0) > 0 && data?.sparkline.some((r) => r.views > 0 || r.enrollments > 0);
    {
      let children = function($$renderer3) {
        if (loading && !data) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex h-[280px] items-center justify-center">`);
          Spinner($$renderer3, { class: "ui:text-muted-foreground size-6" });
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (hasData && data) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<!---->`);
            Chart_container($$renderer3, {
              class: "h-[280px] w-full",
              config: chartConfig,
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->`);
                AreaChart($$renderer4, { data: data.sparkline, x: "date", axis: "x", series });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
            Empty($$renderer3, {
              icon: Trending_up,
              title: store_get($$store_subs ??= {}, "$t", t)("analytics.trend.empty"),
              class: "h-[280px]"
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      };
      Analytics_panel_card($$renderer2, {
        title: store_get($$store_subs ??= {}, "$t", t)("analytics.trend.heading"),
        description: store_get($$store_subs ??= {}, "$t", t)("analytics.trend.description"),
        children
      });
    }
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
class AnalyticsApi extends BaseApi {
  landing = null;
  country = [];
  funnel = null;
  popularTypes = [];
  loadingLanding = false;
  loadingCountry = false;
  loadingFunnel = false;
  loadingPopularTypes = false;
  range = 30;
  lastFetchedOrgId = null;
  lastFetchedRange = null;
  get loading() {
    return this.loadingLanding || this.loadingCountry || this.loadingFunnel || this.loadingPopularTypes;
  }
  query(orgId, bust) {
    return { orgId, days: String(this.range), ...bust && { bust: "1" } };
  }
  async fetchLanding(orgId, bust = false) {
    this.loadingLanding = true;
    await this.execute({
      requestFn: () => classroomio.dash["landing-stats"].$get({ query: this.query(orgId, bust) }),
      logContext: "fetching analytics landing stats",
      onSuccess: (response) => {
        this.landing = response.data;
      }
    });
    this.loadingLanding = false;
  }
  async fetchCountry(orgId, bust = false) {
    this.loadingCountry = true;
    await this.execute({
      requestFn: () => classroomio.dash["country-breakdown"].$get({ query: this.query(orgId, bust) }),
      logContext: "fetching analytics country breakdown",
      onSuccess: (response) => {
        this.country = response.data;
      }
    });
    this.loadingCountry = false;
  }
  async fetchFunnel(orgId, bust = false) {
    this.loadingFunnel = true;
    await this.execute({
      requestFn: () => classroomio.dash["course-funnel"].$get({ query: this.query(orgId, bust) }),
      logContext: "fetching analytics course funnel",
      onSuccess: (response) => {
        this.funnel = response.data;
      }
    });
    this.loadingFunnel = false;
  }
  async fetchPopularTypes(orgId, bust = false) {
    this.loadingPopularTypes = true;
    await this.execute({
      requestFn: () => classroomio.dash["popular-types"].$get({ query: this.query(orgId, bust) }),
      logContext: "fetching analytics popular types",
      onSuccess: (response) => {
        this.popularTypes = response.data;
      }
    });
    this.loadingPopularTypes = false;
  }
  /** Fire all four in parallel; each card shows its own spinner. */
  fetchAll(orgId, bust = false) {
    if (!orgId) return Promise.resolve();
    this.lastFetchedOrgId = orgId;
    this.lastFetchedRange = this.range;
    return Promise.all([
      this.fetchLanding(orgId, bust),
      this.fetchCountry(orgId, bust),
      this.fetchFunnel(orgId, bust),
      this.fetchPopularTypes(orgId, bust)
    ]);
  }
  /**
   * Fetch only if data for this (orgId, range) wasn't fetched in this session.
   * Singleton state means navigating away and back reuses prior data.
   */
  ensureFetched(orgId) {
    if (this.lastFetchedOrgId === orgId && this.lastFetchedRange === this.range) return;
    this.fetchAll(orgId);
  }
  setRange(days, orgId) {
    this.range = days;
    return this.fetchAll(orgId);
  }
  refresh(orgId) {
    return this.fetchAll(orgId, true);
  }
}
const analyticsApi = new AnalyticsApi();
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function handleRangeChange(days) {
      const orgId = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id;
      if (!orgId) return;
      analyticsApi.setRange(days, orgId);
    }
    function handleRefresh() {
      const orgId = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).id;
      if (!orgId) return;
      analyticsApi.refresh(orgId);
    }
    head("o985kf", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.title"))} - ClassroomIO</title>`);
      });
    });
    Page($$renderer2, {
      class: "w-full",
      children: ($$renderer3) => {
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <p class="ui:text-muted-foreground text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.subtitle"))}</p>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Page_action($$renderer4, {
              children: ($$renderer5) => {
                Range_picker($$renderer5, { value: analyticsApi.range, onChange: handleRangeChange });
                $$renderer5.push(`<!----> `);
                Refresh_button($$renderer5, { loading: analyticsApi.loading, onClick: handleRefresh });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        {
          let child = function($$renderer4) {
            $$renderer4.push(`<div class="space-y-6">`);
            Landing_kpis($$renderer4, {
              data: analyticsApi.landing,
              loading: analyticsApi.loadingLanding
            });
            $$renderer4.push(`<!----> `);
            Underline_tabs($$renderer4, {
              value: "overview",
              children: ($$renderer5) => {
                Underline_tabs_list($$renderer5, {
                  class: "mb-6",
                  children: ($$renderer6) => {
                    Underline_tabs_trigger($$renderer6, {
                      value: "overview",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.tabs.overview"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Underline_tabs_trigger($$renderer6, {
                      value: "funnel",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.tabs.funnel"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Underline_tabs_trigger($$renderer6, {
                      value: "geography",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.tabs.geography"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Underline_tabs_trigger($$renderer6, {
                      value: "course_types",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("analytics.tabs.course_types"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Underline_tabs_content($$renderer5, {
                  value: "overview",
                  class: "space-y-4",
                  children: ($$renderer6) => {
                    Trend_chart($$renderer6, {
                      data: analyticsApi.landing,
                      loading: analyticsApi.loadingLanding
                    });
                    $$renderer6.push(`<!----> <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">`);
                    Funnel($$renderer6, {
                      data: analyticsApi.funnel,
                      loading: analyticsApi.loadingFunnel
                    });
                    $$renderer6.push(`<!----> `);
                    Popular_types($$renderer6, {
                      data: analyticsApi.popularTypes,
                      loading: analyticsApi.loadingPopularTypes
                    });
                    $$renderer6.push(`<!----></div> `);
                    Countries_table($$renderer6, {
                      data: analyticsApi.country,
                      loading: analyticsApi.loadingCountry
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Underline_tabs_content($$renderer5, {
                  value: "funnel",
                  children: ($$renderer6) => {
                    Funnel($$renderer6, {
                      data: analyticsApi.funnel,
                      loading: analyticsApi.loadingFunnel
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Underline_tabs_content($$renderer5, {
                  value: "geography",
                  children: ($$renderer6) => {
                    Countries_table($$renderer6, {
                      data: analyticsApi.country,
                      loading: analyticsApi.loadingCountry
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Underline_tabs_content($$renderer5, {
                  value: "course_types",
                  children: ($$renderer6) => {
                    Popular_types($$renderer6, {
                      data: analyticsApi.popularTypes,
                      loading: analyticsApi.loadingPopularTypes
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CyzWjk3Y.js.map
