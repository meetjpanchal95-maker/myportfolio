export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const object = await env.BUCKET.get(url.pathname.slice(1));

    if (!object) {
      return new Response("Not Found", { status: 404 });
    }

    const extension = url.pathname.split(".").pop().toLowerCase();
    const contentTypes = {
      svg: "image/svg+xml",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
      webp: "image/webp",
    };

    const contentType = contentTypes[extension] || "application/octet-stream";

    return new Response(object.body, {
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=31536000",
      },
    });
  },
};