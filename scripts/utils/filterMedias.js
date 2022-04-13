// filter des médias par la valeur de la sélection du tableau des médias.
function filterMedias(valueOfSelect, arrayToFilter){
    //  console.log (valueOfSelect);
    //  console.log (arrayToFilter); test avant de continuer
    
    // reprise du pattern factory comme dans mediaFactory.js

    if(valueOfSelect === "Date"){

        return filterByDate(arrayToFilter);
    }

    if(valueOfSelect === "Popularité"){

       return filterByPopularity(arrayToFilter);

    }

    if(valueOfSelect === "Titre"){

       return filterByTitle(arrayToFilter);

    }

    // Retourne un tableau trier par date par ordre décroissante
    function filterByDate(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

              return new Date(b.date) - new Date(a.date);

        });


    }
   // Retour un tableau trier par nombre de like par ordre décroissante
    function filterByPopularity(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

            return Number(b.likes) - Number(a.likes);

        });

    }
    // retourne un tableau des titre trier par ordre alphabétique (.localeCompare)
    function filterByTitle(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

             return a.title.localeCompare(b.title);

        });

    }

}