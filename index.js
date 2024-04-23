const add_btn=document.querySelectorAll('.add-btn')
const del_btn = document.querySelectorAll('.del-btn')
const sum_price = document.querySelector('.price')

let obj = {}
let sum = 0



add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card = b.closest('.card')
        const name = card.querySelector('.card-title').textContent
        
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
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        
        sum_price.innerText = sum
    })
})

function totalPrice(a,b){
     console.log(a*b);
}
