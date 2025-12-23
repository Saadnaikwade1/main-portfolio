/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME TYPED JS ===============*/
const typeHome = new Typed("#home-typed", {
  strings: [
    "Building Modern Web Experiences",
    "Backend Logic and APIs",
    "Python Programming",
    "Full Stack MERN Development",
  ],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 2000,
  cursorChar: "_",
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  /*
Create your account at https://www.emailjs.com/ 
and follow the instructions in the video and images 
to send emails with your account.
*/
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_otlk8sc",
      "template_5pifl4t",
      "#contact-form",
      "j_4UJ3F0OH4zjJoG1"
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      //clear input fields
      contactForm.reset();
    },
    () => {
      //show error
      contactMessage.textContent='Message not sent (service error) ❌'
    })
};

contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true,
})

sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container ')
sr.reveal('.home__data, .resume__content:nth-child(2)', { delay: 300, origin: 'bottom' })

sr.reveal('.about__content, .contact__content',{ origin: 'bottom' })
sr.reveal('.home__image , .contact__form', { delay: 300})

sr.reveal('.project__card', { interval: 100})
