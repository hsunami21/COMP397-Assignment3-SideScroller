module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private player: objects.Player;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            this.player = new objects.Player();
            this.addChild(this.player);
            
            stage.addChild(this);
        }


        public update(): void {
            this.player.update();
        }


    }


} 