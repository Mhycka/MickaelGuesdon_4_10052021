
//----------REGEX-----------

function validate () {
    var champ_prenom = document.getElementById(".first");
    var champ_nom = document.getElementById(".last");
    var champ_email = document.getElementById(".email");
    var champ_birthdate = document.getElementById(".birthdate");
    var champ_checkbox = document.getElementById("#checkbox-input");

    var mailRGEX=  /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    var nameRGEX = /[a-zA-Z]+[ -]+/g;
    var birthdateRGEX = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d/g;
    var numbtournamentRGEX = /-?[0-9]+/g;
    var checkboxRGEX = /true|false|0|1/g;

    var nameResult = nameRGEX.test(champ_prenom,champ_nom);
    var mailResult = mailRGEX.test(champ_email);
    var birthdateResult = birthdateRGEX.test(champ_birthdate);
    var numbtournamentResult = numbtournamentRGEX.test(champ_checkbox);
    var checkboxResult = checkboxRGEX.test(champ_checkbox);

    if (nameResult ==false)
    {
        alert('Please enter a valid text');
        return false;
    }

    if (mailResult ==false)
    {
        alert('Please enter a valid email address');
        return false;
    }

    if (birthdateResult ==false)
    {
        alert('Please enter a valid birthdate');
        return false;
    }
    
    if (numbtournamentResult ==false)
    {
        alert('Please select one');
        return false;
    }

    if (checkboxResult ==false)
    {
        alert('Please accept condition user');
        return false;
    }
    
    else (nameResult ==true)
    {
        return true;
    }
}
