<?
if (array_key_exists('messageFF', $_POST)) {
   $to = 'irina.gaeva.90@mail.ru';
   $message = "Имя: ".$_POST['nameFF']."\nТелефон: ".$_POST['user_phone']."\nEmail: ".$_POST['contactFF']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['messageFF'];
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $message, $headers);
   echo $_POST['nameFF'];
}
?>