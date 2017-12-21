document.getElementById("novi_tvit").onclick = function(e) {
	document.getElementById("tvit_dugme").style.display = "block";
	document.getElementById("novi_tvit").style.height = "82px";
	document.getElementById("textarea").style.height = "154px";
}
document.getElementById("novi_tvit").oninput = function(e) {
	if (/\S/.test(document.getElementById("novi_tvit").value)) {
    	// string is not empty and not just whitespace
		document.getElementById("tvit_dugme").removeAttribute("disabled");
	} else {
		document.getElementById("tvit_dugme").disabled = true;
	}
};

var dugme = document.getElementById("tvit_dugme");
dugme.onclick = function(e) {
	var tvit = document.getElementById("novi_tvit").value;
	var div = document.createElement("div");
	div.innerHTML = tvit;  
	// var tvit = document.createTextNode(document.getElementById("novi_tvit").value);
	// div.appendChild(tvit);
	div.classList.add("tvit");
	var tvitovi = document.getElementById("svi_tvitovi");
	tvitovi.insertBefore(div, tvitovi.firstChild);
	document.getElementById("novi_tvit").value = "";
	dugme.disabled = true;
	dugme.style.display = "none";
	document.getElementById("novi_tvit").style.height = "38px";
	document.getElementById("textarea").style.height = "60px";
}
