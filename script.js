const floatingElements = document.querySelectorAll(".floating");
const rows = document.querySelectorAll(".gallery-row");

const header = document.querySelector("header");
const contactSection = document.querySelector("#contact");
const logo = document.querySelector("#header-logo");


/* BOLAS FLUTUANTES */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatingElements.forEach((el, index) => {

        const speed = (index + 1) * 20;

        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;

        el.style.transform = `translate(${moveX}px, ${moveY}px)`;

    });

});


/* REVEAL DOS PROJETOS */

function revealRows(){

    rows.forEach(row => {

        const rect = row.getBoundingClientRect();

        if(
            rect.top < window.innerHeight - 100 &&
            rect.bottom > 100
        ){
            row.classList.add("active");
        } else{
            row.classList.remove("active");
        }

    });

}


/* HEADER + CONTACTO */

function updateHeader(){

    if(!header) return;

    // blur header
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }

    // troca logo no contacto
    if(contactSection && logo){

        const contactTop = contactSection.getBoundingClientRect().top;

        if(contactTop <= 120){

    header.classList.add("on-contact");

    console.log("trocar para branco");
    logo.src = "./imagem/logo branco.png";

} else{

    header.classList.remove("on-contact");

    console.log("trocar para normal");
    logo.src = "./imagem/logo3.png";

}

/* EVENTOS */

window.addEventListener("scroll", () => {

    revealRows();
    updateHeader();

});


/* LOAD */

revealRows();
updateHeader();
