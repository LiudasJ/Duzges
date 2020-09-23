<?php

$errors = array();
$success = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = (!empty($_POST['fname'])) ? $_POST['fname'] : $errors['emptyName'] = "reikalingas vardas";
    $email = (!empty($_POST['email'])) ? $_POST['email'] : $errors['emptyEmail'] = "reikalingas el.p.";
    $tel = (!empty($_POST['tel'])) ? $_POST['tel'] : $errors['emptyTel'] = "reikalingas tel.nr.";
    $message = (!empty($_POST['message'])) ? $_POST['message'] : $errors['emptyMessage'] = "reikalingas žinutės tekstas";
    $title = (!empty($_POST['title'])) ? $_POST['title'] : $errors['emptyTitle'] = "reikalinga tema";

    test_input($name);
    test_input($email);
    test_input($message);
    test_input($tel);
    test_input($title);
    
    if (!preg_match_all("/^[a-zA-Ząčęėįšųūž ]*$/", $name)) {
        $errors['wrongName'] = "galimos tik raidės ir tarpeliai";
    } else if (strlen($name) > 50) {
        $errors['longName'] = "vardui skirta iki 50 simbolių";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['wrongEmail'] = "neteisingas el.p formatas";
    } else if (strlen($email) > 50) {
        $errors['longEmail'] = "el.p skirta iki 50 simbolių";
    }

    if (!preg_match("/^[0-9+]*$/", $tel)) {
        $errors['wrongTel'] = "neteisingas tel. nr.";
    }
    if (!preg_match_all("/^[a-zA-Ząčęėįšųūž ]*$/", $title)) {
        $errors['wrongTitle'] = "galimos tik raidės ir tarpeliai";
    } else if (strlen($title) > 50) {
        $errors['longTitle'] = "temai skirta 50 simbolių";
    }
    if (strlen($message) > 300) {
        $errors['longMessage'] = "Įvedėte per ilgą žinutę";
    } else if (!preg_match_all("/^[a-zA-Z0-9 ]*$/", $message)) {
        $errors['wrongMessage'] = "galimos tik raidės, skaičiai ir tarpeliai";
    }  
}

if (empty($errors)) {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "sodyba";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Nepavyko prisijungti prie duomenų bazės";
    }

    $sql = "INSERT INTO forma (FirstName, Email, Tel, Title, Question) VALUES ('$name', '$email', '$tel', '$title', '$message')";
    $conn->exec($sql);
    $success['saved'] = "Žinutė sėkmingai išsiųsta! Susisieksime su Jumis kaip įmanoma greičiau.";
    echo json_encode($success);
    $conn = null;

    $email_from = 'info@duzgessodyba.com';
    $email_subject = "Nauja užklausa sodybos puslapyje";
    $email_body = "Gavote naują žinutę iš $name.\n" . "Žinutės tekstas:\n $message";
    $to = "jonusas.liudas@gmail.com";
    $headers = "Laiškas peradresuotas iš: $email_from \r\n";
    $headers .= "Turite atrašyti į šį paštą: $email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    
    } else {
        echo json_encode($errors);
    }

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>