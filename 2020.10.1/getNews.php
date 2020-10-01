<?php
	header('content-type:text/html;charset="utf-8"');
	$news=array(
		array('title'=>'特朗普意外摔倒 轻度脑震荡','date'=>'2020-10-1'),
		array('title'=>'姜子牙预售票房过亿 一战封神','date'=>'2020-10-1')
	);
	
	echo json_encode($news);
?>