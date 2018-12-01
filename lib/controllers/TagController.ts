import * as mongoose from 'mongoose';

import {TagSchema} from '../models/modelTag';

import {Request, Response} from 'express';

const Tag = mongoose.model('Tag', TagSchema);

export class TagController{

    public agregarTag(req: Request, res: Response) {
        let newTag = new Tag(req.body);
        newTag.save((err,tag) => {
            if(err){
                res.send(err);
            }
            res.json(tag)
        })
    }

    public mostrarTags(req: Request, res: Response) {
        Tag.find({}, (err, tag) => {
            if(err){
                res.send(err);
            }
            res.json(tag);
        })
    }

    public mostrarTagID(req: Request, res: Response) {
        Tag.findById(req.params.idTag, (err, tag) => {
            if(err){
                res.send(err);
            }
            res.json(tag)
        })
    }

    public actualizarTag(req: Request, res: Response) {
        Tag.findOneAndUpdate({ _id: req.params.idTag},
            req.body, {new: true}, (err, tag) => {
                if(err){
                    res.send(err);
                }
                res.json(tag);
            })
    }

    public eliminarTag(req: Request, res: Response) {
        Tag.remove({ _id: req.params.idTag }, (err,tag) => {
            if(err){
                res.send(err);
            }
            res.json({
                message: 'Se elimino exitosamente el tag'
            });
        })
    }
}