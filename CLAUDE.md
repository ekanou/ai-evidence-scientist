# CLAUDE.md — Workshop website: The AI Evidence Scientist

This file briefs Claude Code on the project. Read it fully before writing code. When something here conflicts with a later instruction from the project owner in chat, the owner wins; update this file to match.

## Owner decisions log

- 2026-09-27: The host is the UvA. The call is for MSc AI students who want to do Project AI or a thesis, and it pays a light remuneration as an internship.
- 2026-09-27: The organisers are Jingfen Qiao, Roxana Petcu and Gabriella Poerwawinata, all PhD students at UvA IRLab.
- 2026-09-27: There is no deadline; applications are rolling. Applications go to e.kanoulas@uva.nl and j.qiao@uva.nl (Jingfen Qiao).
- 2026-09-27: The location is Lab42, Science Park Amsterdam. There are no fixed dates: it is a running project that participants can start at any time, not a summer workshop.
- 2026-09-27: Visible copy says "project", not "workshop". Where "project" would clash with the student projects or Project AI, use "we" or "our". The year and editions structure stay for now.
- 2026-09-27: The projects page stays public. `SHOW_PROJECTS` in `src/config.ts` can hide it (and every link to it) if needed.
- 2026-09-27: Students do not choose projects when they apply. The projects page shows the kinds of work on offer, and the application note does not ask for project preferences.
- 2026-09-27: The duration is at least eight weeks, because Project AI lasts two months. This replaces "ten weeks". The research areas are broken down into student projects (a `/projects` page, with content in `src/content/projects/<year>/`), each sized for eight weeks and extendable to a thesis.

## 1. What we are building

A small, static website for an ongoing, in-person research project on **agentic AI for medical systematic reviews**, hosted by the University of Amsterdam at Lab42, Science Park Amsterdam. It was originally briefed as a summer workshop; the owner changed this to a running project that participants can start at any time. Participants are MSc AI students doing their Project AI or MSc thesis, appointed as interns with a light remuneration. The format is modelled on the Johns Hopkins HLTCOE SCALE workshops (see pages for SCALE 2025, 2026 and 2027 at https://hltcoe.jhu.edu/research/scale/). Each SCALE edition has one page per year: a title, dates, a motivating essay, a list of research areas, references, and an application call. Our site follows that information architecture, with a better design and one interactive element.

**Important:** we are not SCALE and not JHU. Do not use the SCALE name, JHU/HLTCOE logos, or their wording. Structure is borrowed; content and brand are ours.

- Working name: `{{WORKSHOP_NAME}}` — use "The AI Evidence Scientist" until the owner confirms a name. Keep the name in one config value so it can be changed in one place.
- Edition: `{{YEAR}}` (default 2027).
- Host institution: University of Amsterdam (UvA), confirmed by the owner on 2026-09-27. Applications go to e.kanoulas@uva.nl and j.qiao@uva.nl. There is no deadline (rolling). Location: Lab42, Science Park Amsterdam. Participants can start at any time.
- Project lead: Evangelos Kanoulas, University of Amsterdam, IRLab (e.kanoulas@uva.nl). Confirm before publishing any other names.

### Audience and the site's primary job
1. MSc AI students (UvA) looking for a Project AI or MSc thesis topic, deciding whether to apply → the site must make the research problem compelling and the application path obvious.
2. Clinical methodologists, Cochrane/evidence-synthesis people, biostatisticians, who we need as partners and assessors → the site must show we understand how reviews are actually done.
3. Funders and prospective co-organisers → the site must look credible and precise.

## 2. Tech stack and conventions

- **Astro** (static output), content in Markdown/MDX under `src/content/`. No client framework unless needed; the one interactive component (§5) may be a small vanilla TS or Preact island.
- Plain CSS with custom properties (design tokens in `src/styles/tokens.css`). No Tailwind, no UI kit.
- Self-host fonts (via `@fontsource` packages) — no runtime calls to Google Fonts.
- Deploy target: GitHub Pages (add a workflow in `.github/workflows/deploy.yml`). Site must work under a sub-path (`base` config).
- Every year is a content entry, so adding the next edition is one new Markdown file. Mirror SCALE's year archive.
- Commands: `npm run dev`, `npm run build`, `npm run preview`. Keep `npm run build` passing with zero warnings.
- Accessibility floor: semantic HTML, one `h1` per page, visible keyboard focus, colour contrast ≥ WCAG AA, `prefers-reduced-motion` respected, all charts have a text alternative.
- Lighthouse targets: ≥ 95 on performance, accessibility, best practices, SEO.

### Suggested structure
```
src/
  config.ts                # WORKSHOP_NAME, YEAR, dates, contact, host
  content/
    editions/2027.md       # the call (copy in §4)
    research-areas/*.md    # one file per area (§4), with order field
    people/*.md            # organisers, empty until confirmed
    references.json        # §6
  components/
    ForestPlotHero.*       # §5
    ResearchArea.astro
    ApplyBox.astro
    EditionNav.astro       # year list, like SCALE's sidebar
  pages/
    index.astro            # current edition = the call
    editions/[year].astro
    data-and-evaluation.astro
    people.astro
    apply.astro
    faq.astro
  styles/tokens.css
```

## 3. Site map

| Page | Purpose |
|---|---|
| Home (current edition) | The call itself: hero, dates, premise essay, research areas, references, apply box. Mirrors a SCALE edition page. |
| Data & evaluation | The task definition, frozen collections, review/update pairs, what participants submit, how it is scored, leakage safeguards. |
| People | Organisers, partner institutions, methodologist advisors. Ship with an honest "Organising group being formed — get in touch" state; never invent people. |
| Apply | Who should apply (MSc AI students, Project AI or thesis), remuneration (light, as an internship), how to apply, rolling decisions (no deadline). |
| FAQ | "Is this replacing human reviewers?", "Do I need medical training?", "Relationship to TREC?", "Will data be released?" |
| Editions archive | Year list in nav, like SCALE. Only 2027 exists at launch. |

## 4. Page copy for the current edition

Use this copy as written; light edits for flow are fine. Do not add claims or statistics that are not here or in §6.

### Hero
**{{WORKSHOP_NAME}} {{YEAR}}: Living Systematic Reviews as a Testbed for Agentic Research**

Start: any time · {{LOCATION}} · In-person internship of at least eight weeks, light remuneration

Lede: *Can an AI agent carry out a medical systematic review — and how would we know if it got the conclusion wrong?*

### Premise (essay, 3–4 short paragraphs)

Systematic reviews are the foundation of evidence-based medicine. They also take more than a year and cost tens of thousands of dollars each, so most are out of date soon after publication. Agentic "deep research" systems now claim to search, screen, extract, appraise and meta-analyse on their own, and early end-to-end pipelines report better-than-human screening and extraction.

None of the usual retrieval, question-answering or RAG benchmarks can check these claims. In a review, what matters is not whether the answer reads well. It matters whether the agent found the evidence that changes the conclusion, applied the eligibility criteria correctly, knew when to stop searching, and reached the pooled estimate a careful team of methodologists would have reached.

Our central premise is that **review updates are forecasts that resolve.** A published review and its later update form a natural experiment. We freeze the literature — bibliographic databases, trial registries, preprints — at the original search date and ask an agent to produce the review from its protocol. Then we freeze it at the update's search date and ask the agent to update its own review. The published update, adjudicated by methodologists, resolves the task. This gives agentic evaluation something rare: a prospective, checkable ground truth at the level of *conclusions*. Did the pooled effect change direction? Did it cross a decision threshold? Did the certainty of evidence move? Recall of included studies alone cannot tell us this.

Given a review protocol and a resource budget, systems choose their own searches across multiple sources; screen titles, abstracts and full texts; extract outcome data from text, tables and figures; assess risk of bias; run the meta-analysis in code; and submit a synthesis with citations and explicit uncertainty — together with a complete log of every search, judgment and stopping decision.

### Research areas (one file each, in this order)

1. **Protocol-to-search and the recall denominator.** Once agents write their own queries, there is no Boolean candidate set to measure recall against. We will build pooled, query-independent reference sets and study agentic search across bibliographic databases, trial registries and non-English sources. Language bias is a known threat to review validity, and multilingual retrieval is where language technology can contribute most.
2. **The decision to search again.** Agent confidence is a poor stopping signal: model uncertainty collapses once retrieved text is in context, whether or not that text is relevant. We will study stopping rules that are calibrated and accountable, and the two failure modes that matter most: searching for confirmation and stopping too early.
3. **Eligibility, extraction and appraisal at full-text scale.** Eligibility decisions supported by evidence spans, extraction of numbers from tables and forest plots, and risk-of-bias judgments. We will model reviewer disagreement explicitly instead of hiding it inside a single gold label.
4. **Outcome-aware evaluation.** The cost of a missed study depends on what else was found. We will score systems by the stability of their conclusions, building on work that re-ran meta-analyses under simulated screening and re-scored systems by review outcomes. Any LLM-based judge will be validated against expert methodologists; correlation with past system rankings is not enough.
5. **Avoiding leakage.** Models have read the published reviews. We will evaluate on reviews and updates published after model training cutoffs, and measure only the improvement over a zero-shot prediction of the conclusion made without retrieval.
6. **Societies of agents.** Does splitting the work across specialist searcher, screener, appraiser and statistician agents improve coverage? Does independent double-checking catch errors, or do agents built on the same models repeat the same mistakes at higher cost?
7. **Human budgets.** We will compare systems under fixed human-effort budgets — human screening followed by machine completion, and model-routed selective review — and report what the finished review is worth relative to the human time and compute it consumed.

### Outputs (short list near the end of the page)
Frozen literature collections; review/update task pairs with adjudicated conclusions; an open action-log format; baseline agents; an evaluation toolkit. All released publicly.

### Relationship to TREC (one short paragraph)
The workshop is designed to build the collection, baselines and validated metrics for a proposed TREC track on technology-assisted review and agentic evidence synthesis. Phrase this as "proposed" unless the owner confirms acceptance.

### Apply box
We invite MSc AI students at the University of Amsterdam who want to do their Project AI or their MSc thesis on this problem to apply. The workshop is an internship with a light remuneration. Send a CV and a short note on your interest to {{CONTACT_EMAIL}}. There is no deadline: applications are reviewed on a rolling basis, so apply early.

### Data & evaluation page (expand from the premise)
Explain in plain prose, with one diagram (the review loop, below):
- **Task input:** protocol (question, eligibility criteria, outcomes), frozen collection, resource budget (human judgments and compute).
- **Participants submit four things:** selected studies with linked reports; eligibility decisions with supporting evidence; a synthesis with citations and uncertainty; an action log (searches, judgments, human interventions, the stopping decision).
- **Scoring connects three qualities to effort:** evidence coverage, decision correctness, synthesis/conclusion quality → against human and computational cost. Report sensitivity to the assumed price of a missed study rather than a single winner.
- **Workflow conditions:** screen until stopping; fixed human budget; budget then machine completion; model-routed selective review.
- **Review loop diagram** (inline SVG, accessible): formulate search → retrieve and prioritise → assess eligibility → extract findings → inspect synthesis → gaps or contradictions → back to formulate search. Mark the "search again?" decision as the evaluated step.

## 5. Signature element: interactive forest-plot hero

Spend the design's boldness here; keep everything else quiet.

A small forest plot illustrating why recall cannot price an omission. Four studies: effects 0, 0, 0, 1; weights 1, 1, 1, 7 (square size ∝ weight). Pooled (fixed-effect, weighted mean) = 0.70, drawn as a diamond.
- Each study row is a toggle button ("Include/exclude study B"). Toggling recomputes the pooled diamond with a short eased transition (instant under reduced motion).
- Dropping one small null study → 0.78. Dropping the large study → 0.00. Both keep 3 of 4 studies (75% recall).
- A live caption states the recall and pooled value, e.g. "3 of 4 studies found · pooled effect 0.00". An `aria-live="polite"` region announces changes.
- A one-line note under it: "Illustrative numbers. Same recall, opposite conclusions."
- No confidence intervals needed; if drawn, keep them symbolic and say so. Do not present it as real data.
- Keyboard operable; works without JS as a static SVG of the full four-study plot.

## 6. References (only these; verify titles and links before publishing)

Do not add references from memory. For each, confirm the exact title and a working link via web search; if a detail cannot be verified, list authors, venue and year only.

- Cao C., et al. (2025). *Automation of Systematic Reviews with Large Language Models.* medRxiv. doi:10.1101/2025.06.13.25329541
- Kanoulas E., Li D., Azzopardi L., Spijker R. CLEF eHealth Technology Assisted Reviews overviews, 2017, 2018, 2019 (CEUR-WS Vol-1866, Vol-2125, Vol-2380). *Verify author lists per year.*
- Norman C., Leeflang M., Porcher R., Névéol A. (2019). *Systematic Reviews* (simulated screening; 48 reviews, meta-analyses re-run).
- Kusa W., Zuccon G., Knoth P., Hanbury A. (2023). ICTIR 2023 (outcome-based evaluation of screening runs).
- Soudani H., Kanoulas E., Hasibi F. (2025). ACL 2025 (uncertainty of LLMs under retrieval).
- Yang E., Lewis D. D., Frieder O. (2021). arXiv:2106.09866 (cost structure of TAR).
- Cormack G. V., Grossman M. R. (2014). SIGIR 2014 (evaluation of machine-learning protocols for TAR).
- Cochrane Handbook for Systematic Reviews of Interventions (current version), https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current

## 7. Placeholders — keep visibly marked until the owner fills them

Put all of these in `src/config.ts`. In development, render unfilled values with a visible dashed outline so they cannot ship unnoticed; `npm run build` should warn listing any that remain.

`WORKSHOP_NAME`, `YEAR`, `DATES`, `LOCATION`, `HOST_INSTITUTION`, `CONTACT_EMAIL`, `FUNDING_DETAILS`, partner institutions, organiser list. (`DEADLINE` was removed: applications are rolling.)

Filled by the owner so far: `HOST_INSTITUTION` (University of Amsterdam), `FUNDING_DETAILS` (light remuneration, as an internship) and the organiser list (Jingfen Qiao, Roxana Petcu, Gabriella Poerwawinata). `LOCATION` is set to "University of Amsterdam, Amsterdam" by inference, but the venue is still unconfirmed.

## 8. Design brief

Follow a two-pass process: write a short design plan (palette, type, layout wireframe, principles) in `DESIGN.md`, check it against this brief for generic defaults, then build.

- **Subject vernacular:** evidence synthesis — forest plots, PRISMA flow diagrams, protocols, the discipline of methods sections. The site should feel precise, calm and scholarly, like a well-typeset methods paper, not a startup landing page.
- **Colour (starting point, refine in DESIGN.md):** white paper `#FFFFFF`; ink `#1B2430`; muted text `#5E6873`; rule `#D9DDE2`; study-square teal `#2F6F6A`; pooled-diamond ochre `#C08A1E` (used only for the pooled estimate and primary links/buttons, so it always means "the conclusion"). Check AA contrast for ochre on white; darken for text use if needed.
- **Type:** one serif for reading (e.g. Source Serif 4) and one clearly distinct sans for UI and figure labels (e.g. Public Sans). Body 18–20px, line length under ~75 characters, generous line-height for the serif.
- **Layout:** single left-aligned reading column for the essay; research areas as a numbered list only because they are ordered in the call (otherwise do not number); year archive as a quiet side nav on wide screens, collapsing to a top menu on mobile.
- **Avoid:** cream backgrounds, terracotta accents, ALL-CAPS eyebrow labels over every heading, middle-dot meta strings, identical rounded cards with soft shadows, gradient washes, scroll-triggered fade-ins on every section, "→" appended to every link.
- **Motion:** only the forest-plot transition. Nothing animates on scroll.

## 9. Writing rules for any new copy

Plain, active, sentence case. No hype ("revolutionary", "superhuman"). Claims about AI performance appear only with a reference from §6. Say "proposed" for the TREC track. Never imply that JHU, NIST, Cochrane or any partner endorses the workshop unless the owner confirms it.

## 10. Definition of done

- [ ] All pages in §3 exist and build statically; `npm run build` passes.
- [ ] Home page contains every section in §4 in order.
- [ ] Forest-plot hero matches §5, is keyboard operable, announces changes, and degrades to static SVG.
- [ ] Review-loop diagram on the Data & evaluation page, with text alternative.
- [ ] References verified per §6.
- [ ] No SCALE/JHU branding; all placeholders centralised and flagged.
- [ ] Responsive at 360px, 768px, 1280px; screenshots of each checked.
- [ ] Lighthouse ≥ 95 in all four categories; reduced-motion respected.
- [ ] GitHub Pages workflow deploys the site.
- [ ] `DESIGN.md` records the design plan and any deviations from §8.
