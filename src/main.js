import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import {PexelService} from './js/pexels-service.js';


$(document).ready(function(){

  function displayImages(photoObject){
    $(".images").append(`<div class="col-md-3 imagesDisplayed">
    <figure class='figure'>
      <img src=${ photoObject.src.portrait }  class="img-fluid rounded" id=${ photoObject.photographer_id }>
      <figcaption class="figure-caption text-center">Photographer : <a href=${ photoObject.photographer_url } target="_blank">${ photoObject.photographer }</a></figcaption> <a href=""></a>
    </figure></div>`);
  }

  function clearImages(){
    $(".imagesDisplayed").remove();
  }

  function styleUpSearchBar(imagesAreComing){
    if(imagesAreComing){

    $("#row").removeClass("vh-100");
    $("#row").addClass("pt-4");
    }else{
      $("#row").addClass("vh-100");
      $("#row").removeClass("pt-4");
    }
  }

  $("form#get-images").submit(function(){
    
    event.preventDefault();

    clearImages();
    styleUpSearchBar(false);

    const requestedImage = $("input#searchText").val();
    const numOfResults = $("input#numOfResults").val();
    (async () => {
      let pexelService = new PexelService();
      const photoResponse = await pexelService.getPictures(requestedImage,numOfResults);

      photoResponse.photos.forEach(function(photo){

        displayImages(photo);
      });
      styleUpSearchBar(true);
    })();
  });
});