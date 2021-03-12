document.body.style.backgroundColor = "#FFFBEE"

let egg = document.querySelector("#egg");
let flower = document.querySelector("#flower");
let button = document.querySelector("#button");

egg.addEventListener("click", clickegg);
function clickegg () {
	egg.classList.add("transparent");
	flower.classList.remove("transparent");
	button.classList.remove("transparent");
	document.body.style.backgroundColor = "#9BDBFF";
	let p = document.querySelector("#bio");
	p.innerHTML = "Before my mom had kids or adopted me, she sketched out three children. The youngest, which turned out to be me, was a baby girl with the name 'Egg'";
	p.style.color = "#DC09FF";

}

flower.addEventListener("click", clickflower);
function clickflower() {
	flower.classList.add("transparent");
	egg.classList.remove("transparent");
	button.classList.remove("transparent");
	document.body.style.backgroundColor = "#DBFFAE";
	let p = document.querySelector("#bio");
	p.innerHTML = "My favorite flower is an annabelle hydrangea, purely for narcissistic reasons";
	p.style.color = "#FF4D00";

}

button.addEventListener("click", clickbutton);
function clickbutton() {
	button.classList.add("transparent");
	flower.classList.remove("transparent");
	egg.classList.remove("transparent");
	document.body.style.backgroundColor = "#EBD1FF";
	let p = document.querySelector("#bio");
	p.innerHTML = "Because apparently people don't know how to spell Press, we usually use the phrase, 'press like a button' to clarify and reiterate how simple it is";
	p.style.color = "#0500FF"

}
