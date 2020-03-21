<?php


if (empty($_POST['userName'])) {

	 header( "refresh:4;url=/" );
	echo 'Ви не ввели ім\'я';
} elseif (empty($_POST['userEmail'])) {

	header( "refresh:4;url=/" );
	echo 'Ви не ввели електронну адресу';
}


elseif (empty($_POST['userText'])) {

	header( "refresh:4;url=/" );
	echo '
	<div>
	Напишіть у повідомленні, те, що Вас цікавить
		</div>
	';
}



else {


	header("Content-Type: text/html; charset=utf-8");

	$name =  trim(strip_tags($_POST["userName"]));
	$email =  trim(strip_tags($_POST["userEmail"]));
	$text =  trim(strip_tags($_POST['userText']));

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "gancherenko@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "Тема письма админу";
$message_to_myemail = 
"Текст письма: $text
<br><br>
Имя: $name<br>
email: $email<br>
О проекте:$text <br>
Источник (ссылка): $refferer <br>
дата і час: $date, $time
";

$send = mail($myemail, $tema, $message_to_myemail, "From: Sitename <gancherenko@gmail.com> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

if($send == 'true')	{
	    header( "refresh:1;url=/" );
	    
} 

echo 'Письмо отправлено';



}


?>