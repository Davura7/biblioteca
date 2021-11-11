<?php

if(isset($_POST['añadir'])){

    $nombreLiga = $_POST['nombreLiga'];
    $equipos = $_POST['equipo'];

    $ficheroLigas = fopen('ficheroLigas.txt', 'a');

        fwrite($ficheroLigas, $nombreLiga.PHP_EOL);

    fclose($ficheroLigas);


    $ficheroEquipos = fopen('ficheroEquipos.csv', 'a');

    foreach($equipos as $nombreEquipo) {

        fwrite($ficheroEquipos, "$nombreLiga, $nombreEquipo".PHP_EOL);

    }

    fclose($ficheroEquipos);
 
    echo '<h1>Guillermo maricon</h1>
            <form action="formularioLiga.php" method="post">
            <button type="submit">Volver</button>
            </form>';
    
}

?>
