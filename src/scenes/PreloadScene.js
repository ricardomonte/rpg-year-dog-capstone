class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene')
  }

  preload(){
    this.load.tilemapTiledJSON('map2', 'assets/housemap.json')
    this.load.image('inside', 'assets/Inside.png')
    this.load.image('dog', 'assets/dog.png')
    this.load.spritesheet('girl', 'assets/Spritegirl.png', {
      frameWidth: 16, frameHeight: 16
    })
  }

  create() {
    this.scene.start('Game')
  }
}

export default PreloadScene