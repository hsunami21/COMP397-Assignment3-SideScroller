var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BRONZE COIN CLASS
    var BronzeCoin = (function (_super) {
        __extends(BronzeCoin, _super);
        // CONSTRUCTOR
        function BronzeCoin() {
            _super.call(this, "bronze");
            this.dx = 5;
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for BronzeCoin Class
         */
        BronzeCoin.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the coin position
         */
        BronzeCoin.prototype.reset = function () {
            this.x = 1100;
            this.y = Math.floor(Math.random() * 590) + 5;
        };
        /**
         * Checks to see if coin needs to be reset
         */
        BronzeCoin.prototype.checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return BronzeCoin;
    })(objects.GameObject);
    objects.BronzeCoin = BronzeCoin;
})(objects || (objects = {}));
//# sourceMappingURL=bronzecoin.js.map