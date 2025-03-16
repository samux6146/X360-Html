const screens = ["screen0", "screen1", "screen2"]
let screenPos = 0

window.addEventListener("keydown", function (event) {
    event.preventDefault()
    switch (event.key){
        case "ArrowUp":
            console.log("up")
            document.getElementById("xbox-dialog-container").style.opacity = 1
            break
        case "ArrowDown":
            console.log("down")
            document.getElementById("xbox-dialog-container").style.opacity = 0
            break
        case "ArrowLeft":
            console.log("left")
            if(event.shiftKey){
                focusDisplay("left")
            }
            break
        case "ArrowRight":
            console.log("right")
            if(event.shiftKey){
                focusDisplay("right")
            }
            break
    }
})

function focusDisplay(direction){
    if (direction === "left"){
        if (screenPos === 0) {
            return
        }
        screenPos = screenPos - 1
    }else if (direction === "right"){
        if (screenPos === screens.length - 1) {
            return
        }
        screenPos = screenPos + 1
    }else {
        console.log("direction non existant")
        return
    }
    document.getElementById(screens[screenPos]).scrollIntoView({ behavior: 'smooth', inline: 'center'})
    document.querySelectorAll(".active-page").forEach(element => {
        element.classList.remove("active-page")
    })
    document.getElementById("page-" + screens[screenPos]).classList.add("active-page")
}