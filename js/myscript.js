// <head> 구역에서 연결할때는 <script src="" defer><script> defer 속성을 추가하거나
// js 파일 내에 window.onload=function(){} 아래 코드들 이안에 작성
var img = document.getElementsByTagName("img");
img[0].onmouseover = function () {
  this.src = "./sample/6장/media/banana.png";
  this.style.border = "2px solid red";
};
img[0].onmouseout = function () {
  this.src = "./sample/6장/media/apple.png";
  this.style.border = "2px solid blue";
};
