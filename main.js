
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

function getInput() {
    const input = document.querySelector("input[type='text'").value
    console.log(typeof input) 
    // const toNumberByParsint = parseInt(input) // alternatywa dla Number()
    const toNumber = Number(input) // jeżeli input to '12' zwraca 12 jako number, jak input to 'qweasd123' to zwrcaa NaN 
    // ciekawostka toFix()  40.toFix(4)  zwróci 40.0000 dział tylko na number
    console.log(typeof toNumber)
    return isNaN(toNumber) ? '1' : input



}


function getPost() {
        const inputVal = getInput() 
        const data = fetch(`https://jsonplaceholder.typicode.com/posts/${inputVal}`)
        .then(res => res.json())  // {"imie": "Kasia"} = > {imie: "Kasia"} to robi .json()
        .then(res => {
            console.log(res)
            // miejsce gdzie możemy operować na danych poranych 
    
                const app = document.getElementById('app')
                console.log(app)
                app.innerHTML = ''
                const mainDiv = document.createElement('div')
                const mainH2 = document.createElement('h2')
                const mainParagraf = document.createElement('p')
                mainH2.innerText = res.title
                mainParagraf.innerText = res.body
    
                mainDiv.appendChild(mainH2)
                mainDiv.appendChild(mainParagraf)
    
                app.appendChild(mainDiv)
    
        })
    }


const btn = document.getElementById('btn')
btn.addEventListener('click', getPost )

const inputCH = document.querySelector("input[type='text'")
inputCH.addEventListener('change', getPost)



// kody błedu 
//https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
//
//
//
//
//


// koljny przykład fetch 

function getAlbums() {
    const data = fetch('http://api.nbp.pl/api/exchangerates/tables/A') // to zwraca nam promis
    console.log(data)

    data.then(res => res.json()).then(res => {

        console.log(res, res[0].rates)
        const rates = res[0].rates

        // chcemy mieć tylko walutę o kodzieres[0].rates "THB"


        // rozwiązanie z filtrem 
     const onlyTHBbyFilter = rates.filter(item => item.code === "THB" || item.code === "USD" || item.code === "GBP") // filter zwraca tablice z el. spełnijącymi warunek item.code === "THB")
     console.log(onlyTHBbyFilter)



         // rozwiązanie z find
         const onlyTHBbyFind = rates.find(item => item.code === "THB") 
         console.log(onlyTHBbyFind)


         // waluty z mid większym od 1 
       const moreOnebyFilter = rates.filter(item => item.mid > 1)
        console.log(moreOnebyFilter)
             const moreOnebyFind = rates.find(item => item.mid  > 1) 
             console.log(moreOnebyFind)


moreOnebyFilter.forEach(element => {
        console.log(element)
        const app = document.getElementById('app')
        const mainDiv = document.createElement('div')
        const mainH2 = document.createElement('h2')
        const mainParagraf = document.createElement('p')
        mainH2.innerText = element.currency + ' ' + element.code
        mainParagraf.innerText = element.mid

        mainDiv.appendChild(mainH2)
        mainDiv.appendChild(mainParagraf)

        app.appendChild(mainDiv)

        });
    })



    //  data.then(res => res.json()) robi coś takiego 
    // wejściowy => {"klucz": "jakaś wartość "}  => wyjście {kulcz: "jakaś wartość "}
    console.log(data)
}



getAlbums()