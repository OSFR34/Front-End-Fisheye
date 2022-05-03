//au préalable j'ai mis ds le css #lightbox en display:none);
function openLightbox(){
     return document.querySelector("#lightbox").style.display = "flex";
}
function closeLightbox(){
    return document.querySelector("#lightbox").style.display = "none";
}
function lightBox(arrayOfMedias, indexMediaToDisplay){

      const lightBoxContainer = document.querySelector("#lightbox-media");

      const firstMediaToDisplay = arrayOfMedias[indexMediaToDisplay]; 

      openLightbox();


// ---------------CREATION ET AFFICHAGE DE LA LIGHTBOX-----------------
function displayMediaInLightbox(mediaToDisplay){
//    création dynamique du html en JavaScript
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

displayMediaInLightbox(firstMediaToDisplay);

//-------------------CHANGEMENT D'IMAGE AU CLIC------------------------------
      const arrows = document.querySelectorAll(".arrows"); 
      arrows.forEach((arrow)=>{ /*pour chaque flèche */
          arrow.addEventListener("click", ()=>{ /*13-placement d'un écouteur d'événement au click pour chaque fléche */

                if(arrow.classList.contains("right-arrow") === true){
                       nextPicture();
                }
                if(arrow.classList.contains("left-arrow") === true){
                      previousPicture();
                }
          });
     });     
      function nextPicture(){             
            const textToSearch = document.querySelector(".title-image-lightbox").textContent;
            const actualIndex = arrayOfMedias.findIndex((media)=>{
                  return media.title === textToSearch;
            });
                                
            if(actualIndex < arrayOfMedias.length - 1){
                  //  Affiche le média lightbox contenu ds le tableau des médias correspondant à l'index média courant plus 1
                  return displayMediaInLightbox(arrayOfMedias[actualIndex + 1]);
                 }
            return false;
     }
      function previousPicture(){
            const textToSearch = document.querySelector(".title-image-lightbox").textContent;
            const actualIndex = arrayOfMedias.findIndex((media)=>{
                  return media.title === textToSearch;
            });
            if(actualIndex > 0){
                  // Affiche le média lightbox contenu ds le tableau des médias correspondant à l'index média courant moins 1
                  return displayMediaInLightbox(arrayOfMedias[actualIndex - 1]);
            }
            return false;
      }
     

/*------------- ACCESSIBILTE CLAVIER------------------------ */
    document.addEventListener("keydown", (event)=>{
            if(event.key === "Escape"){
                  return closeLightbox();
            }      
            if(event.key === "ArrowRight"){
                  return nextPicture();
            }
            if(event.key === "ArrowLeft"){
                  return previousPicture();
            }
      });

      // je place un écouteur d'événement sur .close-lightbox et je précise au "click": exécuter la fct closeLightbox 
      document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);
}