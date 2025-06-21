import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Voice AI for{" "}
          <span className="text-[color:var(--brand-accent)]">Developers</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A streamlined solution to add voice activation, filtering, and AI
          models for voice and response generation. Build custom voice chatbots
          for any use case in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[color:var(--brand-primary)] text-primary-foreground hover:bg-[color:var(--brand-primary-hover)] px-8 py-3"
          >
            Start Building
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-glass text-foreground border-border px-8 py-3"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
