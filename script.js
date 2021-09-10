const elForm = document.querySelector("#form")
const elInuput = elForm.querySelector("#input")
const elSelect = elForm.querySelector("#select")
const elList = document.querySelector(".list")

let USD = "10685"
let EUR = "12100"
let RUB = "110"
let GBP = "14782"

addEventListener("submit", function(e){
    e.preventDefault();

    let inputValue = elInuput.value -0

    if(!isNaN(inputValue)){
        if(elSelect.value === "USD"){
            let result = (elInuput.value / USD).toFixed(2) ;
            elList.textContent = result + " " + '$'
        }else if(elSelect.value === "EUR"){
            let result = (elInuput.value / EUR).toFixed(2) ;
            elList.textContent = result + " " + "e"
        }
        else if(elSelect.value === "RUB"){
            let result = (elInuput.value / RUB).toFixed(2) ;
            elList.textContent = result + " " +  "rub"
        }else if(elSelect.value === "GBP"){
            let result = (elInuput.value / GBP).toFixed(2) ;
            elList.textContent = result + " " + "gbp"
        }
    }else{
        elList.textContent = "Raqam kiriting"
    }


    // elList.textContent = (elInuput.value / elSelect.value).toFixed(2) ;

    elInuput.value = "";
})