var content = document.getElementById("content");

/* Creando elementos y añadiendo sus clases **/
var cancha = document.createElement("div");
cancha.setAttribute("class","cancha");

var arcoLeft = document.createElement("div");
arcoLeft.setAttribute("class",'arcoLeft rectangule');

var arcoRight = document.createElement("div");
arcoRight.setAttribute("class",'arcoRight rectangule');

var circule = document.createElement("div");
circule.setAttribute("class", "circule-center");

var ball1= document.createElement("div");
ball1.setAttribute("class", "balls ball1");

var ball2= document.createElement("div");
ball2.setAttribute("class", "balls ball2");

var ball3= document.createElement("div");
ball3.setAttribute("class", "balls ball3");

var texto = document.createElement("p");
texto.setAttribute("class","texto");
texto.appendChild(document.createTextNode("Laboratoria 2017 created by Liliana Peña"));

/* Agrendo pelotas a los dos arcos */
arcoLeft.appendChild(ball1);
arcoRight.appendChild(ball3);

/* Agregando pelota a la cancha */
cancha.appendChild(ball2);

/* Agregando arcos a la cancha */
cancha.appendChild(arcoLeft);
cancha.appendChild(arcoRight);

/* Agregando circulo central y la cancha al contenido */
content.appendChild(circule);
content.appendChild(cancha);
content.appendChild(texto);
