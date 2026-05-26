import { a as store_get, d as attr, u as unsubscribe_stores, n as escape_html, e as stringify } from './index2-Eg0dVEDW.js';
import { p as page } from './index5-nlVlCL1t.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { t } from './translations-BxDrjLWK.js';
import { c as currentOrg } from './org-BIDTy0Q0.js';
import { a as authClient } from './client-Bi-QreUE.js';
import { C as Card, b as Card_title, c as Card_description, a as Card_content } from './card-title-BAC38wyM.js';
import { C as Card_footer } from './card-footer-BHtLQwFA.js';
import { C as Card_header } from './card-header-CpBV_NsL.js';
import './index6-DijlZyMe.js';
import { B as Button } from './button-McsHA0hU.js';
import { S as Separator } from './separator-C8wJJtqC.js';
import { R as ROUTE } from './routes-DaVXfsS2.js';
import { D as Dot_pattern } from './dot-pattern-BsrHOSuA.js';

function Google_icon_colored($$renderer) {
  $$renderer.push(`<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 8.76233C3.75 7.96961 3.96841 7.22701 4.34784 6.59117V3.89404H1.65072C0.58025 5.28429 0 6.97864 0 8.76233C0 10.546 0.58025 12.2404 1.65072 13.6306H4.34784V10.9335C3.96841 10.2976 3.75 9.55504 3.75 8.76233Z" fill="#FBBD00"></path><path d="M8 13.0124L6.125 14.8874L8 16.7624C9.78372 16.7624 11.478 16.1822 12.8683 15.1117V12.4175H10.174C9.53262 12.7983 8.78691 13.0124 8 13.0124Z" fill="#0F9D58"></path><path d="M4.34739 10.9336L1.65027 13.6307C1.86221 13.906 2.09299 14.1696 2.34271 14.4193C3.85371 15.9303 5.86267 16.7624 7.99955 16.7624V13.0124C6.4488 13.0124 5.08964 12.1774 4.34739 10.9336Z" fill="#31AA52"></path><path d="M16 8.76258C16 8.27586 15.9559 7.78824 15.869 7.3133L15.7987 6.92896H8V10.679H11.7954C11.4268 11.4121 10.8601 12.0103 10.174 12.4176L12.8682 15.1119C13.1435 14.9 13.4071 14.6692 13.6568 14.4195C15.1678 12.9084 16 10.8995 16 8.76258Z" fill="#3C79E6"></path><path d="M11.0052 5.75723L11.3367 6.08867L13.9883 3.43705L13.6569 3.10561C12.1459 1.59461 10.1369 0.762451 8 0.762451L6.125 2.63745L8 4.51245C9.13519 4.51245 10.2025 4.95451 11.0052 5.75723Z" fill="#CF2D48"></path><path d="M7.99958 4.51245V0.762451C5.86271 0.762451 3.85374 1.59461 2.34271 3.10558C2.09299 3.3553 1.86221 3.61889 1.65027 3.89417L4.34739 6.5913C5.08967 5.34745 6.44883 4.51245 7.99958 4.51245Z" fill="#EB4132"></path></svg>`);
}
function Auth_ui($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      isLogin = true,
      showOnlyContent = false,
      isLoading = false,
      showLogo = false,
      hideGoogleAuth = false,
      redirectPathname = "",
      handleSubmit = () => {
      },
      children,
      getPasswordAuthAlternative
    } = $$props;
    async function signInWithGoogle() {
      if (isLoading) {
        return;
      }
      const params = new URLSearchParams(window.location.search);
      console.log({ params });
      const pathname = redirectPathname || params.get("redirect") || "";
      const redirectTo = `${window.location.origin + pathname}`;
      const errorCallbackURL = `${window.location.origin + ROUTE.AUTH_FAILED}`;
      console.log({ redirectTo });
      try {
        console.log("signInWithGoogle");
        const data = await authClient.signIn.social({
          provider: "google",
          callbackURL: redirectTo,
          errorCallbackURL
        });
        console.log("data", data);
      } catch (error) {
        console.log("catch error", error);
      }
    }
    const authBackgroundUrl = store_get($$store_subs ??= {}, "$currentOrg", currentOrg).customization.auth?.backgroundImage?.trim() ?? "";
    $$renderer2.push(`<div class="auth-ui-background relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">`);
    if (authBackgroundUrl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute inset-0 z-0"><img${attr("src", authBackgroundUrl)} alt="" class="h-full w-full object-cover" decoding="async"/> <div class="absolute inset-0 bg-black/45" aria-hidden="true"></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      Dot_pattern($$renderer2, {
        fillColor: "rgb(2 51 189 / 0.25)",
        class: "absolute inset-0 z-0 h-full w-full"
      });
    }
    $$renderer2.push(`<!--]--> <!---->`);
    Card($$renderer2, {
      class: "ui:w-full relative z-10 max-w-[400px] shadow-sm",
      children: ($$renderer3) => {
        if (!showOnlyContent || showLogo) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Card_header($$renderer3, {
            class: "ui:flex ui:flex-col ui:items-center ui:gap-4",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Avatar($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Avatar_image($$renderer5, {
                    src: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).avatarUrl : "/logo-192.png",
                    alt: store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name : "ClassroomIO"
                  });
                  $$renderer5.push(`<!----> <!---->`);
                  Avatar_fallback($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name ? store_get($$store_subs ??= {}, "$currentOrg", currentOrg).name : "ClassroomIO")}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              if (!showOnlyContent) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<a href="/"><!---->`);
                Card_title($$renderer4, {
                  class: "ui:text-2xl font-normal!",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(isLogin ? store_get($$store_subs ??= {}, "$t", t)("login.welcome") : store_get($$store_subs ??= {}, "$t", t)("login.create_account"))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----></a> `);
                if (isLogin) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<!---->`);
                  Card_description($$renderer4, {
                    class: "ui:text-center",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->Sign in to continue`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push(`<!---->`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]-->`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <!---->`);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<form>`);
            children?.($$renderer4);
            $$renderer4.push(`<!----></form> `);
            if (!showOnlyContent && !hideGoogleAuth) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="mt-6 flex flex-col gap-6"><div class="relative flex items-center justify-center">`);
              Separator($$renderer4, {});
              $$renderer4.push(`<!----> <span class="ui:bg-card ui:text-muted-foreground absolute px-2 text-sm">Or continue With</span></div> `);
              if (getPasswordAuthAlternative) {
                $$renderer4.push("<!--[-->");
                getPasswordAuthAlternative($$renderer4);
                $$renderer4.push(`<!---->`);
              } else {
                $$renderer4.push("<!--[!-->");
                Button($$renderer4, {
                  variant: "outline",
                  onclick: signInWithGoogle,
                  disabled: isLoading,
                  class: "w-full",
                  children: ($$renderer5) => {
                    Google_icon_colored($$renderer5);
                    $$renderer5.push(`<!----> <span>${escape_html(isLogin ? store_get($$store_subs ??= {}, "$t", t)("login.login_with_google") : store_get($$store_subs ??= {}, "$t", t)("login.signup_with_google"))}</span>`);
                  },
                  $$slots: { default: true }
                });
              }
              $$renderer4.push(`<!--]--></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (!showOnlyContent) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Card_footer($$renderer3, {
            class: "flex-col gap-2 border-t pt-6",
            children: ($$renderer4) => {
              $$renderer4.push(`<p class="text-muted-foreground text-center text-sm">`);
              if (isLogin) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.not_registered_yet"))} <a class="text-primary hover:underline"${attr("href", `/signup${stringify(page.url.search)}`)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.signup"))}</a>`);
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.already_have_account"))} <a class="text-primary hover:underline"${attr("href", `/login${stringify(page.url.search)}`)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("login.login"))}</a>`);
              }
              $$renderer4.push(`<!--]--></p>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Auth_ui as A };
//# sourceMappingURL=auth-ui-DbYP635I.js.map
