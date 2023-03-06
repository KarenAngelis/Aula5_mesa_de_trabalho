
window.onload = function(){
  document.body.style.background = "rgb(39, 39, 39)";
  document.getElementsByTagName("h1")[0].style.color = "rgb(170, 170, 170)";
  document.getElementsByTagName("h1")[0].style.backgroundColor = "rgb(19, 19, 19)"
  document.getElementsByTagName("h1")[0].style.borderColor = "black"
  document.querySelectorAll(".item").forEach(function(item){
    item.style.backgroundColor = "rgb(19, 19, 19)";
    item.style.border = "black";
    item.style.color = "rgb(230, 230, 230)"
 });
}
