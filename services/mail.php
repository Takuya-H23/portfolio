<?php

/*]*/
$name    = $_POST["name"];
$email   = $_POST["email"];
$subject = $_POST["subject"];
$message1 = $_POST["message"];

$to       = "takuyahirata4@gmail.com";
$subject = "HELP Line";

$message = "Contact: $name\r\n"."Email: $email\r\n". "Subject: $subject\r\n" . "Message: $message1\r\n";

/*
$message += ;
*/
$headers = "From: helloworld@takuyahirata.com" . "\r\n" .
    "Reply-To: helloworld@takuyahirata.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

/*
$data["name"] = "$name";
$data["email"] = "$email";
$data["message1"] = "$message1";
$data["message"] = "$message";
$data["headers"] = "$headers";


$data = json_encode($data);

header("Content-Type: application/json");

print($data);
*/
?>
