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
