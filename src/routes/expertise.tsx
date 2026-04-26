import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioShell } from "../components/portfolio/PortfolioShell";
import { Reveal } from "../components/portfolio/Reveal";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise | AI, Full-Stack & Agentic Development" },
      {
        name: "description",
        content:
          "Explore Muhammad Murtaza Baber Bajwa's AI recommendation engine, NLP Linux command helper, React development, and agentic AI workflow expertise.",
      },
      { property: "og:title", content: "Expertise | AI, Full-Stack & Agentic Development" },
      {
        property: "og:description",
        content: "Proof of work across AI/ML, NLP, full-stack React applications, design-to-code builds, and AI-assisted production workflows.",
      },
    ],
  }),
  component: ExpertisePage,
});

const projects = [
  {
    title: "AI Car Recommendation Engine",
    stack: "Python · Scikit-learn · BeautifulSoup · Cosine Similarity",
    detail:
      "Scraped and processed 10,000+ PakWheels listings, then built a ranking pipeline that matches buyer preferences across price, mileage, make, and model.",
  },
  {
    title: "Linux Command Helper",
    stack: "Python · NLP · Vector Embeddings · Similarity Search",
    detail:
      "Built a CLI autocorrect tool that interprets malformed Linux commands and suggests the closest valid alternative through a custom NLP pipeline.",
  },
  {
    title: "Design-to-Code Implementations",
    stack: "Lovable · v0 · Cursor · React · Next.js",
    detail:
      "Converted mockups, screenshots, and UI references into responsive web applications with refined layouts, interactivity, and deployment-ready structure.",
  },
];

const skills = [
  "Python", "JavaScript", "React", "Next.js", "Scikit-learn", "NLP", "Vector embeddings", "REST APIs", "GitHub", "Web scraping", "Vercel", "Figma to code", "Cursor", "Warp", "Lovable", "Claude", "ChatGPT", "Gemini",
];

function ExpertisePage() {
  return (
    <PortfolioShell>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-normal text-accent">Proof of work</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-tight text-foreground sm:text-7xl">
              Applied AI, clean interfaces, and business-facing execution.
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-muted-foreground">
              My strongest edge is combining technical implementation with client-facing thinking: I can build the system, explain the value, and shape it into something a buyer understands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="signature-tilt executive-card flex h-full flex-col rounded-xl p-7">
                <p className="text-xs font-extrabold uppercase tracking-normal text-accent">Project {index + 1}</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground">{project.title}</h2>
                <p className="mt-3 text-sm font-extrabold text-primary">{project.stack}</p>
                <p className="mt-6 text-sm font-semibold leading-7 text-muted-foreground">{project.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div className="executive-card rounded-xl p-7">
              <h2 className="font-display text-4xl font-extrabold text-foreground">Search keywords to own</h2>
              <p className="mt-5 text-sm font-semibold leading-7 text-muted-foreground">
                Use these terms across future blogs, project case studies, LinkedIn posts, and page headings to help search engines understand the niche clearly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border bg-card/80 px-4 py-2 text-sm font-extrabold text-foreground shadow-[var(--shadow-quiet)]">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl ink-panel p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-4xl font-extrabold">Need the technical story in one page?</h2>
              <p className="mt-3 font-semibold opacity-85">Download the CV or start with a direct conversation.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/Murtaza_CV_v2.docx" className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-1">
                Download CV
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-1">
                Contact me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PortfolioShell>
  );
}
