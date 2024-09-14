export default class Games {
  constructor() {
    this.gamesData;
  }

  async getGamesData(gameCategory = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "27b8fe8d50msh26e35a85d8a0cdcp12ae4bjsnf14eace6d624",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let httpReq = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`,
      options
    );
    let response = await httpReq.json();
    // console.log(response);

    this.gamesData = response;
    // console.log(gamesData.length);
  }
}
