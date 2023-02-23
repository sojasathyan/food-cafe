function validate() {
	let nam = document.getElementById("n").value;
	let mail = document.getElementById("e").value;
	let nregx = /^[a-zA-Z]{2,15}$/;
	let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (nam == "") {
		alert("name filed can not be empty");
		return false;
	} else if (mail == "") {
		alert("Email filed can not be empty");
		return false;
	} else if (!nregx.test(n)) {
		alert("Enter strings only");
		return false;
	} else if (!email.test(mail)) {
		alert("Enter valid email");
		return false;
	} else {
		return true;
	}
}
