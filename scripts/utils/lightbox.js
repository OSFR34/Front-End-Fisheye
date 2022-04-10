// fct d'ouverture lightBox (au préalable j'ai mis ds le css #lightbox en display:none);
function openLightbox(){

     return document.querySelector("#lightbox").style.display = "flex";

}
// fct de fermeture lightBox 
function closeLightbox(){

    return document.querySelector("#lightbox").style.display = "none";

}

// Rechercher l'endroit où l'on a créé les médias (ds photographer.js à peu près lig 110 fct displayPhotographerMedia à la fin on a ajouté : const medias =  document.querySelectorAll(" .article-medias") 
// entre parenthèses on place id ou la class qui contient tous les médias y compris les videos [on le retour ds la page photographer.js ] ) 

// INITIALISATION DE LA FCT entreparenthèse sont des paramètres avec des noms inventées pour améliorer la compréhension
// Ces paramètres (arrayOfMedias, indexMediaToDisplay)ne sont encore pas encore définis. Ils le seront au moment de l'éxécution ds la page photographer.js  où les vrai valeurs seront définies.Après se sera équivalent à arrayOfMedias = arrayMedias (qui est une variable défini ds photographer.js ) et indexMediaToDisplay = index (qui est une méthode qui récupère l'index de l'élément cliqué)
 
function lightBox(arrayOfMedias, indexMediaToDisplay){

      // console.log(arrayMedias) pour vérifier que l'on a bien les médias  

      const lightBoxContainer = document.querySelector("#lightbox-media");

     const firstMediaToDisplay = arrayOfMedias[indexMediaToDisplay];

     openLightbox();

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


      const mediaHTML = `
     
        ${mediaFactory(mediaToDisplay)}

        <div class="title-image-lightbox">${mediaToDisplay.title}</div>
 
      `;

      lightBoxContainer.innerHTML = mediaHTML;

      if(mediaToDisplay.video !== undefined){

             const lightBox = document.querySelector("#lightbox");
        
             lightBox.querySelector(".video-media").setAttribute("controls", true);

      }

      return false;


    }

    document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);
}