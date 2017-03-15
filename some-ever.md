## Some & Every

```javascript
var computers = [
    {name:'apple', ram:32},
    {name:'acer', ram:4},
    {name:'sony', ram:16}
]

var res = computers.every(function(computer){
	return computer.ram > 15;
})
console.log(res)    // resturns false as not all computers can run program

var res1 = computers.some(function(computer){
	return computer.ram > 15;
})
console.log(res1)   // resturns true as some computers can run program
```