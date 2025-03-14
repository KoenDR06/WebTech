// on load create
// in footer:
// Menu one: select an element
// Options: body, articles and sections
// use dom to find options

// Find all the needed elements
const body = document.querySelector("body");
const options = document.querySelectorAll("article, section, aside");
const footer = document.querySelector("footer");

// Add all the options for the elements for the elementMenu
const elementMenu = document.getElementById("footer__element-menu");
const bodyElement = document.createElement("option");
bodyElement.label = "body";
elementMenu.appendChild(bodyElement);
for (let i = 0; i < options.length; i++) {
    const element = document.createElement("option");
    element.label = options[i].id;
    elementMenu.appendChild(element);
}

// Menu two: modify the selected element
// Change the font size
// Change the font color

// Make list of fonts and add them as options
const fontSelect = document.getElementById("footer__font-select");
const fontList = ["Arial", "Verdana", "Helvetica",
    "Times New Roman", "Georgia", "Garamond",
    "Courier New", "Lucida Console", "Monaco"];
for (let i = 0; i < fontList.length; i++) {
    font = document.createElement("option");
    font.label = fontList[i];
    fontSelect.appendChild(font);
}

const fontSizeSliderLabel = document.getElementById("footer__font-size-input-label");
const fontSizeSlider = document.getElementById("footer__font-size-slider");
const fontColorInput = document.getElementById("footer__font-color-input");
const backColorInput = document.getElementById("footer__back-color-input");

// function to apply selected options
function applyChanges() {
    selectedElement = document.getElementById(elementMenu.selectedOptions[0].label);
    selectedElement.style.fontFamily = fontSelect.selectedOptions[0].label;
    selectedElement.style.fontSize = fontSizeSlider.value + "px";
    fontSizeSliderLabel.textContent = `Select font size (${fontSizeSlider.value}):`;
    selectedElement.style.color = fontColorInput.value;
    selectedElement.style.backgroundColor = backColorInput.value;
    console.log("changes applied")
}

// button to apply changes
applyButton = document.getElementById("footer__button");
applyButton.addEventListener("click",applyChanges);
