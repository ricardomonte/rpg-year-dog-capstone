import Phaser from 'phaser';

class InitialText extends Phaser.Scene {
  constructor() {
    super('Intro');
  }

  create() {
    this.cameras.main.fadeIn(2000);
    const content = 'Pleople who know me \npersonally will know that i have \na dog and that im fairly open about it. \nWhen i was born i was born with a dog. \n\nWe came home from the hospital together... \n\nYou can survive the dog trying to stop you, \nand some times you make better work \nwhen you have to fight to make it...\n\nMy dog its not a good dog.';
    this.text = this.add.text(32, 32, `${content}`, { font: '35px Arial', fill: '#ffffff' });

    this.continue = this.add.image(650, 700, 'btnContinue')
      .setOrigin(1, 0)
      .setInteractive()
      .setScale(3);
    this.continue.on('pointerdown', () => {
      this.scene.start('Game');
    });
  }
}

export default InitialText;