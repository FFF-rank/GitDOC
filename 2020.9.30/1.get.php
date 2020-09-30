<?php
	header('content-type:text/html;charset="utf-8"');
	$username=$_GET['username'];
	$age=$_GET['age'];
	$password=$_GET['password'];
	echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";
?>