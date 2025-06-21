import { Phone, MessageSquare, Bot, Zap } from "lucide-react";
export default function UseCases() {
  return (
    <section id="use-cases" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Built for every conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From customer support to interactive applications, vocals.dev adapts
            to your specific use case.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 brand-icon-bg rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-[color:var(--brand-accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Phone Conversations
              </h3>
              <p className="text-muted-foreground">
                Build intelligent phone systems with natural voice interactions
                and automated responses.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 brand-icon-bg rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-5 w-5 text-[color:var(--brand-accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Web Chat Interfaces
              </h3>
              <p className="text-muted-foreground">
                Create voice-enabled web applications with seamless
                speech-to-text and text-to-speech.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 brand-icon-bg rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-[color:var(--brand-accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Custom Voice Assistants
              </h3>
              <p className="text-muted-foreground">
                Develop specialized voice assistants tailored to your business
                needs and workflows.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 brand-icon-bg rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-[color:var(--brand-accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Interactive Applications
              </h3>
              <p className="text-muted-foreground">
                Add voice controls to any application for hands-free operation
                and accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
