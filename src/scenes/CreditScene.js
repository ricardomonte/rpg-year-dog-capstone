import Phaser from 'phaser';

class CreditScene extends Phaser.Scene {
  constructor() {
    super('CreditScene');

    this.menu = [
      { text: 'Thanks' },
      { text: 'For Playing' },
      { text: 'Author' },
      { text: 'Ricardo' },
      { text: 'Assets from' },
      { text: 'Pixel Pete LimeZu ansimuz.com' },
      { text: 'Music From' },
      { text: 'TheoAllen' },
    ];
    this.center = 768 / 2;
    this.fontSize = 32;
    this.fontStep = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: '#fff' };
  }

  create() {
    this.createMenu();
    const btn = this.add.image(690, 650, 'btnMenu').setOrigin(1, 0).setInteractive().setScale(2);
    const scene = this.scene.get('MenuScene');
    scene.sound.volume = 0.1;
    btn.on('pointerdown', () => {
      window.location.reload();
    });
  }

  createMenu() {
    let lastPositionY = 0;
    this.menu.forEach(menuItem => {
      const menuPosition = [this.center, 52 + lastPositionY];
      this.add.text(...menuPosition, `${menuItem.text}`, this.fontOptions).setOrigin(0.5);
      lastPositionY += this.fontStep;
    });
  }
}

export default CreditScene;