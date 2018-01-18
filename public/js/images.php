<?php

$files = scandir('/public/img/');

$reponseData = [];

foreach($files as $file)
{
	if(substr($file,-4)) == '.png')
	{
		$reponseData[] = substr($file,0,-4);
	}
}

header('Content-type: text/json');
echo json_encode($reponseData);

?>