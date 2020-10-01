<?php
	header('content-type:text/html;charset="utf-8"');
	$arr1=array("leo","momo","zhangsen");
	var_dump($arr1);
	echo "<br/>";
	echo json_encode($arr1);
?>