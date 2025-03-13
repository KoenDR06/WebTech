// on load create
// in footer:
// Menu one: select an element
// Options: body, articles and sections
// use dom to find options

// Make label for elementMenu
var elementMenuLabel = document.createElement("label");
elementMenuLabel.textContent = "Select element to be modified:";
elementMenuLabel.htmlFor = "elementMenu";

// Find all the needed elements
var elementMenu = document.createElement("select");
elementMenu.id = "elementMenu";
var body = document.querySelector("body");
var articleList = document.querySelectorAll("article");
var sectionList = document.querySelectorAll("section");
var asideList = document.querySelectorAll("aside");

// Add all the options for the elements for the elementMenu
var element = document.createElement("option");
element.textContent = body.id;
elementMenu.appendChild(element);
for (let i = 0; i < articleList.length; i++) {
    var element = document.createElement("option");
    element.textContent = articleList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < sectionList.length; i++) {
    var element = document.createElement("option");
    element.textContent = sectionList[i].id;
    elementMenu.appendChild(element);
}
for (let i = 0; i < asideList.length; i++) {
    var element = document.createElement("option");
    element.textContent = asideList[i].id;
    elementMenu.appendChild(element);
}

footer.appendChild(elementMenu);

// Menu two: modify the selected element
// Change the font size
// Change the font color

// Make label for fontSelect
var fontSelectLabel = document.createElement("label");
fontSelectLabel.textContent = "Select font:";
fontSelectLabel.htmlFor = "fontSelect";

// Make list of fonts and add them as options
var fontSelect = document.createElement("select");
var fontList = [ "Arial", "Verdana", "Helvetica",
    "Times New Roman", "Georgia", "Garamond",  
    "Courier New", "Lucida Console", "Monaco"];
for (let i = 0; i < fontList.Length; i++) {
    var font = document.createElement("option");
    font.textContent = fontList[i];
    fontSelect.appendChild(font);
}

// Make label for fontSizeSlider
var fontSizeSliderLabel = document.createElement("label");
fontSizeSliderLabel.textContent = "Select font size:";
fontSizeSliderLabel.htmlFor = "fontSizeSlider";

// Make a slider for the font size
var fontSizeSlider = document.createElement("input");
fontSizeSlider.id = "fontSizeSlider";
fontSizeSlider.type = "range";
fontSizeSlider.min = 8;
fontSizeSlider.max = 24;
fontSizeSlider.value = 16;

// Make label for fontColorInput
var fontColorInputLabel = document.createElement("label");
fontColorInputLabel.textContent = "Select font color:";
fontColorInputLabel.htmlFor = "fontColorInput";

// Make options for font color 
var fontColorInput = document.createElement("input");
fontColorInput.id = "fontColorInput";
fontColorInput.type = "color";

// Make label for backColorInput
var backColorInputLabel = document.createElement("label");
backColorInputLabel.textContent = "Select background color:";
backColorInputLabel.htmlFor = "backColorInput";

// Make options for background color
var backColorInput = document.createElement("input");
backColorInput.id = "backColorInput";
backColorInput.type = "color";

footer.appendChild(fontSelectLabel);
footer.appendChild(fontSelect);
footer.appendChild(fontSizeSliderLabel);
footer.appendChild(fontSizeSlider);
footer.appendChild(fontColorInputLabel);
footer.appendChild(fontColorInput);
footer.appendChild(backColorInputLabel);
footer.appendChild(backColorInput);

function applyChanges() {
    var element = document.getElementById(elementMenu.value);
    element.style.fontFamily = fontSelect.value;
    element.style.fontSize = fontSizeSlider.value;
    element.style.color = fontColorInput.value;
    element.style.backgroundColor = backColorInput.value;
}

applyButton = document.createElement("button");
applyButton.textContent = "Apply changes";
applyButton.addEventListener("click",applyChanges);