'use strict';

var properties = require('../properties');

/**
 * TractorBeam description
 *
 * @class TractorBeam
 * @constructor
 */
function TractorBeam(orb, player) {
  this.orb = orb;
  this.player = player;
  this.groups = groups;
  this.isLocked = false;
  this.isLocking = false;
  this.hasGrabbed = false;
  this.length = properties.gamePlay.tractorBeamLength;
  this.variance = properties.gamePlay.tractorBeamVariation;
  this.lockingDuration = properties.gamePlay.lockingDuration;
  this.constraint = null;
  this.graphics = null;
  this.timer = null;
  this.init();
}

var p = TractorBeam.prototype;

/**
 * TractorBeam initialisation
 *
 * @method init
 */
p.init = function () {
  this.graphics = game.make.graphics();
  this.groups.actors.add(this.graphics);
  this.timer = game.time.create(false);
};

/**
 * @method checkDistance
 * @param player
 * @param isXDown {Boolean} if x button is pressed for manual locking mode
 */
p.checkDistance = function(player, isXDown) {
  if (!this.hasGrabbed) {
    if (isXDown || properties.gamePlay.autoOrbLocking) {
      player.checkOrbDistance();
    }
  } else {
    this.drawBeam(player.position);
  }
};

/**
 * @method drawBeam
 * @param posA
 */
p.drawBeam = function (posA) {
  if (!this.isLocking) {
    this.isLocking = true;
    timer.add(this.lockingDuration, this.lock, this);
    timer.start();
  }
  this.graphics.clear();
  var colour = this.hasGrabbed ? 0x00ff00 : 0xEF5696;
  var alpha = this.hasGrabbed ? 0.5 : 0.4;
  this.graphics.lineStyle(5, colour, alpha);
  this.graphics.moveTo(posA.x, posA.y);
  this.graphics.lineTo(this.orb.sprite.position.x, this.orb.sprite.position.y);
};

p.unlock = function () {
  this.isLocked = false;
};

/**
 * @method lock
 */
p.lock = function () {
  this.isLocked = true;
};

/**
 * @method lockingRelease
 */
p.lockingRelease = function () {
  if (!this.isLocked) {
    this.isLocking = false;
    this.hasGrabbed = false;
    this.graphics.clear();
    this.timer.stop(true);
  }
};

/**
 * @method grab
 * @param player
 */
p.grab = function (player) {
  this.hasGrabbed = true;
  var maxForce = 200000;
  var diffX = player.position.x - this.orb.sprite.position.x;
  var diffY = player.position.y - this.orb.sprite.position.y;
  this.constraint = game.physics.p2.createRevoluteConstraint(player, [0, 0], this.orb.sprite, [diffX, diffY], maxForce);
  this.orb.move();
  //this.orb.setPlayer(this.player);
};

/**
 * @method breakLink
 */
p.breakLink = function () {
  this.unlock();
  this.lockingRelease();
  game.physics.p2.removeConstraint(this.constraint);
};


module.exports = TractorBeam;
