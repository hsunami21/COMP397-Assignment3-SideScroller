var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GOLD COIN CLASS
    var GoldCoin = (function (_super) {
        __extends(GoldCoin, _super);
        // CONSTRUCTOR
        function GoldCoin() {
            _super.call(this, "gold");
            this.dx = 3;
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for GoldCoin Class
         */
        GoldCoin.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the coin position
         */
        GoldCoin.prototype.reset = function () {
            this.x = 3600;
            this.y = Math.floor(Math.random() * 590) + 5;
        };
        /**
         * Checks to see if coin needs to be reset
         */
        GoldCoin.prototype.checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return GoldCoin;
    })(objects.GameObject);
    objects.GoldCoin = GoldCoin;
})(objects || (objects = {}));
//# sourceMappingURL=goldcoin.js.map