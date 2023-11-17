const navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-nav-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-nav-menu");
});

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("show-header")
    : header.classList.remove("show-header");
};
window.addEventListener("scroll", scrollHeader);

const showScrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 50
    ? scrollUp.classList.add("show-scroll-up")
    : scrollUp.classList.remove("show-scroll-up");
};
window.addEventListener("scroll", showScrollUp);

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_78eam3r",
      "template_2maaluh",
      "#contact-form",
      "Tsj0IYpPfm7QRYrya"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home-name,.home-info,.about-container,.section-title-1,.about-info,.contact-socials,.contact-data`,
  { origin: "left" }
);
sr.reveal(`.home-perfil,.about-images,.contact-mail`, {
  origin: "right",
});
sr.reveal(`.project-card,.footer-container`, { interval: 100 });

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
