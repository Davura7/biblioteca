// Variables globales
var oBiblioteca = new Biblioteca();
datosIniciales();


function datosIniciales() {
  oBiblioteca.catalogo = [
    new Libro("Hugo", 43, 18, "El Quijote", true),
    new Libro("Hugo", 12, 34, "Sueñan las los androides con ovejas eléctricas", false),
    new Libro("Hugo", 22, 67, "Punpun", false),
    new DVD("2020-03-23", true, 33, "el rey leon", false),
    new DVD("2020-03-23", true, 42, "dumbo", false),
    new DVD("2020-03-23", true, 24, "cenicienta", false),
  ];
  oBiblioteca.usuarios = [
    new Usuario(23, "Leonardo", "Gonzalez", "668542558"),
    new Usuario(45, "Pedro", "Martínez", "988755640"),
    new Usuario(78, "Lucía", "Rodríguez", "64578123"),
    new Usuario(42, "Ana", "Romero", "69758423")
  ];
  oBiblioteca.prestamos = [
    new Prestamo(1, [new Libro("Hugo", 43, 18, "El Quijote", true)], new Usuario(45, "juan2", "gonzalez2", "424242424"), new Date("2021-10-30"), null)
  ];
}

function mostrarModalError(cuerpo) {

  document.querySelector("#modalTitulo").innerHTML = 'Error';
  document.querySelector("#modalCuerpo").innerHTML = cuerpo;
  document.querySelector("#botonModal").className = 'btn btn-danger'

  var myModal = new bootstrap.Modal(document.getElementById('myModal'))
  myModal.show();

}

function mostrarModalInfo(cuerpo) {

  document.querySelector("#modalTitulo").innerHTML = 'Información de la Operación';
  document.querySelector("#modalCuerpo").innerHTML = cuerpo;
  document.querySelector("#botonModal").className = 'btn btn-info'

  var myModal = new bootstrap.Modal(document.getElementById('myModal'))
  myModal.show();

}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaUsuario":
      frmAltaUsuario.style.display = "block";
      break;
    case "frmAltaArticulo":
      frmAltaArticulo.style.display = "block";

      break;
    case "frmAltaPrestamo":
      frmAltaPrestamo.style.display = "block";


      frmAltaPrestamo.lstLibros1.innerHTML = oBiblioteca.optionsLibros();
      frmAltaPrestamo.lstDVD1.innerHTML = oBiblioteca.optionsDVD();
      frmAltaPrestamo.lstLibros2.innerHTML = oBiblioteca.optionsLibros();
      frmAltaPrestamo.lstDVD2.innerHTML = oBiblioteca.optionsDVD();
      frmAltaPrestamo.lstUsuario.innerHTML = oBiblioteca.optionsUsuarios();
      break;
    case "frmDevolverPrestamo":
      frmDevolverPrestamo.style.display = "block";

      frmDevolverPrestamo.lstPrestamo.innerHTML = oBiblioteca.optionsPrestamo();
      break;
    case 'frmTipoArticulo':
      frmTipoArticulo.style.display = "block";
      break;
    case 'frmListarPrestamo':
      frmListarPrestamo.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}



//Ejercicio 1:

function validarDatosUsuario() {

  let idUsuario = frmAltaUsuario.txtIdUsuario.value;
  let nombre = frmAltaUsuario.txtNombre.value;
  let apellidos = frmAltaUsuario.txtApellidos.value;
  let telefono = frmAltaUsuario.txtTelefono.value;

  if (isNaN(parseInt(idUsuario)) ||
    nombre == '' ||
    apellidos == '' ||
    isNaN(parseInt(telefono)))

    mostrarModalError('Debe introducir todos los datos correctamente');

  else {
    let oUsuario = new Usuario(idUsuario, nombre, apellidos, telefono);
    let mensaje = oBiblioteca.altaUsuario(oUsuario);
    mostrarModalInfo(mensaje);

    if (mensaje == 'Usuario dado de alta') {
      document.querySelector('#frmAltaUsuario').reset();
    }
  }
}

//Ejercicio 2:

function cambioRadioButton() {

  if (document.querySelector("#rbtTipoArticulo-L").checked) {

    document.querySelector(".frmLibro").style.display = 'block';
    document.querySelector(".frmDVD").style.display = 'none';

  }

  else {

    document.querySelector(".frmLibro").style.display = 'none';
    document.querySelector(".frmDVD").style.display = 'block';

  }

}

function validarDatosArticulo() {

  let idArticulo = frmAltaArticulo.txtIdArticulo.value;
  let titulo = frmAltaArticulo.txtTitulo.value;
  let autor = frmAltaArticulo.txtAutor.value;
  let paginas = frmAltaArticulo.txtPaginas.value;
  let fechaEstreno = frmAltaArticulo.fechaEstreno;
  let oArticulo

  if (document.querySelector("#rbtTipoArticulo-L").checked) {

    if (isNaN(parseInt(idArticulo)) ||
      titulo == '' ||
      autor == '' ||
      isNaN(parseInt(paginas))) {

      mostrarModalError('Debe introducir todos los datos correctamente');

    }

    else {

      oArticulo = new Libro(autor, paginas, idArticulo, titulo);
      let mensaje = oBiblioteca.altaArticulo(oArticulo);
      mostrarModalInfo(mensaje);

      if (mensaje == 'Articulo dado de alta') {
        document.querySelector('#frmAltaArticulo').reset();
      }


    }
  }

  else {

    if (isNaN(parseInt(idArticulo)) ||
      titulo == '' ||
      fechaEstreno == '') {

      mostrarModalError('Debe introducir todos los datos correctamente');

    }



    else {

      let subtitulada = document.querySelector("#rbtSubtitulado-S").checked;
      oArticulo = new DVD(new Date(fechaEstreno), subtitulada, idArticulo, titulo);
      let mensaje = oBiblioteca.altaArticulo(oArticulo);
      mostrarModalInfo(mensaje);
      if (mensaje == 'Articulo dado de alta') {
        document.querySelector('#frmAltaArticulo').reset();
      }
    }

  }
}


//Ejercicio 3

function mostrar2Combos() {

  let divLibro = document.getElementById("divLibro");
  let divDVD = document.getElementById("divDVD");
  if (frmAltaPrestamo.lstLibros1.value == "-1") {
    divLibro.style.display = "none";

  }
  else {

    divLibro.style.display = "flex";
  }

  if (frmAltaPrestamo.lstDVD1.value == "-1") {
    divDVD.style.display = "none";

  }

  else {

    divDVD.style.display = "flex";
  }
}


function validarDatosPrestamo() {

  let idPrestamo = document.getElementById("txtIdPrestamo").value;
  let lstUsuario = document.getElementById("lstUsuario").value;

  let lstLibros1 = document.getElementById("lstLibros1").value;
  let lstLibros2 = document.getElementById("lstLibros2").value;
  let lstDVD1 = document.getElementById("lstDVD1").value;
  let lstDVD2 = document.getElementById("lstDVD2").value;


  if (isNaN(parseInt(idPrestamo)) || (lstLibros1 == "-1" && lstDVD1 == "-1") || (lstLibros1 == lstLibros2 && lstLibros2 != "-1") || (lstDVD1 == lstDVD2 && lstDVD2 != "-1")) {

    mostrarModalError("Debe introducir todos los datos correctamente");

  }
  else {
    let arrayArticulos = new Array();
    let articuloPrestamo;
    let fechaFin = null;
    let fechaInicio = new Date();
    let usuarioPrestamo = oBiblioteca.getUsuario(lstUsuario);



    if (lstLibros1 != "-1") {
      articuloPrestamo = oBiblioteca.getArticulo(lstLibros1);
      arrayArticulos.push(articuloPrestamo);

      if (lstLibros2 != "-1") {
        articuloPrestamo = oBiblioteca.getArticulo(lstLibros2);
        arrayArticulos.push(articuloPrestamo);
      }
    }

    if (lstDVD1 != "-1") {
      articuloPrestamo = oBiblioteca.getArticulo(lstDVD1);
      arrayArticulos.push(articuloPrestamo);
      if (lstDVD2 != "-1") {
        articuloPrestamo = oBiblioteca.getArticulo(lstDVD2);
        arrayArticulos.push(articuloPrestamo);
      }
    }
    oBiblioteca.prestarArticulos(arrayArticulos);
    let oPrestamo = new Prestamo(idPrestamo, arrayArticulos, usuarioPrestamo, fechaInicio, fechaFin);
    let mensaje = oBiblioteca.altaPrestamo(oPrestamo);
    mostrarModalInfo(mensaje);

    if (mensaje == 'Prestamo dado de alta') {
      document.querySelector('#frmAltaPrestamo').reset();
      gestionFormularios('frmAltaPrestamo');
      mostrar2Combos();

    }


  }

}


function devolverPrestamoSelect() {

  let prestamoDevolver = document.getElementById("lstPrestamo").value;

  let mensaje = oBiblioteca.borrarPrestamo(prestamoDevolver);
  mostrarModalInfo(mensaje);
  
  gestionFormularios('frmDevolverPrestamo');
}

//Ejercicio 4 Listados
document.querySelector("#mnuListadoUsuarios").addEventListener("click", enviarListadoUsuarios);
document.querySelector("#mnuListadoArticulos").addEventListener("click", enviarListadoArticulos);
document.querySelector("#btnListarTipoArticulo").addEventListener("click", enviarListadoArticulosPorTipo);
document.querySelector("#btnListarPrestamos").addEventListener("click", enviarListadoPrestamo);


function enviarListadoUsuarios() {

  var oUsuario = {
    titulo: "Listado Usuario",

    tabla: oBiblioteca.listadoUsuarios()
  };


  let sUsuario = JSON.stringify(oUsuario);

  let sURL = encodeURI("plantilla.html?plantilla=" + sUsuario);

  let ventana = open(sURL, "_blank");
}

function enviarListadoArticulos() {
  var oArticulo = {
    titulo: "Listado Articulos",

    tabla: oBiblioteca.listadoArticulos()
  };


  let sArticulo = JSON.stringify(oArticulo);

  let sURL = encodeURI("plantilla.html?plantilla=" + sArticulo);

  let ventana = open(sURL, "_blank");
}

function enviarListadoArticulosPorTipo() {
  let sTipoArticulo = frmTipoArticulo.rbtTipoArticulo2.value;

  var oArticulo = {
    titulo: "Listado Articulos Por Tipo",

    tabla: oBiblioteca.listadoTipoArticulo(sTipoArticulo)
  };

  let sArticulo = JSON.stringify(oArticulo);

  let sURL = encodeURI("plantilla.html?plantilla=" + sArticulo);

  let ventana = open(sURL, "_blank");
  frmTipoArticulo.style.display = "none";

}

function enviarListadoPrestamo() {
  let sFechaInicio = frmListarPrestamo.dtFechainicial.value;
  let sFechaFin = frmListarPrestamo.dtFechaFinal.value;

  if (sFechaInicio == '' || sFechaFin == '') {

    mostrarModalError('Introduce las fechas correctamente');

  }

  else {
    let Inicio = new Date(sFechaInicio);
    let Fin = new Date(sFechaFin);


    var oPrestamo = {
      titulo: "Listado Prestamos",

      tabla: oBiblioteca.listadoPrestamos(Inicio, Fin)
    };

    let sPrestamo = JSON.stringify(oPrestamo);

    let sURL = encodeURI("plantilla.html?plantilla=" + sPrestamo);

    let ventana = open(sURL, "_blank");

    frmListarPrestamo.style.display = "none";
    frmListarPrestamo.reset();
  }

}
