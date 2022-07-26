import "./dropdownMenu.css";

// Add event listeners to all dropdown buttons
const dropdownBtns = document.getElementsByClassName("dropbtn");
for (let i = 0; i < dropdownBtns.length; i++) {
	const btn = dropdownBtns[i];
	btn.addEventListener("click", showDropdown);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown(e) {
	const dropdownMenu = e.target.nextElementSibling;
	dropdownMenu.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		const dropdowns = document.getElementsByClassName("dropdown-content");
		for (let i = 0; i < dropdowns.length; i++) {
			const openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};
