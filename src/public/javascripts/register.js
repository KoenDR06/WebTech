// find elements of hobbies and courses

const fname = document.getElementById("form__fname");
const iname = document.getElementById("form__iname");
const lname = document.getElementById("form__lname");
const birthday = document.getElementById("form__birthday");
const email = document.getElementById("form__email");
const profilepicture = document.getElementById("form__profilepicture");
const programmajor = document.getElementById("form__programmajor");

const enteredHobbies = document.getElementById("form__entered-hobbies");
const inputHobby = document.getElementById("form__hobby");
const enterHobby = document.getElementById("form__enter-hobby");
function saveHobby() {
    const newEntry = document.createElement("p");
    const newEntryText = document.createTextNode(inputHobby.value);
    newEntry.appendChild(newEntryText);
    const newEntryButton = document.createElement("button");
    const newEntryButtonText = document.createTextNode("Delete");
    newEntryButton.appendChild(newEntryButtonText);
    inputHobby.value = "";
    enteredHobbies.addEventListener("click", function() {newEntry.remove();});
    enteredHobbies.appendChild(newEntry);
    enteredHobbies.appendChild(newEntryButton);
}
enterHobby.addEventListener("click", saveHobby);

const enteredCourses = document.getElementById("form__entered-courses");
const inputCourse = document.getElementById("form__course");
const enterCourse = document.getElementById("form__enter-course");
function saveCourse() {
    const newEntry = document.createElement("p");
    const newEntryText = document.createTextNode(inputCourse.value);
    newEntry.appendChild(newEntryText);
    const newEntryButton = document.createElement("button");
    const newEntryButtonText = document.createTextNode("Delete");
    newEntryButton.appendChild(newEntryButtonText);
    inputCourse.value = "";
    enteredCourses.addEventListener("click", function() {newEntry.remove();});
    enteredCourses.appendChild(newEntry);
    enteredCourses.appendChild(newEntryButton);
}
enterCourse.addEventListener("click", saveCourse);

const password = document.getElementById("form__password");
const confirmpassword = document.getElementById("confirmpassword");

const error = document.getElementById("form__error");
const submitb = document.getElementById("form__submit");

/*
function submitf() {
    // check names 
    // check birthday < today
    var todaysDate = new Date();
    console.log(birthday.value);
    console.log(todaysDate);
    if (birthday.value === todaysDate) {
        console.log("incorrect date");
    }
    // check profilepicture is image
    // all entered hobbies and courses put in seperate lists
    // send all information
    console.log("submitted");
}
submitb.addEventListener("submit", submitf);
*/

submitb.addEventListener("submit", e => {
    let errorMessage = []
    if (fname.value == '' || fname.value == null){
        errorMessage.push("First name is required");
    }

    if (password.value.length < 8){
        errorMessage.push("Password must be at least 8 characters long");
    }

    if (errorMessage.length > 0){
        e.preventDefault();
        error.innerText = errorMessage.join(", ");
    }
});
