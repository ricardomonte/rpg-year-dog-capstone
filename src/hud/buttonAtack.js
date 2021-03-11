import Phaser from 'phaser';

class ButtonAttack extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    scene.add.existing(this);

    this.setPosition(395, 410);
    this.setuplist();
  }

  setuplist() {
    const btn = this.button();
    this.add(btn);
  }

  button() {
    const button = this.scene.add.image(0, 0, 'button').setScale(0.5);
    button.setName('button');
    return button;
  }
}

export default ButtonAttack;