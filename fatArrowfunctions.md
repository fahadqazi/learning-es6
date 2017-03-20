# Fat Arrow Functions

```javascript
const add = function(a,b){
    return a + b;
}

add(1,3); //4

//v1
const add = (a, b) => {
    return a + b;
}

//v2
const add = (a,b) => a+b;   //implicit return of function

```