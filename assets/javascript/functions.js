

var selectedElem;
var x;
var y;

function mouseDown(elem, evt) {
    selectedElem = elem;
    divEvent = evt
    x = evt.offsetX
    y = evt.offsetY
    document.getElementsByTagName("body")[0].setAttribute("onmousemove", "setEvent(event)")
}

function mouseUp() {
    selectedElem = undefined
    document.getElementsByTagName("body")[0].removeAttribute("onmousemove")
}

function setEvent(event) {
    if (selectedElem == undefined)
        return setData();
    selectedElem.style.top = (event.clientY - y) + "px"
    selectedElem.style.left = (event.clientX - x) + "px"
}

function showOption(elem) {
    setTimeout(() => {
        elem.getElementsByClassName("option")[0].style.display = "block"
        setTimeout(() => {
            elem.getElementsByClassName("option")[0].style.display = "block"
            elem.getElementsByClassName("option")[0].style.opacity = "1"
        }, 200)
    }, 300)
}

function hideOption(elem) {
    elem.getElementsByClassName("option")[0].style.opacity = "0"
    setTimeout(() => {
        elem.getElementsByClassName("option")[0].style.display = "none"
    }, 300)
}

function setData() {

}