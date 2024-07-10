const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true,
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// ============

const Tswiper = new Swiper(".testimonial", {
  speed: 400,
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev",
  },
});

//skip

function createBadge() {
  var brand = document.createElement("a");
  brand.setAttribute("class", "w-webflow-badge");
  brand.setAttribute("href", "#");
  brand.setAttribute("target", "_blank");

  logoText.setAttribute("alt", "Made by codeopacity");

  //Style

  let style = document.createElement("style");

  style.innerHTML = `
          .w-webflow-badge {
              position: fixed;
              z-index: 99999;
              text-align: center;
              bottom: 48px;
              left: 46%;
              display: flex;
              align-items: center;
              border: .55px solid #ddd;
              border-radius: 4px;
              padding: 4px 8px 4px 4px;
              gap: 8px;
              background: #fff;
              animation: scale 1.2s linear;
          }
          @keyframes scale {
              from {
                  opacity: 0;
                  transform: scale(.5);
              }
              to{
                  opacity: 1;
                  transform: scale(1);
              }
          }
          .w-webflow-badge > img {
              max-height: 16px;
              width: auto;
  
          }
          .w-webflow-badge img.logo {
              aspect-ratio: 1/1;
              border-radius: 4px;
              overflow:hidden;
          }
          .w-webflow-badge img.logo-text {
              height: 12px;
          }
          `;
  document.head.appendChild(style);

  brand.appendChild(logoArt);
  brand.appendChild(logoText);

  return brand;
}
document.body.append(createBadge());

const sswiper = new Sswiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
