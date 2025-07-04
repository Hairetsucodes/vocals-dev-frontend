import CallToAction from "./sections/CallToAction";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import CodeExample from "./sections/CodeExample";
import Features from "./sections/Features";
import UseCases from "./sections/UseCases";
import Footer from "./sections/Footer";

export default function Frontpage() {
  return (
    <div className="min-h-screen gradient-background">
      <Header />
      <Hero />
      <CodeExample />
      <Features />
      <UseCases />
      <CallToAction />
      <Footer />
    </div>
  );
}
