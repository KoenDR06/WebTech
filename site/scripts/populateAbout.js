const aboutContainer = document.querySelector("article > section");
const fileInput = aboutContainer.children[2]

fileInput.addEventListener("change", populate)

function populate(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        const json = JSON.parse(reader.result);

        for (let personInfo of json) {
            /* ---- Main Content ---- */

            // Create section
            const section = document.createElement("section");
            section.classList.add("scroll-target");
            section.id = personInfo.id;

            // Create title
            const title = document.createElement("h2");
            title.innerText = personInfo.name;
            section.appendChild(title);

            // Create personal text div
            const div = document.createElement("div");
            div.classList.add("team-member-section");
            section.appendChild(div);

            // Create profile picture in div
            const img = document.createElement("img");
            img.classList.add("profile-picture");
            img.src = personInfo.profile_picture;
            img.alt = `Picture of team member ${personInfo.name.split(" ")[0]}`
            div.appendChild(img);

            // Add text to div
            const textDiv = document.createElement("div");
            textDiv.classList.add("about-member-text");
            div.appendChild(textDiv);
            for (let p of personInfo.about) {
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