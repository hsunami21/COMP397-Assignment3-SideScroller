var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // MENU CLASS
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Menu.prototype.start = function () {
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            // fly man label
            this.lblFlyMan = new objects.Label("FLY MAN", "60px Consolas", "#000000", 350, 240);
            this.addChild(this.lblFlyMan); // add label to the stage
            // start button
            this.startButton = new objects.Button("StartButton", 350, 340);
            this.startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this.startButton);
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
            this.background.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        Menu.prototype._clickStartButton = function (event) {
            changeState(config.PLAY_STATE);
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map