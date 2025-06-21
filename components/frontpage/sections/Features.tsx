import { Zap, Bot, Code, Brain, FileText, MessageSquare } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Voice Activation",
      description: "Advanced voice detection and activation with customizable wake words and noise filtering."
    },
    {
      icon: Bot,
      title: "AI Model Integration", 
      description: "Connect with any AI model for natural language processing and intelligent response generation."
    },
    {
      icon: Code,
      title: "Developer-First",
      description: "Simple APIs, comprehensive documentation, and SDKs for popular programming languages."
    },
    {
      icon: Brain,
      title: "Custom AI Direction",
      description: "Program your AI with custom scripts and behavioral patterns to guide conversations exactly how you want them to flow."
    },
    {
      icon: FileText,
      title: "Intelligent Data Collection",
      description: "AI-powered data gathering that adapts questions based on previous responses and context for more meaningful insights."
    },
    {
      icon: MessageSquare,
      title: "Adaptive Question Flow",
      description: "Dynamic conversation paths that evolve based on user responses, creating personalized interactions powered by your own models."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Everything you need to build intelligent voice experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful APIs and AI-driven tools designed for developers who
            want to create adaptive, context-aware voice applications with custom intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group feature-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)]/10 via-transparent to-[var(--brand-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--brand-accent)]/20 to-[var(--brand-accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-[var(--brand-accent)]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--brand-accent)] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
