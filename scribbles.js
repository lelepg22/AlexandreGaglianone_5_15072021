const produitCard =  <div class="row" id="produitList">
<div class="col-12 col-lg-4">
<div class="card">
  <img id="imgsource" src=""> alt="<span id="namesource"></span>" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="produit.html" class="btn btn-primary ml-5 stretched-link">Voir plus</a>
  </div>
  </div>
</div>
</div>

  " ;
document
.getElementById(imgsource)
.innerHtml = "<img src="${imgFiles}" alt="${nameProduit}">" {
    if {

    }
}


  
}
function generateProduitList () {
document
.getElementById(produitList) 
.innerHtml = produitCard;
<
  "

  { function creationCard() {
  

    }
  }

  if(false) { return 0;
  }
  else
  {
    generateProduitList();
  }

}
}

for(let camera of cameras) {
 document
.getElementById(produitList)
.innerHtml =  <div class="col-12 col-lg-4">
        <div class="card">
        <img src="${camera.imageUrl}" alt="${camera.name}"  class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href="produit.html" class="btn btn-primary ml-5 stretched-link">Voir plus</a>
          </div>
          </div>
        </div>;


}

for(let furniture of furnitures) {
 document
.getElementById(produitList)
.innerHtml =  <div class="col-12 col-lg-4">
        <div class="card">
        <img src="${furniture.imageUrl}" alt="${furniture.name}"  class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href="produit.html" class="btn btn-primary ml-5 stretched-link">Voir plus</a>
          </div>
          </div>
        </div>;


}

for(let teddie of teddies) {
 document
.getElementById(produitList)
.innerHtml =  <div class="col-12 col-lg-4">
        <div class="card">
        <img src="${teddie.imageUrl}" alt="${teddie.name}"  class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href="produit.html" class="btn btn-primary ml-5 stretched-link">Voir plus</a>
          </div>
          </div>
        </div>;


}





const part1 =  document.getElementById("produitList").insertAdjacentHTML("afterend","<div class=\"col-12 col-lg-4\"> <div class=\"card\"> <img src=\"");
const part2 =  part1.insertAdjacentHTML("afterend", camera.imageUrl);
const part3 = part2.insertAdjacentHTML("afterend","\" alt=\"");
const part4 = part3.insertAdjacentHTML("afterend",camera.name);
const part5 = part4.insertAdjacentHTML("afterend",'\"  class=\"card-img-top\"></img> <div class=\"card-body\"> <h5 class=\"card-title\"></h5> <p class=\"card-text\"></p> <a href=\"produit.html\" class=\"btn btn-primary ml-5 stretched-link\">Voir plus</a> </div> </div> </div>');



for(let camera of cameras) {
    
    document.getElementById("produitList").insertAdjacentHTML("afterend", '<div class=\"col-12 col-lg-4\"> <div class=\"card\"> <img src=\"${camera.imageUrl}\" alt=\"${camera.name}\"  class=\"card-img-top\"></img> <div class=\"card-body\"> <h5 class=\"card-title\"></h5> <p class=\"card-text\"></p> <a href=\"produit.html" class="btn btn-primary ml-5 stretched-link\">Voir plus</a> </div> </div> </div>');
   console.log('the camera variable', produitList);
   
   };

   for(let camera of cameras) {
   const promise1 = new Promise(()  => { function insertImgTxt() { 
    document.getElementById(imgItem).setAttribute("src", camera.imageUrl );
    debugger
    console.log('the camera variable', imgItem);
                }
              });
             
            
              promise1.then ( document.getElementById("produitList").insertAdjacentHTML("afterend", '<div class=\"col-12 col-lg-4\"> <div class=\"card\"> <img id="imgItem" alt=\"${camera.name}\"  class=\"card-img-top\"></img> <div class=\"card-body\"> <h5 class=\"card-title\"></h5> <p class=\"card-text\"></p> <a href=\"produit.html" class="btn btn-primary ml-5 stretched-link\">Voir plus</a> </div> </div> </div>'))
 console.log('the camera variable', imgItem);


 
 };

 document.querySelector(".cartplus").addEventListener('click', function(addToCart) {
  
})



listCard(cameras),
listCard(furnitures)

var html = 
      `<div class='col-12 col-lg-2 mx-1 mt-4 shadow '> 
          <div class='card text-center cardstyling'> 
            <img src="${product.imageUrl}" alt="${product.name}"  class='card-img-top img-fluid  cardimg''></img> 
              <div class='card-body'> <h5 class='card-title '>  </h5> 
              <p class='card-text'>${product.name} </p>      
              <a href='produit.html' class=' btn btn-primary ml-5 stretched-link \'>Voir plus</a> 
              <i class="fas fa-cart-plus cartplus"></i> 
              </div> 
          </div> 
        </div> `;
    return html;



  })
.then(function createCard(product) {   
  var html =  
      `<div class='col-12 col-lg-2 mx-1 mt-4 shadow '> 
          <div class='card text-center cardstyling'> 
            <img src="${imageUrl}" alt="${name}"  class='card-img-top img-fluid  cardimg''></img> 
              <div class='card-body'> <h5 class='card-title '>  </h5> 
              <p class='card-text'>${name} </p>      
              <a href='produit.html' class=' btn btn-primary ml-5 stretched-link \'>Voir plus</a> 
              <i class="fas fa-cart-plus cartplus"></i> 
              </div> 
          </div> 
        </div> `;
        debugger; 
    console.log('value html', html);
     
    for(let product of products) {
      document.getElementById("produitList").insertAdjacentHTML("afterbegin", createCard(product));
    }
    console.log(product);  
   } 
   
   async function getAllTedies2() { fetch("http://localhost:3000/api/teddies");}
   getAllTeddies = async() => { fetch("http://localhost:3000/api/teddies"); }