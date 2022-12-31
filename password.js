// an array of every possible character that may be included in the password 
const character = 
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'!', '#', '$', '%', '&', '(', ')', '*', '+', '-', ':', ';', '=', '?', '@', '_',]; 


function getRandomCharacter (character) {

    //getting a random index value from the array
    const randomIndex = Math.floor(Math.random() * character.length);
    //getting a random item from the array
    const randomValue = character[randomIndex];

    return randomValue;
}


//const randomDigit = getRandomCharacter(character)
let generatedPassword = ''


for (let i = 0; i < 12; i++) {
        generatedPassword += getRandomCharacter(character)
    }

console.log(generatedPassword);