

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/freedomtower.jpg') {
      myImage.setAttribute ('src','images/centralpark.jpg');
    } else {
      myImage.setAttribute ('src','images/freedomtower.jpg');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  myHeading.innerHTML = 'NY is cool, ' + myName;
}

myButton.onclick = function() { 
   setUserName();
}

/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);                  // Uses API localStorage
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) { // validates if name exists in local DB (prev visit)
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/