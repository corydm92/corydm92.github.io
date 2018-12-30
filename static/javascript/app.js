// let menuButton = document.getElementById('menu-img');

let navContainer = document.getElementById('nav-container')

let headerContainer = document.getElementById('header-container');

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(e) {

    if (hamburger.classList.contains('unclicked')) {
        hamburger.classList.toggle("is-active");
        hamburger.classList.remove('unclicked');
        hamburger.classList.add('clicked');

        navContainer.classList.add('show');
    } else {
        hamburger.classList.toggle("is-active");
        hamburger.classList.remove('clicked');
        hamburger.classList.add('unclicked');

        navContainer.classList.remove('show');
    }

});


// Javascript to link to About in page
let aboutLink = document.getElementById('about-button')

aboutLink.addEventListener('click', function(e) {
    let projectElement = document.getElementById('about-section');

    projectElement.scrollIntoView(true);
    
    hamburger.click();

});

// Javascript to link to Projects in page
let projectsLink = document.getElementById('project-button')

projectsLink.addEventListener('click', function(e) {
    let projectElement = document.getElementById('project-link');

    projectElement.scrollIntoView(true);
    
    hamburger.click();

});

// Javascript to link to Resume in page
let resumeLink = document.getElementById('resume-button')

resumeLink.addEventListener('click', function(e) {
    let projectElement = document.getElementById('resume-link');

    projectElement.scrollIntoView(true);
    
    hamburger.click();

});

// Javascript to link to Contact in page
let contactLink = document.getElementById('contact-button')

contactLink.addEventListener('click', function(e) {
    let projectElement = document.getElementById('contact-link');

    projectElement.scrollIntoView(true);
    
    hamburger.click();

});

