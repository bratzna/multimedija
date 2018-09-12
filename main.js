// dugme za resetovanje
function resetujPolja(){
	username.value = "";
	password.value = "";
}

// dodavanje korisnika + logovanje
var korisnici = [
	{
		username: "david",
		password: "123"
	},
	{
		username: "bojan",
		password: "123"
	},
	{
		username: "ivan",
		password: "123"
	}
]
function ulogujSe(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for(var i=0; i < korisnici.length; i++){
		if(username == korisnici[i].username && password == korisnici[i].password){
			console.log(username + " je ulogovan!");
			alert("Uspesno logovanje");
			window.location = "uspesno.html";
		}
	}
	console.log("Korisnicko ime ili lozinka su pogresno uneti!");
}

// II deo zadatka

// klik za vodjenje na novu stranicu dodajSliku
function dalje(){
	window.location = "dodajSliku.html";
}

// dugme za dodavanje novih polja
function dodajPolje(){
	var broj = document.getElementById("ime").value;
	var polja = document.getElementById("polja");

	while(polja.hasChildNodes()){
		polja.removeChild(polja.lastChild);
	}
	for(i=0; i<broj; i++){
		polja.appendChild(document.createTextNode("ime " + (i+1)));

		var input = document.createElement("input");

		input.type = "text-";
		input.name = "ime-" + i;

		polja.appendChild(input);

		polja.appendChild(document.createElement("br"));

		// dozvoljeno najvise 5 polja
		if(broj > 5){
			window.alert("Dozvoljeno najvise 5 polja!");
			return;
		}
	}
}

// III-deo zadatka

// dodavanje slika

var kolona = -1;
var redova = 0;


function dodajSliku(){
	if(kolona >1 || kolona == -1){
		redova++;

		if(redova > 3){
			window.alert("Uspesno dodate slike!");
			return;
		}
		var noviRed = document.createElement('tr');

		document.getElementById('tabela').appendChild(noviRed);
		kolona = 0;
	}
	var red = document.getElementById('tabela').lastChild;

	var td = document.createElement('td');
	var slika = document.createElement('img');

	red.appendChild(td);
	td.appendChild(slika);

	slika.src = "img/sijalica.png";
	slika.style.width = "200px";

	kolona++;
}
