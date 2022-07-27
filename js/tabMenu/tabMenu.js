function activeTab(tabName) {
	console.log(tabName);
	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tab-link" and remove the class "active"
	const tablinks = document.getElementsByClassName("tab-link");
	for (let i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("active");
	}
	console.log({ tablinks });
	// Show the current tab, and add an "active" class to the button that opened the tab
	const activeTab = document.getElementById(tabName);
	console.log(activeTab);
	activeTab.style.display = "block";
	activeTab.classList.add("active");
}

const tabLink1 = document.getElementById("tab-link-1");
const tabLink2 = document.getElementById("tab-link-2");
const tabLink3 = document.getElementById("tab-link-3");
const tabLink4 = document.getElementById("tab-link-4");

tabLink1.addEventListener("click", activeTab("tab1"));
tabLink2.addEventListener("click", activeTab("tab2"));
// tabLink3.addEventListener("click", activeTab("tab3"));
// tabLink4.addEventListener("click", activeTab("tab4"));
