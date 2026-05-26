import { m as attr_style, n as escape_html, d as attr, f as ensure_array_like, l as attr_class, j as clsx, e as stringify, A as invalid_default_snippet } from './index2-Eg0dVEDW.js';
import { B as Button } from './button-McsHA0hU.js';
import { E as Editable_section } from './landing-page-footer-C4QvJE2h.js';
import { B as Blurfade, a as motion } from './blurfade-BtQcpqGq.js';
import { D as Dot_pattern } from './dot-pattern-BsrHOSuA.js';
import { c as cn } from './index6-DijlZyMe.js';

function Blurin($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant,
      duration = 1,
      class: className = "text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-20",
      children
    } = $$props;
    const defaultVariants = {
      hidden: { filter: "blur(10px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 }
    };
    const combinedVariants = variant ?? defaultVariants;
    motion($$renderer2, {
      initial: "hidden",
      animate: "visible",
      transition: { duration },
      variants: combinedVariants,
      children: invalid_default_snippet,
      $$slots: {
        default: ($$renderer3, { motion: motion2 }) => {
          $$renderer3.push(`<h1${attr_class(clsx(cn(className)))}>`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></h1>`);
        }
      }
    });
  });
}
function Shinny_text($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { shimmerWidth = 100, class: className, children } = $$props;
    $$renderer2.push(`<p${attr_class(clsx(cn("mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50", "animate-shimmer bg-size-[var(--shimmer-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]", "bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80", className)))}${attr_style("", { "--shimmer-width": `${stringify(shimmerWidth)}px` })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></p>`);
  });
}
function Secondary_action_button($$renderer, $$props) {
  let { href, label, variant } = $$props;
  const themeButtonClasses = {
    minimal: { className: "ui:rounded-full", variant: "outline" },
    bold: {
      className: "ui:rounded-xl ui:px-8 ui:py-6 ui:text-base ui:font-bold ui:border-2 ui:hover:border-primary ui:transition-all",
      variant: "outline"
    },
    classic: {
      className: "ui:px-8 ui:font-semibold ui:bg-background ui:text-foreground ui:border-border ui:transition-colors",
      variant: "outline"
    },
    saas: {
      className: "ui:rounded-full ui:px-6 ui:border-border ui:text-foreground ui:hover:bg-accent",
      variant: "outline"
    },
    tech: {
      className: "ui:rounded-none ui:px-6 ui:font-semibold ui:border-black ui:text-white ui:bg-black ui:hover:bg-black/80 ui:transition-colors",
      variant: "outline"
    },
    studio: {
      className: "ui:rounded-md ui:px-5 ui:border-border ui:bg-background ui:text-foreground ui:hover:bg-muted ui:transition-colors",
      variant: "outline"
    },
    corporate: {
      className: "ui:rounded-none ui:px-6 ui:font-medium ui:border-foreground ui:text-foreground ui:hover:bg-foreground ui:hover:text-background ui:transition-colors",
      variant: "outline"
    },
    terminal: {
      className: "ui:rounded-full ui:px-5 ui:font-medium ui:bg-white/5 ui:border-[#262a35] ui:text-[#e9eaed] ui:hover:bg-white/10 ui:transition-colors",
      variant: "outline"
    }
  };
  Button($$renderer, {
    href,
    variant: themeButtonClasses[variant].variant,
    size: "lg",
    class: themeButtonClasses[variant].className,
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->${escape_html(label)}`);
    },
    $$slots: { default: true }
  });
}
function Nav$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    const navigationGradientBackground = `
    linear-gradient(
      135deg,
      color-mix(in oklab, var(--primary) 16%, var(--background)) 0%,
      color-mix(in oklab, var(--primary) 8%, var(--background)) 100%
    )
  `;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:flex ui:items-center ui:justify-between ui:gap-6 ui:px-6 ui:py-4 ui:rounded-full ui:border ui:border-border/60 ui:backdrop-blur-sm"${attr_style(`background: ${navigationGradientBackground};`)}><a href="/" class="ui:font-semibold ui:text-xl ui:flex ui:items-center ui:gap-2 ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-8 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> <div class="ui:flex ui:items-center ui:gap-4"><nav class="ui:hidden ui:md:flex ui:gap-8"><!--[-->`);
        const each_array = ensure_array_like(navItems);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<a${attr("href", item.href)} class="ui:text-sm ui:text-foreground/70 ui:hover:text-foreground ui:transition-colors">${escape_html(item.label)}</a>`);
        }
        $$renderer3.push(`<!--]--></nav> `);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            variant: "outline",
            class: "ui:rounded-full",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></header>`);
      }
    });
  });
}
function Hero$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero, navigation } = $$props;
    const heroGradientBackground = `
    radial-gradient(
      circle at top center,
      color-mix(in oklab, var(--primary) 24%, transparent) 0%,
      transparent 58%
    ),
    linear-gradient(
      135deg,
      color-mix(in oklab, var(--primary) 12%, var(--background)) 0%,
      color-mix(in oklab, var(--primary) 6%, var(--background)) 48%,
      var(--background) 100%
    )
  `;
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:overflow-hidden ui:px-4 ui:pt-4 ui:pb-16 ui:md:pb-24"${attr_style(`background: ${heroGradientBackground};`)}>`);
        Dot_pattern($$renderer3, { class: "ui:opacity-[0.08]" });
        $$renderer3.push(`<!----> <div class="ui:relative ui:max-w-[1200px] ui:mx-auto">`);
        navigation($$renderer3);
        $$renderer3.push(`<!----></div> <div class="ui:relative ui:py-20 ui:text-center ui:max-w-4xl ui:mx-auto">`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-5xl ui:md:text-6xl ui:font-semibold ui:tracking-tight ui:mb-6">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.15,
          once: true,
          children: ($$renderer4) => {
            Shinny_text($$renderer4, {
              shimmerWidth: 120,
              class: "ui:text-xl ui:mb-10 ui:max-w-2xl ui:mx-auto ui:font-light ui:text-foreground/72",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.subheading)}`);
              }
            });
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.3,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:items-center ui:justify-center ui:gap-4">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "lg",
              class: "ui:rounded-full",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "minimal"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----></div></section>`);
      }
    });
  });
}
function Nav$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:sticky ui:top-0 ui:z-10 ui:bg-background/90 ui:backdrop-blur-xl ui:border-b ui:border-border/40"><div class="ui:flex ui:items-center ui:justify-between ui:px-6 ui:py-5 ui:max-w-7xl ui:mx-auto"><a href="/" class="ui:font-black ui:text-2xl ui:tracking-tighter ui:flex ui:items-center ui:gap-3 ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-8 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> <div class="ui:flex ui:items-center ui:gap-4"><nav class="ui:hidden ui:md:flex ui:gap-8 ui:items-center"><!--[-->`);
        const each_array = ensure_array_like(navItems);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<a${attr("href", item.href)} class="ui:text-sm ui:font-bold ui:uppercase ui:tracking-widest ui:hover:text-primary ui:transition-colors">${escape_html(item.label)}</a>`);
        }
        $$renderer3.push(`<!--]--></nav> `);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            variant: "outline",
            class: "ui:rounded-xl ui:font-bold",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></header>`);
      }
    });
  });
}
function Hero$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:py-10 ui:px-6 ui:max-w-7xl ui:mx-auto ui:grid ui:lg:grid-cols-2 ui:gap-16 ui:items-center"><div>`);
        Blurfade($$renderer3, {
          delay: 0,
          once: true,
          class: "ui:mb-6",
          children: ($$renderer4) => {
            $$renderer4.push(`<h1 class="ui:text-5xl ui:lg:text-7xl ui:font-black ui:leading-[1.1] ui:tracking-tighter">${escape_html(hero.heading)}</h1>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.15,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-xl ui:text-muted-foreground ui:mb-10 ui:leading-relaxed">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.3,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-wrap ui:gap-4">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "lg",
              class: "ui:rounded-xl ui:px-8 ui:py-6 ui:text-base ui:font-bold ui:shadow-lg ui:shadow-primary/20 ui:hover:-translate-y-1 ui:transition-all",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "bold"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----></div> `);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          Blurfade($$renderer3, {
            delay: 0.2,
            once: true,
            class: "ui:relative ui:hidden ui:lg:block",
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="ui:absolute ui:inset-0 ui:bg-primary/5 ui:rounded-3xl ui:transform ui:translate-x-4 ui:translate-y-4"></div> <img${attr("src", hero.image)} alt="Hero" class="ui:relative ui:rounded-3xl ui:w-full ui:h-[500px] ui:object-cover"/>`);
            }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></section>`);
      }
    });
  });
}
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { orgName, logoUrl, navItems, authAction } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "navigation",
      children: ($$renderer3) => {
        $$renderer3.push(`<header class="ui:bg-foreground ui:text-background"><div class="ui:flex ui:items-center ui:justify-between ui:px-6 ui:lg:px-8 ui:h-20 ui:max-w-7xl ui:mx-auto"><a href="/" class="ui:flex ui:items-center ui:gap-3 ui:text-xl ui:font-bold ui:tracking-wide ui:no-underline">`);
        if (logoUrl) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<img${attr("src", logoUrl)}${attr("alt", orgName)} class="ui:h-8 ui:w-auto"/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> ${escape_html(orgName)}</a> <div class="ui:flex ui:items-center ui:gap-4"><nav class="ui:hidden ui:md:flex ui:space-x-8"><!--[-->`);
        const each_array = ensure_array_like(navItems);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer3.push(`<a${attr("href", item.href)} class="ui:text-sm ui:font-medium ui:text-background/70 ui:hover:text-background ui:transition-colors">${escape_html(item.label)}</a>`);
        }
        $$renderer3.push(`<!--]--></nav> `);
        if (authAction) {
          $$renderer3.push("<!--[-->");
          Button($$renderer3, {
            href: authAction.href,
            variant: "outline",
            class: "ui:bg-transparent ui:text-background ui:border-background/40 ui:hover:bg-background/10 ui:hover:text-background ui:hover:border-background/60",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(authAction.label)}`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div></div></header>`);
      }
    });
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { hero } = $$props;
    Editable_section($$renderer2, {
      sectionKey: "hero",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="ui:relative ui:bg-foreground ui:text-background ui:overflow-hidden ui:py-24 ui:sm:py-32 ui:px-6 ui:lg:px-8">`);
        if (hero.image) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="ui:absolute ui:inset-0 ui:opacity-10"><img${attr("src", hero.image)} alt="Background" class="ui:w-full ui:h-full ui:object-cover ui:grayscale"/></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        Dot_pattern($$renderer3, {
          fillColor: "rgb(255 255 255 / 0.35)",
          class: "ui:opacity-[0.06]"
        });
        $$renderer3.push(`<!----> <div class="ui:relative ui:max-w-3xl ui:mx-auto ui:text-center">`);
        Blurin($$renderer3, {
          class: "ui:text-4xl ui:sm:text-5xl ui:lg:text-6xl ui:font-bold ui:tracking-tight ui:mb-6 ui:leading-tight ui:drop-shadow-none",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(hero.heading)}`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.15,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="ui:text-lg ui:sm:text-xl ui:text-background/80 ui:mb-10">${escape_html(hero.subheading)}</p>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Blurfade($$renderer3, {
          delay: 0.3,
          once: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="ui:flex ui:flex-col ui:sm:flex-row ui:justify-center ui:gap-4">`);
            Button($$renderer4, {
              href: hero.primaryAction.href,
              disabled: hero.primaryAction.disabled ?? false,
              size: "lg",
              class: "ui:px-8 ui:font-semibold",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(hero.primaryAction.label)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            if (hero.secondaryAction) {
              $$renderer4.push("<!--[-->");
              Secondary_action_button($$renderer4, {
                href: hero.secondaryAction.href,
                label: hero.secondaryAction.label,
                variant: "classic"
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----></div></section>`);
      }
    });
  });
}

export { Hero as H, Nav as N, Secondary_action_button as S, Nav$1 as a, Hero$1 as b, Hero$2 as c, Nav$2 as d };
//# sourceMappingURL=hero-Dwb5biIu.js.map
