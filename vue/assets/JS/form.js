let contactArray = [];
let contactCommande = [];
var xhr = new XMLHttpRequest();
localStorage.contactComplement = ""
let contact = {commandeId:  `${Math. random()}` ,firstName: localStorage.contactPreNom, lastName: localStorage.contactNomFamille, email: localStorage.contactEmail,
adresse: localStorage.contactAdresse + localStorage.contactComplement, city: localStorage.contactVille, total: localStorage.total} ;


    

document.getElementById('commander').setAttribute("disabled", true)


function prenomInput() {
     if (document.getElementById('prenom').value.match(/[^a-z ,.'-]+$/i)) {
        alert('Invalide! Caractères spéciaux ou chiffre on ete detecte.'); console.log("erros");  document.getElementById('prenom').value = '';  document.getElementById("gridCheck").checked = false}
    localStorage.contactPreNom = ' Prenom : ' +  document.getElementById('prenom').value    
    
   
}

function nomFamilleInput() { 
    if (document.getElementById('nomfamille').value.match(/[^a-z ,.'-]+$/i)) {
        alert('Invalide! Caractères spéciaux ou chiffre on ete detecte.'); console.log("erros");  document.getElementById('nomfamille').value = '';  document.getElementById("gridCheck").checked = false}
    localStorage.contactNomFamille = ' Nom Famille : ' +  document.getElementById('nomfamille').value
    
}

function emailInput() {
    if (document.getElementById('inputEmail4').value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        localStorage.contactEmail = ' Email : ' + document.getElementById('inputEmail4').value
        
    }
    else {alert("Error email adresse invalide!"); document.getElementById('inputEmail4').value = '';  document.getElementById("gridCheck").checked = false}
    
}

function adressInput() {if(document.getElementById('inputAddress').value.match(/^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/)){
    localStorage.contactAdresse = ' Adresse : ' + document.getElementById('inputAddress').value
    
}
else{alert("Adresse invalide!"); document.getElementById('inputAddress').value = '';  document.getElementById("gridCheck").checked = false}
}

function complementInput() { if(document.getElementById('inputAddress2').value.match(/^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/)){
    localStorage.contactComplement = ' Complement : ' + document.getElementById('inputAddress2').value
}
else{alert("Complement invalide!"); document.getElementById('inputAddress2').value = '' ; document.getElementById("gridCheck").checked = false}
}

function villeInput() {if(document.getElementById('inputVille').value.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)) {
    localStorage.contactVille = ' Ville : ' + document.getElementById('inputVille').value;
}
else{alert("Ville invalide!"); document.getElementById('inputVille').value = ''; document.getElementById("gridCheck").checked = false }
    
}

function codePostalInput(){if(document.getElementById('inputCodePostal').value.match(/^[0-9]+$/) ){ 
    localStorage.contactCodePostal = ' Code Postal : ' + document.getElementById('inputCodePostal').value    
}
else{alert("Code postal invalide!"); document.getElementById('inputCodePostal').value = ''; document.getElementById("gridCheck").checked = false}

}

function jeConfirmeInput() { if ( (document.getElementById('prenom').value != (undefined || "")
 && document.getElementById('nomfamille').value != (undefined || "") 
 && document.getElementById('inputEmail4').value != (undefined || "") 
 && document.getElementById('inputAddress').value != (undefined || "") 
 && document.getElementById('inputVille').value != (undefined || "") 
 && document.getElementById('inputCodePostal').value != (undefined || "")     
))
{ 
    
    if(document.querySelector('#gridCheck:checked') != null ) {     
     
       
            contactArray = [{commandeId:  `${Math. random()}` ,firstName: localStorage.contactPreNom, lastName: localStorage.contactNomFamille, email: localStorage.contactEmail,
                adresse: localStorage.contactAdresse + localStorage.contactComplement, city: localStorage.contactVille, total: localStorage.total} ]             
            console.log("Confirmed")       
    document.getElementById('commander').removeAttribute("disabled")
    }   
}
else {alert("Formulaire incomplet, *champ Complément NON obligatoire ");
  document.getElementById("gridCheck").checked = false
}

}   


function commanderInput() { if(document.querySelector('#gridCheck:checked') != null ) {
     xhr.open("POST",url, true);

     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);}
        }
        
     alert("Numero Commande : " + contact.commandeId)
     xhr.send(JSON.stringify(contact,myPanierChange))
     
    

   
  }
    else{ alert('Formulaire non confirme/valide!')}
}
    




function prenomClick () {
    if (document.getElementById('prenom').value == localStorage.contactPreNom.replace(' Prenom : ', '') ) {document.getElementById('prenom').value = ''}
    document.getElementById("gridCheck").checked = false
}

function nomFamilleClick () {
    if (document.getElementById('nomfamille').value == localStorage.contactNomFamille.replace(' Nom Famille : ', '') ) {document.getElementById('nomfamille').value = ''}
    document.getElementById("gridCheck").checked = false
}

function emailClick () {
    if (document.getElementById('inputEmail4').value == localStorage.contactEmail.replace(' Email : ', '') ) {document.getElementById('inputEmail4').value = ''}
    document.getElementById("gridCheck").checked = false
}

function adressClick () {
    if (document.getElementById('inputAddress').value == localStorage.contactAdresse.replace(' Adresse : ', '') ) {document.getElementById('inputAddress').value = ''}
    document.getElementById("gridCheck").checked = false
}

function complementClick () {
    if (document.getElementById('inputAddress2').value == localStorage.contactComplement.replace(' Complement : ', '') ) {document.getElementById('inputAddress2').value = ''}
    document.getElementById("gridCheck").checked = false
}

function villeClick () {
    if (document.getElementById('inputVille').value == localStorage.contactVille.replace(' Ville : ', '') ) {document.getElementById('inputVille').value = ''}
    document.getElementById("gridCheck").checked = false
}

function codePostalClick () {
    if (document.getElementById('inputCodePostal').value == localStorage.contactCodePostal.replace(' Code Postal : ', '') ) {document.getElementById('inputCodePostal').value = ''}
    document.getElementById("gridCheck").checked = false
}


document.getElementById('prenom').addEventListener('change',prenomInput) ;
document.getElementById('prenom').addEventListener('click',prenomClick) ;

document.getElementById('nomfamille').addEventListener('change' ,nomFamilleInput);
document.getElementById('nomfamille').addEventListener('click' ,nomFamilleClick);

document.getElementById('inputEmail4').addEventListener('change' ,emailInput);
document.getElementById('inputEmail4').addEventListener('click' ,emailClick);

document.getElementById('inputAddress').addEventListener('change' ,adressInput);
document.getElementById('inputAddress').addEventListener('click' ,adressClick);

document.getElementById('inputAddress2').addEventListener('change' ,complementInput);
document.getElementById('inputAddress2').addEventListener('click' ,complementClick);

document.getElementById('inputVille').addEventListener('change' , villeInput);
document.getElementById('inputVille').addEventListener('click' , villeClick);

document.getElementById('inputCodePostal').addEventListener('change' ,codePostalInput);
document.getElementById('inputCodePostal').addEventListener('click' ,codePostalClick);

document.getElementById('gridCheck').addEventListener('change' ,jeConfirmeInput);
document.getElementById('commander').addEventListener('click' ,commanderInput);