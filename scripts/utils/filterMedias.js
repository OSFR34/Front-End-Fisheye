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

    // Tri par date
    function filterByDate(arrayOfMedias){
        // methode sort permet de faire les tries
        return arrayOfMedias.sort((a, b)=>{
            // Retourne un tableau trié par date par ordre décroissant
              return new Date(b.date) - new Date(a.date);
        });
    }
    // Tri par popularité    
    function filterByPopularity(arrayOfMedias){
        return arrayOfMedias.sort((a, b)=>{
            // Retourne un tableau trié par nombre de like par ordre décroissante
            return Number(b.likes) - Number(a.likes);
        });
    }
    // retourne un tableau  trié par titre par ordre alphabétique (.localeCompare)
    
    function filterByTitle(arrayOfMedias){
        return arrayOfMedias.sort((a, b)=>{
             return a.title.localeCompare(b.title);
        });
    }
}