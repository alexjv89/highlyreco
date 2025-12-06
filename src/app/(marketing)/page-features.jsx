"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <AnimatedGridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "absolute inset-0 skew-y-6",
        )}
      />

      {/* Hero Section */}
      <section className="relative px-4 py-12 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-12 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
            No algorithms. No infinite scroll. Just trust.
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            Find your next{' '}
            <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>favorite thing</AuroraText>{' '}
            through people you trust
          </h1>

          {/* Subheadline */}
          <p className="max-w-4xl mx-auto mb-12 text-xl text-muted-foreground sm:text-2xl leading-relaxed">
            A social platform where people share recommendations. Not status updates. Not engagement bait.
            Just honest recommendations from people whose expertise you can evaluate because you know them.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 rounded-xl bg-primary hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg shadow-primary/25">
              Start Discovering
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/explore"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold transition-all duration-200 border-2 border-border rounded-xl text-foreground hover:bg-accent hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 backdrop-blur-sm"
            >
              Browse Curators
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl">
            The platforms designed to help you discover are designed to <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>trap you</AuroraText>
          </h2>

          <div className="p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              You open YouTube to learn one thing. Two hours later, you&apos;ve watched fifteen videos
              and can&apos;t remember why you came.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Infinite scroll. Autoplay. &quot;Recommended for you.&quot; These features exist to keep you watching,
              not to help you find what you need. The algorithm optimizes for engagement, not value.
              Your time is the product.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              There&apos;s so much content online that no one could consume even a fraction of it.
              You need a filter. But the filters we have—algorithms—are designed to benefit the platform, not you.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl">
            You already have a better <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>recommendation engine</AuroraText>
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🚗</div>
              <p className="text-muted-foreground">
                Need a car? Ask your friend who&apos;s obsessed with cars.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">💻</div>
              <p className="text-muted-foreground">
                Need a laptop? Ask your techie friend who researches every spec.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm text-center">
              <div className="text-4xl mb-4">🍜</div>
              <p className="text-muted-foreground">
                Need a restaurant? Ask the friend who actually cares about food.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
            <p className="text-lg text-foreground leading-relaxed text-center">
              We intuitively know who to trust for what. Your car expert friend is not your laptop
              friend is not your restaurant friend. <strong>This is a recommendation engine based on
              people you know. On trust. On expertise you can evaluate because you know the person.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What Highlyreco Is */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>Highlyreco</AuroraText> Is
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-xl text-muted-foreground leading-relaxed">
            A social platform where people post recommendations. That&apos;s it. Not status updates.
            Not life highlights. Just: &quot;Here&apos;s something worth your attention, and here&apos;s why.&quot;
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Books</h3>
              <p className="text-sm text-muted-foreground">Fiction, non-fiction, life-changing reads</p>
            </div>

            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Products</h3>
              <p className="text-sm text-muted-foreground">Gear, gadgets, tools that actually work</p>
            </div>

            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Tools & Code</h3>
              <p className="text-sm text-muted-foreground">npm packages, apps, dev tools</p>
            </div>

            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Anything</h3>
              <p className="text-sm text-muted-foreground">Restaurants, podcasts, whatever matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Way Value */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl">
            Everyone <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>wins</AuroraText>
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-muted-foreground">
            AI is making creation cheap. The hard part now is being found.
            Highlyreco creates value for everyone in the chain.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground text-center">Creators</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Focus on making great stuff. Let trusted recommenders handle discovery.
                Pay for results, not reach.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground text-center">Recommenders</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Monetize your expertise and taste. Earn when your recommendations
                actually help people make decisions.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground text-center">Consumers</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Find quality through people you trust. Skip the noise, fake reviews,
                and algorithmic manipulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl">
            Our <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>Promise</AuroraText>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No infinite scroll</h3>
              </div>
              <p className="text-muted-foreground pl-14">Clear beginnings and endings. You&apos;ve seen everything from people you follow? You&apos;re done.</p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No algorithmic feed</h3>
              </div>
              <p className="text-muted-foreground pl-14">You see recommendations from people you follow. Period. No &quot;suggested&quot; or &quot;trending&quot; injected.</p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No engagement optimization</h3>
              </div>
              <p className="text-muted-foreground pl-14">We don&apos;t measure success by time-on-site. We win when you find what you need and leave.</p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">No selling your attention</h3>
              </div>
              <p className="text-muted-foreground pl-14">Our revenue comes from affiliate links when recommendations help. We never sell eyeballs to advertisers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            How It <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>Works</AuroraText>
          </h2>
          <div className="grid gap-8 text-left md:grid-cols-3">
            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Follow People You Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find people whose taste and expertise you trust. Friends, domain experts, or people whose past recommendations hit the mark.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">See Their Recommendations</h3>
              <p className="text-muted-foreground leading-relaxed">
                A simple chronological feed. No algorithm manipulation. Just honest recommendations from people you chose to follow.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Find What You Need & Go</h3>
              <p className="text-muted-foreground leading-relaxed">
                Come with purpose, leave satisfied. There&apos;s no trap. No infinite content. You found what you needed? Great. Go live your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Discovery through trust, not manipulation
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join a platform that respects your attention. Find what you need through people you trust.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 rounded-xl bg-primary hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg shadow-primary/25">
            Get Started Free
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            No tricks. No traps. We promise not to waste your time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Highlyreco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
