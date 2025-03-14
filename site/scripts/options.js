// on load create
// in footer:
// Menu one: select an element
// Options: body, articles and sections
// use dom to find options

// Find all the needed elements
const body = document.querySelector("body");
const options = document.querySelectorAll("article, section, aside");

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
    const font = document.createElement("option");
    font.label = fontList[i];
    fontSelect.appendChild(font);
}

const fontSizeSliderLabel = document.getElementById("footer__font-size-input-label");
const fontSizeSlider = document.getElementById("footer__font-size-slider");
const fontColorInput = document.getElementById("footer__font-color-input");
const backColorInput = document.getElementById("footer__back-color-input");

function clearOldChanges(parent) {
    for (let child of parent.children){
        child.style = "";
        if (child.firstChild) {
            clearOldChanges(child);
        }
    }
}

// function to apply selected options
function applyChanges() {
    const selectedElement = document.getElementById(elementMenu.selectedOptions[0].label);

    clearOldChanges(selectedElement);

    fontSizeSliderLabel.textContent = `Select font size (${fontSizeSlider.value}):`;
    selectedElement.style.setProperty("fontFamily", fontSelect.selectedOptions[0].label, "important");
    selectedElement.style.setProperty("fontSize", fontSizeSlider.value + "px", "important");
    selectedElement.style.setProperty("color", fontColorInput.value, "important");
    selectedElement.style.setProperty("backgroundColor", backColorInput.value, "important");

    // Resize the collapsible sections
    for (let element of document.querySelectorAll("section.scroll-target section.team-member")) {
        if (element.style.maxHeight) element.style.maxHeight = element.scrollHeight + "px";
    }
}

// button to apply changes
applyButton = document.getElementById("footer__button");
applyButton.addEventListener("click", applyChanges);
