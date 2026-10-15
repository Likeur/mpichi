import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recettes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recettes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    region: z.string().optional(),
    image: z.string().url(),
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
  }),
});

export const collections = { recettes };
