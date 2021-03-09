export default anims => {
  anims.create({
    key: 'walk-wolf',
    frames: anims.generateFrameNumbers('wolf', { start: 0, end: 5 }),
    frameRate: 5,
    repeat: -1,
  });
};