
window.onload = function(){
  document.body.style.background = "rgb(39, 39, 39)";
  document.querySelectorAll(".h1").forEach(function(h1){
    h1.style.color = "rgb(170, 170, 170)";
    h1.style.backgroundColor = "rgb(19, 19, 19)";
    h1.style.borderColor = "black";
  });

  document.querySelectorAll(".item").forEach(function(item){
    item.style.backgroundColor = "rgb(19, 19, 19)";
    item.style.border = "black";
    item.style.color = "rgb(230, 230, 230)"
 });
}
