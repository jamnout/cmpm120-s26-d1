class StartUp extends Phaser.Scene {
    constructor(){
        super('startupScene');
    }
    preload(){
        this.load.path = 'assets/';
    }
    create(){
        this.graphics = this.add.graphics();

        this.TitleA = this.add.text(
            115,
            207,
            "Click to Start",
            {font: "50px", color: "#ffffff"}
        );

        this.input.once('pointerdown', () => {
            this.scene.start('introScene');
        });
    }
    update(){}
}