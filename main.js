const timeIsUp = () => { 
const button = document.querySelector("button")
button.textContent = "Objednat"
}
setTimeout(timeIsUp, 8000)

const activate = (setTimeout) => {
   return (document.getElementById("btn-order").disabled = false)
}



const changeName = ()=> {
    const button = document.querySelector("#btn-order")

button.textContent = "Objednáno"
}

const change = document.querySelector("#btn-order")
change.addEventListener("click", changeName)
