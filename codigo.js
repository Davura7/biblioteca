// Variables globales
var oBiblioteca = new Biblioteca();
datosIniciales();


function datosIniciales() {
  oBiblioteca.catalogo = [
    { idArticulo: 1, nombre: "El Quijote", prestado: false },
    { idArticulo: 2, nombre: "El Quijote II", prestado: false },
    { idArticulo: 3, nombre: "El Quijote III", prestado: true },
    { idArticulo: 4, nombre: "El Quijote IV", prestado: false },
    { idArticulo: 5, nombre: "El Quijote V", prestado: false }
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
      break;
    case "frmDevolverPrestamo":
      frmDevolverPrestamo.style.display = "block";
      frmAltaPrestamo.lstLibros1.innerHTML = oBiblioteca.optionsLibros();
      frmAltaPrestamo.lstLibros2.innerHTML = frmAltaPrestamo.lstLibros1.innerHTML;
      frmAltaPrestamo.lstDVD1.innerHTML = oBiblioteca.optionsDVD();
      frmAltaPrestamo.lstDVD2.innerHTML = frmAltaPrestamo.lstDVD1.innerHTML;
      break;
    case "TotalArboles":
      alert("Hay " + oVivero.totalArbolesVenta() + " árboles a la venta");
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

  if (isNaN(parseInt(idUsuario))||
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
  let oArticulo

  if (document.querySelector("#rbtTipoArticulo-L").checked) {

    if (isNaN(idArticulo) ||
      titulo == '' ||
      autor == '' ||
      isNaN(parseInt(paginas))) {

      alert('Debe introducir todos los datos correctamente');

    }

    else {

      oArticulo = new Libro(autor, paginas, idArticulo, titulo);

      alert(oBiblioteca.altaArticulo(oArticulo));

    }

    if (!document.querySelector("#rbtTipoArticulo-L").checked) {

      if (idArticulo == '' ||
        titulo == '' ||
        autor == '' ||
        fechaEstreno == '') {

        alert('Debe introducir todos los datos');

      }

    }

    else {

      let subtitulada = document.querySelector("#rbtSubtitulado-S").checked;

      oArticulo = new DVD(new Date(fechaEstreno), subtitulada, idArticulo, titulo);

      alert(oBiblioteca.altaArticulo(oArticulo));

    }

  }
}




