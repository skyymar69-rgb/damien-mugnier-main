import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container-prose">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">Informations légales</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">{title}</h1>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <article className="prose-legal space-y-5 text-foreground/85 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_p]:leading-7 [&_p]:text-muted-foreground">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
