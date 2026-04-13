const podaci = {
    projekcije: [
        {
            film: "Avatar",
            vrijeme: "18:00",
            sjedista: [
                {red: "A", broj: 1, status: "slobodno"},
                {red: "A", broj: 2, status: "slobodno"},
                {red: "A", broj: 3, status: "rezervisano"},
                {red: "A", broj: 4, status: "rezervisano"},
                {red: "A", broj: 5, status: "slobodno"},

                {red: "B", broj: 1, status: "slobodno"},
                {red: "B", broj: 2, status: "rezervisano"},
                {red: "B", broj: 3, status: "rezervisano"},
                {red: "B", broj: 4, status: "rezervisano"},
                {red: "B", broj: 5, status: "rezervisano"},

                {red: "C", broj: 1, status: "slobodno"},
                {red: "C", broj: 2, status: "slobodno"},
                {red: "C", broj: 3, status: "slobodno"},
                {red: "C", broj: 4, status: "slobodno"},
                {red: "C", broj: 5, status: "slobodno"},
            ]
        },
        {
            film: "Svadba",
            vrijeme: "20:00",
            sjedista: [
                {red: "A", broj: 1, status: "rezervisano"},
                {red: "A", broj: 2, status: "rezervisano"},
                {red: "A", broj: 3, status: "rezervisano"},
                {red: "A", broj: 4, status: "rezervisano"},
                {red: "A", broj: 5, status: "slobodno"},

                {red: "B", broj: 1, status: "slobodno"},
                {red: "B", broj: 2, status: "rezervisano"},
                {red: "B", broj: 3, status: "rezervisano"},
                {red: "B", broj: 4, status: "rezervisano"},
                {red: "B", broj: 5, status: "rezervisano"},

                {red: "C", broj: 1, status: "slobodno"},
                {red: "C", broj: 2, status: "rezervisano"},
                {red: "C", broj: 3, status: "slobodno"},
                {red: "C", broj: 4, status: "rezervisano"},
                {red: "C", broj: 5, status: "slobodno"},
            ]
        },
        {
            film: "Kum",
            vrijeme: "17:00",
            sjedista: [
                {red: "A", broj: 1, status: "slobodno"},
                {red: "A", broj: 2, status: "rezervisano"},
                {red: "A", broj: 3, status: "rezervisano"},
                {red: "A", broj: 4, status: "slobodno"},
                {red: "A", broj: 5, status: "slobodno"},

                {red: "B", broj: 1, status: "rezervisano"},
                {red: "B", broj: 2, status: "rezervisano"},
                {red: "B", broj: 3, status: "rezervisano"},
                {red: "B", broj: 4, status: "rezervisano"},
                {red: "B", broj: 5, status: "rezervisano"},

                {red: "C", broj: 1, status: "slobodno"},
                {red: "C", broj: 2, status: "slobodno"},
                {red: "C", broj: 3, status: "slobodno"},
                {red: "C", broj: 4, status: "slobodno"},
                {red: "C", broj: 5, status: "slobodno"},
            ]
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    poveziDugmad();
    iscrtajSalu();
});