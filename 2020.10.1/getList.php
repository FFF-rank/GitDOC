<?php
	header('content-type:text/html;charset="utf-8"');
	$arr1=array("leo","momo","zhangsen");
	// $arr2=array("username"=>"leo","age"=>18);
	echo json_encode($arr1);
?>