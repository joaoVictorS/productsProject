"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vite.config.ts
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var path_1 = require("path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_vue_1.default)()],
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, 'src'), // Certifique-se de que o alias '@' está apontando para o diretório 'src'
        },
    },
});
