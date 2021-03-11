export default {
  addCollider(otherObject, callback, context) {
    this.scene.physics.add.collider(this, otherObject, callback, null, context || this);
  },

  addOverlap(otherObject, callback, context) {
    this.scene.physics.add.overlap(this, otherObject, callback, null, context || this);
  },
};