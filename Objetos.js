"use strict";

//Clase Biblioteca

function Biblioteca(){
this.usuarios=[];
this.catalogo=[];
this.prestamos=[];
}

Bibilioteca.prototype.optionsCatalogo = function(){

    let sOptions = "";
    
    for(Articulo of this.articulo){
        if(Articulo.prestado==false){
         sOptions+= '<option value="'+Articulo.idArticulo+'">'+Articulo.titulo+'</option>';
            }
    }
    
}

function altaUsuario(oUsuario){
    if(!contiene(oUsuario)){ //hay que hacer contiene();
        Biblioteca.usuarios.push(oUsuario);
        return alert('Usuario dado de alta');
    }
    else
        return alert('Usuario existente');
}

function altaArticulo(oArticulo){
    if(!contiene(oArticulo)){ //hay que hacer contiene();
        Biblioteca.catalogo.push(oArticulo);
        return alert('Articulo dado de alta');
    }
    else
        return alert('Articulo existente');
}

function altaPrestamo(oPrestamo){
    if(!contiene(oPrestamo)){ //hay que hacer contiene();
        Biblioteca.prestamos.push(oPrestamo);
        return alert('Prestamo dado de alta');
    }
    else
        return alert('Prestamo existente');
}

function devolverPrestamo(idPrestamo){

}

function listadoUsuarios(){
    let tUsuarios = '<table><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr>';
    for(const oUsuario of usuarios){
        tUsuario+=toHTMLRow(oUsuario);
    }
    tUsuarios+= '</table>';
    return tUsuarios;
}

function listadoArticulos(){
    let tArticulo = '<table><tr><th>ID</th><th>Titulo</th></tr>';
    for(const oArticulo of catalogo){
        tArticulo+=toHTMLRow(oArticulo);
    }
    tArticulo+= '</table>';
    return tArticulo;
}


function listadoPrestamos(dtFechaInicio, dtFechaFin){
    let tPrestamos = '<table><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr>';
    for(const oPrestamo of prestamos){
        if(dtFechaInicio<oPrestamo.fechaFin && dtFechaFin>oPrestamo.fechaInicio)
        tPrestamos+=toHTMLRow(oPrestamo);
        
    }
    tPrestamos+= '</table>';
    return tPrestamos;
}





//Clase usuario

class Usuario {
    constructor(iIdUsuario, sNombre, sApellidos, iTelefono) {
        this.idUsuario = iIdUsuario;
        this.nombre = sNombre;
        this.apellidos = sApellidos;
        this.telefono = iTelefono;
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

class Articulo {
    constructor(iIdArticulo, sTitulo) {
        this.idArticulo = iIdArticulo;
        this.titulo = sTitulo;

    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idArticulo + "</td>";
        sFila += "<td>" + this.titulo + "</td></tr>";

        return sFila;
    }
}


//Clase libro


class Libro {
    constructor(autor, paginas) {
        this.idArticulo = iIdArticulo;
        this.autor = sTitulo;

    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.idArticulo + "</td>";
        sFila += "<td>" + this.titulo + "</td></tr>";

        return sFila;
    }
}

//Clase prestamo


class Prestamo {
    constructor(idPrestamo, articulos, usuario, fechaInicio, fechaFin) {
        this.idPrestamo = idPrestamo;
        this.articulos = [];
        this.usuario = new Usuario;
        this.fechaInicio=new Date;
        this.fechaFin=new Date;
        

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


