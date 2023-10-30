<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mennovandelinde@gmail.com";
    $subject = "Contact Form Submission";
    $message = "Form Details:\n";

    if (isset($_POST["floatingNumber"])) {
        $message .= "Aantal personen: " . $_POST["floatingNumber"] . "\n";
    }

    if (isset($_POST["floatingLocation"])) {
        $message .= "Locatie: " . $_POST["floatingLocation"] . "\n";
    }

    if (isset($_POST["floatingDateTime"])) {
        $message .= "Tijd: " . $_POST["floatingDateTime"] . "\n";
    }

    if (isset($_POST["floatingEmail"])) {
        $message .= "Email: " . $_POST["floatingEmail"] . "\n";
    }

    if (isset($_POST["floatingTextarea2"])) {
        $message .= "Vraag: " . $_POST["floatingTextarea2"] . "\n";
    }

    $headers = "From: " . $_POST["floatingEmail"];

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully. Thank you for your inquiry.";
    } else {
        echo "Message could not be sent. Please try again later.";
    }
}
?>
