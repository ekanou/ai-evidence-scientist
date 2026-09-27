import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** One Markdown file per edition. The body is the premise essay. */
const editions = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/editions' }),
  schema: z.object({
    year: z.number().int(),
    /** Follows "{WORKSHOP_NAME} {year}:" in the h1. */
    title: z.string(),
    lede: z.string(),
    /** Third item of the hero facts, next to dates and location. */
    format: z.string(),
    /** Past editions record their own dates and location; the current one reads src/config.ts. */
    dates: z.string().optional(),
    location: z.string().optional(),
    heroFigure: z.enum(['forest-plot']).optional(),
    description: z.string(),
    outputs: z.array(z.string()).default([]),
    outputsNote: z.string().optional(),
    trec: z.string().optional(),
    /** Reference ids (from references.json) listed on this edition's page, in order. */
    references: z.array(z.string()).default([]),
  }),
});

/** research-areas/<year>/<nn>-slug.md, rendered as an ordered list. */
const researchAreas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research-areas' }),
  schema: z.object({
    edition: z.number().int(),
    order: z.number().int(),
    title: z.string(),
  }),
});

/** Student projects, sized for Project AI (eight weeks) and extendable to a thesis. */
export const PROJECT_STAGES = [
  { id: 'infrastructure', label: 'Shared infrastructure' },
  { id: 'search', label: 'Search' },
  { id: 'stopping', label: 'Deciding to search again' },
  { id: 'screening', label: 'Screening, extraction and appraisal' },
  { id: 'evaluation', label: 'Evaluation' },
  { id: 'systems', label: 'Agent design and human effort' },
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    edition: z.number().int(),
    order: z.number().int(),
    title: z.string(),
    stage: z.enum(PROJECT_STAGES.map((s) => s.id) as [string, ...string[]]),
    /** Research-area numbers (the `order` of research-areas entries). */
    areas: z.array(z.number().int()).min(1),
    /** The one-sentence research question. */
    question: z.string(),
    background: z.string(),
  }),
});

/** Only people the owner has confirmed. Never invent entries. */
const people = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['lead', 'organiser', 'advisor']),
    affiliation: z.string(),
    email: z.email().optional(),
    url: z.url().optional(),
    order: z.number().int().default(100),
  }),
});

/** Verified references (CLAUDE.md §6). */
const references = defineCollection({
  loader: file('./src/content/references.json'),
  schema: z.object({
    id: z.string(),
    /** In-text label, e.g. "Cao et al., 2025". */
    cite: z.string(),
    authors: z.string(),
    year: z.number().int(),
    title: z.string(),
    venue: z.string(),
    details: z.string().optional(),
    url: z.url(),
    verified: z.string(),
  }),
});

export const collections = { editions, researchAreas, projects, people, references };
