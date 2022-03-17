console.log("hello")

//var değil artık let kullanılıyor
let dolarDun=9.20;
let dolarBugun=10.10;

console.log(dolarBugun);
console.log(dolarDun);

if (dolarBugun>dolarDun) {
    console.log("dolar artmış");
} else if(dolarBugun<dolarDun){
    console.log("dolar düşmüş");
}else {
    console.log("dolar değişmedi");
}

const euroDun=22;
console.log(euroDun);

let konutKredileri=["konut kredisi","özel konut kredisi","emlak konut kredisi","kamu konut kredisi"];


console.log(konutKredileri);

console.log("<ul>")
konutKredileri.forEach(kredi => {
    console.log("<li>"+kredi+"</li>");
});
console.log("</ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    const kredi = konutKredileri[i];
    console.log(kredi);
}

