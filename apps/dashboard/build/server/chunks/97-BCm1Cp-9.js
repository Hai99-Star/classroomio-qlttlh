import { c as classroomio } from './index4-CY3O4yvX.js';
import { s as safeServerApi, g as getApiKeyHeaders } from './server2-CNt0sGTj.js';
import { e as error } from './index-D2olbCwr.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';

const load = async ({ params = { slug: "", itemSlug: "" }, url, parent }) => {
  const { tree } = await parent();
  const itemResult = await safeServerApi(
    () => classroomio["org-site"].course[":courseSlug"].item[":itemSlug"].$get(
      { param: { courseSlug: params.slug, itemSlug: params.itemSlug } },
      getApiKeyHeaders()
    )
  );
  if (!itemResult.ok) {
    throw error(404, "Public course or lesson not found");
  }
  const item = itemResult.body.data;
  const itemTitle = "title" in item ? item.title : tree.course.title;
  const itemSummary = item.kind === "lesson" && typeof item.body === "string" ? item.body.replace(/<[^>]+>/g, "").slice(0, 155) : tree.course.description ?? "";
  const canonicalUrl = new URL(url.pathname, url.origin).href;
  const fullTitle = `${itemTitle} · ${tree.course.title}`;
  const description = itemSummary || tree.course.description || "";
  const ogImage = tree.course.bannerImage || null;
  const pageMetaTags = Object.freeze({
    title: fullTitle,
    description,
    canonical: canonicalUrl,
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: itemTitle,
      description,
      images: ogImage ? [
        {
          url: ogImage,
          alt: tree.course.title,
          width: 1200,
          height: 630,
          secureUrl: ogImage,
          type: "image/jpeg"
        }
      ] : []
    },
    twitter: {
      handle: "@classroomio",
      site: "@classroomio",
      cardType: "summary_large_image",
      title: fullTitle,
      description,
      image: ogImage ?? void 0,
      imageAlt: tree.course.title
    }
  });
  return {
    item,
    pageMetaTags
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 97;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B9Lt5sL0.js')).default;
const server_id = "src/routes/(org-site)/course/[slug]/lesson/[itemSlug]/+page.server.ts";
const imports = ["_app/immutable/nodes/97.jbpKQxGx.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/BLLta7aC.js","_app/immutable/chunks/BJwam_Wz.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/DwC3zWTY.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/CuT4tmgA.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/ChhRsMFN.js","_app/immutable/chunks/6ixe6ov5.js","_app/immutable/chunks/C70V3DiJ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BNZIuqms.js","_app/immutable/chunks/BDKgQZVf.js","_app/immutable/chunks/CUMvGXFa.js","_app/immutable/chunks/BfDspkL2.js","_app/immutable/chunks/0Sgp6oOH.js","_app/immutable/chunks/5ePjsDa6.js","_app/immutable/chunks/GJ5luYJZ.js","_app/immutable/chunks/Br5Ccb0c.js","_app/immutable/chunks/CmxoP-lR.js","_app/immutable/chunks/kiLzb8bW.js","_app/immutable/chunks/C4eqGU8V.js","_app/immutable/chunks/CtnXXbpH.js","_app/immutable/chunks/D5ZsY9JI.js","_app/immutable/chunks/AkGCRPKV.js","_app/immutable/chunks/Ce-qLNwT.js","_app/immutable/chunks/S3htuolO.js","_app/immutable/chunks/BmJbP3sF.js","_app/immutable/chunks/Otsvx-eP.js","_app/immutable/chunks/RVotWuaX.js","_app/immutable/chunks/pdIXUbTy.js","_app/immutable/chunks/Bxc5EwhC.js","_app/immutable/chunks/BRVcnYgQ.js","_app/immutable/chunks/BgREJWt8.js","_app/immutable/chunks/Dv3jK-P6.js","_app/immutable/chunks/BmfVhVgY.js","_app/immutable/chunks/DU3gNe-4.js","_app/immutable/chunks/yg2cdHLS.js","_app/immutable/chunks/BbIuKYny.js","_app/immutable/chunks/SFXBoqb5.js","_app/immutable/chunks/B4buoeIe.js","_app/immutable/chunks/Cl07Su0W.js","_app/immutable/chunks/Chgfw-By.js","_app/immutable/chunks/wTCxkw2o.js","_app/immutable/chunks/DlLo6Vfc.js","_app/immutable/chunks/DIanzN-O.js","_app/immutable/chunks/ABZe47Jl.js","_app/immutable/chunks/CKMpxaHP.js","_app/immutable/chunks/BpLtGBgJ.js","_app/immutable/chunks/CR6k7qPq.js","_app/immutable/chunks/CTziVF1F.js","_app/immutable/chunks/BUKH9zhr.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/BQoWVZKs.js","_app/immutable/chunks/CU9m3kEB.js","_app/immutable/chunks/DDa3WYGH.js","_app/immutable/chunks/CvA1-Bow.js","_app/immutable/chunks/DpNsHMiQ.js","_app/immutable/chunks/Bv9Cj1k8.js","_app/immutable/chunks/iQKhP4xg.js","_app/immutable/chunks/DPrAXnqC.js","_app/immutable/chunks/6x714bss.js","_app/immutable/chunks/DKjiw3CH.js","_app/immutable/chunks/DGAl-O-i.js","_app/immutable/chunks/CwXCjX8o.js","_app/immutable/chunks/BSPoJiGp.js","_app/immutable/chunks/BnEUqkOx.js","_app/immutable/chunks/Ckf06g04.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css","_app/immutable/assets/underline-tabs-list.D_e3KQEN.css","_app/immutable/assets/states.Chnj5yGH.css","_app/immutable/assets/zap.QeFwT3Wp.css","_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/d3-sankey.B6JxlW0M.css","_app/immutable/assets/Cropper.eXKHelEG.css","_app/immutable/assets/hero-video-dialog.CAxd0wIa.css","_app/immutable/assets/index.DMu_NR8F.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=97-BCm1Cp-9.js.map
