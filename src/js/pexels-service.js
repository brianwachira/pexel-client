import { createClient } from 'pexels';

const client = createClient(process.env.API_KEY);

const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photo => {
  console.log(photog);
});