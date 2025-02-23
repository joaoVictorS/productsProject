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
var props = (0, vue_1.defineProps)({ item: Object });
var emit = (0, vue_1.defineEmits)(['updateQuantity', 'removeItem']);
var updateQuantity = function (quantity) {
    emit('updateQuantity', props.item.id, quantity);
};
var removeItem = function () {
    emit('removeItem', props.item.id);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between p-4 border-b") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.item.image)), alt: ("Produto") }, { class: ("w-20 h-20 object-cover rounded-lg") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex-1 ml-4") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-lg font-semibold") }));
(__VLS_ctx.item.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-gray-600") }));
(__VLS_ctx.item.detail);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-red-500 font-bold") }));
(__VLS_ctx.item.price);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mt-2") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.updateQuantity(__VLS_ctx.item.quantity - 1);
    } }, { class: ("px-3 py-1 bg-gray-300 rounded-l") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign(__assign({ onChange: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.updateQuantity(__VLS_ctx.item.quantity);
    } }, { type: ("number") }), { class: ("w-12 text-center border") }));
(__VLS_ctx.item.quantity);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.updateQuantity(__VLS_ctx.item.quantity + 1);
    } }, { class: ("px-3 py-1 bg-gray-300 rounded-r") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.removeItem) }, { class: ("ml-4 text-red-600 hover:text-red-800") }));
['flex', 'items-center', 'justify-between', 'p-4', 'border-b', 'w-20', 'h-20', 'object-cover', 'rounded-lg', 'flex-1', 'ml-4', 'text-lg', 'font-semibold', 'text-gray-600', 'text-red-500', 'font-bold', 'flex', 'items-center', 'mt-2', 'px-3', 'py-1', 'bg-gray-300', 'rounded-l', 'w-12', 'text-center', 'border', 'px-3', 'py-1', 'bg-gray-300', 'rounded-r', 'ml-4', 'text-red-600', 'hover:text-red-800',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit, updateQuantity: updateQuantity, removeItem: removeItem });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit });
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
