import { createClient } from 'pexels';

export class PexelService{

  async getPictures(topic,numOfResults){

    let jsonifiedResponse;
    const client = createClient(process.env.API_KEY);
  
    const query = topic;

    const expectResults = numOfResults;
  
    await client.photos.search({ query, per_page: expectResults }).then(photoResponse => {
      jsonifiedResponse = photoResponse;
    });

    return jsonifiedResponse;
  }
  
}