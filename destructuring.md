# Destructuring

```javascript
var expense = {
    type: 'Business',
    amount: '$45 USD'
}

var type = expense.type;
var amount = expense.amount;

//ES6
var expense = {
    type: 'Business',
    amount: '$45 USD'
}

const { type } = expense;
const { amount } = expense;
//OR
const { type, amount } = expense; 
```

```javascript
var savedFile = {
	type: 'jpg',
	name: 'hello',
	size: 120
}

function fileSummary(file, color){
	return `This file ${file.name}.${file.type} is of size ${file.size} and color ${file.color}`;
}
fileSummary(savedFile, color);  

function fileSummary({name, type, size}, {color:'red'}){
    return `This file ${name}.${type} is of size ${size} and color ${color}`;
}
fileSummary(savedFile, {color:'red'});
```

## The real purpose behind Destructuring

### Array Destructuring
```javascript
const companies = ['google', 'facebook', 'uber'];
const [ name, name2, name3 ] = companies;

console.log(name)   //google
console.log(name2)  //facebook
console.log(name3)  //uber

// we can also use the rest operator

const [...comps] = companies
//OR
const [name, name2, ...comps] = companies
```

## Destructuring Arrays and Objects Together

example
```javascript
const companies = [
    {name: 'google', location:'Mountain View'},
    {name: 'facebook', location:'Menlo Park'},
    {name: 'uber', location:'San Francisco'}
];  

const [{ location }] = companies
```

example
```javascript
const Google = {
    locations: ['Mountain View', 'New York', 'London']
}
var { locations: [location1,location2] } = Google

console.log(location1)  //Mountain View
console.log(location2)  //New York
```

## What does destructuring actuallt do for us? 
### Practical example

```javascript
function signup({ username, email, dob, city, password }){
    //create user
}

const user = {
    username: 'fahad',
    email: 'fahad@email.com',
    dob: '17/02/84',
    city: 'London',
    password: 'password'
}

signup(user);
```

Example of Array destructuring
```javascript
const points = [
    [4,5],
    [10,1],
    [0,40]
]

//needed like this

const points = [
    {x:4, y:5},
    {x:10, y:1},
    {x:0, y:40}
]

points.map(([x,y]) => {
    return { x, y}
})
```