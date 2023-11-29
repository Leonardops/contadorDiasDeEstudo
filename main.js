
const contador = document.getElementById("contador");
function incrementar() {
    const sumValue = parseInt(contador.innerText) + 1;
    localStorage.setItem("count", sumValue)
    contador.innerHTML = sumValue
}

(function(){
    console.log("scriptexecutando")
    const count = localStorage.getItem("count")
    if(count){
        contador.innerHTML = count
    }
})()