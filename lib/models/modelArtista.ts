import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ArtistaSchema = new Schema({
    nombreArtista: {
        type: String, 
        required: 'Todos los artistas deben tener un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})