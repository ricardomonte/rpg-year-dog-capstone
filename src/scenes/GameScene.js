import phaser from 'phaser';
import Player from '../entities/Player';
import Enemy from '../entities/Enemies';

class GameScene extends Phaser.Scene {
  constructor(){
    super('Game')
    this.player = null;
  }

  create() {
    const map = this.createMap()
    const layers = this.createLayers(map)
    const positionSpawn = this.getPlayerPoint(layers.playerSpawn)
    const enemies = this.createEnemies(layers.enemiesSpawn)
    const player = this.createPlayer(positionSpawn)
    player.addCollider(layers.plant)
    player.addCollider(layers.prop)
    this.createColliderEnemies(enemies, player)
    // player.addCollider(enemy)
    // const memory = this.getPointObject(map, 'memory_one')
    console.log(enemies)
    // this.createMemory(memory)
    this.createCamera(player, map)
  }

  createMap(){
    const map = this.make.tilemap({key: 'map2'})
    map.addTilesetImage('Inside', 'inside');

    return map;
  }

  createLayers(map) {
    const tileset = map.getTileset('Inside') 
    const plant = map.createLayer('planthouse', tileset);
    const prop = map.createLayer('props', tileset);
    const book = map.createLayer('book', tileset);
    plant.setCollisionByProperty({collides: true})
    prop.setCollisionByProperty({collides: true})

    const playerSpawn = map.getObjectLayer('PlayerStart')
    const enemiesSpawn = map.getObjectLayer('SpawnEnemy')
    return { plant, prop, book, playerSpawn, enemiesSpawn }
  }

  getPlayerPoint(playerPoint) {
    const playerSPoint = playerPoint.objects;
    return {
      start: playerSPoint.find(zone => zone.name === 'spawnPlayer')
    }
  }

  createPlayer({start}){
    return new Player(this, start.x, start.y)
  }

  createEnemies(spawns){
    const ene = spawns.objects.map(positionSpawn => {
      return new Enemy(this, positionSpawn.x, positionSpawn.y)
    })

    return ene
  }

  // createMemory(memory) {
  //   this.physics.add.sprite(memory.x, memory.y, 'memory')
  //     .setAlpha(0)
  //     .setSize(20, 20)
  // }

  createCamera(player, map) {
    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.zoomY = 5
    camera.zoomX = 5
  }

  createColliderEnemies(enemies, player) {
    enemies.forEach(enemy => {
      player.addCollider(enemy)
    })
  }
}

export default GameScene;

