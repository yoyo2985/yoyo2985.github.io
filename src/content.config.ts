import { defineCollection, z } from 'astro:content';


const writing = defineCollection({

schema: z.object({

title:z.string(),

date:z.string(),

category:z.string(),

description:z.string()

})

});


export const collections = {

writing

};