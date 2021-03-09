import Phaser from 'phaser';

class Title extends Phaser.Scene {
  constructor() {
    super('MenuScene');

    this.menu = [
      { scene: 'Intro', text: 'Start Game' },
      { scene: 'scoreBoard', text: 'Score' },
      { scene: null, text: 'Exit' },
    ];
    this.center = 768 / 2;
    this.fontSize = 32;
    this.fontStep = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: '#fff' };
  }

  create() {
    this.createMenu();

    if (this.sound.get('theme')) { return; }
    this.sound.add('theme', { loop: true, volume: 0.2 }).play();
  }

  setupMenuEvents(menuItem) {
    const textGo = menuItem.textGO;
    textGo.setInteractive();
    textGo.on('pointerover', () => {
      textGo.setStyle({ fill: '#ff0' });
    });
    textGo.on('pointerout', () => {
      textGo.setStyle({ fill: '#fff' });
    });

    textGo.on('pointerup', () => {
      menuItem.scene && this.scene.start(menuItem.scene);

      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }
    });
  }

  createMenu() {
    let lastPositionY = 0;
    this.menu.forEach(menuItem => {
      const menuPosition = [this.center, this.center + lastPositionY];
      menuItem.textGO = this.add.text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5);
      lastPositionY += this.fontStep;
      this.setupMenuEvents(menuItem);
    });
  }
}

export default Title;