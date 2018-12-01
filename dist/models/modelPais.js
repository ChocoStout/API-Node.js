"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.PaisSchema = new Schema({
    nombrePais: {
        type: String,
        required: 'Todos los paises requieren un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=modelPais.js.map