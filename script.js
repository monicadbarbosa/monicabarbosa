const floatingElements = document.querySelectorAll(".floating");
const rows = document.querySelectorAll(".gallery-row");

const header = document.querySelector("header");
const contactSection = document.querySelector("#contact");


/* BOLAS FLUTUANTES */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatingElements.forEach((el, index) => {

        const speed = (index + 1) * 20;

        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;

        el.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

});


/* ANIMAÇÃO DOS PROJETOS */

function revealRows(){

    rows.forEach((row) => {

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


/* HEADER */

function updateHeader(){

    if(!header) return;

    /* efeito glass/scroll */
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }

    /* detectar secção contacto */
    if(contactSection){

        const contactTop =
            contactSection.getBoundingClientRect().top;

        if(contactTop <= 120){
            header.classList.add("on-contact");
        } else{
            header.classList.remove("on-contact");
        }

    }

}


/* SCROLL */

window.addEventListener("scroll", () => {

    revealRows();
    updateHeader();

});


/* LOAD */

window.addEventListener("load", () => {

    revealRows();
    updateHeader();

});
