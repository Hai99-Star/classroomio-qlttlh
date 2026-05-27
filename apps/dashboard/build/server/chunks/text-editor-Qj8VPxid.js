import { E as Editor } from './editor-MmeNGOC_.js';

function Text_editor($$renderer, $$props) {
  let {
    content = "",
    showToolBar = true,
    editable = true,
    enablePersistence = false,
    contentStorageKey = "edra-content",
    editableStorageKey = "edra-editable",
    class: className = "",
    editorClass = "",
    placeholder = "Welcome to ClassroomIO",
    onChange,
    onReady,
    onEditorDestroy
  } = $$props;
  Editor($$renderer, {
    content,
    showToolBar,
    editable,
    enablePersistence,
    contentStorageKey,
    editableStorageKey,
    class: className,
    editorClass,
    placeholder,
    onContentChange: onChange,
    onEditorReady: onReady,
    onEditorDestroy
  });
}

export { Text_editor as T };
//# sourceMappingURL=text-editor-Qj8VPxid.js.map
