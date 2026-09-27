/**
 * Every fact about the workshop that the owner still has to confirm lives here.
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
  DATES: p(null, false, 'Dates to be announced', 'Workshop dates, e.g. "8 June – 14 August 2027".'),
  LOCATION: p(null, false, 'Location to be announced', 'City and venue.'),
  HOST_INSTITUTION: p(null, false, 'Host institution to be announced', 'Host institution name.'),
  CONTACT_EMAIL: p(null, false, 'the organisers (address to be announced)', 'Public contact address for applications and questions.'),
  DEADLINE: p(null, false, 'to be announced', 'Final application deadline, e.g. "15 February 2027".'),
  FUNDING_DETAILS: p(
    null,
    false,
    'Details of what the workshop funds (travel, accommodation, stipends) will be published here.',
    'What the workshop pays for, and for whom.',
  ),
  PARTNER_INSTITUTIONS: p<string[]>(null, false, 'Partner institutions to be announced', 'Confirmed partner institutions.'),
  ORGANISERS: p<string[]>(null, false, 'Organising group being formed', 'Confirmed organisers beyond the project lead.'),
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

/** Known and confirmed by the brief (CLAUDE.md §1). */
export const PROJECT_LEAD = {
  name: 'Evangelos Kanoulas',
  affiliation: 'University of Amsterdam, IRLab',
  email: 'e.kanoulas@uva.nl',
};

export const SITE_DESCRIPTION =
  'A funded, in-person summer research workshop on agentic AI for medical systematic reviews, using living review updates as a testbed.';

/** Whether the TREC track has been accepted. Keep false until the owner confirms. */
export const TREC_TRACK_ACCEPTED = false;
