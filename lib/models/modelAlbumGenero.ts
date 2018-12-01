import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AlbumGeneroSchema = new Schema({
    idAlbum: {
        type: String, 
        required: 'Todos los albums tienen un ID'
    },
    idGenero: {
        type: String, 
        required: 'Todos los generos tienen un ID'
    }
})