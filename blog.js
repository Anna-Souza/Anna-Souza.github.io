 const headers = document.getElementsByClassName("materia"),
        contents = document.getElementsByClassName("content"),
        icons = document.getElementsByClassName("abrir");
	 
for (let i = 0; i < headers.length; i++) {
     headers[i].addEventListener("click", () => { contents[i].style.display = contents[i].style.display == "block" ? "none" : "block";
     });
}