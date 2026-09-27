import { getCollection, type CollectionEntry } from 'astro:content';
import { YEAR } from '../config';

export async function getEditions(): Promise<CollectionEntry<'editions'>[]> {
  const all = await getCollection('editions');
  return all.sort((a, b) => b.data.year - a.data.year);
}

/** The edition shown on the home page: config YEAR if it exists, else the latest. */
export async function getCurrentEdition(): Promise<CollectionEntry<'editions'>> {
  const all = await getEditions();
  const current = all.find((e) => e.data.year === YEAR) ?? all[0];
  if (!current) throw new Error('No editions found in src/content/editions.');
  return current;
}

export async function getResearchAreas(year: number) {
  const areas = await getCollection('researchAreas', (a) => a.data.edition === year);
  return areas.sort((a, b) => a.data.order - b.data.order);
}

export async function getReferences(ids: string[]) {
  const all = await getCollection('references');
  const byId = new Map(all.map((r) => [r.data.id, r.data]));
  return ids.map((id) => {
    const ref = byId.get(id);
    if (!ref) throw new Error(`Unknown reference id "${id}" (see src/content/references.json).`);
    return ref;
  });
}

export async function getProjects(year: number) {
  const projects = await getCollection('projects', (p) => p.data.edition === year);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Anchor id for a project, derived from its title (used for cross-links in Markdown). */
export function projectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Reference ids cited as (#ref-…) links in a Markdown body. */
export function citedReferenceIds(markdown: string | undefined): string[] {
  return [...(markdown ?? '').matchAll(/\(#ref-([a-z0-9-]+)\)/g)].map((m) => m[1]);
}
