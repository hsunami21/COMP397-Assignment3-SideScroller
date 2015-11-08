module states {
    // GAME CLASS
    export class Game extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private background: objects.Background;
        private collision: config.Collision;
        private scoreboard: objects.Scoreboard;
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
                        
            // add scoreboard to scene
            this.scoreboard = new objects.Scoreboard();
            this.addChild(this.scoreboard); 
            
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
            for (var cloud = 0; cloud < 3; cloud++) {
                this.clouds[cloud] = new objects.CloudEnemy();
                this.addChild(this.clouds[cloud]);
            }
            
            // add sun enemy to scene
            this.sun = new objects.SunEnemy();
            this.addChild(this.sun);           
            
            stage.addChild(this);
            
            this.collision = new config.Collision(this.player, this.clouds, this.sun, this.bronzeCoin, this.silverCoin, 
                                                    this.goldCoin, this.carrot, this.scoreboard);
        }


        public update(): void {
            this.background.update();
            this.collision.update();
            this.scoreboard.update();
            this.bronzeCoin.update();
            this.silverCoin.update();
            this.goldCoin.update();
            this.carrot.update();
            this.player.update();
            this.sun.update();
            
            // update each cloud enemy
            for (var cloud = 0; cloud < 3; cloud++) {
                this.clouds[cloud].update();
            }
            
            if (this.scoreboard.lives <= 0) {
                //scoreboard.score = this.scoreboard.score;
                createjs.Sound.stop();
                createjs.Sound.play("game_over");
                changeState(config.OVER_STATE);
            }
        }


    }


} 