import { c as classroomio } from './index4-CY3O4yvX.js';
import { s as safeServerApi } from './server2-CNt0sGTj.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-t71AQfHV.js';
import 'lodash/merge.js';
import './domains-D9J1UytB.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';

const load = async ({ parent }) => {
  const { isOrgSite, orgSiteName, org } = await parent();
  if (!isOrgSite || !org) {
    return {
      isOrgSite: false,
      org: null,
      orgSiteName: "",
      courses: [],
      hasMoreCourses: false
    };
  }
  const siteName = orgSiteName || org.siteName;
  if (!siteName) {
    return {
      isOrgSite: true,
      org,
      orgSiteName,
      courses: [],
      hasMoreCourses: false
    };
  }
  const coursesResult = await safeServerApi(
    () => classroomio.organization.courses.public.$get({
      query: { siteName }
    })
  );
  const courseData = coursesResult.ok ? coursesResult.body.data : { courses: [], hasMoreCourses: false };
  return {
    isOrgSite: true,
    org,
    orgSiteName,
    courses: courseData.courses,
    hasMoreCourses: courseData.hasMoreCourses
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C1NXUGe9.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/15.CNzPWFlr.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/ChhRsMFN.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/CH8YcLLn.js","_app/immutable/chunks/BNZIuqms.js","_app/immutable/chunks/D1-HGepa.js","_app/immutable/chunks/DGAl-O-i.js","_app/immutable/chunks/CwXCjX8o.js","_app/immutable/chunks/BSPoJiGp.js","_app/immutable/chunks/CuT4tmgA.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BnEUqkOx.js","_app/immutable/chunks/DIaLGbHq.js","_app/immutable/chunks/DETpZ6BZ.js","_app/immutable/chunks/C70V3DiJ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CBz_8aID.js","_app/immutable/chunks/BJgyNWtS.js","_app/immutable/chunks/B5VTMhBj.js","_app/immutable/chunks/CnzS9glQ.js","_app/immutable/chunks/6ixe6ov5.js","_app/immutable/chunks/6JBJ0QYa.js","_app/immutable/chunks/IWJl5fjj.js","_app/immutable/chunks/BgSWffro.js","_app/immutable/chunks/qPSggvMB.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/gaotG1ff.js","_app/immutable/chunks/Blvyii9A.js","_app/immutable/chunks/DPrAXnqC.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/CNNY8bPN.js","_app/immutable/chunks/oreyoUCc.js","_app/immutable/chunks/B4buoeIe.js","_app/immutable/chunks/C5yHnGVg.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-DmbcVhEA.js.map
