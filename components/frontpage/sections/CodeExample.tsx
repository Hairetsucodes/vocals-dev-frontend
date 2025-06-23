"use client";

import { Code } from "lucide-react";
import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState<"react" | "python">("react");
  const [highlightedReactCode, setHighlightedReactCode] = useState<string>("");
  const [highlightedPythonCode, setHighlightedPythonCode] =
    useState<string>("");

  const reactExample = `import { useVoiceAI } from '@voice-dev/react';

function VoiceChat() {
  const { 
    isListening, 
    startListening, 
    response 
  } = useVoiceAI();

  return (
    <div>
      <button onClick={startListening}>
        {isListening ? 'Listening...' : 'Start Voice Chat'}
      </button>
      
      {response && (
        <div>{response.text}</div>
      )}
    </div>
  );
}`;

  const pythonExample = `from voice_dev import start_listening, on_response

def handle_response(response):
    print(f"AI Response: {response.text}")
    # Audio automatically plays through speakers

def main():
    print("Starting voice chat...")
    
    # Register response handler
    on_response(handle_response)
    
    # Start listening for voice input
    start_listening()

if __name__ == "__main__":
    main()`;

  useEffect(() => {
    const highlightCode = async () => {
      const highlighter = await createHighlighter({
        themes: ["github-dark", "github-light"],
        langs: ["typescript", "jsx", "tsx", "python"],
      });

      const reactHtml = highlighter.codeToHtml(reactExample, {
        lang: "tsx",
        theme: "github-dark",
      });

      const pythonHtml = highlighter.codeToHtml(pythonExample, {
        lang: "python",
        theme: "github-dark",
      });

      setHighlightedReactCode(reactHtml);
      setHighlightedPythonCode(pythonHtml);
    };

    highlightCode();
  }, []);

  const handleReactTab = () => {
    console.log("React tab clicked, current state:", activeTab);
    setActiveTab("react");
  };

  const handlePythonTab = () => {
    console.log("Python tab clicked, current state:", activeTab);
    setActiveTab("python");
  };

  if (!highlightedReactCode || !highlightedPythonCode) {
    return (
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">Loading syntax highlighting...</div>
        </div>
      </section>
    );
  }

  const currentCode =
    activeTab === "react" ? highlightedReactCode : highlightedPythonCode;
  const fileName = activeTab === "react" ? "VoiceChat.tsx" : "voice_chat.py";

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Simple Integration, Powerful Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started with just a few lines of code. Our SDK handles WebSocket
            connections, audio processing, and AI responses automatically.
          </p>
        </div>

        <div className="relative">
          {/* Language Selector */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex bg-muted/30 rounded-lg p-1 backdrop-blur-sm border border-border/50">
              <button
                type="button"
                onClick={handleReactTab}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  activeTab === "react"
                    ? "bg-card text-[var(--brand-accent)] shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                React
              </button>
              <button
                type="button"
                onClick={handlePythonTab}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  activeTab === "python"
                    ? "bg-card text-[var(--brand-accent)] shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Python
              </button>
            </div>
          </div>

          {/* Code snippet container */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Code header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-[var(--brand-accent)]" />
                <span className="text-sm font-medium text-foreground">
                  {fileName}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!bg-transparent">
              <div
                className="overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: currentCode }}
              />
            </div>
          </div>

          {/* Gradient accents */}
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-[var(--brand-accent)]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--brand-primary)]/10 rounded-full blur-2xl" />
        </div>

        {/* Bottom section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            That's it! Your app now has intelligent voice capabilities with
            WebSocket streaming, audio processing, and AI responses.
          </p>
        </div>
      </div>
    </section>
  );
}
