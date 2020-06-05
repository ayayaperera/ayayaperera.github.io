       function validacion() { /* funcion que realiza la validación del formulario de contacto*/
		    
            nombre = document.getElementById("nombre").value; /*nombre*/
            email = document.getElementById("email").value; /* email*/
            expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; /* pattern email*/
            asunto = document.getElementById("asunto").value; /*asunto*/
            telefono = document.getElementById("telefono").value;  /*telefono*/

            
		   
			   if (nombre == null || nombre.length == 0) { /* si no se ha introducido nada*/
					alert('[ERROR] Debes poner un nombre');
					return true;
				}

				else if (!expr.test(email)) { /* si el correo introducido no cumple con el patron valido establecido */
					alert('[ERROR] La dirección de correo " + email + " es incorrecta.');
					return false;
				}

				else if (asunto == null || asunto.length == 0) { /*si el no se ha introducido el asunto */
					alert('[ERROR] Debes escribir el motivo de tu consulta');
					return false;
				}

				else if (!(/^\d{3}\d{3}\d{3}$/.test(telefono))) { /* si el telefono introducido no cumple con el patrón xxxxxxxxx */
					alert('[ERROR] Debes escribir un formato correcto de telefono');
					return false;
				}
				/* si no ha ocurrido ningún error en la validación se genera un mensaje de confirmación */
					
	   }
	
