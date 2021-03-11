import Phaser from 'phaser';
import config from './Config/config';
import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';
import Title from './scenes/Title';
import Scoreboard from './scenes/Scores';
import InitialText from './scenes/InitialText';
import GameScene from './scenes/GameScene';
import FightScene from './scenes/FightScene';
import GameOver from './scenes/GameOver';
import CreditScene from './scenes/CreditScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('PreloadScene', PreloadScene);
    this.scene.add('scoreBoard', Scoreboard);
    this.scene.add('Intro', InitialText);
    this.scene.add('MenuScene', Title);
    this.scene.add('Game', GameScene);
    this.scene.add('FightScene', FightScene);
    this.scene.add('GameOver', GameOver);
    this.scene.add('CreditScene', CreditScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();