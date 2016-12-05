// $(document).on("ready", function(){
$(document).ready(function() {	

	$('.js-back').hide();

	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//renderRecipe(recipe);

});

function printNews(){
	$('.callout-news p').append("NUEVAS RECETAS")
}
	

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	for(var i=0; i < recipesArray.length; i++) {
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]); 
			

		}
	}

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	var a = $('<a/>');
	a.addClass('item-recipe');

	var span = $('<span></span>');
	span.addClass('attribution');

	var spanTittle = $('<span></span>');
	spanTittle.addClass('title-recipe');
	spanTittle.attr('title', recipe.title);
	spanTittle.text(recipe.title);

	var spanMeta = $('<span></span>');
	spanMeta.addClass('metadata-recipe');

	var spanAuthor = $('<span></span>');
	spanAuthor.addClass('author-recipe');
	spanAuthor.text(recipe.name);

	var spanBook = $('<span></span>');
	spanBook.addClass('bookmarks-recipe');

	var spanIcon = $('<span></span>');
	spanIcon.addClass('icon-bookmark');
	spanIcon.text(recipe.cookTime);


	var img = $('<img/>');
	img.attr('src', recipe.source.url);
	//metemos span e imgdentro de a
	a.append(span);
	a.append(img);

	//metemos spans dentro de span
	span.append(spanTittle);
	span.append(spanMeta);

	//metemos spans dentro de spanMeta
	spanMeta.append(spanAuthor);
	spanMeta.append(spanBook);

	//metemos spans dentro de spanBook
	spanBook.append(spanIcon);

	//pintarlos en pantalla
	console.log(a);
	$('.list-recipes').append(a);
};




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


