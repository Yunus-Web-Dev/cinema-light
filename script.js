import movies from "./public/data/movies.js";
import trailers from "./public/data/trailers.js";
import filmSlides from "./public/data/filmSlides.js";
import filmSlides2 from "./public/data/filmSlides2.js";
import filmSlides3 from "./public/data/filmSlides3.js";
import data from "./public/data/raitings.js";
//Loader start
// const loader = document.getElementById('loader');
// document.body.classList.add('loading');

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         loader.style.opacity = '0';
//         document.body.classList.remove('loading');
//         setTimeout(() => {
//             loader.remove();
//         }, 1000); // Плавно исчезает
//     }, 2000); // 4 секунд
// });
//Loader end


// ScrollingOfHeader start
// function scrollingOfHeader() {
//     window.addEventListener('scroll', function () {
//         const header = this.document.getElementsByTagName('header');
//         if (window.scrollY > 50) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         };
//     });
// }
// scrollingOfHeader();
// ScrollingOfHeader end


// старт Отрисовка фильмов первый этап все новинки
let currentIndex = 0;
const step = 8;

function renderNewFilms() {
    const container = document.getElementById('cinemas-container');
    const end = Math.min(currentIndex + step, movies.length);

    for (let i = currentIndex; i < end; i++) {
        const movie = movies[i];

        const movieBlock = document.createElement('div');
        movieBlock.className = 'now-in-cinemas-block';

        movieBlock.innerHTML = `
            <div class="raiting">${movie.rating}</div>
            <img src="${movie.imgSrc}" alt="poster">
            <div class="now-in-cinemas-info">
                <h3>${movie.title}</h3>
                <span>${movie.genre}</span>
            </div>
        `;

        container.appendChild(movieBlock);
    }

    currentIndex = end;

    if (currentIndex >= movies.length) {
        document.getElementById('show-more').style.display = 'none';
    }
}

document.getElementById('show-more').addEventListener('click', renderNewFilms);
renderNewFilms();
//конец Отрисовка фильмов первый этап все новинки



// Старт отрисовка оверфлов трэйлер
const container = document.getElementById('trailers-container-rendering');
container.innerHTML = trailers.map(trailer => `
                <div class="overflow-trailers-block">
                    <iframe width="100%" src="${trailer.src}"
                        title="Мулан — Русский трейлер #2 (2020)" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <span>${trailer.title}</span>
                </div>
    `).join(' ');
//Конец отрисовка оверфлов трэйлер




// swiper rendering 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

function renderingOfSwiperElems() {
    const wrapper = document.querySelector('.swiper-wrapper');
    wrapper.innerHTML = filmSlides.map(slide =>
        `<div class="swiper-slide">
            ${slide.map(film => `
                <div class="popular-films">
                    <img src="${film.img}" alt="${film.title}">
                    <div class="film-desc">
                        <h3>${film.title}</h3>
                        <span>${film.genres}</span>
                    </div>
                </div>
            `).join('')}
        </div>`
    ).join('');
};

renderingOfSwiperElems();

function renderingOfSwiperElems2() {
    const wrapper = document.querySelector('#swiper-wrapper2');
    wrapper.innerHTML = filmSlides2.map(slide =>
        `<div class="swiper-slide" id="swiper-slide2">
            ${slide.map(film => `
                <div class="popular-films">
                    <img src="${film.img}" alt="${film.title}">
                    <div class="film-desc">
                        <h3>${film.title}</h3>
                        <span>${film.genres}</span>
                    </div>
                </div>
            `).join('')}
        </div>`
    ).join('');
};

renderingOfSwiperElems2();


function renderingOfSwiperElems3() {
    const wrapper = document.querySelector('#swiper-wrapper3');
    wrapper.innerHTML = filmSlides2.map(slide =>
        `<div class="swiper-slide" id="swiper-slide3">
            ${slide.map(film => `
                <div class="popular-films">
                    <img src="${film.img}" alt="${film.title}">
                    <div class="film-desc">
                        <h3>${film.title}</h3>
                        <span>${film.genres}</span>
                    </div>
                </div>
            `).join('')}
        </div>`
    ).join('');
};

renderingOfSwiperElems3();




let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (!slides.length) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
window.showSlides = showSlides;

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});



function renderPopularFaces(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { topFaces, otherRatings } = data;

    const renderTopFaces = () => {
        return topFaces.map(person => `
                      <div class="popular-faces-inner-container">
            <span>${person.place}</span>
            <img src="${person.img}" alt="${person.nameEn}">
            <div class="people-info">
              <h3>${person.nameRu}</h3>
              <span>${person.nameEn}</span>
              <span>${person.age}</span>
            </div>
          </div>
            `).join('');
    };

    const renderOtheratings = () => {
        return `
                  <div class="people-raitings">
            ${otherRatings.map(person => `
              <div class="raiting">
                <div class="raiting-left">
                  <h3>${person.nameRu}</h3>
                  <h4>${person.nameEn}</h4>
                  <span>${person.age}</span>
                </div>
                <div class="raiting-right">
                  <span>${person.place}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
    };

    container.innerHTML = renderTopFaces() + renderOtheratings();
}
renderPopularFaces('popularFacesContainer');