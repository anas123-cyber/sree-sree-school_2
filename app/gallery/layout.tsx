import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

// The gallery page itself is a client component (it manages a lightbox), so its
// metadata lives here in the route-segment layout, which is a server component.
export const metadata = pageMetadata({
  title: "Photo Gallery — Campus, Events & Student Life",
  description:
    "Browse photos of campus life, events and facilities at Sree Sree Educational Society, Eluru — classrooms, labs, the playground and school celebrations.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          webPageSchema({
            title: "Photo Gallery | Sree Sree Educational Society",
            description:
              "Photos of campus life, events and facilities at the school in Eluru.",
            path: "/gallery",
          }),
        ]}
      />
      {children}
    </>
  );
}
