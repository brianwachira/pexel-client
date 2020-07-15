import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import {PexelService} from './js/pexels-service.js';


$(document).ready(function(){

  
  (async () => {
    let pexelService = new PexelService();
    const photoResponse = await pexelService.getPictures("nature");

    console.log(photoResponse.photos);
  })();

});