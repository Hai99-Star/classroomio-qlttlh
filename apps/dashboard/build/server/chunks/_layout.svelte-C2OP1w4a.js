import { c as bind_props, n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { g as goto, i as invalidateAll } from './client2-CqohmrW2.js';
import { r as resolve } from './server3-VLoL706W.js';
import { p as page } from './index5-nlVlCL1t.js';
import { I as Icon_button } from './icon-button-Bm-ZFVBt.js';
import { B as Button } from './button-McsHA0hU.js';
import './index6-DijlZyMe.js';
import './states.svelte-BI9DWQmF.js';
import './input-group-button-BAHNvNdh.js';
import { t } from './translations-BxDrjLWK.js';
import './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import { p as profile } from './user-Ahqcoe6u.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import 'lodash/get.js';
import 'pluralize';
import './landing-page-1a54p-PE.js';
import './app-CdpE9djd.js';
import './index4-CY3O4yvX.js';
import './submission-CIIjGYOS.js';
import { c as courseApi } from './course.svelte-DAbi1vVF.js';
import './domains-D9J1UytB.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './toggle-group-item-BLEzxLjD.js';
import './item-CUOTGwjL.js';
import './d3-tile-DavCumcS.js';
import 'd3-sankey';
import './field-BxJz8KV9.js';
import 'lodash/isNumber.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import 'canvas-confetti';
import { R as Refresh_page_data } from './refresh-page-data-CR3mGW3p.js';
import { R as Role_based_security } from './role-based-security-BXxjjwxG.js';
import { P as Page_action } from './page-action-BgcJlH2w.js';
import { P as Page_header, a as Page_header_content, b as Page_title, c as Page_body } from './page-title-CsoF4Ebl.js';
import { P as Page } from './page-CIWgv5lu.js';
import { A as Arrow_left } from './arrow-left-Cb-a-0D0.js';
import './utils2-DPSDgWhA.js';
import './exports-DiyTWREe.js';
import './index-AIbsv2Pd.js';
import './event-ByDKS2H7.js';
import './routing-Cz2vwfLK.js';
import './client3-CP3T_KrU.js';
import './index13-ubjsmMp7.js';
import './create-id-D7gdjJzW.js';
import './scroll-lock-CqTUXsNd.js';
import './index-server-CicpYXzh.js';
import './events-BzIOqpZK.js';
import './dom-context.svelte-BWqx6Zqn.js';
import './popper-layer-force-mount-H2EBI_WO.js';
import './safe-polygon.svelte-D5_q4acK.js';
import './index14-HMlD0kYH.js';
import './hoverable-item-DbC0eVyl.js';
import './dialog-content-7tRy2FJ1.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './compliance-utils-UIprJIyn.js';
import './index16-Bj79zRdC.js';
import './license.svelte-Cw7yPjRa.js';
import './store-D_AYzDdq.js';
import './courses.svelte-DU_-r3zk.js';
import './refresh-ccw-CI5btw-m.js';
import './Icon-BfkBTjtA.js';

function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data = void 0, children } = $$props;
    let backUrl = page.url.searchParams.get("back");
    const handleClick = () => {
      goto(resolve(`${page.url.pathname}?add=true`, {}));
    };
    const handleBackNavigation = () => {
      if (backUrl) {
        goto(resolve(backUrl, {}));
      } else {
        goto(resolve(`/courses/${data.courseId}/people`, {}));
      }
    };
    async function refreshPeoplePage() {
      await Promise.all([
        courseApi.refreshCourse(data.courseId, store_get($$store_subs ??= {}, "$profile", profile).id),
        invalidateAll()
      ]);
    }
    $$renderer2.push(`<!---->`);
    Page($$renderer2, {
      class: "mx-auto w-[90%] md:max-w-3xl",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Page_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Page_header_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Page_title($$renderer5, {
                  children: ($$renderer6) => {
                    if (data.personId) {
                      $$renderer6.push("<!--[-->");
                      Role_based_security($$renderer6, {
                        allowedRoles: [1, 2],
                        children: ($$renderer7) => {
                          Icon_button($$renderer7, {
                            onclick: handleBackNavigation,
                            children: ($$renderer8) => {
                              Arrow_left($$renderer8, { size: 16 });
                            },
                            $$slots: { default: true }
                          });
                        }
                      });
                    } else {
                      $$renderer6.push("<!--[!-->");
                    }
                    $$renderer6.push(`<!--]--> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.title"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Page_action($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex items-center gap-2">`);
                if (!data.personId) {
                  $$renderer5.push("<!--[-->");
                  Role_based_security($$renderer5, {
                    allowedRoles: [1, 2],
                    children: ($$renderer6) => {
                      Button($$renderer6, {
                        onclick: handleClick,
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.people.add"))}`);
                        },
                        $$slots: { default: true }
                      });
                    }
                  });
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--> `);
                Refresh_page_data($$renderer5, { onRefresh: refreshPeoplePage });
                $$renderer5.push(`<!----></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        {
          let child = function($$renderer4) {
            children?.($$renderer4);
            $$renderer4.push(`<!---->`);
          };
          Page_body($$renderer3, { child, $$slots: { child: true } });
        }
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-C2OP1w4a.js.map
