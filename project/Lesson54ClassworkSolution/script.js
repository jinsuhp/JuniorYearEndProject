
let students;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.142.169:8600/Students";
  let route= ""
  Students = $.getJSON(link+route).responseJSON;
  console.log(Students)
  generateCards(Students);

  
}

function generateCards(Students){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

   
  for(let i=0; i<Students.length; i++){
    let student = Students[i]
    build += `<div class="card" >`
    build += `<h3> Student ID : ${student.StudentID}</h3>`;
    build += `<p> First Name : ${student.FirstName}</p>`;
    build += `<p> Last Name : ${student.LastName}</p>`;
    build += `<p> Address : ${student.Address}</p>`;
    build += `<div> Email: ${student.Email} </div>`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

for(let i=0; i<Students.length; i++){
    let student = Students[i]
    build += `<div class="card" >`
    build += `<h3> Student ID : ${student.StudentID}</h3>`;
    build += `<p> First Name : ${student.FirstName}</p>`;
    build += `<p> Last Name : ${student.LastName}</p>`;
    build += `<p> Address : ${student.Address}</p>`;
    build += `<div> Email: ${student.Email} </div>`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let city = document.getElementById("city").value;
  console.log(city);

  let newEmployees = []; //create a list of songs searched for
  
  for(let i=0; i<employees.length;i++){
    let employee = employees[i] //get each sog
    //make sure the list is no
    if( employee.City == city ) {
          //add to the new list
          newEmployees.push(employee);
       }
  }
  console.log(`number found ${newEmployees.length}`)
  generateCards(newEmployees);
  
}