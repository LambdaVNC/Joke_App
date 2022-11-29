class UI {
  constructor() {
    this.btnGet = document.querySelector("#btnGet");
    
  }

  async getJoke() {
    const joke = await new JokeApi().randomSakaGetir();
    const image = await new UnsplashApi().randomGetPhoto();
    
    this.printUi(joke,image);
  }



 printUi (joke,image){
    
    document.querySelector(".sonuc").innerHTML = 
    `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <p class="card-text lh-sm">${joke}</p>
            </div>
        </div>
    </div>
</div>
    `;
 }

}
