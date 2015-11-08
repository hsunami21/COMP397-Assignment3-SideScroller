module states {
    // OVER CLASS
    export class Over extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private lblGameOver: objects.Label;
        private lblScore: objects.Label;
        private restartButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);

            // game over label
            this.lblGameOver = new objects.Label("GAME OVER", "60px Consolas", "#FF0000", 550, 200);
            this.addChild(this.lblGameOver); // add label to the stage

            // score label
            this.lblScore = new objects.Label("FINAL SCORE: " + scoreboard.score.toString(), "60px Consolas", "#000000", 550, 300);
            this.addChild(this.lblScore);

            // restart button
            this.restartButton = new objects.Button("RestartButton", 550, 400);
            this.restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this.restartButton);

            stage.addChild(this);

        }


        public update(): void {
            this.background.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickRestartButton(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
        }


    }


}  