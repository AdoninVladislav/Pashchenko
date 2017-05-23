<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$subject = trim($_GET["subject"]);
$message_form = trim($_GET["message"]);
$email = trim($_GET["e-mail"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТема: $subject \nСообщение: $message_form \nпочта: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>