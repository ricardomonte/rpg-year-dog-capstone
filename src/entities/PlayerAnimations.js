export default anims => {
  anims.create({
    key: 'walk-side',
    frames: anims.generateFrameNumbers('girl', { start: 3, end: 5 }),
    frameRate: 8,
    repeat: 0
  })

  anims.create({
    key: 'up-walk',
    frames: anims.generateFrameNumbers('girl', { start: 6, end: 8 }),
    frameRate: 8,
    repeat: 0
  })

  anims.create({
    key: 'down-walk',
    frames: anims.generateFrameNumbers('girl', { start: 0, end: 2 }),
    frameRate: 8,
    repeat: 0
  })
}