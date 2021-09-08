import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'planetatest',
  apiKey: process.env.API_KEY,
});
