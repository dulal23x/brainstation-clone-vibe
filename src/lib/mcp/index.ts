import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getServices from "./tools/get-services";
import submitContactInquiry from "./tools/submit-contact-inquiry";
import subscribeNewsletter from "./tools/subscribe-newsletter";

// The OAuth issuer must be the direct Supabase host — SUPABASE_URL is rewritten
// to the .lovable.cloud proxy on publish, which mcp-js rejects (RFC 8414).
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "dulals-digital-mcp",
  title: "Dulal's Digital LLC",
  version: "0.1.0",
  instructions:
    "Tools for Dulal's Digital LLC — a lead generation, paid media, and full-stack engineering agency. Use `get_services` to describe offerings, `submit_contact_inquiry` to start a conversation with the team, and `subscribe_newsletter` to join the mailing list.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getServices, submitContactInquiry, subscribeNewsletter],
});
