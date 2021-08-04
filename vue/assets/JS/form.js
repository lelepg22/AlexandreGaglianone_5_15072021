
let contactArray = [];
let contactCommande = [];
let myArrayProducts = [];
var xhr = new XMLHttpRequest();
localStorage.contactComplement = "";
contact = { firstName: localStorage.contactPreNom, lastName: localStorage.contactNomFamille, adress: localStorage.contactAdresse + localStorage.contactComplement, 
city: localStorage.contactVille, email: localStorage.contactEmail } ;


    

document.getElementById('commander').setAttribute("disabled", true);

//Recuperation et acceptation des input 
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
  document.getElementById("gridCheck").checked = false;
}

}   


// Click vide case form event 

function prenomClick () {if(document.getElementById('prenom').value != ""){
    if (document.getElementById('prenom').value == localStorage.contactPreNom.replace(' Prenom : ', '') ) {document.getElementById('prenom').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
else{return 0}
    }

function nomFamilleClick () {  if (document.getElementById('nomfamille').value != ""){
    if (document.getElementById('nomfamille').value == localStorage.contactNomFamille.replace(' Nom Famille : ', '') ) {document.getElementById('nomfamille').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
}

function emailClick () {if (document.getElementById('inputEmail4').value  != ""){
    if (document.getElementById('inputEmail4').value == localStorage.contactEmail.replace(' Email : ', '') ) {document.getElementById('inputEmail4').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
}

function adressClick () {if (document.getElementById('inputAddress').value != ""){
    if (document.getElementById('inputAddress').value == localStorage.contactAdresse.replace(' Adresse : ', '') ) {document.getElementById('inputAddress').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
}

function complementClick () {if (document.getElementById('inputAddress2').value != ""){
    if (document.getElementById('inputAddress2').value == localStorage.contactComplement.replace(' Complement : ', '') ) {document.getElementById('inputAddress2').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
    
}

function villeClick () { if (document.getElementById('inputVille').value  != ""){
    if (document.getElementById('inputVille').value == localStorage.contactVille.replace(' Ville : ', '') ) {document.getElementById('inputVille').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
    
}

function codePostalClick () {if (document.getElementById('inputCodePostal').value != ""){
    if (document.getElementById('inputCodePostal').value == localStorage.contactCodePostal.replace(' Code Postal : ', '') ) {document.getElementById('inputCodePostal').value = ''}
    document.getElementById("gridCheck").checked = false;
    document.getElementById('commander').setAttribute("disabled", true);
    }
    else{return 0}
    
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
document.getElementById('commander').addEventListener('click' , function (event) {    
    event.preventDefault();
    console.log('eventdault');
    let products = [...myArrayProducts];   
    var url = "http://localhost:3000/api/teddies/order";

    
        console.log(url);

        xhr.open("POST", url, true);
        console.log(products);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {             
                   localStorage.confirmation = xhr.response;

                localStorage.totalConf = localStorage.total;
                console.log(xhr.responseText);
                window.location.reload();
            }
        }
        var objectEnvoye = 
        { products , contact: contact };
        var baby = JSON.stringify(objectEnvoye);   
        xhr.send(baby);        
        

       
        return xhr.response;
        });
    if (localStorage.confirmation != undefined){ window.location.href = "confirmation.html"};        

      

