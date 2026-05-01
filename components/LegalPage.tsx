export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Cadre légal</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">{title}</h1>
        </div>
      </section>
      <article className="container-wide prose-premium max-w-4xl py-20">{children}</article>
    </>
  );
}
