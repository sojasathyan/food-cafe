function validate(event) {
	event.preventDefault();

	const nam = document.getElementById("n").value.trim();
	const mail = document.getElementById("e").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;
	const guests = document.getElementById("guests").value;
	const nregx = /^[a-zA-Z\s]{2,30}$/;
	const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const phoneRegx = /^[\d\s+\-()]{7,15}$/;

	if (nam === "") {
		alert("Name field cannot be empty");
		return false;
	}
	if (!nregx.test(nam)) {
		alert("Please enter a valid name");
		return false;
	}
	if (mail === "") {
		alert("Email field cannot be empty");
		return false;
	}
	if (!email.test(mail)) {
		alert("Please enter a valid email");
		return false;
	}
	if (phone === "" || !phoneRegx.test(phone)) {
		alert("Please enter a valid phone number");
		return false;
	}
	if (!date) {
		alert("Please select a date");
		return false;
	}
	if (!time) {
		alert("Please select a time");
		return false;
	}
	if (!guests) {
		alert("Please select number of guests");
		return false;
	}

	const booking = { name: nam, email: mail, phone, date, time, guests, message: document.getElementById("message").value.trim() };
	const bookings = JSON.parse(localStorage.getItem("tableBookings") || "[]");
	bookings.push(booking);
	localStorage.setItem("tableBookings", JSON.stringify(bookings));

	document.getElementById("booking-form").classList.add("d-none");
	document.getElementById("booking-success").classList.remove("d-none");
	return false;
}

function initMenuFilter() {
	document.querySelectorAll(".menu-cat").forEach((cat) => {
		cat.addEventListener("click", () => {
			const filter = cat.dataset.category;
			document.querySelectorAll(".menu-cat").forEach((c) => c.classList.remove("active-cat"));
			cat.classList.add("active-cat");
			document.querySelectorAll(".menu-item").forEach((item) => {
				item.style.display = filter === "all" || item.dataset.category === filter ? "" : "none";
			});
		});
	});
}

function initBookingDate() {
	const dateInput = document.getElementById("date");
	if (dateInput) {
		dateInput.min = new Date().toISOString().split("T")[0];
	}
}

document.addEventListener("DOMContentLoaded", () => {
	initMenuFilter();
	initBookingDate();

	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			const target = document.querySelector(link.getAttribute("href"));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: "smooth" });
				const collapse = document.getElementById("navbarText");
				if (collapse?.classList.contains("show")) {
					bootstrap.Collapse.getOrCreateInstance(collapse).hide();
				}
			}
		});
	});
});
