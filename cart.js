'use strict';

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addToCart(item) {
        const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.cart.push({...item});
        }
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    updateQuantity(itemId, quantity) {
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = quantity;
        }
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

// Example Usage
const cart = new ShoppingCart();
cart.addToCart({id: 1, price: 10, quantity: 1});
cart.addToCart({id: 2, price: 20, quantity: 2});
cart.updateQuantity(1, 3);
console.log('Total:', cart.getCartTotal()); // 70
