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

/* --- CARROSSEL 3D --- */

const carousel = document.querySelector("#carousel");
const items = document.querySelectorAll("#carousel .item");

let currentIndex = 0;
let isDragging = false;
let startX = 0;

function updateCarousel() {
    if (!carousel) return;

    items.forEach(item =>
        item.classList.remove("left", "center", "right")
    );

    const total = items.length;

    items[(currentIndex + total - 1) % total].classList.add("left");
    items[currentIndex].classList.add("center");
    items[(currentIndex + 1) % total].classList.add("right");
}

if (carousel) {
    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX;
        carousel.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", (e) => {
        if (!isDragging) return;

        isDragging = false;
        carousel.style.cursor = "grab";

        const moveX = e.pageX - startX;

        if (moveX > 80)
            currentIndex = (currentIndex + items.length - 1) % items.length;
        else if (moveX < -80)
            currentIndex = (currentIndex + 1) % items.length;

        updateCarousel();
    });

    carousel.addEventListener("dragstart", (e) =>
        e.preventDefault()
    );

    updateCarousel();
}
