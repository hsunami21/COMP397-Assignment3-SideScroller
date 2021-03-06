/*
    Source name: Side Scroller
    Author: Wendall Hsu 300739743
    Last Modified By: Wendall Hsu
    Date Last Modified: November 8, 2015
    Program Description: Side scroller web application created using TypeScript and CreateJS
    Revision History:
        Commit #1: Initial commit
        Commit #2: Added sprite assets
        Commit #3: Added GameObject and Player classes
        Commit #4: Added moving background functionality
        Commit #5: Added all sprite objects to game scene
        Commit #6: Added collision functionality
        Commit #7: Added sound effects and game over scene
        Commit #8: Added instructions to menu scene and final score to game over scene
        Commit #9: Modified layout and difficulty slightly
        Commit #10: Debugged non-collision with a cloud
        Commit #11: Modified code to display score above all other assets
*/
/// <reference path="../config/config.ts" />
/// <reference path="../config/collision.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bronzecoin.ts" />
/// <reference path="../objects/silvercoin.ts" />
/// <reference path="../objects/goldcoin.ts" />
/// <reference path="../objects/carrot.ts" />
/// <reference path="../objects/cloudenemy.ts" />
/// <reference path="../objects/sunenemy.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
/// <reference path="../states/menu.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var assets;
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for our current state
var atlas; // sprite atlas
// GAME OBJECTS
var menu;
var game;
var over;
var scoreboard;
var data = {
    "images": [
        "../../Assets/images/atlas.png"
    ],
    "frames": [
        [1, 1, 148, 142, 0, 0, 0],
        [1, 145, 78, 70, 0, 0, 0],
        [81, 145, 150, 50, 0, 0, 0],
        [151, 1, 260, 134, 0, 0, 0],
        [413, 1, 120, 132, 0, 0, 0],
        [233, 137, 84, 84, 0, 0, 0],
        [319, 137, 84, 84, 0, 0, 0],
        [405, 137, 84, 84, 0, 0, 0]
    ],
    "animations": {
        "sun2": [0],
        "carrot": [1],
        "StartButton": [2],
        "cloud": [3],
        "flyMan_still_fly": [4],
        "bronze": [5],
        "gold": [6],
        "silver": [7]
    }
};
// manifest of all our assets
var manifest = [
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "background", src: "../../Assets/images/bg.jpg" },
    { id: "game_over", src: "../../Assets/audio/game_over.ogg" },
    { id: "coin", src: "../../Assets/audio/oo_la_la.mp3" },
    { id: "carrot", src: "../../Assets/audio/mmm.mp3" },
    { id: "cloud", src: "../../Assets/audio/ouch.mp3" },
    { id: "music", src: "../../Assets/audio/bg_music.mp3" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    // spritesheet is configured
    atlas = new createjs.SpriteSheet(data);
}
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting
    scoreboard = new objects.Scoreboard();
    state = config.MENU_STATE;
    changeState(state);
}
// Main Game Loop
function gameLoop(event) {
    stats.begin(); // start counting
    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// state machine prep
function changeState(state) {
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
//# sourceMappingURL=game.js.map