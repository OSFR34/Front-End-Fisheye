//1- fct d'ouverture lightBox (au préalable j'ai mis ds le css #lightbox en display:none);
function openLightbox(){

     return document.querySelector("#lightbox").style.display = "flex";

}
// 2-fct de fermeture lightBox 
function closeLightbox(){

    return document.querySelector("#lightbox").style.display = "none";

}

// Rechercher l'endroit où l'on a créé les médias (ds photographer.js à peu près lig 110 fct displayPhotographerMedia à la fin on a ajouté : const medias =  document.querySelectorAll(" .article-medias") 
// entre parenthèses on place id ou la class qui contient tous les médias y compris les videos [on le retour ds la page photographer.js ] ) 

// 3- INITIALISATION DE LA FCT entreparenthèse sont des paramètres avec des noms inventées pour améliorer la compréhension
// Ces paramètres (arrayOfMedias, indexMediaToDisplay)ne sont encore pas encore définis. Ils le seront au moment de l'éxécution ds la page photographer.js  où les vrai valeurs seront définies.Après se sera équivalent à arrayOfMedias = arrayMedias (qui est une variable défini ds photographer.js ) et indexMediaToDisplay = index (qui est une méthode qui récupère l'index de l'élément cliqué)
 
function lightBox(arrayOfMedias, indexMediaToDisplay){

      // 4-console.log(arrayMedias) puis console.log(indexMediaToDisplay) pour vérifier que l'on a bien les médias et les index des médias.  
      // puis j'ai besoin d'afficher l'élément courant   et la seul information que j'ai c'est son index.

      // 9- je récupére l'id de la lightbox qui va me permettre par la suite de l'injecter  à l'emplacement de l'id ds le html.
// 
      const lightBoxContainer = document.querySelector("#lightbox-media");
// créer une constante du 1er média affiché = permet de récupérer l'index du média cliqué en mettent entre crochets indexMediaToDisplay (avec l'index on récupère également les autres informations)
     const firstMediaToDisplay = arrayOfMedias[indexMediaToDisplay]; 
// 5-console.log(firstMediaToDisplay) verification que l'on récupère bien l'index du premier média sur lequel on a cliqué.
// 6-puis l'appel la focntion qui ouvre la lightbox pour qu'elle apparaisse.
// puis il faut que j'affiche le média

     openLightbox();
// 7-après vérification la lightbox s'affiche sans pouvoir occuper tout l'espace en bas de page on retrouve les autres médias, correction de l'affichage ds le css en enlevant la position absolute et en la remplacant par position fixed.

     displayMediaInLightbox(firstMediaToDisplay);


     const arrows = document.querySelectorAll(".arrows");

     arrows.forEach((arrow)=>{

          arrow.addEventListener("click", ()=>{

                 const textToSearch = document.querySelector(".title-image-lightbox").textContent;

                 const actualIndex = arrayOfMedias.findIndex((media)=>{

                    return media.title === textToSearch;

                  });

                if(arrow.classList.contains("right-arrow") === true){

                        // si l'index actuel est inférieur à la longuer du tableau des médias ( les index commencent tj par 0 et length (indique le nombre d'éléments présents dans le tableaux) commence par 1 d'où le -1 pour retrouver le même nombre)
                      
                       if(actualIndex < arrayOfMedias.length - 1){

                           return displayMediaInLightbox(arrayOfMedias[actualIndex + 1]);

                       }

                       return false;

                }

                if(arrow.classList.contains("left-arrow") === true){


                      if(actualIndex > 0){

                            return displayMediaInLightbox(arrayOfMedias[actualIndex - 1]);

                      }

                      return false;

                }

          });

     })     

    function displayMediaInLightbox(mediaToDisplay){

// 8- Création de l'élément de la lightbox,qui doit affaicher soit une image, soit une video. J'avais déjà crée un média factory et je ré-utiliser cette fct avec le même paramètre en lig 88 est je vais lui mettre en paramètre (mediaToDisplay).
/*je retourne ds le html pour récupérer l'id des médias puis ds le css j'ajoute en plus img et je le duplique en finissant par video au lieu de img et je rajoute !important pour qu'il prenne le pas par rapport au disposition des imageries de la gallerie avec article-media (où l'image est beaucoup plus petite). (#llightbox-media img, #llightbox-media video {
                                                                          width: 40rem !important;
                                                                          height: 40rem !important;
} ) */

// on coupe le html du correcpondant puis on le colle après ${mediaFactory(mediaToDisplay)}
      const mediaHTML = `
    
        ${mediaFactory(mediaToDisplay)}

        <div class="title-image-lightbox">${mediaToDisplay.title}</div>
 
      `;
// 10- j'injecte la constante mediaHTML ds le html àl'emplacement du lightBoxContainer.
      lightBoxContainer.innerHTML = mediaHTML;

      if(mediaToDisplay.video !== undefined){

             const lightBox = document.querySelector("#lightbox");
        
             lightBox.querySelector(".video-media").setAttribute("controls", true);

      }

      return false;


    }

    document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);
}