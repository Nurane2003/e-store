const add_btn=document.querySelectorAll('.add-btn');
const del_btn = document.querySelectorAll('.del-btn');
const sum_price = document.querySelector('.price');
const cart=document.querySelector('.cart');
const total = document.querySelector(".total");
const cards=document.querySelector('.cards');
const container2=document.querySelector('.container2')
const container3=document.querySelector('.container3')
const cartProducts=document.querySelector('.priceCart');
const btn1=document.querySelector('.btn-1');
const btn2=document.querySelector('.btn-2');
const btn3=document.querySelector('.btn-3');

container2.style.display="none"
container3.style.display="none"


let sum = 0;
let isVisible = true;


btn1.addEventListener('click',function(){
    container2.style.display="none";
    container3.style.display="none"
    cards.style.display="flex"
    cartProducts.style.display = "none";
})

btn2.addEventListener('click',function(){
   cards.style.display="none";
   container3.style.display="none"
   container2.style.display="flex"
   cartProducts.style.display = "none";
})
btn3.addEventListener('click',function(){
    cards.style.display="none";
    container2.style.display="none";
    container3.style.display="flex";
    cartProducts.style.display = "none";
})

cart.addEventListener("click", function () {
  if (isVisible) {
    cards.style.display = "none";
    container2.style.display="none";
    container3.style.display="none"
    cartProducts.style.display = "block";
    isVisible = false;
  } else {
    cards.style.display = "flex";
    container2.style.display="flex"
    container3.style.display="flex"
    cartProducts.style.display = "none";
    isVisible = true;
  }

  let html = "";
  for (const product in obj) {
    html += `<li>ad : ${product}<br> qiymet : ${obj[product].price} ₼ <br> eded : ${obj[product].quantity}</li>`;

  }

  cartProducts.children[1].innerHTML = html;
  calculateTotalAmount();
 
});
const calculateTotalAmount = () => {
    let totalSum = 0;
    for (const product in obj)
      totalSum += +obj[product].price * +obj[product].quantity;
  
    total.textContent = totalSum.toFixed(2);
  };


add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++;
        const card_prdct = b.closest('.card-product');
        const name = card_prdct.querySelector('.card-h5').textContent;
        
        if(!obj[name]){
            obj[name] = {
                quantity: 1,
                price: +b.value
            }
        }else{
            obj[name].quantity++;
        }
        

       totalPrice(obj[name].quantity, obj[name].price);
        console.log(obj);
        
        sum_price.innerText = sum;
        addCart(name);
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        
        sum = sum < 0 ? 0 : sum;
        const card_prdct = b.closest('.card-product');
        const name = card_prdct.querySelector('.card-h5').textContent;
        
        if(obj[name]) sum--;

        removeText(name);
        console.log('delete',obj);
        sum_price.innerText = sum;
    });
});

function totalPrice(a,b){
     console.log(a*b);
}
function removeText(name){
    if(obj[name]){
        if(obj[name].quantity===1){
            delete obj[name];
        }else{
            obj[name].quantity--;
        }
    }
}
let priceCart=document.querySelector('.priceCart')
function addCart(name){
    const cartProducts=document.querySelectorAll('.cartName')
    for(let i=0;i< cartProducts.length;i++){
        if(cartProducts[i].textContent===name){
            const quantityText=cartProducts[i].nextElementSibling.nextElementSibling;
            const quantity=obj[name].quantity;
            quantityText.textContent="Count:" + quantity;
            return;
        }
    }

  
}
function removeCart(name){
    for(let i=0;i<cartProducts.length;i++){
        if(cartProducts[i].textContent===name){
            const quantityText=cartProducts[i].nextElementSibling.nextElementSibling;
            const quantity=obj[name].quantity;
            quantityText.textContent="Count:" + quantity;
            if(quantity==0){
                cartProducts[i].parentElement.remove();
            }
        }
    }
}                    