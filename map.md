## Map

### double numbers
```javascript
var numbers = [1,2,3,4,5];
var doubleNumbers = [];

for (var i=0; i<numbers.length; i++){
    doubleNumbers.push(numbers[i]*2);
}
console.log(doubleNumbers);


var newArray = numbers.map(function(number){
    return number * 2
});

console.log(newArray)   //[2,4,6,8,10]

```