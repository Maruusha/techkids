class EnemyController {
  constructor(x,y,spriteName){
    this.sprite = Nakama.enemyGroup.create(
      x,
      y,
      "assets",
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    Nakama.game.physics.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.moveRight = 1;
  }
  update(){
    if(this.sprite.moveRight>0) this.sprite.body.velocity.x = Nakama.configs.enemySpeed;
    else this.sprite.body.velocity.x = - Nakama.configs.enemySpeed;
    if(this.sprite.x<100) this.sprite.moveRight = 1 - this.sprite.moveRight;
    if(this.spirte.x>500) this.sprite.moveRight = 1 - this.sprite.moveRight;
  }
}
