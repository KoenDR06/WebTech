// on load create
// in footer:
// Menu one: select an element
// Options: body, articles and sections
// use dom to find options

// Make label for elementMenu
const elementMenuLabel = document.createElement("label");
elementMenuLabel.textContent = "Select element to be modified:";
elementMenuLabel.htmlFor = "elementMenu";

// Find all the needed elements
const elementMenu = document.createElement("select");
elementMenu.id = "elementMenu";
const body = document.querySelector("body");
const articleList = document.querySelectorAll("article");
const sectionList = document.querySelectorAll("section");
const asideList = document.querySelectorAll("aside");
const footer = document.querySelector("footer");

// Add all the options for the elements for the elementMenu
let element = document.createElement("option");
element.textContent = body.id;
elementMenu.appendChild(element);
for (let i = 0; i < articleList.length; i++) {
    element = document.createElement("option");
    element.textContent = articleList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < sectionList.length; i++) {
    element = document.createElement("option");
    element.textContent = sectionList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < asideList.length; i++) {
    element = document.createElement("option");
    element.textContent = asideList[i].id;
    elementMenu.appendChild(element);
}

footer.appendChild(elementMenu);

// Menu two: modify the selected element
// Change the font size
// Change the font color

// Make label for fontSelect
const fontSelectLabel = document.createElement("label");
fontSelectLabel.textContent = "Select font:";
fontSelectLabel.htmlFor = "fontSelect";

// Make list of fonts and add them as options
const fontSelect = document.createElement("select");
const fontList = ["Arial", "Verdana", "Helvetica",
    "Times New Roman", "Georgia", "Garamond",
    "Courier New", "Lucida Console", "Monaco"];
for (let i = 0; i < fontList.Length; i++) {
    const font = document.createElement("option");
    font.textContent = fontList[i];
    fontSelect.appendChild(font);
}

// Make label for fontSizeSlider
const fontSizeSliderLabel = document.createElement("label");
fontSizeSliderLabel.textContent = "Select font size:";
fontSizeSliderLabel.htmlFor = "fontSizeSlider";

// Make a slider for the font size
const fontSizeSlider = document.createElement("input");
fontSizeSlider.id = "fontSizeSlider";
fontSizeSlider.type = "range";
fontSizeSlider.min = 8;
fontSizeSlider.max = 24;
fontSizeSlider.value = 16;

// Make label for fontColorInput
const fontColorInputLabel = document.createElement("label");
fontColorInputLabel.textContent = "Select font color:";
fontColorInputLabel.htmlFor = "fontColorInput";

// Make options for font color 
const fontColorInput = document.createElement("input");
fontColorInput.id = "fontColorInput";
fontColorInput.type = "color";

// Make label for backColorInput
const backColorInputLabel = document.createElement("label");
backColorInputLabel.textContent = "Select background color:";
backColorInputLabel.htmlFor = "backColorInput";

// Make options for background color
const backColorInput = document.createElement("input");
backColorInput.id = "backColorInput";
backColorInput.type = "color";

// append
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
    const element = document.getElementById(elementMenu.value);
    element.style.fontFamily = fontSelect.value;
    element.style.fontSize = fontSizeSlider.value;
    element.style.color = fontColorInput.value;
    element.style.backgroundColor = backColorInput.value;
}

// button to apply changes
applyButton = document.createElement("button");
applyButton.textContent = "Apply changes";
applyButton.addEventListener("click",applyChanges);