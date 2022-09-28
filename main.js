// const loadData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
// (async () => {
//   const feedbacks = await loadData("./feedback.json");
// const slide = document.querySelector(".swiper-wrapper");
// slide.innerHTML = ``;
// feedbacks.map((feedback) => {
//   slide.innerHTML += `
//       <div class="swiper-slide shadow">
//         <blockquote class="customer">
//           <img src=${feedback.img} alt="customer review"/>
//           <div>
//           <i class="fa-solid fa-star"></i>
//           <i class="fa-solid fa-star"></i>
//           <i class="fa-solid fa-star"></i>
//           <i class="fa-solid fa-star"></i>
//           <i class="fa-regular fa-star"></i>
//           <span>${feedback.rating}</span>
//           </div>
//           <p>${feedback.comment}</p>
//         </blockquote>
//       </div>
// `;
// });
// })();
(function () {
  const images = document.querySelectorAll(".hero-img");

  const imageOptions = {};
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    });
  }, imageOptions);

  images.forEach((img) => {
    observer.observe(img);
  });
})();
let slidePosition = 0;
function currentSlide(n) {
  showSlides((slidePosition = n));
}

showSlides(slidePosition);
function showSlides(n) {
  const slides = document.querySelectorAll(".hero-slide");
  const totalSlides = slides.length;
  const dots = document.querySelectorAll(".dot");

  if (n > totalSlides - 1) {
    slidePosition = 0;
  }
  if (n < 0) {
    slidePosition = totalSlides - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[slidePosition].style.display = "grid";
  dots[slidePosition].classList.add("active");
}
const autoSlide = setInterval(() => {
  slidePosition++;
  showSlides(slidePosition);
}, 5000);

document.querySelector(".ad-close-icon").addEventListener("click", () => {
  const adSlug = document.querySelector(".ad-slug-section");
  adSlug.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".fdswiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    freeMode: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 2,
      },
    },
  });
  const newSwiper = new Swiper(".trSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    grapCursor: true,

    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".tr-next-button",
      prevEl: ".tr-prev-button",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 2,
      },
    },
  });
});
