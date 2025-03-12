class Person {
    #firstName;
    #lastName;
    #title;

    constructor(json) {
        this.#firstName = json.first_name;
        this.#lastName = json.last_name;
        this.#title = json.title ? json.title : "";
    }

    get firstName() {return this.#firstName}
    get lastName() {return this.#lastName}
    get title() {return this.#title}

    set firstName(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#firstName = value;
    }

    set lastName(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#lastName = value;
    }

    set title(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#title = value;
    }
}

class Student extends Person {
    #age;
    #email;
    #hobbies;
    #photo;
    #major;
    #courses;

    constructor(json) {
        super(json);

        this.#age = json.age;
        this.#email = json.email;
        this.#hobbies = json.hobbies;
        this.#photo = json.profile_picture;
        this.#major = json.major;
        this.#courses = json.courses;
    }

    get age() {return this.#age}
    get email() {return this.#email}
    get hobbies() {return this.#hobbies}
    get photo() {return this.#photo}
    get major() {return this.#major}
    get courses() {return this.#courses}

    set age(value) {
        if (!value instanceof Integer ||
            (value > 0 ) ) return;
        this.#age = value;
    }

    set email(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#email = value;
    }

    set hobbies(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#hobbies = value;
    }

    set photo(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#photo = value;
    }

    set major(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#major = value;
    }

    set courses(value) {
        if (!value instanceof String ||
            value === "") return;
        this.#courses = value;
    }
}

const aboutContainer = document.querySelector("article > section");
const fileInput = aboutContainer.children[2];

fileInput.addEventListener("change", populate);

function populate(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        const json = JSON.parse(reader.result);
        const people = json.students.map( (person) => new Student(person) );
        const courses = json.courses;
        const teachers = json.teachers.map( (teacher) => new Person(teacher) );

        for (let person of people) {
            /* ---- Main Content ---- */

            // Create section
            const section = document.createElement("section");
            section.classList.add("scroll-target");
            section.id = person.firstName.toLowerCase();

            // Create title
            const title = document.createElement("h2");
            title.innerText = person.title + " " + person.firstName + " " + person.lastName;
            section.appendChild(title);

            // Make the entire section collapsible (https://www.w3schools.com/howto/howto_js_collapsible.asp)
            title.addEventListener("click", function() {
                for (let heading of document.querySelectorAll("h2")) {
                    const content = heading.nextElementSibling;
                    content.style.maxHeight = null;
                }

                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

            // Create personal text div
            const div = document.createElement("section");
            div.classList.add("team-member");
            section.appendChild(div);

            // Create profile picture in div
            const img = document.createElement("img");

            img.classList.add("team-member__picture");
            img.src = person.photo;
            img.alt = `Picture of team member ${person.firstName}`
            div.appendChild(img);

            // Create div for rest of the content
            const personalInfoDiv = document.createElement("div");
            personalInfoDiv.classList.add("team-member__text");
            div.appendChild(personalInfoDiv);

            // Age
            const age = document.createElement("p");
            const boldAge = document.createElement("b");
            boldAge.innerText = "Age: ";
            age.appendChild(boldAge);
            age.appendChild(document.createTextNode(person.age));

            // Hobbies
            const hobbies = document.createElement("p");
            const boldHobbies = document.createElement("b");
            boldHobbies.innerText = "Hobbies: ";
            hobbies.appendChild(boldHobbies);

            const hobbyList = document.createElement("ul");
            for (let hobby of person.hobbies) {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(hobby));
                hobbyList.appendChild(li);
            }

            // Major
            const major = document.createElement("p");
            const boldMajor = document.createElement("b");
            boldMajor.innerText = "Major: ";
            major.appendChild(boldMajor);
            major.appendChild(document.createTextNode(person.major));

            // Email
            const email = document.createElement("p");
            const boldEmail = document.createElement("b");
            boldEmail.innerText = "E-mail: ";
            email.appendChild(boldEmail);
            email.appendChild(document.createTextNode(person.email));

            // Courses
            const courses = document.createElement("p");
            const boldCourses = document.createElement("b");
            boldCourses.innerText = "Courses: ";
            courses.appendChild(boldCourses);

            const courseList = document.createElement("ul");
            for (let course of person.courses) {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(course));
                courseList.appendChild(li);
            }

            personalInfoDiv.appendChild(age);
            personalInfoDiv.appendChild(major);
            personalInfoDiv.appendChild(email);
            personalInfoDiv.appendChild(hobbies);
            personalInfoDiv.appendChild(hobbyList);
            personalInfoDiv.appendChild(courses);
            personalInfoDiv.appendChild(courseList)

            aboutContainer.appendChild(section);
        }
    };

    reader.readAsText(file);

    fileInput.remove();
    aboutContainer.children[1].remove();
}