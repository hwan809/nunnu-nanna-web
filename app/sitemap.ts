import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nunnunanna.mirinae.app";
  return ["", "/exercise", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
