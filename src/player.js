const Player = function (name) {
  this._name=name;
  this._score=0;
}

const playerMethods = {
  get score(){
    return this._score;
  },
  updateScoreBy:function (scoreToAdd) {
    this._score +=scoreToAdd
  },
  get name(){
    return this._name;
  }
}

Player.prototype=playerMethods;
