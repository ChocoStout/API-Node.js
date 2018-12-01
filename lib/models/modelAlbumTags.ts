import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AlbumTagSchema = new Schema({
    idAlbum: {
        type: String, 
        required: 'Todos los albums tienen un ID'
    },
    idTag: {
        type: String, 
        required: 'Todos los tags tienen un ID'
    }
})