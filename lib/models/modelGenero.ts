import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GeneroSchema = new Schema({
    nombreGenero: {
        type: String, 
        required: 'Todos los generos requieren un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});