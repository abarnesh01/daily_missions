fetch("demo.xml")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");

        const students = xml.getElementsByTagName("student");
        const container = document.getElementById("students");

        for (let student of students) {
            const id = student.getElementsByTagName("id")[0].textContent;
            const name = student.getElementsByTagName("name")[0].textContent;
            const department = student.getElementsByTagName("department")[0].textContent;
            const year = student.getElementsByTagName("year")[0].textContent;

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h2>${name}</h2>
                <p><span>ID:</span> ${id}</p>
                <p><span>Department:</span> ${department}</p>
                <p><span>Year:</span> ${year}</p>
            `;

            container.appendChild(card);
        }
    })
    .catch(error => {
        console.error("Error loading XML:", error);
    });