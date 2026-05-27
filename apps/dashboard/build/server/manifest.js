const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["500-error.svg","ai.svg","classroomio-opengraph-image.png","classroomio-opengraph-image_launch.png","comment.svg","course-video.png","delete-video.svg","digital.png","digital.svg","favicon.ico","fonts/geist/geist-cyrillic.woff2","fonts/geist/geist-latin-ext.woff2","fonts/geist/geist-latin.woff2","global.css","images/avatar-plain.svg","images/avatar.svg","images/blue-badge-pattern-background.svg","images/blue-badge-pattern-badge.svg","images/blue-professional-badge.svg","images/certificate-template.png","images/certificate-template.svg","images/certificate_theme_blueBadgePattern.png","images/certificate_theme_blueProfessionalBadge.png","images/certificate_theme_plain.png","images/certificate_theme_professional.png","images/certificate_theme_purpleBadgePattern.png","images/certificate_theme_purpleProfessionalBadge.png","images/classroomio-course-img-template.jpg","images/course-banner-image.png","images/course-gift.png","images/empty-exercise-icon.svg","images/empty-lesson-icon.svg","images/empty-note-icon.svg","images/empty-slide-icon.svg","images/empty-video-icon.svg","images/learn-on-cio.jpg","images/org-header-banner.jpg","images/org-landingpage-banner.jpeg","images/org-landingpage-our-story.jpeg","images/play_video.png","images/purple-badge-pattern-background.svg","images/purple-badge-pattern-badge.svg","images/purple-professional-badge.svg","images/rating-1.svg","images/rating-2.svg","images/rating-3.svg","images/rating-4.svg","images/rating-5.svg","images/riverside.jpeg","images/student-certificate-preview.png","images/student-learning.svg","images/target.svg","images/user-placeholder.svg","images/welcome-img.svg","images/welcome-modal-banner.svg","js/pdf.js/pdf.min.js","js/pdf.js/pdf.worker.min.js","logo-16.png","logo-192.png","logo-32.png","logo-512.png","logo.svg","manifest.json","no-video.svg","notfound.webp","notfound2.gif","painting.png","painting.svg","plain.png","plyr.svg","professional.png","progress.svg","robots.txt","telegram-svg.svg","templates/bold.png","templates/classic.png","templates/corporate.png","templates/minimal.png","templates/saas.png","templates/studio.png","templates/tech.png","templates/terminal.png","templates/widget-layouts/card_grid.png","templates/widget-layouts/carousel.png","templates/widget-layouts/category_shelf.png","templates/widget-layouts/compact_list.png","templates/widget-layouts/editorial_spotlight.png","templates/widget-layouts/primary_course.png","templates/widget-layouts/tag_filter.png","tictac.svg","timer.svg","unauthorized.svg","upgrade.png","upload-video.svg","verify-email.svg","video-upload-error.svg","zohoverify/verifyforzoho.html"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".woff2":"font/woff2",".css":"text/css",".jpg":"image/jpeg",".jpeg":"image/jpeg",".js":"text/javascript",".json":"application/json",".webp":"image/webp",".gif":"image/gif",".txt":"text/plain",".html":"text/html"},
	_: {
		client: {start:"_app/immutable/entry/start.DnVDU_Kb.js",app:"_app/immutable/entry/app.BlMTnhKF.js",imports:["_app/immutable/entry/start.DnVDU_Kb.js","_app/immutable/chunks/C70V3DiJ.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BNZIuqms.js","_app/immutable/entry/app.BlMTnhKF.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CwXCjX8o.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/6JBJ0QYa.js","_app/immutable/chunks/D6q4hxDz.js","_app/immutable/chunks/C70V3DiJ.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/BNZIuqms.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/CbrIGZze.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./chunks/0-NcsBMgMj.js')),
			__memo(() => import('./chunks/1-3DRXNtvC.js')),
			__memo(() => import('./chunks/2-1YiWSYCC.js')),
			__memo(() => import('./chunks/3-DagDalIX.js')),
			__memo(() => import('./chunks/4-BsDns1SE.js')),
			__memo(() => import('./chunks/5-DquNf8jH.js')),
			__memo(() => import('./chunks/6-DvCg8Xc6.js')),
			__memo(() => import('./chunks/7-xG1XWKLf.js')),
			__memo(() => import('./chunks/8-CWqis_2n.js')),
			__memo(() => import('./chunks/9-fEW2_Kap.js')),
			__memo(() => import('./chunks/10-D18RKoOU.js')),
			__memo(() => import('./chunks/11-QEXLP7Fy.js')),
			__memo(() => import('./chunks/12-BzNBkHuN.js')),
			__memo(() => import('./chunks/13-BEeJj9CO.js')),
			__memo(() => import('./chunks/14-Bqc9nypn.js')),
			__memo(() => import('./chunks/15-DmbcVhEA.js')),
			__memo(() => import('./chunks/16-BrqKjxl1.js')),
			__memo(() => import('./chunks/17-BuZmSb4-.js')),
			__memo(() => import('./chunks/18-BNg2Szs9.js')),
			__memo(() => import('./chunks/19-Eby90SPE.js')),
			__memo(() => import('./chunks/20-9gcifOtk.js')),
			__memo(() => import('./chunks/21-4S-uYwp6.js')),
			__memo(() => import('./chunks/22-CBdeamXJ.js')),
			__memo(() => import('./chunks/23-D4nlDGT_.js')),
			__memo(() => import('./chunks/24-w99rk3ns.js')),
			__memo(() => import('./chunks/25-CG0i8TPN.js')),
			__memo(() => import('./chunks/26-BTyJV2ZK.js')),
			__memo(() => import('./chunks/27-DwkC95Sz.js')),
			__memo(() => import('./chunks/28-D_9JVvOK.js')),
			__memo(() => import('./chunks/29-EIQtMOO0.js')),
			__memo(() => import('./chunks/30-B2N3N7ob.js')),
			__memo(() => import('./chunks/31-DWRJYSAE.js')),
			__memo(() => import('./chunks/32-9j6LsOT9.js')),
			__memo(() => import('./chunks/33-CBU5Y7vR.js')),
			__memo(() => import('./chunks/34-DPBNqwtr.js')),
			__memo(() => import('./chunks/35-D_btb3Ub.js')),
			__memo(() => import('./chunks/36-IbxKEjPY.js')),
			__memo(() => import('./chunks/37-p8dGHTvm.js')),
			__memo(() => import('./chunks/38-DkO4MiIF.js')),
			__memo(() => import('./chunks/39-LOiFX4Ab.js')),
			__memo(() => import('./chunks/40-CeG810O9.js')),
			__memo(() => import('./chunks/41-C2OesnMf.js')),
			__memo(() => import('./chunks/42-DTnVaql-.js')),
			__memo(() => import('./chunks/43-DoEXjiE1.js')),
			__memo(() => import('./chunks/44-Bmg-rBly.js')),
			__memo(() => import('./chunks/45-ChsSHBCk.js')),
			__memo(() => import('./chunks/46-BPhCuIfn.js')),
			__memo(() => import('./chunks/47-Cb1ddUXB.js')),
			__memo(() => import('./chunks/48-CSGXb1tT.js')),
			__memo(() => import('./chunks/49-Bt8DhQEU.js')),
			__memo(() => import('./chunks/50-CIZfWLHD.js')),
			__memo(() => import('./chunks/51-CLThVT_4.js')),
			__memo(() => import('./chunks/52-CqhMfQxc.js')),
			__memo(() => import('./chunks/53-Cqhj-5Aq.js')),
			__memo(() => import('./chunks/54-6TFTJEeU.js')),
			__memo(() => import('./chunks/55-DVP9BaAY.js')),
			__memo(() => import('./chunks/56-DS-T8PS2.js')),
			__memo(() => import('./chunks/57-Cv4azcp5.js')),
			__memo(() => import('./chunks/58-QXf0iPsQ.js')),
			__memo(() => import('./chunks/59-Dqoq-zS6.js')),
			__memo(() => import('./chunks/60-As7zWG0K.js')),
			__memo(() => import('./chunks/61-BzQdfcD3.js')),
			__memo(() => import('./chunks/62--Mjrkgsq.js')),
			__memo(() => import('./chunks/63-DT5yWSnA.js')),
			__memo(() => import('./chunks/64-DjG_OXsI.js')),
			__memo(() => import('./chunks/65-Cz8AHjLb.js')),
			__memo(() => import('./chunks/66-Blpfs_CS.js')),
			__memo(() => import('./chunks/67-D0TdjHFj.js')),
			__memo(() => import('./chunks/68-AsSyfRem.js')),
			__memo(() => import('./chunks/69-BCTMBOh-.js')),
			__memo(() => import('./chunks/70-B0dTUtMx.js')),
			__memo(() => import('./chunks/71-C9lls2U0.js')),
			__memo(() => import('./chunks/72-BkqGttOC.js')),
			__memo(() => import('./chunks/73-BpAmNAb1.js')),
			__memo(() => import('./chunks/74-YOLzaxgi.js')),
			__memo(() => import('./chunks/75-Ck7ggqoU.js')),
			__memo(() => import('./chunks/76-ZE9h9W-w.js')),
			__memo(() => import('./chunks/77-OusKqi-R.js')),
			__memo(() => import('./chunks/78-CILzHXCk.js')),
			__memo(() => import('./chunks/79-qLm40uV_.js')),
			__memo(() => import('./chunks/80-jTlmPK0P.js')),
			__memo(() => import('./chunks/81-JNR58yvt.js')),
			__memo(() => import('./chunks/82-6caMtSgz.js')),
			__memo(() => import('./chunks/83-BiR62rOp.js')),
			__memo(() => import('./chunks/84-8ra__Nuj.js')),
			__memo(() => import('./chunks/85-C7zEf5jV.js')),
			__memo(() => import('./chunks/86-DKPGT6rZ.js')),
			__memo(() => import('./chunks/87-DXjCAwt_.js')),
			__memo(() => import('./chunks/88-DFlvT6FS.js')),
			__memo(() => import('./chunks/89-BPI8ryPN.js')),
			__memo(() => import('./chunks/90-Bc8KDyfi.js')),
			__memo(() => import('./chunks/91-CHc1be5a.js')),
			__memo(() => import('./chunks/92-CP_h7q-r.js')),
			__memo(() => import('./chunks/93-D5s56yAg.js')),
			__memo(() => import('./chunks/94-MQ5YH4gg.js')),
			__memo(() => import('./chunks/95-CKjPSXkO.js')),
			__memo(() => import('./chunks/96-ChCx7cRc.js')),
			__memo(() => import('./chunks/97-BCm1Cp-9.js')),
			__memo(() => import('./chunks/98-BPo_Sv69.js')),
			__memo(() => import('./chunks/99-BOyArTA7.js')),
			__memo(() => import('./chunks/100-CUjqY4Td.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/api/auth/[...path]",
				pattern: /^\/api\/auth(?:\/([^]*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CtEPNkCo.js'))
			},
			{
				id: "/api/polar/buy-tokens",
				pattern: /^\/api\/polar\/buy-tokens\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BkVaUflx.js'))
			},
			{
				id: "/api/polar/portal",
				pattern: /^\/api\/polar\/portal\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DkjYJxm_.js'))
			},
			{
				id: "/api/polar/subscribe",
				pattern: /^\/api\/polar\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-SRQGmQtL.js'))
			},
			{
				id: "/api/polar/webhook",
				pattern: /^\/api\/polar\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BroK8W4C.js'))
			},
			{
				id: "/(auth)/auth-failed",
				pattern: /^\/auth-failed\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(org-site)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,12,], errors: [1,,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/ai-tutor",
				pattern: /^\/courses\/([^/]+?)\/ai-tutor\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/analytics",
				pattern: /^\/courses\/([^/]+?)\/analytics\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/attendance",
				pattern: /^\/courses\/([^/]+?)\/attendance\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/certificates",
				pattern: /^\/courses\/([^/]+?)\/certificates\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/certificates/editor",
				pattern: /^\/courses\/([^/]+?)\/certificates\/editor\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/compliance",
				pattern: /^\/courses\/([^/]+?)\/compliance\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/exercises/[exerciseId]",
				pattern: /^\/courses\/([^/]+?)\/exercises\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"exerciseId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/landingpage",
				pattern: /^\/courses\/([^/]+?)\/landingpage\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/lessons",
				pattern: /^\/courses\/([^/]+?)\/lessons\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/lessons/[lessonId]",
				pattern: /^\/courses\/([^/]+?)\/lessons\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"lessonId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/marks",
				pattern: /^\/courses\/([^/]+?)\/marks\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/people",
				pattern: /^\/courses\/([^/]+?)\/people\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/people/[personId]",
				pattern: /^\/courses\/([^/]+?)\/people\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"personId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5,], errors: [1,,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/settings",
				pattern: /^\/courses\/([^/]+?)\/settings\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(app)/courses/[id]/submissions",
				pattern: /^\/courses\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(org-site)/course/[slug]",
				pattern: /^\/course\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,12,], errors: [1,,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(org-site)/course/[slug]/enroll",
				pattern: /^\/course\/([^/]+?)\/enroll\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,12,], errors: [1,,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(org-site)/course/[slug]/lesson/[itemSlug]",
				pattern: /^\/course\/([^/]+?)\/lesson\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"itemSlug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,12,13,], errors: [1,,,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/csp-report",
				pattern: /^\/csp-report\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B9PYR5mw.js'))
			},
			{
				id: "/(auth)/forgot",
				pattern: /^\/forgot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/invite/[hash]",
				pattern: /^\/invite\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,14,], errors: [1,,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(app)/lms",
				pattern: /^\/lms\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/lms/community",
				pattern: /^\/lms\/community\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(app)/lms/community/ask",
				pattern: /^\/lms\/community\/ask\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(app)/lms/community/[slug]",
				pattern: /^\/lms\/community\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(app)/lms/exercises",
				pattern: /^\/lms\/exercises\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(app)/lms/explore",
				pattern: /^\/lms\/explore\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(app)/lms/mylearning",
				pattern: /^\/lms\/mylearning\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(app)/lms/programs",
				pattern: /^\/lms\/programs\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(app)/lms/settings",
				pattern: /^\/lms\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,6,7,], errors: [1,,,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(app)/lms/settings/integrations",
				pattern: /^\/lms\/settings\/integrations\/?$/,
				params: [],
				page: { layouts: [0,2,6,7,], errors: [1,,,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(auth)/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]",
				pattern: /^\/org\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/analytics",
				pattern: /^\/org\/([^/]+?)\/analytics\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/api",
				pattern: /^\/org\/([^/]+?)\/api\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/audience",
				pattern: /^\/org\/([^/]+?)\/audience\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/audience/import",
				pattern: /^\/org\/([^/]+?)\/audience\/import\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/audience/[...params]",
				pattern: /^\/org\/([^/]+?)\/audience(?:\/([^]*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"params","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/automation",
				pattern: /^\/org\/([^/]+?)\/automation\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/community",
				pattern: /^\/org\/([^/]+?)\/community\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/community/ask",
				pattern: /^\/org\/([^/]+?)\/community\/ask\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/community/[cslug]",
				pattern: /^\/org\/([^/]+?)\/community\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"cslug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/compliance",
				pattern: /^\/org\/([^/]+?)\/compliance\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/courses",
				pattern: /^\/org\/([^/]+?)\/courses\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/dash",
				pattern: /^\/org\/([^/]+?)\/dash\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/mcp",
				pattern: /^\/org\/([^/]+?)\/mcp\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/media",
				pattern: /^\/org\/([^/]+?)\/media\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/programs",
				pattern: /^\/org\/([^/]+?)\/programs\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/quiz",
				pattern: /^\/org\/([^/]+?)\/quiz\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/quiz/[slug]",
				pattern: /^\/org\/([^/]+?)\/quiz\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings",
				pattern: /^\/org\/([^/]+?)\/settings\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/ai-credits",
				pattern: /^\/org\/([^/]+?)\/settings\/ai-credits\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/ai-tutor",
				pattern: /^\/org\/([^/]+?)\/settings\/ai-tutor\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/auth",
				pattern: /^\/org\/([^/]+?)\/settings\/auth\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/auth/sso",
				pattern: /^\/org\/([^/]+?)\/settings\/auth\/sso\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/auth/token-auth",
				pattern: /^\/org\/([^/]+?)\/settings\/auth\/token-auth\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/billing",
				pattern: /^\/org\/([^/]+?)\/settings\/billing\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/customize-lms",
				pattern: /^\/org\/([^/]+?)\/settings\/customize-lms\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/domains",
				pattern: /^\/org\/([^/]+?)\/settings\/domains\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/integrations",
				pattern: /^\/org\/([^/]+?)\/settings\/integrations\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/landingpage",
				pattern: /^\/org\/([^/]+?)\/settings\/landingpage\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,10,], errors: [1,,,,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/landingpage/edit",
				pattern: /^\/org\/([^/]+?)\/settings\/landingpage\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,10,], errors: [1,,,,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/org",
				pattern: /^\/org\/([^/]+?)\/settings\/org\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/teams",
				pattern: /^\/org\/([^/]+?)\/settings\/teams\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/settings/workspaces",
				pattern: /^\/org\/([^/]+?)\/settings\/workspaces\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,9,], errors: [1,,,,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/setup",
				pattern: /^\/org\/([^/]+?)\/setup\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/tags",
				pattern: /^\/org\/([^/]+?)\/tags\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/teams-overview",
				pattern: /^\/org\/([^/]+?)\/teams-overview\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/widgets",
				pattern: /^\/org\/([^/]+?)\/widgets\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(app)/org/[slug]/zapier",
				pattern: /^\/org\/([^/]+?)\/zapier\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,8,], errors: [1,,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/(app)/programs/[id]/courses",
				pattern: /^\/programs\/([^/]+?)\/courses\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(app)/programs/[id]/newsfeed",
				pattern: /^\/programs\/([^/]+?)\/newsfeed\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(app)/programs/[id]/people",
				pattern: /^\/programs\/([^/]+?)\/people\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(app)/programs/[id]/settings",
				pattern: /^\/programs\/([^/]+?)\/settings\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,11,], errors: [1,,,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/proxy/[...path]",
				pattern: /^\/proxy(?:\/([^]*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-KPqscVxT.js'))
			},
			{
				id: "/(auth)/reset",
				pattern: /^\/reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(auth)/verify-email-error",
				pattern: /^\/verify-email-error\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(app)/widget-preview",
				pattern: /^\/widget-preview\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(app)/widgets/[widgetId]",
				pattern: /^\/widgets\/([^/]+?)\/?$/,
				params: [{"name":"widgetId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 86 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
