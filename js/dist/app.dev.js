"use strict";

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var navList = document.getElementById("navbar__list");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var main = document.getElementById("main");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Creating the Back-To-Top button

var mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //When the window goes down a bit, the button displays as block
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
//Creating the navigation links using a list of links, looping and adding each link to the nav


var listItems = ['Section1', 'Section2', 'Section3', 'Section4'];
var count = 1;
listItems.forEach(function (item) {
  var lists = document.createElement("li");
  lists.classList.add("menu__link");
  lists.setAttribute('id', "sec" + count);
  count++;
  lists.innerText = item;
  navList.appendChild(lists);
}); // Add class 'active' to section when near top of viewport

/* let active = document.querySelectorAll("section");
function activeM(){
  let sect = active.length;
  while(--sect && window.scrollY + 20 < active[sect].offsetTop){}
  active.forEach(its => its.classList.remove("active"));
  active[sect].classList.add("active");
}
window.addEventListener("scroll", activeM); */
//Using getboundingclientrect method to the section position if in view

var activeViewport = function activeViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return distance.top >= -80 && distance.left >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) && distance.right <= (window.innerWidth || document.documentElement.clientWidth);
};

window.addEventListener('scroll', function (event) {
  var activate = document.querySelectorAll('section'); // add event on scroll

  activate.forEach(function (element) {
    if (activeViewport(element)) {
      //if in Viewport
      element.classList.add("your-active-class");
    } else {
      element.classList.remove("your-active-class");
    }
  }); // Adding an active class to Navbar corresponding to active section
  // section1

  if (activeViewport(section1)) {
    inView.classList.add("inview-link");
  } else {
    inView.classList.remove("inview-link");
  }

  ; // section2

  if (activeViewport(section2)) {
    inView2.classList.add("inview-link");
  } else {
    inView2.classList.remove("inview-link");
  }

  ; // section3

  if (activeViewport(section3)) {
    inView3.classList.add("inview-link");
  } else {
    inView3.classList.remove("inview-link");
  }

  ; // section4

  /* if(activeViewport(section4)){
    inView4.classList.add("inview-link")
  }else{
    inView4.classList.remove("inview-link")
  }; */
}, false); // Scroll to anchor ID using scrollTO event

var inView = document.getElementById("sec1");

inView.onclick = function scrollToView() {
  section1.classList.add("your-active-class");
  section1.scrollIntoView(true);
};

var inView2 = document.getElementById("sec2");

inView2.onclick = function scrollToView() {
  section2.scrollIntoView(true);
  section2.classList.add("your-active-class");
};

var inView3 = document.getElementById("sec3");

inView3.onclick = function scrollToView() {
  section3.scrollIntoView(true);
  section3.classList.add("your-active-class");
};

var inView4 = document.getElementById("sec4");

inView4.onclick = function scrollToView() {
  var sectionFour = document.createElement("section");
  sectionFour.setAttribute("id", "section4");
  sectionFour.innerHTML = "<div class=\"landing__container\">\n                            <h2>Section 4</h2>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>\n\n                            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>\n                          </div>";
  main.appendChild(sectionFour);
  var section4 = document.getElementById("section4");
  section4.classList.add("your-active-class");
  section4.scrollIntoView(true);
  window.addEventListener("scroll", function () {
    if (activeViewport(section4)) {
      inView4.classList.add("inview-link");
    } else {
      inView4.classList.remove("inview-link");
    }

    ;
  });
};
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu   --- DONE
// Scroll to section on link click --- DONE
// Set sections as active  --- DONE