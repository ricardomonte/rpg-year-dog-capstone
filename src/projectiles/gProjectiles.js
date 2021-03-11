import Phaser from 'phaser';
import AttackSlash from './attack';

class Projectiles extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 20,
      active: false,
      visible: false,
      key: 'slashef',
      classType: AttackSlash,
    });
  }

  fireSlash(player) {
    const slash = this.getFirstDead(false);

    if (!slash) { return; }

    slash.fire(player.x, player.y);
  }
}

export default Projectiles;