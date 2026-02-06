import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <EmailSignup />
      <Footer />
    </main>
  );
}
