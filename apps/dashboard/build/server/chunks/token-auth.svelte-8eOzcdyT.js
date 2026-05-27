import { c as classroomio } from './index4-CY3O4yvX.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { B as BaseApiWithErrors } from './base.svelte-Bh2VVy5Z.js';

const tokenAuthClient = classroomio.organization["token-auth"];
class TokenAuthApi extends BaseApiWithErrors {
  tokenAuth = null;
  generatedSecret = null;
  isFetched = false;
  async getStatus() {
    return this.execute({
      requestFn: () => tokenAuthClient.$get(),
      logContext: "fetching token auth status",
      onSuccess: (response) => {
        this.tokenAuth = response.data;
        this.isFetched = true;
      }
    });
  }
  async generateSecret() {
    return this.execute({
      requestFn: () => tokenAuthClient.$post(),
      logContext: "creating token auth",
      onSuccess: (response) => {
        this.generatedSecret = response.data?.secret ?? null;
        this.tokenAuth = response.data ? {
          isActive: response.data.isActive,
          createdAt: response.data.createdAt,
          secretLast4: response.data.secret ? response.data.secret.slice(-4) : null
        } : null;
        snackbar.success("snackbar.token_auth.created");
      }
    });
  }
  async rotateSecret() {
    return this.execute({
      requestFn: () => tokenAuthClient.rotate.$post(),
      logContext: "rotating token auth secret",
      onSuccess: (response) => {
        this.generatedSecret = response.data?.secret ?? null;
        snackbar.success("snackbar.token_auth.rotated");
      }
    });
  }
  async deleteTokenAuth() {
    return this.execute({
      requestFn: () => tokenAuthClient.$delete(),
      logContext: "deleting token auth",
      onSuccess: () => {
        this.tokenAuth = null;
        this.generatedSecret = null;
        snackbar.success("snackbar.token_auth.deleted");
      }
    });
  }
  async activateTokenAuth(isActive) {
    return this.execute({
      requestFn: () => tokenAuthClient.activate.$put({ json: { isActive } }),
      logContext: "updating token auth activation",
      onSuccess: () => {
        if (this.tokenAuth) {
          this.tokenAuth = { ...this.tokenAuth, isActive };
        }
        snackbar.success(isActive ? "snackbar.token_auth.activated" : "snackbar.token_auth.deactivated");
      }
    });
  }
}
const tokenAuthApi = new TokenAuthApi();

export { tokenAuthApi as t };
//# sourceMappingURL=token-auth.svelte-8eOzcdyT.js.map
