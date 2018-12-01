import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AlbumSchema = new Schema({
    nombreArtista: {
        type: String,
        required: 'Todos los albums deben tener un artista'
    },
    nombreAlbum: {
        type: String,
        required: 'Todos los albums deben tener un nombre'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});