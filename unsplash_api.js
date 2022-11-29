class UnsplashApi {
  constructor() {
    this.clientID = "Client-ID SSKlKDY0rqCGNQ-YHFEyQvZo7budL7T70_YTkFb_8Ug";
    this.baseURL = "https://api.unsplash.com";
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "animal",
      },
    });
  }

  async randomGetPhoto() {
    try {
      const response = await this.axiosNesne.get("/photos/random");
      console.log(response.data.urls.regular);
    } catch (error) {
      console.log(error);
      console.log("bir sorun var");
    }
  }
}
