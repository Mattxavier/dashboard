
for (const link of Array.from(document.querySelectorAll(".nav__list__link"))) {
    link.addEventListener("click", function() {

        const existeAtivo = document.querySelector(".nav__list__link--active");

        if (existeAtivo) {
            existeAtivo.classList.remove("nav__list__link--active");
        }

        link.classList.add("nav__list__link--active");
    });

}

//#region Toggler
const botaoToggler = document.querySelector(".nav__theme-toggler");

botaoToggler.addEventListener("click", function() {
    botaoToggler.classList.toggle("nav__theme-toggler--active");
});
//#endregion