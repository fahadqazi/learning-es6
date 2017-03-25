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

```
> Generators are used to iterate through all types of data structures
```

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

## Why use Generator

```javascript
function* colors(){
    yield 'red';
    yield 'green';
    yield 'blue';
}
const gen = colors();
gen.next()  //red
gen.next()  //green
gen.next()  //blue
```

### This above can be written with a 'For of' Loop
```javascript
function* colors(){
    yield 'red';
    yield 'green';
    yield 'blue';
}

const myColors = []
for (let color of colors()){
    myColors.push(color);
}
console.log(myColors);
```

### Where to use a generator function
- Iterate through a data structure which you just want to get names of the team from an object

Example 1
```javascript
const EngineeringTeam = {
    size: 3,
    department: 'Electrical Engineering',
    lead: 'Jill',
    manager: 'Adam',
    engineer: 'Chris'
}

function* teamGen(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of teamGen(EngineeringTeam)){
    names.push(name);
}

console.log(names);
```

- Here I have a team nested inside the Engineering Team
- I want to use one for of loop to go through both Teams
- Build a Teating Team object and generator function
- Since Engineering Team includes testing team inside it, going from Engineering team generator to Testing team generator is called -- Generator Delegation --.

Example 2
```javascript
const TestingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
}

const EngineeringTeam = {
    size: 3,
    department: 'Electrical Engineering',
    lead: 'Jill',
    manager: 'Adam',
    engineer: 'Chris',
    testingTeam: TestingTeam
}

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
    yield* testingTeamGenerator
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(EngineeringTeam)){
    names.push(name);
}

console.log(names);
```

### Clean up Attempt using Symbol Iterator
- Symbole iterator is a tool to teach Objects how to respond to For Of loops
- Step 1: Apply to TestingTeam
- Step 2: Apply to EngineeringTeam
```javascript
const TestingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const EngineeringTeam = {
    size: 3,
    department: 'Electrical Engineering',
    lead: 'Jill',
    manager: 'Adam',
    engineer: 'Chris',
    testingTeam: TestingTeam,
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

const names = [];
for (let name of EngineeringTeam){
    names.push(name);
}

console.log(names);
```

# Generators with Recursion

```javascript
class Comment{
    constructor(content, children){
        this.content = content;
        this.children = children;
    }
    *[Symbol.iterator](){
        yield this.content;
        for(let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('mehh...', [])
]

const tree = new Comment ('Great post!', children)
//console.log(tree);
const values = [];
for(let value of tree){
    values.push(value);
}
console.log(values);
```