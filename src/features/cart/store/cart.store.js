"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCartStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
exports.useCartStore = (0, pinia_1.defineStore)('cart', function () {
    var cart = (0, vue_1.ref)([]);
    function addToCart(product) {
        var existingProduct = cart.value.find(function (item) { return item.name === product.name; });
        if (existingProduct) {
            existingProduct.quantity++;
        }
        else {
            cart.value.push(__assign(__assign({}, product), { quantity: 1 }));
        }
    }
    function increaseQuantity(productName) {
        var productIndex = cart.value.findIndex(function (item) { return item.name === productName; });
        if (productIndex !== -1) {
            cart.value[productIndex] = __assign(__assign({}, cart.value[productIndex]), { quantity: cart.value[productIndex].quantity + 1 });
            cart.value = __spreadArray([], cart.value, true); // 🔹 Garante a reatividade do Vue
        }
    }
    function decreaseQuantity(productName) {
        var product = cart.value.find(function (item) { return item.name === productName; });
        if (product) {
            if (product.quantity > 1) {
                product.quantity--;
            }
            else {
                removeFromCart(productName);
            }
        }
    }
    function removeFromCart(productName) {
        cart.value = cart.value.filter(function (item) { return item.name !== productName; });
    }
    function getProductQuantity(productName) {
        var item = cart.value.find(function (p) { return p.name === productName; });
        return item ? item.quantity : 0;
    }
    var cartTotal = (0, vue_1.computed)(function () {
        return cart.value.reduce(function (total, item) { return total + Number(item.price) * item.quantity; }, 0).toFixed(2);
    });
    return { cart: cart, addToCart: addToCart, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, removeFromCart: removeFromCart, getProductQuantity: getProductQuantity, cartTotal: cartTotal };
});
