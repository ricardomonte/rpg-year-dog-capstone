import Phaser from 'phaser';
import EnemyAttack from './enemyattack';

class Projectiles extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 10,
      active: false,
      visible: false,
      key: 'slashef',
      classType: EnemyAttack,
    });
  }

  counterAttack(player) {
    const slash = this.getFirstDead(false);

    if (!slash) { return; }

    slash.fire(player.x, player.y);
  }
}

export default Projectiles;