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

     displayMediaInLightbox(firstMediaToDisplay);


     const arrows = document.querySelectorAll(".arrows");

     arrows.forEach((arrow)=>{

          arrow.addEventListener("click", ()=>{

                 const textToSearch = document.querySelector(".title-image-lightbox").textContent;

                 const actualIndex = arrayOfMedias.findIndex((media)=>{

                    return media.title === textToSearch;

                  });

                if(arrow.classList.contains("right-arrow") === true){
                      
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

}