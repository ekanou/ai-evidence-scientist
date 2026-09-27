# The AI Evidence Scientist: workshop site

A static Astro site for the summer workshop on agentic AI for medical systematic reviews.
The brief is in `CLAUDE.md` and the design plan and deviations are in `DESIGN.md`.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node ≥ 22.12) |
| `npm run dev` | Dev server at http://localhost:4321. Unfilled placeholders are outlined. |
| `npm run build` | Static build to `dist/`. Warns about every unfilled placeholder. |
| `npm run preview` | Serve `dist/` locally |

To test the GitHub Pages sub-path locally, run `BASE_PATH=/repo-name npm run build`, then `BASE_PATH=/repo-name npm run preview`.
Set `STRICT_PLACEHOLDERS=1` to make the build fail while any placeholder is unfilled.

## Filling in placeholders

All unconfirmed facts are in `src/config.ts`: name, year, dates, location, host, contact email, deadline, funding, partners and organisers.
Set `value` and change `confirmed: true`. The dev outline and the build warning then disappear.
The TREC paragraph stays "proposed" until `TREC_TRACK_ACCEPTED` is `true`, and the build fails if the wording drops "proposed" before then.

## Content

- `src/content/editions/<year>.md`: one file per edition. The frontmatter holds the title, lede, outputs, the TREC paragraph and reference ids. The body is the premise essay.
- `src/content/research-areas/<year>/NN-slug.md`: one file per research area, ordered by `order`.
- `src/content/projects/<year>/NN-slug.md`: student projects, each sized for Project AI (eight weeks) with a thesis extension. The frontmatter holds the title, stage, research areas, question and background. The body holds the "In eight weeks", "As a thesis" and "Starting data" paragraphs. To link to another project, use `#<slugified-title>`.
- `src/content/people/*.md`: confirmed people only.
- `src/content/references.json`: the verified references. Cite them in Markdown as `[Cao et al., 2025](#ref-cao-2025)`.

**Adding a new edition:** add `editions/<year>.md` and its research areas, then set `YEAR` in `src/config.ts`.
The home page shows the `YEAR` edition. Earlier editions stay at `/editions/<year>/` and appear in the sidebar archive.
For past editions, record `dates` and `location` in their frontmatter.

## Deploying

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. It sets `SITE` and `BASE_PATH` from the Pages configuration.
In the repository settings, set Pages → Source to "GitHub Actions".

## Note on iCloud

On the owner's machine the project lives in iCloud Drive. There, `node_modules` is a symlink to `~/.local/share/nosync/ai-evidence-scientist/node_modules`, which keeps dependencies out of iCloud sync. (Symlinking to a `node_modules.nosync` folder breaks Vite, so don't use that trick.) A fresh clone elsewhere needs only `npm install`.
