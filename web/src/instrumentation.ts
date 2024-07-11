// See: https://vercel.com/docs/observability/otel-overview

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    if (!process.env.VERCEL) {
      await import("./dd-instrumentation");
    }
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}
