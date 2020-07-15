import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import {PexelService} from './js/pexels-service.js';


$(document).ready(function(){

  function displayImages(photoObject){
    $(".images").append(`<div class="col-md-3">
    <figure class='figure'>
      <img src=${ photoObject.src.portrait }  class="img-fluid rounded" id=${ photoObject.photographer_id }>
      <figcaption class="figure-caption">Photographer : <a href=${ photoObject.photographer_url } target="_blank">${ photoObject.photographer }</a></figcaption> <a href=""></a>
    </figure></div>`);
  }

  function styleUpSearchBar(){
    $("#row").removeClass("vh-100");
    $("#row").addClass("pt-4");
  }

  $("form#get-images").submit(function(){
    
    event.preventDefault();

    const requestedImage = $("input#searchText").val();
    (async () => {
      let pexelService = new PexelService();
      const photoResponse = await pexelService.getPictures(requestedImage);

      photoResponse.photos.forEach(function(photo){

        displayImages(photo);
      });
      styleUpSearchBar();
      //$("#col").removeClass("justify-content-center");


    })();
  });
});