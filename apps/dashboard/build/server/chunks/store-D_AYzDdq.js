import { w as writable } from './index-AIbsv2Pd.js';

const SNACKBAR_SEVERITY = {
  ERROR: "ERROR",
  DEFAULT: "DEFAULT",
  INFO: "INFO",
  SUCCESS: "SUCCESS"
};
const snackbarStoreInitialState = {
  open: false,
  message: "",
  severity: SNACKBAR_SEVERITY.DEFAULT,
  handleClose: () => {
  },
  autoHideDuration: 6e3
};
const snackbarStore = writable({ ...snackbarStoreInitialState });
const snackbar = {
  success(message = "snackbar.success") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.SUCCESS;
      return store;
    });
  },
  error(message = "snackbar.something") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.ERROR;
      return store;
    });
  },
  info(message = "snackbar.updates") {
    snackbarStore.update((store) => {
      store.open = true;
      store.message = message;
      store.severity = SNACKBAR_SEVERITY.INFO;
      return store;
    });
  }
};

export { snackbar as s };
//# sourceMappingURL=store-D_AYzDdq.js.map
