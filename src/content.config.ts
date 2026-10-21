import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recettes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recettes' }),
  schema: z.object({
    title: z.string(),
    /** Title tag SEO (H1 reste `title`). */
    seoTitle: z.string().optional(),
    description: z.string(),
    region: z.string().optional(),
    image: z.string().refine(
      (value) => value.startsWith('/') || z.string().url().safeParse(value).success,
      'L’image doit être une URL absolue ou un chemin public commençant par /',
    ),
    imageAlt: z.string(),
    imagePosition: z.string().default('center'),
    imageCredit: z.string(),
    imageCreditUrl: z.string().url(),
    category: z.enum(['plat', 'accompagnement', 'boisson', 'dessert']),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    difficulty: z.enum(['facile', 'moyen', 'avancé']),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /** Slugs de recettes liées (sinon scoring automatique). */
    relatedRecipes: z.array(z.string()).default([]),
    /** Tutoriel YouTube externe (crédit obligatoire). */
    video: z
      .object({
        youtube: z.string().url(),
        title: z.string(),
        credit: z.string(),
        creditUrl: z.string().url().optional(),
      })
      .optional(),
  }),
});


const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    /** Title tag SEO (H1 reste `title`). */
    seoTitle: z.string().optional(),
    description: z.string(),
    intro: z.string(),
    image: z.string().refine(
      (value) => value.startsWith('/') || z.string().url().safeParse(value).success,
      'L’image doit être une URL absolue ou un chemin public commençant par /',
    ),
    imageAlt: z.string(),
    imageCredit: z.string(),
    imageCreditUrl: z.string().url(),
    relatedRecipes: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { recettes, guides };
