class Vue{
  constructor(imageUrl, name) {
  this.imageUrl = imageUrl;
  this.name = name;

  }
}
class getItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
      
  
  }
}


function createCard(product) {
   
    var html = `<div class='col-12 col-lg-5 col-xl-3 mx-5 mt-5 shadow '>
                   <div class='card text-center cardstyling mx-sm-4 produitLink'> 
                    <img src="${product.imageUrl}" alt="${product.name}"  class='card-img-top mx-sm-0   cardimg'>
                      <div class='card-body'>  
                        <h5 class='card-title  mx-sm-1'>${product.name} </h5> 
                          <p class='card-text mx-sm-1'>Teddies </p> 
                            <a href='#' class=' btn btn-primary ml-5 stretched-link mx-sm-1 produitlink\'>Voir plus</a> 
                             
                        </div> 
                        <i class="fas fa-cart-plus cartplus mx-sm-3"></i> 
                    </div> 
                </div> `;
  return html;
}
// let getPath = path[2].children[1].children[0].textContent;

async function listCard(){
    let products = await getAllTeddies();
    for(let product of products){
      document.getElementById("produitList").insertAdjacentHTML("afterbegin", createCard(product));
    }
    

  }
    
async function addTo(params) {getIt, myCart.push(params.path[2].children[1].children[0].textContent),  console.log(myCart), console.log(params.path[2].children[1].children[0].textContent)  };
const getIt = new getItem();

function eventListener(event) { getProduit.addEventListener('click', addTo)  ; console.log(event)}
eventListener();
  

  function a () { console.log(produitName) , console.log(produitName)}
  a();
  