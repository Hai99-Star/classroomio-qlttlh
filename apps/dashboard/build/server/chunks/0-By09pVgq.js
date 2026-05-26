import { g as getPersistedLocale, l as loadTranslations, c as config } from './translations-BxDrjLWK.js';
import { P as PUBLIC_IS_SELFHOSTED } from './org-BIDTy0Q0.js';
import { p as public_env } from './shared-server-DaWdgxVh.js';
import { g as getOrgSiteInfo } from './layout-setup-CDA2w-_6.js';
import './index-AIbsv2Pd.js';
import './utils2-DPSDgWhA.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import './org.server-DQLYEzoc.js';
import './index4-DxtvI9Cx.js';
import './server2-CLuZrePM.js';

const SUPPORTED_LANGUAGES = config?.loaders?.map((loader) => loader.locale) || [];
const load$1 = async ({ url, data }) => {
  const { pathname } = url;
  const serverLang = data?.serverLang?.split?.("-")?.[0] || "en";
  const persistedLocale = data?.localeCookie || getPersistedLocale();
  const userLocale = persistedLocale || data?.locals?.profile?.locale || getInitialLocale(serverLang);
  const initLocale = getInitialLocale(userLocale);
  await loadTranslations(initLocale, pathname);
  return data ?? {};
};
function getInitialLocale(lang) {
  const locale = lang.split("-")[0];
  if (SUPPORTED_LANGUAGES.includes(locale)) return locale;
  return "en";
}

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const DEFAULT_TITLE = "ClassroomIO | The Open Source Learning Management System for Companies";
const DEFAULT_DESCRIPTION = "A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations";
const CLOUD_OG_IMAGE = "https://brand.cdn.clsrio.com/og/classroomio-og.png";
function resolveOgImageUrl(url, orgSiteInfo) {
  const envUrl = public_env.PUBLIC_OG_IMAGE_URL?.trim();
  if (envUrl) return envUrl;
  {
    const org = orgSiteInfo.org;
    if (!org) {
      return CLOUD_OG_IMAGE;
    }
    const orgImage = org.avatarUrl || org.landingpage?.header?.banner?.image || org.customization?.dashboard?.bannerImage;
    if (orgImage) {
      try {
        return new URL(orgImage, url.origin).href;
      } catch {
      }
    }
  }
  return CLOUD_OG_IMAGE;
}
function getBaseMetaTags(url, orgSiteInfo) {
  const title = public_env.PUBLIC_APP_TITLE?.trim() || (orgSiteInfo.org?.name ? `${orgSiteInfo.org.name} | Learning Platform` : DEFAULT_TITLE);
  const description = public_env.PUBLIC_APP_DESCRIPTION?.trim() || DEFAULT_DESCRIPTION;
  const siteName = public_env.PUBLIC_APP_TITLE?.trim() || (orgSiteInfo.org?.name ? orgSiteInfo.org.name : null) || "ClassroomIO";
  const ogImageUrl = resolveOgImageUrl(url, orgSiteInfo);
  return Object.freeze({
    title,
    description,
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: "website",
      url: new URL(url.pathname, url.origin).href,
      locale: "en_US",
      title,
      description,
      siteName,
      images: [
        {
          url: ogImageUrl,
          alt: `${siteName} OG Image`,
          width: 1920,
          height: 1080,
          secureUrl: ogImageUrl,
          type: "image/png"
        }
      ]
    },
    twitter: {
      handle: "@classroomio",
      site: "@classroomio",
      cardType: "summary_large_image",
      title,
      description,
      image: ogImageUrl,
      imageAlt: `${siteName} OG Image`
    }
  });
}
const ssr = true;
const load = async ({ url, cookies, request, locals }) => {
  const loadStart = performance.now();
  const debugPlay = cookies.get("debugPlay");
  const orgSiteInfoStart = performance.now();
  const orgSiteInfo = await getOrgSiteInfo();
  const orgSiteInfoMs = Math.round((performance.now() - orgSiteInfoStart) * 100) / 100;
  const response = {
    orgSiteName: orgSiteInfo.orgSiteName,
    isOrgSite: orgSiteInfo.isOrgSite,
    skipAuth: orgSiteInfo.subdomain === "play" || debugPlay === "true",
    org: orgSiteInfo.org,
    baseMetaTags: getBaseMetaTags(url, orgSiteInfo),
    serverLang: request.headers?.get("accept-language") || "",
    localeCookie: cookies.get("classroomio_locale") || "",
    locals
  };
  const loadMs = Math.round((performance.now() - loadStart) * 100) / 100;
  console.log(
    `[+layout.server] load: ${loadMs}ms (getOrgSiteInfo: ${orgSiteInfoMs}ms) | PUBLIC_IS_SELFHOSTED=${PUBLIC_IS_SELFHOSTED}`
  );
  return response;
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CWe1rquW.js')).default;
const universal_id = "src/routes/+layout.ts";
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.Bbu2Hung.js","_app/immutable/chunks/6w9gDVZk.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/DhL2dTIW.js","_app/immutable/chunks/BJu5rqLT.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DLCNeJZp.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/5ePjsDa6.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/GJ5luYJZ.js","_app/immutable/chunks/Br5Ccb0c.js","_app/immutable/chunks/CmxoP-lR.js","_app/immutable/chunks/kiLzb8bW.js","_app/immutable/chunks/BLLta7aC.js","_app/immutable/chunks/C4eqGU8V.js","_app/immutable/chunks/CtnXXbpH.js","_app/immutable/chunks/D5ZsY9JI.js","_app/immutable/chunks/AkGCRPKV.js","_app/immutable/chunks/Ce-qLNwT.js","_app/immutable/chunks/S3htuolO.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/CU9m3kEB.js","_app/immutable/chunks/DrGc9HY7.js","_app/immutable/chunks/DIo-OXiv.js","_app/immutable/chunks/IWJl5fjj.js","_app/immutable/chunks/DlLo6Vfc.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/MumX1lBy.js","_app/immutable/chunks/DCOUcLu6.js","_app/immutable/chunks/Cfzt_vSW.js","_app/immutable/chunks/CHxUnEOE.js","_app/immutable/chunks/qPSggvMB.js","_app/immutable/chunks/DIaLGbHq.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/BzZ-dvPK.js","_app/immutable/chunks/BJ0ilD3Q.js","_app/immutable/chunks/IldEbo1M.js","_app/immutable/chunks/Bv-LlWmB.js","_app/immutable/chunks/BOgI2Ay5.js","_app/immutable/chunks/CQ0omE3D.js","_app/immutable/chunks/DwC3zWTY.js","_app/immutable/chunks/BfDspkL2.js","_app/immutable/chunks/BmJbP3sF.js","_app/immutable/chunks/Otsvx-eP.js","_app/immutable/chunks/RVotWuaX.js","_app/immutable/chunks/pdIXUbTy.js","_app/immutable/chunks/Bxc5EwhC.js","_app/immutable/chunks/BRVcnYgQ.js","_app/immutable/chunks/BgREJWt8.js","_app/immutable/chunks/Dv3jK-P6.js","_app/immutable/chunks/BmfVhVgY.js","_app/immutable/chunks/DU3gNe-4.js","_app/immutable/chunks/yg2cdHLS.js","_app/immutable/chunks/BbIuKYny.js","_app/immutable/chunks/SFXBoqb5.js","_app/immutable/chunks/B4buoeIe.js","_app/immutable/chunks/GciKy6AY.js","_app/immutable/chunks/Chgfw-By.js","_app/immutable/chunks/CUMvGXFa.js","_app/immutable/chunks/wTCxkw2o.js","_app/immutable/chunks/DIanzN-O.js","_app/immutable/chunks/ABZe47Jl.js","_app/immutable/chunks/CKMpxaHP.js","_app/immutable/chunks/BpLtGBgJ.js","_app/immutable/chunks/CR6k7qPq.js","_app/immutable/chunks/DksUN-3y.js","_app/immutable/chunks/DiYjVjUF.js","_app/immutable/chunks/oreyoUCc.js","_app/immutable/chunks/D7bu37Vr.js","_app/immutable/chunks/CYab5dl5.js","_app/immutable/chunks/Dv9Z3nBC.js","_app/immutable/chunks/CBz_8aID.js","_app/immutable/chunks/C_RNpsE7.js","_app/immutable/chunks/Bw_gswXV.js","_app/immutable/chunks/t9u7Nl29.js","_app/immutable/chunks/C5yHnGVg.js","_app/immutable/chunks/6sej211k.js","_app/immutable/chunks/DOzByljz.js","_app/immutable/chunks/DnT1X6s9.js","_app/immutable/chunks/Jb40zQoF.js","_app/immutable/chunks/CvA1-Bow.js","_app/immutable/chunks/DpNsHMiQ.js","_app/immutable/chunks/Bv9Cj1k8.js","_app/immutable/chunks/BQoWVZKs.js","_app/immutable/chunks/BIVToOD5.js","_app/immutable/chunks/DrTkqbvB.js","_app/immutable/chunks/DZu3xMfc.js","_app/immutable/chunks/ehjRy3T7.js","_app/immutable/chunks/BwEacdzn.js","_app/immutable/chunks/qiMJ87pK.js","_app/immutable/chunks/ChhRsMFN.js","_app/immutable/chunks/Cr8_gcSd.js","_app/immutable/chunks/D5HYZF_5.js","_app/immutable/chunks/B5VTMhBj.js","_app/immutable/chunks/CnzS9glQ.js","_app/immutable/chunks/6JBJ0QYa.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css","_app/immutable/assets/states.Chnj5yGH.css","_app/immutable/assets/zap.QeFwT3Wp.css","_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/underline-tabs-list.D_e3KQEN.css","_app/immutable/assets/d3-sankey.B6JxlW0M.css","_app/immutable/assets/Cropper.eXKHelEG.css","_app/immutable/assets/pricing-toggle.CeorUo0r.css","_app/immutable/assets/0.DINWl61w.css","_app/immutable/assets/circle-check-icon.DA5YLycx.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-By09pVgq.js.map
