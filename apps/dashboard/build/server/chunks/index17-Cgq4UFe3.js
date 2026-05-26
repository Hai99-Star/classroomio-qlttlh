import { t as props_id, g as attributes, k as derived, j as clsx, c as bind_props, n as escape_html, l as attr_class, d as attr } from './index2-Eg0dVEDW.js';
import { a4 as box } from './create-id-D7gdjJzW.js';
import { c as cn } from './index6-DijlZyMe.js';
import './underline-tabs-list.svelte_svelte_type_style_lang-BrMEWU2F.js';
import { C as Context } from './context2-Dq8HS6q_.js';
import { H as Hoverable_item } from './hoverable-item-DbC0eVyl.js';

function Upload($$renderer, $$props) {
  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    isHovered = false,
    class: className = ""
  } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className), "svelte-17z3l38")} aria-label="cloud-upload" role="img"><svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"><g${attr_class("svelte-17z3l38", void 0, { "animate": isHovered })}><path d="M12 13v8" class="svelte-17z3l38"></path><path d="m8 17 4-4 4 4" class="svelte-17z3l38"></path></g><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path></svg></div>`);
}
class FileDropZoneState {
  constructor(opts) {
    this.opts = opts;
    if (this.opts.maxFiles !== void 0 && this.opts.fileCount === void 0) {
      console.warn("Make sure to provide FileDropZone with `fileCount` when using the `maxFiles` prompt");
    }
    this.onchange = this.onchange.bind(this);
    this.ondrop = this.ondrop.bind(this);
  }
  uploading = false;
  async ondrop(e) {
    if (this.opts.disabled.current || !this.canUploadFiles) return;
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer?.files ?? []);
    await this.upload(droppedFiles);
  }
  async onchange(e) {
    if (this.opts.disabled.current) return;
    const selectedFiles = e.currentTarget.files;
    if (!selectedFiles) return;
    await this.upload(Array.from(selectedFiles));
    e.target.value = "";
  }
  shouldAcceptFile(file, fileNumber) {
    if (this.opts.maxFileSize.current !== void 0 && file.size > this.opts.maxFileSize.current) return "Maximum file size exceeded";
    if (this.opts.maxFiles.current !== void 0 && fileNumber > this.opts.maxFiles.current) return "Maximum files uploaded";
    if (!this.opts.accept.current) return void 0;
    const acceptedTypes = this.opts.accept.current.split(",").map((a) => a.trim().toLowerCase());
    const fileType = file.type.toLowerCase();
    const fileName = file.name.toLowerCase();
    const isAcceptable = acceptedTypes.some((pattern) => {
      if (fileType === "" || pattern.startsWith(".")) {
        return fileName.endsWith(pattern);
      }
      if (pattern.endsWith("/*")) {
        const baseType = pattern.slice(0, pattern.indexOf("/*"));
        return fileType.startsWith(baseType + "/");
      }
      return fileType === pattern;
    });
    if (!isAcceptable) return "File type not allowed";
    return void 0;
  }
  upload = async (uploadFiles) => {
    this.uploading = true;
    const validFiles = [];
    for (let i = 0; i < uploadFiles.length; i++) {
      const file = uploadFiles[i];
      const rejectedReason = this.shouldAcceptFile(file, (this.opts.fileCount?.current ?? 0) + i + 1);
      if (rejectedReason) {
        this.opts.onFileRejected.current?.({ file, reason: rejectedReason });
        continue;
      }
      validFiles.push(file);
    }
    await this.opts.onUpload.current?.(validFiles);
    this.uploading = false;
  };
  #canUploadFiles = derived(() => {
    if (this.opts.disabled.current) return false;
    if (this.uploading) return false;
    if (this.opts.maxFiles.current !== void 0 && this.opts.fileCount.current !== void 0 && this.opts.fileCount.current >= this.opts.maxFiles.current) return false;
    return true;
  });
  get canUploadFiles() {
    return this.#canUploadFiles();
  }
  set canUploadFiles($$value) {
    return this.#canUploadFiles($$value);
  }
  #props = derived(() => ({
    disabled: !this.canUploadFiles,
    id: this.opts.id.current,
    accept: this.opts.accept.current,
    multiple: this.opts.maxFiles.current === void 0 || this.opts.maxFiles.current - (this.opts.fileCount.current ?? 0) > 1,
    type: "file",
    onchange: this.onchange
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class FileDropZoneTrigger {
  constructor(rootState) {
    this.rootState = rootState;
  }
  ondragover(e) {
    e.preventDefault();
  }
  ondrop(e) {
    this.rootState.ondrop(e);
  }
  #props = derived(() => ({
    ondragover: this.ondragover.bind(this),
    ondrop: this.ondrop.bind(this),
    for: this.rootState.opts.id.current,
    "aria-disabled": !this.rootState.canUploadFiles
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
const ctx = new Context("file-drop-zone-state");
function useFileDropZone(opts) {
  return ctx.set(new FileDropZoneState(opts));
}
function useFileDropZoneTrigger() {
  return new FileDropZoneTrigger(ctx.get());
}
function File_drop_zone($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = uid,
      maxFiles,
      maxFileSize,
      fileCount,
      disabled = false,
      onUpload,
      onFileRejected,
      accept,
      children,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const rootState = useFileDropZone({
      id: box.with(() => id),
      disabled: box.with(() => disabled ?? false),
      onUpload: box.with(() => onUpload),
      maxFiles: box.with(() => maxFiles),
      fileCount: box.with(() => fileCount),
      maxFileSize: box.with(() => maxFileSize),
      onFileRejected: box.with(() => onFileRejected),
      accept: box.with(() => accept)
    });
    $$renderer2.push(`<input${attributes({ class: "ui:hidden", ...rootState.props, ...rest }, void 0, void 0, void 0, 4)}/> `);
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
function File_drop_zone_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      label = "Drag 'n' drop files here, or click to select files",
      formatMaxFiles = (count) => `You can upload ${count} files`,
      formatMaxFilesAndSize = (size) => `(up to ${size} each)`,
      formatMaxSize = (size) => `Maximum size ${size}`,
      $$slots,
      $$events,
      ...rest
    } = $$props;
    const triggerState = useFileDropZoneTrigger();
    $$renderer2.push(`<label${attributes({
      class: clsx(cn("ui:group/file-drop-zone-trigger", className)),
      ...triggerState.props,
      ...rest
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      {
        let children2 = function($$renderer3, isHovered) {
          $$renderer3.push(`<div class="ui:flex ui:flex-col ui:place-items-center ui:justify-center ui:gap-2"><div class="ui:border-border ui:text-muted-foreground ui:flex ui:size-14 ui:place-items-center ui:justify-center ui:rounded-full ui:border ui:border-dashed">`);
          Upload($$renderer3, { isHovered, size: 28, class: "ui:size-7" });
          $$renderer3.push(`<!----></div> <div class="ui:flex ui:flex-col ui:gap-0.5 ui:text-center"><span class="ui:text-muted-foreground">${escape_html(label)}</span> `);
          if (triggerState.rootState.opts.maxFiles.current || triggerState.rootState.opts.maxFileSize.current) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="ui:text-muted-foreground/75 ui:text-sm">`);
            if (triggerState.rootState.opts.maxFiles.current) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span>${escape_html(formatMaxFiles(triggerState.rootState.opts.maxFiles.current))}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (triggerState.rootState.opts.maxFiles.current && triggerState.rootState.opts.maxFileSize.current) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span>${escape_html(formatMaxFilesAndSize(displaySize(triggerState.rootState.opts.maxFileSize.current)))}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (triggerState.rootState.opts.maxFileSize.current && !triggerState.rootState.opts.maxFiles.current) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span>${escape_html(formatMaxSize(displaySize(triggerState.rootState.opts.maxFileSize.current)))}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div></div>`);
        };
        Hoverable_item($$renderer2, {
          class: "ui:hover:bg-accent/25 ui:flex ui:h-48 ui:flex-col ui:place-items-center ui:justify-center ui:gap-2 ui:rounded-lg ui:border ui:border-dashed ui:p-6 ui:transition-all ui:group-aria-disabled/file-drop-zone-trigger:ui:opacity-50 ui:hover:cursor-pointer ui:group-aria-disabled/file-drop-zone-trigger:ui:hover:cursor-not-allowed",
          children: children2
        });
      }
    }
    $$renderer2.push(`<!--]--></label>`);
    bind_props($$props, { ref });
  });
}
function displaySize(bytes) {
  if (bytes < KILOBYTE) return `${bytes.toFixed(0)} B`;
  if (bytes < MEGABYTE) return `${(bytes / KILOBYTE).toFixed(0)} KB`;
  if (bytes < GIGABYTE) return `${(bytes / MEGABYTE).toFixed(0)} MB`;
  return `${(bytes / GIGABYTE).toFixed(0)} GB`;
}
const KILOBYTE = 1e3;
const MEGABYTE = 1e3 * KILOBYTE;
const GIGABYTE = 1e3 * MEGABYTE;
const ACCEPT_IMAGE = "image/*";

export { ACCEPT_IMAGE as A, File_drop_zone as F, KILOBYTE as K, MEGABYTE as M, File_drop_zone_trigger as a };
//# sourceMappingURL=index17-Cgq4UFe3.js.map
