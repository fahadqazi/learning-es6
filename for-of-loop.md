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

## another example
```javascript
function outter(){
    console.log('outter-1');
    function* inner(){
        console.log('inner-1');
        yield;
        console.log('inner-2');
    }
    console.log('outter-2');
    var inr = inner();
    console.log('outter-3');
    inr.next();
    console.log('outter-4');
    inr.next();
    console.log('outter-5');
}
```
#### `Explanation`
- Outter function wraps around a generator function
- running this outter function `outter()` should show:
    
    * outter-1
    * outter-2
    * outter-3
    * inner-1
    * outter-4
    * inner-2
    * outter-5

### Generator Delegation

