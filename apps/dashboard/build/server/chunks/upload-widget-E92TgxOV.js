import { c as bind_props, z as store_mutate, a as store_get, n as escape_html, f as ensure_array_like, l as attr_class, e as stringify, d as attr, u as unsubscribe_stores } from './index2-Eg0dVEDW.js';
import { U as Underline_tabs, a as Underline_tabs_list, c as Underline_tabs_content, b as Underline_tabs_trigger } from './underline-tabs-trigger-kfAMW9ai.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import { w as writable } from './index-AIbsv2Pd.js';
import './index4-CY3O4yvX.js';
import { t } from './translations-BxDrjLWK.js';
import { u as uploadImage } from './upload-CawE_9WB.js';
import { F as File_drop_zone, A as ACCEPT_IMAGE, a as File_drop_zone_trigger, K as KILOBYTE } from './index17-Cgq4UFe3.js';
import { I as Input_field } from './input-field-w4kZespe.js';
import { B as Button } from './button-McsHA0hU.js';
import './page-load-progress.svelte_svelte_type_style_lang-JkRnsqMd.js';
import { D as Dialog_header, a as Dialog_title } from './dialog-header-D1aNdwc5.js';

const reviewsModalStore = writable({
  open: false
});
const handleOpenWidget = writable({
  open: false
});
function Upload_widget($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { imageURL = "", onchange } = $$props;
    const tabs = [
      { label: "Upload", value: "upload" },
      { label: "Unsplash", value: "unsplash" }
    ];
    let isUploading = false;
    let isSearching = false;
    let currentTab = tabs[0].value;
    let searchQuery = "";
    let unsplashImages = [];
    const MAX_IMAGE_SIZE = 500 * KILOBYTE;
    async function handleFilesUpload(files) {
      const file = files[0];
      if (file) await handleUploadImage(file);
    }
    function handleFileRejected({ reason }) {
      if (reason === "Maximum file size exceeded") {
        snackbar.error("snackbar.landing_page_settings.error.file_size");
      } else {
        snackbar.error("snackbar.landing_page_settings.error.file_size");
      }
    }
    const handleUploadImage = async (image) => {
      isUploading = true;
      if (!image) {
        return;
      }
      imageURL = await uploadImage(image);
      onchange?.(imageURL);
      isUploading = false;
      snackbar.success(`snackbar.landing_page_settings.success.complete`);
      store_mutate($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget, store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open = false);
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        onOpenChange: (isOpen) => {
          if (!isOpen) store_mutate($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget, store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open = false);
        },
        get open() {
          return store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open;
        },
        set open($$value) {
          store_mutate($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget, store_get($$store_subs ??= {}, "$handleOpenWidget", handleOpenWidget).open = $$value);
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "ui:z-300! w-3/5",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.upload_widget.title"))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="w-full bg-white p-2 dark:bg-inherit"><!---->`);
              Underline_tabs($$renderer5, {
                get value() {
                  return currentTab;
                },
                set value($$value) {
                  currentTab = $$value;
                  $$settled = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Underline_tabs_list($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!--[-->`);
                      const each_array = ensure_array_like(tabs);
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let tab = each_array[$$index];
                        $$renderer7.push(`<!---->`);
                        Underline_tabs_trigger($$renderer7, {
                          value: tab.value,
                          children: ($$renderer8) => {
                            $$renderer8.push(`<!---->${escape_html(tab.label)}`);
                          },
                          $$slots: { default: true }
                        });
                        $$renderer7.push(`<!---->`);
                      }
                      $$renderer7.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer6, {
                    value: "upload",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div${attr_class(`w-full ${stringify(isUploading ? "ui:opacity-50 ui:pointer-events-none" : "")}`)}><!---->`);
                      File_drop_zone($$renderer7, {
                        accept: ACCEPT_IMAGE,
                        maxFiles: 1,
                        fileCount: 0,
                        maxFileSize: MAX_IMAGE_SIZE,
                        onUpload: handleFilesUpload,
                        onFileRejected: handleFileRejected,
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->`);
                          File_drop_zone_trigger($$renderer8, {
                            label: store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.upload_widget.drag_drop"),
                            formatMaxSize: (_size) => store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.upload_widget.size")
                          });
                          $$renderer8.push(`<!---->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Underline_tabs_content($$renderer6, {
                    value: "unsplash",
                    children: ($$renderer7) => {
                      $$renderer7.push(`<div class="h-full overflow-y-scroll"><form class="mt-1 flex gap-2 pb-3">`);
                      Input_field($$renderer7, {
                        className: "ml-2 w-[85%]",
                        get value() {
                          return searchQuery;
                        },
                        set value($$value) {
                          searchQuery = $$value;
                          $$settled = false;
                        }
                      });
                      $$renderer7.push(`<!----> `);
                      Button($$renderer7, {
                        type: "submit",
                        variant: "outline",
                        loading: isSearching,
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.upload_widget.submit"))}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----></form> `);
                      if (unsplashImages && unsplashImages.length > 0) {
                        $$renderer7.push("<!--[-->");
                        $$renderer7.push(`<div class="hide-scrollbar flex max-h-[300px] flex-row flex-wrap items-center gap-2 px-[10px] svelte-qhiwoh"><!--[-->`);
                        const each_array_1 = ensure_array_like(unsplashImages);
                        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                          let unsplashImages2 = each_array_1[$$index_1];
                          $$renderer7.push(`<div><div class="relative h-[130px] w-[195px] overflow-hidden"><button><img${attr("src", unsplashImages2.urls.regular)}${attr("alt", unsplashImages2.alt_description)} class="h-full w-full cursor-pointer rounded-md object-cover hover:opacity-80"/></button></div> `);
                          if (unsplashImages2.user.name) {
                            $$renderer7.push("<!--[-->");
                            $$renderer7.push(`<p class="mt-1 text-center text-xs font-light text-gray-500">By <a${attr("href", `https://unsplash.com/@${unsplashImages2.user.username}`)} target="_blank" class="hover:text-red-700">${escape_html(unsplashImages2.user.name)}</a></p>`);
                          } else {
                            $$renderer7.push("<!--[!-->");
                          }
                          $$renderer7.push(`<!--]--></div>`);
                        }
                        $$renderer7.push(`<!--]--></div>`);
                      } else {
                        $$renderer7.push("<!--[!-->");
                        $$renderer7.push(`<p class="pt-7 text-center">${escape_html(store_get($$store_subs ??= {}, "$t", t)("course.navItem.landing_page.upload_widget.no_images"))}</p>`);
                      }
                      $$renderer7.push(`<!--]--></div>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div>`);
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
    bind_props($$props, { imageURL });
  });
}

export { Upload_widget as U, handleOpenWidget as h, reviewsModalStore as r };
//# sourceMappingURL=upload-widget-E92TgxOV.js.map
