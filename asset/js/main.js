
const toggleButton = document.getElementById('nav__toggle');
    const menu = document.getElementById('nav-menu');

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        // Toggle the 'active' class on the menu
        menu.classList.toggle('active');
    });

    // Optional: Close the menu when clicking the close button
    const closeButton = document.getElementById('nav-close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    }


function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 40) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);



var brandSwiper = new Swiper(".brand-swiper", {
   
    spaceBetween: 24,
    loop : true,
    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });


var animeSwiper = new Swiper(".anime-swiper", {
   
    spaceBetween: 24,
    loop : true,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });




