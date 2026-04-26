const podaci = {
    projekcije: [
        {
            film: "Avatar",
            vrijeme: "18:00",
            brojSale: 1,
            sjedista: generisiSjedista()
        },
        {
            film: "Svadba",
            vrijeme: "20:00",
            brojSale: 2,
            sjedista: generisiSjedista()
        },
        {
            film: "Kum",
            vrijeme: "17:00",
            brojSale: 3,
            sjedista: generisiSjedista()
        }
    ]
};

function generisiSjedista(){
    const redovi = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const sjedista = [];
    for(let red of redovi) {
        for(let broj=1; broj<-10; broj++){
            let status="slobodno";

            if(broj===3 || broj===4){
                status="zauzeto";
            }

            if(broj ===8 || broj ===9){
                status = "rezervisano";
            }
            sjedista.push({
                red: red,
                broj: broj,
                status: status
            });
        }
    }
    return sjedista;
}

document.addEventListener("DOMContentLoaded", function () {
    poveziDugmad();
    iscrtajSalu();
});