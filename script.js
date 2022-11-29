const joke = new JokeApi();
const image = new UnsplashApi();
const ui = new UI();

ui.btnGet.addEventListener('click', () => {
    ui.getJoke();
});



joke.randomSakaGetir();
image.randomGetPhoto();

