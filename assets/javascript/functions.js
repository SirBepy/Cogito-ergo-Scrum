var event;
var selectedElem;

function mouseDown(elem) {
    selectedElem = elem;
}

function mouseUp() {
    selectedElem = undefined
    console.log("Ending")
}

function setEvent(event) {
    if (selectedElem == undefined)
        return setData();

    console.log("X: ", event.clientX, " Y: ", event.clientY)
    selectedElem.style.top = (event.clientY - 125) + "px"
    selectedElem.style.left = (event.clientX - 125) + "px"
}

function setData() {

}