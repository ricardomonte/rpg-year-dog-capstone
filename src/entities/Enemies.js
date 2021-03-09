import Phaser from 'phaser';
import lala from './enemiesAnimation';
import collidable from '../mixin/collidable';

class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'wolf');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    Object.assign(this, collidable);
    this.init();
    this.initEvents();
  }

  init() {
    this.setVisible(false);
    this.setImmovable(true);
    this.setOffset(-1, 12);

    lala(this.scene.anims);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }
}

export default Enemy;