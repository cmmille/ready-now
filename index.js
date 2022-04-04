const button = document.getElementById("button")
button.addEventListener("click", () =>{
    const audio = new Audio("./ready-now.mp3")
    audio.play()
})