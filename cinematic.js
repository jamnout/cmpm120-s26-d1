class AdamGame extends Phaser.Scene {
    constructor() {
        super('adamgame');
    }
    preload(){

    }
    create(){
        this.graphics = this.add.graphics();

        this.graphics.fillStyle(0xb0711c, 1);
       // this.graphics.fillRect(400, 350, 300, 150)
        this.graphics.fillEllipse(500, 400, 300, 200, 30);
        this.graphics.fillEllipse(700, 500, 250, 200);

        this.graphics.fillStyle(0xE68809, .5);
        this.graphics.fillEllipse(400, 300, 250, 200, 30);

        this.graphics.fillStyle(0xE3C9A3, .8);
        this.graphics.fillTriangle(200, 300, 330, 200, 315, 340);


    }
    update(){

    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0xffffff,
    scene: [AdamGame],
}

let game = new Phaser.Game(config);