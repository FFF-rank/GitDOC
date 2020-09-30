<?php
	header('content-type:text/html;charset="utf-8"');
	$username=$_POST['username'];
	$age=$_POST['age'];
	$password=$_POST['password'];
	echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";
?>