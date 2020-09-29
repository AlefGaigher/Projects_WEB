<?php
if(isset($_POST['enviar'])){
    $assunto = "Vale Presente";

    // pegando os dados do form...
    $msg = "Nome: " . $_POST["nome"] . "<br>";
    $msg .= "Email: " . $_POST["email"] . "<br>";
    $msg .= "Escola: " . $_POST["escola"] . "<p>";
    $msg .= "Codigo:<br>" . $_POST["codigo"];

    // email onde tu vai receber a mensagem
    $destinatario = "alefgaigher@hotmail.com";

    // headers que prepara a mensagem
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: " . $_POST["nome"] . "<" . $_POST["email"] . ">\r\n";
    $headers .= "Reply-To: " . $_POST["email"] . "\r\n";

    // envia o email...
    mail($destinatario,$assunto,$msg,$headers);

    // volta para contato.html
    header("Location: index.html");
}
?>