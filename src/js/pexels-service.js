import { createClient } from 'pexels';

export class PexelService{

  async getPictures(topic,numOfResults){

    let jsonifiedResponse;
    const client = createClient(process.env.API_KEY);
  
    const query = topic;
  
    await client.photos.search({ query, per_page: parseInt(numOfResults) }).then(photoResponse => {
      jsonifiedResponse = photoResponse;
    });

    return jsonifiedResponse;
  }
  
}