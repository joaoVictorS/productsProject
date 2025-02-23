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
var __VLS_props = defineProps({
    isOpen: Boolean,
    title: String,
    message: String
});
var emit = defineEmits(['confirm', 'cancel']);
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.isOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed inset-0 flex items-center justify-center bg-black bg-opacity-50") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white p-6 rounded-lg shadow-lg w-96") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-xl font-bold mb-4") }));
    (__VLS_ctx.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.message);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-end mt-4") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!((__VLS_ctx.isOpen)))
                return;
            __VLS_ctx.emit('cancel');
        } }, { class: ("bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!((__VLS_ctx.isOpen)))
                return;
            __VLS_ctx.emit('confirm');
        } }, { class: ("bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2") }));
}
['fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'w-96', 'text-xl', 'font-bold', 'mb-4', 'flex', 'justify-end', 'mt-4', 'bg-gray-400', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-gray-500', 'bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-red-600', 'ml-2',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { $emit: emit, emit: emit });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(__VLS_props) }, __VLS_props), { $emit: emit });
    },
});
; /* PartiallyEnd: #4569/main.vue */
