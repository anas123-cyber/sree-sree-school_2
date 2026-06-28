/**
 * Renders one or more JSON-LD structured-data blocks into the page.
 *
 * Server component — outputs a <script type="application/ld+json"> tag that
 * is present in the initial HTML, so crawlers and AI answer engines see it
 * without running JavaScript.
 *
 * Usage:
 *   <JsonLd data={organizationSchema()} />
 *   <JsonLd data={[breadcrumbSchema(...), faqSchema(...)]} />
 */

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inject; we escape "<" defensively
          // to avoid any chance of breaking out of the script tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
