import Phaser from 'phaser';
import playerFight from '../entities/playerFight';
import enemyFight from '../entities/enemyFight';
import UiFight from '../UI/UIFight';

class lalala extends Phaser.Scene {
  constructor() {
    super('lalalala');
  }

  create(data) {
    new UiFight(this, 452, 450);
    this.hp = data.hp;
    const wolf = new enemyFight(this, 420, 330, 50, 10).setOrigin(0, 0);
    const player = new playerFight(this, 310, 350, this.hp, 10).setOrigin(0, 0.8).setScale(2);

    this.damagePlayer = player.damage;
    this.hpPlayer = player.hp;
    console.log(this.hpPlayer);
    this.cameras.main.setZoom(5);

    this.createPlayerColliders(player, {
      colliders: {
        wolf,
      },
    });

    this.createEnemyColliders(wolf, {
      colliders: {
        player,
      },
    });
  }

  createPlayerColliders(player, { colliders }) {
    player.addCollider(colliders.wolf.projectile, this.lili, this);
  }

  createEnemyColliders(enemy, { colliders }) {
    enemy.addCollider(colliders.player.projectile, this.lele, this);
  }

  lele(entitty, collectable) {
    collectable.setActive(false);
    collectable.setVisible(false);
    entitty.hp -= this.damagePlayer;
    if (entitty.hp === 0) {
      this.scene.resume('Game');
      this.scene.stop();
    } else {
      entitty.attack();
    }
  }

  lili(entitty, collectable) {
    collectable.setActive(false);
    collectable.setVisible(false);
    this.hpPlayer -= this.children.list[2].damage;

    if (this.hpPlayer <= 0) {
      this.scene.start('GameOver');
    }
  }
}

export default lalala;