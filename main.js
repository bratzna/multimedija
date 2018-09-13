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
		username: "pera",
		password: "123"
	},
	{
		username: "zika",
		password: "123"
	}
]
function ulogujSe(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for(var i=0; i<korisnici.length; i++){
		if (username == korisnici[i].username && password == korisnici[i].password) {
			console.log(username + " je ulogovan!");
			alert("Uspesno ste se ulogovali!");
			window.location = "uspesno.html";
		}
	}
	console.log("Korisnicko ime ili lozinka nisu ispravni!");

}
// II-deo zadatka

// Validacija e-maila
function emailValidacija(inputText){
	var formatMaila = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (inputText.value.match(formatMaila)) {
		alert("Tacno ste uneli e-mail!");
		return true;
	}
	else{
		alert("Uneli ste pogresan e-mail!");
		return false;
	}
}

// idi dalje dugme

function idiDalje(){
	window.location = "provera.html";
}

// III-deo zadatka

// iskljuci sva polja
function iskljuciPolja(){
	var elementi = document.getElementsByTagName('input');
	var duzinaInputa = elementi.length;

	for(var i=0; i < duzinaInputa; i++){
		elementi[i].disabled = true;
	}
}

// provera JMBG-a
function proveriJMBG(){
	var n = document.getElementById('jmbg').value;
	var duzina = n.length;

	if (duzina == 13) {
		alert('Duzina JMBG-a je ispravna!');
	}else{
		alert("Duzina JMBG-a nije ispravna!!!");
	}
}
// provera Stringa
function proveriString(){
	var n = document.getElementById('jmbg').value;

	if(isNaN(n) == false){
		alert("JMBG nije string!");
	}else{
		alert("JMBG jeste string!");
	}
}




