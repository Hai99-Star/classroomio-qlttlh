import { Polar } from '@polar-sh/sdk';
import { validateEvent, WebhookVerificationError } from '@polar-sh/sdk/webhooks';

var handleWebhookPayload = async (payload, { webhookSecret, entitlements, onPayload, ...eventHandlers }) => {
  const promises = [];
  if (onPayload) {
    promises.push(onPayload(payload));
  }
  switch (payload.type) {
    case "checkout.created":
      if (eventHandlers.onCheckoutCreated) {
        promises.push(eventHandlers.onCheckoutCreated(payload));
      }
      break;
    case "checkout.updated":
      if (eventHandlers.onCheckoutUpdated) {
        promises.push(eventHandlers.onCheckoutUpdated(payload));
      }
      break;
    case "order.created":
      if (eventHandlers.onOrderCreated) {
        promises.push(eventHandlers.onOrderCreated(payload));
      }
      break;
    case "order.updated":
      if (eventHandlers.onOrderUpdated) {
        promises.push(eventHandlers.onOrderUpdated(payload));
      }
      break;
    case "order.paid":
      if (eventHandlers.onOrderPaid) {
        promises.push(eventHandlers.onOrderPaid(payload));
      }
      break;
    case "subscription.created":
      if (eventHandlers.onSubscriptionCreated) {
        promises.push(eventHandlers.onSubscriptionCreated(payload));
      }
      break;
    case "subscription.updated":
      if (eventHandlers.onSubscriptionUpdated) {
        promises.push(eventHandlers.onSubscriptionUpdated(payload));
      }
      break;
    case "subscription.active":
      if (eventHandlers.onSubscriptionActive) {
        promises.push(eventHandlers.onSubscriptionActive(payload));
      }
      break;
    case "subscription.canceled":
      if (eventHandlers.onSubscriptionCanceled) {
        promises.push(eventHandlers.onSubscriptionCanceled(payload));
      }
      break;
    case "subscription.uncanceled":
      if (eventHandlers.onSubscriptionUncanceled) {
        promises.push(eventHandlers.onSubscriptionUncanceled(payload));
      }
      break;
    case "subscription.revoked":
      if (eventHandlers.onSubscriptionRevoked) {
        promises.push(eventHandlers.onSubscriptionRevoked(payload));
      }
      break;
    case "product.created":
      if (eventHandlers.onProductCreated) {
        promises.push(eventHandlers.onProductCreated(payload));
      }
      break;
    case "product.updated":
      if (eventHandlers.onProductUpdated) {
        promises.push(eventHandlers.onProductUpdated(payload));
      }
      break;
    case "organization.updated":
      if (eventHandlers.onOrganizationUpdated) {
        promises.push(eventHandlers.onOrganizationUpdated(payload));
      }
      break;
    case "benefit.created":
      if (eventHandlers.onBenefitCreated) {
        promises.push(eventHandlers.onBenefitCreated(payload));
      }
      break;
    case "benefit.updated":
      if (eventHandlers.onBenefitUpdated) {
        promises.push(eventHandlers.onBenefitUpdated(payload));
      }
      break;
    case "benefit_grant.created":
      if (eventHandlers.onBenefitGrantCreated) {
        promises.push(eventHandlers.onBenefitGrantCreated(payload));
      }
      break;
    case "benefit_grant.updated":
      if (eventHandlers.onBenefitGrantUpdated) {
        promises.push(eventHandlers.onBenefitGrantUpdated(payload));
      }
      break;
    case "benefit_grant.revoked":
      if (eventHandlers.onBenefitGrantRevoked) {
        promises.push(eventHandlers.onBenefitGrantRevoked(payload));
      }
      break;
    case "customer.created":
      if (eventHandlers.onCustomerCreated) {
        promises.push(eventHandlers.onCustomerCreated(payload));
      }
      break;
    case "customer.updated":
      if (eventHandlers.onCustomerUpdated) {
        promises.push(eventHandlers.onCustomerUpdated(payload));
      }
      break;
    case "customer.deleted":
      if (eventHandlers.onCustomerDeleted) {
        promises.push(eventHandlers.onCustomerDeleted(payload));
      }
      break;
    case "customer.state_changed":
      if (eventHandlers.onCustomerStateChanged) {
        promises.push(eventHandlers.onCustomerStateChanged(payload));
      }
      break;
    case "order.refunded":
      if (eventHandlers.onOrderRefunded) {
        promises.push(eventHandlers.onOrderRefunded(payload));
      }
      break;
    case "refund.created":
      if (eventHandlers.onRefundCreated) {
        promises.push(eventHandlers.onRefundCreated(payload));
      }
      break;
    case "refund.updated":
      if (eventHandlers.onRefundUpdated) {
        promises.push(eventHandlers.onRefundUpdated(payload));
      }
      break;
  }
  switch (payload.type) {
    case "benefit_grant.created":
    case "benefit_grant.revoked":
      if (entitlements) {
        for (const handler of entitlements.handlers) {
          promises.push(handler(payload));
        }
      }
  }
  return Promise.all(promises);
};
const Checkout = ({ accessToken, successUrl, returnUrl, server, theme, includeCheckoutId = true }) => {
  const polar = new Polar({ accessToken, server });
  return async (event) => {
    const url = new URL(event.request.url);
    const products = url.searchParams.getAll("products");
    if (products.length === 0) {
      return new Response(JSON.stringify({
        error: "Missing products in query params"
      }), { status: 400 });
    }
    const success = successUrl ? new URL(successUrl, event.url) : void 0;
    if (success && includeCheckoutId) {
      success.searchParams.set("checkoutId", "{CHECKOUT_ID}");
    }
    const retUrl = returnUrl ? new URL(returnUrl, event.url) : void 0;
    try {
      const result = await polar.checkouts.create({
        products,
        successUrl: success ? decodeURI(success.toString()) : void 0,
        customerId: url.searchParams.get("customerId") ?? void 0,
        externalCustomerId: url.searchParams.get("customerExternalId") ?? void 0,
        customerEmail: url.searchParams.get("customerEmail") ?? void 0,
        customerName: url.searchParams.get("customerName") ?? void 0,
        customerBillingAddress: url.searchParams.has("customerBillingAddress") ? JSON.parse(url.searchParams.get("customerBillingAddress") ?? "{}") : void 0,
        customerTaxId: url.searchParams.get("customerTaxId") ?? void 0,
        customerIpAddress: url.searchParams.get("customerIpAddress") ?? void 0,
        customerMetadata: url.searchParams.has("customerMetadata") ? JSON.parse(url.searchParams.get("customerMetadata") ?? "{}") : void 0,
        allowDiscountCodes: url.searchParams.has("allowDiscountCodes") ? url.searchParams.get("allowDiscountCodes") === "true" : void 0,
        discountId: url.searchParams.get("discountId") ?? void 0,
        metadata: url.searchParams.has("metadata") ? JSON.parse(url.searchParams.get("metadata") ?? "{}") : void 0,
        returnUrl: retUrl ? decodeURI(retUrl.toString()) : void 0
      });
      const redirectUrl = new URL(result.url);
      if (theme) {
        redirectUrl.searchParams.set("theme", theme);
      }
      return new Response(null, {
        status: 302,
        headers: { Location: redirectUrl.toString() }
      });
    } catch (error) {
      console.error("Catch checkout error", error);
      return new Response(null, { status: 500 });
    }
  };
};
function configIsExternalCustomerIdConfig(config) {
  return typeof config.getExternalCustomerId === "function";
}
const CustomerPortal = (config) => {
  const { accessToken, server, returnUrl } = config;
  const polar = new Polar({
    accessToken,
    server
  });
  return async (event) => {
    try {
      const decodedReturnUrl = returnUrl ? decodeURI(new URL(returnUrl, event.url).toString()) : void 0;
      if (configIsExternalCustomerIdConfig(config)) {
        const externalCustomerId = await config.getExternalCustomerId(event);
        if (!externalCustomerId) {
          return new Response(JSON.stringify({ error: `getExternalCustomerId not defined` }), { status: 400 });
        }
        const { customerPortalUrl: customerPortalUrl2 } = await polar.customerSessions.create({
          returnUrl: decodedReturnUrl,
          externalCustomerId
        });
        return new Response(null, {
          status: 302,
          headers: { Location: customerPortalUrl2 }
        });
      }
      const customerId = await config.getCustomerId(event);
      if (!customerId) {
        return new Response(JSON.stringify({ error: `customerId not defined` }), { status: 400 });
      }
      const { customerPortalUrl } = await polar.customerSessions.create({
        returnUrl: decodedReturnUrl,
        customerId
      });
      return new Response(null, {
        status: 302,
        headers: { Location: customerPortalUrl }
      });
    } catch (error) {
      console.error(error);
      return new Response(null, { status: 500 });
    }
  };
};
const Webhooks = ({ webhookSecret, entitlements, onPayload, ...eventHandlers }) => {
  return async (event) => {
    const requestBody = await event.request.text();
    const webhookHeaders = {
      "webhook-id": event.request.headers.get("webhook-id") ?? "",
      "webhook-timestamp": event.request.headers.get("webhook-timestamp") ?? "",
      "webhook-signature": event.request.headers.get("webhook-signature") ?? ""
    };
    let webhookPayload;
    try {
      webhookPayload = validateEvent(requestBody, webhookHeaders, webhookSecret);
    } catch (error) {
      if (error instanceof WebhookVerificationError) {
        return new Response(JSON.stringify({ received: false }), {
          status: 403
        });
      }
      throw error;
    }
    await handleWebhookPayload(webhookPayload, {
      webhookSecret,
      entitlements,
      onPayload,
      ...eventHandlers
    });
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  };
};

export { CustomerPortal as C, Webhooks as W, Checkout as a };
//# sourceMappingURL=index3-yFUpp4J7.js.map
