import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics:{
    default: 'arcade',
    arcade:{
      gravity: {y: 400},
      debug: true
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

//Loading assets, such images, music, animations ....
function preload(){
  //this contxt - scene
  // contains funciton and propoesties tha can use
  this.load.image('sky', 'assets/sky.png');
  
}

const WIDTH = config.width;
const VELOCITY = 250;
const flapVelocity = 250;
let bird = null;
let totalDelta = null;

//Initializae instances of application
function create(){
  //x e y da imagem ficam centralizados no canto superior esquerdo
  // this.add.image(config.width / 2 , config.height / 2, 'sky').setOrigin(0,0);
  this.add.image(0, 0, 'sky').setOrigin(0,0);
  // this.add.image(0, 0, 'sky').setOrigin(0.9,0);
  // this.add.image(config.width / 2 , config.height / 2, 'sky').setOrigin(1,0);
  // Phisics addition
  bird = this.physics.add.sprite(config.width * 0.1, config.height/2, 'bird').setOrigin(0);

  this.input.on('pointerdown', flap);
  this.input.keyboard.on('keydown_SPACE', flap);
  
}


//time is the time passed since game initilize
//delta is the time between frames
//By default it is setted to 60fps and delta of 16.6ms
function update(time, delta){

  if(bird.x >= WIDTH - bird.width){
    bird.body.velocity.x = -VELOCITY;
  }else if(bird.x < 0){
    bird.body.velocity.x = VELOCITY;
  }


}

function flap(){
  bird.body.velocity.y = -flapVelocity;
}
new Phaser.Game(config);