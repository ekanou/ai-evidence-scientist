/**
 * Every fact about the project that the owner still has to confirm lives here.
 *
 * A placeholder is `{ value, confirmed }`:
 * - `value: null` means nothing is known yet; pages show the `fallback` text.
 * - `confirmed: false` with a value means a working default (e.g. the name).
 *
 * In `npm run dev`, unconfirmed values render with a dashed outline.
 * `npm run build` lists every unconfirmed value as a warning
 * (and fails if STRICT_PLACEHOLDERS=1).
 */

export interface Placeholder<T = string> {
  value: T | null;
  confirmed: boolean;
  /** Shown on the public site while `value` is null. */
  fallback: string;
  /** What the owner needs to supply. */
  note: string;
}

const p = <T = string>(
  value: T | null,
  confirmed: boolean,
  fallback: string,
  note: string,
): Placeholder<T> => ({ value, confirmed, fallback, note });

export const placeholders = {
  WORKSHOP_NAME: p('The AI Evidence Scientist', false, 'The AI Evidence Scientist', 'Working name; confirm the final name.'),
  YEAR: p<number>(2027, false, '2027', 'Edition year.'),
  DATES: p('Any time; the project is ongoing', true, 'Dates to be announced', 'When participants can start (owner: any time, running project).'),
  LOCATION: p('Lab42, Science Park Amsterdam', true, 'Location to be announced', 'Building and campus.'),
  HOST_INSTITUTION: p('University of Amsterdam', true, 'Host institution to be announced', 'Host institution name.'),
  CONTACT_EMAIL: p<string[]>(
    ['e.kanoulas@uva.nl', 'j.qiao@uva.nl'],
    true,
    'the organisers (address to be announced)',
    'Addresses applications go to (Evangelos Kanoulas and Jingfen Qiao).',
  ),
  FUNDING_DETAILS: p(
    'Participants are appointed as interns and receive a light remuneration.',
    true,
    'Details of the remuneration will be published here.',
    'Remuneration terms (owner: light remuneration, as an internship).',
  ),
  PARTNER_INSTITUTIONS: p<string[]>(null, false, 'Partner institutions to be announced', 'Confirmed partner institutions.'),
  ORGANISERS: p<string[]>(
    ['Jingfen Qiao', 'Roxana Petcu', 'Gabriella Poerwawinata'],
    true,
    'Organising group being formed',
    'Confirmed organisers beyond the project lead (listed in src/content/people/).',
  ),
} satisfies Record<string, Placeholder<unknown>>;

export type PlaceholderKey = keyof typeof placeholders;

/** Plain-text value of a placeholder: the value if set, else the public fallback. */
export function text(key: PlaceholderKey): string {
  const ph = placeholders[key] as Placeholder<unknown>;
  if (ph.value === null) return ph.fallback;
  return Array.isArray(ph.value) ? ph.value.join(', ') : String(ph.value);
}

export function isFilled(key: PlaceholderKey): boolean {
  return placeholders[key].value !== null;
}

/** Keys the owner still needs to fill or confirm. */
export function unresolved(): { key: PlaceholderKey; state: 'missing' | 'unconfirmed'; note: string }[] {
  return (Object.keys(placeholders) as PlaceholderKey[])
    .filter((k) => !placeholders[k].confirmed)
    .map((k) => ({
      key: k,
      state: placeholders[k].value === null ? 'missing' : 'unconfirmed',
      note: placeholders[k].note,
    }));
}

export const WORKSHOP_NAME = text('WORKSHOP_NAME');
export const YEAR = Number(placeholders.YEAR.value);

/** Applications are rolling; there is no deadline (owner decision 2026-09-27). */
export const APPLICATIONS = 'Rolling, no deadline';

/** mailto: link that addresses an application to every contact at once. */
export function applicationMailto(): string | null {
  const to = placeholders.CONTACT_EMAIL.value;
  if (!to?.length) return null;
  const subject = encodeURIComponent(`Application: ${WORKSHOP_NAME} ${YEAR}`);
  return `mailto:${to.join(',')}?subject=${subject}`;
}

/** Known and confirmed by the brief (CLAUDE.md §1). */
export const PROJECT_LEAD = {
  name: 'Evangelos Kanoulas',
  affiliation: 'University of Amsterdam, IRLab',
  email: 'e.kanoulas@uva.nl',
};

export const SITE_DESCRIPTION =
  'An ongoing, in-person research project at Lab42, University of Amsterdam, on agentic AI for medical systematic reviews, for MSc AI students doing Project AI or their thesis.';

/**
 * Whether the student projects are public. When false, /projects/ is not built and
 * every link to it disappears (nav, research areas, call, Apply, FAQ).
 * The content stays in src/content/projects/ either way.
 */
export const SHOW_PROJECTS = true;

/** Whether the TREC track has been accepted. Keep false until the owner confirms. */
export const TREC_TRACK_ACCEPTED = false;
