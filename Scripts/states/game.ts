module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private player: objects.Player;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            
            // add player to scene
            this.player = new objects.Player();
            this.addChild(this.player);
            
            stage.addChild(this);
        }


        public update(): void {
            this.background.update();
            this.player.update();
        }


    }


} 