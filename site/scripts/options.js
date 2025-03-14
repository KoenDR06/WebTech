// on load create
// in footer:
// Menu one: select an element
// Options: body, articles and sections
// use dom to find options

// Make label for elementMenu
const elementMenuLabel = document.createElement("label");
elementMenuLabel.textContent = "Select element to be modified:";
elementMenuLabel.htmlFor = "element-menu";

// Find all the needed elements
const elementMenu = document.createElement("select");
elementMenu.id = "element-menu";
const body = document.querySelector("body");
const articleList = document.querySelectorAll("article");
const sectionList = document.querySelectorAll("section");
const asideList = document.querySelectorAll("aside");
const footer = document.querySelector("footer");

// Add all the options for the elements for the elementMenu
let element = document.createElement("option");
element.label = body.id;
elementMenu.appendChild(element);
for (let i = 0; i < articleList.length; i++) {
    element = document.createElement("option");
    element.label = articleList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < sectionList.length; i++) {
    element = document.createElement("option");
    element.label = sectionList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < asideList.length; i++) {
    element = document.createElement("option");
    element.label = asideList[i].id;
    elementMenu.appendChild(element);
}

// Menu two: modify the selected element
// Change the font size
// Change the font color

// Make label for fontSelect
const fontSelectLabel = document.createElement("label");
fontSelectLabel.textContent = "Select font:";
fontSelectLabel.htmlFor = "font-select";

// Make list of fonts and add them as options
const fontSelect = document.createElement("select");
fontSelect.id = "font-select";
const fontList = ["Arial", "Verdana", "Helvetica",
    "Times New Roman", "Georgia", "Garamond",
    "Courier New", "Lucida Console", "Monaco"];
for (let i = 0; i < fontList.length; i++) {
    font = document.createElement("option");
    font.label = fontList[i];
    fontSelect.appendChild(font);
}

// Make label for fontSizeSlider
const fontSizeSliderLabel = document.createElement("label");
fontSizeSliderLabel.textContent = "Select font size (16):";
fontSizeSliderLabel.htmlFor = "font-size-slider";

// Make a slider for the font size
const fontSizeSlider = document.createElement("input");
fontSizeSlider.id = "font-size-slider";
fontSizeSlider.type = "range";
fontSizeSlider.min = 8;
fontSizeSlider.max = 24;
fontSizeSlider.value = 16;

// Make label for fontColorInput
const fontColorInputLabel = document.createElement("label");
fontColorInputLabel.textContent = "Select font color:";
fontColorInputLabel.htmlFor = "font-color-input";

// Make options for font color
const fontColorInput = document.createElement("input");
fontColorInput.id = "font-color-input";
fontColorInput.type = "color";

// Make label for backColorInput
const backColorInputLabel = document.createElement("label");
backColorInputLabel.textContent = "Select background color:";
backColorInputLabel.htmlFor = "back-color-input";

// Make options for background color
const backColorInput = document.createElement("input");
backColorInput.id = "back-color-input";
backColorInput.type = "color";
backColorInput.value = "#ffffff";

// append
footer.appendChild(elementMenuLabel);
footer.appendChild(elementMenu);
footer.appendChild(fontSelectLabel);
footer.appendChild(fontSelect);
footer.appendChild(fontSizeSliderLabel);
footer.appendChild(fontSizeSlider);
footer.appendChild(fontColorInputLabel);
footer.appendChild(fontColorInput);
footer.appendChild(backColorInputLabel);
footer.appendChild(backColorInput);

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
applyButton = document.createElement("button");
applyButton.textContent = "Apply changes";
applyButton.addEventListener("click",applyChanges);

footer.appendChild(applyButton);