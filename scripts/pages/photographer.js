document.addEventListener("DOMContentLoaded", ()=>{

       // On recupere l'id du photographe situee dans l'url

       const photographerId = new URL(document.location).searchParams.get("id");

       fetch("../../data/photographers.json").then((response)=>{

             return response.json();

       }).then((result)=>{

            const photographersInfo = result.photographers;

            const photographersMedias = result.media;

            const photographerInfoArray = getPhotographerInfo(photographersInfo, photographerId);

            const photographerMediasArray = getPhotographerMedias(photographersMedias, photographerId);

            displayPhotographerInfo(photographerInfoArray[0]);

            displayPhotographerMedia(photographerMediasArray);

            document.addEventListener("change", (event)=>{

                displayPhotographerMedia(filterMedias(event.target.value, photographerMediasArray));
    
            });

       }).catch((error)=>{

            console.log(error)

       });


       function getPhotographerInfo(photographersArray, idPhotograph){

              return photographersArray.filter((photographer)=>{

                     return Number(photographer.id) === Number(idPhotograph);

              });

       }

       function displayPhotographerInfo(photographerInfos){

             const photographerHTML = `
             
                    <div class="box">
                        <h2>${photographerInfos.name}</h2>
                        <p class="photographer_city_country">
                        <span>
                            ${photographerInfos.country},
                        </span>
                        <span>
                        ${photographerInfos.city}
                        </span> 
                        </p>
                        <p class="photographer_description">
                            ${photographerInfos.tagline}
                        </p>
                    </div>
                    <div>
                    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                    </div>     
                    <div>
                        <a href= "#">
                        <img src=assets/images/Sample_Photos/Photographers_ID_Photos/${photographerInfos.portrait} />
                        </a>
                    </div>
             
             `;

              //  injection dans le dom du résultat de photographerHTML, au niveau de la class photographer-header.
              document.querySelector(".photographer-header").innerHTML = photographerHTML;

       }

       function getPhotographerMedias(mediasArray, idPhotograph){

            return mediasArray.filter((media)=>{

                return Number(media.photographerId) === Number(idPhotograph);

            });

       }
// Affichage de tous les médias par photographe avec comme paramètre le tableau des médias
       function displayPhotographerMedia(arrayMedias){

              let htmlMedias = "";
            // récupération de chaque médias ds le tableau des médias
             arrayMedias.forEach((media)=>{
                    // permet la concaténation de htmlMédia avec le contenu des bactiques.
                  htmlMedias += `
                  
                    <div class="gallery-element">        
                        ${mediaFactory(media)}
                        <div class="description-element">
                        <span class="picture-name">${media.title}</span>
                        <span class="likes-area">${media.likes}<i class="far fa-heart"></i></span>
                    </div>        
                    </div>
                  
                  `;

             });
            //  injection dans le dom du résultat de htmlMedias, au niveau de l'id gallery.
             document.querySelector("#gallery").innerHTML = htmlMedias;
       }


});
