const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : process.env.NEXT_PUBLIC_DOMAIN;

export async function dynamicBlurDataUrl(url: string) {
  const res = await fetch(`${baseUrl}_next/image?url=${url}&w=16&q=40`);

  const base64 = Buffer.from(await res.arrayBuffer()).toString("base64");

  const blurSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
      <filter id="b">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
      <image
        filter="url(#b)"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        href="data:image/webp;base64,${base64}"
      />
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(blurSvg).toString("base64")}`;
}
