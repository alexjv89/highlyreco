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
          <div className="space-y-8 text-stone-700 dark:text-stone-300">

            {/* The Problem */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">The Problem</h2>
              <p className="leading-relaxed mb-3">
                You open YouTube to learn one thing. Two hours later, you&apos;ve watched fifteen videos and can&apos;t remember why you came.
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">The platforms designed to help you discover are designed to trap you.</strong> Infinite scroll. Autoplay. Algorithmic feeds. They optimize for engagement, not for helping you find what you need.
              </p>
              <p className="leading-relaxed mb-3">
                But think about real life. When you need a car recommendation, you ask your friend who&apos;s obsessed with cars. When you need a laptop, you ask your techie friend.
              </p>
              <p className="leading-relaxed">
                <strong className="text-stone-900 dark:text-stone-100">You already have a recommendation engine. It&apos;s called people you trust.</strong>
              </p>
            </section>

            <hr className="border-stone-200 dark:border-stone-700" />

            {/* What It Is */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">What Highlyreco Is</h2>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">A social platform where people share recommendations. That&apos;s it.</strong>
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">Follow people, not algorithms.</strong> Your feed shows recommendations from people you chose, in chronological order.
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">Recommend anything.</strong> Books, products, restaurants, podcasts, tools, npm packages—whatever you know about.
              </p>
              <p className="leading-relaxed">
                <strong className="text-stone-900 dark:text-stone-100">Come with purpose, leave satisfied.</strong> No infinite scroll. Find what you need, then go live your life.
              </p>
            </section>

            <hr className="border-stone-200 dark:border-stone-700" />

            {/* The Promise */}
            <section>
              <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-4">Our Promise</h2>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">We will never trap you.</strong> No infinite scroll. No autoplay. No dark patterns.
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">We will never manipulate your feed.</strong> No algorithmic insertion. No &quot;trending&quot; or &quot;suggested.&quot;
              </p>
              <p className="leading-relaxed mb-3">
                <strong className="text-stone-900 dark:text-stone-100">We will never sell your attention.</strong> We earn through affiliate links, not ads.
              </p>
              <p className="leading-relaxed">
                <strong className="text-stone-900 dark:text-stone-100">Your time matters. We won&apos;t waste it.</strong>
              </p>
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
