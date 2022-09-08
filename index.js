const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b"
,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6"
, "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const justAlphabet = characters.slice(0,52)
const symbolsRemoved = characters.slice(0, 62)
const justSymbols = characters.slice(62,91)
const numbersRemoved = characters.slice(0,52).concat(justSymbols)


let pw1 = document.getElementById("pw-1")
let pw2 = document.getElementById("pw-2")
let pwInput = document.getElementById("pw-input")



let stateOfCheck = document.querySelectorAll('input[name="slice-array"]:checked')

function saveArray() {

    stateOfCheck = document.querySelectorAll('input[name="slice-array"]:checked')
    let values = []
    stateOfCheck.forEach((checkbox) => 
    {
    values.push(checkbox.value)
    });
    console.log(values)

    if (values.length === 1 && values[0] === 'numbers') {
        return numbersRemoved;
    } else if (values.length === 1 && values[0] === "symbols") {
        return symbolsRemoved;
    }else if (values.length === 2) {
        return justAlphabet;
    } else {
        return characters
    }
}




function generatePasswords(ar = saveArray()) {
    let passwordLength = null
    passwordLength = prompt("Please enter a password length",15)
    console.log(passwordLength)
    if((passwordLength === null ))
    {
        passwordLength = 15
    } else if( passwordLength < 8 ) {
        passwordLength = prompt("Please enter a password length longer than 8 characters",15)
    }
    let password1 =""
    let password2 =""
    console.log(ar)
    for(let i = 0; i<passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * ar.length)
        let randomIndex2 = Math.floor(Math.random() * ar.length)
        password1 += ar[randomIndex1]
        password2 += ar[randomIndex2]
    }
    setPasswords(password1, password2)
}

function setPasswords(password1, password2) {
    pw1.textContent = password1;
    pw2.textContent = password2;
}

function copy1() {
    navigator.clipboard.writeText(pw1.textContent)
    alert("Password copied: " + pw1.textContent);
}

function copy2() {
    navigator.clipboard.writeText(pw2.textContent)
    alert("Password copied: " + pw2.textContent);
}

