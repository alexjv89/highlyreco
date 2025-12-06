# Highlyreco: Technical Team Guide

*This document explains why we build what we build. Read this before writing code.*

---

## Why This Project Exists

The founder has ADHD. Infinite scroll and algorithmic recommendations aren't minor UX choices—they're attention traps that cause real harm.

Highlyreco exists to prove that social platforms can be useful without being addictive. Every technical decision should be evaluated through this lens.

---

## Core Technical Principles

### 1. No Dark Patterns, Ever

**What this means in code:**

- No infinite scroll implementations. Always paginate with clear "load more" or finite results.
- No autoplay. User must explicitly trigger every action.
- No notification manipulation. Users control what they receive, and we honor it.
- No artificial delays or loading spinners designed to create anticipation.
- No skeleton loaders that imply more content than exists.

**Review checklist:**
- [ ] Does this feature require user intent to trigger?
- [ ] Is there a clear stopping point?
- [ ] Could this be perceived as manipulative?

### 2. User-Controlled Feeds

**What this means in code:**

- Feeds are strictly chronological from followed accounts.
- No algorithmic reordering. No "while you were away." No "top posts."
- No content insertion (trending, suggested, sponsored).
- The database query should be simple: `SELECT * FROM recommendations WHERE author IN (followed_users) ORDER BY created_at DESC`

**Anti-patterns to avoid:**
```
// NEVER DO THIS
function getFeed(userId) {
  const followed = getFollowedUsers(userId);
  const recs = getRecommendations(followed);
  return rankByEngagement(recs);  // NO
}

// DO THIS
function getFeed(userId) {
  const followed = getFollowedUsers(userId);
  return getRecommendations(followed, { orderBy: 'created_at', direction: 'desc' });
}
```

### 3. Privacy by Default

**What this means in code:**

- Collect minimum necessary data. Question every field.
- No tracking pixels, no fingerprinting, no cross-site tracking.
- Analytics should be aggregate-only. We don't need individual user journeys.
- Clear data retention policies. Delete what we don't need.

**Data we intentionally don't collect:**
- Session duration
- Scroll depth
- Click heatmaps
- Individual user paths
- Device fingerprints

### 4. Performance is Respect

**What this means in code:**

Slow pages waste user time. That's disrespectful.

- Target < 100ms server response times
- Target < 1s time to interactive
- Minimize JavaScript bundle size
- No unnecessary client-side rendering for static content
- Lazy load below-fold content, but don't use it to create false depth

---

## Architecture Decisions Tied to Values

### Why No Recommendation Algorithm

We could build a recommendation system. We choose not to.

**Technical implication:** No collaborative filtering, no content-based filtering, no ML ranking models. The complexity budget that would go there goes to making the core experience excellent.

**What we build instead:**
- Excellent search
- Good categorization and tagging
- Discovery through trust graph exploration (who do the people I follow, follow?)

### Why Chronological Feeds

Algorithmic feeds create several problems:
1. Unpredictable—users can't develop mental models
2. Manipulable—gaming the algorithm becomes the game
3. Engagement-optimized—the algorithm will drift toward addiction

**Technical implication:** Feed queries are simple. No ranking service. No A/B testing on feed algorithms. This is a feature, not a limitation.

### Why Affiliate Revenue Model

Ad-based models require maximizing attention. That conflicts with our values.

Affiliate models align incentives: we make money when recommendations are genuinely useful.

**Technical implication:**
- Build robust affiliate link management
- Track conversions, not engagement
- Transparent disclosure (always show when links are affiliated)
- Fraud detection on conversions, not on engagement metrics

---

## Metrics We Care About

### Track These

| Metric | Why |
|--------|-----|
| Recommendation quality (conversion rate) | Did recommendations help people? |
| Search success rate | Did users find what they were looking for? |
| Page load time | Are we respecting user time? |
| Error rates | Is the platform reliable? |
| API response times | Is the experience snappy? |

### Don't Track These (as KPIs)

| Metric | Why Not |
|--------|---------|
| Time on site | Optimizes for addiction |
| Session length | Optimizes for addiction |
| Daily active users | Vanity metric, encourages dark patterns |
| Engagement rate | Optimizes for addiction |
| Scroll depth | Encourages infinite scroll |

If you find yourself building dashboards for the "don't track" metrics, stop and ask why.

---

## Code Review Guidelines

Beyond normal code quality, consider:

### 1. Attention Impact
"Does this change respect user attention?"

Red flags:
- Infinite loops of content
- Animations that delay user actions
- Notifications that aren't user-initiated
- Features that don't have clear completion states

### 2. Transparency
"Would users understand why this is happening?"

Red flags:
- Hidden sorting or filtering
- Undisclosed affiliate relationships
- Opaque content selection
- Data collection users wouldn't expect

### 3. User Control
"Can users opt out of this?"

Red flags:
- Features with no off switch
- Defaults that favor engagement over user preference
- Dark patterns in settings (double negatives, buried options)

---

## Technical Stack Considerations

### Simplicity Over Cleverness

We don't need:
- Complex ML infrastructure
- Real-time recommendation engines
- Engagement prediction models
- A/B testing frameworks (for engagement optimization)

We do need:
- Fast, reliable CRUD operations
- Excellent search (consider Elasticsearch or similar)
- Clean API design
- Solid authentication and authorization
- Good caching strategy

### Scale Considerations

We're intentionally not trying to maximize time-on-site. This has infrastructure implications:

- Lower requests-per-user than engagement-optimized platforms
- Simpler traffic patterns (less infinite scroll = more predictable load)
- Can optimize for latency over throughput

---

## Common Scenarios and How to Handle Them

### "Should we add a 'trending' section?"

No. This is algorithmically-selected content that users didn't ask for. It optimizes for engagement.

**Alternative:** Let users explore manually. "People who follow [person] also follow..."—but show it only when users explicitly explore, not inject it into feeds.

### "Should we send push notifications for new recommendations?"

Only if the user explicitly opted in for that specific type of notification. Default should be off. Never send "engagement" notifications ("You haven't visited in a while!").

### "Should we track which recommendations users click on?"

For the recommender to see? Yes, with clear disclosure.
For algorithmic ranking? No.
For A/B testing engagement? No.

### "Should we add infinite scroll for search results?"

No. Paginate with clear page numbers or "load more" buttons. Users should know how much content exists.

### "Should we add social proof ('X people liked this')?"

Use carefully. Showing that a recommendation was helpful (people acted on it) is fine. Real-time "X people are viewing this" creates artificial urgency—don't do it.

---

## The Test: Would This Be Safe for Someone with ADHD?

The founder has ADHD. Every feature should pass this test:

"If a user with attention challenges opened this feature, would they be able to accomplish their goal and leave? Or might they get trapped?"

If there's any doubt, err on the side of respecting attention.

---

## Joining the Team

If you're reading this as a new team member:

1. **Read the core purpose doc** (`purpose.md`) to understand the vision
2. **Read the internal north star** (`purpose-internal.md`) for the values
3. **Spend time in the product** as a user before contributing
4. **Ask questions** when you're unsure if a technical choice aligns with values

We'd rather have you push back on a feature than build something that compromises our principles.

Welcome to Highlyreco.

---

*Last updated: [Date]*
*Questions? Ask in #engineering or ping the technical lead.*
