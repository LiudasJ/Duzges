<?php

$errors = array();
$success = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = (!empty($_POST['fname'])) ? $_POST['fname'] : $errors['emptyName'] = "Vardas privalomas";
    $lname = (!empty($_POST['lname'])) ? $_POST['lname'] : $errors['emptyEmail'] = "El.p. privalomas";
    $tel = (!empty($_POST['tel'])) ? $_POST['tel'] : $errors['emptyTel'] = "Tel.nr. privalomas";
    $message = (!empty($_POST['message'])) ? $_POST['message'] : $errors['emptyMessage'] = "Žinutės tekstas privalomas";
    $title = (!empty($_POST['title'])) ? $_POST['title'] : "Be temos";

    if (empty($errors)) {
        test_input($name);
        test_input($lname);
        test_input($message);
        test_input($tel);
        test_input($title);
        // to be continued...
    }
}

echo json_encode($errors);

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>