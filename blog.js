
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
