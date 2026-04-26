import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="executive-card max-w-md rounded-xl p-8 text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-bold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is not part of the Murtaza AI Works portfolio.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
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
      { title: "Murtaza AI Works | AI Engineer Portfolio" },
      {
        name: "description",
        content:
          "Muhammad Murtaza Baber Bajwa portfolio for AI engineering, full-stack development, agentic AI workflows, and design-to-code delivery.",
      },
      { name: "author", content: "Muhammad Murtaza Baber Bajwa" },
      { property: "og:title", content: "Murtaza AI Works | AI Engineer Portfolio" },
      {
        property: "og:description",
        content: "AI/ML engineer and full-stack developer building practical AI systems, polished React apps, and business-ready workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Murtaza AI Works | AI Engineer Portfolio" },
      { name: "description", content: "The Executive Showcase is a personal portfolio website designed to present professional expertise and advertise individual capabilities." },
      { property: "og:description", content: "The Executive Showcase is a personal portfolio website designed to present professional expertise and advertise individual capabilities." },
      { name: "twitter:description", content: "The Executive Showcase is a personal portfolio website designed to present professional expertise and advertise individual capabilities." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3eeb662e-a3ca-4896-8f35-6a7c6c3d89f4/id-preview-25298f09--ae81fe83-8fcc-42c7-8b46-48e0d20bb7e4.lovable.app-1777204514470.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3eeb662e-a3ca-4896-8f35-6a7c6c3d89f4/id-preview-25298f09--ae81fe83-8fcc-42c7-8b46-48e0d20bb7e4.lovable.app-1777204514470.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://murtaza-ai-works.com" },
    ],
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
  return <Outlet />;
}
