const formatPage = (newStaffData) => {
    const top = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css" integrity="sha384-z4tVnCr80ZcL0iufVdGQSUzNvJsKjEtqYZjiQrrYKlpGow+btDHDfQWkFjoaz/Zr" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <main class="justify-contents-center">
        <div class="col p-4 text-center text-bg-info rounded-top">
                <h1>My Team</h1>
            </div>`    
    let staffArray = newStaffData.map(staff => {
        if (staff.getRole() === "Manager") {
            return `<div class="card-deck p-2 d-flex justify-content-between">
            <div class="card shadow" style="width: 15rem;">
                <div class="card-header bg-info text-white">
                    <h5>${staff.getName()}</h5>
                    <h6>Manager</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${staff.getId()}</p>
                    <p><a href="mailto:${staff.getEmail()}" class="card-text">${staff.getEmail()}</a></p>
                    <p class="card-text">Office #${staff.getOfficeNum()}</p>
                </div>
            </div>`
        }; if (staff.getRole() === "Engineer") {
            return `<div class="card shadow" style="width: 15rem;">
            <div class="card-header bg-info text-white">
                <h5>${staff.getName()}</h5>
                <h6>Engineer</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${staff.getId()}</p>
                <p><a href="mailto:${staff.getEmail()}" class="card-text">${staff.getEmail()}</a></p>
                <p><a href="https://www.github.com/${staff.getGithub()} class="card-text">${staff.getGithub()}</a></p>
            </div>
        </div>`
        }; if (staff.getRole() === "Intern") {
            return `<div class="card shadow" style="width: 15rem;">
            <div class="card-header bg-info text-white">
                <h5>${staff.getName()}</h5>
                <h6>Intern</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID:  ${staff.getId()}</p>
                <p><a href="mailto:${staff.getEmail()}" class="card-text">${staff.getEmail()}</a></p>
                <p class="card-text">School</p>
            </div>
        </div>`
        }
    });
        const bottom = `</div>
        </div>
    </main>
    </body>
    </html>`

    return top + staffArray.join("") + bottom
    }

    module.exports = formatPage