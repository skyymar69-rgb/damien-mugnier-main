import { createFileRoute } from "@tanstack/react-router";
import { ServicePageContent } from "@/components/service-page-content";
import { services } from "@/lib/site";

const s = services["maconnerie-generale"];

export const Route = createFileRoute("/maconnerie-generale")({
  head: () => ({
    meta: [
      { title: `${s.title} — Damien Mugnier` },
      { name: "description", content: `${s.keyword} : ${s.intro.slice(0, 150)}` },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.intro.slice(0, 160) },
      { property: "og:image", content: s.image },
    ],
  }),
  component: () => <ServicePageContent slug="maconnerie-generale" />,
});
