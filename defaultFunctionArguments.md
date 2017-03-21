# Default Function Arguments

```javascript
function makeAjaxRequest(url, method){
    if(!method){
        method = 'GET';
    }
}
```

### Requests
```javascript
makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

```

```javascript
function makeAjaxRequest(url, method='Get'){
    return method;
}
```