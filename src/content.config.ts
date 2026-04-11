import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    headline: z.string(),
    description: z.string(),
    tags: z.string(),
    url: z.string().optional(),
    coverImage: z.string(),
    coverImageMobile: z.string(),
    awards: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { projects, blog };
