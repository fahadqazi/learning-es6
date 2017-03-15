## Find

```javascript
var users = [
    {name: 'jill'},
    {name: 'alex'},
    {name: 'bill'}
];

var res = users.find(function(user){
    return user.name === 'alex';
});

console.log(res)    //alex
```