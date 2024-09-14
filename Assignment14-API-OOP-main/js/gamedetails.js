export default function GameDetails() {
  this.title;
  this.gameStatus;
  this.thumbnail;
  this.description;
  this.gameUrl;
  this.genre;
  this.platform;

  this.getGameDetails = async function (gameId = 582) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "27b8fe8d50msh26e35a85d8a0cdcp12ae4bjsnf14eace6d624",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let httpReq = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      options
    );
    let response = await httpReq.json();

    // console.log(response);

    this.title = response.title;
    this.gameStatus = response.status;
    this.thumbnail = response.thumbnail;
    this.description = response.description;
    this.gameUrl = response.game_url;
    this.genre = response.genre;
    this.platform = response.platform;

    // console.log(this.title);
  };
}
