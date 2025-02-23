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
var vue_1 = require("vue");
var product_store_1 = require("@/features/products/store/product.store");
var cart_store_1 = require("@/features/cart/store/cart.store");
var ProductModal_vue_1 = require("./ProductModal.vue");
var ConfirmModal_vue_1 = require("@/presentation/components/ConfirmModal.vue");
var productStore = (0, product_store_1.useProductStore)();
var cartStore = (0, cart_store_1.useCartStore)();
var products = (0, vue_1.computed)(function () { return productStore.products; });
var isLoading = (0, vue_1.computed)(function () { return productStore.isLoading; });
var isModalOpen = (0, vue_1.ref)(false);
var selectedProduct = (0, vue_1.ref)(null);
var isConfirmModalOpen = (0, vue_1.ref)(false);
var productToDelete = (0, vue_1.ref)(null);
function increaseQuantity(product) {
    cartStore.addToCart(product);
}
function decreaseQuantity(productName) {
    cartStore.decreaseQuantity(productName);
}
function getProductQuantity(productName) {
    return cartStore.getProductQuantity(productName);
}
function openModal(product) {
    selectedProduct.value = product
        ? JSON.parse(JSON.stringify(product))
        : { name: '', detail: '', price: '', image: '' };
    isModalOpen.value = true;
}
function saveProduct(product) {
    var existingProduct = products.value.find(function (p) { return p.name === product.name; });
    if (existingProduct) {
        productStore.editProduct(product);
    }
    else {
        productStore.addProduct(product);
        products.value = __spreadArray(__spreadArray([], products.value, true), [product], false);
    }
    isModalOpen.value = false;
}
function openConfirmModal(productName) {
    productToDelete.value = productName;
    isConfirmModalOpen.value = true;
}
function confirmRemoveProduct() {
    if (productToDelete.value !== null) {
        productStore.removeProduct(productToDelete.value);
    }
    closeConfirmModal();
}
function closeConfirmModal() {
    isConfirmModalOpen.value = false;
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-4") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-2xl font-bold mb-6") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.openModal(null);
    } }, { class: ("mb-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition") }));
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-gray-500") }));
}
if (__VLS_ctx.products.length && !__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6") }));
    var _loop_1 = function (product) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((product.name)) }, { class: ("bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: ((product.image || 'https://via.placeholder.com/300')), alt: ("Imagem do Produto") }, { class: ("w-full h-40 object-cover rounded-t-lg") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-4") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-xl font-semibold text-gray-800") }));
        (product.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-sm text-gray-600") }));
        (product.detail);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-lg font-semibold text-red-600 mt-2") }));
        (product.price);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-4 flex items-center justify-between") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.products.length && !__VLS_ctx.isLoading)))
                    return;
                __VLS_ctx.decreaseQuantity(product.name);
            } }, { class: ("bg-gray-300 px-3 py-1 rounded-lg") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-lg font-semibold mx-4") }));
        (__VLS_ctx.getProductQuantity(product.name));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.products.length && !__VLS_ctx.isLoading)))
                    return;
                __VLS_ctx.increaseQuantity(product);
            } }, { class: ("bg-gray-300 px-3 py-1 rounded-lg") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-4 flex justify-between") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.products.length && !__VLS_ctx.isLoading)))
                    return;
                __VLS_ctx.openModal(product);
            } }, { class: ("bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600") }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.products.length && !__VLS_ctx.isLoading)))
                    return;
                __VLS_ctx.openConfirmModal(product.name);
            } }, { class: ("bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600") }));
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.products)); _i < _a.length; _i++) {
        var product = _a[_i][0];
        _loop_1(product);
    }
}
else if (!__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-gray-500") }));
}
if (__VLS_ctx.isModalOpen) {
    // @ts-ignore
    /** @type { [typeof ProductModal, ] } */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(ProductModal_vue_1.default, new ProductModal_vue_1.default(__assign(__assign({ 'onClose': {} }, { 'onSave': {} }), { isOpen: ((__VLS_ctx.isModalOpen)), product: ((__VLS_ctx.selectedProduct)) })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign(__assign({ 'onClose': {} }, { 'onSave': {} }), { isOpen: ((__VLS_ctx.isModalOpen)), product: ((__VLS_ctx.selectedProduct)) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
    var __VLS_5 = void 0;
    var __VLS_6 = {
        onClose: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            if (!((__VLS_ctx.isModalOpen)))
                return;
            __VLS_ctx.isModalOpen = false;
        }
    };
    var __VLS_7 = {
        onSave: (__VLS_ctx.saveProduct)
    };
    var __VLS_2 = void 0;
    var __VLS_3 = void 0;
    var __VLS_4;
}
// @ts-ignore
/** @type { [typeof ConfirmModal, ] } */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(ConfirmModal_vue_1.default, new ConfirmModal_vue_1.default(__assign(__assign({ 'onConfirm': {} }, { 'onCancel': {} }), { isOpen: ((__VLS_ctx.isConfirmModalOpen)), title: ("Excluir Produto"), message: ("Tem certeza que deseja excluir este produto?") })));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign(__assign({ 'onConfirm': {} }, { 'onCancel': {} }), { isOpen: ((__VLS_ctx.isConfirmModalOpen)), title: ("Excluir Produto"), message: ("Tem certeza que deseja excluir este produto?") })], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_13;
var __VLS_14 = {
    onConfirm: (__VLS_ctx.confirmRemoveProduct)
};
var __VLS_15 = {
    onCancel: (__VLS_ctx.closeConfirmModal)
};
var __VLS_10;
var __VLS_11;
var __VLS_12;
['p-4', 'text-2xl', 'font-bold', 'mb-6', 'mb-4', 'bg-green-500', 'text-white', 'px-6', 'py-3', 'rounded-lg', 'hover:bg-green-600', 'transition', 'text-gray-500', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'bg-white', 'border', 'border-gray-300', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'hover:scale-105', 'transition-transform', 'duration-200', 'ease-in-out', 'w-full', 'h-40', 'object-cover', 'rounded-t-lg', 'p-4', 'text-xl', 'font-semibold', 'text-gray-800', 'text-sm', 'text-gray-600', 'text-lg', 'font-semibold', 'text-red-600', 'mt-2', 'mt-4', 'flex', 'items-center', 'justify-between', 'bg-gray-300', 'px-3', 'py-1', 'rounded-lg', 'text-lg', 'font-semibold', 'mx-4', 'bg-gray-300', 'px-3', 'py-1', 'rounded-lg', 'mt-4', 'flex', 'justify-between', 'bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-blue-600', 'bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-red-600', 'text-gray-500',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            ProductModal: ProductModal_vue_1.default,
            ConfirmModal: ConfirmModal_vue_1.default,
            products: products,
            isLoading: isLoading,
            isModalOpen: isModalOpen,
            selectedProduct: selectedProduct,
            isConfirmModalOpen: isConfirmModalOpen,
            increaseQuantity: increaseQuantity,
            decreaseQuantity: decreaseQuantity,
            getProductQuantity: getProductQuantity,
            openModal: openModal,
            saveProduct: saveProduct,
            openConfirmModal: openConfirmModal,
            confirmRemoveProduct: confirmRemoveProduct,
            closeConfirmModal: closeConfirmModal,
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
