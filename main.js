
var myImage = document.querySelector("img");
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i = 1; i <= 3; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    const imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

   
 var myButton = document.querySelector("button");
 
 var myHeading = document.querySelector("h1");
 
function setUserName() {
   var myName = prompt("Please enter your name.");
   localStorage.setItem("name", myName);
   myHeading.innerHTML = "Skoda is cool, "  + myName;
}

if(!localStorage.getItem("name")) {
					setUserName();
		} else {
				var storedName = localStorage.getItem("name");
				myHeading.innerHTML  = "Skoda is cool,  "  + storedName;
				}
				
				myButton.onclick = function () {
				     setUserName();
				     }
				     
				  

