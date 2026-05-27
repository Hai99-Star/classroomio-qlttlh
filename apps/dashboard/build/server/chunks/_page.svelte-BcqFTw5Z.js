import { a as store_get, h as head, l as attr_class, j as clsx, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { r as resolve } from './server3-VLoL706W.js';
import { p as page } from './index5-nlVlCL1t.js';
import { b as basePath } from './app-CdpE9djd.js';
import { t } from './translations-BxDrjLWK.js';
import { u as user } from './user-Ahqcoe6u.js';
import './index6-DijlZyMe.js';
import './states.svelte-BI9DWQmF.js';
import './button-McsHA0hU.js';
import './input-group-button-BAHNvNdh.js';
import './org-t71AQfHV.js';
import './badge-DTmoBcZS.js';
import './empty-media-ClSn1CG9.js';
import './setup-progress.svelte-DpnO-FI3.js';
import './client-7aKHdcPD.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import './question-type-capabilities-B1VkdJbc.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { C as Course_landing_page } from './course-landing-page-DBzpdmD4.js';
import 'canvas-confetti';
import './field-BxJz8KV9.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import './index4-CY3O4yvX.js';
import './exports-DiyTWREe.js';
import './client2-CqohmrW2.js';
import { P as Powered_by } from './powered-by-BxMkJciK.js';
import './submission-CIIjGYOS.js';
import './constants-C43vhkR3.js';
import 'posthog-js';
import './domains-D9J1UytB.js';
import './item-CUOTGwjL.js';
import './toggle-group-item-BLEzxLjD.js';
import { n as normalizeLandingPageSettings } from './landing-page-1a54p-PE.js';
import { L as Landing_page_footer } from './landing-page-footer-C4QvJE2h.js';
import { h as html } from './html-FW6Ia4bL.js';
import './utils2-DPSDgWhA.js';
import './routing-Cz2vwfLK.js';
import './event-ByDKS2H7.js';
import './client3-CP3T_KrU.js';
import './index-AIbsv2Pd.js';
import '@sveltekit-i18n/parser-icu';
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
import 'lodash/merge.js';
import './base.svelte-Bh2VVy5Z.js';
import 'zod/v4';
import './index15-B_EOCZVP.js';
import './shared-server-DaWdgxVh.js';
import '@better-auth/sso/client';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './d3-tile-DavCumcS.js';
import 'marked';
import './video-A1V3FGdB.js';
import './minus-C_S1F5ho.js';
import 'lodash/get.js';
import 'pluralize';
import './safe-html-content-B3tL84oN.js';
import './blurfade-BtQcpqGq.js';
import './functions-Dfftm0vV.js';
import './upload-widget-E92TgxOV.js';
import './underline-tabs-trigger-kfAMW9ai.js';
import './tabs-trigger-BTKUSTH_.js';
import './tabs-content-HVCoSzw-.js';
import './context2-Dq8HS6q_.js';
import './store-D_AYzDdq.js';
import './index7-D3vVTB5p.js';
import './dialog-BqIvyJui.js';
import './x2-B8ExpX8J.js';
import './upload-CawE_9WB.js';
import './index17-Cgq4UFe3.js';
import './input-field-w4kZespe.js';
import './field-description-yPSV800w.js';
import './field-label-BEb0I1_z.js';
import './label-CXfFBnqp.js';
import './input-CkarY5WD.js';
import './dialog-header-D1aNdwc5.js';
import './dialog-title-DHgMN8vm.js';
import './course.svelte-DAbi1vVF.js';
import './compliance-utils-UIprJIyn.js';
import './index16-Bj79zRdC.js';
import './license.svelte-Cw7yPjRa.js';
import './courses.svelte-DU_-r3zk.js';
import './chip-BZT61Rcy.js';
import './image2-BA-KJrg7.js';
import './skeleton-EXMKyyjB.js';
import './html-render-BjdW32kI.js';
import './Icon-BfkBTjtA.js';
import './avatar-fallback-CG2pdu70.js';
import './course2-CiL0obJ7.js';
import 'lodash/isNumber.js';
import './chevron-down-Nb-i_SUX.js';
import './users-CS_ofwgc.js';
import './book-open-gUTgx0US.js';
import './clock-CYOMG4Z1.js';
import './user2-BbQOYQ0A.js';
import './powered-by2-Bm-L25bi.js';
import 'd3-sankey';
import './arrow-up-right-DrMYhHzL.js';
import 'zod';
import './video-recording-settings-DX6acopI.js';
import './rocket-Dn-EQ87F.js';
import './circle-question-mark-DkJv7M1I.js';
import './arrow-right-BFYbcsyD.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const landingSettings = normalizeLandingPageSettings(data.org?.landingpage);
    store_get($$store_subs ??= {}, "$user", user).isLoggedIn ? {
      label: t.get(store_get($$store_subs ??= {}, "$basePath", basePath) === "/lms" || store_get($$store_subs ??= {}, "$basePath", basePath) === "#" ? "navigation.goto_lms" : "navigation.goto_dashboard"),
      href: resolve(
        store_get($$store_subs ??= {}, "$basePath", basePath) !== "#" ? store_get($$store_subs ??= {}, "$basePath", basePath) : "/lms",
        {}
      )
    } : { label: t.get("navigation.login") };
    const shellClass = landingSettings.theme === "classic" ? "ui:min-h-screen ui:bg-muted/10 ui:text-foreground ui:font-sans" : "ui:min-h-screen ui:bg-background ui:text-foreground ui:font-sans";
    (() => {
      if (!data.course) {
        return landingSettings.hero;
      }
      const enrollmentsOpen = data.course.metadata?.allowNewStudent === true;
      return {
        ...landingSettings.hero,
        heading: data.course.title,
        subheading: data.course.description || landingSettings.hero.subheading,
        primaryAction: {
          label: t.get("course.navItem.landing_page.start_course"),
          href: resolve(`/course/${data.course.slug}/enroll`, {}),
          disabled: !enrollmentsOpen
        },
        image: data.course.logo || landingSettings.hero.image
      };
    })();
    const orgName = data.org?.name ?? data.course?.org?.name ?? "ClassroomIO";
    const logoUrl = data.org?.avatarUrl ?? void 0;
    const courseJsonLd = (() => {
      if (!data.course) return null;
      const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: data.course.title,
        description: data.course.description || "",
        provider: { "@type": "Organization", name: orgName },
        url: page.url.href,
        ...data.course.logo ? { image: data.course.logo } : {}
      };
      return JSON.stringify(schema).replace(/</g, "\\u003c");
    })();
    head("1xq5522", $$renderer2, ($$renderer3) => {
      if (courseJsonLd) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`${html(`<script type="application/ld+json">${courseJsonLd}<\/script>`)}`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    if (data.course) {
      $$renderer2.push("<!--[-->");
      Powered_by($$renderer2, {});
      $$renderer2.push(`<!----> <main${attr_class(clsx(shellClass))}>`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      Course_landing_page($$renderer2, { courseData: data.course });
      $$renderer2.push(`<!----> `);
      Landing_page_footer($$renderer2, {
        orgName,
        logoUrl,
        footer: landingSettings.footer,
        variant: landingSettings.theme
      });
      $$renderer2.push(`<!----></main>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BcqFTw5Z.js.map
