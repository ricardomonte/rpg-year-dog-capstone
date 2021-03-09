import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.tilemapTiledJSON('map2', 'assets/housemap.json');
    this.load.image('inside', 'assets/Inside.png');
    this.load.image('dog', 'assets/dog.png');
    this.load.spritesheet('girl', 'assets/Spritegirl.png', {
      frameWidth: 16, frameHeight: 16,
    });

    this.load.spritesheet('attack', 'assets/girl-punch.png', {
      frameWidth: 16, frameHeight: 16,
    });
    this.load.spritesheet('slashef', 'assets/slash.png', {
      frameWidth: 16, frameHeight: 16,
    });

    this.load.spritesheet('wolf', 'assets/hell-hound-idle.png', {
      frameWidth: 48, frameHeight: 32,
    });
    this.load.image('memory', 'assets/mem_img.png');
    this.load.image('framing', 'assets/frame.png');
    this.load.spritesheet('wolfF', 'assets/hell-hound-idle.png', {
      frameWidth: 48, frameHeight: 32,
    });
    this.load.image('girlF', ' assets/girl-fight.png');
    this.load.image('button', 'assets/button.png');
    this.load.image('btnSave', 'assets/buttonsave.png');
    this.load.image('btnMenu', 'assets/buttonbackmenu.png');
    this.load.audio('theme', 'assets/Dungeon-CrystalCave.ogg');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.src}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);
  }

  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;