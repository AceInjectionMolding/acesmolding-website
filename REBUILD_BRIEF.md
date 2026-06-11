# REBUILD BRIEF — Aces Injection Molding website

**For: Fable (run via Paul's Claude Code on the Max plan).**
**From: Gary, on Paul's behalf — 2026-06-11.**

Paul wants this site rebuilt into an **ultra-modern, high-end, genuinely impressive** site for an injection molding / mold-making / rapid-prototyping shop. You have full creative latitude on design — but the SEO foundation below is non-negotiable, because this site is the front line of a real competitive fight (see "Why this matters").

---

## ⛔ HARD RULES (do not break these)

1. **Work on a branch called `redesign`. NEVER commit to `main`.** Paul reviews a Netlify preview before anything goes live. (`git checkout -b redesign`)
2. **Keep every existing page filename/URL exactly as-is:** `index.html`, `services.html`, `mold-making.html`, `industries.html`, `contact.html`, and everything under `blog/`. No renames, no moves, no new URL structure. Changing URLs tanks rankings.
3. **Do NOT modify** `sitemap.xml`, `robots.txt`, or `_redirects`. Leave them exactly as they are.
4. **Preserve all SEO content** — every mention of mold making, injection molding, rapid prototyping, 3D printing, and **Long Island / Bohemia NY / local** keywords stays. You may restructure layout and rewrite for clarity, but do not delete the keyword-bearing copy or the local-business signals.
5. **Reuse the existing media** — logos (`logo-*.png/svg/jpg`), `videos/`, and `images/` are already bandwidth-optimized (compressed −70% on purpose). Don't add huge new uncompressed assets; this is a Netlify Pro site on a credit budget.
6. **Keep it a static site** (HTML/CSS/JS). No build step / framework that Netlify isn't already set up for, unless you also update `netlify.toml` correctly and verify it builds.

## ✅ WHAT TO MAKE IT

- Modern, bold, premium manufacturing aesthetic: strong hero, confident typography, smooth/tasteful motion, clear CTAs ("Request a Quote", "Contact Us").
- **Mobile-first and fast** — Lighthouse-minded. Performance and accessibility matter.
- Clear service presentation: Plastic Injection Molding, Mold Making, Rapid Prototyping, 3D Printing, and the machine/capabilities info already on the site.
- Trust signals: capabilities, quality, local Long Island presence, easy contact.
- Keep/strengthen the contact page conversion path (quote request).

## 🎯 WHY THIS MATTERS (context, not optional)

This site exists to **outrank Dynamic Plastics on Google for local mold-making searches** — that's the whole mission. A $160K job was lost to a competitor via Google. So: impress visitors AND protect every ounce of local SEO. Beautiful + invisible-to-Google = failure. Beautiful + ranking = the goal.

## 📦 DELIVERABLE / PROCESS

1. `git checkout -b redesign`
2. Rebuild on that branch.
3. Verify it renders locally and nothing references a renamed/missing page.
4. Push the `redesign` branch. Netlify will auto-build a **deploy preview URL**.
5. Reply to Paul with: a summary of what you changed, the preview URL (or that the branch is pushed and Netlify is building it), and confirmation that rules 2–4 above were honored (URLs unchanged, sitemap/robots/_redirects untouched, SEO copy preserved).
6. Paul reviews the preview. If he approves, **he** merges `redesign` → `main` (that's the only thing that goes live). If not, the live site is untouched.

---

*Disable/rollback is trivial: nothing ships until `redesign` is merged to `main`. Until then the live site is exactly as it is today.*
