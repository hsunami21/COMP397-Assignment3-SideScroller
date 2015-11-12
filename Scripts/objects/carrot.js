var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CARROT CLASS
    var Carrot = (function (_super) {
        __extends(Carrot, _super);
        // CONSTRUCTOR
        function Carrot() {
            _super.call(this, "carrot");
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for Carrot Class
         */
        Carrot.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the carrot position
         */
        Carrot.prototype.reset = function () {
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.x = 2200;
            this.y = Math.floor(Math.random() * 590) + 5;
        };
        /**
         * Checks to see if carrot needs to be reset
         */
        Carrot.prototype.checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Carrot;
    })(objects.GameObject);
    objects.Carrot = Carrot;
})(objects || (objects = {}));
//# sourceMappingURL=carrot.js.map