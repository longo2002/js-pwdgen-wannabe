const password = document.getElementById("password")

password.innerHTML =" Password ";

let nome = prompt("Dimmi come ti chiami");
let cognome = prompt("E il tuo cognome?");
let colore = prompt("Ora il tuo colore preferito!");
let numero = prompt("E il numero!");

password.innerHTML = nome + cognome + colore + numero