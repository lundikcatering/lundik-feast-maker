import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lundik Catering Limited — Seasonal catering for unforgettable events" },
      {
        name: "description",
        content:
          "Lundik Catering Limited delivers seasonal, locally sourced catering for weddings, corporate events, and private celebrations across Northern Ireland.",
      },
      { property: "og:title", content: "Lundik Catering Limited — Seasonal catering for unforgettable events" },
      {
        property: "og:description",
        content:
          "Seasonal, locally sourced catering for weddings, corporate events, and private celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lundik Catering Limited — Seasonal catering for unforgettable events" },
      { name: "description", content: "Lundik Catering Hub is a professional website for Lundik Catering Limited, showcasing services and company details." },
      { property: "og:description", content: "Lundik Catering Hub is a professional website for Lundik Catering Limited, showcasing services and company details." },
      { name: "twitter:description", content: "Lundik Catering Hub is a professional website for Lundik Catering Limited, showcasing services and company details." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3255b02b-b4ac-4672-a798-8f99def07716/id-preview-51b729ff--c3797015-add8-4480-a268-bc80abd02301.lovable.app-1777636193567.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3255b02b-b4ac-4672-a798-8f99def07716/id-preview-51b729ff--c3797015-add8-4480-a268-bc80abd02301.lovable.app-1777636193567.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
