import { c as classroomio } from './index4-3F2xRc80.js';
import { s as safeServerApi } from './server2-RKXuQOz9.js';
import { r as redirect } from './index-BIaV-njC.js';
import './utils2-DPSDgWhA.js';
import './shared-server-DaWdgxVh.js';
import './index-AIbsv2Pd.js';
import './org-BIDTy0Q0.js';
import 'lodash/merge.js';
import './content-BYLGOVzm.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';
import './utils-DmZwNubP.js';

function normalizeTagsParam(rawTags) {
  const normalized = rawTags?.split(",").map((value) => value.trim()).filter(Boolean);
  return normalized ?? [];
}
const load = async ({ parent, url }) => {
  const { isOrgSite, orgSiteName, org } = await parent();
  if (!isOrgSite || !org) {
    throw redirect(307, "/");
  }
  const siteName = orgSiteName || org.siteName;
  if (!siteName) {
    throw redirect(307, "/");
  }
  const normalizedTags = normalizeTagsParam(url.searchParams.get("tags"));
  const normalizedTagsQuery = normalizedTags.length > 0 ? normalizedTags.join(",") : void 0;
  const [coursesResult, tagsResult] = await Promise.all([
    safeServerApi(
      () => classroomio.organization.courses.public.$get({
        query: {
          siteName,
          ...normalizedTagsQuery ? { tags: normalizedTagsQuery } : {}
        }
      })
    ),
    safeServerApi(
      () => classroomio.organization.tags.public.$get({
        query: {
          siteName
        }
      })
    )
  ]);
  const courseData = coursesResult.ok ? coursesResult.body.data : { courses: [], hasMoreCourses: false };
  const canonicalUrl = new URL(url.pathname, url.origin).href;
  const orgTitle = `${org.name} – All Courses`;
  const orgDescription = `Browse all courses offered by ${org.name}`;
  const pageMetaTags = Object.freeze({
    title: orgTitle,
    description: orgDescription,
    canonical: canonicalUrl,
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: orgTitle,
      description: orgDescription,
      ...org.avatarUrl ? {
        images: [
          {
            url: org.avatarUrl,
            alt: `${org.name} logo`,
            secureUrl: org.avatarUrl,
            type: "image/jpeg"
          }
        ]
      } : {}
    }
  });
  return {
    org,
    courses: courseData.courses,
    hasMoreCourses: courseData.hasMoreCourses,
    tagGroups: tagsResult.ok ? tagsResult.body.data : [],
    activeTags: normalizedTags,
    pageMetaTags
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 98;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DNflHtNJ.js')).default;
const server_id = "src/routes/(org-site)/courses/+page.server.ts";
const imports = ["_app/immutable/nodes/98.CuLH6PWU.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/BCCWaYmt.js","_app/immutable/chunks/CY39jyo7.js","_app/immutable/chunks/CbrIGZze.js","_app/immutable/chunks/XQ9oum-X.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/XoWM6j9Q.js","_app/immutable/chunks/DkKyNm3g.js","_app/immutable/chunks/CC6QRhjR.js","_app/immutable/chunks/Chgfw-By.js","_app/immutable/chunks/CKabwioA.js","_app/immutable/chunks/6w9gDVZk.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DIaLGbHq.js","_app/immutable/chunks/D7bu37Vr.js","_app/immutable/chunks/DrGc9HY7.js","_app/immutable/chunks/DIo-OXiv.js","_app/immutable/chunks/D8Ymbdf-.js","_app/immutable/chunks/Ixm7K4H9.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/Br5Ccb0c.js","_app/immutable/chunks/5ePjsDa6.js","_app/immutable/chunks/CXVmQDxO.js","_app/immutable/chunks/GJ5luYJZ.js","_app/immutable/chunks/CmxoP-lR.js","_app/immutable/chunks/kiLzb8bW.js","_app/immutable/chunks/BLLta7aC.js","_app/immutable/chunks/C4eqGU8V.js","_app/immutable/chunks/CtnXXbpH.js","_app/immutable/chunks/D5ZsY9JI.js","_app/immutable/chunks/AkGCRPKV.js","_app/immutable/chunks/Ce-qLNwT.js","_app/immutable/chunks/S3htuolO.js","_app/immutable/chunks/DQ9kk-83.js","_app/immutable/chunks/CU9m3kEB.js","_app/immutable/chunks/DlLo6Vfc.js","_app/immutable/chunks/CAlvmli1.js","_app/immutable/chunks/D4LeFfZb.js","_app/immutable/chunks/cMdhlq0f.js","_app/immutable/chunks/DquZVvUn.js","_app/immutable/chunks/EMGF084-.js","_app/immutable/chunks/qPSggvMB.js","_app/immutable/chunks/HRdsLGen.js","_app/immutable/chunks/B6GXHQnr.js","_app/immutable/chunks/Dr2db8V1.js","_app/immutable/chunks/IldEbo1M.js","_app/immutable/chunks/BOgI2Ay5.js","_app/immutable/chunks/CQ0omE3D.js","_app/immutable/chunks/DwC3zWTY.js","_app/immutable/chunks/BfDspkL2.js","_app/immutable/chunks/BmJbP3sF.js","_app/immutable/chunks/Otsvx-eP.js","_app/immutable/chunks/RVotWuaX.js","_app/immutable/chunks/pdIXUbTy.js","_app/immutable/chunks/Bxc5EwhC.js","_app/immutable/chunks/BRVcnYgQ.js","_app/immutable/chunks/BgREJWt8.js","_app/immutable/chunks/Dv3jK-P6.js","_app/immutable/chunks/BmfVhVgY.js","_app/immutable/chunks/DU3gNe-4.js","_app/immutable/chunks/yg2cdHLS.js","_app/immutable/chunks/BbIuKYny.js","_app/immutable/chunks/SFXBoqb5.js","_app/immutable/chunks/B4buoeIe.js","_app/immutable/chunks/GciKy6AY.js","_app/immutable/chunks/CUMvGXFa.js","_app/immutable/chunks/wTCxkw2o.js","_app/immutable/chunks/DIanzN-O.js","_app/immutable/chunks/ABZe47Jl.js","_app/immutable/chunks/CKMpxaHP.js","_app/immutable/chunks/BpLtGBgJ.js","_app/immutable/chunks/CR6k7qPq.js","_app/immutable/chunks/DksUN-3y.js","_app/immutable/chunks/DiYjVjUF.js","_app/immutable/chunks/oreyoUCc.js","_app/immutable/chunks/Bb4lreKw.js","_app/immutable/chunks/Dv9Z3nBC.js","_app/immutable/chunks/CBz_8aID.js","_app/immutable/chunks/C_RNpsE7.js","_app/immutable/chunks/Bw_gswXV.js","_app/immutable/chunks/CyEGaFOc.js","_app/immutable/chunks/C5yHnGVg.js","_app/immutable/chunks/6sej211k.js","_app/immutable/chunks/DOzByljz.js","_app/immutable/chunks/DnT1X6s9.js","_app/immutable/chunks/Jb40zQoF.js","_app/immutable/chunks/CvA1-Bow.js","_app/immutable/chunks/DpNsHMiQ.js","_app/immutable/chunks/Bv9Cj1k8.js","_app/immutable/chunks/BQoWVZKs.js","_app/immutable/chunks/BIVToOD5.js","_app/immutable/chunks/DrTkqbvB.js","_app/immutable/chunks/DZu3xMfc.js","_app/immutable/chunks/ehjRy3T7.js","_app/immutable/chunks/BwEacdzn.js","_app/immutable/chunks/qiMJ87pK.js","_app/immutable/chunks/gaotG1ff.js","_app/immutable/chunks/Blvyii9A.js","_app/immutable/chunks/DPrAXnqC.js","_app/immutable/chunks/BEtp4UtC.js","_app/immutable/chunks/CTziVF1F.js","_app/immutable/chunks/BUKH9zhr.js","_app/immutable/chunks/DDa3WYGH.js","_app/immutable/chunks/iQKhP4xg.js","_app/immutable/chunks/Dp1xEt5z.js","_app/immutable/chunks/DhRWJs8o.js","_app/immutable/chunks/BKriPbi2.js","_app/immutable/chunks/DJp-6MI5.js","_app/immutable/chunks/BmnyDg0s.js","_app/immutable/chunks/DbxXqFR7.js","_app/immutable/chunks/CB2mZDUZ.js","_app/immutable/chunks/B-HoOQoK.js","_app/immutable/chunks/BrlgofHG.js","_app/immutable/chunks/BCt09td9.js","_app/immutable/chunks/CzURq6rg.js","_app/immutable/chunks/BKqcATYP.js","_app/immutable/chunks/BOu2uVWY.js","_app/immutable/chunks/JYb8teM6.js","_app/immutable/chunks/DM97x9Gt.js","_app/immutable/chunks/VBwJsO3_.js","_app/immutable/chunks/eGWOC8AS.js","_app/immutable/chunks/Cr8dJKul.js","_app/immutable/chunks/BKyaaeVi.js"];
const stylesheets = ["_app/immutable/assets/index.Xn_pFAEi.css","_app/immutable/assets/states.Chnj5yGH.css","_app/immutable/assets/zap.QeFwT3Wp.css","_app/immutable/assets/index.CV-KWLNP.css","_app/immutable/assets/underline-tabs-list.D_e3KQEN.css","_app/immutable/assets/d3-sankey.B6JxlW0M.css","_app/immutable/assets/Cropper.eXKHelEG.css","_app/immutable/assets/pricing-toggle.CeorUo0r.css","_app/immutable/assets/hero-video-dialog.CAxd0wIa.css","_app/immutable/assets/index.DMu_NR8F.css","_app/immutable/assets/circle-check-icon.DA5YLycx.css","_app/immutable/assets/side-panel-rail.CS9MT2A7.css","_app/immutable/assets/question-container.i8h_hx2o.css","_app/immutable/assets/saas.COYmOABz.css","_app/immutable/assets/hero.C4Ym_Ig-.css"];
const fonts = ["_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2","_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff","_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf","_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff","_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf","_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf","_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2","_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff","_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf","_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff","_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2","_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff","_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf","_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2","_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff","_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf","_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2","_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff","_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf","_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff","_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf","_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff","_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2","_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff","_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf","_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2","_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff","_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf","_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2","_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff","_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf","_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff","_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf","_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2","_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff","_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf","_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff","_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf"];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=98-DsnlUsAD.js.map
