var xCtrSun = 0;
var yCtrSun = 0;
var xCtrMoon = 0;
var yCtrMoon = 0;
var xCtrBg = 0;
var xCtrObjects = 0;
var object;
var objectPopAt;
var charSwitchVal = -2250; 
//8 - 28 - 2016 di gumagana :( var bg = document.querySelector(".bg");
//8 - 28 - 2016 di gumagana :( var kramer = document.querySelector("#kramer");
//8 - 29 - 2016 xCtrBg is DECREASING. Papuntang negative ang values. Ingat sa > at <. Medyo baligtad sila. lmao
//kid walker 8-30-2016 12:00 pm
//switchChar yay 8-30-2016 1:46pm
//parallax objects fyeah 9-01-2016 10:00PM

function moveBgMouseDown() {
	forwardBg();
	forwardObject(".object-parallax", 10);
}

function moveObjectsMouseDown() {
	forwardBg();
	forwardObject(".object-parallax2", 10);
}

function kramerAnimateMouseDown () {
	if (charSwitchVal == 0) {	
		document.querySelector("#kramer").style.animation =  "animate-char 1.0s steps(4) infinite"; //kramer animation
	}
	if (charSwitchVal == -750) {
		document.querySelector("#kramer").style.animation =  "animate-char3 1.0s steps(4) infinite"; //kid animation
	}
	if (charSwitchVal == -1500) {
		document.querySelector("#kramer").style.animation =  "animate-char5 1.0s steps(4) infinite"; //kid animation
	}
	if (charSwitchVal == -2250) {
		document.querySelector("#kramer").style.animation =  "none"; //kid animation
	}
}

function moveBg(e) {
	if (e.keyCode == 39 && xCtrBg > -7100) {
		forwardBg();
		forwardObject(".object-parallax", 10);
	}
	if (e.keyCode == 37 && xCtrBg < 0) {
		backwardBg();
		backwardObject(".object-parallax", 10);
	}	
}

function moveObjects(e) {
	if (e.keyCode == 39 && xCtrBg > -5350) {
		forwardBg();
		forwardObject(".object-parallax2", 10);
	}
	if (e.keyCode == 37 && xCtrBg < 0) {
		backwardBg();
		backwardObject(".object-parallax2", 10);
	}
}

/*
function forwardBg(){
	document.querySelector(".bg").style.transform = 'translateX(' + xCtrBg + 'px)';
	xCtrBg -= 5;
}

function backwardBg(){
	document.querySelector(".bg").style.transform = 'translateX(' + xCtrBg + 'px)';
	xCtrBg += 5;
}
*/

function forwardBg(){
	if (xCtrBg <= -1340) {
		document.querySelector("#sun").style.transform = 'translate(' + xCtrSun + 'px, ' + yCtrSun + 'px)';
	//	document.querySelector("#sun").style.animation = "animate-moon 1.0s infinite";
		xCtrSun += 6;
		if (xCtrSun < 3500){
			yCtrSun -= 3;
		} else {
			yCtrSun += 4;
		}
	}
	
	if (xCtrBg < -6260) {
	//	document.querySelector("#moon").style.animation = "animate-moon 1.0s infinite";
		document.querySelector("#moon").style.transform = 'translate(' + xCtrMoon + 'px, ' + yCtrMoon + 'px)';
		yCtrMoon -= 3;
		xCtrMoon -= 5;
	}
	
	document.querySelector(".bg").style.transform = 'translateX(' + xCtrBg + 'px)';
	xCtrBg -= 5;
}

function backwardBg(){
	document.querySelector("#sun").style.transform = 'translate(' + xCtrSun + 'px, ' + yCtrSun + 'px)';
	document.querySelector(".bg").style.transform = 'translateX(' + xCtrBg + 'px)';
	xCtrBg += 5;
	xCtrSun -= 6;
	
	if (xCtrSun < 3500){
		yCtrSun += 3;
	} else {
		yCtrSun -= 4;
	}
	
	if (xCtrBg < -6260) {
		document.querySelector("#moon").style.transform = 'translate(' + xCtrMoon + 'px, ' + yCtrMoon + 'px)';
		yCtrMoon += 3;
		xCtrMoon += 5;
	}
}

function forwardObject(object, pixels){
	document.querySelector(object).style.transform = 'translateX(' + xCtrObjects + 'px)';
	xCtrObjects -= pixels;
}

function backwardObject(object, pixels){
	document.querySelector(object).style.transform = 'translateX(' + xCtrObjects + 'px)';
	xCtrObjects += pixels;
}

function sunMoonAnimate() {
}

function kramerAnimate(e){
	if (e.keyCode == 39) {
		if (charSwitchVal == 0) {	
			document.querySelector("#kramer").style.animation =  "animate-char 1.0s steps(4) infinite"; //kramer animation
		}
		if (charSwitchVal == -750) {
			document.querySelector("#kramer").style.animation =  "animate-char3 1.0s steps(4) infinite"; //kid animation
		}
		if (charSwitchVal == -1500) {
			document.querySelector("#kramer").style.animation =  "animate-char5 1.0s steps(4) infinite"; //kid animation
		}
		if (charSwitchVal == -2250) {
			document.querySelector("#kramer").style.animation =  "none"; //kid animation
		}
	}
	
	if (e.keyCode == 37) {
		if (charSwitchVal == 0) {	
			document.querySelector("#kramer").style.animation =  "animate-char2 1.0s steps(4) infinite"; //kramer animation
		}
		if (charSwitchVal == -750) {
			document.querySelector("#kramer").style.animation =  "animate-char4 1.0s steps(4) infinite"; //kid animation
		}
		if (charSwitchVal == -1500) {
			document.querySelector("#kramer").style.animation =  "animate-char6 1.0s steps(4) infinite"; //kid animation
		}if (charSwitchVal == -1500) {
			document.querySelector("#kramer").style.animation =  "none"; //kid animation
		}
	}
}

function kramerUp(height){
	if (charSwitchVal == -750){	
		document.querySelector("#kramer").style.animation =  "animate-char3 1.0s steps(4) infinite";
	}
	if (charSwitchVal == 0){	
		document.querySelector("#kramer").style.animation =  "animate-char 1.0s steps(4) infinite";
	}
	document.querySelector("#kramer").style.transform = 'translateY(-' + height + 'vh)';
	document.querySelector("#kramer").style.transition = 'transform 1.0s cubic-bezier(.1,1.14,.91,1.06) ';
}

function kramerDown(){
	document.querySelector("#kramer").style.transform = 'translateY(0px)';
	document.querySelector("#kramer").style.transition = 'transform 1.0s cubic-bezier(.51,.57,.99,1.06)';
}


function kramerJumpUp(jumpUpAt, height) {
	if (xCtrBg <= jumpUpAt) {
		kramerUp(height);
	} else {
		kramerDown();
	}
}

function kramerJumpDown(jumpDownAt) {
	if (xCtrBg <= jumpDownAt) {
		kramerDown();
	}
}

function objectUp(object, objectPopAt) { 
//object id as first parameter with quotes ("#asd"), character position in pixels as second
	if (xCtrBg <= objectPopAt && xCtrBg >= objectPopAt-700) {
		document.querySelector(object).style.bottom = '10vh';
		document.querySelector(object).style.transition = 'bottom 1.0s cubic-bezier(.17,.67,.46,.99)';
	} else {
		document.querySelector(object).style.bottom = '-100vh';
		document.querySelector(object).style.transition = 'bottom 1.0s cubic-bezier(.59,1.3,.97,1.02)';
	}
}

function objectDown(object, objectPopAt) { 
//object id as first parameter with quotes ("#asd"), character position in pixels as second
	if (xCtrBg <= objectPopAt && xCtrBg >= objectPopAt-700) {
		document.querySelector(object).style.top = '0vh';
		document.querySelector(object).style.transition = 'top 1.0s cubic-bezier(.17,.67,.46,.99)';
	} else {
		document.querySelector(object).style.top = '-100vh';
		document.querySelector(object).style.transition = 'top 1.0s cubic-bezier(.59,1.3,.97,1.02)';
	}
}

function showDialog(){
	if (xCtrBg > -7100) {
		document.querySelector(".dialog").style.visibility = "visible";
	}
}

function changeDialog(dialog, changeAt, range){
	if (xCtrBg <= changeAt && xCtrBg >= changeAt-range){
		document.querySelector(".dialog").innerHTML = " <br />" + dialog;
		showDialog();
	}
}

function xCtr(){
	document.querySelector("#kramer").innerHTML = xCtrBg;
}

function hideDialog() {
	document.querySelector(".dialog").style.visibility = "hidden";
}

function initialDialog () {
	document.querySelector(".dialog").innerHTML = "<br/>Hi there!<br />Hold ->" ;
}

function hideInitialDialog () {
	if (xCtrBg == -10) {
		document.querySelector(".dialog").style.visibility = "hidden";
	} 
}
 
function kramerStatic() {
	document.querySelector("#kramer").style.backgroundPosition = -600 + charSwitchVal + "px";
	document.querySelector("#kramer").style.animation = "none";
}

function switchChar(switchAt1, switchAt2, switchAt3){
	if (xCtrBg <= switchAt1) {
		charSwitchVal = -1500;
	}
	
	if (xCtrBg <= switchAt2) {
		charSwitchVal = -750;
	}
	
	if (xCtrBg <= switchAt3) {
		charSwitchVal = 0;
	}
}
  
function runTheseFunctionsOnKeyDown(e){
	xCtr();
	hideInitialDialog(),
	switchChar(-1760,-3020,-4270),
	moveBg(e), 
	moveObjects(e), 
	kramerAnimate(e), 
	changeDialog("I'm 19<br/>years old", -1490, 450), 
	changeDialog("Went to school<br/>at these years", -2470, 600), 
	changeDialog("Then I went<br/>to college", -3650, 600), 
	changeDialog("I shifted<br/>courses", -4300, 300), 
	changeDialog("mech. eng.<br/>is hard", -4600, 200), 
	changeDialog("<br/>i haz skillz", -5050, 450), 
	changeDialog("moar skillz", -5700, 450) ,
	changeDialog("Though there's<br/>a lot to learn", -6550, 225) ,
	changeDialog("press tab<br/>to navigate", -7100, 225) ,
	objectUp("#hospital", -1250), 
	objectUp("#grade-school", -2450), 
	objectUp("#high-school", -3650);
	objectDown("#skill-set", -4800);
	objectDown("#otherskill-set", -5650);
	objectUp("#contact-form", -6750);
}

function runTheseFunctionsOnMouseDown(){
	xCtr();
	hideInitialDialog(),
	switchChar(-1760,-3020,-4270),
	moveBgMouseDown(), 
	moveObjectsMouseDown(), 
	kramerAnimateMouseDown(), 
	changeDialog("I'm 19<br/>years old", -1490, 450), 
	changeDialog("Went to school<br/>at these years", -2470, 600), 
	changeDialog("Then I went<br/>to college", -3650, 600), 
	changeDialog("I shifted<br/>courses", -4300, 300), 
	changeDialog("mech. eng.<br/>is hard", -4600, 200), 
	changeDialog("<br/>i haz skillz", -5050, 450), 
	changeDialog("moar skillz", -5700, 450) ,
	changeDialog("Though there's<br/>a lot to learn", -6550, 225) ,
	changeDialog("press tab<br/>to navigate", -7100, 225) ,
	objectUp("#hospital", -1250), 
	objectUp("#grade-school", -2450), 
	objectUp("#high-school", -3650);
	objectDown("#skill-set", -4800);
	objectDown("#otherskill-set", -5650);
	objectUp("#contact-form", -6750);
}
  
function runTheseFunctionsOnKeyUp(e){
	kramerStatic();
	sunMoonAnimate();
	window.setTimeout(hideDialog, 2000);
}

function runTheseFunctionsOnLoad(e){
	initialDialog();
	showDialog();
	kramerStatic();
}

window.onload = runTheseFunctionsOnLoad;
window.onkeydown = runTheseFunctionsOnKeyDown;
window.onkeyup = runTheseFunctionsOnKeyUp;

document.ontouchmove = runTheseFunctionsOnMouseDown;
document.onmouseup = runTheseFunctionsOnKeyUp;

document.body.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();
}, false);
