const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a:not(.social-link)");

links.forEach(function (link) {
  link.addEventListener("click", function (el) {
    el.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("nav-link")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

const heroElement = document.querySelector(".section-hero");
const navObserver = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

navObserver.observe(heroElement);

const appShots = document.querySelectorAll(".mobile-bg");
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-img");
    } else {
      entry.target.classList.remove("animate-img");
    }
  });
});

appShots.forEach((el) => scrollObserver.observe(el));
