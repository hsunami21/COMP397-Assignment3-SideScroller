var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR
        function Player() {
            _super.call(this, "flyMan_still_fly");
            this.x = 100;
        }
        /**
         * Update Method for Player Class
         */
        Player.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map