/* Desenvolva sua lógica aqui ... */

const darkMode = document.querySelector("#sunLight")
const tagUL = document.getElementById("ul-list")

const btnAll = document.getElementById("typeAll")
const btnFilter = document.querySelectorAll(".btn-desactive")

const progressRange = document.getElementById("range-input")
const spanValue = document.getElementById("at-value")

const tagContainer = document.getElementsByClassName("container")

spanValue.innerHTML = `Até R$${progressRange.value * 10 },00`
progressRange.oninput = function () {

    spanValue.innerHTML = `Até R$${progressRange.value*10},00`


}

// 



function liCard(array) {




    let tagLi = document.createElement("li")
    tagLi.classList.add("card-music")
    tagLi.id = array.id

    let imgP = document.createElement("img")
    imgP.src = array.img
    imgP.alt = "img-album";
    imgP.classList.add("img")

    let divInfo = document.createElement("div")
    divInfo.classList.add("infor-card")

    let spanBand = document.createElement("span")
    spanBand.classList.add("tag-music")
    spanBand.innerText = array.band;

    let spanYear = document.createElement("span")
    spanYear.classList.add("tag-music")
    spanYear.innerText = array.year;

    let tagH4 = document.createElement("h4")
    tagH4.classList.add("title-card")
    tagH4.innerText = array.title;

    let divInteration = document.createElement("div")
    divInteration.classList.add("interation-user")

    let tagSpanValue = document.createElement("span")
    tagSpanValue.innerText = `R$${array.price},00`

    let buttonBuy = document.createElement("button")
    buttonBuy.classList.add("btn-buy")
    buttonBuy.innerText = "Comprar"

    divInfo.append(spanBand, spanYear)
    divInteration.append(tagSpanValue, buttonBuy)
    tagLi.append(imgP, divInfo, tagH4, divInteration)


    return tagLi
};

let renderCards = (createCards) => {
    tagUL.innerHTML = ""

    createCards.forEach((initial) => {
        tagUL.append(liCard(initial))
    })
    if (tagUL.innerHTML == "") {
        emptyDiv()
    }
}

renderCards(products)





function filterAll() {

    btnFilter.forEach((button) => {
        button.addEventListener('click', () => {
            tagUL.innerHTML = ""
            let filter = button.innerText
            if (filter === 'Todos') {
                renderCards(products)
                console.log(renderCards(products))
            }
            else {
                let filterSongs = filterbyCategory(filter)
                renderCards(filterSongs)
            }
        })
    })
}


function filterbyCategory(text) {

    let filtered = products.filter(element => element.category.includes(text))

    return filtered
}

filterAll()


function emptyDiv() {
    let divEmpty = document.createElement("div")
    divEmpty.classList.add("divEmpty")

    let tagh3 = document.createElement("h3")
    tagh3.innerText = "Não encontramos em nosso banco de dados"

    divEmpty.appendChild(tagh3)
    tagUL.appendChild(divEmpty)
}

function filterInputSlide() {

    
    progressRange.addEventListener('input', () => {
        let setValue = progressRange.value;

        let progressBar = 'linear-gradient(to right, var(--color-brand-1)' + setValue + '%, var(--color-grey-6-input)' + setValue + '%)'
        progressRange.style.background = progressBar;
 
        let result = products.filter((element) => {
            if(setValue <= 1){
                return element 
                }
            else if(setValue * 10 >= element.price) {
                return element
            }
        })
        renderCards(result)
    })
}
filterInputSlide()



// let progressInput = products.filter(element => {
    //     if(progressRange.value >= element.price){
    //         renderCards(progressInput)
    //     }
    // })
