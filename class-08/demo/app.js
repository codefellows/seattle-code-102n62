function greeting(){
    let userName = prompt("What's your name, friend?");
    if (userName === "Kassie") {
        document.write("Hiya teach");
    } else {
        document.write("Greetings friend");
    }
}

function favoriteColor(){
    let userGuess = prompt("What's Kassie's favorite color?")
    while (userGuess != "yellow"){
        console.log("Incorrect: You guessed: " + userGuess)
        userGuess = prompt("What's Kassie's favorite color?")
    }
}

function writeName(){
    let thisPerson = prompt("Who do we have here?");
    document.write(thisPerson);
}

function rateMyPage(){
    let stars = prompt("Rate this page");
    for (let i = 1; i <= stars; i++){
        document.write("<p>STAR</p>");
    }
};