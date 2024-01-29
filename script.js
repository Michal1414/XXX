/* =========================== pierwsze ostatnie zdanie akapitu =========================== */
// Usuniecie/zaznaczenie pierwszego i ostatniego zdanie akapitu
// Wyswietlenie tekstu
function PierwszeOstatnieZdanieAkapitu(tekst, kolorZaznaczonegoTekstu) {
    let akapity = tekst.split('\n');
    let wynik = '';
    
    for (let i = 0; i < akapity.length; i++) {
        let zdania = akapity[i].split(".");
        let akapitKoncowy = '';
        
        for (let j = 0; j < zdania.length; j++) {
            let zdanie = zdania[j];

            if(!document.getElementById("usunTekst").checked){
            if (j === 0 || j === zdania.length - 2) {
                akapitKoncowy += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + zdanie + "</span>";
            } else {
                akapitKoncowy += zdanie;
            }
            if (j < zdania.length - 1) {
                akapitKoncowy += ".";
            }
                
            } else {

                if (j === 0 || j === zdania.length - 2) {
                    akapitKoncowy += zdanie + "<br><br>";
                }

            }
        }
        akapitKoncowy += "<br>";

        wynik += akapitKoncowy;
    }

    document.getElementById("wskazowka").innerText = "Nie skupiaj sie tylko na zaznaczonym tekscie. Czasami warto rowniez poswiecić chwile na kolejne zdanie lub pół, ponieważ dodatkowe informacje zawsze pomagaja lepiej zroxumiec czytany tekst. Z czasem opanujesz umiejetność oszacowania ile wiecej należy prseczytać w celu uzyskania jak najwiekszej ilosci informacji w jak najkrótszym czasie"
    
    return wynik;
}

/* =========================== pomijanie zdan =========================== */
// Usuniecie/zaznaczenie co drugiego zdania
// Wyswietlrnie tekstu
function CoDrugieZdanie(tekst, kolorZaznaczonegoTekstu) {
    let akapity = tekst.split('\n');
    let wynik = '';

    for(let i = 0; i < akapity.length; i++) {
        let zdania = akapity[i].split('.');
        let akapitKoncowy = '';

        for(let j = 0; j < zdania.length; j++) {
            let zdanie = zdania[j];

            if(!document.getElementById("usunTekst").checked){

                if(j % 2 == 0 || j == 0){
                    akapitKoncowy += "<span style=\"background-color:" + kolorZaznaczonegoTekstu + ";\">" + zdanie + "</span>";
                } else {
                    akapitKoncowy += zdanie
                }
                if (j < zdania.length - 1) {
                    akapitKoncowy += ".";
                }

            } else {

                if(j % 2 == 0 || j == 0){
                    akapitKoncowy += zdanie + ". " + "<br>";
                }

            }
        }

        wynik += akapitKoncowy;
    }

    document.getElementById("wskazowka").innerText = "Metoda pomijania słów polega na tym samym co metoda pomijania zdan jednak ma jedna ogroma przewage nad metoda pomijania słów. Mianowicie czytajac metodą pomijania słów zyskuje sie o wiele wiecej informacji, nie tracac przy tym czasu. Jednak aby sprawnie czytac w ten sposób trzeba dużo ćwiczyc i wiedieć jakie slowa pomijać" 
    
    return wynik;
}

/* =========================== pomijanie slow =========================== */
//Usuniecie/Wyswietlenie co drugiego slowa
//Wyswietlenie tekstu
function CoDrugieSlowo(tekst, kolorZaznaczonegoTekstu) {
    let slowa = tekst.split(" ");
    let wynik = '';

    for (let i = 0; i < slowa.length; i++) {
        let slowo = slowa[i];

        if(!document.getElementById("usunTekst").checked){

            if (i % 2 === 0 || i === 0) {
                wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowo + " </span>";
            } else {
                wynik += slowo + " ";
            }
        
        } else {
            
            if (i % 2 === 0 || i === 0) {
                wynik += slowo + " <br>";
            }

        }
    }

    document.getElementById("wskazowka").innerText = "Warto czytac za pomoca pomijania słów tylko kiedy tekst się już czytało i celem ponownego czytania jest przypomnienie informacji. Techika ta nie jest doskonała i aby używeać jej skutecznie należy posiadać dużą wprawe wszypkim czytaniu. Metoda ta może pomijac wiele waznych informacji, duzo lepsza alternatywa jest metoda pomijania słów. "

    return wynik;
}

/* =========================== grupowe =========================== */
// Usuniecie/zaznaczenie od 4 do 6 slow => przerwa od 4 do 6 slow => od poczatku
// Wyswietlenie tekstu
function CoDrugaGrupaSlow(tekst, kolorZaznaczonegoTekstu) {

    slowa = tekst.split(" ");
    let wynik = '';

    let grupa = Math.floor(Math.random() * (4 - 6 + 1)) + 4;
    let slowoGrupy = 0;

    for(let i = 0; i < slowa.length; i++) {

        slowoGrupy++;

        if(slowoGrupy == (2 * grupa)) {
            grupa = Math.floor(Math.random() * (4 - 6 + 1)) + 4;
            slowoGrupy = 0;
        }
        
        let slowo = slowa[i];

        if(!document.getElementById("usunTekst").checked){

            if(slowoGrupy < grupa) {
                wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowo + " " + "</span>";
            } else {
                wynik += slowo + " ";
            }
        
        } else {

            if(slowoGrupy < grupa) {
                wynik += slowo + " ";
            }
            if(slowoGrupy == grupa) {
                wynik += "<br>";
            }
        
        }
    }
    
    document.getElementById("wskazowka").innerText = "Czytanie grupowe polega na pomijaniu grupy słów (około 4 - 7 słów), a nastepnie czytanie kolejnej grupy słów (około 4 - 7 słów). Sposób ten może miec powównywalna prędkość i dokładność do metody pomijania słów, jednak wiele ludzi uważa, że wygodniej i szybciej czyta się metoda czytanią gupowego niż metodą pomijania słów. "

    return wynik;
}

/* =========================== szukanie =========================== */

var szukanie = document.getElementById("szukanie");

// Jeżeli wybrano opcje szukania wyswietlnie textarea do wpisania szukanych fragmetow
szukanie.addEventListener("change", function() {
    if (szukanie.checked) {
        document.getElementById("skanowaniewyszukiwarka").style.display = "flex";
        console.log("Checkbox jest zaznaczony.");
    } else {
        document.getElementById("skanowaniewyszukiwarka").style.display = "none";
        console.log("Checkbox nie jest zaznaczony.");
    }
});

// Usuniecie/Wyswietlenie wyszukiwanych fragmentow tekstu
function SzukanieWTekscie(tekst, kolorZaznaczonegoTekstu) {
    let wynik = '';
    let szukane = document.getElementById("wyszukiwarkaSzukanie").value.split(",");

    for(let i = 0; i < szukane.length; i++) {

        let szukanyFragment = szukane[i];

        let podzielonytekst = tekst.split(szukanyFragment);

        tekst = podzielonytekst.join("<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + szukanyFragment + "</span>");
    }
    wynik = tekst;
    
    document.getElementById("wskazowka").innerText = "Wyszukiwanie jest użyteczne tylko kiedy masz podstawową wiedzę o czym jest tekst. Wyszukiwania warto uzywac kiedy potrzebujesz szybko odnaleźć wiadomości z tekstu, metoda ta oszcedza wiele czasu, a dodtkowo jest bardzo skuteczna. Z tą metodą nie można używać opcji \"Usuń tekst\""

    return wynik;
}


/* =========================== srodki =========================== */
// Usuniecie/Wyswietlenie srodków zdan 
//dlugosc zdania / 3 -> srodkowa czesc zaznaczona
function SrodkiZdan(tekst, kolorZaznaczonegoTekstu) {
    let wynik = '';
    let zdania = tekst.split(".");

    for (let i = 0; i < zdania.length; i++) {
        let slowa = zdania[i].split(" ");
        let czescZdania = Math.floor(slowa.length / 3);

        for (let j = 0; j < slowa.length; j++) {

            if(!document.getElementById("usunTekst").checked){

                if (j >= czescZdania && j < 2 * czescZdania) {
                    wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowa[j] + " " + "</span>";
                } else {
                    wynik += slowa[j] + " ";
                }
        
            } else {

                if (j >= czescZdania && j < 2 * czescZdania) {
                    wynik += slowa[j] + " ";
                }
        
            }
        }
        wynik += "<br>";
        
    }
    return wynik;
}

//Usuniecie wyrazów składajacych sie z wiekszej ilosci znakow niz 5
function UsunKrotkieWyrazy(tekst) {
    let wynik = '';
    let slowa = tekst.split(" ");

    for(let i = 0; i < slowa.length; i++) {
        if(slowa[i].length < 5) {
            wynik += "<span>" + slowa[i] + " " + "</span>";
        } else {
            wynik += slowa[i] + " ";
        }
    }
    return wynik;
}

//Usuniecie wyrazów składajacych sie z wiekszej ilosci znakow niz 5
function UsunDlugieWyrazy(tekst) {
    let wynik = '';
    let slowa = tekst.split(" ");

    for(let i = 0; i < slowa.length; i++) {
        if(slowa[i].length > 11) {
            wynik += "<span>" + slowa[i] + "</span>" + " ";
        } else {
            wynik += slowa[i] + " ";
        }
    }
    return wynik;
}

// Pobranie tekstu od uzytkownika
// na podstawie ustawien wywołanie odpowiedniej funkcji odpowiadajacej za wyswietlenie i przerobienie tekstu
function PobranieTekstu() {
    document.getElementById("skanowaniewyszukiwarka").style.display = "none";

    let tekst = document.getElementById('tekst').value;
    document.getElementById('tekst').value = '';


    if(document.getElementById("krotkieWyrazy").checked) {
        tekst = UsunKrotkieWyrazy(tekst);
    }
    if(document.getElementById("dlugieWyrazy").checked) {
        tekst = UsunDlugieWyrazy(tekst);
    }


    let kolorZaznaczonegoTekstu = document.getElementById("kolorZaznaczenia").value;

    let wynik;

    if(document.getElementById('podstawyTekstu').checked) {
        wynik = PierwszeOstatnieZdanieAkapitu(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('PomijanieZdan').checked) {
        wynik = CoDrugieZdanie(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('PomijanieSlow').checked) {
        wynik = CoDrugieSlowo(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('grupowe').checked) {
        wynik = CoDrugaGrupaSlow(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('szukanie').checked) {
        wynik = SzukanieWTekscie(tekst, kolorZaznaczonegoTekstu);        
    } else if(document.getElementById('srodki').checked) {
        wynik = SrodkiZdan(tekst, kolorZaznaczonegoTekstu);        
    }
    

    if(document.getElementById("krotkieWyrazy").checked) {
        wynik = UsunKrotkieWyrazy(wynik);
    }

    wynik = wynik.replace(/\n/g, '<br>');
    document.getElementById("output").innerHTML = wynik;
}


