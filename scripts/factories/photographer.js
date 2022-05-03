/*--------------------CREATION D'UNE FONCTION USINE ------------------------ */

//  Affectation par destructuration 
function photographerFactory(data) {
    
    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/images/Sample_Photos/Photographers_ID_Photos/${portrait}`;
// Récupérer (ou aller chercher la carte utilisateur DOM) 
    function getUserCardDOM() {
        // création balise article
        const article = document.createElement('article');
        // création d'un lien
        const photographerLink = document.createElement("a");
        // création d'un attribut href et on ajoute url du photographe avec son id(? permet de séparer l'URL d'une variable)
        photographerLink.setAttribute("href",`photographer.html?id=${id}`);
        const img = document.createElement ('img');
        img.setAttribute("src", picture);
        // La appendChild()méthode ajoute un nœud (élément) en tant que dernier enfant d'un élément.
        photographerLink.appendChild(img);
        const photographerName = document.createElement('h2');
        photographerName.textContent = name;
        const photographerCityAndCountry = document.createElement ('p');
        photographerCityAndCountry.setAttribute("class", "photographer_city_country");
        photographerCityAndCountry.textContent = `${city}, ${country}`;
        const photographerDescription = document.createElement("p");
        photographerDescription.setAttribute("class", "photographer_description" )
        photographerDescription.textContent = tagline;
        const photographerPrice = document.createElement("p");
        photographerPrice.setAttribute("class", "photographer_price")
        photographerPrice.textContent = `${price}€ / jour`;
         
        article.appendChild(photographerLink);
        article.appendChild(photographerName);
        article.appendChild(photographerCityAndCountry);
        article.appendChild(photographerDescription)
        article.appendChild(photographerPrice)
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


    