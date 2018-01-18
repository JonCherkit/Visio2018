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
});