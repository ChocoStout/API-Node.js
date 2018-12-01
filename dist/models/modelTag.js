"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TagSchema = new Schema({
    nombreTag: {
        type: String,
        required: 'Todos los tags necesitan un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=modelTag.js.map