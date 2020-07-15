import { createClient } from 'pexels';

export class PexelService{

  async getPictures(topic){

    let jsonifiedResponse;
    const client = createClient(process.env.API_KEY);
  
    const query = topic;
  
    await client.photos.search({ query, per_page: 16 }).then(photoResponse => {
      jsonifiedResponse = photoResponse;
    });

    return jsonifiedResponse;
  }
  
}