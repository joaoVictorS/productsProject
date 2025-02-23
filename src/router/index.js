"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/router/index.ts
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("@/presentation/views/HomeView/Home.vue"); // Usando o alias '@' para importar corretamente
var CartView_vue_1 = require("@/presentation/views/CartView/CartView.vue"); // Usando o alias '@' para importar corretamente
var routes = [
    { path: '/', component: Home_vue_1.default },
    { path: '/cart', component: CartView_vue_1.default },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
exports.default = router;
