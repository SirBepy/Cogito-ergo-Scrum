var event;
var selectedElem;

function mouseDown(elem) {
    selectedElem = elem;
}

function mouseUp() {
    selectedElem = undefined
    console.log("Ending")
}

function mouse_position(event) {
    if (selectedElem == undefined)
        return;

    console.log("X: ", event.clientX, " Y: ", event.clientY)
    selectedElem.style.top = (event.clientY - 125) + "px"
    selectedElem.style.left = (event.clientX - 125) + "px"
}