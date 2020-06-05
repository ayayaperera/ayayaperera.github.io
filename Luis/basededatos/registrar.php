<?php

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['email']) >= 1 && strlen($_POST['contra']) >= 1) {
	    $email = trim($_POST['email']);
	    $contra = trim($_POST['contra']);
      $ficha_registro = date("d/m/y");
      $consulta = "INSERT INTO datos(email, contra, ficha_registro) VALUES ('$email','$contra','$ficha_registro')";
      $resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {
        ?>
	    	<h3 class="ok">¡Has iniciado sesión!</h3>
           <?php
	    } else {
	    	?>
	    	<h3 class="bad">¡Ups ha ocurrido un error!</h3>
           <?php
	    }
    }   else {
	    	?>
	    	<h3 class="bad">¡Por favor complete los campos!</h3>
           <?php
    }
}

?>
