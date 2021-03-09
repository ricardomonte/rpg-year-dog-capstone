import Phaser from 'phaser';

class EnemyAttack extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.speed = 300;
    this.coolDown = 2000;
  }

  fire(x, y) {
    this.setFlipX(true);
    this.setActive(true);
    this.setVisible(true);
    this.body.reset(x, y);
    this.setVelocityX(-this.speed);
  }
}

export default EnemyAttack;