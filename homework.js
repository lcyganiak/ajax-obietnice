

const foto = 
[
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
]


// zadanie numer 1 
// zad 1.
// function createTag(nazweTag, nazwaClass, text) {
    // napisz funkcję do tworzenia tagów HTML z classą i tekstem 
    // podpowiedzi pamętaj o return
    // }
/*
    nazweTag musi być tagiem html podanym jako string 
    nazwaClass string z nazwą class dla elemntu 
    text tesk który ma pojawić sie w HMTL np. tytył 
    nextAtribit koljny atrybut do tag HTML np. href dla a czy src dla img , w przypadku kiedy nie che go dodawać przekazuję pusty string
    valueNextAtribit  wartość dla nextAtribit, w przypadku kiedy nie che go dodawać przekazuję pusty string

*/
// zadanie 1
 function createTag(nazweTag, nazwaClass, text, nextAtribit, valueNextAtribit) { 
    const newEl = document.createElement(nazweTag)
    newEl.setAttribute('class', nazwaClass) // alternatywa dla dodanie class  newEl.classList.add(nazwaClass)
    newEl.innerText = text
    if(nextAtribit === '' && valueNextAtribit === '') {
        return newEl
    } 
    console.log(1325)
    newEl.setAttribute(nextAtribit,valueNextAtribit )
    return newEl
    
 }
// zadanie 2 
 function showFoto() {

    const app = document.getElementById('app')
    app.style.display = 'grid'
    app.style.gridTemplateColumns = 'auto auto auto'
    foto.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('grid-item')

        // const mainH1 =  document.createElement('h1')
        // mainH1.classList.add('title')
        // mainH1.innerText = item.title
        // alternatywa z finkcja dla h1 
        const mainH1WithFun = createTag('h1', 'title', item.title, '', '')

        const mainIMG = createTag('img', 'img-foto', '', 'src', item.thumbnailUrl)
        newDiv.appendChild(mainH1WithFun)
        newDiv.appendChild(mainIMG)

        app.appendChild(newDiv)


    })

 }

 showFoto()

const btn = document.getElementById('btn')
 btn.addEventListener('click',() => createTag("h1", "nazwaklasy", "textWSrodku", '', ''))

 btn.addEventListener('click',showFoto)