<?php
	header('content-type:text/html;charset="utf-8"');
	// php的输出函数,如果含有标签会自动解析
	echo "<h1>hello world</h1>";//空格输出
	echo("<h1>hello world</h1>");//括号输出
	print_r("<h1>hello world</h1>");//括号输出
	var_dump(100);//不光输出数据本身，还能输出数据类型
	var_dump('hello');//还能输出字符串长度
?>