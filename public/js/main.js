document.addEventListener('DOMContentLoaded',function(){

	// Récupère l'ensemble des images du documents
	var imagesNode = document.querySelectorAll('.Thumb');

	// console.log(imagesNode);	//Debug

	// Recupère  le noud de zone d'affichage
	var tar = document.querySelectorAll('.Displayed')[0];
	

	// Boucle de parcour de noeud
	for (var imageNode of imagesNode)
	{
		imageNode.addEventListener('click',function(){
		var result = this.dataset.maxrespath;
		tar.src = result;
		tar.classList.remove('invisible');
		});
	}

// ------------ Partie AJAX ------------
var xhr = new XMLHttpRequest();	//Création de l'objet

xhr.open('GET','public/js/images.json'); 	//Demande au server du fichier images.json
// Listener sur l'évènement LOAD execute la fonction qui récupère, parse et affiche en console le contenu du fichier /public/js/images.json
xhr.addEventListener('load',function(){
	var responseData = JSON.parse(this.responseText);
	console.log(responseData);
});


xhr.send()	//Envois de la requete
});