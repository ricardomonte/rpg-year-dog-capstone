import Phaser from 'phaser';
import { setScore } from '../util/getScore';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');

    this.center = 768 / 2;
  }

  create() {
    const text = 'There are many people who do not survive, \n whose dogs get them. They did not work \nany les hard \n\n Neither do I';
    const gameOver = 'Game Over';
    this.add.text(32, 32, `${text}`, { font: '35px Arial', fill: '#ffffff' });
    this.add.text(this.center, this.center, `${gameOver}`, { font: '50px Arial', fill: '#ffffff' });
    const btnSave = this.add.image(this.center, 568, 'btnSave')
      .setOrigin(0.5)
      .setInteractive()
      .setScale(3);
    const score = localStorage.getItem('user');
    this.saveScore(btnSave, score);
    this.cameras.main.fadeIn(2000);
  }

  /* eslint-disable no-alert */
  saveScore(btn, score) {
    btn.on('pointerup', () => {
      const userName = window.prompt('Please enter your name to save your score.');
      if (userName !== '' && userName !== undefined && userName !== null) {
        setScore(userName, score);
      }
      this.scene.start('CreditScene');
    });
  }
  /* eslint-enable no-alert */
}

export default GameOver;