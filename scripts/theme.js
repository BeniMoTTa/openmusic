/* Desenvolva sua lógica aqui ... */
const darkModeBtn = document.getElementById("dark-mode")
const titleUpper = document.getElementById("title-upper");
const bodyHTML = document.getElementsByTagName("body")
const buttonsFilters = document.querySelectorAll(".btn-desactive")
const icon = document.getElementById("dark-icon")
const tagHtml = document.querySelector("html")
const userPreference = localStorage.getItem('darkmode')

darkModeBtn.addEventListener('click', function()
{
tagHtml.classList.toggle('dark-mode')
icon.classList.toggle('text-white')



if(tagHtml.classList.contains('dark-mode')){
    localStorage.setItem('darkmode', true)
    icon.src = "./assets/img/sun.jpg"
} else{
    localStorage.removeItem('darkmode')
    icon.src = "./assets/img/moon.jpg"
}

// if(icon.classList.contains('text-white')){
//     icon.src = "./assets/img/sun.jpg"
// }
// else{
//     icon.src = "./assets/img/moon.jpg"
// }


})
if(userPreference){
    tagHtml.classList.add('dark-mode')
    icon.src = "./assets/img/sun.jpg"
}
else if(!userPreference){
    tagHtml.classList.remove('dark-mode')
    icon.src = "./assets/img/moon.jpg"
}


