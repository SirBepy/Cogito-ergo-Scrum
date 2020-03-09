
var btnArr;
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

function showAllOptions(optionsBtn) {
    let optionsDiv = optionsBtn.parentElement
    optionsBtn.style.display = "none"

    btnArr = optionsDiv.getElementsByTagName("button")
    // x has to be 1 because we dont want to affect the first button
    let posY = 0
    for (let x = 1; x < btnArr.length; x++) {
        btnArr[x].style.display = "block"
        btnArr[x].style.opacity = "1"
        btnArr[x].style.top = "-20px"
        moveElementY(btnArr[x], posY)
        posY += 35
    }
}

function hideAllOptions(event) {
    console.log(event)
    for (let x = 1; x < btnArr.length; x++) {
        btnArr[x].style.display = "none"
        btnArr[x].style.opacity = "0"
    }
}

function moveElementY(elem, posY) {
    setTimeout(() => {
        if (posY > 0) {
            elem.style.top = (parseInt(elem.style.top) + 5) + "px"
            moveElementY(elem, posY -= 5)
        }
    }, 20);
}

function setData() {

}

/**
 .option-edit {
    top: 15px;
}

.option-delete {
    top: 50px;
}

.option-done {
    top: 85px;
}
 */