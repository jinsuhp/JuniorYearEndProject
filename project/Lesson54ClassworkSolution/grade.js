
let students;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.142.169:8700/Grades";
  let route= ""
  Grades = $.getJSON(link+route).responseJSON;
  console.log(Grades)
  generateCards(Grades);

  
}

function generateCards(Grades){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

   
  for(let i=0; i<Grades.length; i++){
    let grade = Grades[i]
    build += `<div class="card" >`
    build += `<h3> Student ID : ${grade.StudentID}</h3>`;
    build += `<p> Course ID : ${grade.CourseID}</p>`;
    build += `<p> Grade : ${grade.Grade}</p>`;
    build += `<p> SAT : ${grade.SAT}</p>`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let grad = document.getElementById("grad").value;
  console.log(grad);

  let newGrades = []; //create a list of songs searched for
  
  for(let i=0; i<Grades.length;i++){
    let grade = Grades[i] //get each sog
    //make sure the list is no
    if( grade.StudentID == grad ) {
          //add to the new list
          newGrades.push(grade);
       }
  }
  console.log(`number found ${newGrades.length}`)
  generateCards(newGrades);
  
}