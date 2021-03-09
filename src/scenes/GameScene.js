import Phaser from 'phaser';
import Player from '../entities/Player';
import Enemy from '../entities/Enemies';
import Hud from '../hud/container';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.initialScore = 0;
    this.score = {};
    this.hud = new Hud(this, 0, 0).setDepth(1);

    const map = this.createMap();
    const layers = this.createLayers(map);
    const positionSpawn = this.getPlayerPoint(layers.playerSpawn);
    const enemies = this.createEnemies(layers.enemiesSpawn);
    const player = this.createPlayer(positionSpawn);
    const collectables = this.createCollectables(layers.collectable);
    const collectableHealth = this.createHealthCollectables(layers.collectableHealth);
    this.addTween(collectables);

    this.createCamera(player, map);
    this.createPlayerColliders(player, {
      colliders: {
        mapColliders: layers.plant,
        propsColliders: layers.prop,
        bookshelfColliders: layers.bookshelf,
        collectables,
        collectableHealth,
      },
    });
    this.createEnemyColliders(enemies, {
      colliders: {
        player,
      },
    });
    this.listenToEvents();
    this.playerHp = player.hp;
    this.healthUpdate = player.healthBar;
  }

  createMap() {
    const map = this.make.tilemap({ key: 'map2' });
    map.addTilesetImage('Inside', 'inside');

    return map;
  }

  createLayers(map) {
    this.tileset = map.getTileset('Inside');
    const plant = map.createLayer('planthouse', this.tileset).setDepth(-2);
    const prop = map.createLayer('props', this.tileset).setDepth(0);
    const bookshelf = map.createLayer('library', this.tileset).setDepth(2);
    const book = map.createLayer('book', this.tileset);

    plant.setCollisionByProperty({ collides: true });
    bookshelf.setCollisionByProperty({ collides: true });
    prop.setCollisionByProperty({ collides: true });

    const playerSpawn = map.getObjectLayer('PlayerStart');
    const enemiesSpawn = map.getObjectLayer('SpawnEnemy');
    const collectable = map.getObjectLayer('collectables');
    const collectableHealth = map.getObjectLayer('collectableHealth');
    return {
      plant, prop, bookshelf, book, playerSpawn, enemiesSpawn, collectable, collectableHealth,
    };
  }

  getPlayerPoint(playerPoint) {
    this.playerSPoint = playerPoint.objects;
    return {
      start: this.playerSPoint.find(zone => zone.name === 'spawnPlayer'),
    };
  }

  createCollectables(collectableLayer) {
    const collectables = this.physics.add.staticGroup();
    collectableLayer.objects.forEach(item => {
      collectables.get(item.x, item.y, 'memory').setDepth(-1);
    });
    return collectables;
  }

  createHealthCollectables(collectableLayer) {
    const collectables = this.physics.add.staticGroup();
    collectableLayer.objects.forEach(item => {
      collectables.get(item.x, item.y, 'potion').setDepth(-1);
    });
    return collectables;
  }

  createPlayer({ start }) {
    return new Player(this, start.x, start.y);
  }

  createEnemies(spawns) {
    return spawns.objects.map(positionSpawn => new Enemy(this, positionSpawn.x, positionSpawn.y));
  }

  createPlayerColliders(player, { colliders }) {
    player.addCollider(colliders.mapColliders);
    player.addCollider(colliders.propsColliders);
    player.addCollider(colliders.bookshelfColliders);
    player.addOverlap(colliders.collectables, this.onCollect, this);
    player.addOverlap(colliders.collectableHealth, this.onHealth, this);
  }

  createEnemyColliders(enemies, { colliders }) {
    enemies.forEach(enemy => {
      enemy.addCollider(colliders.player, this.something, this);
    });
  }

  addTween(collectableGroup) {
    collectableGroup.children.entries.forEach(colect => {
      this.tweens.add({
        targets: colect,
        y: colect.y - 3,
        yoyo: true,
        duration: Phaser.Math.Between(300, 550),
        ease: 'linear',
        repeat: -1,
      });
    });
  }

  lololo() {
    this.physics.resume();
  }

  listenToEvents() {
    if (this.pauseEvent) { return; }

    this.pauseEvent = this.events.on('resume', () => {
      const a = this.scene.get('lalalala');
      this.playerHp = a.hpPlayer;
      this.healthUpdate.decrease(this.playerHp);
      this.timedEvent = this.time.addEvent({
        callback: this.lololo,
        callbackScope: this,
      });
    });
  }

  something(entitty) {
    this.physics.pause();
    this.scene.pause();
    entitty.disableBody(true, true);
    this.cameras.main.fadeIn(1000);
    this.scene.launch('lalalala', { hp: this.playerHp });
  }

  onHealth(entitty, collectable) {
    collectable.disableBody(true, true);
    if (this.playerHp < 70) {
      this.playerHp += 30;
    } else {
      this.playerHp = 100;
    }
    this.healthUpdate.decrease(this.playerHp);
  }

  onCollect(entitty, collectable) {
    collectable.disableBody(true, true);
    this.initialScore += 10;
    localStorage.setItem('user', `${this.initialScore}`);
    this.hud.updateScoreBoard(this.initialScore);
  }

  createCamera(player, map) {
    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.zoomY = 5;
    camera.zoomX = 5;
  }
}

export default GameScene;
