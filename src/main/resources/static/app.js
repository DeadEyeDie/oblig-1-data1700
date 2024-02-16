let billetter = [];

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+(?:\d *){6,14}\d$/;

function validMail(email) {
    return emailPattern.test(email)
}

function validNumber(number){
    return phonePattern.test(number)
}

function kjop() {
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;




//input validering


if (film && antall>0 && fornavn && etternavn && validNumber(telefon) && validMail(epost)) {
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    billetter.push(billett);
    visBilletter();
    nullstillInput();
    }else if(antall>0 && fornavn && etternavn && validNumber(telefon) && validMail(epost)){
    alert('Vennligst velg en film');

    } else if(film && antall<1 && fornavn && etternavn && validNumber(telefon) && validMail(epost)){
    alert('Antall billetter må være positivt');

    } else if(film && antall>0 && !fornavn || !etternavn && validNumber(telefon) && validMail(epost)){
    alert('Vennligst fyll inn både fornavn og etternavn');
    } else if(film && antall>0 && fornavn && etternavn && !validNumber(telefon) && validMail(epost)){
    alert('Vennligst bruk riktig format for telefonnummer. Nummeret må inneholde landskode og det må ligge mellom 6 og 14 sifre\n' +
        'eksempel: "+1 1234567890"');
    } else if(film && antall>0 && fornavn && etternavn && validNumber(telefon) && !validMail(epost)){
    alert('Vennligst brukt riktig format for epost.\n' +
        'eksempel: "hvaSomHelst@hvasomhelst.minstTotegnfraA-Z"');
    }else {
    alert('Du har glemt eller fylt inn feil på 2 eller flere felt, vennligst sjekk at antall er mer enn 0, at du bruker riktig format.\n' +
        'Format for telefon: "+1 1234567890"\n' +
        'Format for epost: hvaSomHelst@hvasomhelst.minstTotegnfraA-Z"')
}

}
function slettAlt() {
    billetter = [];
    visBilletter();
}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fornavn}, Telefon: ${billett.telefon}, Epost: ${billett.epost}`;
        billettListe.appendChild(li);
    });
}

function nullstillInput() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}