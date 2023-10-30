function CheckboxZmiana(checkbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }
    }
}

/* =========================== podstawy =========================== */
//pierwsze i ostatnie zdanie akapitu

//zamiana tekstu na tekst latwy do przeczytania metoda Podstawy tekstu
function PodstawyTekstuZamiana(tekst, kolorZaznaczonegoTekstu) {
    let akapity = tekst.split('\n');//jezeli konczy sie enterem to odziel na kolejny akapit
    let wynik = '';
    

    //wykonaj tyle razy ile jest akapitow
    for (let i = 0; i < akapity.length; i++) {
        let zdania = akapity[i].split("."); //dzieli na zdania kiedy na koncu ',' lub '.'
        let akapitKoncowy = '';
        

        //wykonaj tyle razy ile jest zdan
        for (let j = 0; j < zdania.length; j++) {
            let zdanie = zdania[j];

            //jezeli usun tekst nie zaznaczone
            if(!document.getElementById("usunTekst").checked){
            if (j === 0 || j === zdania.length - 2) {
                akapitKoncowy += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + zdanie + "</span>";//otoczenie zdania(pierwszego lub ostatniego z danego akapitu) znacznikami <span> oraz dodanie do koncowego akapitu
            } else {
                akapitKoncowy += zdanie;
            }
            if (j < zdania.length - 1) {
                akapitKoncowy += ".";
            }
                
            } else {//usun tekst zaznaczone

                if (j === 0 || j === zdania.length - 2) {
                    akapitKoncowy += zdanie + "<br>";
                }

            }
        }

        wynik += akapitKoncowy;
    }

    document.getElementById("wskazowka").innerText = "Nie skupiaj sie tylko na zaznaczonym tekscie. Czasami warto rowniez poswiecić chwile na kolejne zdanie lub pół, ponieważ dodatkowe informacje zawsze pomagaja lepiej zroxumiec czytany tekst. Z czasem opanujesz umiejetność oszacowania ile wiecej należy prseczytać w celu uzyskania jak najwiekszej ilosci informacji w jak najkrótszym czasie"
    
    return wynik;
}

/* =========================== pomijanie zdan =========================== */
//co drugie zdanie

function PomijanieZdanZamiana(tekst, kolorZaznaczonegoTekstu) {
    let akapity = tekst.split('\n');//jezeli konczy sie enterem to odziel na kolejny akapit
    let wynik = '';

    for(let i = 0; i < akapity.length; i++) {
        let zdania = akapity[i].split('.');
        let akapitKoncowy = '';

        for(let j = 0; j < zdania.length; j++) {
            let zdanie = zdania[j];

            //jezeli usun tekst nie zaznaczone
            if(!document.getElementById("usunTekst").checked){

                if(j % 2 == 0 || j == 0){
                    akapitKoncowy += "<span style=\"background-color:" + kolorZaznaczonegoTekstu + ";\">" + zdanie + "</span>";
                } else {
                    akapitKoncowy += zdanie
                }
                if (j < zdania.length - 1) {
                    akapitKoncowy += ".";
                }

            } else { // usunTekst  zaznaczone

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
//co drugie slowo

function PomijanieSlowZamiana(tekst, kolorZaznaczonegoTekstu) {
    let slowa = tekst.split(" ");
    let wynik = '';

    for (let i = 0; i < slowa.length; i++) {
        let slowo = slowa[i];

        //jezeli usun tekst nie zaznaczone
        if(!document.getElementById("usunTekst").checked){

            if (i % 2 === 0 || i === 0) {
                wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowo + " </span>";
            } else {
                wynik += slowo + " ";
            }
        
        } else { // usunTekst  zaznaczone
            
            if (i % 2 === 0 || i === 0) {
                wynik += slowo + " <br>";
            }

        }
    }

    document.getElementById("wskazowka").innerText = "Warto czytac za pomoca pomijania słów tylko kiedy tekst się już czytało i celem ponownego czytania jest przypomnienie informacji. Techika ta nie jest doskonała i aby używeać jej skutecznie należy posiadać dużą wprawe wszypkim czytaniu. Metoda ta może pomijac wiele waznych informacji, duzo lepsza alternatywa jest metoda pomijania słów. "

    return wynik;
}

/* =========================== grupowe =========================== */
//czytanie od 4 do 6 slow => przerwa od 4 do 6 slow => od poczatku

function grupoweZamiana(tekst, kolorZaznaczonegoTekstu) {

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
        
        //jezeli usun tekst nie zaznaczone
        if(!document.getElementById("usunTekst").checked){

            if(slowoGrupy < grupa) {
                wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowo + " " + "</span>";
            } else {
                wynik += slowo + " ";
            }
        
        } else { // usunTekst  zaznaczone

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
//wysukiwarka podanych fragmentow

// jezeli szukanie zaznaczony to pokaz pole do wyszukiwania
var szukanie = document.getElementById("szukanie");

szukanie.addEventListener("change", function() {
    if (szukanie.checked) {
        document.getElementById("skanowaniewyszukiwarka").style.display = "flex";
        console.log("Checkbox jest zaznaczony.");
    } else {
        document.getElementById("skanowaniewyszukiwarka").style.display = "none";
        console.log("Checkbox nie jest zaznaczony.");
    }
});

function szukanieZamiana(tekst, kolorZaznaczonegoTekstu) {
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
//dlugosc zdania / 3 => srodkowa czesc zaznaczona
function srodkiZamiana(tekst, kolorZaznaczonegoTekstu) {
    let wynik = '';
    let zdania = tekst.split(".");

    for (let i = 0; i < zdania.length; i++) {
        let slowa = zdania[i].split(" ");
        let czescZdania = Math.floor(slowa.length / 3);

        for (let j = 0; j < slowa.length; j++) {
        
            //jezeli usun tekst nie zaznaczone
            if(!document.getElementById("usunTekst").checked){

                if (j >= czescZdania && j < 2 * czescZdania) {
                    wynik += "<span style=\"background-color: " + kolorZaznaczonegoTekstu + ";\">" + slowa[j] + " " + "</span>";
                } else {
                    wynik += slowa[j] + " ";
                }
        
            } else { // usunTekst zaznaczone

                if (j >= czescZdania && j < 2 * czescZdania) {
                    wynik += slowa[j] + " ";
                }
        
            }
        }
        wynik += "<br>";
        
    }
    return wynik;
}

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
        wynik = PodstawyTekstuZamiana(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('PomijanieZdan').checked) {
        wynik = PomijanieZdanZamiana(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('PomijanieSlow').checked) {
        wynik = PomijanieSlowZamiana(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('grupowe').checked) {
        wynik = grupoweZamiana(tekst, kolorZaznaczonegoTekstu);
    } else if(document.getElementById('szukanie').checked) {
        wynik = szukanieZamiana(tekst, kolorZaznaczonegoTekstu);        
    } else if(document.getElementById('srodki').checked) {
        wynik = srodkiZamiana(tekst, kolorZaznaczonegoTekstu);        
    }
    

    if(document.getElementById("krotkieWyrazy").checked) {
        wynik = UsunKrotkieWyrazy(wynik);
    }



    //wyswietlenie wyniku
    wynik = wynik.replace(/\n/g, '<br>');
    document.getElementById("output").innerHTML = wynik;

    //document.getElementById('output').innerHTML = tekst.replace(/\n/g, '<br>');
}


