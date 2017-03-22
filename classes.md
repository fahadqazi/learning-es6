# Classes in ES6

```javascript
function Car(options){
    this.title = options.title;
}

Car.prototype.drive = function(){
    return 'vroom';
}

const car = new Car(title: 'focus');
car.drive();    //vroom

function Toyota(options){
    Car.call(this, options);
    this.color = options.color
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
    return 'beeep';
}

const toyota = new Toyota({color:'red', title:'corolla'})
toyota.drive();
totyota.honk();


//ES6

class Car{
    constructor(options){
        this.title = options.title
    }
    drive(){
        return 'vrooom!'
    }
}

class Toyota extends Car{
    constructor(options){
        super();
        this.color = options.color;
    }
    honk(){
        return 'beeep!'
    }
}

const car = new Car({ title: 'focus' });
car.drive();    //vroom

const toyota = new Toyota({ color:'orange', title: 'corolla' })
toyota.honk()   //beeep!
```
