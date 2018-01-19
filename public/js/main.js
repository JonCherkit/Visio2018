document.addEventListener('DOMContentLoaded',function(){

	// Récupère l'ensemble des miniatures du documents
	var imagesNode = document.querySelectorAll('.Thumb');

	// console.log(imagesNode);	//Debug

	// Recupère  le noud de zone d'affichage
	var tar = document.querySelectorAll('.Displayed')[0];
	

	// Parcour des miniatures, évènement 'click' modifie la source de la zone d'affichage
	for (var imageNode of imagesNode)
	{
		imageNode.addEventListener('click',function()
		{
			tar.src = this.dataset.maxrespath;
			tar.classList.remove('invisible');
		});
	}

	//--------- Bouton "Next_Image" --------
	var nextButtonSelector = document.querySelectorAll('.nextButton')[0];	//il n'y à qu'un seul nbouton next sur la page, alors on prend le premier élément de la collection 
	// console.log(nextButtonNode);	//debug
	nextButtonSelector.addEventListener('click',function(){
		// To do : Savoir sur quelle image on se trouve pour savoir quelle est la suivante/précédente
		// - trouver l'adresse de l'image suivante,
		// - modifier l'attribut source de la zone d'affichage avec le lien de l'image 'suivante'
	});


// ------------ Partie AJAX ------------

var xhr = new XMLHttpRequest();	//Création de requete asynchrone

xhr.open('GET','public/js/images.json'); 	//Demande au server du fichier images.json
// Listener sur l'évènement 'load' ,récupère, parse et affiche en console le contenu du fichier /public/js/images.json
xhr.addEventListener('load',function(){
	var responseData = JSON.parse(this.responseText);
	// console.log(responseData);	//Debug
});

xhr.send()	//Envois de la requete

//---------------------------------------

});