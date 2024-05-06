//for task
$(document).ready(function() {
		
  $('#calendar').fullCalendar({
    header: {
      // left: 'prev,next today',
      // center: 'title',
      // right: 'month,basicWeek,basicDay'
    },
    //defaultDate: '2016-12-12',
    navLinks: false, // can click day/week names to navigate views
    editable: false,
    eventLimit: false, // allow "more" link when too many events
    // events: [
    // 	{
    // 		title: 'All Day Event',
    // 		start: '2016-12-01'
    // 	},
    // 	{
    // 		title: 'Long Event',
    // 		start: '2016-12-07',
    // 		end: '2016-12-10'
    // 	},
    // 	{
    // 		id: 999,
    // 		title: 'Repeating Event',
    // 		start: '2016-12-09T16:00:00'
    // 	},
    // 	{
    // 		id: 999,
    // 		title: 'Repeating Event',
    // 		start: '2016-12-16T16:00:00'
    // 	},
    // 	{
    // 		title: 'Conference',
    // 		start: '2016-12-11',
    // 		end: '2016-12-13'
    // 	},
    // 	{
    // 		title: 'Meeting',
    // 		start: '2016-12-12T10:30:00',
    // 		end: '2016-12-12T12:30:00'
    // 	},
    // 	{
    // 		title: 'Lunch',
    // 		start: '2016-12-12T12:00:00'
    // 	},
    // 	{
    // 		title: 'Meeting',
    // 		start: '2016-12-12T14:30:00'
    // 	},
    // 	{
    // 		title: 'Happy Hour',
    // 		start: '2016-12-12T17:30:00'
    // 	},
    // 	{
    // 		title: 'Dinner',
    // 		start: '2016-12-12T20:00:00'
    // 	},
    // 	{
    // 		title: 'Birthday Party',
    // 		start: '2016-12-13T07:00:00'
    // 	},
    // 	{
    // 		title: 'Click for Google',
    // 		url: 'https://google.com/',
    // 		start: '2016-12-28'
    // 	}
    // ]
  });
  
});
//end
//for music video
(function($) {
  $(function() {
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
  $('nav ul').toggle();
});
  });
})(jQuery);
//for music play
const player = new Plyr('#video-player');
player.on('play', event => {
    $('#video-player').removeClass('active');
});
player.on('ended', event => {
    $('#video-player').addClass('active');
});
//end
const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector("i").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Dark and Light Mode with localStorage
(function () {
  let darkMode = localStorage.getItem("darkMode");
  const darkSwitch = document.getElementById("switch");

  // Enable and Disable Darkmode
  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
  };

  // User Already Enable Darkmode
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // User Clicks the Darkmode Toggle
  darkSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
})();

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);