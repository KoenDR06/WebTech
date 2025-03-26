// find elements of hobbies and courses

console.log('register.js');

const fname = document.getElementById('form__fname');
const iname = document.getElementById('form__iname');
const lname = document.getElementById('form__lname');
const birthday = document.getElementById('form__birthday');
const email = document.getElementById('form__email');
const profilepicture = document.getElementById('form__profilepicture');
const programmajor = document.getElementById('form__programmajor');

const enteredHobbies = document.getElementById('form__entered-hobbies');
const inputHobby = document.getElementById('form__hobby');
const enterHobby = document.getElementById('form__enter-hobby');
function saveHobby() {
    const newEntry = document.createElement('p');
    const newEntryText = document.createTextNode(inputHobby.value);
    newEntry.appendChild(newEntryText);
    const newEntryButton = document.createElement('button');
    const newEntryButtonText = document.createTextNode('Delete');
    newEntryButton.appendChild(newEntryButtonText);
    inputHobby.value = '';
    enteredHobbies.addEventListener('click', function () {
        newEntry.remove();
    });
    enteredHobbies.appendChild(newEntry);
    enteredHobbies.appendChild(newEntryButton);
}
enterHobby.addEventListener('click', saveHobby);

const enteredCourses = document.getElementById('form__entered-courses');
const inputCourse = document.getElementById('form__course');
const enterCourse = document.getElementById('form__enter-course');
function saveCourse() {
    const newEntry = document.createElement('p');
    const newEntryText = document.createTextNode(inputCourse.value);
    newEntry.appendChild(newEntryText);
    const newEntryButton = document.createElement('button');
    const newEntryButtonText = document.createTextNode('Delete');
    newEntryButton.appendChild(newEntryButtonText);
    inputCourse.value = '';
    enteredCourses.addEventListener('click', function () {
        newEntry.remove();
    });
    enteredCourses.appendChild(newEntry);
    enteredCourses.appendChild(newEntryButton);
}
enterCourse.addEventListener('click', saveCourse);

const password = document.getElementById('form__password');
const confirmPassword = document.getElementById('form__confirm-password');

const error = document.getElementById('form__error');
const submitb = document.getElementById('form__submit');

// Taken from:
// https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

// Taken from:
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
}

submitb.addEventListener('click', (e) => {
    let errorMessage = [];
    if (fname.value == '' || fname.value == null) {
        errorMessage.push('First name is required.');
    }

    if (lname.value == '' || lname.value == null) {
        errorMessage.push('Last name is required.');
    }

    console.log(birthday.value);
    const todaysDateAndTime = new Date();
    todaysDate = formatDate(todaysDateAndTime);
    console.log(todaysDate);

    if (birthday.value == '' || birthday.value == null) {
        errorMessage.push('Birthday is required.');
    } else if (todaysDate.localeCompare(birthday.value) === -1) {
        errorMessage.push('Birthday can not be in the future.');
    }

    // Check email is not null

    if (!validateEmail(email.value)) {
        errorMessage.push('Invalid email.');
    } else {
        // Check if email is in database
        // If email is already known, error
    }

    if (password.value.length < 8) {
        errorMessage.push('Password must be at least 8 characters long.');
    }

    if (password.value != confirmPassword.value) {
        errorMessage.push('Password is not correctly confirmed.');
    }

    if (errorMessage.length > 0) {
        e.preventDefault();
        const oldErrorP = document.getElementById('form__error-p');
        const newErrorP = document.createElement('p');
        const errorText = document.createTextNode(
            'Error: ' + errorMessage.join(' '),
        );
        newErrorP.appendChild(errorText);
        error.appendChild(newErrorP);
        oldErrorP.remove();
        newErrorP.setAttribute('id', 'form__error-p');
    } else if (errorMessage.length == 0) {
        // hash password
        // send information to database to be stored
    }
});
