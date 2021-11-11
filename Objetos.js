"use strict"
//Clase usuario

function Usuario(iIdUsuario,sNombre,sApellidos,iTelefono){
    this.idUsuario=iIdUsuario;
    this.nombre=sNombre;
    this.apellidos=sApellidos;
    this.telefono=iTelefono;
}

Usuario.prototype.toHTMLRow=function(){
    let sFila="<tr>";
    sFila+="<td>"+this.idUsuario+"</td>";
    sFila+="<td>"+this.nombre+"</td>";
    sFila+="<td>"+this.apellidos+"</td>";
    sFila+="<td>"+this.telefono+"</td></tr>";

    return sFila;
}

//Clase articulo

function Articulo(iIdArticulo,sTitulo){
    this.idArticulo=iIdArticulo;
    this.titulo=sTitulo;
    
}

Articulo.prototype.toHTMLRow=function(){
    let sFila="<tr>";
    sFila+="<td>"+this.idArticulo+"</td>";
    sFila+="<td>"+this.titulo+"</td></tr>";

    return sFila;
}

//Clase libro


function Articulo(autor,paginas){
    this.idArticulo=iIdArticulo;
    this.autor=sTitulo;
    
}

Articulo.prototype.toHTMLRow=function(){
    let sFila="<tr>";
    sFila+="<td>"+this.idArticulo+"</td>";
    sFila+="<td>"+this.titulo+"</td></tr>";

    return sFila;
}