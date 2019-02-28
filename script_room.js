/* I finished the show right and wrong sequences to show the user that they either correctly inputed the sequence or didn't 

I want to figure out how to check for the order of the buttons. I've done all of the easy stuff, now I have to handle the tough code of "ordering"
the buttons.

Here's a link: https://stackoverflow.com/questions/28462094/make-javascript-detect-buttons-that-are-pressed-in-a-certain-order

Here's a second link: https://stackoverflow.com/questions/21267243/making-an-onscreen-numeric-keyboard

store elements in item, array or list

Case switch statement --> essentially use a variable to change the script run

example = switch (a), then at the end of all of the cases, a += 1

*/

// Setting up Ids (I did this after I made most of my functions, I'll just leave them as is

var launch = 1

one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
ten = document.getElementById("ten");



// Starting the Sequence, have a blinking white light to start the launch


/*
function toggleLaunchWhite() {
	three.classList.toggle('launch');
}


function beginLaunch() {
	if (launch = 1) {
		setInterval(toggleLaunchWhite, 225);
	} else {
		stop;
	}
}
*/

// Add each of these functions to the buttons to show that they were clicked and so they can be logged and tracked for the end

function clickedOne() {
	console.log("User Clicked 1st Piece");
	el.classList.add("clicked")
}

function clickedTwo() {
	console.log("User Clicked 2nd Piece");
	el.classList.add("clicked")
}

function clickedThree() {
	console.log("User Clicked 3rd Piece");
	el.classList.add("clicked")
}

function clickedFour() {
	console.log("User Clicked 4th Piece");
	el.classList.add("clicked")
}

function clickedFive() {
	console.log("User Clicked 5th Piece");
	el.classList.add("clicked")
}

function clickedSix() {
	console.log("User Clicked 6th Piece");
	el.classList.add("clicked")
}

function clickedSeven() {
	console.log("User Clicked 7th Piece");
	el.classList.add("clicked")
}

function clickedEight() {
	console.log("User Clicked 8th Piece");
	el.classList.add("clicked")
}

function clickedNine() {
	console.log("User Clicked 9th Piece");
	el.classList.add("clicked")
}

function clickedTen() {
	console.log("User Clicked 10th Piece");
	el.classList.add("clicked")
}



// The functions below shows the user when the sequence they entered is wrong

function wrongBlinkOne() {
	one.classList.toggle('wrong')
}

function wrongFlashOne() {
	one.classList.toggle('wrong')
	setTimeout(wrongBlinkOne, 250)
	setTimeout(wrongBlinkOne, 500)
	setTimeout(wrongBlinkOne, 750)
}





function wrongBlinkTwo() {
	two.classList.toggle('wrong')
}

function wrongFlashTwo() {
	two.classList.toggle('wrong')
	setTimeout(wrongBlinkTwo, 250)
	setTimeout(wrongBlinkTwo, 500)
	setTimeout(wrongBlinkTwo, 750)
}





function wrongBlinkFour() {
	four.classList.toggle('wrong')
}

function wrongFlashFour() {
	four.classList.toggle('wrong')
	setTimeout(wrongBlinkFour, 250)
	setTimeout(wrongBlinkFour, 500)
	setTimeout(wrongBlinkFour, 750)
}





function wrongBlinkFive() {
	five.classList.toggle('wrong')
}

function wrongFlashFive() {
	five.classList.toggle('wrong')
	setTimeout(wrongBlinkFive, 250)
	setTimeout(wrongBlinkFive, 500)
	setTimeout(wrongBlinkFive, 750)
}





function wrongBlinkSix() {
	six.classList.toggle('wrong')
}

function wrongFlashSix() {
	six.classList.toggle('wrong')
	setTimeout(wrongBlinkSix, 250)
	setTimeout(wrongBlinkSix, 500)
	setTimeout(wrongBlinkSix, 750)
}





function wrongBlinkSeven() {
	seven.classList.toggle('wrong')
}

function wrongFlashSeven() {
	seven.classList.toggle('wrong')
	setTimeout(wrongBlinkSeven, 250)
	setTimeout(wrongBlinkSeven, 500)
	setTimeout(wrongBlinkSeven, 750)
}





function wrongBlinkEight() {
	eight.classList.toggle('wrong')
}

function wrongFlashEight() {
	eight.classList.toggle('wrong')
	setTimeout(wrongBlinkEight, 250)
	setTimeout(wrongBlinkEight, 500)
	setTimeout(wrongBlinkEight, 750)
}





function wrongBlinkNine() {
	nine.classList.toggle('wrong')
}

function wrongFlashNine() {
	nine.classList.toggle('wrong')
	setTimeout(wrongBlinkNine, 250)
	setTimeout(wrongBlinkNine, 500)
	setTimeout(wrongBlinkNine, 750)
}





function wrongBlinkTen() {
	ten.classList.toggle('wrong')
}

function wrongFlashTen() {
	ten.classList.toggle('wrong')
	setTimeout(wrongBlinkTen, 250)
	setTimeout(wrongBlinkTen, 500)
	setTimeout(wrongBlinkTen, 750)
}

// The functions below shows the user when the sequence they entered is RIGHT



function rightBlinkOne() {
	one.classList.toggle('right')
}

function rightFlashOne() {
	one.classList.toggle('right')
	setTimeout(rightBlinkOne, 250)
	setTimeout(rightBlinkOne, 500)
	setTimeout(rightBlinkOne, 750)
}





function rightBlinkTwo() {
	two.classList.toggle('right')
}

function rightFlashTwo() {
	two.classList.toggle('right')
	setTimeout(rightBlinkTwo, 250)
	setTimeout(rightBlinkTwo, 500)
	setTimeout(rightBlinkTwo, 750)
}





function rightBlinkFour() {
	four.classList.toggle('right')
}

function rightFlashFour() {
	four.classList.toggle('right')
	setTimeout(rightBlinkFour, 250)
	setTimeout(rightBlinkFour, 500)
	setTimeout(rightBlinkFour, 750)
}





function rightBlinkFive() {
	five.classList.toggle('right')
}

function rightFlashFive() {
	five.classList.toggle('right')
	setTimeout(rightBlinkFive, 250)
	setTimeout(rightBlinkFive, 500)
	setTimeout(rightBlinkFive, 750)
}





function rightBlinkSix() {
	six.classList.toggle('right')
}

function rightFlashSix() {
	six.classList.toggle('right')
	setTimeout(rightBlinkSix, 250)
	setTimeout(rightBlinkSix, 500)
	setTimeout(rightBlinkSix, 750)
}





function rightBlinkSeven() {
	seven.classList.toggle('right')
}

function rightFlashSeven() {
	seven.classList.toggle('right')
	setTimeout(rightBlinkSeven, 250)
	setTimeout(rightBlinkSeven, 500)
	setTimeout(rightBlinkSeven, 750)
}





function rightBlinkEight() {
	eight.classList.toggle('right')
}

function rightFlashEight() {
	eight.classList.toggle('right')
	setTimeout(rightBlinkEight, 250)
	setTimeout(rightBlinkEight, 500)
	setTimeout(rightBlinkEight, 750)
}





function rightBlinkNine() {
	nine.classList.toggle('right')
}

function rightFlashNine() {
	nine.classList.toggle('right')
	setTimeout(rightBlinkNine, 250)
	setTimeout(rightBlinkNine, 500)
	setTimeout(rightBlinkNine, 750)
}





function rightBlinkTen() {
	ten.classList.toggle('right')
}

function rightFlashTen() {
	ten.classList.toggle('right')
	setTimeout(rightBlinkTen, 250)
	setTimeout(rightBlinkTen, 500)
	setTimeout(rightBlinkTen, 750)
}

// Below are just functions that are essentially helping show the sequence. 
// They flash certain pieces in color to indicate the the order that they need to be selected in.



function blinkOne(){
	document.getElementById("one").classList.toggle('highlighted');
}

function flashOne(){
	document.getElementById("one").classList.toggle('highlighted');
	setTimeout(blinkOne, 1000);
}





function blinkTwo(){
	document.getElementById("two").classList.toggle('highlighted');
}

function flashTwo(){
	document.getElementById("two").classList.toggle('highlighted');
	setTimeout(blinkTwo, 1000);
}





function blinkFour(){
	document.getElementById("four").classList.toggle('highlighted');
}

function flashFour(){
	document.getElementById("four").classList.toggle('highlighted');
	setTimeout(blinkFour, 1000);
}





function blinkFive(){
	document.getElementById("five").classList.toggle('highlighted');
}

function flashFive(){
	document.getElementById("five").classList.toggle('highlighted');
	setTimeout(blinkFive, 1000);
}





function blinkSix(){
	document.getElementById("six").classList.toggle('highlighted');
}

function flashSix(){
	document.getElementById("six").classList.toggle('highlighted');
	setTimeout(blinkSix, 1000);
}





function blinkSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
}

function flashSeven(){
	document.getElementById("seven").classList.toggle('highlighted');
	setTimeout(blinkSeven, 1000);
}





function blinkEight(){
	document.getElementById("eight").classList.toggle('highlighted');
}

function flashEight(){
	document.getElementById("eight").classList.toggle('highlighted');
	setTimeout(blinkEight, 1000);
}





function blinkNine(){
	document.getElementById("nine").classList.toggle('highlighted');
}

function flashNine(){
	document.getElementById("nine").classList.toggle('highlighted');
	setTimeout(blinkNine, 1000);
}





function blinkTen(){
	document.getElementById("ten").classList.toggle('highlighted');
}

function flashTen(){
	document.getElementById("ten").classList.toggle('highlighted');
	setTimeout(blinkTen, 1000);
}





// Below are functions that actually show the sequence.
// It shows the order of the sequence.





function showSequenceOne(){
	launch -= 1;
	flashOne();
	setTimeout(flashSix, 1000);
	setTimeout(flashFour, 2000);
	setTimeout(flashSeven, 3000);
	setTimeout(flashSix, 4000);
	setTimeout(flashNine, 5000);
}

function showSequenceTwo(){
	
}

function showSequenceThree(){
	
}

// Below, these functions show the user when they are right or wrong based on the User Input.

function showWrong() {
	wrongFlashOne()
	wrongFlashTwo()
	wrongFlashFour()
	wrongFlashFive()
	wrongFlashSix()
	wrongFlashSeven()
	wrongFlashEight()
	wrongFlashNine()
	wrongFlashTen()
}

function showRight() {
	rightFlashOne()
	rightFlashTwo()
	rightFlashFour()
	rightFlashFive()
	rightFlashSix()
	rightFlashSeven()
	rightFlashEight()
	rightFlashNine()
	rightFlashTen()
}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}

