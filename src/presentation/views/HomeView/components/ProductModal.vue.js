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
var props = (0, vue_1.defineProps)({
    isOpen: Boolean,
    product: Object,
});
var emit = (0, vue_1.defineEmits)(['save', 'close']);
var localProduct = (0, vue_1.ref)({ name: '', detail: '', price: '', image: '' });
var isEditing = (0, vue_1.ref)(false);
(0, vue_1.watchEffect)(function () {
    if (props.isOpen) {
        if (props.product) {
            localProduct.value = JSON.parse(JSON.stringify(props.product));
            isEditing.value = true;
        }
        else {
            localProduct.value = { name: '', detail: '', price: '', image: '' };
            isEditing.value = false;
        }
    }
});
function handleImageUpload(event) {
    var file = event.target.files[0];
    if (!file)
        return;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        localProduct.value.image = reader.result;
    };
}
function saveProduct() {
    emit('save', __assign({}, localProduct.value));
}
function closeModal() {
    emit('close');
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
if (__VLS_ctx.isOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fixed inset-0 flex items-center justify-center bg-black bg-opacity-50") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-white p-6 rounded-lg shadow-lg w-96") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-xl font-bold mb-4") }));
    (__VLS_ctx.isEditing ? '✏️ Editar Produto' : '➕ Criar Produto');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("space-y-4") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ placeholder: ("Nome do Produto") }, { class: ("w-full p-2 border rounded") }));
    (__VLS_ctx.localProduct.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ placeholder: ("Detalhes") }, { class: ("w-full p-2 border rounded") }));
    (__VLS_ctx.localProduct.detail);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ type: ("number"), placeholder: ("Preço") }, { class: ("w-full p-2 border rounded") }));
    (__VLS_ctx.localProduct.price);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign(__assign({ onChange: (__VLS_ctx.handleImageUpload) }, { type: ("file"), accept: ("image/*") }), { class: ("w-full p-2 border rounded") }));
    if (__VLS_ctx.localProduct.image) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.localProduct.image)), alt: ("Prévia da Imagem") }, { class: ("w-full h-40 object-cover rounded") }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-end mt-4") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.closeModal) }, { class: ("bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.saveProduct) }, { class: ("bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-2") }));
    (__VLS_ctx.isEditing ? 'Salvar' : 'Adicionar');
}
['fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'w-96', 'text-xl', 'font-bold', 'mb-4', 'space-y-4', 'w-full', 'p-2', 'border', 'rounded', 'w-full', 'p-2', 'border', 'rounded', 'w-full', 'p-2', 'border', 'rounded', 'w-full', 'p-2', 'border', 'rounded', 'w-full', 'h-40', 'object-cover', 'rounded', 'flex', 'justify-end', 'mt-4', 'bg-gray-400', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-gray-500', 'bg-green-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-green-600', 'ml-2',];
var __VLS_special;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit, localProduct: localProduct, isEditing: isEditing, handleImageUpload: handleImageUpload, saveProduct: saveProduct, closeModal: closeModal });
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return __assign(__assign({ $props: __VLS_makeOptional(props) }, props), { $emit: emit });
    },
});
; /* PartiallyEnd: #4569/main.vue */
