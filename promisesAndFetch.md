# Promises and Fetch

```javascript
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('data');
    }, 3000)
});

promise
    .then((data) => {console.log('first then', data)})
    .then(() => {console.log('second then')})
    .catch((err) => {console.log(err)})
```

### Fetch Helper
```javascript
const url = "http://jsonplaceholder.typicode.com/posts/";
fetch(url)
    .then((data) => {console.log(data)})    //this actually doens't get us the data


fetch(url)
    .then(response => response.json())  
    .then(data => console.log(data))    //this now works
```

### Another issue with Fetch
```javascript
const url = "http://jsonplaceholder.typicode.com/posts/";
fetch(url)
    .then(response => {console.log(response)}) 

// response object has two properties status:200 and ok: true
// try this bellow
// url is not correct
const url = "http://jsonplaceholder.typicode.com/posts131231/";
fetch(url)
    .then(response => console.log(response)) 
    .catch(error => console.log('bad', error))

// this request doesn't use the CATCH case
// that is when it hit the server and isn't able to find the specific end point
// if it uses a wrong url completely like the following, it does hit the CATCH case
const url = "http://jsonplaceholder.tttttttttypicode.com/posts131231/";
```