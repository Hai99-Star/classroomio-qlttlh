import { c as bind_props, l as attr_class, e as stringify, g as attributes, n as escape_html, a as store_get, u as unsubscribe_stores, j as clsx, b as spread_props, d as attr, m as attr_style } from './index2-Eg0dVEDW.js';
import { P as Progress } from './progress-C-m28_ec.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { C as Context } from './context2-Dq8HS6q_.js';
import { o as onDestroy } from './index-server-CicpYXzh.js';
import { u as useId } from './scroll-lock-CqTUXsNd.js';
import { a4 as box } from './create-id-D7gdjJzW.js';
import { c as cn } from './index6-DijlZyMe.js';
import { A as Avatar, a as Avatar_image, b as Avatar_fallback } from './avatar-fallback-CG2pdu70.js';
import { I as Icon$1, B as Button } from './button-McsHA0hU.js';
import { R as Root, D as Dialog_content } from './index7-D3vVTB5p.js';
import './Cropper.svelte_svelte_type_style_lang-CEajC662.js';
import { T as Trash_2 } from './trash-22-Dx9O7WWV.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { t } from './translations-BxDrjLWK.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { P as Pencil } from './pencil-DAMrDWiT.js';

const createImage = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });
};
const getRadianAngle = (degreeValue) => {
  return degreeValue * Math.PI / 180;
};
const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Error getting 2d rendering context");
  }
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2));
  canvas.width = safeArea;
  canvas.height = safeArea;
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);
  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea);
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, "image/png");
  });
};
const VALID_IMAGE_TYPES = [
  "image/apng",
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
class ImageCropperRootState {
  constructor(opts) {
    this.opts = opts;
    this.onUpload = this.onUpload.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCrop = this.onCrop.bind(this);
    this.dispose = this.dispose.bind(this);
  }
  #createdUrls = [];
  open = false;
  tempUrl;
  pixelCrop;
  get disabled() {
    return this.opts.disabled?.current ?? false;
  }
  onUpload(file) {
    if (this.disabled) {
      return;
    }
    if (this.opts.maxFileSize?.current !== void 0) {
      const maxFileSize = this.opts.maxFileSize.current;
      if (file.size > maxFileSize) {
        this.opts.onUnsupportedFile.current(file);
        return;
      }
    }
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      this.opts.onUnsupportedFile.current(file);
      return;
    }
    this.tempUrl = URL.createObjectURL(file);
    this.#createdUrls.push(this.tempUrl);
    this.open = true;
  }
  onCancel() {
    this.tempUrl = void 0;
    this.open = false;
    this.pixelCrop = void 0;
  }
  async onCrop() {
    if (!this.pixelCrop || !this.tempUrl) return;
    this.opts.src.current = await getCroppedImg(this.tempUrl, this.pixelCrop);
    this.open = false;
    this.opts.onCropped.current(this.opts.src.current);
  }
  get src() {
    return this.opts.src.current;
  }
  get id() {
    return this.opts.id.current;
  }
  dispose() {
    for (const url of this.#createdUrls) {
      URL.revokeObjectURL(url);
    }
  }
}
class ImageCropperTriggerState {
  constructor(rootState) {
    this.rootState = rootState;
  }
}
class ImageCropperPreviewState {
  constructor(rootState) {
    this.rootState = rootState;
  }
}
class ImageCropperDialogState {
  constructor(rootState) {
    this.rootState = rootState;
  }
}
class ImageCropperCropperState {
  constructor(rootState) {
    this.rootState = rootState;
    this.onCropComplete = this.onCropComplete.bind(this);
  }
  onCropComplete(e) {
    this.rootState.pixelCrop = e.pixels;
  }
}
class ImageCropperCropState {
  constructor(rootState) {
    this.rootState = rootState;
    this.onclick = this.onclick.bind(this);
  }
  onclick() {
    this.rootState.onCrop();
  }
}
class ImageCropperCancelState {
  constructor(rootState) {
    this.rootState = rootState;
    this.onclick = this.onclick.bind(this);
  }
  onclick() {
    this.rootState.onCancel();
  }
}
const ImageCropperRootContext = new Context("ImageCropper.Root");
const useImageCropperRoot = (props) => {
  return ImageCropperRootContext.set(new ImageCropperRootState(props));
};
const useImageCropperTrigger = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperTriggerState(rootState);
};
const useImageCropperPreview = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperPreviewState(rootState);
};
const useImageCropperDialog = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperDialogState(rootState);
};
const useImageCropperCropper = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperCropperState(rootState);
};
const useImageCropperCrop = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperCropState(rootState);
};
const useImageCropperCancel = () => {
  const rootState = ImageCropperRootContext.get();
  return new ImageCropperCancelState(rootState);
};
function Image_cropper($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      id = useId(),
      src = "",
      onCropped = () => {
      },
      onUnsupportedFile = () => {
      },
      maxFileSize,
      disabled = false,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const rootState = useImageCropperRoot({
      id: box.with(() => id),
      src: box.with(() => src, (v) => src = v),
      onCropped: box.with(() => onCropped),
      onUnsupportedFile: box.with(() => onUnsupportedFile),
      maxFileSize: box.with(() => maxFileSize),
      disabled: box.with(() => disabled ?? void 0)
    });
    onDestroy(() => rootState.dispose());
    children?.($$renderer2);
    $$renderer2.push(`<!----> <input${attributes(
      {
        ...rest,
        type: "file",
        // reset so that we can reupload the same file
        id,
        style: "display: none;"
      },
      void 0,
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { src });
  });
}
function Image_cropper_upload_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, children, $$slots, $$events, ...rest } = $$props;
    const triggerState = useImageCropperTrigger();
    const isDisabled = triggerState.rootState.disabled;
    $$renderer2.push(`<label${attributes({
      ...rest,
      for: isDisabled ? void 0 : triggerState.rootState.id,
      class: clsx(cn("ui:cursor-pointer", isDisabled ? "ui:cursor-not-allowed ui:opacity-50 ui:pointer-events-none" : "")),
      "aria-disabled": isDisabled
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></label>`);
    bind_props($$props, { ref });
  });
}
function Upload($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M12 3v12" }],
      ["path", { "d": "m17 8-5-5-5 5" }],
      ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
    ];
    Icon$1($$renderer2, spread_props([
      { name: "upload" },
      /**
       * @component @name Upload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3YxMiIgLz4KICA8cGF0aCBkPSJtMTcgOC01LTUtNSA1IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/upload
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Image_cropper_preview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { child, class: className } = $$props;
    const previewState = useImageCropperPreview();
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { src: previewState.rootState.src });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      Avatar($$renderer2, {
        class: cn("ui:ring-accent ui:ring-offset-background ui:size-20 ui:ring-2 ui:ring-offset-2", className),
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Avatar_image($$renderer3, { src: previewState.rootState.src });
          $$renderer3.push(`<!----> <!---->`);
          Avatar_fallback($$renderer3, {
            children: ($$renderer4) => {
              Upload($$renderer4, { class: "ui:size-4" });
              $$renderer4.push(`<!----> <span class="ui:sr-only">Upload image</span>`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Image_cropper_dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, class: className, $$slots, $$events, ...rest } = $$props;
    const dialogState = useImageCropperDialog();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        get open() {
          return dialogState.rootState.open;
        },
        set open($$value) {
          dialogState.rootState.open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, spread_props([
            rest,
            {
              showCloseButton: true,
              class: cn("ui:min-h-96 ui:max-w-[60%] ui:rounded-none ui:border-x-0 ui:sm:ui:max-w-lg ui:sm:ui:rounded-lg ui:sm:ui:border-x", className),
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="ui:flex ui:flex-col ui:gap-4">`);
                children?.($$renderer5);
                $$renderer5.push(`<!----></div>`);
              },
              $$slots: { default: true }
            }
          ]));
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
  });
}
function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
function Cropper($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      image,
      crop = { x: 0, y: 0 },
      zoom = 1,
      minZoom = 1,
      maxZoom = 3,
      aspect = 4 / 3,
      cropSize = null,
      cropShape = "rect",
      showGrid = true,
      zoomSpeed = 1,
      crossOrigin = null,
      restrictPosition = true,
      tabindex = void 0,
      oncropcomplete
    } = $$props;
    let rafDragTimeout = null;
    let rafZoomTimeout = null;
    onDestroy(() => {
      cleanEvents();
    });
    const cleanEvents = () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onDragStopped);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onDragStopped);
      }
    };
    const getMousePoint = (e) => ({ x: Number(e.clientX), y: Number(e.clientY) });
    const getTouchPoint = (touch) => ({ x: Number(touch.clientX), y: Number(touch.clientY) });
    const onMouseMove = (e) => onDrag(getMousePoint(e));
    const onTouchMove = (e) => {
      e.preventDefault();
      if (e.touches.length === 2) {
        onPinchMove(e);
      } else if (e.touches.length === 1) {
        onDrag(getTouchPoint(e.touches[0]));
      }
    };
    const onDrag = ({ x, y }) => {
      if (rafDragTimeout) window.cancelAnimationFrame(rafDragTimeout);
      rafDragTimeout = window.requestAnimationFrame(() => {
        return;
      });
    };
    const onDragStopped = () => {
      cleanEvents();
      emitCropData();
    };
    const onPinchMove = (e) => {
      const pointA = getTouchPoint(e.touches[0]);
      const pointB = getTouchPoint(e.touches[1]);
      const center = getCenter(pointA, pointB);
      onDrag(center);
      if (rafZoomTimeout) window.cancelAnimationFrame(rafZoomTimeout);
      rafZoomTimeout = window.requestAnimationFrame(() => {
        setNewZoom();
      });
    };
    const setNewZoom = (newZoom, point) => {
      return;
    };
    const emitCropData = () => {
      return;
    };
    $$renderer2.push(`<div class="svelte-easy-crop-container svelte-cimop"${attr("tabindex", tabindex)} role="button" data-testid="container"><img class="svelte-easy-crop-image svelte-cimop"${attr("src", image)} alt=""${attr_style(`transform: translate(${stringify(crop.x)}px, ${stringify(crop.y)}px) scale(${stringify(zoom)});`)}${attr("crossorigin", crossOrigin)} onload="this.__e=event"/> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { crop, zoom, minZoom, maxZoom });
  });
}
function Image_cropper_cropper($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      cropShape = "round",
      aspect = 1,
      showGrid = false,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const cropperState = useImageCropperCropper();
    $$renderer2.push(`<div class="ui:relative ui:h-full ui:w-full">`);
    Cropper($$renderer2, spread_props([
      rest,
      {
        cropShape,
        aspect,
        showGrid,
        image: cropperState.rootState.tempUrl,
        oncropcomplete: cropperState.onCropComplete
      }
    ]));
    $$renderer2.push(`<!----></div>`);
  });
}
function Image_cropper_controls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    $$renderer2.push(`<div${attributes({
      ...rest,
      class: clsx(cn("ui:flex ui:w-full ui:place-items-center ui:justify-center ui:gap-2", className))
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Crop($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.562.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M6 2v14a2 2 0 0 0 2 2h14" }],
      ["path", { "d": "M18 22V8a2 2 0 0 0-2-2H2" }]
    ];
    Icon$1($$renderer2, spread_props([
      { name: "crop" },
      /**
       * @component @name Crop
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAydjE0YTIgMiAwIDAgMCAyIDJoMTQiIC8+CiAgPHBhdGggZD0iTTE4IDIyVjhhMiAyIDAgMCAwLTItMkgyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/crop
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Image_cropper_crop($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      variant = "default",
      size = "sm",
      onclick,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const cropState = useImageCropperCrop();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Button($$renderer3, spread_props([
        rest,
        {
          size,
          variant,
          onclick: (e) => {
            onclick?.(e);
            cropState.onclick();
          },
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            Crop($$renderer4, {});
            $$renderer4.push(`<!----> <span>Crop</span>`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Image_cropper_cancel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      variant = "outline",
      size = "sm",
      onclick,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const cancelState = useImageCropperCancel();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Button($$renderer3, spread_props([
        rest,
        {
          size,
          variant,
          onclick: (e) => {
            onclick?.(e);
            cancelState.onclick();
          },
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            Trash_2($$renderer4, {});
            $$renderer4.push(`<!----> <span>Cancel</span>`);
          },
          $$slots: { default: true }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Camera($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.545.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
        }
      ],
      ["circle", { "cx": "12", "cy": "13", "r": "3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "camera" },
      /**
       * @component @name Camera
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuOTk3IDRhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjlBMiAyIDAgMCAwIDE4LjAwMyA3SDIwYTIgMiAwIDAgMSAyIDJ2OWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoMS45OTdhMiAyIDAgMCAwIDEuNzU5LTEuMDQ4bC40ODktLjkwNEEyIDIgMCAwIDEgMTAuMDA0IDR6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/camera
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
function validateImageType(file) {
  return ALLOWED_IMAGE_TYPES.includes(file.type);
}
function validateImageExtension(filename) {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf("."));
  return ALLOWED_EXTENSIONS.includes(extension);
}
function validateImageUpload(file) {
  if (!validateImageType(file)) {
    return {
      isValid: false,
      error: "Invalid file type. Only JPEG, PNG, GIF, and WebP files are allowed."
    };
  }
  if (!validateImageExtension(file.name)) {
    return {
      isValid: false,
      error: "Invalid file extension. Only .jpg, .jpeg, .png, .gif, and .webp files are allowed."
    };
  }
  if (file.name.toLowerCase().includes(".svg")) {
    return {
      isValid: false,
      error: "SVG files are not allowed for security reasons."
    };
  }
  return { isValid: true };
}
function Upload_image($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      avatar = void 0,
      src = void 0,
      widthHeight = "",
      shape = "rounded-full",
      errorMessage = null,
      isDisabled = false,
      maxFileSizeInMb = 2,
      flexDirection = "flex-col",
      isUploading = false,
      change
    } = $$props;
    const defaultImg = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";
    let cropperSrc = src || "";
    const onCropped = async (croppedUrl) => {
      const response = await fetch(croppedUrl);
      const blob = await response.blob();
      const file = new File([blob], "cropped-image.png", { type: blob.type });
      const validation = validateImageUpload(file);
      if (!validation.isValid) {
        snackbar.error(validation.error || "Invalid file type");
        errorMessage = store_get($$store_subs ??= {}, "$t", t)("snackbar.landing_page_settings.error.try_again");
        cropperSrc = "";
        return;
      }
      avatar = file;
      src = croppedUrl;
      cropperSrc = croppedUrl;
      change?.();
      errorMessage = null;
    };
    const onUnsupportedFile = (file) => {
      const maxFileSizeInBytes = maxFileSizeInMb * 1024 * 1024;
      if (file.size > maxFileSizeInBytes) {
        errorMessage = `${store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.validation_error")} File size exceeds ${maxFileSizeInMb}MB limit`;
        return;
      }
      errorMessage = `${store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.validation_error")} Unsupported file type: ${file.type}`;
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<section${attr_class(`flex w-fit p-3 ${stringify(flexDirection)} items-center justify-between gap-2`)}><!---->`);
      Image_cropper($$renderer3, {
        onCropped,
        onUnsupportedFile,
        maxFileSize: maxFileSizeInMb * 1024 * 1024,
        accept: ".jpg, .jpeg, .png, .webp",
        disabled: isDisabled || isUploading,
        get src() {
          return cropperSrc;
        },
        set src($$value) {
          cropperSrc = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Image_cropper_upload_trigger($$renderer4, {
            "aria-disabled": isDisabled || isUploading,
            children: ($$renderer5) => {
              $$renderer5.push(`<div${attr_class(`avatar-container ${stringify(widthHeight || "h-[128px] w-[128px]")} pointer border-2 border-gray-200 ${stringify(shape)}`)}><!---->`);
              {
                let child = function($$renderer6, { src: imageSrc }) {
                  $$renderer6.push(`<div class="group relative h-full w-full"><img${attr_class(`h-full w-full ${stringify(shape)}`)}${attr("src", imageSrc || defaultImg)} alt=""/> <div${attr_class(`absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${stringify(shape)}`)}>`);
                  Pencil($$renderer6, { class: "stroke-white", size: 16 });
                  $$renderer6.push(`<!----></div></div>`);
                };
                Image_cropper_preview($$renderer5, { child });
              }
              $$renderer5.push(`<!----></div> <div class="mt-1 flex flex-col items-center">`);
              if (isUploading) {
                $$renderer5.push("<!--[-->");
                Progress($$renderer5, {});
              } else {
                $$renderer5.push("<!--[!-->");
                Camera($$renderer5, { size: 16 });
              }
              $$renderer5.push(`<!--]--> <span class="text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.upload_image"))}</span></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <div class="flex flex-col items-center"><p class="text-center text-xs text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.file_size"))}
        ${escape_html(maxFileSizeInMb)}MB<br/> ${escape_html(store_get($$store_subs ??= {}, "$t", t)("settings.profile.profile_picture.accepted"))}: jpeg, jpg, png, webp</p> `);
          if (errorMessage) {
            $$renderer4.push("<!--[-->");
            $$renderer4.push(`<p class="text-sm text-red-500">${escape_html(errorMessage)}</p>`);
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--></div> <!---->`);
          Image_cropper_dialog($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Image_cropper_cropper($$renderer5, { cropShape: shape === "rounded-full" ? "round" : "rect" });
              $$renderer5.push(`<!----> <!---->`);
              Image_cropper_controls($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Image_cropper_cancel($$renderer6, {});
                  $$renderer6.push(`<!----> <!---->`);
                  Image_cropper_crop($$renderer6, {});
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----></section>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { avatar, src, errorMessage, isUploading });
  });
}

export { Upload_image as U };
//# sourceMappingURL=upload-image-Cb40_J84.js.map
