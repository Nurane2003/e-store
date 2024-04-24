const add_btn=document.querySelectorAll('.add-btn')
const del_btn = document.querySelectorAll('.del-btn')
const sum_price = document.querySelector('.price')
const Cart=document.querySelector('.cart')


let obj = {}
let sum = 0
Cart.addEventListener('click',function(){
    document.querySelector('.cards').style.display="none"
    document.querySelector('.priceCart').style.display="inline-block"
})


add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card_prdct = b.closest('.card-product')
        const name = card_prdct.querySelector('.card-title').textContent
        
        if(!obj[name]){
            obj[name] = {
                quantity: 1,
                price: +b.value
            }
        }else{
            obj[name].quantity++
        }
        

       totalPrice(obj[name].quantity, obj[name].price)
        console.log(obj);
        
        sum_price.innerText = sum
        addCart(name)
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        const card_prdct = b.closest('.card-product')
        const name = card_prdct.querySelector('.card-title').textContent
        removeText(name)
        console.log('delete',obj);
        sum_price.innerText = sum
    })
})

function totalPrice(a,b){
     console.log(a*b);
}
function removeText(name){
    if(obj[name]){
        if(obj[name].quantity===1){
            delete obj[name]
        }else{
            obj[name].quantity--
        }
    }
}
function addCart(name){
    const cartProducts=document.querySelector('.priceCart')
    for(let i=0;i< cartProducts.length;i++){
        if(cartProducts[i].textContent===name){
            const quantityText=cartProducts[i].nextElementSibling.nextElementSibling;
            const quantity=obj[name].quantity;
            quantityText.textContent="Count:" + quantity;
            return;
        }
    }

    priceCart.innerHtml +=`
    <div class="border border-dark rounded text-center mx-2 p-2 fw-bold" style="width:20%;background-color:blue"
    <h5>${name}</h5>
    <p>Price: ${obj[name].price}₼</p>
    <p>Count: ${obj[name].quantity}</p>
    </div>`;
}
function removeCart(name){
    const cartProducts=document.querySelector('.priceCart h5')
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