module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private lblFlyMan: objects.Label;
        private startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

         // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            
            // fly man label
            this.lblFlyMan = new objects.Label("FLY MAN", "60px Consolas", "#000000", 350, 240);
            this.addChild(this.lblFlyMan); // add label to the stage

            // start button
            this.startButton = new objects.Button("StartButton", 350, 340);
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