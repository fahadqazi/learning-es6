# For of Loop 

```javascript
const colors = ['blue', 'green', 'red'];

for (let color of colors){
	console.log(color);
}
//  blue green red
```

### sum using for of
```javascript
const numbers = [1,2,3,4];
let total = 0
for (let number of numbers){
    total += number
}
console.log(total)  //10
```

# Generators in ES6

### Writing a generator
```javascript
function* numbers(){
    yield;
}
const gen = numbers();
gen.next();     //done:false
gen.next();     //done:true
```


### Generator Delegation

