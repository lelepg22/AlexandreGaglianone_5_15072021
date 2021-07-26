

function cardProduit (product) {
    var html = ` <div class='col-12 col-lg-6 col-xl-6 mx-5 mt-5 shadow '>
        <div class='card text-center cardstyling mx-sm-4 produitLink'> 
        <img src="${product.imageUrl}" alt="${product.name}"  class='card-img-top mx-sm-0   cardimg'>
        <div class='card-body'>  
            <h5 class='card-title  mx-sm-1'>${product.name} </h5> 
            <p class='card-text mx-sm-1'>Teddies </p> 
            <P class='optionschoix'>Colours disponible:</p>
                <ul class='list-group list-group-flush' id ="produitOptions">
                
                    
                </ul>
        </div>
                
            </div> 
            <span class "addFavorite" data-id=${product._id}>
            <i class="fas fa-cart-plus cartplus cartpageproduit mx-sm-3"></i> 
            </span>
        </div> 
        </div> `;    
    return html;
    
}



async function createProduitCard() {
    
        
    let produits = await getAllTeddies();
    
    let i = 0;

    while (produits[i].name.replace(/\s/g, '') != localStorage.produitClicked) {
        i++;
    }   
    document.getElementById('produitPage').insertAdjacentHTML("afterbegin", cardProduit(produits[i]))     ;

   

    function options() {        
        let b = 0;
        while(produits[i].colors[b]){
        var html =` <li class="list-group-item"><button type="button" class="btn btn-primary">${produits[i].colors[b]} <i class="fas fa-cart-plus"></i> </button></li>`;        
        document.getElementById('produitOptions').insertAdjacentHTML("afterbegin", html);
        b++}
    } ;

    options();
}
   
    

    createProduitCard();
    

 
    function eventListenerPageProduit() {
        
        
        getProduitPage.addEventListener("click", function addIt(params) { addingProduits(params) });
      }      
      
       eventListenerPageProduit();
    
       



  