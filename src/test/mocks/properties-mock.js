module.exports = {
  debugPhysics: true,
  collideWorldBounds: true,
  enableJoypad: false,
  fatalCollisions: true,
  stats: true,
  drawBackground: true,
  width: 700,
  height: 500,
  scale: {
    web: Phaser.ScaleManager.NO_SCALE,
    device: Phaser.ScaleManager.SHOW_ALL
  },
  dev: {
    mode: false,
    skipIntro: false,
    skipSplashScreen: false
  },
  gamePlay: {
    freeOrbLocking: false,
    autoOrbLocking: true,
    tractorBeamLength: 80,
    tractorBeamVariation: 10,
    lockingDuration: 900,
    parallax: true
  },
  levels: {
    training: {
      mapImgUrl: 'assets/levels/training.png',
      mapImgKey: 'training',
      mapDataUrl: 'assets/levels/training.json',
      mapDataKey: 'training',
      mapScale: 2,
      mapPosition: {
        x: 0,
        y: 500
      },
      missionSwipe: {
        title: 'Flight Training',
        desc: 'Fly through the highlighted training pods',
        color: "rgba(255, 0, 0, 0.7)"
      },
      world: {
        width: 3000,
        height: 3000
      },
      spawns: [{
        x: 1500,
        y: 1500,
        orb: false
      }],
      orbPosition: {x: 2600, y: 1742},
      orbHolder: {x: 2600, y: 1780}
    },
    startingLevel: 1,
    data: [
      {
        mapImgUrl: 'assets/levels/level_6_x2.png',
        mapImgKey: 'mapImage',
        mapDataUrl: 'assets/levels/level_6.json',
        mapDataKey: 'mapPhysics',
        world: {
          width: 3072,
          height: 4000
        },
        mapPosition: {
          x: 0, y: 2000
        },
        orbPosition: {
          x: 1000, y: 1000
        },
        enemies: [
          {x: 1200, y: 1200, rotation: 100},
          {x: 500, y: 500, rotation: 100}
        ],
        enemyFireRate: 1000
    }]
  }

};