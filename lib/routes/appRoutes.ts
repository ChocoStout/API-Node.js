import {TagController} from "../controllers/TagController";
import {GeneroController} from "../controllers/GeneroController";
import {AlbumController} from "../controllers/AlbumController";

import {Request,Response} from "express";

export class Routes{

    public tagController: TagController = new TagController();
    public generoController: GeneroController = new GeneroController();
    public albumController: AlbumController = new AlbumController();

    public routes(app): void{

        //Pruebas de servidor
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'El servidor funciona :D'
            })
        })

        //Tags 
        app.route('/tags')
        //Peticion GET
        .get(this.tagController.mostrarTags) //Mostrar todos los tags
        //Peticion POST
        .post(this.tagController.agregarTag) //Agregar un nuevo tag

        //Detalles de un tag
        app.route('/tags/:idTag')
        //Peticion GET
        .get(this.tagController.mostrarTagID) //Muestra un tag en base al ID proporcionado
        //Peticion PUT
        .put(this.tagController.actualizarTag) //Actualiza un tag en base al ID proporcionado
        //Peticion DELETE
        .delete(this.tagController.eliminarTag) //Elimina un tag en base al ID proporcionado


        //Generos
        app.route('/generos')
        //Peticion GET
        .get(this.generoController.mostrarGeneros) //Mostrar todos los generos
        //Peticion POST
        .post(this.generoController.agregarGenero) //Agregar un genero

        //Detalles de un genero
        app.route('/generos/:idGenero')
        //Peticion GET
        .get(this.generoController.mostrarGeneroID) //Mostrar un genero por ID
        //Peticion PUT
        .put(this.generoController.actualizarGenero) //Actualizar un genero por ID
        //Peticion DELETE
        .delete(this.generoController.eliminarGenero) //Eliminar un genero por ID

        
        //Albums
        app.route('/albums')
        .get(this.albumController.mostrarAlbums)//Mostrar todos los albums
        .post(this.albumController.agregarAlbum)//Crear un nuevo album

        //Detalles de un album
        app.route('/albums/:idAlbum')
        .get(this.albumController.mostrarAlbumID)//Mostrar album por ID
        .put(this.albumController.actualizarAlbum)//Actualizar album por ID
        .delete(this.albumController.eliminarAlbum)//Borrar album por ID

        //Tags de un album
        app.route('/albums/tags')
        .post(this.albumController.agreagarTag)//Asociar un tag a un album

        //Generos de un album
        app.route('/albums/generos')
        .post(this.albumController.agregarGenero)//Asocia un genero a un album


        //Artistas
        app.route('/artistas')
        .get()//Mostrar todos los artistas
        .post()//Crear un nuevo artista

        //Detalles de un artista
        app.route('/artistas/:idArtista')
        .get()//Mostrar artista por ID
        .put()//Actualizar artista por ID
        .delete()//Borrar artista por ID
    }
}