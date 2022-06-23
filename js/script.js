console.log("hello");

const btnMobileMenu = document.querySelector(".btn--mobile-nav");
const header = document.querySelector(".header");

btnMobileMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((l) => {
  l.addEventListener("click", (e) => {
    e.preventDefault;

    const href = l.getAttribute("href");

    // scroll to other links
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && header.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (l.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false)
      document.body.querySelector(".header").classList.add("sticky");
    if (ent.isIntersecting === true)
      document.body.querySelector(".header").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
