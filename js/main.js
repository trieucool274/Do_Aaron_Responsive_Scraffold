(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var navContain = document.querySelector("#navContain");

	function hamburgerMenu() {
		navContain.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
		
})();