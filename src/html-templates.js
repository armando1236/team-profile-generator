const makeTeam = team => {

    const generateManagerCard = manager => {
        return `
        
    <div class = "col-lg-4 gap-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem; height: 16rem;" id="card">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h5 class="card-title"><span class="material-symbols-outlined">
          local_cafe
          </span>Manager</h5>
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${manager.id}</li>
        <a href="mailto:${manager.email}"><li class="list-group-item">email:${manager.email}</li></a>
        <li class="list-group-item">Office number:${manager.officeNumber}</li>
        </ul>
        </div>
    </div>
        `
    }



    const generateEngineerCard = engineer => {
        return `
    <div class = "col-lg-4 gap-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem; height: 16rem;" id="card">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <h5 class="card-title"><span class="material-symbols-outlined">
          keyboard
          </span>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${engineer.id}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">email:${engineer.email}</li></a>
        <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.github}" target = "_blank">${engineer.github}</a></li>
        </ul>
        </div>
    </div>
        `
    }




    const generateInternCard = intern => {
        return `
    <div class = "col-lg-4 gap-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem; height: 16rem;" id="card">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <h5 class="card-title"><span class="material-symbols-outlined">
            school
            </span>Intern</h5>
        </div>
        <ul class="list-group list-group-flush"> 
        <li class="list-group-item">ID:${intern.id}</li>
        <a href="mailto:${intern.email}"><li class="list-group-item">email:${intern.email}</li></a>
        <li class="list-group-item">School:${intern.school}</li>
        </ul>
        </div>
    </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))
    );

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer))
    );


    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))
    );

    return html.join("")
}

module.exports = team => {
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <p class="text-center text-white" style="height: 180px; font-size: 60px;background-color: #dc3545;" >My Team</p>
    </header>
    <div class = "container" style = "width: 800px; height: 1000px;">
      <div class = "row d-flex justify-content-center flex-wrap ">
    ${makeTeam(team)}
    </div>
    </div>
    </body>
</html>
    `
}   
