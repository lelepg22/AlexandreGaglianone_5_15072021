//Panier Header

let getPanierCount = document.getElementById('panierHeader').textContent;

function panierIndex () { if (localStorage.chiffrePanier > 0) { 
  document.getElementById('panierHeader').textContent = localStorage.chiffrePanier} 
  else {
    document.getElementById('panierHeader').textContent = getPanierCount;
  }
}
panierIndex();

function getPanierHeader(valeur){
 document.getElementById('panierHeader').textContent = valeur };

function addPanierHeader(valeur){  getPanierHeader(valeur)} ;



function countPan(a) { if (localStorage.count == undefined) {localStorage.count = 1;
a = localStorage.count}
  else {localStorage.count = ++localStorage.count; a = localStorage.count}
 return a;
}


//Event Register



function addingProduits(params) {
  
    
  clickedItemPath = params.path[0].outerHTML.replace(/\s/g, '') ;
  let clickereplaced = clickedItemPath;  
  clickereplaced;   
  if ( clickedItemPath.replace('cartpageproduit', '') === '<iclass=\"fasfa-cart-pluscartplusmx-sm-3\"aria-hidden=\"true\"></i>') {      
        if (clickedItemPath === '<iclass="fasfa-cart-pluscartpluscartpageproduitmx-sm-3"aria-hidden="true"></i>') {   
          let child = params.path[2].children[0].children[1].children[3].children[0].lastElementChild.textContent;
          child;
          myCart.push(`Item[${countPan()}]: `+params.path[2].children[0].children[1].children[0].textContent + ' Color: '+ params.path[2].children[0].children[1].children[3].lastElementChild.textContent)
                  } 

          else{ myCart.push(`Item[${countPan()}]: `+params.path[2].children[1].children[0].textContent +' Color: '+ params.path[2].children[1].children[2].textContent.replace('Couleur par défaut - ',''))}
         ;      
      
    
      if(localStorage.chiffrePanier >= 1) {         
        addPanierHeader(++localStorage.chiffrePanier)}
        else { 
          addPanierHeader(++getPanierCount);
          localStorage.chiffrePanier = getPanierCount; }   
    console.log('myCart', myCart);  
  }
 else {
    if(clickedItemPath === '<ahref=\"html/produit.html\"class=\"btnbtn-primaryml-5stretched-linkmx-sm-1produitlink\">Voirplus</a>'){                 
      myStorage.push(params.path[2].children[1].children[0].textContent.replace(/\s/g, ''));
      localStorage.produitClicked = myStorage;
      console.log('myStorage' ,myStorage);
      console.log(params);      
    }
    else { 
      let bebe = clickedItemPath.indexOf('<buttontype="button"class="btnbtn-primary"');
      bebe;
      
      if(clickedItemPath.indexOf('<buttontype="button"class="btnbtn-primary"') == 0) { if(myCart.length == 0) { myCart.push(`Item[${countPan()}]: `+ params.path[3].children[0].textContent + ' Color: '+ params.path[0].textContent );
                       
        console.log(myCart);}
        else{myCart.push(`Item[${countPan()}]: `+ params.path[3].children[0].textContent + ' Color: '+ params.path[0].textContent );
          
       
        console.log(myCart);
        }     
      }
      else if(clickedItemPath.indexOf('<iclass="fasfa-cart-plus"aria-hidden="true"') == 0 ) {  
        myCart.push(`Item[${countPan()}]: `+ params.path[4].children[0].textContent + ' Color: '+ params.path[1].textContent );
          
       
      console.log(myCart);    

      }
      else{ return 0}
    if(localStorage.chiffrePanier >= 1) {         
        addPanierHeader(++localStorage.chiffrePanier)}
        else { 
          addPanierHeader(++getPanierCount);
          localStorage.chiffrePanier = getPanierCount; } 
      
    }
  }  
 ;
} 
let myPanierChange =[]; 
let setStorage =function storageData () {
  if (localStorage.cart == undefined && myCart.length > 0){ localStorage.cart = JSON.stringify(myCart) } 
  else if(localStorage.cart != undefined && myCart.length == 0 ){localStorage.cart}
  else if(localStorage.cart != undefined || myPanierChange ){let a = JSON.parse(localStorage.cart);
    a.forEach(function (item) { myCart.push(item)})   
    localStorage.cart = JSON.stringify(myCart)}  
}

window.onbeforeunload = setStorage;



//