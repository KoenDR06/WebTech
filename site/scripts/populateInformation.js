// $(element).addEventListener("click", function, false/true);

document.querySelector("article").addEventListener("click", parseElement, false);
document.querySelector("h1").addEventListener("click", parseElement, false);
document.querySelector("#useful-sites").addEventListener("click", parseElement, false);
document.querySelector("#practical-information").addEventListener("click", parseElement, false);
document.querySelector("#you-have-rights").addEventListener("click", parseElement, false);
document.querySelector("#bike-parking").addEventListener("click", parseElement, false);

function parseElement(event) {
    var element = event.target.parentElement.id;

    if (element != "article") {
        selectMenu(element);
        console.log(element);
    }
    else{
        selectMenu(element);
        event.stopPropagation();
    }
}

function selectMenu(element) {

    for (let option of elementMenu.options) {

        if (option.label == element) {
            selectedElement = document.getElementById(option.label);
            option.selected = true;
            break;
        }
    }
}