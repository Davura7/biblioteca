
// Variables globales
var oBiblioteca = new Biblioteca();
datosIniciales();

function datosIniciales(){
    oBiblioteca.catalogo = [ 
        {idArticulo : 1 , nombre : "El Quijote", prestado: false},
        {idArticulo : 2 , nombre : "El Quijote II", prestado: false},
        {idArticulo : 3 , nombre : "El Quijote III", prestado: true},
        {idArticulo : 4 , nombre : "El Quijote IV", prestado: false},
        {idArticulo : 5 , nombre : "El Quijote V", prestado: false}
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

