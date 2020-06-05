<?php

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['email']) >= 1 && strlen($_POST['contr']) >= 1) {
      $email = trim($_POST['email']);
	    $contr = trim($_POST['contr']);
      $ficha_registro = date("d/m/y");
	    $consulta = "INSERT INTO registrarse(email, contr, ficha_registro) VALUES ('$email','$contr','$ficha_registro')";
      $resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {
	    	?>
	    	<h3 class="ok">¡Te has registrado correctamente!</h3>
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
