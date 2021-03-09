import Phaser from 'phaser';
import PlayerFight from '../entities/playerFight';
import EnemyFight from '../entities/enemyFight';
import UiFight from '../UI/UIFight';
import HealthBar from '../hud/HealthBar';

class FightScene extends Phaser.Scene {
  constructor() {
    super('FightScene');
  }

  create(data) {
    this.ui = new UiFight(this, 452, 450);
    this.hp = data.hp;
    const wolf = new EnemyFight(this, 420, 330, 50, 10).setOrigin(0, 0);
    const player = new PlayerFight(this, 312, 350, this.hp, 10).setOrigin(0, 0.8).setScale(2);

    this.damagePlayer = player.damage;
    this.hpPlayer = player.hp;
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

    this.healthBar = new HealthBar(this, 310, 360, 100);
    this.healthBar.decrease(this.hp);
  }

  createPlayerColliders(player, { colliders }) {
    player.addCollider(colliders.wolf.projectile, this.returnMainScene, this);
  }

  createEnemyColliders(enemy, { colliders }) {
    enemy.addCollider(colliders.player.projectile, this.reduceHp, this);
  }

  reduceHp(entitty, collectable) {
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

  returnMainScene(entitty, collectable) {
    collectable.setActive(false);
    collectable.setVisible(false);
    this.hpPlayer -= this.children.list[2].damage;
    this.healthBar.decrease(this.hpPlayer);

    if (this.hpPlayer <= 0) {
      this.scene.start('GameOver');
    }
  }
}

export default FightScene;