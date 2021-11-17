"use strict";

//Clase Biblioteca

function Biblioteca(){
this.usuarios=[];
this.catalogo=[];
this.prestamos=[];
}

Biblioteca.prototype.optionsLibros = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.catalogo){
        if (articulo.bPrestado == false && articulo instanceof Libro){ 
            sOptions += `<option value="${articulo.idArticulo}">${articulo.sTitulo}</option>`;
        }
    }

    return sOptions;
}

Biblioteca.prototype.optionsDVD = function(){

    let sOptions = '<option value="-1">Ninguno</option>';

    for(let articulo of this.catalogo){ 
        if (articulo.bPrestado == false && articulo instanceof DVD){ 
            sOptions += `<option value="${articulo.idArticulo}">${articulo.sTitulo}</option>`;
        }
    }

    return sOptions;
}

Biblioteca.prototype.altaUsuario = function(oUsuario){
    if(!contieneUsuario(oUsuario)){ //hay que hacer contiene();
        this.usuarios.push(oUsuario);
        return 'Usuario dado de alta';
    }
    else
        return 'Usuario existente';
}

Biblioteca.prototype.altaArticulo = function(oArticulo){
    if(!this.contieneArticulo(oArticulo)){
        this.catalogo.push(oArticulo);
        return 'Articulo dado de alta';
    }
    else
        return 'Articulo existente';
}

Biblioteca.prototype.altaPrestamo = function(oPrestamo){
    if(!contienePrestamo(oPrestamo)){ //hay que hacer contiene();
        this.prestamos.push(oPrestamo);
        return 'Prestamo dado de alta';
    }
    else
        return 'Prestamo existente';
}

Biblioteca.prototype.devolverPrestamo = function(idPrestamo){

    for (const prestamoBucle of this.prestamos) {
        if(prestamoBucle.idPrestamo == idPrestamo){
            this.prestamos.remove(prestamoBucle);
        return "Préstamo devuelto.";
        }
        return "Préstamo no existente.";
    }
}

Biblioteca.prototype.listadoUsuarios = function(){
    let tUsuarios = '<table><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr>';
    for(const oUsuario of this.usuarios){
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


Biblioteca.prototype.listadoPrestamos = function(dtFechaInicio, dtFechaFin){
    let tPrestamos = '<table><tr><th>IdPréstamo</th><th>Artículos</th><th>Usuario</th><th>FechaInicio</th><th>FechaFin</th></tr>';
    for(const oPrestamo of this.prestamos){
        if(dtFechaInicio<oPrestamo.fechaInicio && dtFechaFin>oPrestamo.fechaInicio)
        tPrestamos+=toHTMLRow(oPrestamo);
        
    }
    tPrestamos+= '</table>';
    return tPrestamos;
}

Biblioteca.prototype.listadoPrestamosUsuario = function(idUsuario){
    let tPrestamos = '<table><tr><th>IdPréstamo</th><th>Artículos</th><th>Usuario</th><th>FechaInicio</th><th>FechaFin</th></tr>';
    for(const oPrestamo of this.prestamos){
        if(idUsuario==oPrestamo.idUsuario)
        tPrestamos+=toHTMLRow(oPrestamo);
        
    }
    tPrestamos+= '</table>';
    return tPrestamos;
}


Biblioteca.prototype.listadoTipoArticulo = function(sTipoArticulo){
    // NO SE SI ESTO FUNCIONA, ASÍ QUE TEN UN BUEN DÍA
    let tPrestamos = '<table><tr><th>IdArtículo</th><th>Título</th>';

    if(sTipoArticulo instanceof Libro){
    tPrestamos+='<th>Autor</th><th>Paginas</th></tr>';
    for(const oPrestamo of this.prestamos){
        if(oPrestamo instanceof Libro){
            tPrestamos+=toHTMLRow(oPrestamo);
            }
        }
    }

    if(sTipoArticulo instanceof DVD){
    tPrestamos+='<th>Fecha de Estreno</th><th>Subtitulada</th></tr>';
    for(const oPrestamo of this.prestamos){
        if(oPrestamo instanceof DVD){
            tPrestamos+=toHTMLRow(oPrestamo);
        }
    }
}
    tPrestamos+= '</table>';
    return tPrestamos;
}

Biblioteca.prototype.contieneUsuario = function (oUsuario){
    for (const ejUsuario of this.usuarios) {

        if (ejUsuario.idUsuario == oUsuario.idUsuario)
            return true;


    }
    return false;
}

Biblioteca.prototype.contieneArticulo = function(oArticulo){
    for (const ejArticulo of this.catalogo) {

        if (ejArticulo.idArticulo == oArticulo.idArticulo)
            return true;


    }
    return false;
}

Biblioteca.prototype.contienePrestamo = function(oPrestamo){
    for (const ejPrestamo of this.prestamos) {

        if (ejPrestamo.idPrestamo == oPrestamo.idPrestamo)
            return true;


    }
    return false;
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
    constructor(idArticulo, sTitulo, bPrestado) {
        this.idArticulo = idArticulo;
        this.sTitulo = sTitulo;
        this.bPrestado = bPrestado;

    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idArticulo + "</td>";
        sFila += "<td>" + this.sTitulo + "</td></tr>";

        return sFila;
    }
}


//Clase libro


class Libro extends Articulo{
    constructor(autor, paginas,idArticulo, sTitulo, bPrestado) {
        super(idArticulo, sTitulo, bPrestado);
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
    constructor(fechaEstreno, subtitulada,idArticulo, titulo, bPrestado) {
        super(idArticulo, titulo, bPrestado);
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

