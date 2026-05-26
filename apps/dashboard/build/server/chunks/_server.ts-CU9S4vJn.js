import { c as classroomio } from './index4-DxtvI9Cx.js';
import { s as safeServerApi, g as getApiKeyHeaders } from './server2-CLuZrePM.js';
import { a as PLAN } from './org-BIDTy0Q0.js';
import { T as TOKEN_PACK } from './token-packs-ChXE1kAy.js';
import { W as Webhooks } from './index3-yFUpp4J7.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';
import './utils2-DPSDgWhA.js';
import './index-AIbsv2Pd.js';
import './content-BYLGOVzm.js';
import './translations-BxDrjLWK.js';
import '@sveltekit-i18n/parser-icu';
import 'lodash/merge.js';
import '@polar-sh/sdk';
import '@polar-sh/sdk/webhooks';

class OrgPlanApiServer {
  /**
   * Creates a new organization plan (server-side)
   * @param params Organization plan creation parameters
   * @returns Response data or null on error
   */
  static async createOrgPlan(params) {
    const result = await safeServerApi(
      () => classroomio.organization.plan.$post(
        {
          json: params
        },
        getApiKeyHeaders()
      )
    );
    if (!result.ok) {
      console.error("Error creating org plan (server):", result);
      return null;
    }
    return result.body.data;
  }
  /**
   * Updates an organization plan (server-side)
   * @param params Update parameters (subscriptionId, payload)
   * @returns Response data or null on error
   */
  static async updateOrgPlan(params) {
    const result = await safeServerApi(
      () => classroomio.organization.plan.$put(
        {
          json: params
        },
        getApiKeyHeaders()
      )
    );
    if (!result.ok) {
      console.error("Error updating org plan (server):", result);
      return null;
    }
    return result.body.data;
  }
  /**
   * Cancels an organization plan (server-side)
   * @param params Cancel parameters (subscriptionId, payload)
   * @returns Response data or null on error
   */
  static async cancelOrgPlan(params) {
    const result = await safeServerApi(
      () => classroomio.organization.plan.cancel.$post(
        {
          json: params
        },
        getApiKeyHeaders()
      )
    );
    if (!result.ok) {
      console.error("Error canceling org plan (server):", result);
      return null;
    }
    return result.body.data;
  }
}
class CreditPurchaseApiServer {
  /**
   * Record a token-pack purchase from the Polar webhook (server-side, API key auth).
   */
  static async recordPurchase(params) {
    const result = await safeServerApi(
      () => classroomio.agent.credits.purchase.$post({ json: params }, getApiKeyHeaders())
    );
    if (!result.ok) {
      console.error("Error recording credit purchase (server):", result);
      return null;
    }
    return result.body.data;
  }
}
const POST = Webhooks({
  webhookSecret: private_env.POLAR_WEBHOOK_SECRET,
  onPayload
});
function isSubscriptionPayload(payload) {
  return payload.type === "checkout.created" || payload.type === "checkout.updated" || payload.type.startsWith("subscription.");
}
function isOrderPayload(payload) {
  return payload.type === "order.paid" || payload.type === "order.created" || payload.type === "order.refunded";
}
async function onPayload(payload) {
  console.log("Polar webhook", payload.type);
  if (isOrderPayload(payload)) {
    if (payload.type !== "order.paid") {
      return;
    }
    const order = payload.data;
    const md = order.metadata ?? {};
    if (md.kind !== "token_pack" || !md.orgId) {
      return;
    }
    const quantityFromItems = order.items?.[0]?.quantity;
    const quantityParsed = Number(md.quantity ?? "1");
    const quantity = quantityFromItems != null && quantityFromItems > 0 ? quantityFromItems : Number.isFinite(quantityParsed) && quantityParsed > 0 ? Math.trunc(quantityParsed) : 1;
    const tokensPerUnit = Number(md.tokensPerUnit ?? "") || TOKEN_PACK.TOKENS_PER_UNIT;
    const tokens = quantity * tokensPerUnit;
    const totalCents = order.totalAmount ?? order.amount ?? 0;
    const unitPriceCents = quantity > 0 ? Math.round(totalCents / quantity) : totalCents;
    const triggeredByRaw = md.triggeredBy?.trim();
    let triggeredBy2;
    if (triggeredByRaw && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(triggeredByRaw)) {
      triggeredBy2 = triggeredByRaw;
    }
    try {
      await CreditPurchaseApiServer.recordPurchase({
        orgId: md.orgId,
        triggeredBy: triggeredBy2,
        providerOrderId: order.id,
        tokens,
        quantity,
        unitPriceCents,
        currency: order.currency ?? "USD",
        payload: order
      });
    } catch (error) {
      console.error("Error recording credit purchase", error);
    }
    return;
  }
  if (!isSubscriptionPayload(payload)) {
    console.log("Unknown Polar event", payload.type);
    return;
  }
  const data = payload.data;
  const metadata = data.metadata;
  const orgId = metadata.orgId;
  const triggeredBy = metadata.triggeredBy;
  const subscriptionId = data.id;
  const isSubscriptionActive = data.status === "active";
  switch (payload.type) {
    case "checkout.created":
      break;
    case "checkout.updated":
      break;
    case "subscription.created":
      if (metadata.kind === "token_pack") {
        break;
      }
      if (!orgId || triggeredBy === void 0 || triggeredBy === "") {
        console.error("subscription.created missing org metadata");
        break;
      }
      if (isSubscriptionActive) {
        try {
          const planData = {
            orgId,
            triggeredBy: parseInt(triggeredBy, 10),
            planName: PLAN.EARLY_ADOPTER,
            subscriptionId,
            payload: data
          };
          const result = await OrgPlanApiServer.createOrgPlan(planData);
          console.log("Subscription created", result);
        } catch (error) {
          console.error("Error creating org plan", error);
        }
      }
      break;
    case "subscription.updated":
      if (!isSubscriptionActive) {
        try {
          const result = await OrgPlanApiServer.cancelOrgPlan({
            subscriptionId,
            payload: data
          });
          console.log("Subscription canceled", result);
        } catch (error) {
          console.error("Error canceling org plan", error);
        }
      } else {
        try {
          const result = await OrgPlanApiServer.updateOrgPlan({
            subscriptionId,
            payload: data
          });
          console.log("Subscription updated", result);
        } catch (error) {
          console.error("Error updating org plan", error);
        }
      }
      break;
    case "subscription.active":
      break;
    case "subscription.revoked":
      break;
    case "subscription.canceled":
      break;
    default:
      console.log("Unknown subscription-related event");
      break;
  }
}

export { POST };
//# sourceMappingURL=_server.ts-CU9S4vJn.js.map
