<?php
//Lecture du dossier
$files = scandir('/public/img/');
//Intialisation Liste vide
$reponseData = [];
//Parcour de la liste fichiers retourner par "scandir"
foreach($files as $file)
{	
	// Vérifie que l'extension des images est '.jpg'
	if(substr($file,-4) == '.jpg')
	{
		$reponseData[] = substr($file,0,-4);
	}
}

//	--- Ecriture Réponse ---

// Entête, format de la sortie
header('Content-type: text/json');
// Ecriture sur la sortie pour pouvoir capter la réponse
echo json_encode($reponseData);

?>