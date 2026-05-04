const floatingElements = document.querySelectorAll(".floating");

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

const rows = document.querySelectorAll(".gallery-row");

function revealRows(){

    rows.forEach(row => {

        const rect = row.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        /* dentro da zona visível */
        if(
            rect.top < screenHeight - 100 &&
            rect.bottom > 100
        ){
            row.classList.add("active");
        } 
        
        /* saiu do ecrã */
        else{
            row.classList.remove("active");
        }

    });

}

window.addEventListener("scroll", revealRows);

revealRows();

const header = document.querySelector("header");

function updateHeader(){

    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();
const contactSection = document.querySelector("#contact");

function detectContact(){

    const contactTop = contactSection.getBoundingClientRect().top;
    const header = document.querySelector("header");

    if(contactTop <= 120){
        header.classList.add("on-contact");
    } else{
        header.classList.remove("on-contact");
    }

}

window.addEventListener("scroll", () => {
    updateHeader();
    detectContact();
});

updateHeader();
detectContact();

const header = document.querySelector("header");
const contactSection = document.querySelector("#contact");
const logo = document.querySelector("#header-logo");

function updateHeader(){

    const contactTop = contactSection.getBoundingClientRect().top;

    // efeito blur
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }

    // troca de logo no contacto
    if(contactTop <= 120){

        header.classList.add("on-contact");
        logo.src = "imagem/logo branco.png";

    } else{

        header.classList.remove("on-contact");
        logo.src = "imagem/logo3.png";

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();






