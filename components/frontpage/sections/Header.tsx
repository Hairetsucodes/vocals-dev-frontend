import { Mic } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/settings/theme/Toggle";

export default function Header() {
  return (
    <header className="border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Mic className="h-8 w-8 text-[color:var(--brand-accent)] mr-2" />
            <span className="text-2xl font-bold text-foreground">
              vocals.dev
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="btn-glass text-foreground border-border"
            >
              Get Started
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
