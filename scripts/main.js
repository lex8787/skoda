
var myImage = document.querySelector("img");

myImage.onclick = function() {
   var mySrc = myImage.getAttribute("src");
   if(mySrc === "images/1dbb03u-960.jpg") {
       myImage.setAttribute ("src","images/5dbb03u-960.jpg");
     } else {
       myImage.setAttribute ("src" ,"images/1dbb03u-960.jpg");
       }
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
				     
				  

