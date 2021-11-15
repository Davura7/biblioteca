"use strict";

//Clase Biblioteca

function Biblioteca(){
this.usuarios=[];
this.catalogo=[];
this.prestamos=[];
}

Biblioteca.prototype.optionsLibros = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.articulos){
        if (articulo.prestado == false){ // && articulo instanceof Libro){
            sOptions += '<option value="' + articulo.idArticulo + '">' + articulo.nombre + '</option>';
        }
    }

    return sOptions;
}

Biblioteca.prototype.optionsDVD = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.articulos){ 
        if (articulo.prestado == false){ // && articulo instanceof DVD
            sOptions += '<option value="' + articulo.idArticulo + '">' + articulo.nombre + '</option>';
        }
    }

    return sOptions;
}

Biblioteca.prototype.altaUsuario = function(){
    if(!contiene(oUsuario)){ //hay que hacer contiene();
        this.usuarios.push(oUsuario);
        return alert('Usuario dado de alta');
    }
    else
        return alert('Usuario existente');
}

Biblioteca.prototype.altaArticulo = function(){
    if(!contiene(oArticulo)){ //hay que hacer contiene();
        this.catalogo.push(oArticulo);
        return alert('Articulo dado de alta');
    }
    else
        return alert('Articulo existente');
}

Biblioteca.prototype.altaPrestamo = function(){
    if(!contiene(oPrestamo)){ //hay que hacer contiene();
        this.prestamos.push(oPrestamo);
        return alert('Prestamo dado de alta');
    }
    else
        return alert('Prestamo existente');
}

Biblioteca.prototype.devolverPrestamo = function(){

}

Biblioteca.prototype.listadoUsuarios = function(){
    let tUsuarios = '<table><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr>';
    for(const oUsuario of usuarios){
        tUsuario+=toHTMLRow(oUsuario);
    }
    tUsuarios+= '</table>';
    return tUsuarios;
}

Biblioteca.prototype.listadoArticulos = function(){
    let tArticulo = '<table><tr><th>ID</th><th>Titulo</th></tr>';
    for(const oArticulo of catalogo){
        tArticulo+=toHTMLRow(oArticulo);
    }
    tArticulo+= '</table>';
    return tArticulo;
}


Biblioteca.prototype.listadoPrestamos = function(){
    let tPrestamos = '<table><tr><th>IdPréstamo</th><th>Artículos</th><th>Usuario</th><th>FechaInicio</th><th>FechaFin</th></tr>';
    for(const oPrestamo of prestamos){
        if(dtFechaInicio<oPrestamo.fechaFin && dtFechaFin>oPrestamo.fechaInicio)
        tPrestamos+=toHTMLRow(oPrestamo);
        
    }
    tPrestamos+= '</table>';
    return tPrestamos;
}





//Clase usuario

class Usuario {
    constructor(idUsuario, nombre, apellidos, telefono) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idUsuario + "</td>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellidos + "</td>";
        sFila += "<td>" + this.telefono + "</td></tr>";

        return sFila;
    }
}


//Clase articulo

class Articulo{
    constructor(idArticulo, titulo) {
        this.idArticulo = idArticulo;
        this.titulo = titulo;

    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idArticulo + "</td>";
        sFila += "<td>" + this.titulo + "</td></tr>";

        return sFila;
    }
}


//Clase libro


class Libro extends Articulo{
    constructor(autor, paginas,idArticulo, titulo) {
        super(idArticulo, titulo);
        this.autor = autor;
        this.paginas = paginas;

    }


    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idArticulo + "</td>";
        sFila += "<td>" + this.titulo + "</td></tr>";

        return sFila;
    }
}


//Clase DVD


class DVD extends Articulo{
    constructor(fechaEstreno, subtitulada,idArticulo, titulo) {
        super(idArticulo, titulo);
        this.fechaEstreno = fechaEstreno;
        this.subtitulada = subtitulada;
    }


    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.fechaEstreno + "</td>";
        sFila += "<td>" + this.subtitulada + "</td></tr>";

        return sFila;
    }
}

//Clase prestamo


class Prestamo {
    constructor(idPrestamo, articulos, usuario, fechaInicio, fechaFin) {
        this.idPrestamo = idPrestamo;
        this.articulos = articulos;
        this.usuario = usuario;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;       
    }
    
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idPrestamo + "</td>";
        sFila += "<td>" + this.articulos + "</td>";
        sFila += "<td>" + this.usuario + "</td>";
        sFila += "<td>" + this.fechaInicio + "</td>";
        sFila += "<td>" + this.fechaFin + "</td></tr>";

        return sFila;
    }
}
