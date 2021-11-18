"use strict";

//Clase Biblioteca

function Biblioteca() {
    this.usuarios = [];
    this.catalogo = [];
    this.prestamos = [];
}

Biblioteca.prototype.optionsLibros = function () {

    let sOptions = '<option value="-1">Ninguno</option>';

    for (let articulo of this.catalogo) {
        if (articulo.bPrestado == false && articulo instanceof Libro) {
            sOptions += `<option value="${articulo.idArticulo}">${articulo.sTitulo}</option>`;
        }
    }

    return sOptions;
}



Biblioteca.prototype.optionsDVD = function () {

    let sOptions = '<option value="-1">Ninguno</option>';

    for (let articulo of this.catalogo) {
        if (articulo.bPrestado == false && articulo instanceof DVD) {
            sOptions += `<option value="${articulo.idArticulo}">${articulo.sTitulo}</option>`;
        }
    }

    return sOptions;
}

Biblioteca.prototype.optionsUsuarios = function () {

    let sOptions;

    for (let usuario of this.usuarios) {

        sOptions += `<option value="${usuario.idUsuario}">${usuario.nombre}</option>`;

    }

    return sOptions;
}

Biblioteca.prototype.optionsPrestamo = function () {

    let sOptions;

    for (const prestamo of this.prestamos) {
        if (prestamo.fechaFin == null)
            sOptions += `<option value="${prestamo.idPrestamo}">ID: ${prestamo.idPrestamo} Usuario: ${prestamo.usuario.idUsuario}</option>`;

    }

    return sOptions;
}




Biblioteca.prototype.altaUsuario = function (oUsuario) {
    if (!this.contieneUsuario(oUsuario)) {
        this.usuarios.push(oUsuario);
        return 'Usuario dado de alta';
    }
    else
        return 'Usuario existente';
}

Biblioteca.prototype.altaArticulo = function (oArticulo) {
    if (!this.contieneArticulo(oArticulo)) {
        this.catalogo.push(oArticulo);
        return 'Articulo dado de alta';
    }
    else
        return 'Articulo existente';
}

Biblioteca.prototype.altaPrestamo = function (oPrestamo) {
    if (!this.contienePrestamo(oPrestamo)) {
        this.prestamos.push(oPrestamo);
        return 'Prestamo dado de alta';
    }
    else
        return 'Prestamo no disponible';
}

Biblioteca.prototype.devolverPrestamo = function (idPrestamo) {

    for (const prestamoBucle of this.prestamos) {
        if (prestamoBucle.idPrestamo == idPrestamo) {
            this.prestamos.remove(prestamoBucle);
            return "Préstamo devuelto.";
        }
        return "Préstamo no existente.";
    }
}

Biblioteca.prototype.listadoUsuarios = function(){
    let tUsuarios = '<table><thead><tr><th>ID</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr></thead><tbody>';
    for(let oUsuario of this.usuarios){
        tUsuarios+= oUsuario.toHTMLRow();        
    }
    tUsuarios+= '</tbody></table>';

    return tUsuarios;
}

Biblioteca.prototype.listadoArticulos = function(){
    let tArticulo = '<table><tr><th>ID</th><th>Titulo</th><th>Autor</th><th>Paginas</th><th>FechaEstreno</th><th>Subtitulada</th></tr>';

    for(const oArticulo of this.catalogo){
        if(oArticulo instanceof Libro){

            tArticulo+=`<tr><td>${oArticulo.idArticulo}</td>`;
            tArticulo+=`<td>${oArticulo.sTitulo}</td>`;
            tArticulo+=`<td>${oArticulo.autor}</td>`;
            tArticulo+=`<td>${oArticulo.paginas}</td>`;
            tArticulo+="<td>-</td>";
            tArticulo+="<td>-</td></tr>";

        }
        if(oArticulo instanceof DVD){

            tArticulo+=`<tr><td>${oArticulo.idArticulo}</td>`;
            tArticulo+=`<td>${oArticulo.sTitulo}</td>`;
            tArticulo+="<td>-</td>";
            tArticulo+="<td>-</td>";
            tArticulo+=`<td>${oArticulo.fechaEstreno}</td>`;
            tArticulo+=`<td>${(oArticulo.subtitulada?"SI":"NO")}</td></tr>`;
    
        }
    }
    tArticulo+= '</table>';
    return tArticulo;
}

Biblioteca.prototype.listadoPrestamos = function(dtFechaInicio, dtFechaFin){
    let tPrestamos = '<table><tr><th>IdPréstamo</th><th>Artículos</th><th>Usuario</th><th>FechaInicio</th><th>FechaFin</th></tr>';
    for(const oPrestamo of this.prestamos){
        if(dtFechaInicio<oPrestamo.fechaInicio && dtFechaFin>oPrestamo.fechaInicio)
        tPrestamos+=oPrestamo.toHTMLRow();
        
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
    let tArticulos = '<table><tr><th>IdArtículo</th><th>Título</th>';

    if(sTipoArticulo=="libro"){
        tArticulos+='<th>Autor</th><th>Paginas</th></tr>';
    for(const oArticulo of this.catalogo){
        if(oArticulo instanceof Libro){
            tArticulos+=oArticulo.toHTMLRow();
            }
        }
    }

    if(sTipoArticulo=="dvd"){
        tArticulos+='<th>Fecha de Estreno</th><th>Subtitulada</th></tr>';
    for(const oArticulo of this.catalogo){
        if(oArticulo instanceof DVD){
            tArticulos+=oArticulo.toHTMLRow();
        }
    }
}
    tArticulos+= '</table>';
    return tArticulos;
}

Biblioteca.prototype.contieneUsuario = function (oUsuario) {
    for (const ejUsuario of this.usuarios) {

        if (ejUsuario.idUsuario == oUsuario.idUsuario)
            return true;


    }
    return false;
}

Biblioteca.prototype.contieneArticulo = function (oArticulo) {
    for (const ejArticulo of this.catalogo) {

        if (ejArticulo.idArticulo == oArticulo.idArticulo)
            return true;


    }
    return false;
}

Biblioteca.prototype.contienePrestamo = function (oPrestamo) {
    for (const ejPrestamo of this.prestamos) {

        if (ejPrestamo.idPrestamo == oPrestamo.idPrestamo || (ejPrestamo.usuario.idUsuario == oPrestamo.usuario.idUsuario && ejPrestamo.fechaFin==null))

            return true;


    }
    return false;
}



Biblioteca.prototype.getUsuario = function (sIdUsuario) {

    let usuarioPrestamo;
    for (const usuario of oBiblioteca.usuarios) {
        if (usuario.idUsuario == sIdUsuario) {
            usuarioPrestamo = usuario;

        }


    }
    return usuarioPrestamo;

}

Biblioteca.prototype.getArticulo = function (sIdArticulo) {

    let articuloPrestamo;
    for (const articulo of oBiblioteca.catalogo) {
        if (articulo.idArticulo == sIdArticulo) {
            articuloPrestamo = articulo;

        }


    }
    return articuloPrestamo;

}


Biblioteca.prototype.borrarPrestamo = function (sIdPrestamo) {

    for (const prestamo of this.prestamos) {
        if (prestamo.idPrestamo == sIdPrestamo) {
            prestamo.fechaFin = new Date();
            this.quitarArticulosPrestados(prestamo.articulos);
        }
    }

}

Biblioteca.prototype.prestarArticulos = function (arrayArticulos) {

    for (const articuloBliblioteca of this.catalogo) {

        for (const articulo of arrayArticulos) {
            if (articuloBliblioteca.idArticulo == articulo.idArticulo) {

                articuloBliblioteca.bPrestado = true;
            }
        }
    }
}

Biblioteca.prototype.quitarArticulosPrestados = function (arrayArticulos) {

    for (const articuloBliblioteca of this.catalogo) {

        for (const articulo of arrayArticulos) {
            if (articuloBliblioteca.idArticulo == articulo.idArticulo) {

                articuloBliblioteca.bPrestado = false;
            }
        }
    }
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
        sFila += `<td>${this.idUsuario}</td>`;
        sFila += `<td>${this.nombre}</td>`;
        sFila += `<td>${this.apellidos}</td>`;
        sFila += `<td>${this.telefono}</td></tr>`;

        return sFila;
    }
}


//Clase articulo

class Articulo {
    constructor(idArticulo, sTitulo, bPrestado) {
        this.idArticulo = idArticulo;
        this.sTitulo = sTitulo;
        this.bPrestado = bPrestado;

    }
    toHTMLRow() {
        let sFila = "<tr>";
        sFila += `<td>${this.idArticulo} </td>`;
        sFila += `<td>${this.sTitulo}</td></tr>`;

        return sFila;
    }
}


//Clase libro


class Libro extends Articulo {
    constructor(autor, paginas, idArticulo, sTitulo, bPrestado) {
        super(idArticulo, sTitulo, bPrestado);
        this.autor = autor;
        this.paginas = paginas;

    }


    toHTMLRow() {
        let sFila = "<tr>";
        sFila += `<td>${this.idArticulo}</td>`;
        sFila += `<td>${this.sTitulo}</td>`;
        sFila += `<td>${this.autor}</td>`;
        sFila += `<td>${this.paginas}</td></tr>`;

        return sFila;
    }
}


//Clase DVD


class DVD extends Articulo {
    constructor(fechaEstreno, subtitulada, idArticulo, titulo, bPrestado) {
        super(idArticulo, titulo, bPrestado);
        this.fechaEstreno = fechaEstreno;
        this.subtitulada = subtitulada;
    }


    toHTMLRow() {
        let sFila = "<tr>";
        sFila += `<td>${this.idArticulo} </td>`;
        sFila += `<td>${this.sTitulo}</td>`;
        sFila += `<td>${this.fechaEstreno}</td>`;
        sFila += `<td>${(this.subtitulada?"SI":"NO")}</td></tr>`;

        return sFila;
    }
}

//Clase prestamo


class Prestamo {
    constructor(idPrestamo, articulos, usuario, fechaInicio, fechaFin) {
        this.idPrestamo = idPrestamo;
        this.articulos = articulos;
        this.usuario = usuario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
    toHTMLRow() {
        let sFila = "<tr>";
        for(const oArticulo of this.articulos){
        sFila += `<td> ${this.idPrestamo}</td>`;
        sFila += `<td>${oArticulo.sTitulo}</td>`;
        sFila += `<td>${this.usuario.nombre} </td>`;
        sFila += `<td>${this.fechaInicio.getDate()}/${(this.fechaInicio.getMonth()+1)}/${this.fechaInicio.getFullYear()}</td>`;
            if(this.fechaFin==null){
                sFila += "<td></td></tr>";
            }else{
                sFila += `<td>${this.fechaFin.getDate()}/${(this.fechaFin.getMonth()+1)}/${this.fechaFin.getFullYear()}</td></tr>`;
            }
        }

        return sFila;
    }
}