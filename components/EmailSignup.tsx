'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="signup" className="py-20 px-6 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Free Trading & Coding Lessons
        </h2>
        <p className="text-zinc-400 mb-8">
          Join the waitlist and be the first to know when new tutorials drop. Plus, get exclusive tips not shared on YouTube.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-lg p-6">
            <p className="text-emerald-400 font-semibold">
              You&apos;re in! Check your inbox for a welcome message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 mt-4">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-zinc-500 text-sm mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
