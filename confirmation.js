async function getOrder () {
    
  const response = await fetch("http://localhost:3000/api/teddies/order");
  return await response.json();  
}

async function createOrderPage(){
    let order = await getOrder();
    let confirmationPage = `<div class='col-12 col-lg-5 col-xl-3 mx-5 mt-5 shadow addFavorite'>
    <div class='card text-center cardstyling mx-sm-4 produitLink'> 
         <div class='card-body'>  
         <h5 class='card-title  mx-sm-1'>commande nº ${order.OrderId} </h5> 
           <p class='card-text mx-sm-1'>Total € ${order.prixTotal} </p>             
                           
         </div>          
     </div> 
 </div> `;
    document.getElementById('orderPage').insertAdjacentHTML("afterbegin",confirmationPage)
    alert('Merci pour votre commande!')
}

createOrderPage();