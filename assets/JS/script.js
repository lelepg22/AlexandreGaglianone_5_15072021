/*
let imgUrl = "";
let name = '';
class Produit  {
  static createCard() {
   document.getElementById("produitList").innerHTML = `<div class='col-12 col-lg-2 mx-1 mt-4 shadow '> 
   <div class='card text-center cardstyling'> 
     <img src="${imageUrl}" alt="${name}"  class='card-img-top img-fluid  cardimg''></img> 
       <div class='card-body'> <h5 class='card-title '>  </h5> 
       <p class='card-text'>${name} </p>      
       <a href='produit.html' class=' btn btn-primary ml-5 stretched-link \'>Voir plus</a> 
       <i class="fas fa-cart-plus cartplus"></i> 
       </div> 
   </div> 
 </div> `
 }
  
 }
 
 Produit.createCard();
 
 
 




const { getAllTeddies } = require("../../../JWDP5-master/controllers/teddy");
*/

const url = "http://localhost:3000/api/teddies";

const getProduit = document.getElementById('produitList');

async function getAllTeddies() 
{  
  const response = await fetch(url);
  return await response.json();
}

function createCard(product) {
   
    var html = `<div class='col-12 col-lg-2 mx-1 mt-4 shadow '>
                   <div class='card text-center cardstyling'> 
                    <img src="${product.imageUrl}" alt="${product.name}"  class='card-img-top img-fluid  cardimg'>
                      <div class='card-body'>  
                        <h5 class='card-title '>${product.name} </h5> 
                          <p class='card-text'>Teddies </p> 
                            <a href='html/produit.html' class=' btn btn-primary ml-5 stretched-link \'>Voir plus</a> 
                              <i class="fas fa-cart-plus cartplus"></i> 
                        </div> 
                    </div> 
                </div> `;
  return html;
}


async function listCard(){
  let products = await getAllTeddies();
  for(let product of products){
    document.getElementById("produitList").insertAdjacentHTML("afterbegin", createCard(product));
  }
}



listCard();




/*

for (let items of teddies) {
  Produit.createCard();
}

let myCart = [];
let myCartTotalItems = myCart.length;

function addItemCart(item) { myCart.push(item) };
function removeItemCart(item) { myCart.unshift(item) };



for (let items of teddies) {
 items.
 */














