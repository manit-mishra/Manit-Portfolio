// toggle-icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        //     //active sections for animation on scroll
        //     sec.classList.add('show-animate');
        // }
        // // if want to use animation that repeats on scroll
        // else{
        //     sec.classList.remove('show-animate');
        // }

    };
});

//     // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

//     // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//---------------------------------scroll reveal---------------------------------------
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .project-box, .contact form',{origin:'left'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// ----------------------------------------typed js--------------------------------
const typed = new Typed('.multiple-text',{
    strings:['Front-End Developer','Java Programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});

// ------------------------Contact Form Data------------------------------------------
