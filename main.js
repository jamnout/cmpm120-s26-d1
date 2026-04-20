let config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [ StartUp, Intro ]
}

let game = new Phaser.Game(config);