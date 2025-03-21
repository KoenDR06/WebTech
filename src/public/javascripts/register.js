// find elements of hobbies and courses

const enteredHobbies = document.getElementById("form__enteredHobbies");
const inputHobby = document.getElementById("form__hobby");
const enterHobby = document.getElementById("form__enter-hobby");
const enteredCourses = document.getElementById("form__enteredCourses");
const inputCourse = document.getElementById("form__course");
const enterCourse = document.getElementById("form__enter-course");

function saveHobby() {
    const newEntry = document.createElement("P");
    var newEntryText = document.createTextNode(inputHobby)
    newEntry.appendChild(newEntryText)
    const newEntryButton = document.createElement("button");
    newEntryButton.value = "Delete";
    inputHobby.value = "";
    enteredHobbies.appendChild(newEntry);
    enteredHobbies.appendChild(document.createElement("br"));
}

enterHobby.addEventListener("click", saveHobby);