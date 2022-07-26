//hamburger menu

// DOM CREATION
const bar1 = document.createElement("span");
bar1.classList.add("bar");
const bar2 = document.createElement("span");
bar2.classList.add("bar");
const bar3 = document.createElement("span");
bar3.classList.add("bar");
const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("hamburger");
hamburgerDiv.append(bar1, bar2, bar3);

//toggle .active class
hamburgerDiv.addEventListener("click", () => {
	hamburgerDiv.classList.toggle("active");
	const navMenu = document.querySelector(".nav-menu");
	navMenu.classList.toggle("active");
});
