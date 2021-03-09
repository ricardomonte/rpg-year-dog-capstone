import Phaser from 'phaser';

const WIDTH = 768;
const HEIGHT = 768;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
};

export default {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  zoom: 1,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};