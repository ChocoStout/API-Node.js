"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.GeneroSchema = new Schema({
    nombreGenero: {
        type: String,
        required: 'Todos los generos requieren un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=modelGenero.js.map