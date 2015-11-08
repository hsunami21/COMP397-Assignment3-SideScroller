var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ENEMY CLOUD CLASS
    var CloudEnemy = (function (_super) {
        __extends(CloudEnemy, _super);
        // CONSTRUCTOR
        function CloudEnemy() {
            _super.call(this, "cloud");
            this.reset();
        }
        // PUBLIC METHODS
        /**
         * Update method for CloudEnemy Class
         */
        CloudEnemy.prototype.update = function () {
            this.x -= this.dx;
            this.y += this.dy;
            this.checkBounds();
        };
        // PRIVATE METHODS
        /**
         * Resets the cloud position
         */
        CloudEnemy.prototype.reset = function () {
            this.dx = Math.floor(Math.random() * 5) + 3; // horizontal speed
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3); // vertical speed
            this.x = 1200;
            this.y = Math.floor(Math.random() * 600) + 1;
        };
        /**
         * Checks to see if cloud needs to be reset
         */
        CloudEnemy.prototype.checkBounds = function () {
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
        return CloudEnemy;
    })(objects.GameObject);
    objects.CloudEnemy = CloudEnemy;
})(objects || (objects = {}));
//# sourceMappingURL=cloudenemy.js.map