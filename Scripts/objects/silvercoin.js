var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SILVER COIN CLASS
    var SilverCoin = (function (_super) {
        __extends(SilverCoin, _super);
        // CONSTRUCTOR
        function SilverCoin() {
            _super.call(this, "silver");
            this.dx = 4;
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for SilverCoin Class
         */
        SilverCoin.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the coin position
         */
        SilverCoin.prototype.reset = function () {
            this.x = 2400;
            this.y = Math.floor(Math.random() * 590) + 5;
        };
        /**
         * Checks to see if coin needs to be reset
         */
        SilverCoin.prototype.checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return SilverCoin;
    })(objects.GameObject);
    objects.SilverCoin = SilverCoin;
})(objects || (objects = {}));
//# sourceMappingURL=silvercoin.js.map