import { projects } from "@/app/data/projects";
import { SITE_URL } from "@/app/site.config";

export const dynamic = "force-static";

const staticRoutes = ["", "/studio/", "/renfort/", "/lab/", "/projets/", "/contact/"];

export default function sitemap() {
  const staticPages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  const projectPages = projects.map(({ slug }) => ({
    url: `${SITE_URL}/projets/${slug}/`,
  }));

  return [...staticPages, ...projectPages];
}
