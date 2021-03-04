import phaser from 'phaser';
import config from './Config/config';
import BootScene from './scenes/BootScene'
import PreloadScene from './scenes/PreloadScene';
import GameScene from './scenes/GameScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene)
    this.scene.add('PreloadScene', PreloadScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}
 
window.game = new Game();