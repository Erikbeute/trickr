const flips = ["Kickflip!", "Heelflip!", "Treflip!", "Shovit!", "360 Shovit!"];

const random = Math.floor(Math.random() * flips.length);

console.log(random, flips[random]);

document.getElementById("trick").innerHTML = flips[random];



const stance = ["Normal", "Fakie", "Nollie", "Switch"];

const randomStance = Math.floor(Math.random() * stance.length);

console.log (randomStance, stance[random]);

document.getElementById("stance").innerHTML = stance[randomStance];

/*


alert ("dutte");




var trick1 = document.querySelectorAll("trick")[0];
trick1.setAttribute("trick", randomTrick);

const flips = ["Kickflip!", "Heelflip!", "Treflip!", "Shovit!", "Bigspin!"];

const random = Math.floor(Math.random() * flips.length);



var randomNumber1 = Math.floor(Math.random() * 3)+1;
var randomRpsImage = "RPS" + randomNumber1 + ".jpeg";
var randomImageSource = "images/" + randomRpsImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute ("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 3)+1;
var randomRpsImage2 = "RPS" + randomNumber2 + ".jpeg";
var randomImageSource2 = "images/" + randomRpsImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute ("src", randomImageSource2);

var randomNumber3 = Math.floor((Math.random() * 3)+1);
var randomRpsImage3 = "RPS" + randomNumber3 +".jpeg";
var randomImageSource3 = "images/"+ randomRpsImage3;
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute ("src", randomImageSource3);

*/
