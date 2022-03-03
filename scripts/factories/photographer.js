function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/images/Sample_Photos/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const photographerLink = document.createElement(a)

        article.append(photographerLink);
        article.appendChild(photographerName);
        article.append(photographerCityAndCountry);
        article.append(photographerDescription);
        article.append(photographerPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}