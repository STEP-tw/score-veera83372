let Game = function (numberOfRows,numberOfCols) {
  this._rows=numberOfRows;
  this._cols=numberOfRows;
  this._snake={};
  this._food={};
  this._player={};
}

let gameMethods={
  get snake(){
    return this._snake;
  },
  get food(){
    return this._food;
  },
  get player(){
    return this._player;
  },
  updateScoreBy:function (score) {
    this.player.updateScoreBy(score)
  },
  addSnake:function (snake) {
    this._snake=snake;
  },
  addPlayer:function (player) {
    this._player=player;
  },
  get playerScore(){
    return this.player.score;
  }
}

Game.prototype=gameMethods;
