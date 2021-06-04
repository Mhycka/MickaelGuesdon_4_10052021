
//----------REGEX-----------


// DOM ELEMENTS For Validations

    const champ_prenom = document.getElementById('first');
    const champ_nom = document.getElementById('last');
    const champ_email = document.getElementById('email');
    const quantity = document.getElementById('quantity');
    const champ_birthdate = document.getElementById('birthdate');
    const champ_cities = document.getElementById('cities');
    const cityPlace = document.querySelectorAll('#cities .checkbox-input');
    const checkbox1 = document.getElementById('checkbox1');
    const input = document.getElementsByClassName('text-control');
    const form = document.querySelector('form');


// Validation des champs
// Prénom & Nom
const nameRGEX = /[a-zA-Z-]+[^0-9]+/g;

function checkFirstName () {
    if ( champ_prenom.value.trim().length < 2 || first.value.trim() ==='' || !champ_prenom.value.match(nameRGEX)) {
        champ_prenom.parentElement.setAttribute('data-error-visible','true');
        champ_prenom.style.border = '2px solid #e54858';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
}


function checkLastName (){
    if ( champ_nom.value.trim().length < 2 || last.value.trim() ==='' || !champ_nom.value.match(nameRGEX)) {
        champ_nom.parentElement.setAttribute('data-error-visible','true');
        champ_nom.style.border = '2px solid #e54858';
        return false;
    }
    last.parentElement.setAttribute('data-error-visible', 'false');
    last.style.border = 'solid #279e7a 0.19rem';
    return true;
}


// Email
function checkMail() {
    const mailRGEX=  /[\w\.]+@[\w-]+\.+[\w-]{2,4}/g;
    if (champ_email.value.trim().match(mailRGEX)) {
        champ_email.parentElement.setAttribute('data-error-visible', 'false');
        champ_email.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
    champ_email.parentElement.setAttribute('data-error-visible', 'true');
    champ_email.style.border = '2px solid #e54858';
    return false;
}

//Birthdate
function checkBirthdate() {
     const birthdateRGEX = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/gm;

    if (!champ_birthdate.value.trim().match(birthdateRGEX)) {
        champ_birthdate.parentElement.setAttribute('data-error-visible', 'true');
        champ_birthdate.style.border = '2px solid #e54858';
        return false;
        
    }
    champ_birthdate.parentElement.setAttribute('data-error-visible', 'false');
    champ_birthdate.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Nombre Tournoi
function checkNumbTournaments() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = ' 1px solid #279e7a';
    return true;
}

// Villes
function checkCities(){
    for (let i = 0; i < cityPlace.length; i++) {
        if (cityPlace[i].checked || cityPlace[i] > 1) {
            champ_cities.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    champ_cities.setAttribute('data-error-visible', 'true');
    return false;
}


// Conditions d'utilisation
function checkTerm() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Evenement formulaire
function validationStepbyStep(element, method, event) {
    element.addEventListener(event, method);
}

validationStepbyStep(champ_prenom, checkFirstName, 'focusout');
validationStepbyStep(champ_nom, checkLastName, 'focusout');
validationStepbyStep(champ_email, checkMail, 'focusout');
validationStepbyStep(champ_birthdate, checkBirthdate, 'focusout');
validationStepbyStep(quantity, checkNumbTournaments, 'focusout');
validationStepbyStep(champ_cities, checkCities, 'change');
validationStepbyStep(checkbox1, checkTerm, 'change');

function allValidationcheck() {
    checkFirstName()
    checkLastName()
    checkMail()
    checkBirthdate()
    checkNumbTournaments()
    checkCities()
    checkTerm()
}

function validationFormulaire(){
    if (checkFirstName()=== true && 
        checkLastName() === true && 
        checkMail() === true && 
        checkBirthdate()=== true &&
        checkNumbTournaments()=== true &&
        checkCities()=== true &&
        checkTerm() === true ) {
        return true;
        }

        return false;
}

// Envoi Formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(validationFormulaire()== true) {
        launchPageThanks();
    }
    else{
        allValidationcheck();
    }
});



// Thanks PAGE
function launchPageThanks() {
    document.querySelector('form').hidden = true;
    let elm = document.querySelector('.modal-body');
    elm.innerHTML += "<div id='thanks'><h1>Merci ! <br> Votre réservation a été reçue.</h1><input id='closeThanks' type='button' value='Fermer'/></div>";

    // Close 
    const closeBtn = document.getElementById('closeThanks');
    closeBtn.addEventListener ('click', closeThanksPage);

    const closeModal2 = document.querySelector(".close2");
    closeModal2.addEventListener('click', closeThanksPage);
}

// Reset
function closeThanksPage() {
    location.reload();
}

