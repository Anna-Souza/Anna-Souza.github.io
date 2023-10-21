// IIF do Menu Accordion - Blog
(function () {
    const headers = document.getElementsByClassName("visible"),
        contents = document.getElementsByClassName("hidden"),
        icons = document.getElementsByClassName("open");

    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener("click", () => {

            for (let j = 0; j < contents.length; j++) {
                if (i == j) {
                    icons[j].innerHTML = contents[j].getBoundingClientRect().height === 0 ? "-" : "+";
                    contents[j].classList.toggle("hidden-transition");
                } else {
                    icons[j].innerHTML = "+";
                    contents[j].classList.remove("hidden-transition");
                }
            }

        });
    }
})()

// Botão topo - Textos

const topo = document.querySelector("#btn");

window.addEventListener("scroll", function(event) {
	if (window.scrollY == 0) {
		topo.classList.remove("mostrar");
	} else {
		topo.classList.add("mostrar");
	}
})