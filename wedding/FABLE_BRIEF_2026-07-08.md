# Fable 5 Brief — Lisbon Wedding Guest Site (Samantha & Matt)

## Context
Paul's daughter Samantha is marrying Matt in Lisbon, Portugal — wedding day July 18, 2026, at
Pestana Palace Lisboa. Paul wants a guest-facing website he can text as a link to wedding guests
(not a PDF/printout) with trip info: itinerary, hotel, restaurants, sightseeing, day trips,
practical tips. Guests open it on their phones.

A rough scaffold already exists and is LIVE at **https://acesmolding.com/wedding/** — treat it as
a content/structure reference and a working example of what data is available, not something you
need to preserve. Full redesign is welcome. Repo: `~/acesmolding-website`, the page lives at
`wedding/index.html`, deploys automatically to acesmolding.com/wedding/ on push to `main`
(Netlify, already wired up — same pipeline as the main Aces Molding site).

## Goal
Redesign this into something genuinely beautiful, personal, and easy for a wedding guest to use
on their phone — not a generic travel brochure. Paul explicitly wants it "punched up and more
personal," not corporate.

## Must-have content (confirmed facts, don't invent)
- **Couple:** Samantha & Matt
- **Date:** July 18, 2026 (wedding day). Guest week: July 15 (arrivals) through July 19 (departures)
- **Venue/hotel:** Pestana Palace Lisboa, Rua Jau 54, 1300-314 Lisbon, Portugal. Phone +351 21 361
  5600. Check-in 3:00 PM, check-out 12:00 PM. **There is NO group transportation to the venue —
  Paul confirmed this on 2026-07-08 and had it removed everywhere it appeared (a quick-facts card,
  the schedule, hotel details, and the countdown-timer text all previously said "4:30 PM
  transportation/shuttle" — that was wrong, don't reintroduce it in any form).** The hotel does run
  its own general shuttle into town (unrelated, that one's real, fine to keep/mention).
- **Contact for guests:** WhatsApp Paul directly at +1 (631) 891-9855 — should be a tap-to-chat
  link (`https://wa.me/16318919855`), not just a phone number printed as text.
- **Wedding coordinator name/contact and any other hotel logistics: still TBD, leave a clearly
  marked placeholder — Paul is adding this over the coming week.**
- Content is a **work in progress** — Paul is traveling July 15 and wants the layout/structure
  solid now, with him adding more names/places through the week. Design for easy incremental
  content updates (Paul will be pasting in new sections via Gary, not editing code himself).

## Content to pull forward from the existing scaffold (verify/improve, don't just copy)
- Wedding week day-by-day itinerary
- "Do Not Miss" spots: São Pedro de Alcântara & Senhora do Monte miradouros, Manteigaria, Time Out
  Market, Belém Tower, Jerónimos Monastery, Pastéis de Belém, Cervejaria Ramiro
- Food guide (pastel de nata, bacalhau, seafood, bifanas, ginjinha, Vinho Verde/Douro wines)
- Day trips: Sintra, Cascais/Guincho/Cabo da Roca, Setúbal/Arrábida
- Useful Portuguese phrases, packing tips

## Functional requirements
- **Every named place should be tappable and open the guest's own Maps app** (Google Maps
  universal link format works cross-platform: `https://www.google.com/maps/search/?api=1&query=<place>`).
  A small inline map preview per place is a nice touch if you can make it look good — the existing
  scaffold uses no-API-key Google Maps embed iframes (`https://maps.google.com/maps?q=<lat>,<lon>&z=15&output=embed`)
  as one working approach, but use your judgment on the best UX.
- **Mobile-first.** This gets opened from a text message on a phone, not a desktop. Design for
  that first.
- Fast-loading — guests are often on hotel wifi or mobile data abroad.
- Custom, cohesive visual identity (Lisbon-inspired — trams, azulejo tiles, warm terracotta tones
  were the earlier direction, but you have creative license to do better). Avoid generic stock
  travel-blog aesthetics.

## Explicitly NOT wanted
- Not a PDF, not something meant to be printed
- Not corporate/brochure-toned — this is family, not a business
- Don't invent hotel/coordinator details that aren't confirmed above

## Round 2 feedback (2026-07-08, after first Fable pass)
Paul's reaction to the first redesign: structurally good (liked the map-tap-to-open behavior,
the schedule cards, the tone), but **too text-heavy — needs real photos, not just color/typography.**
Two sources — PREFER PAUL'S OWN PHOTOS OVER STOCK, since he's been to Portugal many times:
1. **Real wedding photos of Samantha & Matt** — Paul is sending these to Gary; staged at
   `wedding/images/couple/` before your next pass. Use them prominently (hero and/or an
   "about the couple" moment) once present.
2. **Paul's own personal photos from his many trips to Portugal** — staged at
   `wedding/images/portugal-paul/` (filenames are NOT reliable labels of what's in them — Gary is
   matching them to places by content, not filename, so check actual image content before
   assigning to a location card). Use these as the PRIMARY source for the "Do Not Miss" and
   day-trip location photos instead of stock — they're real and personal, which fits the
   family tone better than generic travel-blog stock.
3. **Fallback only:** if a named location (Belém Tower, Jerónimos, a specific miradouro, Sintra,
   Cascais/Guincho, Setúbal, etc.) has no matching photo from Paul, THEN source real stock
   photography for just that gap (e.g. Unsplash, Wikimedia Commons — verify license allows this
   use). Don't stock-photo something Paul already has a real photo of.
- Keep the tappable-map behavior and personal copy voice from the first pass — those landed well.
  This round is specifically about adding real imagery, not a full rewrite.

## Round 3 request (2026-07-08) — NEW SECTION: extended trips beyond Lisbon
Paul wants a new section added **right after the existing Day Trips section**, for guests who want
to extend their stay beyond the wedding week rather than a quick half-day excursion. Frame it
clearly as optional and longer than the Day Trips section (multi-day, not a there-and-back
afternoon) — visually/structurally distinct from Day Trips so guests don't confuse the two.

**Algarve (southern Portugal) — the core of this section:**
- Vilamoura — resort town, marina, golf
- Lagos — beaches, cliffs, old town
- Albufeira — lively beach town
- Sagres — dramatic cliffs at the southwestern tip of Portugal, fortress

**Further afield (mention as more adventurous/optional add-ons, not core recommendations):**
- A drive to Seville, Spain — across the border
- An even more adventurous option: a ferry to Morocco (e.g. from the Algarve/southern Spain over
  to Tangier) — flag this clearly as the most ambitious option, for guests extending their trip
  significantly, not a casual add-on

**Notes for Fable:**
- Verify realistic distances/drive times from Lisbon to each Algarve town, and from the Algarve to
  Seville and to a Morocco ferry crossing point — don't guess, these are the kind of numbers a
  guest would actually plan around.
- Keep the same tappable-map-link pattern as the rest of the site for each named place.
- Tone: still personal/Paul's-voice, but honest that this is a bigger commitment than Sintra or
  Cascais — a "if you're extending your trip" framing, not "squeeze this in before the wedding."

## Round 4 (2026-07-08) — stock photos sourced for Algarve/food/existing day-trip spots
Paul asked for real photos of the Algarve towns, grilled sardines/seafood, and Sintra/Cascais/Setúbal
(none of Paul's own Portugal photos happened to cover these). Sourced from Wikimedia Commons
(all CC-licensed, reusable with attribution) and staged at `wedding/images/stock/`:

- `vilamoura.jpg`, `lagos.jpg`, `albufeira.JPG`, `sagres.jpg` — Algarve towns for the new extended-trips section
- `sardines.jpg`, `seafood.jpg` — for the food section
- `sintra.jpg`, `cascais.jpg`, `setubal.jpg` — for the existing Day Trips section (fallback since
  Paul's own photos didn't cover these three)

**IMPORTANT — attribution required:** these are CC BY/CC BY-SA licensed (one is CC0), not public
domain. `wedding/images/stock/ATTRIBUTION.txt` has the license + artist + source link for each.
Add a small, unobtrusive photo-credits section/footer note on the page satisfying the attribution
requirement — don't skip this, it's a real license condition, not a suggestion.

Still preference order stands: Paul's own photos (`portugal-paul/`, `couple/`) first, these stock
images only for locations Paul didn't personally shoot.

## Deploy
Push to `main` in `~/acesmolding-website` (wedding/ subfolder) — Netlify auto-deploys. Live URL:
https://acesmolding.com/wedding/
