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


    photoResponse.photos.forEach(function(photo){

      

      
      $(".images").append(`<div class="col-md-4"><img src=${ photo.src.portrait }  class="img-fluid"></div>`);
    });
  })();

});