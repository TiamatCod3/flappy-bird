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
    create
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
  bird = this.add.sprite(config.width * 0.1, config.height/2, 'bird').setOrigin(0);

}

new Phaser.Game(config);