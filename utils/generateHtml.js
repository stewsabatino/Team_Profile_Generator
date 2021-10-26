

const manager = (employee) => {
    return `
    <div class="col">   
        <div class="card bg-light shadow mb-3" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <h5><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush p-4">
                <li class="list-group-item border">ID: ${employee.getId()}</li>
                <li class="list-group-item border">Email: ${employee.getEmail()}</li>
                <li class="list-group-item border">Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}
            
const engineer = (employee) => {
    return `
    <div class="col">   
        <div class="card bg-light shadow mb-3" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <h5><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush p-4">
                <li class="list-group-item border">ID: ${employee.getId()}</li>
                <li class="list-group-item border">Email: ${employee.getEmail()}</li>
                <li class="list-group-item border">Github: ${employee.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
}

const intern = (employee) => {
    return`
    <div class="col">   
        <div class="card bg-light shadow mb-3" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <h5><i class="fas fa-mug-hot"></i> ${employee.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush p-4">
                <li class="list-group-item border">ID: ${employee.getId()}</li>
                <li class="list-group-item border">Email: ${employee.getEmail()}</li>
                <li class="list-group-item border">School: ${employee.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
}


const renderHTML = (employees) => {
    pageArray = [];
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i]
        const role = employee.getRole();
        if (role === "Manager") {  
            const managerCard = manager(employee)
            pageArray.push(managerCard)
            
        } else if (role === "Engineer") {
            const engineerCard = engineer(employee)
            pageArray.push(engineerCard)
            
        } else {
            const internCard = intern(employee)
            pageArray.push(internCard)
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam
}



const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <h2 class="jumbotron text-center bg-success text-white">My Team</h2>
        <div class="container">
            <div class="row">
                ${employeeCards}
            </div>
        </div>
    </body
    
    
    </html>
    `
    
}

module.exports = renderHTML