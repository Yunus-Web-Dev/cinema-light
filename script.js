  const loader = document.getElementById('loader');
  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      document.body.classList.remove('loading');
      setTimeout(() => {
        loader.remove();
      }, 1000); // Плавно исчезает
    }, 2000); // 4 секунд
  });


function scrollingOfHeader() {
    window.addEventListener('scroll', function () {
        const header = this.document.getElementsByTagName('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        };
    });
}

const movies = [
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image2.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image4.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image3.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image1.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image5.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image6.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image7.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    }, {
        rating: '6.70',
        imgSrc: "./src/assets/images/image8.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    },
];

function renderNewFilms() {
    const container = document.getElementById('cinemas-container');

    movies.forEach(movie => {
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
    });
}

renderNewFilms();



const trailers = [
    {
        title: 'Мулан',
        src: 'https://www.youtube.com/embed/5w_B6xHGFms'
    },
    {
        title: 'Форсаж 9',
        src: 'https://www.youtube.com/embed/uyPLu4E45So'
    },
    {
        title: 'Чёрная вдова',
        src: 'https://www.youtube.com/embed/nSaGrHhkdVs'
    },
    {
        title: 'Тихое место 2',
        src: 'https://www.youtube.com/embed/5Rjm8TVa1T0'
    },
];

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





const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
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



// swiper rendering 

const filmSlides = [
    //Первый слайд
    [
        { title: 'Джокер', genres: 'Триллер, драма, криминал', img: './src/assets/images/film4.svg' },
        { title: 'История игрушек 4', genres: 'Мультфильм, фентези, комедия, приключения', img: './src/assets/images/film1.svg' },
        { title: 'Однажды в... Голливуде', genres: 'Драма, комедия', img: './src/assets/images/film2.svg' },
        { title: 'Солнцестояние', genres: 'Ужасы, триллер, драма', img: './src/assets/images/film3.svg' },
    ],
    // Второй слайд
    [
        { title: 'Морские паразиты', genres: 'Ужасы, фантастика', img: './src/assets/images/film5.svg' },
        { title: 'Запретная зона', genres: 'Триллер', img: './src/assets/images/film6.svg' },
        { title: 'Приключения котёнка Пелле', genres: 'Мультфильм', img: './src/assets/images/film7.svg' },
        { title: 'Агент Лев', genres: 'Комедия', img: './src/assets/images/film8.svg' },
    ],
    // Третий слайд
    [
        { title: 'Белка и Стрелка: Карибская тайна', genres: 'Мультфильм, комедия, приключения, семейный', img: './src/assets/images/film9.svg' },
        { title: 'Запретная кухня', genres: 'Семейный', img: './src/assets/images/film10.svg' },
        { title: '8 с половиной', genres: 'Драма, ...', img: './src/assets/images/film11.svg' },
        { title: 'Выживший', genres: 'Триллер, детектив, драма, ...', img: './src/assets/images/film12.svg' },
    ],

];

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