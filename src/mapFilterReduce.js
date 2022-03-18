let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:5000},
    {id:2,productName:"Bardak",quantity:40,unitPrice:5000},
    {id:3,productName:"Kalem",quantity:1,unitPrice:5000},
    {id:4,productName:"Şarj cihazı",quantity:30,unitPrice:5000},
    {id:5,productName:"kitap",quantity:2,unitPrice:5000},
    {id:6,productName:"defter",quantity:33,unitPrice:5000}
]


cart.map(product=> console.log(product));

cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice*product.quantity);
});

let quantityOver2= cart.filter(product=>product.quantity>2);

console.log(quantityOver2);








cart.push({id:7,productName:"masa",quantity:13,unitPrice:50});

function addToCart(cart) {
    cart.push({id:8,productName:"plazma",quantity:13,unitPrice:50});
}

addToCart(cart);

console.log(cart);

let sayi=10;

function changeSayi(sayi) {
    sayi+=1;
}

changeSayi(sayi);
console.log(sayi);
