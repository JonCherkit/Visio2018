document.addEventListener('DOMContentLoaded',function(){

	// Récupère l'ensemble des miniatures du documents
	var imagesNode = document.querySelectorAll('.Thumb');

	// console.log(imagesNode);	//Debug

	// Recupère  le noud de zone d'affichage
	var tar = document.querySelectorAll('.Displayed')[0];
	

	// Parcour des miniatures
	for (var imageNode of imagesNode)
	{
		imageNode.addEventListener('click',function()
		{
			tar.src = this.dataset.maxrespath;
			tar.classList.remove('invisible');
		});
	}

// ------------ Partie AJAX ------------

var xhr = new XMLHttpRequest();	//Création de requete asynchrone

xhr.open('GET','public/js/images.json'); 	//Demande au server du fichier images.json
// Listener sur l'évènement 'load' ,récupère, parse et affiche en console le contenu du fichier /public/js/images.json
xhr.addEventListener('load',function(){
	var responseData = JSON.parse(this.responseText);
	console.log(responseData);
});

xhr.send()	//Envois de la requete

//---------------------------------------

});