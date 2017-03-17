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

### Basic Promise usage
```javascript
var p = new Promise(function(resolve, reject){
    if(true){
        resolve();
    }else{
        reject();
    }
});

p.then(function(){
    //do something with result
}).catch(function(){
    //  Error!
})
```

## Coverting xmlhttprequest to a promise based task
```javascript
function get(url){
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function(){
            if(req.state == 200){
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function(){
            reject(Error("Network Error"))
        };

        req.send();
    })
}

get('http://api.openweathermap.org/data/2.5/forecast?appid=35ab16ce21b847a36ece6eaba0df9244').then(function(response){
    console.log("Success !:", response);
}, function(error){
    console.error('Failed! " , error);
});
```

## then Callback
```javascript
new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(10) }, 3000)
})
    .then(function(result){
        console.log(result);
    });
// 10 from console.
```

## Chaining 'then' method callbacks
```javascript
var result = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(10) }, 3000)
})
.then(function(result){ console.log(result); return result * 2})
.then(function(result){ console.log(result); return result * 2})
.then(function(result){ console.log(result); return result * 2})
// 10
// 20
// 40
```

## catch Callback
```javascript
var result = new Promise(function(resolve, reject){
    setTimeout(function(){reject('rejected')}, 3000)
})
.then(function(result){console.log('result: ', result)})
.catch(function(error){console.error(error)})
//  rejected
```

## Promise.all

### Resolved
```javascript
var req1 = new Promise(function(resolve,reject){
    setTimeout(function(){ resolve(10) }, 2000)
});
var req2 = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(20) }, 400)
});

var result = Promise.all([req1, req2]).then(function(results){
    console.log('Results: ', results);
}).catch(function(error){
    console.log(error);
});

// 10 20
```
### Rejected
```javascript
var req1 = new Promise(function(resolve,reject){
    setTimeout(function(){ resolve(10) }, 2000)
});
var req2 = new Promise(function(resolve, reject){
    setTimeout(function(){ reject(20) }, 400)
});

var result = Promise.all([req1, req2]).then(function(results){
    console.log('Results: ', results);
}).catch(function(error){
    console.log(error);
});

// 10 20
```

## Promise.race
A race to see which on finishes first. 
A use case is to request primary and secondary sources, in case one of them is unavailable
```javascript
var req1 = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(10) }, 2000);
});
var req2 = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(20) }, 4000);
});

Promise.race([req1, req2]).then(function(result){
    console.log('then: ', result)
}).catch(function(result){
    console.log('catch:', result )
});
```