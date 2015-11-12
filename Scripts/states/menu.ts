module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private lblFlyMan: objects.Label;
        private lblInstructions: objects.Label;
        private lblHowToPlay: objects.Label;
        private startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            createjs.Sound.play("music", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.5, 0);
            
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            
            // fly man label
            this.lblFlyMan = new objects.Label("FLY MAN", "60px Consolas", "#FF6600", 300, 240);
            this.addChild(this.lblFlyMan); // add label to the stage
            
            // instructions label
            this.lblHowToPlay = new objects.Label("HOW TO PLAY", "60px Consolas", "#FF0000", 750, 100);
            this.addChild(this.lblHowToPlay);
            
            // how to play label
            this.lblInstructions = new objects.Label("Use the mouse to avoid the clouds \n\n" +
                                                    "and the sun while picking up coins! \n\n" +
                                                    "You will lose the game if you run \n\n" +
                                                    "out of lives or if you hit the sun. \n\n\n\n" +
                                                    "You will gain a life each time you \n\n" +
                                                    "eat a carrot up to a maximum of 8 \n\n" +
                                                    "lives. Any additional carrot eaten \n\n" +
                                                    "will give you bonus points, so make \n\n" +
                                                    "sure to eat as many as possible!",
                                                    "24px Consolas", "#000000", 775, 325);
            this.addChild(this.lblInstructions);

            // start button
            this.startButton = new objects.Button("StartButton", 300, 340);
            this.startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this.startButton);

            stage.addChild(this);
        }


        public update(): void {
            this.background.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
        }

    }


}