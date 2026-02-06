export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Terminal to Trading
        </h2>
        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
          Terminal to Trading bridges the gap between programming and profitable trading. Whether you&apos;re a developer curious about markets or a trader wanting to automate strategies, you&apos;ll find practical, no-fluff content that gets you building real systems.
        </p>
        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
          Follow along on YouTube for in-depth tutorials, live coding sessions, and market analysis using code.
        </p>
        <a
          href="https://www.youtube.com/@1BigBasisBoi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Subscribe on YouTube
        </a>
      </div>
    </section>
  );
}
