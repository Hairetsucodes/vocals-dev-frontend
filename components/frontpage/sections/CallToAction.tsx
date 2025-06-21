import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to build the future of voice?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join developers who are already building amazing voice experiences
          with vocals.dev
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[color:var(--brand-primary)] text-primary-foreground hover:bg-[color:var(--brand-primary-hover)] px-8 py-3"
          >
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-glass text-foreground border-border px-8 py-3"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
