class BulletController {
  constructor(position, spriteName, direction){
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      "assets",
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    Nakama.game.physics.enable(this.sprite);
    this.sprite.checkWorldBounds = true;
    this.sprite.outofBoundsKill = true;
    this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.bulletSpeed);
  }
}
