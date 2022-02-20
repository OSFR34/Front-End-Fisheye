function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/images/Sample_Photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const photographerLink = document.createElement("a");
        photographerLink.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        photographerLink.append(img);
        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        const photographerCityAndCountry = document.createElement('p');
        photographerCityAndCountry.setAttribute("class", "photographer_city_country");
        photographerCityAndCountry.textContent = `${city}, ${country}`;
        const photographerDescription = document.createElement("p");
        photographerDescription.setAttribute("class"," photographer_description");
        photographerDescription.textContent = tagline;
        const photographerPrice = document.createElement("p");
        photographerPrice.setAttribute("class", "photographer_price");
        photographerPrice.textContent = `${price}$ / jour`

        article.append(photographerLink);
        article.appendChild(photographerName);
        article.append(photographerCityAndCountry);
        article.append(photographerDescription);
        article.append(photographerPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}