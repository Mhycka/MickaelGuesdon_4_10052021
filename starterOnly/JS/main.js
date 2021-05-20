
//----------REGEX-----------

function validate () {
    var champ_prenom = document.getElementById(".first");
    var champ_nom = document.getElementById(".last");
    var champ_email = document.getElementById(".email");
    var champ_birthdate = document.getElementById(".birthdate");
    var champ_checkbox = document.getElementById("#checkbox-input");

    var mailRGEX=  /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;
    var nameRGEX = /[a-zA-Z -][^0-9]/g;
    var birthdateRGEX = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d/g;
    var numbtournamentRGEX = /-?[0-9]+/g;
    var checkboxRGEX = /true|false|0|1/gm;

    var nameResult = nameRGEX.test(champ_prenom,champ_nom);
    var mailResult = mailRGEX.test(champ_email);
    var birthdateResult = birthdateRGEX.test(champ_birthdate);
    var numbtournamentResult = numbtournamentRGEX.test(champ_checkbox);
    var checkboxResult = checkboxRGEX.test(champ_checkbox);

    if (nameResult ==false)
    {
        alert('Please enter a valid text');
        return data-error;
    }
    
    if (mailResult ==false)
    {
        alert('Please enter a valid email address');
        return data-error;
    }

    if (birthdateResult ==false)
    {
        alert('Please enter a valid birthdate');
        return data-error;
    }
    
    if (numbtournamentResult ==false)
    {
        alert('Please select one');
        return data-error;
    }

    if (checkboxResult ==false)
    {
        alert('Please accept conditions user');
        return data-error;
    }

}

var BtnSubmit = document.querySelector('btn-submit')

function pageThanks (){
    var thanks = document.querySelector('.content');
    thanks.innerHTML = <p>Merci ! Votre réservation a été reçue.</p>



}
    
