async function getAllTeddies() 
{  
  const response = await fetch(url);
  return await response.json();  
}


const url = "http://localhost:3000/api/teddies";
const url2 = "index.html";

const getProduit = document.getElementById('produitList');
const getProduitPage = document.getElementById('produitPage');
const getCart = document.getElementsByClassName('cartplus');
let produitName = document.getElementsByClassName('card-title');

let myCart = [];
let myStorage = [];
let tempArray = [];







