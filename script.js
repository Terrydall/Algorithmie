
// Je détermine mes futurs conditions
let age = window.prompt("saisir votre âge");
console.log(age);
let permis = window.prompt("saisir nombre d'années de permis");
console.log(permis);
let accident = window.prompt("saisir nombre d'accidents");
console.log(accident);
let assurance = window.prompt("saisir nombre d'années en tant qu'assuré(e)");
console.log(assurance);

// J'inclus mes conditions dans mes variables
function tarifs(age, permis, assurance, accident) {
    // Si supèrieur ou égal à 18ans et titulaire permis B de - 2 ans
    if (permis < 2 && age >= 18 && assurance < 1 && accident == 0) {
        console.log("Vous bénéficiez du tarif D");
    }
    // Si permis B de plus de 2 ans et agé de moins de 25 ans et 0 accidents ou permis B de moins de 2 ans et agé de plus de 25 ans et 0 accidents 
    else if (permis > 2 && age < 25 && accident == 0 || permis < 2 && age > 25 && accident == 0 && assurance < 1) {
        console.log("Vous bénéficiez du tarif C");
    }
    // Si permis plus de 2 ans et moins de 25 ans et 0 accidents ou permis moins de 2 ans et plus de 25 ans et 0 accidents
    else if (permis > 2 && age < 25 && accident > 0 || permis < 2 && age > 25 && accident > 0 && assurance < 1) {
        console.log("Vous bénéficiez du tarif D");
    }
    // Si permis plus de 2 ans agé de plus de 25 ans et 0 accidents
    else if (permis > 2 && age > 25 && accident == 0 && assurance < 1) {
        console.log("Vous bénéficiez du tarif B");
    }
    // Si permis plus de 2 ans agé de plus de 25 ans et 1 accident
     else if (permis > 2 && age > 25 && accident == 1 && assurance < 1) {
        console.log("Vous bénéficiez du tarif C");
    }
    // Si permis plus de 2 ans agé de plus de 25 ans et 2 accidents
    else if (permis > 2 && age > 25 && accident == 2 && assurance < 1) {
        console.log("Vous bénéficiez du tarif D");
    }
     // Si assuré depuis au moins 1 an
    else if(assurance > 1){
        console.log("Vous bénéficiez du tarif A")
    }
    // Si agé entre 60 et 70 et pas assuré chez nous  
    else if(age >=60 && age <=70 && permis >= 2 && accident == 0 && assurance < 1){
        console.log("Vous bénéficiez du tarif D")
    }
    // Si agé entre 70 et 80 et pas assuré chez nous
    else if(age >=70 && age <=80 && permis >= 2 && accident == 0 && assurance < 1){
        console.log("Vous bénéficiez du tarif C")
    }
     // sinon refusé
    else {   
        console.log("Vous ne remplissez pas les conditions pour notre assurance")
    }
}
// J'appelle ma fonction
tarifs(age, permis, assurance, accident);

function senior(age, assurance) {

    //Si agé de 60 à 70 et assuré au moins 1 an
    if (age >= 60 && age <= 70 && assurance >= 1) {
        console.log("Vous bénéficiez du tarif C");
    }
    //Si agé de 70 à 80 et assuré au moins 1 an
    else if (age >= 70 && age <= 80 && assurance >= 1) {
        console.log("Vous bénéficiez du tarif B");
    }
    // sinon refusé
    else { 
        console.log("Vous ne remplissez pas les conditions pour notre assurance")
    }
}
//J'appelle ma fonction
senior(age, assurance);
/*
let age = window.prompt("Rentrer votre âge");
let permis = window.prompt("Temps de permis");
let accident = window.prompt("Rentrer le nombre d'accidents");
let fidelite = window.prompt("Depuis combien d'années vous êtes chez nous?");

function assurance(age, permis, accident, fidelite) {
    let cp = 0;
    if (age <= 25) {
        cp = cp + 1;
        return cp;
    } else {
        return cp;
    };

    if (permis <= 2) {
        cp = cp + 1;
        return cp;
    } else {
        return cp;
    };

    if (accident >= 1) {
        cp = cp + 1;
        return cp;
    } else {
        return cp;
    };

    if (cp < 3 && fidelite > 1) {
        cp = cp - 1;
        return cp;
    } else {
        return cp;
    };
    console.log(cp);
    if (cp === -1) {
        console.log("tarif A");
    } else if (cp == 0) {
        console.log("tarif B");
    } else if (cp == 1) {
        console.log("tarif c");
    } else if (cp == 2) {
        console.log("tarif D");
    } else {
        console.log("Vous ne remplissez pas les conditions pour être assuré chez nous");
    }


}

assurance(age, permis, accident, fidelite);
*/

/*let age = window.prompt("Rentrer votre âge");
let permis = window.prompt("Temps de permis");
let accident = window.prompt("Rentrer le nombre d'accidents");
let fidelite = window.prompt("Depuis combien d'années vous êtes chez nous?");


    function vAge(age,cp){
   
    if (age <= 25) {
        cp = cp + 1;
        return cp;
    } else { return cp; }
    }
    function vPermis(permis, cp){
    if (permis <= 2) {
        cp = cp + 1;
        return cp;
    } else {
        return cp;
    }
    }
    function vAcc (accident, cp){
    if (accident >= 1) {
        cp = cp + 1;
        return cp;
    } else {
        return cp;
    }
}
    function vFide(fidelite, cp){
    if (cp < 3 && fidelite > 1) {
        cp = cp - 1;
        return cp;
    } else {
        return cp;
    }}
    function assurance(age, permis, accident, fidelite) { 
        let cp = 0;
        cp = vAge(age,cp);
        cp= vPermis(permis, cp);
        cp = vAcc(accident, cp);
        cp = vFide(fidelite,cp);
    console.log(cp);
    if (cp === -1) {
        console.log("tarif A");
    } else if (cp == 0) {
        console.log("tarif B");
    } else if (cp == 1) {
        console.log("tarif c");
    } else if (cp == 2) {
        console.log("tarif D");
    } else {
        console.log("Vous ne remplissez pas les conditions pour être assuré chez nous");
    }


}

assurance(age, permis, accident, fidelite);*/

