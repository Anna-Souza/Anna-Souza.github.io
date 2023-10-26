// IIF Menu Accordion
(function () {
	const headers = document.getElementsByClassName("visible"),
	contents = document.getElementsByClassName("hidden");

	for (let i = 0; i < headers.length; i++) {
		headers[i].addEventListener("click", () => {
			for (let j = 0; j < contents.length; j++) { 
				if (i == j) {
					contents[j].classList.toggle("hidden-transition");
				} else {
					contents[j].classList.remove("hidden-transition");
				}
			}
		});
	}
})()
