import Phaser from 'phaser';
import initAnimations from './PlayerAnimations';
import over from '../mixin/collidable';
import Projectiles from '../projectiles/gProjectiles';
import ButtonAttack from '../hud/buttonAtack';

class PlayerFight extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, hp, damage) {
    super(scene, x, y, 'attack');
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
    const button = new ButtonAttack(this.scene, this.x, this.y).setSize(120, 50);
    button.setInteractive();
    this.projectile = new Projectiles(this.scene);
    this.setCollideWorldBounds(true);
    this.setImmovable(true);
    initAnimations(this.scene.anims);

    button.on('pointerdown', () => {
      this.play('player-attack', true);
      this.projectile.fireSlash(this);
    });
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }
}
export default PlayerFight;
