const billetter = []; //tom array men fyller den med billetter senere

function Billettkjop() {
   // let error = false;
    //boolsk verdi som blir satt foreløig til false.
    let film = document.getElementById("filmer").value;
    let antall = document.getElementById("ANTALL").value;
    let fornavn = document.getElementById("FORNAVN").value;
    let etternavn = document.getElementById("ETTERNAVN").value;
    let telefon = document.getElementById("tlf").value;
    let epost = document.getElementById("EPOST").value;


    //kall til valideringsfunksjonen;
    inputValideringFilm();
    antallValidering();
    fornavnValidering();
    etternavnValidering();
    tlfValidering();
    epostValidering();

    function inputValideringFilm() { //inputvalidering som sjekker at alle feltene inneholder noe
        if (film === "Velg Film") {
            document.getElementById("Feilfilm").innerHTML = "vennligst velg en film";
            return;
        } else {
            document.getElementById("Feilfilm").innerHTML = "";
        }
    }

    function antallValidering() { //validering av antall

        let antall = Number(ANTALL);
        if (isNaN(antall || antall <= 0)) {
            document.getElementById("Feilantall").innerHTML = "vennligst oppgi antall";
            return;
        } else {
            document.getElementById("Feilantall").innerHTML = "";
        }
    }

    function fornavnValidering() { //validering av fornavn

        if (fornavn === "") {
            document.getElementById("Feilfornavn").innerHTML = "vennligst fyll inn fornavn";
            return;
        } else {
            document.getElementById("Feilfornavn").innerHTML = "";
        }
    }

    function etternavnValidering() { //etternavn
        if (etternavn === "") {
            document.getElementById("Feiletternavn").innerHTML = "vennligst fyll etternavn";
            return;
        } else {
            document.getElementById("Feiletternavn").innerHTML = "";
        }
    }

    function tlfValidering() {

        // validering av telefon  med regex
        let telefon = Number(tlf)
        if (!isNaN(telefon)) {
            let telefonRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!telefonRegex.test(tlf)) {
                document.getElementById("Feiltlfnr").innerHTML = "vennligst oppgi telefonnr";
                return;
            } else {
                document.getElementById("Feiltlfnr").innerHTML = "";
            }
        }
    }

    function epostValidering() {

        //validering av epost epost
        const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!epostRegex.test(EPOST)) { //bruke epostreg
            document.getElementById("Feilepost").innerHTML = "vennligst oppgi gyldig epost";
            return;
        } else {
            document.getElementById("Feilepost").innerHTML = "";
        }
    }

}

//alle billettene skal lagres som et objekt i arrayet vårt,arrayet skal liste ut under alle billetter.

//lager bilettobjekter:
const billett = {
    film: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefon: telefon,
    epost: epost

};
billetter.push(billett); //legger billettobjektene i arrayet vårt som vi def tidligere ved hjelp av push metoden

tomInputFelter() //kaller på metoden som tømmer inputfeltene etter bilettregistrering
visAlleBilletter() //arrayet listes ut under alle billetter , altså denne funksjonen oppdaterer listen over billetter

////etter det er registrert en bestillig skal alle inputfeltene blankes, slik at ny bilett kan registreres
//DENNE FUNKSJONEN TØMMER ALLE INPUTFELTENE ETTER AT EN BILLETT ER LAGT TIL, slik at brukeren kan fylle ny billett.
function tomInputFelter() {
    document.getElementById("film").value = ""; //nullstiller inputene
    document.getElementById("antall").value = ""; //nullstiller inputene
    document.getElementById("fornavn").value = ""; //nullstiller inputene
    document.getElementById("etternavn").value = ""; //nullstiller inputene
    document.getElementById("telefon").value = ""; //nullstiller inputene
    document.getElementById("epost").value = ""; //nullstiller inputene
}


function visAlleBilletter() { //viser alle billetter som er kjøpt
    let billettDiv = document.getElementById("Billettkjøp");
    billettDiv.innerHTML = "";
    //bruker en for løkke for å iterere gjennom alle billettene og oppdatere
    for (let i = 0; i < billetter.length; i++) {
        let b = document.createElement("div");
        b.textContent = "Film: " + billetter[i].film + ", Antall: " + billetter[i].antall + " Navn:" + billetter[i].fornavn + " " +
            billetter[i].etternavn + ", Telefon: " + billetter[i].telefon + ", Epost: " + billetter[i].epost;
        billettDiv.append(b);
    }
    $("Billettkjop").html(billettDiv) //billettdiv vil inneholde alle billettene i arrayet vårt.
}

function hentData(){
    $.get("/hentData", function (data){
        console.log("data henter fra server:", data);
        visAlleBilletter(data);
    })//sender objekt til serveren,
}
// vi skal slette data fra serveren nå;
function slettAlle() {
    $.get("/slettAll",function (){ //sender en get foresprøsel for å slette all data
        console.log("all data slettet fra serveren."); //melding til konsollen om at dataen er slettet fra serveren
        slettAlle();
    });
    Billettkjop.length =0;
    $("#billetter").html(""); //sletter dataen fra klienten også
}





