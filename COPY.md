# queued. copy log

Every headline/subline version we've shipped, newest first, so any agent or person can see what changed, why, and roll back.
Rules: log the old line before replacing it; tag the repo `copy-vN` before each rewrite; keep alternates here, not in code.
House style: sharp, cheeky, specific. No "We don't X. We Y." / "Not X. Y." contrast lines. Headlines are two lines: plain line + italic accent line.

**Roll back a whole version:** `git checkout copy-v1 -- src/components/Hero.astro src/components/HowItWorks.astro src/components/Benefits.astro`
**Roll back one line:** copy it from the tables below.

---

## v2.1 — v1 hero headline back (2026-10-06, tag `copy-v2.1`)

User preferred the original hero headline. Everything else from v2 stays (including the v2 hero sub).

| Spot | File | v2.1 (live) | v2 (previous) |
|---|---|---|---|
| Hero H1 | `src/components/Hero.astro` | Your design team. / *On subscription.* | Senior creatives, / *on your team today.* |

Live set now: hero H1 from v1; hero sub, How it works, Benefits from v2.

---

## v2 — "creative partner" angle (2026-10-06, tag `copy-v2`)

**Audience (ICP):** marketing, brand and product leads at 50–500-person companies. They have an in-house team that's overloaded, a design backlog, and a hiring req that's been open for months. They compare us against a senior hire, an agency retainer and freelancers. They care about quality bar, speed of onboarding, and predictable spend they can get past finance.
**Angle:** the senior design partner your team has been asking for, already onboarded (Superside's "creative partner / raise the quality bar / keep up with you", in our words).

| Spot | File | v2 | v1 (previous) |
|---|---|---|---|
| Hero H1 | `src/components/Hero.astro` | Senior creatives, / *on your team today.* (replaced in v2.1) | Your design team. / *On subscription.* |
| Hero sub | `src/components/Hero.astro` | A senior design team that works inside your workflow. Websites, product UI, brand, decks and ads in about 48 hours each, for one flat monthly fee. Skip the hiring round. Pause anytime. | Websites, product UI, brand, decks and ads. Request as much as you want, get it in about 48 hours. One flat monthly fee. Pause or cancel anytime. |
| How it works H2 | `src/components/HowItWorks.astro` | Plugged into your team / *within the hour.* | The way design should've worked / *all along.* |
| Benefits H2 | `src/components/Benefits.astro` | Your quality bar, / *raised by default.* | It's "you'll never go back" / *better.* |
| Benefits sub | `src/components/Benefits.astro` | Senior creative direction on every request, one predictable fee, and capacity that flexes with your launch calendar. The design hire your team keeps asking for, already onboarded. | Replaces unreliable freelancers and expensive agencies with one flat monthly fee, and designs delivered so fast you won't want to go anywhere else. |

**Alternates considered (swap in if v2 doesn't land):**
- Hero: "The creative hire / *you got to skip.*" · "Senior design, / *at your team's pace.*" · "The design team / *your roadmap needs.*"
- How it works: "Set up today. / *Keeping pace for good.*" · "Built to keep up / *with your team.*"
- Benefits: "Senior work, / *at your team's speed.*" · "Raises the bar. / *Keeps the pace.*"

**Unchanged in v2 (already on-angle):** Compare "A senior design team, / *minus the payroll.*" · Work "One request at a time. / *It adds up fast.*" · Pricing "One subscription. / *Endless requests.*" · Scope "Apps, websites, brands / *& more.*" · Final CTA "Queue it. / *We'll ship it.*" · /subscriptions/ hero "Your design backlog, / *cleared every week.*"

---

## v1 — DesignJoy angle (2026-10-04 → 2026-10-06, tag `copy-v1`)

Original launch copy, solo-founder/startup tone modelled on DesignJoy. Lines are in the v1 column above.

---

## Open offer questions (for mid-to-large teams)

The copy now speaks to teams; parts of the offer are still built for a solo founder. Decide before pushing the team angle harder:
1. **Seats:** "Up to 3 users" is low for a 50–500-person company. Consider 10 users, or unlimited viewers + N requesters.
2. **Throughput:** one request at a time is the DesignJoy model. Teams will expect 2+ lanes by default; the Team plan on /subscriptions/ should be the hero offer for this ICP.
3. **Procurement:** finance will ask for annual billing, invoices/POs, an MSA/NDA and a named point of contact. None are mentioned.
4. **Brand consistency:** a "dedicated creative director + your brand system on file" promise answers "will quality drift across requests?"
5. **Where they already work:** Slack channel, Jira/Asana/Linear intake, Figma handoff. The board is our own; say how it connects to theirs.
6. **Proof:** testimonials are placeholders. Logos and one case study from a team-sized client would do more than any headline.
