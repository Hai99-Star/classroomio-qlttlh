import { n as escape_html, a as store_get, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { p as profile } from './user-Ahqcoe6u.js';
import { t } from './translations-BxDrjLWK.js';
import { I as Input } from './input-CkarY5WD.js';
import { B as Button } from './button-McsHA0hU.js';
import { C as Circle_check_icon } from './circle-check-icon-De2_dpHS.js';
import './index6-DijlZyMe.js';
import { F as Field_description } from './field-description-yPSV800w.js';
import { F as Field } from './field-BxJz8KV9.js';
import { F as Field_group } from './field-group-CsZtrba5.js';
import { F as Field_set, a as Field_legend } from './field-set-CvEL423F.js';

function Arrow_top_right($$renderer) {
  $$renderer.push(`<span class="button-trailing"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="17" y1="7" x2="7" y2="17"></line><polyline points="8 7 17 7 17 16"></polyline></svg></span>`);
}
function Integrations($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let chatId = null;
    async function addChatId() {
      if (!chatId || `${chatId}`.length < 5) return;
    }
    async function deleteChatId() {
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Field_group($$renderer3, {
        class: "w-full max-w-md! px-2",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Field_set($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Field_legend($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<img src="/telegram-svg.svg" alt="" class="mr-2 w-10"/> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.heading"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              if (store_get($$store_subs ??= {}, "$profile", profile).telegramChatId !== null) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<!---->`);
                Field($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<div class="flex items-center">`);
                    Circle_check_icon($$renderer6, { size: 16, filled: true });
                    $$renderer6.push(`<!----> <!---->`);
                    Field_description($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.success_message"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----></div> `);
                    Button($$renderer6, {
                      variant: "destructive",
                      onclick: deleteChatId,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.disconnect"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`<!---->`);
                Field_group($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->`);
                    Field_description($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.sub_heading"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <!---->`);
                    Field_description($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.step_authenticate"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Button($$renderer6, {
                      variant: "outline",
                      onclick: () => window.open("https://t.me/classroomio_bot", "_blank"),
                      children: ($$renderer7) => {
                        $$renderer7.push(`<span class="mr-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.open_bot_button"))}</span> `);
                        Arrow_top_right($$renderer7);
                        $$renderer7.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <!---->`);
                    Field_description($$renderer6, {
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.step_chatId"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> <!---->`);
                    Field($$renderer6, {
                      children: ($$renderer7) => {
                        Input($$renderer7, {
                          placeholder: "360111",
                          class: "w-full lg:w-60",
                          type: "number",
                          required: true,
                          get value() {
                            return chatId;
                          },
                          set value($$value) {
                            chatId = $$value;
                            $$settled = false;
                          }
                        });
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!----> `);
                    Button($$renderer6, {
                      variant: "default",
                      onclick: addChatId,
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.integrations.connect_button"))}`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { Integrations as I };
//# sourceMappingURL=integrations-C5n_Xbb8.js.map
