<?php

session_start();

if (isset($_POST['preView'])) {
    $_SESSION['message'] = $_POST["messVu"];
    $_SESSION['mail'] = $_POST["mailVu"];
    $_SESSION['vMail'] = $_POST["vmailVu"];
    header('Location: preView.php');
}


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="index.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/5930flocon.ico">
    <title>Noyeux Joël</title>
</head>
<body id="body">
<form method="POST" id="formVu">
        <label id="preView" for="voir" onclick=apersu()>Voir</label>
        <input name="preView" type="submit" id="voir">
        <input type="hidden" id="recupMail" name="mailVu">
        <input type="hidden" id="recupVmail" name="vmailVu">
        <input type="hidden" id="recupMess" name="messVu">
</form>
    <form method="POST" id="formulaire">
        <div id="divMail">
            <label for="mail">Mail de destination</label>
            <input type="e-mail" id="mail" name="mail" value="<?php if(isset($_SESSION["mail"])){echo $_SESSION["mail"];}?>">
            <p class="error"></p>
        </div>
        <div id="divVMail">
            <label for="mail">Votre Mail</label>
            <input type="e-mail" id="Vmail" name="Vmail" value="<?php if(isset($_SESSION["vMail"])){echo $_SESSION["vMail"];}?>">
            <p class="error"></p>
        </div>
        <div id="divMess">
            <label for="mess">Message</label>
            <textarea name="mess" id="mess"><?php if(isset($_SESSION["message"])){echo $_SESSION["message"];}?></textarea>
            <p class="error"></p>
        </div>
        <input type="submit" value="Envoyer">
    </form>
    <div id="pic">

    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="index.js"></script>
    <script src="message.js"></script>
</body>
</html>