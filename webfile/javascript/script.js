//Début menu Burger //

function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
  
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    }); 
  })
   
}
toggleMenu();

//Fin menu Burger //


//Début clik ça remonte //

let chevron = document.createElement("p");
chevron.textContent = "<";
document.body.appendChild(chevron);
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
        chevron.classList.add("visible");
    }
    else {
        chevron.classList.remove("visible");
    }
});
chevron.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
})

//Fin clik ça remonte //