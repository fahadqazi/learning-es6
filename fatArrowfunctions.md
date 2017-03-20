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

### Advanced use of arrow functions
```javascript
const double = function(number){
    return 2*number;
}

//step 1
const double = (number) => {
    return 2*number;
}

//step 2
const double = (number) => 2*number;

//step 3 (if we have a single argument, we can also ommit the parens)
const double = number => 2*number;

//No arguments at all
const double = () => {
    return 2;
}
//OR
const double = () => 2;
```


### Map using Fat Arrow functions
```javascript
var array = [1,2,3,4];
numbers.map(function(number){
    return 2 * number;
}); //[2,4,6,8]

numbers.map((number) => 2 * number);
//OR
numbers.map( number => 2 * number);
```

## The Big Problem FAT ARROW functions solve
```javascript
const team = {
    memebers: ['jane', 'bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        })
    }
}
team.teamSummary(); //Error: Cannot read property teamName of undefined


```