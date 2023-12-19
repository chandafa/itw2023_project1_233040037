let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal ({
    distance: '30px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.about-tittle , .home-text, .home-img, .information, .about-text , .wrapper, .dynamic-text, .static-text , .about, .about-img , .services, .heading , .services-content , .skill, .skill-container, .portfolio, .box, input, button, textarea, .footer, .social a',
{
    delay: 200,
    origin:'top', 
    reset: true
})

// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}


// submit 1
document.querySelector(".first").addEventListener('click', function(){
    Swal.fire("Our First Alert");
  });
  
  document.querySelector(".second").addEventListener('click', function(){
    Swal.fire("Our First Alert", "With some body text!");
  });
  
  document.querySelector(".third").addEventListener('click', function(){
    Swal.fire("Our First Alert", "With some body text and success icon!", "success");
  });



// wave
