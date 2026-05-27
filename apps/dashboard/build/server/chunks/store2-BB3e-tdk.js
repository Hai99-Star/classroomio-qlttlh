import { C as ContentType } from './content-BYLGOVzm.js';
import { w as writable } from './index-AIbsv2Pd.js';

const contentCreateStore = writable({
  open: false,
  sectionId: "",
  initialType: ContentType.Section,
  skipTypeSelection: false
});
const contentCreateStoreUtils = {
  openContentUnit: (sectionId) => {
    contentCreateStore.set({
      open: true,
      sectionId,
      initialType: ContentType.Lesson,
      skipTypeSelection: false
    });
  },
  openSection: () => {
    contentCreateStore.set({
      open: true,
      sectionId: "",
      initialType: ContentType.Section,
      skipTypeSelection: true
    });
  },
  openDefault: () => {
    contentCreateStore.set({
      open: true,
      sectionId: "",
      initialType: ContentType.Lesson,
      skipTypeSelection: false
    });
  },
  close: () => {
    contentCreateStore.set({
      open: false,
      sectionId: "",
      initialType: ContentType.Lesson,
      skipTypeSelection: false
    });
  }
};
const contentEditingStore = writable(void 0);

export { contentCreateStoreUtils as a, contentEditingStore as b, contentCreateStore as c };
//# sourceMappingURL=store2-BB3e-tdk.js.map
