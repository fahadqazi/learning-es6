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

### using built in reduce
```javascript
var primaryColors = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'}
]
primaryColors.reduce(function(acc, color){
	acc.push(color.color);
	return acc;
}, [])

//  ['red','green','blue']
```

### example
```javascript
var numbers = [1,2,3,4,5,6,7,7,7,6,4,2,2,21,21];
function unique(inputArray){
  
  return inputArray.reduce((previous, current) => {
    
    if(!previous.find((prevItem) => { return prevItem === current; })){
        previous.push(current);
    }
    
    return previous;
  }, []);
}
unique(numbers);
```