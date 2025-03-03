const aboutContainer = document.querySelector("article > section");

fetch('/static/about.json')
    .then(response => response.json())
    .then(json => {
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
                para.innerHTML = p;
                textDiv.appendChild(para);
            }

            aboutContainer.appendChild(section);
        }
    });