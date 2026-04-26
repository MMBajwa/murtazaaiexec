import { createFileRoute, Link } from "@tanstack/react-router";
import profilePhoto from "../assets/murtaza-profile.jpg";
import { PortfolioShell } from "../components/portfolio/PortfolioShell";
import { Reveal } from "../components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murtaza AI Works | AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Hire Muhammad Murtaza Baber Bajwa for AI/ML systems, React and Next.js web apps, NLP tools, recommendation engines, and agentic AI workflows.",
      },
      { property: "og:title", content: "Murtaza AI Works | AI Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content: "A portfolio for practical AI systems, full-stack delivery, and design-to-code execution with a company-of-one mindset.",
      },
    ],
  }),
  component: Index,
});

const proofPoints = [
  { value: "10k+", label: "real listings processed for ML recommendations" },
  { value: "2026", label: "CS graduate track with production-first focus" },
  { value: "AI-native", label: "Cursor, Lovable, Warp, v0, Claude, Gemini" },
];

const services = [
  "AI/ML recommendation systems",
  "NLP and vector similarity tools",
  "React / Next.js production interfaces",
  "Figma, screenshot, and wireframe to code",
];

function Index() {
  return (
    <PortfolioShell>
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <p className="mb-5 inline-flex rounded-md border bg-card/70 px-3 py-2 text-xs font-extrabold uppercase tracking-normal text-muted-foreground">
                AI/ML Engineer · Full-Stack Developer · Agentic AI Practitioner
              </p>
              <h1 className="font-display text-5xl font-extrabold leading-[0.98] text-foreground sm:text-7xl lg:text-8xl">
                The company is me. The product is execution.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
                I am Muhammad Murtaza Baber Bajwa, building practical AI systems, polished web products, and AI-assisted delivery pipelines for people who want technology that moves like a business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/expertise"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-executive)] transition-transform hover:-translate-y-1"
                >
                  View capability
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border bg-card/80 px-6 py-3 text-sm font-extrabold text-foreground transition-transform hover:-translate-y-1"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="signature-tilt executive-card relative overflow-hidden rounded-xl p-3">
              <img
                src={profilePhoto}
                alt="Muhammad Murtaza Baber Bajwa, AI engineer and full-stack developer"
                className="aspect-[4/5] w-full rounded-lg object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-background/85 p-4 backdrop-blur">
                <p className="font-display text-xl font-extrabold">Murtaza AI Works</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">Personal brand. Executive mindset. Technical delivery.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((item, index) => (
              <Reveal key={item.value} delay={index * 90}>
                <article className="executive-card h-full rounded-xl p-6 transition-transform hover:-translate-y-1">
                  <p className="font-display text-4xl font-extrabold text-primary">{item.value}</p>
                  <p className="mt-3 text-sm font-bold leading-6 text-muted-foreground">{item.label}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-normal text-accent">Positioning</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
                I build like an engineer and pitch like an operator.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 80}>
                <div className="executive-card rounded-xl p-6">
                  <div className="mb-5 h-1 w-16 rounded-full gold-line" />
                  <h3 className="font-display text-2xl font-bold text-foreground">{service}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-muted-foreground">
                    Built with clean structure, responsive UI, and a delivery workflow that uses AI to accelerate without losing judgment.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-xl ink-panel p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-normal opacity-80">SEO foundation</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-6xl">Rank for the work, not just the name.</h2>
                <p className="mt-5 max-w-3xl text-base font-semibold leading-8 opacity-85">
                  The site is structured around keywords clients search for: AI engineer portfolio, full-stack developer Pakistan, React developer, NLP projects, recommendation engine, agentic AI developer, and Figma to code.
                </p>
              </div>
              <Link
                to="/expertise"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-1"
              >
                Explore proof
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PortfolioShell>
  );
}
