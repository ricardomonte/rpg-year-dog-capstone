import Phaser from 'phaser';

class UiFight extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y) {
    super(scene, x, y, 'UiFight');

    scene.add.existing(this);

    this.init();
  }

  init() {
    this.graphics = this.scene.add.graphics();

    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.strokeRect(412, 410, 48, 50);
    this.graphics.fillRect(412, 410, 48, 50);
    this.graphics.strokeRect(362, 410, 60, 50);
    this.graphics.fillRect(362, 410, 60, 50);
    this.graphics.strokeRect(308, 410, 60, 50);
    this.graphics.fillRect(308, 410, 60, 50);
  }
}

export default UiFight;