import { P as PUBLIC_IS_SELFHOSTED } from './org-t71AQfHV.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';
import { g as getApiKeyHeaders } from './server2-CNt0sGTj.js';
import { g as getOrgBySiteName } from './org.server-C02FLdOq.js';
import { a as getSubdomain } from './layout-setup-UHcsNKzz.js';
import { r as redirect } from './index-D2olbCwr.js';
import './index-AIbsv2Pd.js';
import './utils2-DPSDgWhA.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './index4-CY3O4yvX.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';
import './app3-BuUSwZTB.js';

const APP_SUBDOMAINS = private_env.PRIVATE_APP_SUBDOMAINS?.split(",") || ["app"];
const ORG_ID_COOKIE_PREFIX = "cio_org_id_";
const load = async ({ params, url, cookies }) => {
  const subdomain = getSubdomain(url);
  const isOrgSite = subdomain && !APP_SUBDOMAINS.includes(subdomain);
  if (isOrgSite && PUBLIC_IS_SELFHOSTED !== "true") {
    console.log("isOrgSite redirecting to lms");
    redirect(307, `/lms`);
  }
  const siteName = params.slug;
  const cookieKey = `${ORG_ID_COOKIE_PREFIX}${siteName}`;
  const cachedOrgId = cookies.get(cookieKey);
  console.log("cachedOrgId", cachedOrgId);
  console.log("cookieKey", cookieKey);
  let orgId = cachedOrgId;
  if (!orgId) {
    const apiKeyHeaders = getApiKeyHeaders();
    const org = await getOrgBySiteName(siteName, apiKeyHeaders);
    if (org?.id) {
      orgId = org.id;
      cookies.set(cookieKey, org.id, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        // 7 days
        sameSite: "lax",
        httpOnly: false
        // Allow client-side access if needed
      });
    }
  }
  console.log("returning orgId", orgId);
  return {
    orgName: siteName,
    orgId
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CweXmKQq.js')).default;
const server_id = "src/routes/(app)/org/[slug]/+layout.server.ts";
const imports = ["_app/immutable/nodes/8.pEUy6AIA.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/6ixe6ov5.js","_app/immutable/chunks/C70V3DiJ.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BNZIuqms.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/DNMpQpdc.js","_app/immutable/chunks/GJ5luYJZ.js","_app/immutable/chunks/Br5Ccb0c.js","_app/immutable/chunks/CmxoP-lR.js","_app/immutable/chunks/kiLzb8bW.js","_app/immutable/chunks/BLLta7aC.js","_app/immutable/chunks/C4eqGU8V.js","_app/immutable/chunks/CtnXXbpH.js","_app/immutable/chunks/D5ZsY9JI.js","_app/immutable/chunks/5ePjsDa6.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/AkGCRPKV.js","_app/immutable/chunks/Ce-qLNwT.js","_app/immutable/chunks/S3htuolO.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/Cfu8q_Z9.js","_app/immutable/chunks/DOzByljz.js","_app/immutable/chunks/BSPoJiGp.js","_app/immutable/chunks/CuT4tmgA.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BnEUqkOx.js","_app/immutable/chunks/Ixm7K4H9.js","_app/immutable/chunks/BbIuKYny.js","_app/immutable/chunks/BurtRTaK.js","_app/immutable/chunks/BfTGiing.js","_app/immutable/chunks/pdIXUbTy.js","_app/immutable/chunks/Bxc5EwhC.js","_app/immutable/chunks/CU9m3kEB.js","_app/immutable/chunks/DaCoXbii.js","_app/immutable/chunks/C5yHnGVg.js","_app/immutable/chunks/S-DCg7Fw.js","_app/immutable/chunks/BIzxgraU.js","_app/immutable/chunks/yg2cdHLS.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/DwC3zWTY.js","_app/immutable/chunks/CH8YcLLn.js","_app/immutable/chunks/BJgyNWtS.js","_app/immutable/chunks/RVotWuaX.js","_app/immutable/chunks/DZjavH9r.js","_app/immutable/chunks/BIVToOD5.js","_app/immutable/chunks/Cr8_gcSd.js","_app/immutable/chunks/DIaLGbHq.js","_app/immutable/chunks/BadONg-H.js","_app/immutable/chunks/BCawya_3.js","_app/immutable/chunks/CjeHvJVF.js","_app/immutable/chunks/Rf-t9uZ4.js","_app/immutable/chunks/CzVk26Bh.js","_app/immutable/chunks/iqJjYGsY.js","_app/immutable/chunks/3zzyzZtT.js","_app/immutable/chunks/Cl07Su0W.js","_app/immutable/chunks/Chgfw-By.js","_app/immutable/chunks/CUMvGXFa.js","_app/immutable/chunks/DEl-71Lc.js","_app/immutable/chunks/Cz4WCinz.js","_app/immutable/chunks/IWJl5fjj.js","_app/immutable/chunks/i1TMN-e9.js","_app/immutable/chunks/DlLo6Vfc.js","_app/immutable/chunks/-qm_LuCw.js","_app/immutable/chunks/DrTkqbvB.js","_app/immutable/chunks/Blvyii9A.js","_app/immutable/chunks/DPrAXnqC.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/b_IgFFe2.js","_app/immutable/chunks/DGAl-O-i.js","_app/immutable/chunks/CwXCjX8o.js","_app/immutable/chunks/BgSWffro.js","_app/immutable/chunks/qPSggvMB.js","_app/immutable/chunks/rk1NQUzd.js","_app/immutable/chunks/SFXBoqb5.js","_app/immutable/chunks/BmfVhVgY.js","_app/immutable/chunks/cSOQIVHl.js","_app/immutable/chunks/jVw2zBTW.js","_app/immutable/chunks/6sSMROrB.js","_app/immutable/chunks/DETpZ6BZ.js","_app/immutable/chunks/CX9fHoAl.js","_app/immutable/chunks/DW4_ZZfP.js","_app/immutable/chunks/0Sgp6oOH.js","_app/immutable/chunks/BJwam_Wz.js","_app/immutable/chunks/BfDspkL2.js","_app/immutable/chunks/BmJbP3sF.js","_app/immutable/chunks/Otsvx-eP.js","_app/immutable/chunks/BRVcnYgQ.js","_app/immutable/chunks/BgREJWt8.js","_app/immutable/chunks/Dv3jK-P6.js","_app/immutable/chunks/DU3gNe-4.js","_app/immutable/chunks/B4buoeIe.js","_app/immutable/chunks/wTCxkw2o.js","_app/immutable/chunks/DIanzN-O.js","_app/immutable/chunks/ABZe47Jl.js","_app/immutable/chunks/CKMpxaHP.js","_app/immutable/chunks/BpLtGBgJ.js","_app/immutable/chunks/CR6k7qPq.js","_app/immutable/chunks/ngdBdNzk.js","_app/immutable/chunks/CNNY8bPN.js","_app/immutable/chunks/oreyoUCc.js","_app/immutable/chunks/B8Dq6xbt.js","_app/immutable/chunks/Dv9Z3nBC.js","_app/immutable/chunks/CBz_8aID.js","_app/immutable/chunks/C_RNpsE7.js","_app/immutable/chunks/Bw_gswXV.js","_app/immutable/chunks/CoNtDVBd.js","_app/immutable/chunks/6sej211k.js","_app/immutable/chunks/XRt1a_pq.js","_app/immutable/chunks/Jb40zQoF.js","_app/immutable/chunks/CvA1-Bow.js","_app/immutable/chunks/DpNsHMiQ.js","_app/immutable/chunks/Bv9Cj1k8.js","_app/immutable/chunks/BQoWVZKs.js","_app/immutable/chunks/DZu3xMfc.js","_app/immutable/chunks/ehjRy3T7.js","_app/immutable/chunks/BwEacdzn.js","_app/immutable/chunks/qiMJ87pK.js","_app/immutable/chunks/BzB2U7uM.js","_app/immutable/chunks/DAtktZHF.js","_app/immutable/chunks/CoPnAR6c.js","_app/immutable/chunks/DmWS6d4g.js","_app/immutable/chunks/C7ZgZrfp.js","_app/immutable/chunks/mFs4SMD6.js","_app/immutable/chunks/Civx7WiA.js","_app/immutable/chunks/BDKgQZVf.js","_app/immutable/chunks/CTziVF1F.js","_app/immutable/chunks/BUKH9zhr.js","_app/immutable/chunks/DDa3WYGH.js","_app/immutable/chunks/iQKhP4xg.js","_app/immutable/chunks/CXBIVgY1.js","_app/immutable/chunks/BSAtqsrw.js","_app/immutable/chunks/Cr8dJKul.js","_app/immutable/chunks/BKyaaeVi.js","_app/immutable/chunks/BlgkwDDN.js","_app/immutable/chunks/Bg5m0DHj.js","_app/immutable/chunks/CSYgclbI.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css","_app/immutable/assets/states.Chnj5yGH.css","_app/immutable/assets/zap.QeFwT3Wp.css","_app/immutable/assets/underline-tabs-list.D_e3KQEN.css","_app/immutable/assets/d3-sankey.B6JxlW0M.css","_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/Cropper.eXKHelEG.css","_app/immutable/assets/pricing-toggle.CeorUo0r.css","_app/immutable/assets/hero-video-dialog.CAxd0wIa.css","_app/immutable/assets/index.DMu_NR8F.css","_app/immutable/assets/side-panel-rail.CS9MT2A7.css","_app/immutable/assets/question-container.i8h_hx2o.css","_app/immutable/assets/circle-check-icon.DA5YLycx.css","_app/immutable/assets/preview.DzE4Zk_t.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-CWqis_2n.js.map
