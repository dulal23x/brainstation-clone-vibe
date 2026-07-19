import { defineTool } from "@lovable.dev/mcp-js";

const SERVICES = [
  { slug: "lead-generation", name: "Lead Generation", description: "Full-funnel lead gen: paid media, cold outbound, landing pages, and nurture sequences that turn traffic into qualified pipeline." },
  { slug: "paid-media", name: "Paid Media & Growth", description: "Google, Meta, LinkedIn, and TikTok ads engineered around a measurable CAC and pipeline target." },
  { slug: "seo-content", name: "SEO & Content", description: "Editorial SEO, programmatic content, and technical SEO built for compounding organic pipeline." },
  { slug: "web-design", name: "Web Design & CRO", description: "High-converting websites and landing pages, designed for the funnel and instrumented for CRO." },
  { slug: "engineering", name: "Full-Stack Engineering", description: "Web, mobile, cloud, AI/ML, and platform engineering — from MVP to enterprise-scale software." },
  { slug: "ai-automation", name: "AI & Automation", description: "AI agents, RAG systems, and workflow automation that compress ops cost and scale delivery." },
];

export default defineTool({
  name: "get_services",
  title: "Get services",
  description: "List the services Dulal's Digital LLC offers — lead generation, paid media, SEO, web design, engineering, and AI.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
