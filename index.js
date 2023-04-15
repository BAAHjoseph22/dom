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