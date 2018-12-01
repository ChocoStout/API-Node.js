"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UsuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: 'Todo usuario necesita un username'
    },
    passwordUsuario: {
        type: String,
        required: 'Todo usuario necesita una contraseña'
    },
    tagPreferido0: {
        type: Number,
        required: 'Todo usuario debe tener al menos un tag preferido'
    },
    tagPreferido1: {
        type: Number,
        default: null
    },
    tagPreferido2: {
        type: Number,
        default: null
    },
    tagPreferido3: {
        type: Number,
        default: null
    },
    generoPreferido0: {
        type: Number,
        required: 'Todo usuario debe tener al menos un genero preferido'
    },
    generoPreferido1: {
        type: Number,
        default: null
    },
    generoPreferido2: {
        type: Number,
        default: null
    },
    generoPreferido3: {
        type: Number,
        default: null
    },
});
//# sourceMappingURL=modelUsuario.js.map