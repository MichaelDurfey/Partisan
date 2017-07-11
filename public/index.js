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
  'THE M&M’s',
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
let li = document.createElement('li');
let ul = document.querySelector('.collapsible');
  li.innerHTML = `
    <div class="collapsible-header artist">${item}</div>
    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.
    askjdhflaksjdhf'askljdfhakj
    askjdhf;askjdhflaksjdhfas;kdjhf
    laksjdhfjk</span></div>
  `
  ul.appendChild(li);
});

  })