import Phaser from 'phaser';

class Hud extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    scene.add.existing(this);

    this.setPosition(310, 310);
    this.setScrollFactor(0, 0);
    // this.cam = this.scene.cameras.add(this.x, this.y, 1024, 1024).setZoom(0.2).setName('mini')
    // this.cam.setVisible(true)
    this.setuplist();
  }

  setuplist() {
    const scoreBoard = this.scoreBoard();
    this.add(scoreBoard);
  }

  scoreBoard() {
    this.fontSize = 32;
    const score = this.scene.add.text(0, 0, '0', { fontSize: `${this.fontSize}px`, fill: '#fff' }).setScale(0.3);

    score.setName('score');
    return score;
  }

  updateScoreBoard(item) {
    const score = this.getByName('score');

    score.setText(item);
  }
}

export default Hud;