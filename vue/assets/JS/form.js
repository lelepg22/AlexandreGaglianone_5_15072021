let prenomA = [];
let nomFamilleA = [];

var regexPrenom= document.getElementById('prenom').value.match(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g)

function prenomInput() {
    if (document.getElementById('prenom').value) {alert('Error'); console.log("erros")}
    localStorage.contactPreNom = ' Prenom : ' +  document.getElementById('prenom').value

   
}

function nomFamilleInput() { 
    localStorage.contactNomFamille = ' Nom Famille : ' +  document.getElementById('nomfamille').value

}

function emailInput() {
    localStorage.contactEmail = ' Email : ' + document.getElementById('inputEmail4').value 

}

function adressInput() {

}

function complementInput() { 
}

function villeInput() {
    
}

function codePostalInput(){

}

function jeConfirmeInput() {
    
}

function commanderInput() {

}





document.getElementById('prenom').addEventListener('change',prenomInput) ;
document.getElementById('nomfamille').addEventListener('change' ,nomFamilleInput);
document.getElementById('inputEmail4').addEventListener('change' ,emailInput);
document.getElementById('inputAddress').addEventListener('change' ,adressInput);
document.getElementById('inputAddress2').addEventListener('change' ,complementInput);
document.getElementById('inputVille').addEventListener('change' , villeInput);
document.getElementById('inputCodePostal').addEventListener('change' ,codePostalInput);
document.getElementById('gridCheck').addEventListener('change' ,jeConfirmeInput);
document.getElementById('commander').addEventListener('change' ,commanderInput);