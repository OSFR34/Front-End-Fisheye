function filterMedias(typeOfFilter, arrayMedias){

    if(typeOfFilter === "date"){

        return filterByDate(arrayMedias);
    }

    if(typeOfFilter === "popularity"){

       return filterByPopularity(arrayMedias);

    }

    if(typeOfFilter === "title"){

       return filterByTitle(arrayMedias);

    }


    function filterByDate(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

              return new Date(b.date) - new Date(a.date);

        });


    }

    function filterByPopularity(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

            return Number(b.likes) - Number(a.likes);

        });

    }

    function filterByTitle(arrayOfMedias){

        return arrayOfMedias.sort((a, b)=>{

             return a.title.localeCompare(b.title);

        });

    }

}