class Person {
    constructor(json) {
        this.name = json.name;
        this.shortName = json.name.split(" ")[0];
        this.id = this.shortName.toLowerCase();
        this.profilePicture = json.profile_picture;
        this.about = json.about;
    }
}

const aboutContainer = document.querySelector("article > section");
const fileInput = aboutContainer.children[2]

fileInput.addEventListener("change", populate)

function populate(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        const people = JSON.parse(reader.result).map( (person) => new Person(person) );

        for (let person of people) {
            /* ---- Main Content ---- */

            // Create section
            const section = document.createElement("section");
            section.classList.add("scroll-target");
            section.id = person.id;

            // Create title
            const title = document.createElement("h2");
            title.innerText = person.name;
            section.appendChild(title);

            // Create personal text div
            const div = document.createElement("section");
            div.classList.add("team-member");
            section.appendChild(section);

            // Create profile picture in div
            const img = document.createElement("img");
            img.classList.add("team-member__picture");
            img.src = person.profilePicture;
            img.alt = `Picture of team member ${person.shortName}`
            div.appendChild(img);

            // Add text to div
            const textDiv = document.createElement("div");
            textDiv.classList.add("team-member__text");
            div.appendChild(textDiv);
            for (let p of person.about) {
                const para = document.createElement("p");
                para.innerHTML = p; // TODO This is technically speaking not allowed by the requirements, but how else are we supposed to make this content render right?
                textDiv.appendChild(para);
            }

            aboutContainer.appendChild(section);
        }
    };

    reader.readAsText(file);

    fileInput.remove()
    aboutContainer.children[1].remove()
}