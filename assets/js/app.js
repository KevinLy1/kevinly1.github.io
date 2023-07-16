document.addEventListener("DOMContentLoaded", function() {
    // Light-Dark theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      body.classList.toggle("dark-theme");
      let icon = document.querySelector("#theme-toggle i");
      
      if (body.classList.contains("light-theme")) {
        
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });

    // Minimize Sidebar
    const minimizeToggle = document.getElementById("minimize-toggle");
    const header = document.querySelector("header");

    minimizeToggle.addEventListener("click", () => {
      header.classList.toggle("minimized");
      let icon = document.querySelector("#minimize-toggle i");

      if(header.classList.contains("minimized")) {
        icon.classList.replace("fa-circle-arrow-left", "fa-circle-arrow-right");
      } else {
        icon.classList.replace("fa-circle-arrow-right", "fa-circle-arrow-left");
      }
    });

    // Burger Menu
    const burgerIcon = document.getElementById('burger-icon');
    const nav = document.querySelector('nav');
    
    burgerIcon.addEventListener('click', function() {
      nav.classList.toggle('active');
      if (nav.classList.contains('active')) {
        burgerIcon.innerHTML = '&#10005;';
      } else {
        burgerIcon.innerHTML = '&#9776;';
      }
    });

    // Fermer le Burger Menu si le click est effectué en dehors du menu burger
    document.addEventListener("click", function(e) {
      let click = e.target;
    
      if (nav.classList.contains('active') && !nav.contains(click)) {
        nav.classList.remove("active");
        burgerIcon.innerHTML = '&#9776;';
      }
    });

    // Timeline
    const timelineDates = document.querySelector('.timeline-dates');
    const timelineDescriptions = document.querySelectorAll('.timeline-description');
    
    timelineDates.addEventListener('click', function(event) {
      const clickedDate = event.target.closest('.timeline-date');
      if (clickedDate) {
        const index = Array.from(clickedDate.parentNode.children).indexOf(clickedDate);
        updateTimelineDescription(index);
        // updateTimelineDates(index);
      }
    });
    
    function updateTimelineDescription(index) {
      timelineDates.querySelector('.active').classList.remove('active');
      timelineDescriptions.forEach(function(description) {
        description.classList.remove('active');
      });
      timelineDates.children[index].classList.add('active');
      timelineDescriptions[index].classList.add('active');
    }
    
    // function updateTimelineDates(index) {
    //   const numItems = timelineDates.childElementCount;
    //   const firstVisibleIndex = Math.max(index - 1, 0);
    //   const lastVisibleIndex = Math.min(index + 1, numItems - 1);
    
    //   for (let i = 0; i < numItems; i++) {
    //     const date = timelineDates.children[i];
    //     if (i >= firstVisibleIndex && i <= lastVisibleIndex) {
    //       date.style.display = 'block';
    //     } else {
    //       date.style.display = 'none';
    //     }
    //     date.style.opacity = i === index ? 1 : 0.5;
    //   }
    // }

    // Current year
    const publishingYear = 2023;
    let currentYear = new Date().getFullYear();
    let year = document.getElementById("year");
    year.innerHTML = (currentYear === publishingYear) ? publishingYear : `${publishingYear}-${currentYear}`;
    
});