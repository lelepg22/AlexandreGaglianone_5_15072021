//Card Html
function cardPanier (product,color,quantity) { 
    var html = ` 
                  <li class="oneItemPanier"> 
                      <img src="${product.imageUrl}" alt="${product.name}" class='card-img-top cardimgpanier'> </img>
                       <span class= 'textPanier'> ${product.name} - ${color}  </span> <span class='qtyPanier'><span class="prodUni">€ ${product.price} un.</span> qte. <span class="qty">${quantity}</span>    <i class="iconMinusPlus fas fa-plus"> <i class="iconMinusPlus fas fa-minus"></i> </i>  € <span class="productTotal">${prixItem}</span></span>
                  </li>    
                                      
                
                    
           `;    
    return html;
    
}



let myCartStored = JSON.parse(localStorage.cart);
let myArray = [];
let productTotal = 0;





//Assembling and Calculating

function productCount (c,d) {
    
    
    if (c == undefined)
    {
        return productTotal;
    }  

    else if (myArray[0][d] == undefined) {
        return productTotal;
    }
    
    else{
    
        if (c == myArray[0][d].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, '')){ 
            
            
                myArray[0].splice(d,1);  productTotal =  ++productTotal;d=0; productCount(c,d)  } 
                
                else if(c !=  myArray[0][d]  ) {   productCount(c,++d)  } 

                //Found equal item on cart   
            // if(c != d) {

            //         //Assembling each equal item in Temporary Arrays         
            //         function arraying(j){  
            //             if(tempArray != undefined) {
            //                 if(tempArray[j] == undefined){ tempArray.push([myArray[0][c].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, ''), myArray[0][d].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, '')]) ;return tempArray}                    
            //                 else if (tempArray[j][0] == myArray[0][c].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, '')) { tempArray[j].push(myArray[0][c].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, ''), myArray[0][d].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, ''))}                        
            //                 else if(tempArray[j][0] != myArray[0][c].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, '')) { j++; arraying(j)}
            //             }                    
            //         }
            //         arraying(0);
            //     } 
        
        
        }
    

    
    }

function productQuantity(item) { 
    

    myArray.push(myCartStored); 
    

    productCount(item,0)   ;     
    
}

let j = -1;


//Creating Card
async function createPanierCard() { 
    

    let products = await getAllTeddies();  
    
    function loopinCard (x,b,c){
        if(j == -1 ) { j++} 
        else if(j > 5) {j=-1}
        else if(j == 5) { j = 5}
        else if(j >= 0 ) {j++}

            
        if (myCartStored[x] == undefined) { return 0 }

        productTotal = 0;
        
        let lookininto = myCartStored[x].substring(9, 15);
        lookininto;


        let productColourGetter = myCartStored[x].substring(25, 37).replace(/\s|:|Color/g, '');

        
        
        if(myCartStored[x].substring(9, 15).indexOf(b.name.substring(0,5)) != -1 ){   
                    

            productQuantity(myCartStored[x].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, '')); 


            function findColor (z) { 
                
                
                if (b.colors[z] == undefined) {return 0} 
                else if (x == undefined) {loopinCard(0)}
                else if(b.colors[z].replace(/\s/g, '').indexOf(productColourGetter) != -1) { productColour = b.colors[z]; return productColour; }
                    else{findColor(++z) }                     
                }
               

        
            findColor(0);
           

            prixItem = b.price * productTotal;
            if (localStorage.total == undefined) {localStorage.total = prixItem}
            else{ localStorage.total = parseInt(localStorage.total) + prixItem}                 
            
            if(localStorage.qtyPanier == undefined){ localStorage.qtyPanier = productTotal}
            else{ localStorage.qtyPanier = productTotal + parseInt(localStorage.qtyPanier)}
            

            document.getElementById('itemsPanier').insertAdjacentHTML("afterbegin", cardPanier(b,productColour, productTotal));
          
            
        }
        
                       
        else if (j == 5) { j = -1 }
        else if(myCartStored[x] != undefined) { loopinCard(++x, b)}
        // {debugger; if(b == products[j]) {if (products[++j] != undefined ){loopinCard(0, products[++j])} else{ j = 0 ;loopinCard(x,products[j])} }}
        
        
    }
 
     myCartStored.forEach ( function (thing) { 

        for(let product of products) {                                 
            
        
            
           
            loopinCard(0, product); 

            if(myCartStored.length == 1 && myCartStored[0].substring(9, 15).indexOf(product.name.substring(0,5)) != 0 ) { continue}
                // myCartStored.forEach( function(v) { for (let product of products) {debugger;; loopinCard(0)} } )}  

            
           
         }    
        
    } ) 
    if(myCartStored.length != 0) { if (products[j] != undefined ){ loopinCard(0, products[j])} 
                    else{j = 0;loopinCard(0, products[j])} loopinCard(0, products[j])}    
}

        
        // if(myCartStored.length > 0) { debugger; 
        //     async function completePanier () {  let xuxu = await getAllTeddies() 
        //     for (let go of xuxu) {             
                
                
        //     }
        //     }
      
   

       


   

createPanierCard();


function refreshTotal () { document.getElementById('totalCart').textContent = "Total  €  "+ localStorage.total;}
setInterval (refreshTotal, 2000);


//Event Listener Minus Plus

function addOrRemovePanier(pathClicked) {
    
    
    function littleLoopPanier(m,g){
        if(m == undefined) { return 0 }
          else if(m == 0){
           if(pathClicked.path[g].children[1].innerHTML.replace(/\s|-/g, '') == myPanierChange[m].replace(/\s|Item|0|1|2|3|4|5|6|7|8|9|:|Color/g, '').replace('[]', '')){
               if(pathClicked.path[0].outerHTML =="<i class=\"iconMinusPlus fas fa-minus\" aria-hidden=\"true\"></i>" ) { myPanierChange.splice(m,1) }
               else if(pathClicked.path[0].outerHTML == "<i class=\"iconMinusPlus fas fa-plus\" aria-hidden=\"true\"> <i class=\"iconMinusPlus fas fa-minus\" aria-hidden=\"true\"></i> </i>"){}
               }
          littleLoopPanier(++m,g)
          }  
          else if(m >= 1)  {
            if(pathClicked.path[g].children[1].innerHTML.replace(/\s|-/g, '') == myPanierChange[m].replace(/\s|Item|0|1|2|3|4|5|6|7|8|9|:|Color/g, '').replace('[]', '')){
                myPanierChange.h(m,1)
                }
          littleLoopPanier(++m,g)
          }
      }

    if (pathClicked.path[0].outerHTML == "<i class=\"iconMinusPlus fas fa-minus\" aria-hidden=\"true\"></i>" ) {
        console.log('clicked minus')

        if(localStorage.chiffrePanier >= 1) {  if(localStorage.chiffrePanier > 0){       
            addPanierHeader(--localStorage.chiffrePanier)} }
            else { 
              addPanierHeader(0);
              localStorage.chiffrePanier = getPanierCount; }   
        
         let valueUnity = parseInt(pathClicked.path[2].children[0].innerHTML.replace(/\s|€|un./g, '')) ;
         let valueTotalItem = parseInt(pathClicked.path[2].children[3].innerHTML.replace(/\s|€|/g, ''));
         let valueQty = parseInt(pathClicked.path[2].children[1].innerHTML);
         let valueTotalPanier = parseInt(pathClicked.path[8].children[1].innerHTML.replace(/\s|:|Total|€/g, ''));
         let valueTotalPanierTxt = 'Total €'+ String(valueTotalPanier - valueUnity); 
         let x = 0;         
         
         if(valueQty > 0 ){ 
         pathClicked.path[2].children[3].innerHTML = valueTotalItem - valueUnity;
         pathClicked.path[2].children[1].innerHTML = --valueQty;
         pathClicked.path[8].children[1].innerHTML = valueTotalPanierTxt;  
         localStorage.total = valueTotalPanier - valueUnity;  
         littleLoopPanier(0,3);

         }
         
    }

    else if(pathClicked.path[0].outerHTML == "<i class=\"iconMinusPlus fas fa-plus\" aria-hidden=\"true\"> <i class=\"iconMinusPlus fas fa-minus\" aria-hidden=\"true\"></i> </i>" ) {
         console.log('clicked PLUS');

         if(localStorage.chiffrePanier >= 1) {         
            addPanierHeader(++localStorage.chiffrePanier)}
            else { 
              addPanierHeader(++getPanierCount);
              localStorage.chiffrePanier = getPanierCount; }

         let valueUnity = parseInt(pathClicked.path[1].children[0].innerHTML.replace(/\s|€|un./g, '')) ;
         let valueTotalItem = parseInt(pathClicked.path[1].children[3].innerHTML.replace(/\s|€|/g, ''));
         let valueQty = parseInt(pathClicked.path[1].children[1].innerHTML);
         let valueTotalPanier = parseInt(pathClicked.path[7].children[1].innerHTML.replace(/\s|:|Total|€/g, ''));
         let valueTotalPanierTxt = 'Total €'+ String(valueTotalPanier + valueUnity);          
         
         pathClicked.path[1].children[3].innerHTML = valueTotalItem + valueUnity;
         pathClicked.path[1].children[1].innerHTML = ++valueQty;
         pathClicked.path[7].children[1].innerHTML = valueTotalPanierTxt;
         localStorage.total = valueTotalPanier + valueUnity;  
         
                 
        
    }

    console.log(pathClicked)

}
document.getElementById('panierCard').addEventListener('click', addOrRemovePanier);

function resetTotal() { localStorage.total = 0}

if(document.getElementById('totalCart').textContent == "Total  €  undefined") { window.location.reload();}
 



window.onbeforeunload = resetTotal();







// { <p> <img src="${product.imageUrl}" alt="${product.name}" class='card-img-top mx-sm-0 cardimgpanier'></img> - ${product.name} - ${product.colour} x ${productQuantity} | <i class="fas fa-plus"> <i class="fas fa-minus"></i></i>   </p>}
