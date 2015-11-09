/// <reference path="../objects/bronzecoin.ts" />
/// <reference path="../objects/silvercoin.ts" />
/// <reference path="../objects/goldcoin.ts" />
/// <reference path="../objects/carrot.ts" />
/// <reference path="../objects/cloudenemy.ts" />
/// <reference path="../objects/sunenemy.ts" />
/// <reference path="../objects/player.ts" />
var config;
(function (config) {
    // COLLISION CLASS
    var Collision = (function () {
        // CONSTRUCTOR
        function Collision(player, clouds, sun, bronzeCoin, silverCoin, goldCoin, carrot, scoreboard) {
            this.clouds = [];
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
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between player and any cloud object
        Collision.prototype.playerAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = cloud.x;
            p2.y = cloud.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("cloud");
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        };
        // check collision between player and sun
        Collision.prototype.playerAndSun = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = this.sun.x;
            p2.y = this.sun.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (this.sun.height / 2))) {
                this.scoreboard.lives -= this.scoreboard.lives;
                this.sun.reset();
            }
        };
        // check collision between player and coin
        Collision.prototype.playerAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var p3 = new createjs.Point();
            var p4 = new createjs.Point();
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
        };
        // check collision between player and carrot
        Collision.prototype.playerAndCarrot = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;
            p2.x = this.carrot.x;
            p2.y = this.carrot.y;
            if (this.distance(p1, p2) < ((this.player.height / 2) + (this.carrot.height / 2))) {
                createjs.Sound.play("carrot");
                this.scoreboard.lives += 1;
                this.carrot.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < 4; count++) {
                this.playerAndCloud(this.clouds[count]);
            }
            this.playerAndSun();
            this.playerAndCoin();
            this.playerAndCarrot();
            scoreboard.score = this.scoreboard.score;
        };
        return Collision;
    })();
    config.Collision = Collision;
})(config || (config = {}));
//# sourceMappingURL=collision.js.map