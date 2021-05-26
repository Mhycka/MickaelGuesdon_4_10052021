
//----------REGEX-----------


// DOM ELEMENTS For Validations

    const champ_prenom = document.getElementById('first');
    const champ_nom = document.getElementById('last');
    const champ_email = document.getElementById('email');
    const quantity = document.getElementById('quantity');
    const champ_birthdate = document.getElementById('birthdate');
    const champ_cities = document.getElementById('cities');
    const cities = document.querySelectorAll('#cities .checkbox-input');
    const checkbox1 = document.getElementById('checkbox1');
    const input = document.getElementsByClassName('text-control');
    const form = document.getElementById('form');


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
        lastName.style.border = '2px solid #e54858';
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
    const birthdateRGEX = /(19|20)\d\d[-\/](0[1-9]|1[012])[-\/](0[1-9]|[12][0-9]|3[01])/g;
    if (champ_birthdate.value.trim().match(birthdateRGEX)) {
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
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Villes
function checkCities(){
    cities.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
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
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(champ_prenom, checkFirstName, 'focusout');
formFieldsValidation(champ_nom, checkLastName, 'focusout');
formFieldsValidation(champ_email, checkEmail, 'focusout');
formFieldsValidation(champ_birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(champ_cities, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');




    console.log(champ_prenom);
    console.log(champ_nom);
    console.log(champ_email);
    console.log(champ_birthdate);