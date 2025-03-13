class Building {
    #abbr;
    #id;
    #name;
    #mapsURL;
    #address;

    #telephone;

    #monday;
    #tuesday;
    #wednesday;
    #thursday;
    #friday;
    #saturday;
    #sunday;
    #hasOpeningTimes;

    constructor(json) {
        this.abbr = json.abbr;
        this.id = json.id;
        this.name = json.name;
        this.mapsURL = json.maps_url;
        this.address = json.address;

        this.telephone = (json.telephone ? json.telephone : "Unknown.");

        this.monday = json.monday;
        this.tuesday = json.tuesday;
        this.wednesday = json.wednesday;
        this.thursday = json.thursday;
        this.friday = json.friday;
        this.saturday = json.saturday;
        this.sunday = json.sunday;
        this.hasOpeningTimes = !!json.monday; // If the entry for monday exists, the rest also exists
    }

    get abbr() {return this.#abbr;}
    get id() {return this.#id;}
    get name() {return this.#name;}
    get mapsURL() {return this.#mapsURL;}
    get address() {return this.#address;}
    get telephone() {return this.#telephone;}
    get monday() {return this.#monday;}
    get tuesday() {return this.#tuesday;}
    get wednesday() {return this.#wednesday;}
    get thursday() {return this.#thursday;}
    get friday() {return this.#friday;}
    get saturday() {return this.#saturday;}
    get sunday() {return this.#sunday;}
    get hasOpeningTimes() {return this.#hasOpeningTimes;}

    set abbr(value) {
        if (!value instanceof String) return;
        this.#abbr = value;
    }
    set id(value) {
        if (!value instanceof String || value === "") return;
        this.#id = value;
    }
    set name(value) {
        if (!value instanceof String || value === "") return;
        this.#name = value;
    }
    set mapsURL(value) {
        if (!value instanceof String || value === "") return;
        this.#mapsURL = value;
    }
    set address(value) {
        if (!value instanceof String || value === "") return;
        this.#address = value;
    }
    set telephone(value) {
        if (!value instanceof String || value === "") return;
        this.#telephone = value;
    }
    set monday(value) {
        if (!value instanceof String || value === "") return;
        this.#monday = value;
    }
    set tuesday(value) {
        if (!value instanceof String || value === "") return;
        this.#tuesday = value;
    }
    set wednesday(value) {
        if (!value instanceof String || value === "") return;
        this.#wednesday = value;
    }
    set thursday(value) {
        if (!value instanceof String || value === "") return;
        this.#thursday = value;
    }
    set friday(value) {
        if (!value instanceof String || value === "") return;
        this.#friday = value;
    }
    set saturday(value) {
        if (!value instanceof String || value === "") return;
        this.#saturday = value;
    }
    set sunday(value) {
        if (!value instanceof String || value === "") return;
        this.#sunday = value;
    }
    set hasOpeningTimes(value) {
        if (!value instanceof Boolean) return;
        this.#hasOpeningTimes = value;
    }
}

const buildingsContainer = document.querySelector(".main-content article");
const contentTable = document.querySelector(".main-content aside tbody");

const fileInput = buildingsContainer.children[2]

fileInput.addEventListener("change", populate)

function populate(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        const buildings = JSON.parse(reader.result).map( (building) => new Building(building) );

        for (let building of buildings) {
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
            addressLink.href = building.mapsURL;
            addressLink.text = building.address;
            address.appendChild(addressLink);
            div.appendChild(address);

            // Create phone number
            const phone = document.createElement("p");
            phone.innerText = "Tel: " + building.telephone;
            div.appendChild(phone);

            // Create opening hours table
            if (building.hasOpeningTimes) {
                const openingHeading = document.createElement("h3");
                openingHeading.innerText = "Opening Hours: ";
                div.appendChild(openingHeading);

                const openingHours = document.createElement("table");
                openingHours.classList.add("buildings__opening-hours-table");
                const tableBody = document.createElement("tbody");
                openingHours.appendChild(tableBody);

                const days = [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ];
                const dayInfo = [
                    building.monday,
                    building.tuesday,
                    building.wednesday,
                    building.thursday,
                    building.friday,
                    building.saturday,
                    building.sunday
                ];
                for (let i = 0; i < 7; i++) {
                    const row = document.createElement("tr");
                    const left = document.createElement("th");
                    left.innerText = days[i];
                    const right = document.createElement("td");
                    right.innerText = dayInfo[i];
                    row.appendChild(left);
                    row.appendChild(right);
                    tableBody.appendChild(row);
                }

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

            link.classList.add("header__link");
            link.href = `#${building.id}`;
            link.text = building.name;

            const right = document.createElement("td");
            right.innerText = building.abbr;

            row.appendChild(left);
            row.appendChild(right);
            contentTable.appendChild(row);

        }
    }
    reader.readAsText(file);

    fileInput.remove()
    buildingsContainer.children[1].remove()
}