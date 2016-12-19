var launcher = require('./states/launcher');

window.onload = function () {
  launcher.renderMode = Phaser.CANVAS;
  launcher.setCustomOptions({
    options: {
      versionSuffix: '-@gobbapeas',
      gameModes: {
        gravity: {
          unlocked: true,
          enabled: true
        }
      }
    }
  });
  launcher.enableHiResMode();
  launcher.start();
};