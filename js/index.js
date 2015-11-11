"use strict";

var photoArray = [
    {filename: "img/IMG_4148.JPG",
     caption: "Photograpy - Trinity College Cinestudio"},
    {filename: "img/QQ20151106-6.png",
     caption: "The Stanford Shark Project - After interviewing 30+ people, we decide to develope a DRONE to detect shark for the existing market"},
    {filename: "img/IMG_1762.PNG",
     caption: "Photography - Painting of Body"},
    {filename: "img/IMG_4006.JPG",
     caption: "Design - MultiDimentional Cube-Globe"},
    {filename: "img/IMG_3857.JPG",
     caption: "Photography - One Night in NYC"},
    {filename: "img/QQ20151106-7.png",
     caption: "WebApp - Stanford-specific version of Google Maps, with zoom in, zoom out, dragging and center view function "},
  ];

function changePrev() {
  var imageNode = document.getElementById("photo");
  for (var i=0; i<10; i++){
    if ( photoArray[i].filename == imageNode.getAttribute("src")) {
      var num = (i+5)%6;
      var add = photoArray[num].filename;
      var dec = photoArray[num].caption;
      break;
    }
  }
  imageNode.setAttribute("src",add);
  document.getElementById("caption").innerHTML = dec;

}
function changeNext() {

  var imageNode = document.getElementById("photo");
  for (var i=0; i<10; i++){
    if ( photoArray[i].filename == imageNode.getAttribute("src")) {
      var num = (i+1)%6;
      var add = photoArray[num].filename;
      var dec = photoArray[num].caption;
      break;
    }
  }
  imageNode.setAttribute("src",add);
  document.getElementById("caption").innerHTML = dec;

}