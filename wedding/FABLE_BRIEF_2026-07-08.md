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
  5600. Check-in 3:00 PM, check-out 12:00 PM. Transportation to the venue on the wedding day departs
  the hotel at 4:30 PM.
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

## Deploy
Push to `main` in `~/acesmolding-website` (wedding/ subfolder) — Netlify auto-deploys. Live URL:
https://acesmolding.com/wedding/
