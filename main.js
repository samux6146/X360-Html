const screens = ["screen0", "screen1", "screen2"]
let screenPos = 0

window.addEventListener("keydown", function (event) {
    event.preventDefault()
    switch (event.key){
        case "ArrowUp":
            console.log("up")
            break;
        case "ArrowDown":
            console.log("down")
            break;
        case "ArrowLeft":
            console.log("left")
            if(event.shiftKey){
                focusDisplay("left")
            }
            break;
        case "ArrowRight":
            console.log("right")
            if(event.shiftKey){
                focusDisplay("right")
            }
            break;
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
}