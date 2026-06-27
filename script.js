function showContent(id){

let boxes =
document.querySelectorAll(".content-box");

boxes.forEach(box=>{
box.style.display="none";
});

document.getElementById(id).style.display="block";

}