let lengthEL = document.querySelector("#length-el")
let capitalsEL = document.querySelector("#capitals-el")
let charEL = document.querySelector("#char-el")
let passwordEL = document.querySelector("#password-el")
let numbersEL = document.querySelector("#numbers-el")

let passwordLenght = 5
let capitals = true
let chars = true
let numbers = true

const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const nums = "1234567890"
const special = "!@#$%^&*()_+{}:|<>?,./;\[]-="

function changeLength(value){
    if (passwordLenght > 1){
        passwordLenght += value
        lengthEL.textContent = "length: " + passwordLenght
    }
    else if (value > 0){
        passwordLenght += value
        lengthEL.textContent = "length: " + passwordLenght
    }
}
function changeCapital(){
    if(capitals){
        capitals = false
        capitalsEL.textContent = "no capitals"
    }
    else{
        capitals = true
        capitalsEL.textContent = "capitals"
    }
}
function changeChar(){
    if(chars){
        chars = false
        charEL.textContent = "no chars"
    }
    else{
        chars = true
        charEL.textContent = "chars"
    }
}
function changeNumbers(){
    if(numbers){
        numbers = false
        numbersEL.textContent = "no numbers"
    }
    else{
        numbers = true
        numbersEL.textContent = "numbers"
    }
}
function randomPassword(){
    let password = ""
    let possibleChars = ""
    possibleChars += lower
    if (capitals) possibleChars += upper
    if (chars) possibleChars += special
    if (numbers) possibleChars += nums

    for(let i = 0; i < passwordLenght; i++){
        password += possibleChars[Math.floor(Math.random()*possibleChars.length)]
    }
    passwordEL.textContent = password
}
