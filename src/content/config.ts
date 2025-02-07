import { defineCollection, reference, z } from 'astro:content';
import { strapiLoader } from '../strapi-loader';
import { file, glob } from 'astro/loaders';

// const strapiTextLoader = defineCollection({
//     loader: strapiLoader({ contentType: 'text' }),
// });
// const strapiAuthorenLoader = defineCollection({
//     loader: strapiLoader({ contentType: 'author' }),
// });
const textLoader = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/texte' }),
    schema: z.object({
        title: z.string(),
        these: z.string().optional(),
        autor: z.array(reference('autor')),
    }),
});
const autorLoader = defineCollection({
    loader: file('./src/content/autoren/autoren.json'),
    schema: z.object({
        name: z.string(),
        profilbild: z.string(),
    }),
});

export const collections = {
    text: textLoader,
    autor: autorLoader,
    // autor: strapiAuthorenLoader,
};
