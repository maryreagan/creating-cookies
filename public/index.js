let url = "http://localhost:4000/"
let body = document.querySelector("body")
let darkButton = document.querySelector("#dark-button")
let lightButton = document.querySelector("#light-button")

darkButton.addEventListener("click", event => {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    getData(url + "dark-mode")

})

lightButton.addEventListener("click", event => {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    getData(url + "light-mode")
})


async function getData(url){
    await fetch(url)
}