<?php
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $mail = trim(strip_tags($_POST['mail']));
      $message = trim(strip_tags($_POST['message']));
	   
	  if($name == '' or $phone == '' or $mail == '' or $message == ''){
		  echo 'Заполните все поля!';
	  }else if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){
		  echo 'Введите корректный адрес электронной почты';
	  }else {
		  file_put_contents('apps.txt', '$name $phone $mail $message \n', FILE_APPEND);
		  echo 1;
	  }