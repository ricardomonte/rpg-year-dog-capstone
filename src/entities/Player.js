import Phaser from 'phaser';
import initAnimations from './PlayerAnimations';
import collidable from '../mixin/collidable';
import HealthBar from '../hud/HealthBar';

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'girl');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    Object.assign(this, collidable);

    this.hp = 100;

    this.healthBar = new HealthBar(scene, 410, 310, this.hp);
    this.init();
    this.initEvents();
  }

  init() {
    this.speed = 50;
    this.cursors = this.scene.input.keyboard.addKeys(
      {
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
      },
    );

    this.scene.input.keyboard.on('keydown-SPACE', () => {
      this.play('player-attack', true);
    });

    initAnimations(this.scene.anims);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    const {
      up, down, left, right,
    } = this.cursors;
    if (left.isDown) {
      this.setVelocityX(-this.speed);
      this.setFlipX(true);
      this.play('walk-side', true);
    } else if (right.isDown) {
      this.setVelocityX(this.speed);
      this.setFlipX(false);
      this.play('walk-side', true);
    } else if (up.isDown) {
      this.setVelocityY(-this.speed);
      this.play('up-walk', true);
    } else if (down.isDown) {
      this.setVelocityY(this.speed);
      this.play('down-walk', true);
    } else {
      this.setVelocity(0);
    }
    this.body.velocity.normalize().scale(this.speed);
  }
}

export default Player;