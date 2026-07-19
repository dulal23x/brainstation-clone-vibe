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
  name: "submit_contact_inquiry",
  title: "Submit contact inquiry",
  description: "Submit a contact inquiry to Dulal's Digital LLC on behalf of the signed-in user. Use this when the user wants to reach out about a project, get a quote, or start a conversation.",
  inputSchema: {
    name: z.string().min(1).max(120).describe("Full name of the person submitting the inquiry."),
    email: z.string().email().max(200).describe("Contact email."),
    message: z.string().min(5).max(4000).describe("What the user wants to discuss — project, goals, timeline, budget."),
    phone: z.string().max(40).optional().describe("Optional phone number."),
    company: z.string().max(200).optional().describe("Optional company name."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, message, phone, company }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { error } = await supabaseForUser(ctx)
      .from("contact_submissions")
      .insert({ name, email, message, phone: phone ?? null, company: company ?? null });
    if (error) {
      return { content: [{ type: "text", text: `Failed to submit inquiry: ${error.message}` }], isError: true };
    }
    return {
      content: [{ type: "text", text: "Inquiry submitted. The Dulal's Digital team will reach out shortly." }],
      structuredContent: { ok: true },
    };
  },
});
