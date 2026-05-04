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