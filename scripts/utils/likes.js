

/*----------------------- OBJECTIF LIKE--------------------------------

AU CLIC SON NOMBRE DOIT ETRE INCREMENTE DE + 1 ET AINSI QUE POUR LE TOTAL  */

function likes(){     
      // constante qui selectionne toutes les icones coeur dans la galerie.
     const hearts = document.querySelectorAll(".fa-heart");
      // console.log (hearts);
      // variable qui selectionne id avec le total des coeurs
     let totalNumberOfLikes = document.querySelector("#photographer-all-likes");
      // j'appelle ma constante des coeurs et je lui applique la méthode forEach pour chaque coeur
     hearts.forEach((heart)=>{
      // au click d'un coeur je lance la fct callback
            heart.addEventListener("click", function(){
                  addLike(heart);
            });
     })

     document.addEventListener("keydown", (event)=>{

             if(event.key === "Enter"){

                  if(event.target?.classList[1] === "fa-heart"){

                        return addLike(event.target);

                  }

             }

      });

      function addLike(heartNode){

            // cons numberOfLikes: récupère le contenu textuel précédent le heart(soit le nombre avt le coeur) grâce à la propriété previousSibling .
            const numberOfLikes = heartNode.previousElementSibling ;
            //  résultat : <span class="likes-numbre>101<span>

            // récupèration le contenu textuel sans les balises grâce à la propriété textContent et j'attribue le valeur number au contenu  textuel que j'ai récupéré, et je lui ajoute 1. 
            numberOfLikes.textContent = Number(numberOfLikes.textContent) + 1;


            /* POUR LE TOTAL DES LIKES REALISATION AU PREALABLE D'UNE BOUCLE DS photographer.js*/
            // même instruction que plus haut sauf qu'il est appliqué à la variable totalNumberOfLikes 
            totalNumberOfLikes.textContent = Number(totalNumberOfLikes.textContent) + 1;

      }
} 