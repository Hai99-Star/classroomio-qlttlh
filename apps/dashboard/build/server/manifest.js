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
		client: {start:"_app/immutable/entry/start.2jHR44AC.js",app:"_app/immutable/entry/app.CyX6YR8J.js",imports:["_app/immutable/entry/start.2jHR44AC.js","_app/immutable/chunks/RcvJY8iF.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DnXKbSp-.js","_app/immutable/entry/app.CyX6YR8J.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DnHa0K-u.js","_app/immutable/chunks/DMkybXYI.js","_app/immutable/chunks/6JBJ0QYa.js","_app/immutable/chunks/DbALdqkn.js","_app/immutable/chunks/RcvJY8iF.js","_app/immutable/chunks/D0IxJWuM.js","_app/immutable/chunks/B4Gb2Xkj.js","_app/immutable/chunks/IqKSOxrF.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/DnXKbSp-.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDnaBRn_.js","_app/immutable/chunks/CGCUeNHI.js","_app/immutable/chunks/CbrIGZze.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./chunks/0-BZlL2zG1.js')),
			__memo(() => import('./chunks/1-Dscf7cLf.js')),
			__memo(() => import('./chunks/2-BY6WBOUj.js')),
			__memo(() => import('./chunks/3-D46nitRb.js')),
			__memo(() => import('./chunks/4-BsDns1SE.js')),
			__memo(() => import('./chunks/5-C4grFWXC.js')),
			__memo(() => import('./chunks/6-6bDFFvHJ.js')),
			__memo(() => import('./chunks/7-xG1XWKLf.js')),
			__memo(() => import('./chunks/8-DM5GIWDO.js')),
			__memo(() => import('./chunks/9-fEW2_Kap.js')),
			__memo(() => import('./chunks/10-D18RKoOU.js')),
			__memo(() => import('./chunks/11-YHfLp579.js')),
			__memo(() => import('./chunks/12-Br6tRaKu.js')),
			__memo(() => import('./chunks/13-C5lXKW_s.js')),
			__memo(() => import('./chunks/14-D2DX0fk_.js')),
			__memo(() => import('./chunks/15-Cte7wd-o.js')),
			__memo(() => import('./chunks/16-CMFXrNb_.js')),
			__memo(() => import('./chunks/17-DjYHys-o.js')),
			__memo(() => import('./chunks/18-DBuU5Y-z.js')),
			__memo(() => import('./chunks/19-BYgnTOYj.js')),
			__memo(() => import('./chunks/20-a75twZW1.js')),
			__memo(() => import('./chunks/21-1geoZYSK.js')),
			__memo(() => import('./chunks/22-BY9S5mNM.js')),
			__memo(() => import('./chunks/23-Cg5bKh1S.js')),
			__memo(() => import('./chunks/24-Tqn1s2Y4.js')),
			__memo(() => import('./chunks/25-4qcxRj2n.js')),
			__memo(() => import('./chunks/26-CddOxtrf.js')),
			__memo(() => import('./chunks/27-oqCpgH60.js')),
			__memo(() => import('./chunks/28-BwQ10JxT.js')),
			__memo(() => import('./chunks/29-D_7zkXiA.js')),
			__memo(() => import('./chunks/30-Bpl2TJyv.js')),
			__memo(() => import('./chunks/31-BkGaeJKO.js')),
			__memo(() => import('./chunks/32-UyY4BVGu.js')),
			__memo(() => import('./chunks/33-C5nBIGQ3.js')),
			__memo(() => import('./chunks/34-D3u7GOzo.js')),
			__memo(() => import('./chunks/35-CxQk_los.js')),
			__memo(() => import('./chunks/36-BujNNmlT.js')),
			__memo(() => import('./chunks/37-CvypJVGi.js')),
			__memo(() => import('./chunks/38-BSDsUsn6.js')),
			__memo(() => import('./chunks/39-Vc8Irzpr.js')),
			__memo(() => import('./chunks/40-BcknwzXu.js')),
			__memo(() => import('./chunks/41-BJZGivc5.js')),
			__memo(() => import('./chunks/42-D-VODB9E.js')),
			__memo(() => import('./chunks/43-D1IwroyG.js')),
			__memo(() => import('./chunks/44-Bli8fgnu.js')),
			__memo(() => import('./chunks/45-CaWg-qGk.js')),
			__memo(() => import('./chunks/46-D7x7nvi7.js')),
			__memo(() => import('./chunks/47-7qEnqxNd.js')),
			__memo(() => import('./chunks/48-DxOaNaxy.js')),
			__memo(() => import('./chunks/49-DXy2lhN7.js')),
			__memo(() => import('./chunks/50-D-B_knl-.js')),
			__memo(() => import('./chunks/51-yGe3sjUR.js')),
			__memo(() => import('./chunks/52-BCSufLmK.js')),
			__memo(() => import('./chunks/53-B0ViNSCR.js')),
			__memo(() => import('./chunks/54-BTCkXEyW.js')),
			__memo(() => import('./chunks/55-Dz4qApIv.js')),
			__memo(() => import('./chunks/56-sA4seyzz.js')),
			__memo(() => import('./chunks/57-BoHwbrGZ.js')),
			__memo(() => import('./chunks/58-q5k_p1cm.js')),
			__memo(() => import('./chunks/59-SwoLcXmP.js')),
			__memo(() => import('./chunks/60-CCpJg2bd.js')),
			__memo(() => import('./chunks/61-JgLLx_-D.js')),
			__memo(() => import('./chunks/62-DyPV5wgn.js')),
			__memo(() => import('./chunks/63-CMknjI0Y.js')),
			__memo(() => import('./chunks/64-Ci2_ESOs.js')),
			__memo(() => import('./chunks/65-BSrrAHLM.js')),
			__memo(() => import('./chunks/66-DH7sCyXj.js')),
			__memo(() => import('./chunks/67-cHXB5zln.js')),
			__memo(() => import('./chunks/68-Cb9D5Yyn.js')),
			__memo(() => import('./chunks/69-Txw4UqYs.js')),
			__memo(() => import('./chunks/70-PEGFSYwS.js')),
			__memo(() => import('./chunks/71-DE8l07Ik.js')),
			__memo(() => import('./chunks/72-5cMhhf6n.js')),
			__memo(() => import('./chunks/73-RUCU4yJz.js')),
			__memo(() => import('./chunks/74-CbVkZucG.js')),
			__memo(() => import('./chunks/75-HRzoVQ9g.js')),
			__memo(() => import('./chunks/76-DhPR2z0y.js')),
			__memo(() => import('./chunks/77-Bhwvx9jI.js')),
			__memo(() => import('./chunks/78-Cj6Th8xy.js')),
			__memo(() => import('./chunks/79-DwyoadRe.js')),
			__memo(() => import('./chunks/80-BrYo5Wke.js')),
			__memo(() => import('./chunks/81-DKKWZCEb.js')),
			__memo(() => import('./chunks/82-C62ae1l9.js')),
			__memo(() => import('./chunks/83-QqSd3iL2.js')),
			__memo(() => import('./chunks/84-B1HLaUNT.js')),
			__memo(() => import('./chunks/85-D-mwhNvn.js')),
			__memo(() => import('./chunks/86-e8JAb6Dh.js')),
			__memo(() => import('./chunks/87-HEdFzVi8.js')),
			__memo(() => import('./chunks/88-BGBlVmSl.js')),
			__memo(() => import('./chunks/89-zFiP-09S.js')),
			__memo(() => import('./chunks/90-Dmcj1Tbc.js')),
			__memo(() => import('./chunks/91-CXuRRkfS.js')),
			__memo(() => import('./chunks/92-Bk7bK0Ze.js')),
			__memo(() => import('./chunks/93-CzuHy1vO.js')),
			__memo(() => import('./chunks/94-DZozRGCL.js')),
			__memo(() => import('./chunks/95-B49W_hrX.js')),
			__memo(() => import('./chunks/96-CPf66dS0.js')),
			__memo(() => import('./chunks/97-B-fyTk4S.js')),
			__memo(() => import('./chunks/98-Pe77rb_b.js')),
			__memo(() => import('./chunks/99-B4gkHXWk.js')),
			__memo(() => import('./chunks/100-CVHcZZF5.js'))
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
				endpoint: __memo(() => import('./chunks/_server.ts-CU9S4vJn.js'))
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
