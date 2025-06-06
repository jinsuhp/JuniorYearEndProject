
let students;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "http://100.80.142.169:8700/Extracurriculars";
  let route= ""
  Extracurriculars = $.getJSON(link+route).responseJSON;
  console.log(Extracurriculars)
  generateCards(Extracurriculars);

  
}

function generateCards(Extracurriculars){

  let mainpanel = document.getElementById("mainpanel");
  let build ="";

   
  for(let i=0; i<Extracurriculars.length; i++){
    let extracurricular = Extracurriculars[i]
    build += `<div class="card" >`
    build += `<h3> Student ID : ${extracurricular.StudentID}</h3>`;
    build += `<p> Sports : ${extracurricular.Sports}</p>`;
    build += `<p> Leadership : ${extracurricular.Leadership}</p>`;
    build += `<p> Clubs : ${extracurricular.Clubs}</p>`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let extra = document.getElementById("extra").value;
  console.log(extra);

  let newExtracurriculars = []; //create a list of songs searched for
  
  for(let i=0; i<Extracurriculars.length;i++){
    let extracurricular = Extracurriculars[i] //get each sog
    //make sure the list is no
    if( extracurricular.StudentID == extra ) {
          //add to the new list
          newExtracurriculars.push(extracurricular);
       }
  }
  console.log(`number found ${newExtracurriculars.length}`)
  generateCards(newExtracurriculars);
  
}