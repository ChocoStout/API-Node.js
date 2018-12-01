import * as mongoose from 'mongoose';

import {AlbumSchema} from '../models/modelAlbum';
import {AlbumTagSchema} from '../models/modelAlbumTags';
import {AlbumGeneroSchema} from '../models/modelAlbumGenero';

import {Request,Response} from 'express';
import { GeneroController } from './GeneroController';

const Album = mongoose.model('Album',AlbumSchema);
const AlbumTag = mongoose.model('AlbumTag', AlbumTagSchema);
const AlbumGenero = mongoose.model('AlbumGenero', AlbumGeneroSchema);

export class AlbumController{

    public agregarAlbum(req: Request, res:Response) {
        let newAlbum = new Album(req.body);
        newAlbum.save((err,album) => {
            if(err){
                res.send(err);
            }
            res.json(album);
        })
    }

    public mostrarAlbums(req: Request, res: Response) {
        Album.find({}, (err,album) => {
            if(err){
                res.send(err);
            }
            res.json(album);
        })
    }

    public mostrarAlbumID(req: Request, res: Response) {
        Album.findById(req.params.idAlbum, (err,album) => {
            if(err){
                res.send(err);
            }
            res.json(album);
        })
    }

    public actualizarAlbum(req: Request, res: Response) {
        Album.findOneAndUpdate({_id: req.params.idAlbum}, (err, album) => {
            req.body, {new:true}, (err,album) => {
                if(err){
                    res.send(err);
                }
                res.json(album);
            }
        })
    }

    public eliminarAlbum(req: Request, res: Response) {
        Album.remove({_id: req.params.idAlbum}, (err,album) => {
            if(err){
                res.send(err);
            }
            res.json({
                message: 'Se elimino exitosamente el album'
            })
        })
    }

    public agregarGenero(req: Request, res: Response) {
        let newGenero = new AlbumGenero(req.body);
        newGenero.save((err, genero) => {
            if(err){
                res.send(err);
            }
            res.json(genero);
        })
    }

    public agreagarTag(req: Request, res: Response) {
        let newTag = new AlbumTag(req.body);
        newTag.save((err, tag) =>  {
            if(err){
                res.send(err);
            }
            res.json(tag);
        })
    }
}