<?php
 
    // Collect the data from the form.
    $full_name = htmlspecialchars($_POST["full-name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Paste your mail here.
    $myemail = "mail@example.com";
 
    // Setting a content type.
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8";
   
    // The message title which will be displayed in your mail box.
    $mail_subject = "New message from VSVlog!";

    // Get the HTML template
    $html_template = file_get_contents('../../template-mail.html');


    // Injecting variables in the HTML template
    $html_template = str_replace('<% fullName %>', $full_name, $html_template);
    $html_template = str_replace('<% email %>', $email, $html_template);
    $html_template = str_replace('<% subject %>', $subject, $html_template);
    $html_template = str_replace('<% message %>', $message, $html_template);
   
    // Send the mail.
    mail($myemail, $mail_subject, $html_template, $headers);

?>