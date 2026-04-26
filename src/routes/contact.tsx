import { createFileRoute } from "@tanstack/react-router";
import profilePhoto from "../assets/murtaza-profile.jpg";
import { PortfolioShell } from "../components/portfolio/PortfolioShell";
import { Reveal } from "../components/portfolio/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Muhammad Murtaza Baber Bajwa" },
      {
        name: "description",
        content:
          "Contact Muhammad Murtaza Baber Bajwa for AI engineering, full-stack React development, NLP tools, recommendation systems, and design-to-code projects.",
      },
      { property: "og:title", content: "Contact | Muhammad Murtaza Baber Bajwa" },
      {
        property: "og:description",
        content: "Reach out for AI/ML engineering, full-stack web development, agentic AI workflows, and business-ready technical execution.",
      },
    ],
  }),
  component: ContactPage,
});

const contactLinks = [
  { label: "Email", value: "murtazababer672@gmail.com", href: "mailto:murtazababer672@gmail.com" },
  { label: "Phone", value: "+92 308 014 3575", href: "tel:+923080143575" },
  { label: "LinkedIn", value: "muhammad-murtaza-baber-bajwa", href: "https://linkedin.com/in/muhammad-murtaza-baber-bajwa" },
  { label: "GitHub", value: "Murtazas2d6q", href: "https://github.com/Murtazas2d6q" },
];

function ContactPage() {
  return (
    <PortfolioShell>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="signature-tilt executive-card overflow-hidden rounded-xl p-3">
              <img
                src={profilePhoto}
                alt="Muhammad Murtaza Baber Bajwa contact profile photo"
                className="aspect-[4/5] w-full rounded-lg object-cover object-center"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-normal text-accent">Work with me</p>
              <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight text-foreground sm:text-7xl">
                Let’s turn a technical idea into a credible product.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
                I am open to AI/ML projects, full-stack web builds, design-to-code implementations, internships, freelance collaborations, and client-facing technical roles.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactLinks.map((item) => (
                  <a key={item.label} href={item.href} className="executive-card rounded-xl p-5 transition-transform hover:-translate-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-normal text-accent">{item.label}</span>
                    <span className="mt-2 block break-words text-sm font-extrabold text-foreground">{item.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-xl ink-panel p-8 sm:p-12 lg:p-16">
            <h2 className="font-display text-4xl font-extrabold sm:text-6xl">The best first message is specific.</h2>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-8 opacity-85">
              Send the goal, current stage, deadline, and any reference design or dataset. I can respond with the likely technical approach, tools, and delivery plan.
            </p>
            <a href="mailto:murtazababer672@gmail.com?subject=Project%20Inquiry%20for%20Murtaza%20AI%20Works" className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-1">
              Email project details
            </a>
          </div>
        </Reveal>
      </section>
    </PortfolioShell>
  );
}
