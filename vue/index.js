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

*/

// listCard();




/*

for (let items of teddies) {
  Produit.createCard();
}

let myCart = [];
let myCartTotalItems = myCart.length;

function addItemCart(item) { myCart.push(item) };
function removeItemCart(item) { myCart.unshift(item) };

 */



if (localStorage.cart == undefined){ localStorage.cart = ""}

//Cards

function createCard(product) {
  var html = `<div class='col-12 col-lg-5 col-xl-3 mx-5 mt-5 shadow addFavorite' data-id=${product._id}>
                   <div class='card text-center cardstyling mx-sm-4 produitLink'> 
                    <img src="${product.imageUrl}" alt="${product.name}"  class='card-img-top mx-sm-0   cardimg'>
                      <div class='card-body'>  
                        <h5 class='card-title  mx-sm-1'>${product.name} </h5> 
                          <p class='card-text mx-sm-1'>Teddies </p> 
                            <p class = 'colordefault'> Couleur par défaut - ${product.colors[0]} </p>                          
                            <a href='html/produit.html' class=' btn btn-primary ml-5 stretched-link mx-sm-1 produitlink\'>Voir plus</a> 
                             
                        </div> 
                        <span class ="addFavorite" data-id=${product._id}>
                          <i class="fas fa-cart-plus cartplus mx-sm-3"></i> 
                        </span>
                    </div> 
                </div> `;
  return html;
}

async function listCard() {
  let products = await getAllTeddies();    
  for (let product of products) {
    document
      .getElementById("produitList")
      .insertAdjacentHTML("afterbegin", createCard(product));
  }
}
listCard();

function eventListenerProduits(event) {
  getProduit.addEventListener("click", addingProduits)
}


 eventListenerProduits();



 

















