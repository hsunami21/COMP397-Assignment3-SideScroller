var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // OVER CLASS
    var Over = (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR
        function Over() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Over.prototype.start = function () {
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            // game over label
            this.lblGameOver = new objects.Label("GAME OVER", "60px Consolas", "#FF0000", 550, 200);
            this.addChild(this.lblGameOver); // add label to the stage
            // score label
            this.lblScore = new objects.Label("FINAL SCORE: " + scoreboard.score.toString(), "60px Consolas", "#000000", 550, 300);
            this.addChild(this.lblScore);
            // restart button
            this.restartButton = new objects.Button("RestartButton", 550, 400);
            this.restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this.restartButton);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
            this.background.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Over.prototype._clickRestartButton = function (event) {
            changeState(config.MENU_STATE);
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map