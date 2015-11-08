module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private bronzeCoin: objects.BronzeCoin;
        private silverCoin: objects.SilverCoin;
        private goldCoin: objects.GoldCoin;
        private carrot: objects.Carrot;
        private player: objects.Player;        
        private clouds: objects.CloudEnemy[] = [];
        private sun: objects.SunEnemy;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            
            // add bronze coin to scene
            this.bronzeCoin = new objects.BronzeCoin();
            this.addChild(this.bronzeCoin);
            
             // add silver coin to scene
            this.silverCoin = new objects.SilverCoin();
            this.addChild(this.silverCoin);
            
             // add gold coin to scene
            this.goldCoin = new objects.GoldCoin();
            this.addChild(this.goldCoin);
            
            // add carrot to scene
            this.carrot = new objects.Carrot();
            this.addChild(this.carrot);
            
            // add player to scene
            this.player = new objects.Player();
            this.addChild(this.player);
            
            // add cloud enemy to scene
            for (var cloud = 0; cloud < 2; cloud++) {
                this.clouds[cloud] = new objects.CloudEnemy();
                this.addChild(this.clouds[cloud]);
            }
            
            // add sun enemy to scene
            this.sun = new objects.SunEnemy();
            this.addChild(this.sun);
            
            
            stage.addChild(this);
        }


        public update(): void {
            this.background.update();
            this.bronzeCoin.update();
            this.silverCoin.update();
            this.goldCoin.update();
            this.carrot.update();
            this.player.update();
            this.sun.update();
            
            // update each cloud enemy
            for (var cloud = 0; cloud < 2; cloud++) {
                this.clouds[cloud].update();
            }
        }


    }


} 