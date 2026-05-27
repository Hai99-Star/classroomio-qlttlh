import { b as spread_props } from './index2-Eg0dVEDW.js';
import { I as Icon } from './Icon-BfkBTjtA.js';
import { c as classroomio } from './index4-3F2xRc80.js';
import { Z as ZCreateSsoConnection, a as ZUpdateSsoConnection, b as ZUpdateSsoPolicy } from './sso-COLElRqe.js';
import { B as BaseApiWithErrors, m as mapZodErrorsToTranslations } from './base.svelte-Bx8dlk4A.js';
import { s as snackbar } from './store-D_AYzDdq.js';
import { t } from './translations-BxDrjLWK.js';

function Shield($$renderer, $$props) {
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
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "shield" },
      /**
       * @component @name Shield
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shield
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
function normalizeSsoConfig(raw) {
  if (raw == null || typeof raw !== "object") {
    return { config: null, policy: null };
  }
  const policy = raw.policy;
  const roleMapping = policy && policy.roleMapping != null && typeof policy.roleMapping === "object" && !Array.isArray(policy.roleMapping) ? policy.roleMapping : {};
  return {
    config: raw.config,
    policy: policy ? { ...policy, roleMapping } : null
  };
}
function normalizeSsoPolicy(policy) {
  if (!policy) return null;
  const roleMapping = policy.roleMapping != null && typeof policy.roleMapping === "object" && !Array.isArray(policy.roleMapping) ? policy.roleMapping : {};
  return { ...policy, roleMapping };
}
class SsoApi extends BaseApiWithErrors {
  config = null;
  /**
   * Fetch SSO configuration for current org
   */
  async getSsoConfig() {
    return this.execute({
      requestFn: () => classroomio.organization.sso.$get(),
      logContext: "fetching SSO configuration",
      onSuccess: (response) => {
        if (response.data != null && typeof response.data === "object") {
          this.config = normalizeSsoConfig(response.data);
        } else {
          this.config = null;
        }
      }
    });
  }
  /**
   * Create new SSO connection
   */
  async createConnection(data) {
    const result = ZCreateSsoConnection.safeParse(data);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    return this.execute({
      requestFn: () => classroomio.organization.sso.$post({ json: result.data }),
      logContext: "creating SSO connection",
      onSuccess: (response) => {
        snackbar.success(t.get("snackbar.success_update"));
        this.config = { config: response.data, policy: this.config?.policy ?? null };
      },
      onError: (error) => {
        if (typeof error === "string") {
          snackbar.error(error);
        } else if ("error" in error) {
          snackbar.error(error.error);
        }
      }
    });
  }
  /**
   * Update SSO connection
   */
  async updateConnection(data) {
    const result = ZUpdateSsoConnection.safeParse(data);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    return this.execute({
      requestFn: () => classroomio.organization.sso.$put({ json: result.data }),
      logContext: "updating SSO connection",
      onSuccess: (response) => {
        snackbar.success(t.get("snackbar.success_update"));
        if (this.config?.config) {
          this.config.config = { ...this.config.config, ...response.data };
        }
      }
    });
  }
  /**
   * Delete SSO connection
   */
  async deleteConnection() {
    return this.execute({
      requestFn: () => classroomio.organization.sso.$delete(),
      logContext: "deleting SSO connection",
      onSuccess: () => {
        snackbar.success(t.get("snackbar.success_update"));
        this.config = null;
      }
    });
  }
  /**
   * Activate SSO connection
   */
  async activateConnection() {
    return this.execute({
      requestFn: () => classroomio.organization.sso.activate.$post(),
      logContext: "activating SSO connection",
      onSuccess: (response) => {
        snackbar.success("SSO connection activated");
        if (this.config?.config) {
          this.config.config.isActive = response.data?.isActive ?? true;
        }
      }
    });
  }
  /**
   * Update SSO policy
   */
  async updatePolicy(data) {
    const result = ZUpdateSsoPolicy.safeParse(data);
    if (!result.success) {
      this.errors = mapZodErrorsToTranslations(result.error);
      return;
    }
    return this.execute({
      requestFn: () => classroomio.organization.sso.policy.$put({ json: result.data }),
      logContext: "updating SSO policy",
      onSuccess: (response) => {
        snackbar.success(t.get("snackbar.success_update"));
        if (this.config) {
          this.config.policy = normalizeSsoPolicy(response.data);
        }
      }
    });
  }
  /**
   * Discover SSO for email
   */
  async discoverSso(email) {
    const result = await this.execute({
      requestFn: () => classroomio.sso.discover.$get({ query: { email } }),
      logContext: "discovering SSO"
    });
    return result?.data ?? null;
  }
  /**
   * Get SSO info for org
   */
  async getOrgSsoInfo(orgId) {
    const result = await this.execute({
      requestFn: () => classroomio.sso.org[":orgId"].$get({ param: { orgId } }),
      logContext: "fetching org SSO info"
    });
    return result?.data ?? null;
  }
}
const ssoApi = new SsoApi();

export { Shield as S, normalizeSsoConfig as n, ssoApi as s };
//# sourceMappingURL=sso.svelte-CrEsaWg-.js.map
