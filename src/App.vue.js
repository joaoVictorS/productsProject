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
var vue_router_1 = require("vue-router");
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("min-h-screen flex flex-col bg-gray-100 text-gray-800") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("bg-blue-600 p-4 text-white flex justify-between items-center shadow-md") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-2xl font-bold tracking-wide") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex space-x-6") }));
var __VLS_0 = {}.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: ("/") }, { class: ("hover:text-yellow-300 transition") })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: ("/") }, { class: ("hover:text-yellow-300 transition") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_5.slots.default;
var __VLS_5;
var __VLS_6 = {}.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ to: ("/cart") }, { class: ("hover:text-yellow-300 transition") })));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ to: ("/cart") }, { class: ("hover:text-yellow-300 transition") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("flex-grow container mx-auto p-6 text-center") }));
var __VLS_12 = {}.RouterView;
/** @type { [typeof __VLS_components.RouterView, ] } */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)(__assign({ class: ("bg-gray-200 text-center p-4 mt-6") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
['min-h-screen', 'flex', 'flex-col', 'bg-gray-100', 'text-gray-800', 'bg-blue-600', 'p-4', 'text-white', 'flex', 'justify-between', 'items-center', 'shadow-md', 'text-2xl', 'font-bold', 'tracking-wide', 'flex', 'space-x-6', 'hover:text-yellow-300', 'transition', 'hover:text-yellow-300', 'transition', 'flex-grow', 'container', 'mx-auto', 'p-6', 'text-center', 'bg-gray-200', 'text-center', 'p-4', 'mt-6',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            RouterView: vue_router_1.RouterView,
            RouterLink: vue_router_1.RouterLink,
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
