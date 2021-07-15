// To show time on dom
var seconds = 30;
var minutes = 0;

// Test to show to the user on page
var test = [
		["The","be","to","of","and","a","in","that","have","I","it","for","not","on","with","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time","no","just","him","know","take","people","into","year","your","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us"],

		["The","day","had","begun","on","a","bright","note.","The","sun","finally","peeked","through","the","rain","for","the","first","time","in","a","week,","and","the","birds","were","sinf=ging","in","its","warmth.","There","was","no","way","to","anticipate","what","was","about","to","happen.","It","was","a","worst-case","scenario","and","there","was","no","way","out","of","it."],

		["The","box","sat","on","the","desk","next","to","the","computer.","It","had","arrived","earlier","in","the","day","and","business","had","interrupted","her","opening","it","earlier.","She","didn't","who","had","sent","it","and","briefly","wondered","who","it","might","have","been.","As","she","began","to","unwrap","it,","she","had","no","idea","that","opening","it","would","completely","change","her","life."],

		["Don't","forget","that","gifts","often","come","with","costs","that","go","beyond","their","purchase","price.","When","you","purchase","a","child","the","latest","smartphone,","you're","also","committing","to","a","monthly","phone","bill.","When","you","purchase","the","latest","gaming","system,","you're","likely","not","going","to","be","satisfied","with","the","games","that","come","with","it","for","long","and","want","to","purchase","new","titles","to","play.","When","you","buy","gifts","it's","important","to","remember","that","some","come","with","additional","costs","down","the","road","that","can","be","much","more","expensive","than","the","initial","gift","itself."],


		["It's","not","his","fault.","I","know","you're","going","to","want","to,","but","you","can't","blame","him.","He","really","has","no","idea","how","it","happened.","I","kept","trying","to","come","up","with","excuses","I","could","say","to","mom","that","would","keep","her","calm","when","she","found","out","what","happened,","but","the","more","I","tried,","the","more","I","could","see","none","of","them","would","work.","He","was","going","to","get","her","wrath","and","there","was","nothing","I","could","say","to","prevent","it."],

		["He","was","an","expert","but","not","in","a","discipline","that","anyone","could","fully","appreciate.","He","knew","how","to","hold","the","cone","just","right","so","that","the","soft","server","ice-cream","fell","into","it","at","the","precise","angle","to","form","a","perfect","cone","each","and","every","time.","It","had","taken","years","to","perfect","and","he","could","now","do","it","without","even","putting","any","thought","behind","it.","Nobody","seemed","to","fully","understand","the","beauty","of","this","accomplishment","except","for","the","new","worker","who","watched","in","amazement."]
        

]

var randomNumber = Math.round(Math.random() * 5)
console.log(randomNumber)

// Input area where user will see the paragraph
let typingDiv = document.getElementById("typing")
for (var i = 0; i < test[randomNumber].length; i++) {
    typingDiv.innerHTML += `<span id=${i}>${test[randomNumber][i]}</span> `
}

// Returns array of test
var textToCompare = test[randomNumber];
var newUserText = []



let userTyping = document.getElementById("userTyping");

// Adding event listener on user typing input to start the counter - it will run only once see line 46 for more info!
userTyping.addEventListener("focus", type)

function type(e) {
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
        } else if (Number(seconds) == 0) {
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
window.onload = function() {
    text = textToCompare[underlineIndex]
    $("#" + underlineIndex).toggleClass("current");
}



// Detecting space on input area to save typed user word to the array and remove the input field for other word
document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        word = userTyping.value.substring(0, userTyping.value.length - 1)
        newUserText.push(word)
        userTyping.value = ""
    }
}



function showResult() {
    // Calculating the result of the test
    var correct = 0;
    var wrong = 0;
    var wrongKeystrokes = 0;
    var correctKeystrokes = 0;
    var grossWPM = 0;
    var netWPM = 0;
    var accuracy = 0;

    // Calculating user typed keystrokes
    typedKeystrokes = 0;
    for (let i = 0; i < newUserText.length; i++) {
        typedKeystrokes += newUserText[i].length
    }

    // Adding spaces to keystrokes
    typedKeystrokes += newUserText.length - 1

    console.log("Keystrokes " + typedKeystrokes)

    typedWords = newUserText.length
    grossWPM = newCorrectWord / 0.5
    for (var i = 0; i < newUserText.length; i++) {

        // Calculating correct and wrong keystrokes
        for (var j = 0; j < textToCompare[i].length; j++) {
            if (textToCompare[i][j] != newUserText[i][j]) {
                console.log(`${textToCompare[i][j]} ${newUserText[i][j]}`);
                wrongKeystrokes += 1;
            } else {
                correctKeystrokes += 1;
            }
        }

        // Calculating correct and wrong words
        if (newUserText[i] == textToCompare[i]) {
            correct += 1
        } else {
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
    let correctWordsDiv = document.getElementById("correctWords")
    let wrongWordsDiv = document.getElementById("wrongWords")
    let speedDiv = document.getElementById("speed")



    correctWordsDiv.textContent = newCorrectWord;
    wrongWordsDiv.textContent = newWrongWord;
    speedDiv.textContent = grossWPM;

    result.style.display = 'block'

}

var newCorrectWord = 0;
var newWrongWord = 0;
var count = 0;
$(window).keypress(function(e) {
    if (e.which == 32) {
        var word = document.getElementById("userTyping").value;

        if (test[randomNumber][count] == word.trim()) {
            $("#" + count).toggleClass("right");
            newCorrectWord++;

        } else {
            $("#" + count).toggleClass("wrong");

            newWrongWord++;
        }
        count++;
        $("#" + underlineIndex).removeClass("current");

        underlineIndex++;

        $("#" + underlineIndex).toggleClass("current");
        console.log(`New Correct Word: ${newCorrectWord}`)
        console.log(`New Wrong Word: ${newWrongWord}`)


    }
})