import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient(url, key, {
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        h.set("Authorization", `Bearer ${ctx.getToken()}`);
        return fetch(input, { ...init, headers: h });
      },
    },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export default defineTool({
  name: "subscribe_newsletter",
  title: "Subscribe to newsletter",
  description: "Subscribe an email address to the Dulal's Digital LLC newsletter.",
  inputSchema: {
    email: z.string().email().max(200).describe("Email address to subscribe."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ email }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { error } = await supabaseForUser(ctx).from("newsletter_subscribers").insert({ email });
    if (error && !error.message.toLowerCase().includes("duplicate")) {
      return { content: [{ type: "text", text: `Failed to subscribe: ${error.message}` }], isError: true };
    }
    return {
      content: [{ type: "text", text: `Subscribed ${email} to the newsletter.` }],
      structuredContent: { ok: true, email },
    };
  },
});
