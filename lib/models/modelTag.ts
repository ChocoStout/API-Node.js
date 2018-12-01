import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
    nombreTag: {
        type: String,
        required: 'Todos los tags necesitan un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});