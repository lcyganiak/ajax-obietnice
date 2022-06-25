
// pobieram dane użytkowanika ( imie, nazwisko, pesel/nip) to trwa 

// pobieram dane podatkowe uzytkowniak , potrzebuje jego nip/pesel ) to potrzebuje nip/pesle - dostajemy 404

// dzwonie do dziewczyny zaprości na randkę => Obietnicę => Obietnice pozytwynie => randka
// 


function getPosts() {
// czasowniki do zapytań 
// GET - pobiernia z API - nie posiada parametrów 
// POST - 1. Zapisuje nowy rekord w API    2. pobiernia z API z parametrem  
// PUT - Edytuje rekord w API. 
// DELETE - kasuje rekord w APT
const data = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())  // {"imie": "Kasia"} = > {imie: "Kasia"} to robi .json()
.then(res => {
    console.log(res)
    // miejsce gdzie możemy operować na danych poranych 

    res.forEach(element => {
        console.log(element)
        const app = document.getElementById('app')
        const mainDiv = document.createElement('div')
        const mainH2 = document.createElement('h2')
        const mainParagraf = document.createElement('p')
        mainH2.innerText = element.title
        mainParagraf.innerText = element.body

        mainDiv.appendChild(mainH2)
        mainDiv.appendChild(mainParagraf)

        app.appendChild(mainDiv)

    });
})









}


getPosts()
