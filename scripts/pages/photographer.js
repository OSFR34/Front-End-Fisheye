document.addEventListener("DOMContentLoaded", ()=>{

       // On recupere l'id du photographe situee dans l'url

       const photographerId = new URL(document.location).searchParams.get("id");

    //  méthode globale fetch() récupérer des données des photographes à travers le fichier.json de manière asynchrone.

       fetch("../../data/photographers.json").then((response)=>{

             return response.json();

       }).then((result)=>{

            const photographersInfo = result.photographers;

            const photographersMedias = result.media;

            const photographerInfoArray = getPhotographerInfo(photographersInfo, photographerId);

            const photographerMediasArray = getPhotographerMedias(photographersMedias, photographerId);

            displayPhotographerInfo(photographerInfoArray[0]);

            displayPhotographerMedia(photographerMediasArray); 

            // La portée de la constante photographerMediasArray étant limitée, 
            // je place mon écouteur d'événement ici pour ne pas multiplier les lignes de codes.

            // Mise en place d'écouteur d'événement pour TRIER en utilisant CHANGE et EVENT en paramètre.
            // A chaque changement de selection,il y a récupération de la valeur CHANGE (donc soit popularité, date, ou titre).

            document.addEventListener("change", (event)=>{

            // 1er test:  [console.log (event.target.value)]pour vérifier la récupération des valeurs de CHANGE (date, titre, popularité); si ok 
            // J'appelle le fct displayPhotographerMedia.
            // et je lui met en paramètre une nouvelle fct filterMedias que j'ai créé ds le dossier utils,pour plus de lisibilité.
            // je lui mets comme paramètres les mêmes que ds le console.log et j'ajoute en paramètre le tableau des médias 
            // = affichage du tableau des médias selon le TRIE de la valeur de CHANGE.
          
                displayPhotographerMedia(filterMedias(event.target.value, photographerMediasArray));
    
            });
        // methode cath pour capturer les erreurs 
       }).catch((error)=>{

            console.log(error)

       });


       function getPhotographerInfo(photographersArray, idPhotograph){

              return photographersArray.filter((photographer)=>{

                     return Number(photographer.id) === Number(idPhotograph);

              });

       }
// ---Affichage des info du photographe avec comme paramètre (photographerInfos).
       function displayPhotographerInfo(photographerInfos){
            // création d'une constante qui va créer du code comme en html mais en remplacant les données variables par les cléfs correspondantes à l'objet de la page.
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
