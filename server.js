'use strict';

var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mFind"
});

app.listen(3264, function(err) {
    if(err){
        throw err;
    }
    console.log("Servidor activo");
});

app.get('/', function(req,res) {
    res.send('Funciona');
});

app.get('/tags/all', function(req, res) { //Funciona
    con.connect(function(err){
        con.query('SELECT NombreTag FROM Tags ORDER BY idTag', function(err, result, fields) {
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/tags/new', function(req, res) { //Funciona
    con.connect(function(err){
        console.log(req.body.tag);
        con.query('INSERT INTO Tags (NombreTag) VALUES (?)',req.body.tag, function(err,result, fields) {
            res.json(result);
            console.log('Insertaste el tag: ' + req.body.tag);
        });
    });
});

app.put('/tags/update', function(req, res) { //Funciona
    con.connect(function(err){
        console.log('ID: ' + req.body.id);
        console.log('Nuevo nombre: ' + req.body.nuevoNombre);
        con.query('UPDATE Tags SET NombreTag = ? WHERE idTag = ?', [req.body.nuevoNombre,req.body.id],function(err,result,fields) {
            res.json(result);
            console.log('El tag con el ID: ' + req.body.id + ' ha sido actualizado a:  ' + req.body.nuevoNombre);
        });
    });
});

app.delete('/tags/delete',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('DELETE FROM Tags WHERE idTag = ?',req.body.id,function(err, result, fields) {
            console.log('El tag con el ID: ' + req.body.id + ' ha sido eliminado');
        });
    });
});

app.get('/generos/all',function(req,res) { //Funciona
    con.connect(function(err){
        con.query('SELECT NombreGenero FROM Generos ORDER BY idGenero', function(err, result, fields) {
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/generos/new',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.genero);
        con.query('INSERT INTO Generos (NombreGenero) VALUES (?)',req.body.genero,function(err,result,fields) {
            res.json(result);
            console.log('Se inserto el genero: ' + req.body.genero);
        });
    });
});


app.put('/generos/update', function(req,res) { //Funciona
    con.connect(function(err){
        console.log('ID: ' + req.body.id);
        console.log('Nuevo nombre: ' + req.body.nuevoNombre);
        con.query('UPDATE Generos SET NombreGenero = ? WHERE idGenero = ?',[req.body.nuevoNombre,req.body.id],function(err,result,fields) {
            res.json(result);
            console.log('El genero con el ID: ' + req.body.id + ' ha sido actualizado a:  ' + req.body.nuevoNombre);
        });
    });
});

app.delete('/generos/delete',function(req,res) { //Funciona
    con.connect(function(err){
        console.log('ID: ' + req.body.id);
        con.query('DELETE FROM Generos WHERE idGenero = ?',req.body.id,function(err,result,fields) {
            console.log('Se elimino el genero con el ID: ' +req.body.id);
        })
    })
})

app.get('/albums/all', function(req,res) { //Funciona
    con.connect(function(err){
        con.query('SELECT NombreArtista, NombreAlbum FROM Albums ORDER BY idAlbum', function(err, result, fields) {
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/albums/new',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.nombreArtista);
        console.log(req.body.nombreAlbum);
        con.query('INSERT INTO Albums (NombreArtista,NombreAlbum) VALUES (?,?)',[req.body.nombreArtista,req.body.nombreAlbum], function(err,result,fields) {
            res.json(result);
            console.log('Se inserto el album ' + req.body.nombreAlbum + ' de ' + req.body.nombreArtista);
        });
    });
});

app.get('/albums/tags',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreTag FROM Tags WHERE idTag IN (SELECT idTag FROM AlbumsTags WHERE idAlbum = ?)',req.body.id,function(err,result,fields){
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/albums/tags',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.idAlbum);
        console.log(req.body.idTag);
        con.query('INSERT INTO AlbumsTags (idAlbum,idTag) VALUES (?,?)',[req.body.idAlbum,req.body.idTag],function(err,result,find){
            res.json(result);
            console.log('Se inserto el album: ' + req.body.idAlbum + ' con el tag: ' + req.body.idTag);
        });
    });
});

app.get('/albums/tags/sugerencia',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreArtista,NombreAlbum FROM Albums WHERE (idAlbum IN (SELECT DISTINCT idAlbum FROM AlbumsTags WHERE (idTag IN(SELECT idTag FROM AlbumsTags WHERE idAlbum = 1) AND (idAlbum != 1)))) ORDER BY RAND() LIMIT 10',[req.body.id,req.body.id],function(err,result,find){
            res.json(result);
            console.log(result);
        });
    });
});

app.get('/albums/generos',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreGenero FROM Generos WHERE idGenero IN (SELECT idGenero FROM AlbumsGeneros WHERE idAlbum = ?)',req.body.id,function(err,result,fields){
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/albums/generos',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.idAlbum);
        console.log(req.body.idGenero);
        con.query('INSERT INTO AlbumsGeneros (idAlbum,idGenero) VALUES (?,?)',[req.body.idAlbum,req.body.idGenero],function(err,result,find){
            res.json(result);
            console.log('Se inserto el album: ' + req.body.idAlbum + ' con el genero: ' + req.body.idGenero);
        });
    });
});

app.get('/albums/generos/sugerencia',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreArtista,NombreAlbum FROM Albums WHERE (idAlbum IN (SELECT DISTINCT idAlbum FROM AlbumsGeneros WHERE (idGenero IN(SELECT idGenero FROM AlbumsGeneros WHERE idAlbum = 1) AND (idAlbum != 1)))) ORDER BY RAND() LIMIT 10;',[req.body.id,req.body.id],function(err,result,find){
            res.json(result);
            console.log(result);
        });
    });
});

app.put('/albums/update',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        console.log(req.body.nuevoArtista);
        console.log(req.body.nuevoAlbum);
        con.query('UPDATE Albums SET NombreArtisa = ? , NombreAlbum = ? WHERE idAlbum = ?',[req.body.nuevoArtista,req.body.nuevoAlbum,req.body.id], function(err,result,fields){
            res.json(result);
            console.log('Se actualizo el album con ID: ' + req.body.id + ' al album: ' + req.body.nuevoAlbum + ' de: ' + req.body.nuevoArtista);
        });
    });
});

app.delete('/albums/delete',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('DELETE FROM Albums WHERE idAlbum = ?',req.body.id,function(err,result,fields){
            console.log('Se elimino el album con el ID: ' + req.body.id);
        });
    });
});

app.get('/canciones/all',function(req,res) { //Funciona
    con.connect(function(err){
        con.query('SELECT NombreArtista, NombreCancion FROM Canciones ORDER BY idCancion', function(err, result, fields) {
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/canciones/new', function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.nombreArtista);
        console.log(req.body.nombreCancion);
        con.query('INSERT INTO Canciones (NombreArtista,NombreCancion) VALUES(?,?)',[req.body.nombreArtista,req.body.nombreCancion],function(err,result,fields) {
            res.json(result);
            console.log(result);
        });
    });
});

app.put('/canciones/update',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        console.log(req.body.nuevoArtista);
        console.log(req.body.nuevaCancion);
        con.query('UPDATE Canciones SET NombreArtista = ? , NombreCancion = ? WHERE idCancion = ?',[req.body.nuevoArtista,req.body.nuevaCancion,req.body.id],function(err,result,fields) {
            res.json(result);
            console.log('Se actualizo la cancion con el ID: ' + req.body.id);
        });
    });
});

app.delete('/canciones/delete',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('DELETE FROM Canciones WHERE idCancion = ?',req.body.id,function(err,result,fields) {
            console.log('Se elimino la cancion con el ID: ' + req.body.id);
        });
    });
});

app.get('/canciones/tags',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreTag FROM Tags WHERE idTag IN (SELECT idTag FROM CancionesTags WHERE idCancion = ?)',req.body.id,function(err,result,fields){
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/canciones/tags',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.idCancion);
        console.log(req.body.idTag);
        con.query('INSERT INTO CancionesTags (idCancion,idTag) VALUES (?,?)',[req.body.idCancion,req.body.idTag],function(err,result,find){
            res.json(result);
            console.log('Se inserto la cancion: ' + req.body.idAlbum + ' con el tag: ' + req.body.idTag);
        });
    });
});

app.get('/canciones/tags/sugerencia',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreArtista,NombreCancion FROM Canciones WHERE (idCancion IN (SELECT DISTINCT idCancion FROM CancionesTags WHERE (idTag IN(SELECT idTag FROM CancionesTags WHERE idCancion = 1) AND (idCancion != 1)))) ORDER BY RAND() LIMIT 10',[req.body.id,req.body.id],function(err,result,find){
            res.json(result);
            console.log(result);
        });
    });
});

app.get('/canciones/generos',function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreGenero FROM Tags WHERE idGenero IN (SELECT idGenero FROM CancionesGeneros WHERE idCancion = ?)',req.body.id,function(err,result,fields){
            res.json(result);
            console.log(result);
        });
    });
});

app.post('/canciones/generos', function(req,res) { //Funciona
    con.connect(function(err){
        console.log(req.body.idCancion);
        console.log(req.body.idGenero);
        con.query('INSERT INTO CancionesGeneros (idCancion,idGenero) VALUES (?,?)',[req.body.idCancion,req.body.idGenero],function(err,result,find){
            res.json(result);
            console.log('Se inserto la cancion: ' + req.body.idAlbum + ' con el genero: ' + req.body.idGenero);
        });
    });
});

app.post('canciones/generos/sugerencia', function(req,res) {
    con.connect(function(err){
        console.log(req.body.id);
        con.query('SELECT NombreArtista,NombreCancion FROM Canciones WHERE (idCancion IN (SELECT DISTINCT idCancion FROM CancionesGeneros WHERE (idGenero IN(SELECT idGenero FROM CancionesGeneros WHERE idCancion = 1) AND (idCancion != 1)))) ORDER BY RAND() LIMIT 10',[req.body.id,req.body.id],function(err,result,find){
            res.json(result);
            console.log(result);
        });
    });
});