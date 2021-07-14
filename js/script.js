// To show time on dom
var seconds = 60;
var minutes = 0;

// Test to show to the user on page
var test = "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."


// Input area where user will see the paragraph
let typingDiv = document.getElementById("typing")
typingDiv.textContent = test

// Returns array of test
textToCompare = test.split(" "); 
var newUserText = []



let userTyping = document.getElementById("userTyping");

// Adding event listener on user typing input to start the counter - it will run only once see line 46 for more info!
userTyping.addEventListener("focus", type)

function type(e){
	console.log("Function is running")
	var interval = setInterval(() => {

	// Time Up
	if (minutes == 0 && Number(seconds) == 0) {
		clearInterval(interval)
		showResult();
		seconds = 0;
		return false;
	}
	if (Number(seconds) < 10) {
		seconds = "0" + seconds
	}
	
	else if (Number(seconds) == 0){
		seconds = 59
		minutes--
	}
	seconds--;
	document.getElementById("seconds").textContent = seconds
	document.getElementById("minutes").textContent = minutes
	e.target.removeEventListener("focus", type, false)
}, 1000);

}


userTyping.addEventListener("input", check)
function check() {
// Returns array of user input
userTextToCompare = userTyping.value.split(" ")
// console.log(userTextToCompare)
console.log(textToCompare)
console.log(newUserText)

// Comparing user text with original text

}

var underlineIndex = 0
text = textToCompare[underlineIndex]
text.fontcolor("red")
textToCompare[underlineIndex] = text
console.log(text)


// Detecting space on input area to save typed user word to the array and remove the input field for other word
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        word = userTyping.value.substring(0, userTyping.value.length-1)
        newUserText.push(word)
        userTyping.value = ""
    }
}


// Calculating the result of the test
var correct = 0;
var wrong = 0;
var wrongKeystrokes = 0;
var correctKeystrokes = 0;
var grossWPM = 0;
var netWPM = 0;
var accuracy = 0;
function showResult() {


	// Calculating user typed keystrokes
	typedKeystrokes = 0;
	for (let i = 0; i < newUserText.length; i++) {
		typedKeystrokes += newUserText[i].length
	}

	// Adding spaces to keystrokes
	typedKeystrokes += newUserText.length - 1

	console.log("Keystrokes " + typedKeystrokes)

	typedWords = newUserText.length
	grossWPM = typedKeystrokes / (1 * 5)
	for (var i = 0; i < newUserText.length; i++) {
		for (var j = 0; j < newUserText[i].length; j++) {
			if (newUserText[i][j] == textToCompare[i][j]) {
				correctKeystrokes += 1;
			}
			else {
				wrongKeystrokes += 1;

			}
		}
		if (newUserText[i] == textToCompare[i]) {
			correct += 1
		}
		else {
			wrong += 1
		}	
	}


	// Adding spaces to correct keystrokes
	correctKeystrokes += newUserText.length - 1

	// Calculating the error in keystrokes for calculating net WPM
	let errors = (wrongKeystrokes) / 1
	netWPM = grossWPM - errors

	// Correct and wrong words
	// console.log("Correct " + correct)
	// console.log("Wrong " + wrong)

	// Calculating the accuracy
	accuracy = (netWPM / grossWPM) * 100
	console.log("Gross WPM: " + grossWPM + " WPM")
	console.log("Net WPM: " + netWPM + " WPM")
	console.log("Accuray: " + accuracy + " %")

	// Wrong keystrokes
	// console.log("Wrong Keystrokes: " + wrongKeystrokes)

// Showing the result to the DOM

	let resultDiv = document.getElementById("result")
	let accuracyDiv = document.querySelector("#accuracy")
	let correctWordsDiv = document.getElementById("correctWords")
	let keystrokesDiv = document.getElementById("keystrokes")
	let wrongWordsDiv = document.getElementById("wrongWords")
	let speedDiv = document.getElementById("speed")

	keystrokesToShow = `(<span class="text-success">${correctKeystrokes}</span> | <span class="text-danger">${wrongKeystrokes}</span>) ${typedKeystrokes}`;

	accuracyDiv.textContent = Math.round(accuracy);
	keystrokesDiv.innerHTML = keystrokesToShow;
	correctWordsDiv.textContent = correct;
	wrongWordsDiv.textContent = wrong;
	speedDiv.textContent = grossWPM;

	result.style.display = 'block'

}