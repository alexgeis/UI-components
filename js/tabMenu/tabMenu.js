function activeTab(tabName) {
	console.log(tabName);
	console.log("entered");
	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tab-link" and remove the class "active"
	const tablinks = document.getElementsByClassName("tab-link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	const activeTab = document.getElementById(tabName);
	activeTab.style.display = "block";
	activeTab.className += " active";
}

const tabLink1 = document.getElementById("tab-link-1");
const tabLink2 = document.getElementById("tab-link-2");
const tabLink3 = document.getElementById("tab-link-3");
const tabLink4 = document.getElementById("tab-link-4");

tabLink1.addEventListener("click", activeTab("tab1"));
tabLink1.addEventListener("click", activeTab("tab2"));
tabLink1.addEventListener("click", activeTab("tab3"));
tabLink1.addEventListener("click", activeTab("tab4"));
