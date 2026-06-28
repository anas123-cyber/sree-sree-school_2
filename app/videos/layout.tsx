import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

// The videos page is a client component (video lightbox), so its metadata lives
// here in the route-segment layout, which is a server component.
export const metadata = pageMetadata({
  title: "Video Gallery — Events, Programs & Campus Life",
  description:
    "Watch videos of events, programs and campus life at Sree Sree Educational Society, Eluru, Andhra Pradesh — see the school in action.",
  path: "/videos",
});

export default function VideosLayout({
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
            { name: "Videos", path: "/videos" },
          ]),
          webPageSchema({
            title: "Video Gallery | Sree Sree Educational Society",
            description:
              "Videos of events, programs and campus life at the school in Eluru.",
            path: "/videos",
          }),
        ]}
      />
      {children}
    </>
  );
}
