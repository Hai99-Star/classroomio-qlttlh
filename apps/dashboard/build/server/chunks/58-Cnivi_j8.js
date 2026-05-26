import { c as classroomio, d as getApiHeaders } from './index4-DxtvI9Cx.js';
import { s as safeServerApi } from './server2-CLuZrePM.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-BIDTy0Q0.js';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';

const load = async ({ parent, locals, cookies }) => {
  const { orgId } = await parent();
  if (!orgId || !locals.user?.id) {
    return { programs: [] };
  }
  const result = await safeServerApi(
    () => classroomio.program.$get({ query: { organizationId: orgId } }, getApiHeaders(cookies, orgId))
  );
  return {
    programs: result.ok ? result.body.data : []
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 58;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DRSLrhrU.js')).default;
const server_id = "src/routes/(app)/org/[slug]/programs/+page.server.ts";
const imports = ["_app/immutable/nodes/58.Bx_Ta1Uy.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/ChhRsMFN.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/BuLh4JKd.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/YXOfYF8B.js","_app/immutable/chunks/B8SdShMd.js","_app/immutable/chunks/DHcrJejE.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/gaotG1ff.js","_app/immutable/chunks/Blvyii9A.js","_app/immutable/chunks/DPrAXnqC.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/Rf-t9uZ4.js","_app/immutable/chunks/Chgfw-By.js","_app/immutable/chunks/6w9gDVZk.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/ChNiJxTg.js","_app/immutable/chunks/DCOUcLu6.js","_app/immutable/chunks/Cfzt_vSW.js","_app/immutable/chunks/DrGc9HY7.js","_app/immutable/chunks/DIo-OXiv.js","_app/immutable/chunks/D7bu37Vr.js","_app/immutable/chunks/C_RNpsE7.js","_app/immutable/chunks/CHxUnEOE.js","_app/immutable/chunks/qPSggvMB.js","_app/immutable/chunks/DxdjvMl-.js","_app/immutable/chunks/Dv9Z3nBC.js","_app/immutable/chunks/CLcfFClW.js","_app/immutable/chunks/eFQb6dkL.js","_app/immutable/chunks/iQKhP4xg.js","_app/immutable/chunks/CKMpxaHP.js","_app/immutable/chunks/Bm3iKIfl.js","_app/immutable/chunks/Dm9nnv0z.js","_app/immutable/chunks/BfTGiing.js","_app/immutable/chunks/pdIXUbTy.js","_app/immutable/chunks/Bxc5EwhC.js","_app/immutable/chunks/CU9m3kEB.js","_app/immutable/chunks/BpLtGBgJ.js","_app/immutable/chunks/Otsvx-eP.js","_app/immutable/chunks/IldEbo1M.js","_app/immutable/chunks/Bv-LlWmB.js","_app/immutable/chunks/DLCNeJZp.js","_app/immutable/chunks/BJu5rqLT.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DlLo6Vfc.js","_app/immutable/chunks/BmJbP3sF.js","_app/immutable/chunks/S3htuolO.js","_app/immutable/chunks/Br5Ccb0c.js","_app/immutable/chunks/kiLzb8bW.js","_app/immutable/chunks/CmxoP-lR.js","_app/immutable/chunks/BLLta7aC.js","_app/immutable/chunks/C4eqGU8V.js","_app/immutable/chunks/BRVcnYgQ.js","_app/immutable/chunks/Dv3jK-P6.js","_app/immutable/chunks/BrKJoE0Z.js","_app/immutable/chunks/Cfu8q_Z9.js","_app/immutable/chunks/BHP3XWdz.js","_app/immutable/chunks/BbIuKYny.js","_app/immutable/chunks/CtnXXbpH.js","_app/immutable/chunks/D5ZsY9JI.js","_app/immutable/chunks/wTCxkw2o.js","_app/immutable/chunks/DU3gNe-4.js","_app/immutable/chunks/yg2cdHLS.js","_app/immutable/chunks/DwC3zWTY.js","_app/immutable/chunks/BmfVhVgY.js","_app/immutable/chunks/BgREJWt8.js","_app/immutable/chunks/GJ5luYJZ.js","_app/immutable/chunks/DtaLa1Qs.js","_app/immutable/chunks/C5yHnGVg.js","_app/immutable/chunks/-qm_LuCw.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css","_app/immutable/assets/zap.QeFwT3Wp.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=58-Cnivi_j8.js.map
