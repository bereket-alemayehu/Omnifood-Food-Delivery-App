console.log("Hello World!  selam endet nachu");
const myname = "bereket alemayehu";
console.log(myname);

// h1.addEventListener('click', function () {
//   h1.textContent = myname;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// })

// Set current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// console.log(yearEl);

// Make Mobile Navigation Works
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//  Smooth scrolling animation

const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (links) {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    const href = links.getAttribute("href");
    console.log(href);

    // go back to the top smoothly

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#"));
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
    if (links.classList.contains("nav-open"));
    headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////
//  Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // this means the viewport
    threshold: 0, // this means the specified section is out of the viewport.
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// const allLinks = document.querySelectorAll('a');
// allLinks.forEach(
//   function (links) {
//     links.addEventListener('click',
//       function (e) {
//         e.preventDefault();

//         const href = links.getAttribute('href');

//
//         if (href === '#') window.scrollTo({
//           top: 0,
//           behavior: 'smooth',

//         });

//         if (href !== '#' && href.startsWith('#'))
//           console.log(href);
//         const sectionEl = document.querySelector(href);
//         sectionEl.scrollIntoView({ behavior: 'smooth' });
//         if (links.classList.contains('main-nav-link'))
//           headerEl.classList.toggle('nav-open');

//       });
//   });
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
