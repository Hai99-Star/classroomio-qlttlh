import { Polar } from '@polar-sh/sdk';
import { T as TOKEN_PACK } from './token-packs-ChXE1kAy.js';
import { b as private_env } from './shared-server-DaWdgxVh.js';

const GET = async ({ url }) => {
  const quantityRaw = Number(url.searchParams.get("quantity") ?? "1");
  const quantity = Math.min(100, Math.max(1, Number.isFinite(quantityRaw) ? Math.trunc(quantityRaw) : 1));
  let metadata;
  try {
    metadata = JSON.parse(url.searchParams.get("metadata") ?? "{}");
  } catch {
    return new Response("Invalid metadata JSON", { status: 400 });
  }
  if (!metadata.orgId || !metadata.orgSlug) {
    return new Response("Missing orgId / orgSlug in metadata", { status: 400 });
  }
  const productId = private_env.POLAR_TOKEN_PACK_PRODUCT_ID;
  if (!productId) {
    return new Response("POLAR_TOKEN_PACK_PRODUCT_ID is not configured", { status: 500 });
  }
  if (!private_env.POLAR_ACCESS_TOKEN) {
    return new Response("POLAR_ACCESS_TOKEN is not configured", { status: 500 });
  }
  const polar = new Polar({
    accessToken: private_env.POLAR_ACCESS_TOKEN,
    server: "production"
  });
  const totalPriceCents = TOKEN_PACK.PRICE_USD_CENTS * quantity;
  const checkout = await polar.checkouts.create({
    products: [productId],
    prices: {
      [productId]: [
        {
          amountType: "fixed",
          priceAmount: totalPriceCents,
          priceCurrency: "usd"
        }
      ]
    },
    customerEmail: url.searchParams.get("customerEmail") ?? void 0,
    customerName: url.searchParams.get("customerName") ?? void 0,
    successUrl: `${url.origin}/org/${metadata.orgSlug}/settings/ai-credits?tokens=success`,
    metadata: {
      kind: "token_pack",
      orgId: metadata.orgId,
      orgSlug: metadata.orgSlug,
      triggeredBy: metadata.triggeredBy ?? "",
      tokensPerUnit: String(TOKEN_PACK.TOKENS_PER_UNIT),
      quantity: String(quantity)
    }
  });
  return Response.redirect(checkout.url, 303);
};

export { GET };
//# sourceMappingURL=_server.ts-BkVaUflx.js.map
