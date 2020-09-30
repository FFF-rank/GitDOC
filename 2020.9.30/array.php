<?php
	header('content-type:text/html;charset="utf-8"');
	// 索引数组
	$cars=array('大众','别克','现代');
	
	var_dump($cars);
	echo '<br>'.$cars[0].'<br>';
	
	// 索引数组的遍历
	for($i=0;$i<count($cars);$i++){
		echo $cars[$i].'<br>';
	};
	
	// 关联数组
	$arr=array('王五'=>'打鱼的','李四'=>'种地的','张三'=>'打猎的');
	
	var_dump($arr);
	
	// 关联数组的遍历
	foreach($arr as $key=>$value){
		echo "<br>下标:{$key},数据:{$value}";
	};
?>