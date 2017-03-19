# Reduce

### Basic reducer
```javascript
function reduce(array, combine, start){
    var current = start;
    for (var i=0; i<array.length; i++){
        current = combine(array[i], current);
    }
    return current;
}

console.log(reduce([1,2,3,4,5], function(x,y){return x+y;}, 0));
```