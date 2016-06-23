// JavaScript Document

var clientName = prompt("What is your name?", "Text goes here");
if (clientName!== null) {
	document.getElementById("form").innerHTML =
    "Hello " + clientName;
}