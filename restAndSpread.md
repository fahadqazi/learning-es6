# Rest Operator

### The purpose here is to just write less code.

### A Reduce function 
```javascript
function addNumbers(numbers){
    numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
addNumbers([1,2,3,4,5]) // 15
```

### Using the rest operator bellow 

```javascript
function addNumbers(...numbers){
    return numbers.reduce((number) => {
        return sum + number;
    }, 0)
}
addNumbers(1,2,3,4,5);  //15
```


# Spread Operator

### show a pallette of colors

```javascript
const defaultColors = ['red','green'];
const userFavorite = ['orange', 'yellow'];

defaultColors.concat(userFavorite)  //["red", "green", "orange", "yellow"]

const fallColors = ['fire red', 'fall orange'];

[...defaultColors, ... userFavorite, ...fallColors, 'blue', 'green'] //["red", "green", "orange", "yellow", "fire red", "fall orange", "blue"]
```

## Shopping list example using both REST AND SPREAD

```javascript
// Need to make sure you buy milk

function validateShoppingList(...items){
    if(...items.indexOf('milk') < 0){
        ['milk', ...items];
    }
    return items;
}

validateShoppingList('oranges', 'bread', 'eggs', 'juice')
```