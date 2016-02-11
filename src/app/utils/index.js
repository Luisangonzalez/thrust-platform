module.exports = {
  features: require('./features'),
  /**
   * Pythagorus ftw
   *
   * @method distAtoB
   * @param pointA
   * @param pointB
   * @return {number}
   */
  distAtoB: function(pointA, pointB) {
    var A = pointB.x - pointA.x;
    var B = pointB.y - pointA.y;
    return Math.sqrt(A*A + B*B);
  }
};