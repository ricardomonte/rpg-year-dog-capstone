import phaser from 'phaser';

class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'dog');
    scene.add.existing(this)
    scene.physics.add.existing(this);

    this.init()
  }
  init() {
    this.setScale(0.5)
    this.setImmovable(true)
    this.setSize(this.width - 6, this.height - 12)
    this.setOffset(-1, 12)
  }

  // addColliderEnemy(layer, callback) {
  //   this.scene.physics.add.collider(this, layer, callback, null, this)
  // }
}

export default Enemy