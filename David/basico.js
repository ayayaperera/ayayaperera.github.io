/* Precios actuales
base pequeña 6 €
base mediana 8.99 €
base grande 10.99 €

Queso 30 céntimos
Atún 70 céntimos
Pimiento 30 céntimos
Aceitunas 40 céntimos
Cebollas 30 céntimos
Jamón 30 céntimos
*/

<head>
<script>

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
                alert("Error: La dirección de correo " + email + " es incorrecta.");
                return false;
            }

            else if (asunto == null || asunto.length == 0) { /*si el no se ha introducido el asunto */
                alert('[ERROR] Debes escribir el motivo de tu consulta');
                return false;
            }

            else if (!(/^\d{3}-\d{3}-\d{3}$/.test(telefono))) { /* si el telefono introducido no cumple con el patrón xxx-xxx-xxx */
                alert('[ERROR] Debes escribir un formato correcto de telefono');
                return false;
            }
            /* si no ha ocurrido ningún error en la validación se genera un mensaje de confirmación */
            else {
                alert("Consulta Enviada. Pronto recibirá una respuesta por correo");
                return true;
            }
        }

    </script>
