const movies = [
    {
        rating: '6.70',
        imgSrc: "./src/assets/images/image1.svg",
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
        imgSrc: "./src/assets/images/image1.svg",
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
        imgSrc: "./src/assets/images/image1.svg",
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
        imgSrc: "./src/assets/images/image1.svg",
        title: "Звёздные войны: Скайуокер. Восход",
        genre: "Триллер"
    }, {
        rating: '6.70',
        imgSrc: "./src/assets/images/image1.svg",
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
