import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics:{
    default: 'arcade'
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

let bird = null;

//Initializae instances of application
function create(){
  //x e y da imagem ficam centralizados no canto superior esquerdo
  // this.add.image(config.width / 2 , config.height / 2, 'sky').setOrigin(0,0);
  this.add.image(0, 0, 'sky').setOrigin(0,0);
  // this.add.image(0, 0, 'sky').setOrigin(0.9,0);
  // this.add.image(config.width / 2 , config.height / 2, 'sky').setOrigin(1,0);
  // Phisics addition
  bird = this.physics.add.sprite(config.width * 0.1, config.height/2, 'bird').setOrigin(0);

  bird.body.gravity.y = 100;
}

//time is the time passed since game initilize
//delta is the time between frames
//By default it is setted to 60fps and delta of 16.6ms
function update(time, delat){
  console.log(bird.body.velocity.y);
}

new Phaser.Game(config);