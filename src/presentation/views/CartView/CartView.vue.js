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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var cart_store_1 = require("@/features/cart/store/cart.store");
var cartStore = (0, cart_store_1.useCartStore)();
var cart = (0, vue_1.computed)(function () { return cartStore.cart; });
var cartTotal = (0, vue_1.computed)(function () { return cartStore.cartTotal; });
function increaseQuantity(productName) {
    cartStore.increaseQuantity(productName);
}
function decreaseQuantity(productName) {
    cartStore.decreaseQuantity(productName);
}
function removeFromCart(productName) {
    cartStore.removeFromCart(productName);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2") }));
if (__VLS_ctx.cart.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("space-y-6") }));
    var _loop_1 = function (item) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((item.name)) }, { class: ("flex items-center border-b pb-4 gap-4") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: ((item.image || 'https://via.placeholder.com/100')), alt: ("Imagem do Produto") }, { class: ("w-24 h-24 object-cover rounded-lg shadow") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex-1") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-lg font-semibold text-gray-800") }));
        (item.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-sm text-gray-600") }));
        (item.detail);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-red-500 font-bold text-lg") }));
        (parseFloat(item.price).toFixed(2));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mt-3") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.cart.length)))
                    return;
                __VLS_ctx.decreaseQuantity(item.name);
            } }, { class: ("bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("px-5 py-1 bg-gray-100") }));
        (item.quantity);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.cart.length)))
                    return;
                __VLS_ctx.increaseQuantity(item.name);
            } }, { class: ("bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.cart.length)))
                    return;
                __VLS_ctx.removeFromCart(item.name);
            } }, { class: ("text-red-500 hover:text-red-700 transition") }));
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.cart)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        _loop_1(item);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-right mt-6") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-xl font-bold text-gray-800") }));
    (__VLS_ctx.cartTotal);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("mt-4 bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition") }));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-gray-500 text-center") }));
}
['p-6', 'max-w-4xl', 'mx-auto', 'bg-white', 'rounded-lg', 'shadow-md', 'text-3xl', 'font-bold', 'text-gray-800', 'mb-6', 'flex', 'items-center', 'gap-2', 'space-y-6', 'flex', 'items-center', 'border-b', 'pb-4', 'gap-4', 'w-24', 'h-24', 'object-cover', 'rounded-lg', 'shadow', 'flex-1', 'text-lg', 'font-semibold', 'text-gray-800', 'text-sm', 'text-gray-600', 'text-red-500', 'font-bold', 'text-lg', 'flex', 'items-center', 'mt-3', 'bg-gray-200', 'px-3', 'py-1', 'rounded-l', 'hover:bg-gray-300', 'transition', 'px-5', 'py-1', 'bg-gray-100', 'bg-gray-200', 'px-3', 'py-1', 'rounded-r', 'hover:bg-gray-300', 'transition', 'text-red-500', 'hover:text-red-700', 'transition', 'text-right', 'mt-6', 'text-xl', 'font-bold', 'text-gray-800', 'mt-4', 'bg-green-500', 'text-white', 'px-5', 'py-2', 'rounded-md', 'hover:bg-green-600', 'transition', 'text-gray-500', 'text-center',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            cart: cart,
            cartTotal: cartTotal,
            increaseQuantity: increaseQuantity,
            decreaseQuantity: decreaseQuantity,
            removeFromCart: removeFromCart,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
