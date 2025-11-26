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
            Discover What Matters
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            Find your next{' '}
            <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>favorite thing</AuroraText>{' '}
            through people you trust
          </h1>

          {/* Subheadline */}
          <p className="max-w-4xl mx-auto mb-12 text-xl text-muted-foreground sm:text-2xl leading-relaxed">
            Stop scrolling through endless reviews from strangers. Highlyreco surfaces recommendations
            from curators and friends who share your taste in books, products, articles, and more.
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

      {/* Features Grid */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group p-8 text-center rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Curated Collections</h3>
            <p className="text-muted-foreground leading-relaxed">Follow expert curators who share your interests and discover hidden gems they recommend</p>
          </div>

          <div className="group p-8 text-center rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Social Discovery</h3>
            <p className="text-muted-foreground leading-relaxed">See what your friends are reading, watching, and loving. Real recommendations from real people</p>
          </div>

          <div className="group p-8 text-center rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">Save & Organize</h3>
            <p className="text-muted-foreground leading-relaxed">Bookmark recommendations, create collections, and never lose track of something you want to try</p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl">
            Recommendations across everything you love
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Books */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Books</h3>
              <p className="text-sm text-muted-foreground">Fiction, non-fiction, and everything in between</p>
            </div>

            {/* Products */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Products</h3>
              <p className="text-sm text-muted-foreground">Gear, gadgets, and everyday essentials</p>
            </div>

            {/* Articles */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Articles</h3>
              <p className="text-sm text-muted-foreground">Must-read pieces and thought-provoking essays</p>
            </div>

            {/* More */}
            <div className="group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">And More</h3>
              <p className="text-sm text-muted-foreground">Podcasts, movies, restaurants, and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            How <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>Highlyreco</AuroraText> Works
          </h2>
          <div className="grid gap-8 text-left md:grid-cols-3">
            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Follow Curators</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find and follow people whose taste you trust - friends, experts, or tastemakers in your favorite niches.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Discover Recommendations</h3>
              <p className="text-muted-foreground leading-relaxed">
                See a personalized feed of recommendations from people you follow, complete with their reviews and context.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Share Your Finds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recommend things you love to help others discover great stuff. Build your own collection of favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="px-4 py-16 pb-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            Tired of <AuroraText colors={["#FF6B35", "#F7C59F", "#EFEFD0", "#FF6B35"]}>Algorithm Fatigue</AuroraText>?
          </h2>
          <div className="grid gap-8 text-left md:grid-cols-2">
            <div className="group p-8 rounded-2xl bg-destructive/5 border border-destructive/20 backdrop-blur-sm hover:bg-destructive/10 transition-all duration-300">
              <h3 className="mb-6 text-2xl font-semibold text-destructive">The Problem</h3>
              <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <li>Anonymous reviews you can&apos;t trust</li>
                <li>Algorithms optimizing for engagement, not quality</li>
                <li>Endless scrolling with nothing worthwhile</li>
                <li>Fake reviews and sponsored content</li>
                <li>No context about who&apos;s recommending</li>
                <li>Lost recommendations you can&apos;t find again</li>
              </ul>
            </div>

            <div className="group p-8 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <h3 className="mb-6 text-2xl font-semibold text-primary">Our Solution</h3>
              <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <li>Real recommendations from real people</li>
                <li>Follow curators whose taste matches yours</li>
                <li>Context-rich reviews with personal insights</li>
                <li>Social proof from your network</li>
                <li>Bookmark and organize discoveries</li>
                <li>Build your own reputation as a curator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to discover better?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of people who&apos;ve upgraded how they find new things to love.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-primary-foreground transition-all duration-200 rounded-xl bg-primary hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg shadow-primary/25">
            Get Started Free
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
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
