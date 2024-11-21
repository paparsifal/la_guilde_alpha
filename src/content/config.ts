import { defineCollection, z } from 'astro:content';

const jeux = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    system: z.string(),
    mj: z.string(),
    players: z.object({
      min: z.number(),
      max: z.number()
    }),
    level: z.enum(['Débutant', 'Intermédiaire', 'Avancé']),
    frequency: z.string(),
    draft: z.boolean().default(false)
  })
});

const evenements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    location: z.string(),
    price: z.number().optional(),
    registration: z.boolean().default(true),
    maxParticipants: z.number().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  jeux,
  evenements,
};
