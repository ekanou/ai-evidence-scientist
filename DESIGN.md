# DESIGN.md: The AI Evidence Scientist

This is the design plan for the workshop site, written before the build (CLAUDE.md §8) and updated to match what shipped. Deviations from the brief are listed at the end.

## 1. Principles

1. **A well-typeset methods paper, not a landing page.** Hairline rules, figure captions, author–year citations and a reference list do the work that cards, gradients and icons do on product sites.
2. **Colour carries meaning, so there is very little of it.** Teal means *a study*. Ochre means *the conclusion*: the pooled estimate, the decision that fixes it, and the one primary action (Apply). Everything else is ink on paper.
3. **One bold thing.** The forest plot at the top of the call is the only interactive element and the only motion. Everything else stays quiet.
4. **Honest placeholders.** Any unconfirmed fact comes from `src/config.ts`. In development it is outlined, and in a build it is listed as a warning.

## 2. Palette

| Token | Value | Use | Contrast on white |
|---|---|---|---|
| `--paper` | `#FFFFFF` | page background | — |
| `--ink` | `#1B2430` | text, headings, axis | 15.65:1 |
| `--muted` | `#5E6873` | secondary text, captions, excluded rows | 5.67:1 (AA) |
| `--rule` | `#D9DDE2` | hairlines, gridlines (decorative only) | 1.36:1 (non-text) |
| `--study` | `#2F6F6A` | study squares, research-area numerals | 5.83:1 |
| `--pooled` | `#C08A1E` | diamond fill, primary-button fill | 3.05:1 (graphics only, ≥3:1) |
| `--pooled-text` | `#8A5E0B` | ochre used as text (pooled value, link hover) | 5.70:1 (AA) |
| `--wash` | `#F4F5F7` | code, the Apply box and the review-loop panel | muted on wash 5.20:1 |

Text on the ochre button is ink (`#1B2430` on `#C08A1E` = 5.14:1). White on ochre fails (3.05:1), so it is never used.

There is no dark theme. The figure's colour semantics were tuned for white paper, and the brief specifies white. The site sets `color-scheme: light`.

## 3. Type

- **Reading:** Source Serif 4 (variable, optical-size axis). Self-hosted via `@fontsource-variable/source-serif-4`.
- **UI, figure labels, navigation and numerals:** Public Sans (variable). Self-hosted via `@fontsource-variable/public-sans`.
- Body is 18px on narrow screens and 19.5px from 48rem up. Line-height is 1.6 and the measure is capped at 66ch (about 70 characters).
- The heading scale is modest (h1 2.1–2.9rem fluid, h2 1.55rem, h3 1.15rem) and uses the serif at semibold weight with sentence case. There are no eyebrow labels.
- Figure numbers use tabular lining numerals in Public Sans (`font-variant-numeric: tabular-nums`).

## 4. Layout wireframe

```
wide (≥ 64rem)
┌──────────────────────────────────────────────────────────────┐
│ The AI Evidence Scientist        Call  Data & evaluation  People  Apply  FAQ │
├───────────────┬──────────────────────────────────────────────┤
│ Editions      │ h1  … 2027: Living systematic reviews …        │
│   2027 ●      │ lede (italic serif)                            │
│               │ Dates | Location | Format   (small dl, 3 cols) │
│ On this page  │ ── Figure 1 ─────────────────────────────────  │
│   Premise     │  forest plot (interactive)                     │
│   Research…   │ ───────────────────────────────────────────── │
│   …           │ Premise (essay, 66ch)                          │
│  (sticky)     │ Research areas (numbered, hanging numerals)    │
│               │ Outputs · Relationship to TREC · References    │
│               │ Apply box                                      │
└───────────────┴──────────────────────────────────────────────┘

narrow (< 64rem)
┌──────────────────────────────┐
│ The AI Evidence Scientist  [Menu ▾]  ← <details>: pages + editions
├──────────────────────────────┤
│ single column, 16px gutters  │
└──────────────────────────────┘
```

- The side nav is quiet: small sans in muted colour, with the current item in ink and a 2px teal bar.
- Figures may extend slightly past the reading measure (up to 44rem). Text never does.
- Research areas are the only numbered list, because the call orders them. Page sections are not numbered.

## 5. The forest plot (signature element)

- Semantic structure: a `<figure>` holding a column-header row, four study rows, a pooled row and an axis row. Each row is an HTML grid row: study label, a plot cell (inline SVG in a shared `viewBox`, so the x-scale lines up across rows), effect and weight.
- Squares are teal, with **area** ∝ weight (standard forest-plot convention; side ∝ √weight). The diamond is ochre. Its width is symbolic, not a confidence interval, and the caption says so. A dotted ochre line runs from the diamond through the study rows at the pooled value. A solid ink line marks zero.
- Without JS, the full four-study plot renders as static markup and SVG, with no dead buttons. With JS, the script turns each row into a `<button aria-pressed>` ("Exclude study B"). Toggling recomputes the fixed-effect weighted mean and renormalises the weight column. The diamond and pooled line tween over 450ms with ease-out cubic. Under `prefers-reduced-motion: reduce` the move is instant.
- A live readout (`aria-live="polite"`) reads: "3 of 4 studies found (75% recall). Pooled effect 0.00." A reset button appears once any study is excluded.
- Excluded rows use muted text with a strike-through, a hollow square and "excluded" in the weight column. Colour is never the only signal.

## 6. Review-loop diagram (Data & evaluation)

A vertical flowchart as inline SVG, readable at 360px: five process boxes, then a decision diamond ("Gaps or contradictions? Search again?"). The *yes* path loops back up the right side to "Formulate search". The *no* path exits to "Stop and submit". The decision diamond has an ochre outline and an "Evaluated step" label, because it is the decision that fixes the conclusion. The SVG has `role="img"`, `<title>` and `<desc>`, and the figure caption repeats the loop in prose.

## 7. Checked against the brief's "avoid" list

| Avoid | Status |
|---|---|
| Cream backgrounds | White paper; the only tint is `#F4F5F7` cool grey, used in two places. |
| Terracotta accents | None. The accent is ochre and it is semantic. |
| ALL-CAPS eyebrows | None. The only small-caps-like text is figure-column headers, in sentence case. |
| Middle-dot meta strings | Hero meta is a definition list. The live readout uses a sentence. See deviations. |
| Identical rounded cards with shadows | No cards and no shadows. Research areas are a list, and the Apply box is one tinted panel with a rule. |
| Gradient washes | None. |
| Scroll-triggered fade-ins | None. The forest-plot transition is the only animation. |
| "→" on every link | None. |

## 8. Deviations from CLAUDE.md

1. **Hero meta line.** §4 writes `{{DATES}} · {{LOCATION}} · Funded, in-person, ten weeks`, but §8 forbids middle-dot meta strings. It renders as a three-item definition list (Dates / Location / Format).
2. **Live caption wording.** §5's example is "3 of 4 studies found · pooled effect 0.00". The shipped readout is "3 of 4 studies found (75% recall). Pooled effect 0.00." It has the same content, adds the recall percentage and has no middle dot.
3. **Square size.** §5 says "square size ∝ weight". Squares use *area* ∝ weight, the forest-plot convention. Side ∝ weight would make the 7× study look 49× larger.
4. **Static fallback.** The no-JS fallback is static HTML+SVG markup of the full plot, not a single standalone SVG file. It looks the same and gives screen readers real text.
5. **References differ from the brief's notes** (verified against Crossref, CEUR-WS, the ACL Anthology and Cochrane, September 2026):
   - The CLEF TAR overviews have the same four authors in 2017, 2018 and 2019. The 2017 and 2018 titles say "Technologically Assisted Reviews", while 2019 says "Technology Assisted Reviews".
   - Yang, Lewis & Frieder (arXiv:2106.09866) is titled *On Minimizing Cost in Legal Document Review Workflows* and appeared at DocEng 2021.
   - Soudani, Kanoulas & Hasibi (2025) appeared in *Findings of ACL 2025*, not the main conference.
   - Norman et al. (2019) covers diagnostic test accuracy reviews.
   - The current Cochrane Handbook is version 6.5 (updated August 2024).
6. **Placeholder warnings.** §2 asks for a build with zero warnings, and §7 asks the build to warn about unfilled placeholders. The only warnings the build emits are the placeholder list. Set `STRICT_PLACEHOLDERS=1` to turn them into a build failure before launch.

## 9. Verification (September 2026)

- Lighthouse runs on the production build under a sub-path, with all five pages tested. Mobile scores 97–100 for performance and 100 for accessibility, best practices and SEO. Desktop scores 100 in every category. Stylesheets are inlined (`build.inlineStylesheets: 'always'`) to remove render-blocking requests.
- The forest plot was tested with the keyboard (Tab, then Space), and `aria-pressed` and the live readout update. The server-rendered markup contains no buttons, so the plot is static without JS.
- Layouts were checked at 360, 768 and 1280px.
