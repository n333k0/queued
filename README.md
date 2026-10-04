# queued. by RemotoLabs

Design on subscription: unlimited requests, ~48h delivery, pause anytime. Sister product of [shipped.](https://n333k0.github.io/shipped/).

Live: https://n333k0.github.io/queued/ (deploys on push to `main`).

```sh
npm install
npm run dev      # http://localhost:4321/queued/
npm run build
```

## Where things live

| What | File |
|---|---|
| All copy, price, capacity, FAQ, work, testimonials | `src/data/site.ts` |
| **Calendly / Stripe links** | `links` in `src/data/site.ts` |
| Sections | `src/components/*.astro`, assembled in `src/pages/index.astro` |
| Colours & fonts | `src/styles/global.css` |
| Brief / plan / design notes | `prompt.md`, `../_plans/design-subscription-plan.md`, `design.md` |

## Before launch

- [ ] `links.calendly`: your Calendly event URL. The live embed and "Book a call" popups switch on automatically (until then a booking preview is shown).
- [ ] `links.checkout`: Stripe Payment Link for the subscription; `links.portal`: Stripe customer portal (Login / pause / cancel).
- [ ] `brand.email`, `brand.parentUrl`.
- [ ] `capacity.taken` as members join.
- [ ] Replace placeholder testimonials and the `public/placeholder/` images with real work.
