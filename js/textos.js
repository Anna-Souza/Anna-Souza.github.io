const topo = document.querySelector("#btn");

window.addEventListener("scroll", function(event) {
	if (window.scrollY == 0) {
		topo.classList.remove("mostrar");
	} else {
		topo.classList.add("mostrar");
	}
})