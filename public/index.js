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
artistArray.forEach( (item) => { 
let div = document.createElement('div');
div.className = "card artist";
div.id = "artist";
div.innerHTML = `
    <div class="card-image waves-effect waves-block waves-light cardStuff">
    </div>
    <div class="card-content cardStuff">
      <span class="card-title activator grey-text text-darken-4 cardStuff">${item}<i class="material-icons right cardStuff">more_vert</i></span>
    </div>
    <div class="card-reveal cardStuff" id = "cardreveal">
      <span class="card-title grey-text text-darken-4 cardStuff">${item}<i class="material-icons right cardStuff">close</i></span>
      <p class = "cardStuff">Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  `


    artistListUl.appendChild(div);

});

let children = artistListUl.children;
for (item of children){
  item.addEventListener('mouseout', function(event){ 
    if (event["toElement"].className.includes("cardStuff") === false && event["toElement"].className !== null) {
      $(".card-reveal").fadeOut(1000);
    }
  })
}
         // <h2 class = "artistName">${artistName}</h2>

//cee8eebeb4ff28b14cceee8e805b31b3
let images = "";

  artistArray.forEach(function(item) { 
    let encodedURI = encodeURIComponent(item)
    let lastFMURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodedURI}&api_key=cee8eebeb4ff28b14cceee8e805b31b3&format=json`
    $.getJSON("/artistPhotos", lastFMURL, function(data){ 

      let artistImages = data.artist.image[2]["#text"];
      let artistName = data.artist.name;

      console.log(artistImages)

    images += `

    <div class = "image text-center" id = "image">
      <img class = "artistImages img-responsive" id = "artistImages" src = "${artistImages}" alt = "Album image not found :("></img>
        <div class = "imageFace">
        </div>
    </div>
          `
    console.log(data)
    $('#artistImagesDiv').html(`${images}`);

    })
  });



  })