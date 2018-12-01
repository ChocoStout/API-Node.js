import * as mongoose from 'mongoose';

import {GeneroSchema} from '../models/modelGenero';

import {Request, Response} from 'express';

const Genero = mongoose.model('Genero', GeneroSchema);

export class GeneroController{

    public agregarGenero(req: Request, res: Response) {
        let newGenero = new Genero(req.body);
        newGenero.save((err,genero) => {
            if(err){
                res.send(err);
            }
            res.json(genero);
        })
    }

    public mostrarGeneros(req: Request, res: Response) {
        Genero.find({}, (err, genero) => {
            if(err){
                res.send(err);
            }
            res.json(genero);
        })
    }

    public mostrarGeneroID(req: Request, res: Response) {
        Genero.findById(req.params.idGenero, (err,genero) => {
            if(err){
                res.send(err);
            }
            res.json(genero);
        })
    }

    public actualizarGenero(req: Request, res: Response) {
        Genero.findOneAndUpdate({ _id: req.params.idGenero},
            req.body, {new: true}, (err,genero) => {
                if(err){
                    res.send(err);
                }
                res.json(genero);
            })
    }

    public eliminarGenero(req: Request, res: Response) {
        Genero.remove({ _id: req.params.idGenero}, (err,genero) => {
            if(err){
                res.send(err);
            }
            res.json({
                message: 'Se elimino exitosamente el genero'
            })
        })
    }
}