# Enhanced Object Literals

### bookshop example
```javascript
function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((sum, book) => sum + book.price, 0)
        },
    	priceForTitle: function(title){
    	    return this.inventory.find((book) => title === book.title ).price;
    	}
	}
}

const inventory = [
    { title: 'harry potter', price: 10 },
    { title: 'eloquent JS', price:12 }
]

const bookshop = createBookShop(inventory);
```

Refactored to

```javascript
function createBookShop(inventory){
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((sum, book) => sum + book.price, 0)
        },
    	priceForTitle(title){
    	    return this.inventory.find((book) => title === book.title ).price;
    	}
	}
}

const inventory = [
    { title: 'harry potter', price: 10 },
    { title: 'eloquent JS', price:12 }
]

const bookshop = createBookShop(inventory);
```