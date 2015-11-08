module objects {
	// SCOREBOARD CLASS
	export class Scoreboard extends createjs.Text {
		// PRIVATE INSTANCE VARIABLES
		private labelText: string = "";
		
		// PUBLIC INSTANCE VARIABLES
		public lives: number;
		public score: number;
		
		// CONSTRUCTOR
		constructor() {
			super("Test:", "60px Consolas", "#000000");
			this.x = 25;
			this.y = 10;
			this.lives = 3;
			this.score = 0;
			this.update();
			
		}
		
		public update(): void {
			this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
			this.text = this.labelText;
			
		}
	}
}