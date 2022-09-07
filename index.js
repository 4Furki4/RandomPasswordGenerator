const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b"
,"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6"
, "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pw1 = document.getElementById("pw-1")
let pw2 = document.getElementById("pw-2")

function generatePasswords(length = 15) {
    let password1 =""
    let password2 =""
    for(let i = 0; i<length; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
    }
    setPasswords(password1, password2)
}

function setPasswords(password1, password2) {
    pw1.textContent = password1;
    pw2.textContent = password2;
}