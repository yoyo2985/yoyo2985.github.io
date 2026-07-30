import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


const writing = defineCollection({

loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),

schema: z.object({

title:z.string(),

date:z.string(),

category:z.string(),

description:z.string()

})

});


const fitness = defineCollection({

loader: glob({ pattern: '**/*.md', base: './src/content/fitness' }),

schema: z.object({

title:z.string(),

date:z.string(),

type:z.string().default("Other"),

description:z.string().optional(),

feeling:z.string().optional()

})

});


export const collections = {

writing,
fitness

};