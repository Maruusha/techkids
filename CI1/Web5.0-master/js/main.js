var Nakama = {};
Nakama.configs = {
  bulletSpeed :   1500,
  shipSpeed   :   500
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.players = [];
  Nakama.players.push( new ShipController(400,700,"Spaceship1-Player.png",
    {
      up  : Phaser.Keyboard.UP,
      down: Phaser.Keyboard.DOWN,
      left: Phaser.Keyboard.LEFT,
      right:Phaser.Keyboard.RIGHT,
      fire: Phaser.Keyboard.SPACEBAR,
      cooldown  : 0.4
    }))

  Nakama.players.push( new ShipController(200,700,"Spaceship1-Partner.png",
    {
      up  : Phaser.Keyboard.W,
      down: Phaser.Keyboard.S,
      left: Phaser.Keyboard.A,
      right:Phaser.Keyboard.D,
      fire: Phaser.Keyboard.CONTROL,
      cooldown  : 0.4
    }))

}

// update game state each frame
var update = function(){
  for( var i=0;i<Nakama.players.length;i++)
    Nakama.players[i].update();
}

// before camera render (mostly for debug)
var render = function(){}
