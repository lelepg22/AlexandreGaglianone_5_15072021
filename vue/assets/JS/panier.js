//Card Html
let productColour = "";
function cardPanier(product, color, quantity) {
  var html = ` 
                  <li class="oneItemPanier"> 
                      <img src="${product.imageUrl}" alt="${product.name}" class='card-img-top cardimgpanier'> </img>
                       <span class= 'textPanier'> ${product.name} - ${color}  </span> <span class='qtyPanier'><span class="prodUni">€ ${product.price} un.</span> qte. <span class="qty">${quantity}</span>    <i class="iconMinusPlus fas fa-plus"> <i class="iconMinusPlus fas fa-minus"></i> </i>  € <span class="productTotal" data-id="${product._id}">${prixItem}</span></span>
                  </li>    
                                      
                
                    
           `;
  return html;
}
//Controle si panier est vide
if (localStorage.cart.length <= 2) {
  alert("Panier vide!");
  window.location.href = "../index.html";
} else if (localStorage.cart != undefined) {
  console.log("Panier OK");
} else {
  alert("Panier vide!");
  window.location.href = "../index.html";
}

//Recup Info Stocke
let myCartStored = JSON.parse(localStorage.cart);
myPanierChange = [...myCartStored];
let myArray = [];
let productTotal = 0;

//Assemblage et Calcule

function productCount(c, d) {
  //Calcule la quantite de chaque item
  if (c == undefined) {
    return productTotal;
  } else if (myArray[0][d] == undefined) {
    return productTotal;
  } else {
    if (c == myArray[0][d].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, "")) {
      myArray[0].splice(d, 1);
      productTotal = ++productTotal;
      d = 0;
      productCount(c, d);
    } else if (c != myArray[0][d]) {
      productCount(c, ++d);
    }
  }
}

function productQuantity(item) {
  //caller pour productCount et Loop
  myArray.push(myCartStored);

  productCount(item, 0);
}

let j = -1;

//Creating Card
async function createPanierCard() {
  let products = await getAllTeddies();

  function loopinCard(x, myItemsList) {
    if (j <= -1) {
      //Conditions pour le loop*, J Sera la condition pour definir quel item du array PRODUCTS(products = Items disponible 'teddies' API)
      ++j; // et x determineras quel item du myCartStored  on est
    } else if (j > 5) {
      j = -1;
    } else if (j == 5) {
      ++x;
      if (myCartStored[x] == undefined) {
        x = 0;
      }
      j = 5;
    } else if (j >= 0 && myCartStored[x] != undefined) {
      ++j;
    }

    if (myCartStored[x] == undefined) {
      if (products[j] == undefined) {
        return 0;
      } else {
        if (myCartStored[0] != undefined) {
          loopinCard(0, products[j]);
        }
      }
    }

    productTotal = 0;
    if (myCartStored[0] == undefined) {
      return 0;
    } else if (myCartStored[x] == undefined) {
      // Loop conditions pour continuer a changer des items soit sur products soit sur myCartStored
      if (products[j] == undefined) {
        if (j == -1) {
          j = 0;
          loopinCard(x, products[j]);
        }
      } else if (j >= 5) {
        j = 0;
        loopinCard(x, products[j]);
      }
      loopinCard(0, products[j]);
    } else if (myCartStored[x] && myItemsList.name != undefined) {
      // Trouve la color du produit commande par le client stocke en myCartStored
      let productColourGetter = myCartStored[x]
        .substring(25, 37)
        .replace(/\s|:|Color/g, "");

      if (
        myCartStored[x]
          .substring(9, 15)
          .indexOf(myItemsList.name.substring(0, 5)) != -1
      ) {
        // Calcule la Quantite de chaque item dans le panier
        productQuantity(myCartStored[x].replace(/\s|0|1|2|3|4|5|6|7|8|9/g, ""));

        function idPushing(times) {
          for (var number = 1; number <= times; number++) {
            // Creation de Array avec les ID  des produit commande
            myArrayProducts.push(myItemsList._id);
          }
        }

        idPushing(productTotal);

        function findColor(z) {
          // Comparateur de coleur du item du produit commande avec chaque coleur disponible pour le item dans le API
          if (myItemsList.colors[z] == undefined) {
            //pour la creation du CARD
            return 0;
          } else if (x == undefined) {
            loopinCard(0, products[0]);
          } else if (
            myItemsList.colors[z]
              .replace(/\s/g, "")
              .indexOf(productColourGetter) != -1
          ) {
            productColour = myItemsList.colors[z];
            return productColour;
          } else {
            findColor(++z);
          }
        }

        findColor(0);

        // Calcule Total Panier
        prixItem = myItemsList.price * productTotal;
        if (localStorage.total == undefined) {
          localStorage.total = prixItem;
        } else {
          localStorage.total = parseInt(localStorage.total) + prixItem;
        }

        if (localStorage.qtyPanier == undefined) {
          localStorage.qtyPanier = productTotal;
        } else {
          localStorage.qtyPanier =
            productTotal + parseInt(localStorage.qtyPanier);
        }

        document
          .getElementById("itemsPanier")
          .insertAdjacentHTML(
            "afterbegin",
            cardPanier(myItemsList, productColour, productTotal)
          );
      } else if (j == 5) {
        //Condition nescessaire pour Loop Efficace pour le vidange du myCartStored
        j = 0;
        loopinCard(x, products[j]);
      } else if (myCartStored[x] != undefined) {
        ++x;
        if (myCartStored[x] != undefined) {
          --x;
          loopinCard(x, products[j]);
        } else if (myCartStored.length > 0) {
          loopinCard(0, products[j]);
        }
      }
    }
  }

  myCartStored.forEach(function (thing) {
    // Lance loop
    for (let product of products) {
      loopinCard(0, product);

      if (
        myCartStored.length == 1 &&
        myCartStored[0]
          .substring(9, 15)
          .indexOf(product.name.substring(0, 5)) != 0
      ) {
        continue;
      }
    }
  });

  if (myCartStored.length != 0) {
    //Condition nescessaire pour Loop Efficace pour le vidange du myCartStored
    if (products[j] != undefined) {
      loopinCard(0, products[j]);
    } else {
      j = 0;
      loopinCard(0, products[j]);
    }
    loopinCard(0, products[j]);
  }
}

if (myCartStored != undefined) {
  createPanierCard();
}

function refreshTotal() {
  document.getElementById("totalCart").textContent =
    "Total  €  " + localStorage.total;
}
setTimeout(refreshTotal, 500); //Ajuste Total Panier

//Event Listener Minus Plus

function addOrRemovePanier(pathClicked) {
  function littleLoopPanier(m, g) {
    // Loop pour trouve items dans le Stockage le supprime ou ajout

    if (myPanierChange[m] == undefined) {
      return 0;
    } else if (m == 0) {
      if (
        pathClicked.path[g].children[1].innerHTML.replace(/\s|-/g, "") ==
        myPanierChange[m]
          .replace(/\s|Item|0|1|2|3|4|5|6|7|8|9|:|Color/g, "")
          .replace("[]", "")
      ) {
        if (
          pathClicked.path[0].outerHTML ==
          '<i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i>'
        ) {
          myPanierChange.splice(m, 1);
          localStorage.cart = JSON.stringify(myPanierChange); //actualisation cart stocke
          if(myPanierChange.length < 1 ){  window.location.reload()}
          return 0;
        } else if (
          pathClicked.path[0].outerHTML ==
          '<i class="iconMinusPlus fas fa-plus" aria-hidden="true"> <i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i> </i>'
        ) {
          myArrayProducts.push(pathClicked.path[1].children[3].dataset.id);
          myPanierChange.push(myPanierChange[m]);
          localStorage.cart = JSON.stringify(myPanierChange);
          return 0;
        }
      }
      littleLoopPanier(++m, g);
    } else if (m >= 1) {
      if (
        pathClicked.path[g].children[1].innerHTML.replace(/\s|-/g, "") ==
        myPanierChange[m]
          .replace(/\s|Item|0|1|2|3|4|5|6|7|8|9|:|Color/g, "")
          .replace("[]", "")
      ) {
        if (
          pathClicked.path[0].outerHTML ==
          '<i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i>'
        ) {
          myPanierChange.splice(m, 1);
          localStorage.cart = JSON.stringify(myPanierChange);
          if(myPanierChange.length < 1 ){  window.location.reload()}
          return 0;
        } else if (
          pathClicked.path[0].outerHTML ==
          '<i class="iconMinusPlus fas fa-plus" aria-hidden="true"> <i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i> </i>'
        ) {
          myArrayProducts.push(pathClicked.path[1].children[3].dataset.id);
          myPanierChange.push(myPanierChange[m]);
          localStorage.cart = JSON.stringify(myPanierChange);
          return 0;
        }
      }
      littleLoopPanier(++m, g);
    }
  }

  if (
    pathClicked.path[0].outerHTML ==
    '<i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i>'
  ) {
    console.log("clicked minus");
    function removeIdArray(k) {
      //actualisation array des ID
      if (myArrayProducts[k] == pathClicked.path[2].children[3].dataset.id) {
        myArrayProducts.splice(k, 1);
      } else if (myArrayProducts[k] != undefined) {
        removeIdArray(++k);
      }
    }
    removeIdArray(0);

    //Actualisation Valeur Total, quantite item et chiffre panier Header

    let valueUnity = parseInt(
      pathClicked.path[2].children[0].innerHTML.replace(/\s|€|un./g, "")
    );
    let valueTotalItem = parseInt(
      pathClicked.path[2].children[3].innerHTML.replace(/\s|€|/g, "")
    );
    let valueQty = parseInt(pathClicked.path[2].children[1].innerHTML);
    let valueTotalPanier = parseInt(
      pathClicked.path[8].children[1].innerHTML.replace(/\s|:|Total|€/g, "")
    );
    let valueTotalPanierTxt = "Total €" + String(valueTotalPanier - valueUnity);
    let x = 0;
    if (valueQty == 0) {
      if (localStorage.chiffrePanier >= 1) {
        addPanierHeader(++localStorage.chiffrePanier);
      } else {
        addPanierHeader(++getPanierCount);
        localStorage.chiffrePanier = getPanierCount;
      }

      window.location.reload(); //qty item = 0, refresh page
    }

    if (valueQty > 0) {
      pathClicked.path[2].children[3].innerHTML = valueTotalItem - valueUnity;
      pathClicked.path[2].children[1].innerHTML = --valueQty;
      pathClicked.path[8].children[1].innerHTML = valueTotalPanierTxt;
      localStorage.total = valueTotalPanier - valueUnity;
      littleLoopPanier(0, 3);
    }
    if (localStorage.chiffrePanier >= 1) {
      if (localStorage.chiffrePanier > 0) {
        addPanierHeader(--localStorage.chiffrePanier);
      }
    } else {
      addPanierHeader(0);
      localStorage.chiffrePanier = getPanierCount;
    }
  } else if (
    pathClicked.path[0].outerHTML ==
    '<i class="iconMinusPlus fas fa-plus" aria-hidden="true"> <i class="iconMinusPlus fas fa-minus" aria-hidden="true"></i> </i>'
  ) {
    console.log("clicked PLUS");

    if (localStorage.chiffrePanier >= 1) {
      addPanierHeader(++localStorage.chiffrePanier);
    } else {
      addPanierHeader(++getPanierCount);
      localStorage.chiffrePanier = getPanierCount;
    }

    let valueUnity = parseInt(
      pathClicked.path[1].children[0].innerHTML.replace(/\s|€|un./g, "")
    );
    let valueTotalItem = parseInt(
      pathClicked.path[1].children[3].innerHTML.replace(/\s|€|/g, "")
    );
    let valueQty = parseInt(pathClicked.path[1].children[1].innerHTML);
    let valueTotalPanier = parseInt(
      pathClicked.path[7].children[1].innerHTML.replace(/\s|:|Total|€/g, "")
    );
    let valueTotalPanierTxt = "Total €" + String(valueTotalPanier + valueUnity);

    pathClicked.path[1].children[3].innerHTML = valueTotalItem + valueUnity;
    pathClicked.path[1].children[1].innerHTML = ++valueQty;
    pathClicked.path[7].children[1].innerHTML = valueTotalPanierTxt;
    localStorage.total = valueTotalPanier + valueUnity;
    littleLoopPanier(0, 2);
  }
}
document
  .getElementById("panierCard")
  .addEventListener("click", addOrRemovePanier);

function resetTotal() {
  localStorage.total = 0;
}

if (document.getElementById("totalCart").textContent == "Total  €  undefined") {
  window.location.reload();
}

window.onbeforeunload = resetTotal();
