window.onload = function(){
  document.body.style.background = "rgb(39, 39, 39) !important";
};


function changeH1Style(){
  document.getElementsByTagName('h1')[0].style.backgroundColor = 'rgb(19, 19, 19)';
  document.getElementsByTagName('h1')[0].style.color = 'rgb(170, 170, 170)';
  document.getElementsByTagName('h1')[0].style.borderColor = 'black';
}
window.onload = changeH1Style;