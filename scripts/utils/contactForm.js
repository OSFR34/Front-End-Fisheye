function displayModal() {
    const modal = document.getElementById("background_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("background_modal");
    modal.style.display = "none";
}

//DOM elements
const form = document.getElementById('form');

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const message = document.getElementById('message-boxTextarea');
const messageHeaderModal = document.querySelector('#message_header_modal')


//REGEX
// permets l'acceptation des caractères spéciaux même autre que celle de l'aphabet français et vérifie si il y a bien 2 caractères minimum.
let nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]{2,}/;


// permets de vérifier une syntaxe est bien de type exemple@email.com
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 

//Cette fonction permet l'affichage du message d'erreur  et l'encadré rouge de l'input
function displayError(input) {
    input.style.border = "solid 2px red";   
    input.nextElementSibling.style.display = "block";   
}
// Cette fonction permets annulation des dispositifs d'erreurs.
function displaySuccess(input) {
	input.style.border = 'none';
    input.nextElementSibling.style.display = "none";    
}
// VALIDATIONS INPUTS
// check prénom
function verifFirstName() {
    // Si la valeur du champ prénom est vide ou ne correspond pas au REGEX, on affiche l'erreur.
    if (firstName.value === '' || !firstName.value.match(nameRegex)) {
        displayError(firstName);
        return false;
    }else {
        displaySuccess(firstName);
        return true;
    }
}


//check nom de famille
function verifLastName() {
    // Si la valeur du champ nom est vide ou ne correspond pas au REGEX, on affiche l'erreur.
    if (lastName.value === '' || !lastName.value.match(nameRegex)) {
        displayError(lastName);
        return false;
    }else {
        displaySuccess(lastName);
        return true;
    }
}

//check email
function verifEmail() {
    // Si la valeur du champ email correspond au REGEX, le champ est valide. Sinon on affiche l'affichage d'erreur.
    if (email.value.match(emailRegex)) { 
        displaySuccess(email);
        return true;
    }else {
        displayError(email);
        return false;
    }
}

//check message
function verifMessage() {
    // si la valeur du champs est inférieur à 2 caractères, alors affiche le message d'erreur. Si non on affiche le succès message. 
    if (message.value === '' || message.value.length < 15) {
        displayError(message);
        return false;
    }else {
        displaySuccess(message);
        return true;
    }
}


// Ecouteur d'évènement et validation
document.querySelector(".btn-submit").addEventListener("click", function(event){
    // la méthode preventDefault permets l'annulation des dispositions par défaut.

    event.preventDefault();

    const firstNameValue = document.querySelector("#first").value;

    const lastNameValue = document.querySelector("#last").value;

    const emailValue = document.querySelector("#email").value;

    const messageValue = document.querySelector("#message-boxTextarea").value;


    const resultVerifFirstfName = verifFirstName(firstNameValue);

    const resultVerifLastfName = verifLastName(lastNameValue);

    const resultVerifEmailValue = verifEmail(emailValue);

    const resultVerifMessageValue = verifMessage (messageValue);

    if(resultVerifFirstfName === true && resultVerifLastfName === true && resultVerifEmailValue && resultVerifMessageValue === true) {

       
        // je conserve la modal et le formulaire puis je vide le formulaire

        const modalGlobal = document.querySelector(".modal");
        
        const form = document.querySelector("#form");

        form.reset();

     // je créee le message de validation du formulaire

    const successMessage = `

        <div id="crossSuccessMessage">
            <img src="assets/icons/close.svg" onclick="closeModal()" /> 
        </div> 
    
        <div id="success-message"> Votre message a bien été transmis.<br><br>
        Nous vous recontacterons sous 48 heures.</div>

        <button class="btn" id="closeSuccessMessage">Fermer</button>   
    
    `
    // modalContain contient le formulaire qu'il y a ds la modale avant l'injection du message de réussite.
    const modalContain = modalGlobal.innerHTML;

    modalGlobal.innerHTML = successMessage;

        document.querySelector("#closeSuccessMessage").addEventListener("click", function () {
            document.querySelector("#background_modal").style.display = "none";
            modalGlobal.innerHTML = modalContain;
        });

        document.querySelector("#crossSuccessMessage").addEventListener("click", function () {
            document.querySelector("#background_modal").style.display = "none";
            modalGlobal.innerHTML = modalContain;
        });

    }
});

