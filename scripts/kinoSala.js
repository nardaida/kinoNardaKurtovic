let trenutnaProjekcija = 0;

function validirajPodatke(podaci) {
    if (!podaci || !Array.isArray(podaci.projekcije) || podaci.projekcije.length === 0) {
        return false;
    }

    const dozvoljeniStatusi = ["slobodno", "zauzeto", "rezervisano"];

    for (let projekcija of podaci.projekcije) {
        if(
        !projekcija.film ||
        !projekcija.vrijeme ||
        projekcija.brojSale === undefined ||
        !Array.isArray(projekcija.sjedista)
    ){
        return false;
    }

        for (let sjediste of projekcija.sjedista) {
            if (
                !sjediste.red ||
                sjediste.broj === undefined ||
                !dozvoljeniStatusi.includes(sjediste.status)
            ) {
                return false;
            }
        }
    }

    return true;
}

function prikaziPorukuGreske() {
    const salaDiv = document.getElementById("sala");
    if (salaDiv) {
        salaDiv.innerHTML = `<p class="greska">Podaci nisu validni!</p>`;
    }
}

function grupisiPoRedovima(sjedista) {
    const redovi = {};

    for (let sjediste of sjedista) {
        if (!redovi[sjediste.red]) {
            redovi[sjediste.red] = [];
        }
        redovi[sjediste.red].push(sjediste);
    }

    return redovi;
}

function iscrtajSalu() {
    const salaDiv = document.getElementById("sala");

    if (!salaDiv) {
        return;
    }

    if (!validirajPodatke(podaci)) {
        prikaziPorukuGreske();
        return;
    }

    salaDiv.innerHTML = "";

    const projekcija = podaci.projekcije[trenutnaProjekcija];

    const infoDiv = document.createElement("div");
    infoDiv.className = "informacije";
    infoDiv.innerHTML = `
        <h1>${projekcija.film}</h1>
        <p><strong>Vrijeme projekcije:</strong> ${projekcija.vrijeme}</p>
        <p><strong>Broj sale:</strong> ${projekcija.brojSale}</p>
        `;
    salaDiv.appendChild(infoDiv);

    const platnoDiv = document.createElement("div");
    platnoDiv.className = "platno";
    platnoDiv.textContent = "PLATNO";
    salaDiv.appendChild(platnoDiv);

    const sjedistaKontejner = document.createElement("div");
    sjedistaKontejner.className = "sjedista-kontejner";

    const redovi = grupisiPoRedovima(projekcija.sjedista);

    for (let oznakaReda in redovi) {
        const redDiv = document.createElement("div");
        redDiv.className = "red";

        const oznakaDiv = document.createElement("div");
        oznakaDiv.className = "oznaka-reda";
        oznakaDiv.textContent = oznakaReda;
        redDiv.appendChild(oznakaDiv);

        redovi[oznakaReda].forEach((sjediste) => {
            const sjedisteDiv = document.createElement("div");
            sjedisteDiv.className = `sjediste ${sjediste.status}`;
            sjedisteDiv.textContent = sjediste.broj;
            sjedisteDiv.title = `Red ${sjediste.red}, Sjedište ${sjediste.broj}, Status: ${sjediste.status}`;

            sjedisteDiv.addEventListener("click", function () {
                if (sjediste.status === "slobodno") {
                    const trazeniIndex = podaci.projekcije[trenutnaProjekcija].sjedista.findIndex(
                        s => s.red === sjediste.red && s.broj === sjediste.broj
                    );

                    if (trazeniIndex !== -1) {
                        podaci.projekcije[trenutnaProjekcija].sjedista[trazeniIndex].status = "rezervisano";
                        iscrtajSalu();
                    }
                }
            });

            redDiv.appendChild(sjedisteDiv);
        });

        sjedistaKontejner.appendChild(redDiv);
    }

    salaDiv.appendChild(sjedistaKontejner);
}

function prethodnaProjekcija() {
    if (trenutnaProjekcija > 0) {
        trenutnaProjekcija--;
        iscrtajSalu();
    }
}

function sljedecaProjekcija() {
    if (trenutnaProjekcija < podaci.projekcije.length - 1) {
        trenutnaProjekcija++;
        iscrtajSalu();
    }
}

function poveziDugmad() {
    const prethodnaBtn = document.getElementById("prethodnaBtn");
    const sljedecaBtn = document.getElementById("sljedecaBtn");

    if (prethodnaBtn) {
        prethodnaBtn.addEventListener("click", prethodnaProjekcija);
    }

    if (sljedecaBtn) {
        sljedecaBtn.addEventListener("click", sljedecaProjekcija);
    }
}