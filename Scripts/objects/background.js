var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BACKGROUND CLASS
    var Background = (function (_super) {
        __extends(Background, _super);
        // CONSTRUCTOR
        function Background() {
            _super.call(this, assets.getResult("background"));
            this.dx = 5;
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for Background Class
         */
        Background.prototype.update = function () {
            this.x -= this.dx;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the background
         */
        Background.prototype.reset = function () {
            this.x = 0;
        };
        /**
         * Checks to see if background needs to be reset
         */
        Background.prototype.checkBounds = function () {
            if (this.x <= -2020) {
                this.reset();
            }
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map