var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SCOREBOARD CLASS
    var Scoreboard = (function (_super) {
        __extends(Scoreboard, _super);
        // CONSTRUCTOR
        function Scoreboard() {
            _super.call(this, "Test:", "60px Consolas", "#000000");
            // PRIVATE INSTANCE VARIABLES
            this.labelText = "";
            this.x = 25;
            this.y = 10;
            this.lives = 3;
            this.score = 0;
            this.update();
        }
        Scoreboard.prototype.update = function () {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.text = this.labelText;
        };
        return Scoreboard;
    })(createjs.Text);
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map