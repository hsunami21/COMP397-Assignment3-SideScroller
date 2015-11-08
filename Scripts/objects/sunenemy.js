var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ENEMY SUN CLASS
    var SunEnemy = (function (_super) {
        __extends(SunEnemy, _super);
        // CONSTRUCTOR
        function SunEnemy() {
            _super.call(this, "sun2");
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for SunEnemy Class
         */
        SunEnemy.prototype.update = function () {
            this.x -= this.dx;
            this.y += this.dy;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the sun position
         */
        SunEnemy.prototype.reset = function () {
            this.dx = Math.floor(Math.random() * 5) + 5; // horizontal speed
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.x = 2000;
            this.y = Math.floor(Math.random() * 600) + 1;
        };
        /**
         * Checks to see if sun needs to be reset
         */
        SunEnemy.prototype.checkBounds = function () {
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
            if ((this.y - (this.height / 2)) <= 0) {
                this.dy = -this.dy;
            }
            if ((this.y + (this.height / 2)) >= 600) {
                this.dy = -this.dy;
            }
        };
        return SunEnemy;
    })(objects.GameObject);
    objects.SunEnemy = SunEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=sunenemy.js.map