let confirmationInfo = JSON.parse(localStorage.confirmation);


function createOrderPage(){
   
    let confirmationPage = `<div class='col-12 col-lg-5 col-xl-9 mx-5 mt-5 shadow addFavorite id="confirmationCard"'>
    <div class='card text-center cardstyling produitLink'> 
         <div class='card-body'>   
         <h5 class='card-title orderPageText'>COMANDE CONFIRME</h5> 
         <h5 class='card-title orderPageText'>Orinoco vous remercie!</h5> 
         <p class='card-text orderPageText'>commande nº ${confirmationInfo.orderId} </p>
           <p class='card-text orderPageText'>Total € ${localStorage.totalConf} </p>             
                           
         </div>          
     </div> 
 </div> `;
    document.getElementById('orderPage').insertAdjacentHTML("afterbegin",confirmationPage)
    alert('Merci pour votre commande!')
}

createOrderPage();


function resetConfirmation() {localStorage.clear()}
window.onbeforeunload = resetConfirmation();