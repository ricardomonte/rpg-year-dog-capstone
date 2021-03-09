class Base extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  create() {
    const btn = this.add.image(690, 650, 'btnMenu').setOrigin(1, 0).setInteractive().setScale(2);
    const scene = this.scene.get('MenuScene');
    scene.sound.volume = 0.1;
    btn.on('pointerdown', () => {
      location.reload();
    });
  }
}

export default Base;