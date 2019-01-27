<?php
if ($_SERVER['REQUEST_METHOD'] == "POST"
    and isset($_POST['name'])
    and isset($_POST['email'])
    and isset($_POST['message'])) {

    sendMail($_POST['name'], $_POST['email'], $_POST['telephone'], $_POST['message']);
}

function sendMail($contact, $from , $telephone, $message)
{
    $to = "couvreur@zingueur.net";

    $JOUR = date("Y-m-d");
    $HEURE = date("H:i");

    $Subject = "Prise de contact client - $contact - $JOUR $HEURE";

    $mail_Data = "";
    $mail_Data .= "<html> \n";
    $mail_Data .= "<head> \n";
    $mail_Data .= "<title> Prise de contact client </title> \n";
    $mail_Data .= "</head> \n";

    $mail_Data .= "<body> \n";
    $mail_Data .= "<h3>M/Mme</h3> \n";
    $mail_Data .= $contact;
    $mail_Data .= "<h3>Tel.</h3> \n";
    $mail_Data .= $telephone;
    $mail_Data .= "<br><h3>Message</h3> \n";
    $mail_Data .= $message;
    $mail_Data .= "</body> \n";
    $mail_Data .= "</HTML> \n";

    $headers = "MIME-Version: 1.0 \n";
    $headers .= "Content-type: text/html; charset=iso-8859-1 \n";
    $headers .= "From: $from  \n";
    $headers .= "Disposition-Notification-To: $from  \n";

    $headers .= "X-Priority: 3  \n";

    @mail($to, $Subject, $mail_Data, $headers);

    header('Location: contact.html');
}

?>