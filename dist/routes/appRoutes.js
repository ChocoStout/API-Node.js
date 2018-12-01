"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TagController_1 = require("../controllers/TagController");
class Routes {
    constructor() {
        this.tagController = new TagController_1.TagController();
    }
    routes(app) {
        //Pruebas de servidor
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'El servidor funciona :D'
            });
        });
        //Tags 
        app.route('/tags')
            //Peticion GET
            .get(this.tagController.mostrarTags) //Mostrar todos los tags
            //Peticion POST
            .post(this.tagController.agregarTag); //Agregar un nuevo tag
        //Detalles de un tag
        app.route('/tags/:idTag')
            //Peticion GET
            .get(this.tagController.mostrarTagID) //Muestra un tag en base al ID proporcionado
            //Peticion PUT
            .put(this.tagController.actualizarTag) //Actualiza un tag en base al ID proporcionado
            //Peticion DELETE
            .delete(this.tagController.eliminarTag); //Elimina un tag en base al ID proporcionado
        //Generos
        app.route('/generos')
            //Peticion GET
            .get((req, res) => {
            //Mostrar todos los generos
            res.status(200).send({
                message: 'Mostrando todos los generos'
            });
        })
            //Peticion POST
            .post((req, res) => {
            //Crear nuevo genero
            res.status(200).send({
                message: 'Creando un nuevo genero'
            });
        });
        //Detalles de un genero
        app.route('/generos/:idGenero')
            //Peticion GET
            .get((req, res) => {
            //Mostrar detalles de un genero
            res.status(200).send({
                message: 'Peticion GET exitosa'
            });
        })
            //Peticion PUT
            .put((req, res) => {
            //Actualizar detalles de un genero
            res.status(200).send({
                message: 'Peticion PUT exitosa'
            });
        })
            //Peticion DELETE
            .delete((req, res) => {
            //Borrar un genero
            res.status(200).send({
                message: 'Peticion DELETE exitosa'
            });
        });
        //Paises
        app.route('/paises')
            //Peticion GET
            .get((req, res) => {
            //Mostrar todos los paises
            res.status(200).send({
                message: 'Mostrando todos los paises'
            });
        })
            //Peticion POST
            .post((req, res) => {
            //Crear un nuevo pais
            res.status(200).send({
                message: 'Creando nuevo pais'
            });
        });
        //Detalles de un pais
        app.route('/paises/:idPais')
            //Peticion GET
            .get((req, res) => {
            //Mostrar detalles un pais
            res.status(200).send({
                message: 'Peticion GET exitosa'
            });
        })
            //Peticion PUT
            .put((req, res) => {
            //Actualizar un pais
            res.status(200).send({
                message: 'Peticion PUT exitosa'
            });
        })
            //Peticion DELETE
            .delete((req, res) => {
            //Borrar un pais
            res.status(200).send({
                message: 'Peticion DELETE exitosa'
            });
        });
        //Usuarios
        app.route('/usuarios')
            //Peticion GET
            .get((req, res) => {
            //Mostrar todos los usuarios
            res.status(200).send({
                message: 'Mostando usuarios'
            });
        })
            //Peticion POST
            .post((req, res) => {
            //Insertar un usuario
            res.status(200).send({
                message: 'Creando usuario'
            });
        });
        //Detalles de un usuario
        app.route('/usuarios/:idUsuario')
            //Peticion GET
            .get((req, res) => {
            //Mostrar un usuario
            res.status(200).send({
                message: 'Peticion GET exitosa'
            });
        })
            //Peticion PUT
            .put((req, res) => {
            //Actualizar un usuario
            res.status(200).send({
                message: 'Peticion PUT exitosa'
            });
        })
            //Peticion DELETE
            .delete((req, res) => {
            //Borrar un usuario
            res.status(200).send({
                message: 'Peticion DELETE exitosa'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map