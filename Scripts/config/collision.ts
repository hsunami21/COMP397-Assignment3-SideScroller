/// <reference path="../objects/bronzecoin.ts" />
/// <reference path="../objects/silvercoin.ts" />
/// <reference path="../objects/goldcoin.ts" />
/// <reference path="../objects/carrot.ts" />
/// <reference path="../objects/cloudenemy.ts" />
/// <reference path="../objects/sunenemy.ts" />
/// <reference path="../objects/player.ts" />

module config {
        // COLLISION CLASS
        export class Collision {
		// PRIVATE INSTANCE VARIABLES
		private player: objects.Player;
		private clouds = [];
                private sun: objects.SunEnemy;
		private bronzeCoin: objects.BronzeCoin;
		private silverCoin: objects.SilverCoin;
		private goldCoin: objects.GoldCoin;
                private carrot: objects.Carrot;
                private scoreboard: objects.Scoreboard;
	
		// CONSTRUCTOR
		constructor(player: objects.Player, clouds, sun: objects.SunEnemy, bronzeCoin: objects.BronzeCoin, 
                                silverCoin: objects.SilverCoin, goldCoin: objects.GoldCoin, carrot: objects.Carrot, 
                                scoreboard: objects.Scoreboard) {
			this.player = player;
			this.clouds = clouds;
                        this.sun = sun;
			this.bronzeCoin = bronzeCoin;
			this.silverCoin = silverCoin;
			this.goldCoin = goldCoin;
			this.carrot = carrot;
                        this.scoreboard = scoreboard;
		}	
		
		// Utility method - Distance calculation between two points
                private distance(p1: createjs.Point, p2: createjs.Point): number {
                        var result: number = 0;
                        var xPoints: number = 0;
                        var yPoints: number = 0;
                
                        xPoints = p2.x - p1.x;
                        xPoints = xPoints * xPoints;
                
                        yPoints = p2.y - p1.y;
                        yPoints = yPoints * yPoints;
                
                        result = Math.sqrt(xPoints + yPoints);
                
                        return result;
                }
        
                // check collision between player and any cloud object
                private playerAndCloud(cloud: objects.CloudEnemy): void {
                        var p1: createjs.Point = new createjs.Point();
                        var p2: createjs.Point = new createjs.Point();
                        p1.x = this.player.x;
                        p1.y = this.player.y;
                        p2.x = cloud.x;
                        p2.y = cloud.y;
                        if (this.distance(p1, p2) < ((this.player.height / 2) + (cloud.height / 2))) {
                                createjs.Sound.play("cloud");
                                this.scoreboard.lives -= 1;
                                cloud.reset();
                        }
                }
                
                // check collision between player and sun
                private playerAndSun(): void {
                        var p1: createjs.Point = new createjs.Point();
                        var p2: createjs.Point = new createjs.Point();
                        p1.x = this.player.x;
                        p1.y = this.player.y;
                        p2.x = this.sun.x;
                        p2.y = this.sun.y;
                        if (this.distance(p1, p2) < ((this.player.height / 2) + (this.sun.height / 2))) {
                                this.scoreboard.lives -= this.scoreboard.lives;
                                this.sun.reset();
                        }
                }
                
                 // check collision between player and coin
                private playerAndCoin(): void {
                        var p1: createjs.Point = new createjs.Point();
                        var p2: createjs.Point = new createjs.Point();
                        var p3: createjs.Point = new createjs.Point();
                        var p4: createjs.Point = new createjs.Point();
                        p1.x = this.player.x;
                        p1.y = this.player.y;
                        p2.x = this.bronzeCoin.x;
                        p2.y = this.bronzeCoin.y;
                        p3.x = this.silverCoin.x;
                        p3.y = this.silverCoin.y;
                        p4.x = this.goldCoin.x;
                        p4.y = this.goldCoin.y;
                        if (this.distance(p1, p2) < ((this.player.height / 2) + (this.bronzeCoin.height / 2))) {
                                createjs.Sound.play("coin");
                                this.scoreboard.score += 100;
                                this.bronzeCoin.reset();
                        }
                        
                        if (this.distance(p1, p3) < ((this.player.height / 2) + (this.silverCoin.height / 2))) {
                                createjs.Sound.play("coin");
                                this.scoreboard.score += 300;
                                this.silverCoin.reset();
                        }
                       
                        if (this.distance(p1, p4) < ((this.player.height / 2) + (this.goldCoin.height / 2))) {
                                createjs.Sound.play("coin");
                                this.scoreboard.score += 500;
                                this.goldCoin.reset();
                        }
                }
                
                // check collision between player and carrot
                private playerAndCarrot(): void {
                        var p1: createjs.Point = new createjs.Point();
                        var p2: createjs.Point = new createjs.Point();
                        p1.x = this.player.x;
                        p1.y = this.player.y;
                        p2.x = this.carrot.x;
                        p2.y = this.carrot.y;
                        if (this.distance(p1, p2) < ((this.player.height / 2) + (this.carrot.height / 2))) {
                                createjs.Sound.play("carrot");
                                this.scoreboard.lives += 1;
                                this.carrot.reset();
                        }
                }
        
                // Utility Function to Check Collisions
                public update(): void {
                        for (var count = 0; count < 3; count++) {
                                this.playerAndCloud(this.clouds[count]);
                        }
                        this.playerAndSun();
                        this.playerAndCoin();
                        this.playerAndCarrot();
                        scoreboard.score = this.scoreboard.score;
                }
        }
}