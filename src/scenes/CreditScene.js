import Base from './Base';

class CreditScene extends Base {
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
    super.create();
    this.createMenu();
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