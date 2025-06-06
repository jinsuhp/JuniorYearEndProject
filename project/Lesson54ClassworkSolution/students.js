
let students;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.142.169:8700/Students";
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
	build += `<div class="flip-card">`
	build += `<div class="flip-card-inner">`
    build += `<div class="flip-card-front">`
    build += `<img src="pfp.jpg" alt="Avatar" style="width:300px;height:300px;">`
    build += `</div>`
    build += `<div class="flip-card-back">`
    build += `<h3> Student ID : ${student.StudentID}</h3>`;
    build += `<p> First Name : ${student.FirstName}</p>`;
    build += `<p> Last Name : ${student.LastName}</p>`;
    build += `<p> Address : ${student.Address}</p>`;
    build += `<div> Email: ${student.Email} </div>`;
    build += `<hr>`;
    build += `</div>`;
	build += `</div>`;
	build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let stud = document.getElementById("stud").value;
  console.log(stud);

  let newStudents = []; //create a list of songs searched for
  
  for(let i=0; i<Students.length;i++){
    let student = Students[i] //get each sog
    //make sure the list is no
    if( student.FirstName == stud ) {
          //add to the new list
          newStudents.push(student);
       }
  }
  console.log(`number found ${newStudents.length}`)
  generateCards(newStudents);
  
}