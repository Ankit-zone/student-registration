const form = document.getElementById("registrationForm");

const table = document.getElementById("studentTable");

const totalStudents =
    document.getElementById("totalStudents");

const registrationCount =
    document.getElementById("registrationCount");

const toast =
    document.getElementById("toast");

const searchInput =
    document.getElementById("searchInput");

const themeBtn =
    document.getElementById("themeBtn");


let students =
    JSON.parse(
        localStorage.getItem("students")
    ) || [];


// DISPLAY STUDENTS

function displayStudents(data = students) {

    if (data.length === 0) {

        table.innerHTML = `
            <tr class="empty-row">
                <td colspan="5">
                    No students registered yet.
                </td>
            </tr>
        `;

        return;
    }


    table.innerHTML = data.map(student => `

        <tr>

            <td>
                <strong>${student.name}</strong>
            </td>

            <td>
                ${student.email}
            </td>

            <td>
                ${student.course}
            </td>

            <td>
                ${student.year}
            </td>

            <td>
                <span class="status">
                    Active
                </span>
            </td>

        </tr>

    `).join("");
}


// UPDATE DASHBOARD

function updateStats() {

    totalStudents.textContent =
        students.length;

    registrationCount.textContent =
        students.length;

    displayStudents();
}


// FORM SUBMISSION

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const student = {

            name:
                document.getElementById("name")
                    .value.trim(),

            email:
                document.getElementById("email")
                    .value.trim(),

            phone:
                document.getElementById("phone")
                    .value.trim(),

            course:
                document.getElementById("course")
                    .value,

            year:
                document.getElementById("year")
                    .value,

            gender:
                document.getElementById("gender")
                    .value

        };


        students.push(student);


        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );


        updateStats();


        form.reset();


        showToast();

    }
);


// SEARCH

searchInput.addEventListener(
    "input",
    function() {

        const keyword =
            this.value.toLowerCase();


        const filtered =
            students.filter(student =>

                student.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                student.email
                    .toLowerCase()
                    .includes(keyword)

                ||

                student.course
                    .toLowerCase()
                    .includes(keyword)

            );


        displayStudents(filtered);

    }
);


// TOAST

function showToast() {

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


// DARK MODE

themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    }
);


// NAVIGATION

document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                document.querySelectorAll(
                    ".nav-link"
                ).forEach(item => {

                    item.classList.remove("active");

                });


                this.classList.add("active");

            }
        );

    });


// INITIAL LOAD

updateStats();