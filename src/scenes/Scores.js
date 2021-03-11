import Phaser from 'phaser';
import { getScore } from '../util/getScore';

class Scoreboard extends Phaser.Scene {
  constructor() {
    super('scoreBoard');

    this.center = 768 / 2;
    this.fontSize = 42;
    this.fontStep = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: '#fff' };
  }

  create() {
    this.score = null;
    this.add.text(this.center, 50, 'Scores', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5);

    this.score = getScore().catch(() => {
      this.errorMessage();
    });
    this.createScore(this.score);

    const backButton = this.add.image(690, 650, 'btnMenu').setOrigin(1, 0).setInteractive().setScale(2);

    backButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });
  }

  createScore(score) {
    let lastPositionY = 0;
    score.then(s => {
      s.result.forEach((element) => {
        const scorePosition = [this.center, 150 + lastPositionY];
        this.add.text(...scorePosition, `${element.user} : ${element.score}`, this.fontOptions).setOrigin(0.5);
        lastPositionY += this.fontStep;
      });
    });
  }

  errorMessage() {
    const scorePosition = [this.center, 170];
    this.add.text(...scorePosition, 'We are sorry\nWe could not get the scores\nTry later', this.fontOptions).setOrigin(0.5);
  }
}

export default Scoreboard;