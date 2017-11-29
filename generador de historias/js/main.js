'use strict'

/*var generator = {
	usuario : prompt("Introduce tu ususario"),
	funcionalidad : prompt("Introduce que necesitas"),
	razon : prompt("Introduce el por qué"),
}*/

function generator(){
	var client = document.querySelector('.client');
	var need  = document.querySelector('.need');
	var reason = document.querySelector('.reason');
	//var rellenar = usuario.innerHTML;
	var fillclient = prompt("Eres cliente de ");
	client.innerHTML = "Yo como cliente de " + fillclient;
	var fillneed = prompt("Yo necesito: ");
	need.innerHTML = "Necesito " + fillneed;
	var fillreason = prompt("Con la finalidad de: ");
	reason.innerHTML = "Con la finalidad de " + fillreason;


}

generator();
