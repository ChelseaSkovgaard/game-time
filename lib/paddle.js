function Paddle(width) {
  this.x = 250;
  this.y = 590;
  this.width= width || 80;
  this.height = 10;
}
Paddle.prototype.moveRight = function paddleMoveRight() {
  if (this.x < 420) {
    this.x = this.x + 10;
  }
};

Paddle.prototype.moveLeft = function paddleMoveLeft() {
  if (this.x > 0) {
    this.x = this.x - 10;
  }
};

module.exports = Paddle;
