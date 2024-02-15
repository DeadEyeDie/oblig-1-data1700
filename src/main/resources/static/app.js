let billetter = [];

function kjop() {
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;



//input validering


if (film && antall && fornavn && etternavn && telefon && epost) {
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
    }else {
    alert('Vennligst fyll ut alle feltene.');
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