'use client';

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Terminal to Trading
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Learn to build algorithmic trading systems, analyze markets with Python, and turn your coding skills into trading edge.
        </p>
        <button
          onClick={scrollToSignup}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          Join the Waitlist
        </button>
        <p className="text-zinc-500 mt-4 text-sm">
          Free lessons delivered to your inbox
        </p>
      </div>
    </section>
  );
}
