//JS2-15 Pavel Silber

// Creating the Hamburger Constructor function
var Hamburger = function(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
};

    Hamburger.prototype.showHamburger = function () {
        console.log(this.size + ' ' + this.stuffing + ' hamburger. Bon Appétit');
    };

    Hamburger.prototype.addTopping = function (topping) {
        if(this.topping === 'Large') {
            console.log('Okay!');
        } if (this.topping === 'Small'){
            console.log('Small hamburger');
        } else {
            console.log('Error');
        }
    };

    Hamburger.prototype.removeTopping = function (topping) {
        this.topping = null;
    };


// var sizePrompt = prompt('Please type hamburger size (Large or Small');
// var stuffingPrompt = prompt('Please type hamburger stuffing (Cheese or Salad or Potato');
var tomasHamburger = new Hamburger('Large', 'Potato');

tomasHamburger.addTopping('Small');

tomasHamburger.showHamburger();

