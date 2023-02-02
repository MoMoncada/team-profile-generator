const teamEl = (team) => {
    console.log(team);

//--- empty array to push all sections of the html document ---//
const html = [];



//--- function to return manager data ---//
const generateManager = manager => {
    console.log(manager);
    let managerHtml = 
    //--Card to hold Manager's information--//
    `
    <div class="card" style="width: 18rem;">
            <div class="card-header name">
                ${manager.name} <br/> Manager  <i class="fas fa-mug-hot"></i></div>  
    <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div> `;

    html.push(managerHtml);
}



//--- function to return engineers data ---//
const generateEngineer = engineer => {
      console.log(engineer);
      let engineerHtml = 
      //--Card to hold engineers' information--//
      `
      <div class="card" style="width: 18rem;">
            <div class="card-header name">
                 ${engineer.name} <br/> Engineer <i class="fas fa-glasses"></i></div>  
     <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
          <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUserName}"> ${engineer.githubUserName} </a></li>
      </ul>
  </div> `;
  html.push(engineerHtml);  
}




//--- function to return interns data ---//
const generateIntern = intern => {
    console.log(intern);
    let internHtml = 
    //--Card to hold interns' information--//
    `
        <div class="card" style="width: 18rem;">
            <div class="card-header name">
                ${intern.name} <br/> Intern  <i class="fas fa-user-graduate"></i></div>  
           <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
    html.push(internHtml);
}


//--- for loop to go through the list of employees and assign them to their respective cards ---//
for (let i=0; i <team.length; i++) {
    if(team[i].getRole() === "Manager"){
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Engineer"){
        generateEngineer(team[i]);
    }
    if(team[i].getRole() === "Intern"){
        generateIntern(team[i]);
    }
}

return html.join(''); //-- join the html sections --//

};

//--- generating the full page ---//
module.exports = team => {

    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1> Team Profile </h1>
    </header>

    <main> ${teamEl(team)} </main>
     
</body>
</html>
    
    `

}


