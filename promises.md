# Promises

The Four states of a promise
* Fulfilled (resolved)
* Rejected
* Pending
* Settled 

### The promise constructor
```javascript
new Promise(function(resolve, reject){
    resolve('hi');  //works
    resolve('bye'); //doesn't work, as a promise can only resolve once!
});
```