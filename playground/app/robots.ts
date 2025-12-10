export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://playground.jssonlang.tech/sitemap.xml",
  };
}