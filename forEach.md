## ES6 Helper methods to cover

* forEach
* map
* filter
* reduce
* find 
* every
* some

### **forEach**
```javascript

var colors = ['red', 'green', 'blue']

for(var i=0; i<colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(color){
    console.log(color);
})

```

### **sum using forEach**
```javascript
var sum = 0;

var numbers = [1,2,3,4,5];

array.forEach(function(number){
	sum += number;
});

console.log(sum)
```
OR
```javascript
var sum = 0;
var numbers = [1,2,3,4,5];
function adder(number) {
    sum += number
}
numbers.forEach(adder);
console.log(sum)
```