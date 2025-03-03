const buildingsContainer = document.querySelector(".main-content article");
const contentTable = document.querySelector(".main-content aside tbody");

fetch('/static/buildings.json')
    .then(response => response.json())
    .then(json => {
        for (let building of json) {
            /* ---- Main Content ---- */

            // Create div
            const div = document.createElement("div");
            div.classList.add("scroll-target");
            div.id = building.id;

            // Create title
            const title = document.createElement("h2");
            title.innerText = building.name;
            div.appendChild(title);

            // Create address with link
            const address = document.createElement("p");
            address.appendChild(document.createTextNode("Address: "));
            const addressLink = document.createElement("a");
            addressLink.href = building.maps_url;
            addressLink.text = building.address;
            address.appendChild(addressLink);
            div.appendChild(address);

            // Create phone number
            const phone = document.createElement("p");
            phone.innerText = "Tel: " + (building.telephone ? building.telephone : "Unknown.");
            div.appendChild(phone);

            // Create opening hours table
            if (building.monday) {
                const openingHeading = document.createElement("h3");
                openingHeading.innerText = "Opening Hours: ";
                div.appendChild(openingHeading);

                const openingHours = document.createElement("table");
                openingHours.classList.add("opening-hours-table");
                const tableBody = document.createElement("tbody");
                openingHours.appendChild(tableBody);

                tableBody.innerHTML =
                    `<tr><th>Monday:</th><td>${building.monday}</td></tr>` +
                    `<tr><th>Tuesday:</th><td>${building.tuesday}</td></tr>` +
                    `<tr><th>Wednesday:</th><td>${building.wednesday}</td></tr>` +
                    `<tr><th>Thursday:</th><td>${building.thursday}</td></tr>` +
                    `<tr><th>Friday:</th><td>${building.friday}</td></tr>` +
                    `<tr><th>Saturday:</th><td>${building.saturday}</td></tr>` +
                    `<tr><th>Sunday:</th><td>${building.sunday}</td></tr>`;

                div.appendChild(openingHours)
            } else {
                const p = document.createElement("p");
                p.innerText = "Not accessible to visitors.";
                div.appendChild(p);
            }

            buildingsContainer.appendChild(div);

            /* ---- Content Table ---- */

            const row = document.createElement("tr");
            const left = document.createElement("td");
            const link = document.createElement("a");
            left.appendChild(link);

            link.classList.add("header-link");
            link.href = `#${building.id}`;
            link.text = building.name;

            const right = document.createElement("td");
            right.innerText = building.abbr;

            row.appendChild(left);
            row.appendChild(right);
            contentTable.appendChild(row);

        }
    });