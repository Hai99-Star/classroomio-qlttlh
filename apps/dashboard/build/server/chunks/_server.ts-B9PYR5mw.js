const POST = async ({ request }) => {
  try {
    const raw = await request.text();
    if (raw) {
      JSON.parse(raw);
    }
  } catch (error) {
    console.error("csp-report: invalid JSON body", error);
  }
  return new Response(null, { status: 204 });
};

export { POST };
//# sourceMappingURL=_server.ts-B9PYR5mw.js.map
