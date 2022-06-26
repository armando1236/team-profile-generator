const makeTeam = team => {

    const generateManagerCard = manager => {
        return `
        <div class = "col-lg-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;" id="card">
        
        <div class="card-body">
          <h5 class="card-title">${manager.name}<b><br>Manager</h5>
          
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${manager.id}</li>
        <li class="list-group-item">Office number:${manager.officeNumber}</li>
        <a href="mailto:${manager.email}"><li class="list-group-item">email:${manager.email}</li></a>
        </ul>
    </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))
    )



    const generateEngineerCard = engineer => {
        return `
        <div class = "col-lg-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;" id="card">
        
        <div class="card-body">
          <h5 class="card-title">${engineer.name}<br>Engineer</h5>
          
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${engineer.id}</li>
        <li class="list-group-item">Github:${engineer.github}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">email:${engineer.email}</li></a>
        </ul>
    </div>
        `
    }

  

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateManagerCard(engineer))
    )


    const generateInternCard = intern => {
        return `
        <div class = "col-lg-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem;" id="card">
        
        <div class="card-body">
          <h5 class="card-title">${intern.name}<br>Intern</h5>
          
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${intern.id}</li>
        <li class="list-group-item">School:${intern.school}</li>
        <a href="mailto:${intern.email}"><li class="list-group-item">email:${intern.email}</li></a>
        </ul>
    </div>
        `
    }


    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))
    )

    return html.join("")
}

module.exports= team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./assets/style.css"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <p class="text-center text-white" style="height: 180px; font-size: 60px;background-color: #dc3545;" >My Team</p>
    </header>
    ${makeTeam(team)}
    </body>
</html>
    `
}   
