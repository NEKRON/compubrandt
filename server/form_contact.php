<?php

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST['nombreContact'];
        $telefono = $_POST['telefonoContact'];
        $mensaje = $_POST['telefonoContact'];

        $mailDestino = 'alejandroceo.dyc@gmail.com';

        $asunto = 'Solicitud para Compubrandt';

        // Cuerpo del mensaje
        $cuerpoMensaje = 'Nombre: $nombre\n';
        $cuerpoMensaje = 'Telefono: $telefono\n';
        $cuerpoMensaje = 'Mensaje: $mensaje\n';

        // Encabezados
        $headers = "De: $nombre <$destinatario>\r\n";
        $headers = "Reply-To: $nombre <$destinatario>\r\n";

        mail($destinatario, $asunto, $cuerpoMensaje, $headers);

        header('location: form_contact.php');
        exit();
    }


    echo $nombre;
    echo $telefono;
    echo $mensaje;
?>