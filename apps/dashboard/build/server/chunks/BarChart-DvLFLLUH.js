import { c as bind_props, b as spread_props, f as ensure_array_like } from './index2-Eg0dVEDW.js';
import { h as cls } from './d3-tile-DavCumcS.js';
import { S as SeriesState, c as chartDataArray, s as stack, a as accessor, b as stackOffsetExpand, d as stackOffsetDiverging, e as stackOffsetNone, f as band, t as time, l as linear, i as isScaleTime, g as setTooltipMetaContext, h as Chart, j as defaultChartPadding, L as Layer, k as asAny, G as Grid, m as ChartClipPath, n as ChartAnnotations, R as Rule, A as Axis, H as Highlight, o as Labels, p as Legend, D as DefaultTooltip, q as createLegendProps, r as getChartContext, u as Group, v as layerClass, B as Bar, w as extractLayerProps } from './ChartAnnotations-BLeXX766.js';

function Bars($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      fill,
      key = (_, i) => i,
      data: dataProp,
      onBarClick = () => {
      },
      children,
      radius = 0,
      strokeWidth = 0,
      stroke = "black",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const ctx = getChartContext();
    const data = chartDataArray(dataProp ?? ctx.data);
    Group($$renderer2, {
      class: layerClass("bars"),
      children: ($$renderer3) => {
        if (children) {
          $$renderer3.push("<!--[-->");
          children($$renderer3);
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(data);
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            let d = each_array[i];
            Bar($$renderer3, spread_props([
              {
                data: d,
                radius,
                strokeWidth,
                stroke,
                fill: fill ?? (ctx.config.c ? ctx.cGet(d) : null),
                onclick: (e) => onBarClick(e, { data: d })
              },
              extractLayerProps(restProps, "bars-bar")
            ]));
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}
function BarChart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      data = [],
      x: xProp,
      y: yProp,
      xDomain,
      radial = false,
      orientation = "vertical",
      series: seriesProp,
      seriesLayout = "overlap",
      axis = true,
      brush = false,
      grid = true,
      labels = false,
      legend = false,
      points = false,
      rule = true,
      onTooltipClick = () => {
      },
      onBarClick = () => {
      },
      props = {},
      renderContext = "svg",
      profile = false,
      debug = false,
      xScale: xScaleProp,
      yScale: yScaleProp,
      bandPadding = radial ? 0 : 0.4,
      groupPadding = 0,
      stackPadding = 0,
      tooltip = true,
      children: childrenProp,
      aboveContext,
      belowContext,
      belowMarks,
      aboveMarks,
      marks,
      highlight = true,
      annotations = [],
      context = void 0,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const series = seriesProp === void 0 ? [
      {
        key: "default",
        label: orientation === "vertical" ? typeof yProp === "string" ? yProp : "value" : typeof xProp === "string" ? xProp : "value",
        value: orientation === "vertical" ? yProp : xProp
      }
    ] : seriesProp;
    const seriesState = new SeriesState(() => series);
    const isVertical = orientation === "vertical";
    const isStackSeries = seriesLayout.startsWith("stack");
    const isGroupSeries = seriesLayout === "group";
    const chartData = (() => {
      let _chartData = seriesState.allSeriesData.length ? seriesState.allSeriesData : chartDataArray(data);
      if (isStackSeries) {
        const seriesKeys = seriesState.visibleSeries.map((s) => s.key);
        const offset = seriesLayout === "stackExpand" ? stackOffsetExpand : seriesLayout === "stackDiverging" ? stackOffsetDiverging : stackOffsetNone;
        const stackData = stack().keys(seriesKeys).value((d, key) => {
          const s = series.find((d2) => d2.key === key);
          return accessor(s.value ?? s.key)(d);
        }).offset(offset)(chartDataArray(data));
        _chartData = _chartData.map((d, i) => {
          return { ...d, stackData: stackData.map((sd) => sd[i]) };
        });
      }
      return _chartData;
    })();
    const xScale = xScaleProp ?? (isVertical ? band().padding(bandPadding) : accessor(xProp)(chartData[0]) instanceof Date ? (
      // TODO: also check for Array<Date> instances (ex. x={['start', 'end']})
      time()
    ) : linear());
    const xBaseline = isVertical || isScaleTime(xScale) ? void 0 : 0;
    const yScale = yScaleProp ?? (isVertical ? accessor(yProp)(chartData[0]) instanceof Date ? (
      // TODO: also check for Array<Date> instances (ex. y={['start', 'end']})
      time()
    ) : linear() : band().padding(bandPadding));
    const yBaseline = isVertical || isScaleTime(yScale) ? 0 : void 0;
    const x1Scale = isGroupSeries && isVertical ? band().padding(groupPadding) : void 0;
    const x1Domain = isGroupSeries && isVertical ? seriesState.visibleSeries.map((s) => s.key) : void 0;
    const x1Range = isGroupSeries && isVertical ? (
      // TODO: can we do something better here where we don't need to cast this
      // feels fragile!
      ({ xScale: xScale2 }) => [0, xScale2.bandwidth()]
    ) : void 0;
    const y1Scale = isGroupSeries && !isVertical ? band().padding(groupPadding) : void 0;
    const y1Domain = isGroupSeries && !isVertical ? seriesState.visibleSeries.map((s) => s.key) : void 0;
    const y1Range = isGroupSeries && !isVertical ? (
      // TODO: can we do something better here where we don't need to cast this
      // feels fragile!
      ({ yScale: yScale2 }) => [0, yScale2.bandwidth()]
    ) : void 0;
    function isStackData(d) {
      return d && typeof d === "object" && "stackData" in d;
    }
    function getBarsProps(s, i) {
      const isFirst = i == 0;
      const isLast = i == seriesState.visibleSeries.length - 1;
      const isStackLayout = seriesLayout.startsWith("stack");
      let stackInsets = void 0;
      if (isStackLayout) {
        const stackInset = stackPadding / 2;
        if (isVertical) {
          stackInsets = {
            bottom: isFirst ? void 0 : stackInset,
            top: isLast ? void 0 : stackInset
          };
        } else {
          stackInsets = {
            left: isFirst ? void 0 : stackInset,
            right: isLast ? void 0 : stackInset
          };
        }
      }
      const valueAccessor = isStackSeries ? (d) => d.stackData[i] : s.value ?? (s.data ? void 0 : s.key);
      return {
        data: s.data,
        x: !isVertical ? valueAccessor : void 0,
        y: isVertical ? valueAccessor : void 0,
        x1: isVertical && isGroupSeries ? (d) => s.value ?? s.key : void 0,
        y1: !isVertical && isGroupSeries ? (d) => s.value ?? s.key : void 0,
        rounded: isStackLayout && i !== seriesState.visibleSeries.length - 1 ? "none" : Array.isArray(xProp) || Array.isArray(yProp) ? "all" : "edge",
        radius: 4,
        strokeWidth: 1,
        insets: stackInsets,
        fill: s.color,
        onBarClick: (e, detail) => onBarClick(e, { ...detail, series: s }),
        ...props.bars,
        ...s.props,
        class: cls("transition-opacity", seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key && "opacity-10", props.bars?.class, s.props?.class)
      };
    }
    function getLabelsProps(s, i) {
      return {
        // TODO: Improve placement when using `seriesLayout="group"`
        // data: s.data,
        // y: s.value ?? (s.data ? undefined : s.key),
        ...props.labels,
        ...typeof labels === "object" ? labels : null,
        class: cls("stroke-surface-200 transition-opacity", seriesState.highlightKey.current && seriesState.highlightKey.current !== s.key && "opacity-10", props.labels?.class, typeof labels === "object" && labels.class)
      };
    }
    const brushProps = { ...typeof brush === "object" ? brush : null, ...props.brush };
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
        x: !isVertical || radial,
        y: isVertical || radial,
        ...typeof grid === "object" ? grid : null,
        ...props.grid
      };
    }
    function getHighlightProps() {
      return { area: true, ...props.highlight };
    }
    function getAxisProps(axisDirection) {
      if (axisDirection === "y") {
        return {
          placement: radial ? "radius" : "left",
          format: isVertical && seriesLayout === "stackExpand" ? "percentRound" : void 0,
          ...typeof axis === "object" ? axis : null,
          ...props.yAxis
        };
      }
      return {
        placement: radial ? "angle" : "bottom",
        format: !isVertical && seriesLayout === "stackExpand" ? "percentRound" : void 0,
        ...typeof axis === "object" ? axis : null,
        ...props.xAxis
      };
    }
    function getRuleProps() {
      return {
        x: isVertical ? false : 0,
        y: isVertical ? 0 : false,
        ...typeof rule === "object" ? rule : null,
        ...props.rule
      };
    }
    if (profile) {
      console.time("BarChart render");
    }
    setTooltipMetaContext({
      type: "bar",
      get orientation() {
        return orientation;
      },
      get stackSeries() {
        return isStackSeries;
      },
      get visibleSeries() {
        return seriesState.visibleSeries;
      }
    });
    function resolveAccessor(acc) {
      if (acc) return acc;
      if (isStackSeries) {
        return (d) => isStackData(d) ? seriesState.visibleSeries.flatMap((s, i) => d.stackData[i]) : void 0;
      }
      return seriesState.visibleSeries.map((s) => s.value ?? s.key);
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
            getBarsProps,
            getLabelsProps,
            getLegendProps,
            getGridProps,
            getHighlightProps,
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
                      if (typeof marks === "function") {
                        $$renderer6.push("<!--[-->");
                        marks($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        $$renderer6.push(`<!--[-->`);
                        const each_array = ensure_array_like(seriesState.visibleSeries);
                        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                          let s = each_array[i];
                          Bars($$renderer6, spread_props([getBarsProps(s, i)]));
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
                      if (typeof highlight === "function") {
                        $$renderer6.push("<!--[-->");
                        highlight($$renderer6, snippetProps);
                        $$renderer6.push(`<!---->`);
                      } else {
                        $$renderer6.push("<!--[!-->");
                        if (highlight) {
                          $$renderer6.push("<!--[-->");
                          Highlight($$renderer6, spread_props([getHighlightProps()]));
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
                          const each_array_1 = ensure_array_like(seriesState.visibleSeries);
                          for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                            let s = each_array_1[i];
                            Labels($$renderer6, spread_props([getLabelsProps(s)]));
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
                  canHaveTotal: isStackSeries || isGroupSeries,
                  seriesState
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
            x: resolveAccessor(xProp),
            xDomain,
            xScale,
            xBaseline,
            xNice: orientation === "horizontal",
            x1Scale,
            x1Domain,
            x1Range,
            y: resolveAccessor(yProp),
            yScale,
            yBaseline,
            yNice: orientation === "vertical",
            y1Scale,
            y1Domain,
            y1Range,
            c: isVertical ? yProp : xProp,
            cRange: ["var(--color-primary)"],
            radial,
            padding: radial ? void 0 : defaultChartPadding(axis, legend)
          },
          restProps,
          {
            tooltip: tooltip === false ? false : {
              mode: "band",
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

export { BarChart as B };
//# sourceMappingURL=BarChart-DvLFLLUH.js.map
