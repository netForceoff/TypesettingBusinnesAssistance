<?
if (array_key_exists('messageFF', $_POST)) {
   $to = 'irina.gaeva.90@mail.ru';
   $message = "Имя: ".$_POST['nameFF']."\nКомпания: ".$_POST['company']."\nТелефон: ".$_POST['user_phone']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF'];
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $message, $headers);
   echo $_POST['Имя'];
}
?>