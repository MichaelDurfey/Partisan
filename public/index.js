$(document).ready(function(){
$(".button-collapse").sideNav();


// $(".artist").addClass("col s5")
let artistArray = ['ALO', 'AMADOU & MARIAM', 'ANGELIQUE KIDJO',
  'BEN HOWARD',
  'BIG HEAD TODD AND THE MONSTERS',
  'BILL KREUTZMANN',
  'BILLY & THE KIDS',
  'BOMBINO',
  'BOOMBOX',
  'CALYPSO ROSE',
  'CAMILLE',
  'CIRCLES AROUND THE SUN',
  'CON BRIO',
  'CONSPIRATOR',
  'DAVÍD GARZA',
  'THE DISCO BISCUITS',
  'DONAVON FRANKENREITER',
  'FEMI KUTI',
  'FRUITION',
  'GALACTIC',
  'GOTAN PROJECT',
  'GRACE POTTER',
  'GREENSKY BLUEGRASS',
  'THE HIP ABDUCTION',
  'JACK JOHNSON',
  'JASON NEWSTED',
  'JUPITER OKWESS',
  'KRUDER & DORFMEISTER',
  "THE M&M's",
  'MANU CHAO',
  'MARTIN SEXTON',
  'MARY CHAPIN CARPENTER',
  'OLIVER JOHN-RODGERS',
  'PAOLO CONTE',
  'PIERS FACCINI',
  'RAILROAD EARTH',
  'RAYLAND BAXTER',
  'STANTON MOORE',
  'THE STEPKIDS',
  'TOSCA',
  'VIANNEY',
  'YAEL NAIM',
  'YASMINE HAMDAN',
  'ZACH GILL',
  'ZAP MAMA']

let images = [];
let imagesHTML = '';
let itemsProcessed = 0;
let imageDisplaySet = [];
let displayedImagesIdx = [];
let newImages = [];
let newImagesIdx = [];

const artistListUl = document.getElementById('flexcontainer');
let counter = 0;  

    function collectImages(arr){
      do {
        let randomNumber = Math.floor(Math.random() * 45);
        if (displayedImagesIdx.indexOf(randomNumber) == -1) {
          displayedImagesIdx.push(randomNumber);
          imageDisplaySet.push(arr[randomNumber]);
        }
      } while (displayedImagesIdx.length < 18);
      console.log(displayedImagesIdx)

      $('#artistImagesDiv').html(imageDisplaySet);
      $('#artistImagesDiv').fadeIn(3000)
      let changeImagesTimeOut = window.setTimeout(() => {changeImages(imageDisplaySet)}, 3000) 
    }

    let changeImages = (imageDisplaySet) => {
      let counter = 0;
      do {
        let randomNumber = Math.floor(Math.random() * 45);
        let randomNumber2 = Math.floor(Math.random() * 45);
        if (displayedImagesIdx.indexOf(randomNumber) != -1){
          let endIndx = randomNumber + 1
          let id = `'#imageFace${randomNumber}'`
          displayedImagesIdx.fill(randomNumber2, randomNumber, endIndx)
          counter++;
        }
      } while (counter < 10);
      $('#imageFace21').replaceWith(images[randomNumber2])
      console.log(displayedImagesIdx)
    }

//cee8eebeb4ff28b14cceee8e805b31b3

artistArray.forEach( (item, index) => { 
  let div = document.createElement('div');
  let encodedURI = encodeURIComponent(item)
  let lastFMURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodedURI}&api_key=cee8eebeb4ff28b14cceee8e805b31b3&format=json`
  $.getJSON("/artistPhotos", lastFMURL, function(data){ 
      let artistBio =  data.artist.bio.content;
      let artistWikiLink = data.artist.bio.links.link.href;
      let artistImages = data.artist.image[2]["#text"];
      let artistName = data.artist.name;   

      div.className = "animated fadeIn card artist";
      div.id = "artist";
      div.innerHTML = `
          <div class="card-image waves-effect waves-block waves-light cardStuff hoverable">
          </div>
          <div class="card-content cardStuff">
            <span class="card-title activator grey-text text-darken-4 cardStuff">${item}<i class="material-icons right cardStuff">more_vert</i></span>
          </div>
          <div class="card-reveal cardStuff center-align" id = "cardreveal">
            <span class="card-title grey-text text-darken-4 cardStuff">${item}<i class="material-icons right cardStuff">close</i></span>
            <img class = "cardImages img-responsive cardStuff" id = "cardImage" src = "${artistImages}" alt = "Album image not found :("></img>
            <p class = "cardStuff">${artistBio}</p>
          </div>
      `
//take 3 images on each pass and insert them into a div.      
        imagesHTML = `
          <div class = ' animated fadeIn image text-center imageFace${counter}' id = 'imageFace${counter}'>
            <img class = 'artistImages img-responsive' id = 'artistImages' src = '${artistImages}' alt = '${artistName}not found :('></img>
            <div class = 'imageInnerFace' id = 'imageInnerFace'>
            <h2>${artistName}</h2>
            </div> 
          </div>
        `;    
        //while iterating over images array, push one div filled with 3 images at each 3rd index in the array
        images.push(imagesHTML);
        counter += 1;
  }).done( () => {
      itemsProcessed++;
      console.log("success")
    if (itemsProcessed === artistArray.length) {
      collectImages(images);
    }
  }) // End getJSON 
      artistListUl.appendChild(div);
      let children = artistListUl.children;
      for (i of children){
        i.addEventListener('mouseout', function(event){ 
          if (event["toElement"].className.includes("cardStuff") === false) {
            $(".card-reveal").fadeOut(1000);
          }
        })
      } //End event listener loop

  // console.log(Array.of(imagesHTML))
}) //EndArtistArray For Each Function

//Put info from artist images into a new data set
//Display only 12 of those at a time and transition in new images randomly in different places
//Make sure same image isn't displayed twice

}); // ----DOCUMENT.READY----