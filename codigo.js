// Variables globales
var oBiblioteca = new Biblioteca();
datosIniciales();


function datosIniciales() {
  oBiblioteca.catalogo = [
    new Libro("Hugo", 43, 18, "El Quijote", false),
    { idArticulo: 2, nombre: "El Quijote II", prestado: false },
    { idArticulo: 3, nombre: "El Quijote III", prestado: true },
    new DVD("2020-03-23", true, 33, "el rey leon", false),
    { idArticulo: 4, nombre: "El Quijote IV", prestado: false },
    { idArticulo: 5, nombre: "El Quijote V", prestado: false }
  ];
  oBiblioteca.usuarios = [
    { idUsuario: 1, nombre: "juan1", apellidos: "gonzalez1", telefono: "424242424" },
    { idUsuario: 2, nombre: "juan2", apellidos: "gonzalez2", telefono: "424242424" },
    { idUsuario: 3, nombre: "juan3", apellidos: "gonzalez3", telefono: "424242424" },
    { idUsuario: 4, nombre: "juan4", apellidos: "gonzalez4", telefono: "424242424" }
  ]
  oBiblioteca.prestamos = [
    //idPrestamo, articulos, usuario, fechaInicio, fechaFin
    {
      idPrestamo: 1, articulos: [{ idArticulo: 1, nombre: "El Quijote", prestado: false }],
      usuario: { idUsuario: 1, nombre: "juan1", apellidos: "gonzalez1", telefono: "424242424" },
      fechaInicio: new Date("2021-03-4"), fechaFin: null
    }
  ];
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
      break;
    case "frmDevolverPrestamo":
      frmDevolverPrestamo.style.display = "block";
      frmAltaPrestamo.lstLibros1.innerHTML = oBiblioteca.optionsLibros();
      frmAltaPrestamo.lstLibros2.innerHTML = frmAltaPrestamo.lstLibros1.innerHTML;
      frmAltaPrestamo.lstDVD1.innerHTML = oBiblioteca.optionsDVD();
      frmAltaPrestamo.lstDVD2.innerHTML = frmAltaPrestamo.lstDVD1.innerHTML;
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
    alert('Debe introducir todos los datos correctamente');

  else {
    let oUsuario = new Usuario(idUsuario, nombre, apellidos, telefono);
    alert(oBiblioteca.altaUsuario(oUsuario));
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

      alert('Debe introducir todos los datos correctamente');

    }

    else {

      oArticulo = new Libro(autor, paginas, idArticulo, titulo);

      alert(oBiblioteca.altaArticulo(oArticulo));

    }
  }
  
  else {

    if (isNaN(parseInt(idArticulo)) ||
      titulo == '' ||
      autor == '' ||
      fechaEstreno == '') {

      alert('Debe introducir todos los datos correctamente');

    }



    else {

      let subtitulada = document.querySelector("#rbtSubtitulado-S").checked;
      oArticulo = new DVD(new Date(fechaEstreno), subtitulada, idArticulo, titulo);

      alert(oBiblioteca.altaArticulo(oArticulo));

    }

  }
}


//Ejercicio 3
//Un usuario sólo podrá tener un préstamo en vigor. No podrá solicitar otro préstamo hasta que realice la devolución del anterior.


function validarDatosPrestamo() {

  //let idUsuario =  document.getElementById("txtIdUsuario").value;
  //let resultado =oBiblioteca.altaPrestamo();
  //let txtIdPrestamo = frmAltaUsuario.txtIdPrestamo.value;
  //let nombre = frmAltaUsuario.txtNombre.value;
  //let apellidos = frmAltaUsuario.txtApellidos.value;
  //let telefono = frmAltaUsuario.txtTelefono.value;



  //lstLibros1
}
