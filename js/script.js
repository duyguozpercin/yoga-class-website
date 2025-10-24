let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        let src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});


const swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

async function fetchQuote() {
  try {
    const response = await fetch("quotes.json");
    const data = await response.json();

   
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];

    document.getElementById("quote-text").textContent = `"${quote.content}" — ${quote.author}`;
  } catch (error) {
    
    document.getElementById("quote-text").textContent =
      '"Coffee is always a good idea." ☕️';
  }
}

document.addEventListener("DOMContentLoaded", fetchQuote);
