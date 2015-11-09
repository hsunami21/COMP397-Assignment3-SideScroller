/*
    Source name: Side Scroller
    Author: Wendall Hsu 300739743
    Last Modified By: Wendall Hsu
    Date Last Modified: November 8, 2015
    Program Description: Side scroller web application created using TypeScript and CreateJS
    Revision History:
        Commit #1: Initial commit
        Commit #2: Added sprite assets
        Commit #3: Added GameObject and Player classes
        Commit #4: Added moving background functionality
        Commit #5: Added all sprite objects to game scene
        Commit #6: Added collision functionality
        Commit #7: Added sound effects and game over scene
        Commit #8: Added instructions to menu scene and final score to game over scene
        Commit #9: Modified layout and difficulty slightly 
        Commit #10: Debugged non-collision with a cloud
*/

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
            stage.cursor = "none";
            
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
            for (var cloud = 0; cloud < 4; cloud++) {
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
            if (this.scoreboard.lives <= 0) {
                createjs.Sound.stop();
                createjs.Sound.play("game_over");
                changeState(config.OVER_STATE);
            }
            
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
            for (var cloud = 0; cloud < 4; cloud++) {
                this.clouds[cloud].update();
            }
            
            
        }


    }


} 