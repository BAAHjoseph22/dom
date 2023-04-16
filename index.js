var buttonsPlus = document.getElementsByClassName("plus")
var buttonsMoins = document.getElementsByClassName("moins")
var buttonsSupprimer= document.getElementsByClassName("supprimer")

console.log(buttonsPlus)
console.log(buttonsMoins)
console.log(buttonsSupprimer)

// gérer les bouttons supprimer
for (let index=0; index < buttonsSupprimer.length; index ++) {
    buttonsSupprimer[index].addEventListener("click", ()=>{
       let parent = buttonsSupprimer[index].parentElement
       let grandParent = buttonsSupprimer[index].parentElement.parentElement

       console.log(parent) 
       console.log(grandParent)

       grandParent.remove()
    })
}

// gérer les bouttons plus
for (let index = 0; index < buttonsPlus.length; index ++) {

    buttonsPlus[index].addEventListener("click", ()=> {
        let parent = buttonsPlus[index].parentElement
        let input = parent.nextElementSibling
        let inputValue = parseInt(input.value) 
        input.value = inputValue + 1
        
        sousTotal()
        console.log(parent) 
        console.log(input.value)
        
    })
}

// gérer les bouttons moins
for (let index = 0; index < buttonsMoins.length; index ++) {

    buttonsMoins[index].addEventListener("click", ()=> {
        let parent = buttonsMoins[index].parentElement
        let input = parent.nextElementSibling
        let inputValue = parseInt(input.value) 
        if (inputValue > 0) {
            input.value = inputValue - 1
        }
    
        sousTotal()
        console.log(parent) 
        console.log(input.value)
        
    })
}

function sousTotal() {
    var allPrices = document.getElementsByClassName("prix")
    var sousTotalSpan = document.getElementsByClassName("soustotal")
    for (let index = 0; index < allPrices.length; index++) {
        const quantite = allPrices[index].parentElement.nextElementSibling.nextElementSibling.value;
        const quantiteInt = parseInt(quantite)
        const price = parseInt(allPrices[index].innerHTML)
        const sousTotal = quantiteInt * price
        sousTotalSpan[index].innerHTML = sousTotal
        console.log(sousTotal)
        
    }     
}


