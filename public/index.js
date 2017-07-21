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



let artistListUl = document.querySelector('.flexcontainer');
   let counter = 0;  

         // <h2 class = "artistName">${artistName}</h2>

//cee8eebeb4ff28b14cceee8e805b31b3
const images = [];
let imagesHTML = '';

!function(){artistArray.forEach( (item) => { 
  let encodedURI = encodeURIComponent(item)
  let lastFMURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodedURI}&api_key=cee8eebeb4ff28b14cceee8e805b31b3&format=json`
  $.getJSON("/artistPhotos", lastFMURL, function(data){ 
      let div = document.createElement('div');
      let artistBio =  data.artist.bio.content;
      let artistWikiLink = data.artist.bio.links.link.href;
      const artistImages = data.artist.image[2]["#text"];
      let artistName = data.artist.name;   

      div.className = "card artist";
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
            <p class = "cardStuff">Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
      `
      artistListUl.appendChild(div);
      let children = artistListUl.children;
    for (item of children){
      item.addEventListener('mouseout', function(event){ 
        if (event["toElement"].className.includes("cardStuff") === false) {
          $(".card-reveal").fadeOut(1000);
        }
      })
    } //End event listener loop
//take 3 images on each pass and insert them into a div.      
        imagesHTML = `
          <div class = "image text-center imageFace${counter}" id = "imageFace${counter}">
            <div class = "imageInnerFace" id = "imageInnerFace">
              <img class = "artistImages img-responsive" id = "artistImages" src = '${artistImages}' alt = "${artistName}not found :("></img>
            </div> 
          </div>
        `;        
        //while iterating over images array, push one div filled with 3 images at each 3rd index in the array
        images.push(imagesHTML);
        counter += 1;
  }) // End getJSON 
  // console.log(Array.of(imagesHTML))
}) //EndArtistArray For Each Function
}(); // End Artist Array For Each function
// appendImages(images, index)

//Put info from artist images into a new data set
//Display only 12 of those at a time and transition in new images randomly in different places
//Make sure same image isn't displayed twice

});