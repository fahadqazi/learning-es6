## Filter

## filtering an array of objects
```javascript
var products = [
    {name:'cucumber', type:'veg'},
    {name:'banana', type:'fruit'},
    {name:'onion', type:'veg'},
    {name:'orange', type:'fruit'}
];

var filteredProducts = [];

for(var i=0; i<products.length; i++){
    if (products[i]['type'] === 'veg'){
        filteredProducts.push(product[i]);
    }
}

console.log(filteredProducts);


filteredProducts = products.filter(function(product){
    return product['type'] === 'veg';
})

console.log(filteredProducts)
```

example, type = 'veg', qty>0, price<10
```javascript
var products = [
    {name:'cucumber', type:'veg', qty:0, price: 1},
    {name:'banana', type:'fruit', qty:10, price: 15},
    {name:'onion', type:'veg', qty:30, price: 13},
    {name:'orange', type:'fruit', qty:3, price: 5}
];

products.filter(function(product){
    return product.type === 'veg' && product.qty > 0 && product.price < 10;
})

```