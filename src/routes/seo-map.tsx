import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PortfolioShell } from "../components/portfolio/PortfolioShell";
import { Reveal } from "../components/portfolio/Reveal";

type SeoPage = {
  page: string;
  path: string;
  searchIntent: string;
  primaryKeyword: string;
  supportingKeywords: string;
  metaDescription: string;
  contentAction: string;
};

const storageKey = "murtaza-seo-keyword-map";

const defaultSeoPages: SeoPage[] = [
  {
    page: "Home",
    path: "/",
    searchIntent: "Clients evaluating an AI engineer and full-stack developer with business execution mindset.",
    primaryKeyword: "AI engineer portfolio Pakistan",
    supportingKeywords: "full-stack developer Pakistan, React developer portfolio, agentic AI developer, AI product builder",
    metaDescription: "Hire Muhammad Murtaza Baber Bajwa for AI systems, React apps, NLP tools, recommendation engines, and agentic AI delivery.",
    contentAction: "Keep the hero focused on your name, AI systems, web delivery, and company-of-one positioning.",
  },
  {
    page: "Expertise",
    path: "/expertise",
    searchIntent: "Recruiters and clients checking proof of AI, NLP, recommendation-system, and React project work.",
    primaryKeyword: "AI ML project case studies",
    supportingKeywords: "NLP Linux command helper, car recommendation engine, Scikit-learn portfolio, vector similarity project",
    metaDescription: "Explore AI, NLP, recommendation engine, React, and design-to-code case studies by Muhammad Murtaza Baber Bajwa.",
    contentAction: "Add measurable project details, dataset size, tools used, outcomes, and screenshots when available.",
  },
  {
    page: "SEO Map",
    path: "/seo-map",
    searchIntent: "Your private planning page for keyword targeting, page descriptions, and content improvements.",
    primaryKeyword: "portfolio SEO keyword map",
    supportingKeywords: "SEO target keywords, page meta descriptions, portfolio ranking plan, content keyword strategy",
    metaDescription: "Editable SEO keyword map for Murtaza AI Works pages with target keywords, descriptions, and ranking actions.",
    contentAction: "Use this page to refine keywords before updating visible page copy and metadata.",
  },
  {
    page: "Contact",
    path: "/contact",
    searchIntent: "People ready to contact you for AI, web, internship, freelance, or technical product work.",
    primaryKeyword: "hire AI engineer Pakistan",
    supportingKeywords: "hire React developer Pakistan, freelance AI developer, AI ML internship candidate, full-stack developer contact",
    metaDescription: "Contact Muhammad Murtaza Baber Bajwa for AI engineering, React development, NLP tools, and design-to-code projects.",
    contentAction: "Make the message prompt specific: project goal, timeline, references, dataset, and expected outcome.",
  },
];

export const Route = createFileRoute("/seo-map")({
  head: () => ({
    meta: [
      { title: "SEO Keyword Map | Murtaza AI Works" },
      {
        name: "description",
        content:
          "Editable SEO keyword map for Murtaza AI Works pages, including target keywords, search intent, meta descriptions, and ranking actions.",
      },
      { property: "og:title", content: "SEO Keyword Map | Murtaza AI Works" },
      {
        property: "og:description",
        content: "Plan target keywords, descriptions, and page-level SEO actions for the Murtaza AI Works portfolio.",
      },
    ],
  }),
  component: SeoMapPage,
});

function SeoMapPage() {
  const [pages, setPages] = useState<SeoPage[]>(defaultSeoPages);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return;

    try {
      setPages(JSON.parse(stored) as SeoPage[]);
    } catch {
      setPages(defaultSeoPages);
    }
  }, []);

  const keywordCount = useMemo(
    () => pages.reduce((total, page) => total + page.supportingKeywords.split(",").filter(Boolean).length + 1, 0),
    [pages],
  );

  function updatePage(index: number, field: keyof SeoPage, value: string) {
    setSaved(false);
    setPages((current) => current.map((page, pageIndex) => (pageIndex === index ? { ...page, [field]: value } : page)));
  }

  function saveMap() {
    window.localStorage.setItem(storageKey, JSON.stringify(pages));
    setSaved(true);
  }

  function resetMap() {
    setPages(defaultSeoPages);
    window.localStorage.removeItem(storageKey);
    setSaved(false);
  }

  return (
    <PortfolioShell>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-normal text-accent">SEO command center</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <h1 className="font-display text-5xl font-bold leading-tight text-foreground sm:text-7xl">
                  Editable keyword map for every page.
                </h1>
                <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-muted-foreground">
                  Tune the primary keyword, supporting phrases, search intent, and page description before you update the live copy.
                </p>
              </div>
              <div className="executive-card rounded-xl p-6">
                <p className="text-xs font-bold uppercase tracking-normal text-accent">Current plan</p>
                <p className="mt-3 font-display text-5xl font-bold text-primary">{keywordCount}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-muted-foreground">target keyword opportunities across {pages.length} pages</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-5">
          {pages.map((page, index) => (
            <Reveal key={page.path} delay={index * 80}>
              <article className="executive-card rounded-xl p-6 sm:p-8">
                <div className="flex flex-col gap-3 border-b pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-normal text-accent">{page.path}</p>
                    <h2 className="mt-2 font-display text-4xl font-bold text-foreground">{page.page}</h2>
                  </div>
                  <span className="rounded-md border bg-card/80 px-3 py-2 text-xs font-bold uppercase tracking-normal text-muted-foreground">
                    Rank target
                  </span>
                </div>

                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-foreground">
                    Primary keyword
                    <input
                      value={page.primaryKeyword}
                      onChange={(event) => updatePage(index, "primaryKeyword", event.target.value)}
                      className="rounded-md border bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none transition-shadow focus:shadow-[var(--shadow-quiet)]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-foreground">
                    Supporting keywords
                    <input
                      value={page.supportingKeywords}
                      onChange={(event) => updatePage(index, "supportingKeywords", event.target.value)}
                      className="rounded-md border bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none transition-shadow focus:shadow-[var(--shadow-quiet)]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-foreground lg:col-span-2">
                    Search intent
                    <textarea
                      value={page.searchIntent}
                      onChange={(event) => updatePage(index, "searchIntent", event.target.value)}
                      rows={2}
                      className="resize-none rounded-md border bg-background px-4 py-3 text-sm font-semibold leading-6 text-foreground outline-none transition-shadow focus:shadow-[var(--shadow-quiet)]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-foreground lg:col-span-2">
                    Meta description
                    <textarea
                      value={page.metaDescription}
                      onChange={(event) => updatePage(index, "metaDescription", event.target.value)}
                      rows={2}
                      maxLength={160}
                      className="resize-none rounded-md border bg-background px-4 py-3 text-sm font-semibold leading-6 text-foreground outline-none transition-shadow focus:shadow-[var(--shadow-quiet)]"
                    />
                    <span className="text-xs font-semibold text-muted-foreground">{page.metaDescription.length}/160 characters</span>
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-foreground lg:col-span-2">
                    Ranking action
                    <textarea
                      value={page.contentAction}
                      onChange={(event) => updatePage(index, "contentAction", event.target.value)}
                      rows={2}
                      className="resize-none rounded-md border bg-background px-4 py-3 text-sm font-semibold leading-6 text-foreground outline-none transition-shadow focus:shadow-[var(--shadow-quiet)]"
                    />
                  </label>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl ink-panel p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-4xl font-bold">Keep the map focused.</h2>
              <p className="mt-3 max-w-2xl font-semibold opacity-85">
                Use one primary keyword per page, keep descriptions under 160 characters, and turn ranking actions into visible case-study copy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={saveMap}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-1"
              >
                {saved ? "Saved" : "Save edits"}
              </button>
              <button
                type="button"
                onClick={resetMap}
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
              >
                Reset map
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </PortfolioShell>
  );
}