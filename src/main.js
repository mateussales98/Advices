async function main(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceObject = await response.json();
    let main = document.querySelector(".main")
    let paragraph = document.querySelector(".advice")
    paragraph.textContent = '...'
    paragraph.textContent = adviceObject.slip.advice
}