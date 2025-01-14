    // fonction asynchrone qui appelle les photographes
    // asynchrone :deux opérations sont qualifiées d’asynchrones en informatique lorsqu’elles sont indépendantes c’est-à-dire lorsque la deuxième opération n’a pas besoin d’attendre que la première se termine pour démarrer.
    async function getPhotographers() {
        // Récupérer(ou aller chercher) les données des photographes (données copié depuis le dossier json
        const photographers = [
            {
                "name": "Mimi Keel",
                "id": 243,
                "city": "London",
                "country": "UK",
                "tagline": "Voir le beau dans le quotidien",
                "price": 400,
                "portrait": "MimiKeel.jpg"
            },
            {
                "name": "Ellie-Rose Wilkens",
                "id": 930,
                "city": "Paris",
                "country": "France",
                "tagline": "Capturer des compositions complexes",
                "price": 250,
                "portrait": "EllieRoseWilkens.jpg"
            },
            {
                "name": "Tracy Galindo",
                "id": 82,
                "city": "Montreal",
                "country": "Canada",
                "tagline": "Photographe freelance",
                "price": 500,
                "portrait": "TracyGalindo.jpg"
            },
            {
                "name": "Nabeel Bradford",
                "id": 527,
                "city": "Mexico City",
                "country": "Mexico",
                "tagline": "Toujours aller de l'avant",
                "price": 350,
                "portrait": "NabeelBradford.jpg"
            },
            {
                "name": "Rhode Dubois",
                "id": 925,
                "city": "Barcelona",
                "country": "Spain",
                "tagline": "Je crée des souvenirs",
                "price": 275,
                "portrait": "RhodeDubois.jpg"
            },
            {
                "name": "Marcel Nikolic",
                "id": 195,
                "city": "Berlin",
                "country": "Germany",
                "tagline": "Toujours à la recherche de la photo",
                "price": 300,
                "portrait": "MarcelNikolic.jpg"
            }
        ]
        // Retourner la constante photographers sous forme de tableau (retrait des : ,...photographers en trop car nous voulons qu'un seul tableau)
        // syntaxe ... (=Spread Operator=opérateur de décomposition) permet de récupérer chaque élément de l'objet photographers et comme il est entre crochet il renvoi un tableau.
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        // Créer un element article (fct initialisé getUserCardDOM, ds factories, ds photographer.js) avec les données pour chaque photographe
        photographers.forEach((photographer) => {
            // ....=j'appelle la fct photographerFactory (créer ds photographer.js factories)
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            // La appendChild()méthode ajoute un nœud (élément) en tant que dernier enfant d'un élément.
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère(=get aller chercher) les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

    Element.userCardDOM
    