

/*----------------------- OBJECTIF LIKE--------------------------------

AU CLIC SON NOMBRE DOIT ETRE INCREMENTE DE + 1 ET AINSI QUE POUR LE TOTAL  */

function likes(){     
      
     const hearts = document.querySelectorAll(".fa-heart");
      
     let totalNumberOfLikes = document.querySelector("#photographer-all-likes");
     
     hearts.forEach((heart)=>{
            heart.addEventListener("click", function(){
                  addLike(heart);
            });
     })
/*-------------------ACCESSIBILITE CLAVIER------------------------- */

//      L' keydown événement est déclenché lorsqu'une touche est enfoncée.
     document.addEventListener("keydown", (event)=>{
// si la touche enfoncée est entrer
             if(event.key === "Enter"){

                  if(event.target?.classList[1] === "fa-heart"){
                        // retourne la fct addLike
                        return addLike(event.target);
                  }
             }
      });

      function addLike(heartNode){
            // cons numberOfLikes: récupère le contenu textuel précédent le heart(soit le nombre avt le coeur) grâce à la propriété previousSibling .
            const numberOfLikes = heartNode.previousElementSibling ;
            //  résultat : <span class="likes-numbre>101<span>

            // récupèration du contenu textuel sans les balises grâce à la propriété textContent et j'attribue le valeur number au contenu  textuel que j'ai récupéré, et je lui ajoute 1. 
            numberOfLikes.textContent = Number(numberOfLikes.textContent) + 1;


            /* POUR LE TOTAL DES LIKES REALISATION AU PREALABLE D'UNE BOUCLE DS photographer.js*/
            // même instruction que plus haut sauf qu'il est appliqué à la variable totalNumberOfLikes 
            totalNumberOfLikes.textContent = Number(totalNumberOfLikes.textContent) + 1;

      }
} 