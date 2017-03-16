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