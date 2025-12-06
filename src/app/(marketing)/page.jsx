"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900 py-12 sm:py-20 px-4">
      {/* Paper stack container */}
      <div className="max-w-2xl mx-auto relative">
        {/* Bottom papers (stack effect) */}
        <div className="absolute inset-0 bg-white dark:bg-stone-800 rounded-sm shadow-md transform rotate-1 translate-y-1 translate-x-1" />
        <div className="absolute inset-0 bg-white dark:bg-stone-800 rounded-sm shadow-md transform -rotate-[0.5deg] translate-y-0.5 -translate-x-0.5" />

        {/* Main paper */}
        <article className="relative bg-white dark:bg-stone-800 rounded-sm shadow-xl p-8 sm:p-12 md:p-16">

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
              Highlyreco
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              Find your next favorite thing through people you trust.
            </p>
          </header>

          {/* Manifesto */}
          <div className="space-y-10 text-stone-700 dark:text-stone-300">

            {/* The Problem */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">The Problem You Know Too Well</h2>
              <p className="leading-relaxed mb-3">
                You open YouTube to learn one thing. Two hours later, you&apos;ve watched fifteen videos and can&apos;t remember why you came.
              </p>
              <p className="leading-relaxed mb-3">
                You scroll Instagram looking for inspiration. An hour disappears. You feel worse than when you started.
              </p>
              <p className="leading-relaxed mb-3">
                You need a product recommendation. You Google it, wade through sponsored results and fake reviews, and still don&apos;t know what to buy.
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">The platforms designed to help you discover things are actually designed to trap you.</strong>
              </p>
              <p className="leading-relaxed">
                Infinite scroll. Autoplay. &quot;Recommended for you.&quot; These features exist to keep you watching, not to help you find what you need.
              </p>
            </section>

            <hr className="border-stone-200 dark:border-stone-700" />

            {/* A Better Way */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">A Better Way to Discover</h2>
              <p className="leading-relaxed mb-3">
                Think about how you actually make decisions in real life.
              </p>
              <p className="leading-relaxed mb-3">
                When you need a car recommendation, you don&apos;t Google &quot;best cars 2024.&quot; You ask your friend who&apos;s obsessed with cars. The one who&apos;s researched every model and can tell you exactly what fits your needs.
              </p>
              <p className="leading-relaxed mb-3">
                When you need a laptop, you ask your techie friend. When you want a restaurant, you ask the friend who actually cares about food.
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">You already have a recommendation engine. It&apos;s called people you trust.</strong>
              </p>
              <p className="leading-relaxed">
                Highlyreco brings this online.
              </p>
            </section>

            <hr className="border-stone-200 dark:border-stone-700" />

            {/* What It Is */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">What Highlyreco Is</h2>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">A social platform where people share recommendations. That&apos;s it.</strong>
              </p>
              <p className="leading-relaxed mb-5">
                Not status updates. Not life highlights. Not engagement bait. Just: &quot;Here&apos;s something I think is worth your attention, and here&apos;s why.&quot;
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">Follow People, Not Algorithms</h3>
                  <p className="leading-relaxed">You choose who to follow based on their expertise and taste. Your feed shows their recommendations in chronological order. No algorithm decides what you see.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">Recommend Anything</h3>
                  <p className="leading-relaxed">Books, products, restaurants, articles, podcasts, videos, tools, npm packages, places to visit—whatever you&apos;re an expert in or passionate about.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">Come With Purpose, Leave Satisfied</h3>
                  <p className="leading-relaxed">Highlyreco isn&apos;t designed to trap you. There&apos;s no infinite scroll. You see recommendations from people you follow, you find what you need, you leave. That&apos;s success.</p>
                </div>
              </div>
            </section>

            <hr className="border-stone-200 dark:border-stone-700" />

            {/* The Promise */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mt-6 mb-2">The Highlyreco Promise</h2>

              <div className="space-y-3">
                <p className="leading-relaxed"><strong className="text-stone-900 dark:text-stone-100">We will never trap you.</strong> No infinite scroll. No autoplay. No dark patterns. No tricks to keep you longer than you want.</p>
                <p className="leading-relaxed"><strong className="text-stone-900 dark:text-stone-100">We will never manipulate your feed.</strong> You see recommendations from people you follow. Period. No algorithmic insertion of &quot;trending&quot; or &quot;suggested&quot; content.</p>
                <p className="leading-relaxed"><strong className="text-stone-900 dark:text-stone-100">We will never sell your attention.</strong> Our business model is affiliate revenue—we earn when recommendations lead to purchases. We never sell your eyeballs to advertisers.</p>
                <p className="leading-relaxed"><strong className="text-stone-900 dark:text-stone-100">Your time matters. We won&apos;t waste it.</strong></p>
              </div>
            </section>

          </div>

          {/* CTA */}
          <section className="mt-12 pt-10 border-t border-stone-200 dark:border-stone-700">
            <div className="text-center">
              <a
                href="https://app.youform.com/forms/xcoliojp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 rounded-md bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
              >
                Join the Waitlist
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-700 text-center text-sm text-stone-500 dark:text-stone-500">
            <p>&copy; 2025 Highlyreco</p>
          </footer>

        </article>
      </div>
    </div>
  );
}
