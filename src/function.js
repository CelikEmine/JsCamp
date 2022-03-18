
function addToCart(productName="armut",quantity) {
    console.log("sepete eklendi :"+productName+" adet: "+quantity);
}

addToCart();
addToCart("yumurta",2);
addToCart("karpuz",4);
addToCart(77);

let sayHello=()=>{
    console.log("hello");
}

sayHello();

let sayHello2=function(){
    console.log("hello2");
}

sayHello2();

let product1={
    productName:"elma",
    unitPrice:20,
    quantity:5
};

function addToCart2(product){
    console.log("ürün : "+product.productName);
    console.log("fiyat : "+product.unitPrice);
    console.log("adet : "+product.quantity);
}

addToCart2(product1);

let product2={
    productName:"armut",
    unitPrice:20,
    quantity:5
};
let product3={
    productName:"kiraz",
    unitPrice:20,
    quantity:5
};

product2=product3;
product2.productName="muz";

console.log(product3.productName);

function addToCart3(products) {
    console.log(products);
}

let products=[
    {productName:"aa",},
    {},
    {}
];

let products2=[product1,product2,product3]

addToCart3(products);
addToCart3(products2);


function add(...numbers) {
    console.log(numbers);
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i]);
        total=total+numbers[i];
    }
    console.log(total);
}



add(20,30,40,50,60);

console.log(Math.max(20,30,21));

let numbers2=[200,20,41,85]; //max kullanması için ayırmalıyız
console.log(Math.max(...numbers2));

console.log(...numbers2);
console.log(numbers2);

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"iç anadolu",population:"20m"},
    {name:"marmara",population:"30m"},
    {name:"karadeniz",population:"40m"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"]
    ]
]

console.log(icAnadolu.name);
console.log(marmara.population);
console.log(icAnadoluSehirleri);


let newProductName,newUnitPrice,newQuantity
 ({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
    ={productName:"elma",unitPrice:27,quantity:5});


console.log(newProductName);




