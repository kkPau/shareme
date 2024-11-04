import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace with your own Sanity project ID and dataset
const projectid = import.meta.env.VITE_SANITY_PROJECT_ID;
const projecttoken = import.meta.env.VITE_SANITY_PROJECT_TOKEN;

export const client = createClient({
    projectId: projectid,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: projecttoken,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);