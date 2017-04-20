var content = document.getElementById("content");

var cancha = document.createElement("cancha");
cancha.setAttribute("class","cancha");

var arcoLeft = document.createElement("arcoLeft");
arcoLeft.setAttribute("class","arcoLeft rectangule");

var arcoRight = document.createElement("arcoRigth");
arcoRight.setAttribute("class",'arcoRight rectangule');

var circule = document.createElement("circule");
circule.setAttribute("class", "circule");

var balon1= document.createElement("balon1");
balon1.setAttribute("class", "balon balon1");

var balon2= document.createElement("balon2");
balon2.setAttribute("class", "balon balon2");

var balon3= document.createElement("balon3");
balon3.setAttribute("class", "balon balon3");

var info = document.createElement("info");
info.setAttribute("class","info");
info.appendChild(document.createTextNode("Laboratoria 2017 created by Schelsen Majuan"));


arcoLeft.appendChild(balon1);
arcoRight.appendChild(balon3);

cancha.appendChild(balon2);
cancha.appendChild(arcoLeft);
cancha.appendChild(arcoRight);
cancha.appendChild(circule);

content.appendChild(cancha);
content.appendChild(info);
