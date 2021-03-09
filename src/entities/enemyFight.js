import Phaser from 'phaser';
import over from '../mixin/collidable';
import Projectiles from '../projectiles/gProjectilesEnemy';

class enemyFight extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, hp, damage) {
    super(scene, x, y, 'wolfF');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    Object.assign(this, over);

    this.damage = damage;
    this.hp = hp;
    this.maxhp = this.hp;
    this.init();
    this.initEvents();
  }

  init() {
    this.projectile = new Projectiles(this.scene);
    this.setImmovable(true);
    this.setCollideWorldBounds(true);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  attack() {
    this.projectile.counterAttack(this);
  }
}

export default enemyFight;