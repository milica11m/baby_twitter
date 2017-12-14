document.getElementById("novi_tvit").onclick = function(e) {
	document.getElementById("tvit_dugme").style.display = "block";
	document.getElementById("novi_tvit").style.height = "82px";
	document.getElementById("textarea").style.height = "154px";
}
document.getElementById("novi_tvit").oninput = function(e) {
	document.getElementById("tvit_dugme").removeAttribute("disabled");
};
var dugme = document.getElementById("tvit_dugme");
dugme.onclick = function(e) {
	var tvit = document.getElementById("novi_tvit").value;
	var div = document.createElement("div");
	div.innerHTML = tvit;  // zasto mi ovde ne radi appendChild?!
	div.classList.add("tvit");
	var tvitovi = document.getElementById("svi_tvitovi");
	tvitovi.insertBefore(div, tvitovi.firstChild);
	document.getElementById("novi_tvit").value = "";
	dugme.disabled = true;
	dugme.style.display = "none";
	document.getElementById("novi_tvit").style.height = "38px";
	document.getElementById("textarea").style.height = "60px";
}
