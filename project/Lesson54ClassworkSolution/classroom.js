
let students;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.142.169:8700/Classrooms";
  let route= ""
  Classrooms = $.getJSON(link+route).responseJSON;
  console.log(Classrooms)
  generateCards(Classrooms);

  
}

function generateCards(Classrooms){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

   
  for(let i=0; i<Classrooms.length; i++){
    let classroom = Classrooms[i]
    build += `<div class="card" >`
    build += `<h3> Course ID : ${classroom.CourseID}</h3>`;
    build += `<p> Course Name : ${classroom.Coursename}</p>`;
    build += `<p> Teacher Name : ${classroom["Teacher "]}</p>`;
    build += `<p> Class Size : ${classroom.Students}</p>`;
    build += `<div> Room Number: ${classroom.Room} </div>`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let teach = document.getElementById("teach").value;
  console.log(teach);

  let newClassrooms = []; //create a list of songs searched for
  
  for(let i=0; i<Classrooms.length;i++){
    let classroom = Classrooms[i] //get each sog
    //make sure the list is no
    if( classroom.Coursename == teach ) {
          //add to the new list
          newClassrooms.push(classroom);
       }
  }
  console.log(`number found ${newClassrooms.length}`)
  generateCards(newClassrooms);
  
}