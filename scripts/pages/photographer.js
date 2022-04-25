// L’évènement DOMContentLoaded est émis lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient terminé de charger.
// La addEventListener()méthode attache un gestionnaire d'événements à un élément.
document.addEventListener("DOMContentLoaded", ()=>{
       // On recupere l'id du photographe situee dans l'url
       const photographerId = new URL(document.location).searchParams.get("id");

       // méthode globale fetch() récupérer des données des photographes à travers le fichier.json de manière asynchrone.
      // entre parenthèses après fetch prend en 1ère argument qui l'url de la ressource que ns souhaitons récupérer. 
       fetch("../../data/photographers.json")
          // Ensuite, on va avoir then(première promesse) qui va contenir notre réponse (traduc then= response). les données seront brut et non accessible.
          .then((response)=>{
            // pour que les données soient accessible, je la transforme en format json 
            return response.json();

       }).then((result)=>{
            const photographersInfo = result.photographers;
            const photographersMedias = result.media;
            // initialisation variable du filtre du select
            let isOpen = false;
            const selectOptions = document.querySelector("#select-block-options");           
            const firstButtonText = document.querySelector("#select-first-option-text");          
            const optionsButtons = selectOptions.querySelectorAll("button");
            const photographerInfoArray = getPhotographerInfo(photographersInfo, photographerId);
            const photographerMediasArray = getPhotographerMedias(photographersMedias, photographerId);
            displayPhotographerInfo(photographerInfoArray[0]);
            displayPhotographerMedia(photographerMediasArray); 


// ---------SELECT MENU DEROULANT FILTRES--------------------------

// choix d'écrire ce code ds cette page car la portée des fct displayPhotographerMedia et photographerMediasArray ne sont valable que ds cette page juste plus haut.

            document.querySelector("#select-first-option").addEventListener("click", ()=>{
              if(isOpen === false){              
                  // On ouvre le faux select                  
                  selectOptions.style.display = "block";                  
                  isOpen = true;                  
                  return handleButtonsOptions();              
              }              
              if(isOpen === true){              
                  return closeSelect();          
              }
            });

            function closeSelect(){     
              // On ferme le faux select                      
              selectOptions.style.display = "none";              
               return isOpen = false; 
            }

            function handleButtonsOptions(){     
              optionsButtons.forEach((button)=>{                 
                       button.onclick = ()=>{         
                          // Récupère le contenu du bouton cliqué (textContent récupère le contenu de tous les éléments, y compris <script> et <style>)                       
                          const buttonText = button.textContent;         
                         // j'affecte le texte du button cliqué au premier bouton (remplacement du texte du premier bouton par celui qui est cliqué)
                          button.textContent = firstButtonText.textContent;                             
                         //   j'affecte le texte du premier button par celui qui a été cliqué
                          firstButtonText.textContent = buttonText;                           
                         // j'appelle la fonction displayPhotographerMedia qui prend pour paramètre la fonction filterMedias (initialisé ds page filterMedias.js) qui a prend lui même pour 1er paramètre le  texte sur lequel on a cliqué et 2nd paramètre le tableau des médias des photographes (ordre très important). 
                          displayPhotographerMedia(filterMedias(buttonText, photographerMediasArray)); 
                              // j'appelle ma fct de fermeture du select  
                              return closeSelect();                 
                       };   
              });
            }

            
        // methode cath pour capturer les erreurs 
       }).catch((error)=>{
            console.log(error)
       });

       function getPhotographerInfo(photographersArray, idPhotograph){
              return photographersArray.filter((photographer)=>{
                     return Number(photographer.id) === Number(idPhotograph);
              });
       }
        // Affichage des info du photographe avec comme paramètre (photographerInfos).
       function displayPhotographerInfo(photographerInfos){
      // création d'une constante qui va créer du code comme en html mais en remplacant les données variables par les cléfs correspondantes à l'objet de la page.
            const photographerHTML = `             
                    <div class="box">
                        <h2>
                        ${photographerInfos.name}
                        </h2>
                        <p class="photographer_city_country">
                          <span>${photographerInfos.country}</span>
                          <span>${photographerInfos.city}</span> 
                        </p>
                        <p class="photographer_description">${photographerInfos.tagline}
                        </p>
                    </div>
                    <div>
                    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                    </div>     
                    <div>
                        <a href= "#">
                        <img src=assets/images/Sample_Photos/Photographers_ID_Photos/${photographerInfos.portrait} />
                        </a>
                    </div> `;
              // Injection dans le dom du résultat de photographerHTML, au niveau de la class photographer-header.
              // Utilisation de la propriété innerHTML  récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.
              document.querySelector(".photographer-header").innerHTML = photographerHTML;
              // Affiche le nom du photographe dans le titre de la modale
              document.querySelector("#namePhotographer").textContent = photographerInfos.name;
              // Affiche le tarif par photographe dans l'encart total likes
              document.querySelector("#photographer-price-day").textContent = `${photographerInfos.price} € / jour`;
       }
      //  Obtenir les médias des photographes  par id du photographe ds le tableau des médias 
       function getPhotographerMedias(mediasArray, idPhotograph){
            // Retourne un tableau des médias filtré par média
            return mediasArray.filter((media)=>{
                // Retourne le nombre de médias ayant id du photographe et ce nombre est strictement égale au numéro de l'id du photographe
                return Number(media.photographerId) === Number(idPhotograph);
            });
       }
// Affichage de tous les médias par photographe avec comme paramètre le tableau des médias
       function displayPhotographerMedia(arrayMedias){
                // création de la variable/ "" signifie chaine de caractères.
              let htmlMedias = "";
            // récupération de chaque média ds le tableau des médias
             arrayMedias.forEach((media)=>{
                    // htmlMedias permet la création du html/+= l'opérateur addition et égale permet la concaténation de la variable arrayMedias (qui récupére chaque média) AVEC le contenu des bactiques.(=étant ici l'assignation)
                  htmlMedias += `                  
                    <div class="gallery-element">        
                        ${mediaFactory(media)}
                        <div class="description-element">
                        <span class="picture-name">${media.title}</span>
                        <span class="likes-area" aria-hidden="false" aria-label="likes">
                          <span class="likes-number">${media.likes}</span>
                        <i class="fas fa-heart"></i></span>                        
                    </div>        
                    </div> `;
             });
            //  injection dans le dom du contenu de la variable htmlMedias (grâce à la methode .innerHTML qui renvoi le contenu textuel ainsi que les balises et attributs), au niveau de l'id gallery.
             document.querySelector("#gallery").innerHTML = htmlMedias;

    //------------------AJOUTS POUR CREER LA LIGHTBOX------------------------------//
             const medias = document.querySelectorAll(".article-media");

            // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
            //  pour chaque média avec comme paramètres ( média (prend on compte l'élément courant) et en deuxième paramètre la méthode index (index commence tj par 0)
            // création d'une callback = Une fonction de rappel (appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.
             medias.forEach((media, index)=>{

                  media.addEventListener("click", ()=>{

                    // verification avt de passer à la suite: 
                    // alert(index) résultat on doit retrouver 0 qd on clique sur la première image.
                    //j'appelle la fct  lightBox et lui précisant les vrais valeurs de ces paramètres (1er argument qui est une variable=arrayMedias crée plus haut, et le paramètre index qui est une méthode)

                        lightBox(arrayMedias, index);
                        // puis je retourne ds la page lightbox pour une vérification avec un console.log 

                  });

             }); 

    /* --------------- TOTAL LIKES -----------------*/

    // initialisation de la variable à 0.
             let totalNumberOfLikes = 0;
/*syntaxe for (initialisation; condition: la boucle sera exécuté tant que i sera inférieur à la longueur du tableau des médias;incrémentation +1 : À chaque éxécution, la variable "i" augmentera de 1.Lorsque'elle sera arrivée à la longueur du tableau, le boucle se terminera.*/
             for(let i=0; i<arrayMedias.length; i++){
                  // affectation après addition de la somme des itérations des likes du tableau des médias en valeur number.
                  totalNumberOfLikes += Number(arrayMedias[i].likes);
             }
            //  injection du résultat (totalNumberOfLikes) à l'emplacement de l'id #photographer-all-likes
             document.querySelector("#photographer-all-likes").textContent = totalNumberOfLikes;
            //  exécution de la fonction likes qui est initilisé ds la page likes.js
             likes();
       }
});



