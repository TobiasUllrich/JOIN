
function renderSummary(){

}

function addBackground(idOfElementToChange,idOfPicture){
   document.getElementById(idOfElementToChange).style='background-color: #FFFFFF;';
   document.getElementById(`${idOfPicture}`).style='filter: invert(100%);';
}

function removeBackground(idOfElementToChange,idOfPicture){
  document.getElementById(idOfElementToChange).style='background-color: #091931;';
  document.getElementById(`${idOfPicture}`).style='filter: invert(0%);';
}