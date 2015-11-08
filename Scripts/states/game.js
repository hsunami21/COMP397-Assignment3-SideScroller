var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
            this.clouds = [];
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
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
        };
        Game.prototype.update = function () {
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
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map