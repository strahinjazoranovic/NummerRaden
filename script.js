let aantalPogingen = 0;
let maxPogingen = 10;
let randomNumber = Math.floor(Math.random() * 100);

function guess() {
    const aantal = document.getElementById('try');
    const input = document.getElementById('input');
    const higherOrLower = document.getElementById('numberText');
    
    let userGuess = parseInt(input.value);

    if (isNaN(userGuess)) {
        higherOrLower.innerHTML = "Je moet een geldig getal invoeren";
    } else {
        aantalPogingen += 1;
        aantal.innerHTML = "Aantal pogingen: " + aantalPogingen;

        if (userGuess > randomNumber) {
            higherOrLower.innerHTML = "Het getal is lager";
        } else if (userGuess < randomNumber) {
            higherOrLower.innerHTML = "Het getal is hoger";
        } else {
            higherOrLower.innerHTML = "Je hebt het geraden!";
            alert("Je hebt het getal geraden in " + aantalPogingen + " pogingen.");
            resetGame();
        }

        if (aantalPogingen === maxPogingen && userGuess !== randomNumber) {
            alert("Je bent af. Je hebt het getal niet geraden in 10 pogingen.");
            resetGame();
        }
    }
}

function resetGame() {
    const aantal = document.getElementById('try');
    const input = document.getElementById('input');
    const higherOrLower = document.getElementById('numberText');

    higherOrLower.innerHTML = "Raad het nummer!";
    aantalPogingen = 0;
    aantal.innerHTML = "Aantal pogingen: " + aantalPogingen;
    input.value = "";
    randomNumber = Math.floor(Math.random() * 100);
}
