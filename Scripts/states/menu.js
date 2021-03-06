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
            createjs.Sound.play("music", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.5, 0);
            // add background to scene
            this.background = new objects.Background();
            this.addChild(this.background);
            // fly man label
            this.lblFlyMan = new objects.Label("FLY MAN", "60px Consolas", "#FF6600", 300, 240);
            this.addChild(this.lblFlyMan); // add label to the stage
            // instructions label
            this.lblHowToPlay = new objects.Label("HOW TO PLAY", "60px Consolas", "#FF0000", 750, 100);
            this.addChild(this.lblHowToPlay);
            // how to play label
            this.lblInstructions = new objects.Label("Use the mouse to avoid the clouds \n\n" +
                "and the sun while picking up coins! \n\n" +
                "You will lose the game if you run \n\n" +
                "out of lives or if you hit the sun. \n\n\n\n" +
                "You will gain a life each time you \n\n" +
                "eat a carrot up to a maximum of 8 \n\n" +
                "lives. Any additional carrot eaten \n\n" +
                "will give you bonus points, so make \n\n" +
                "sure to eat as many as possible!", "24px Consolas", "#000000", 775, 325);
            this.addChild(this.lblInstructions);
            // start button
            this.startButton = new objects.Button("StartButton", 300, 340);
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