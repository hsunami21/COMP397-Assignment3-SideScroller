module objects {
	// BACKGROUND CLASS
	export class Background extends createjs.Bitmap {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		
		// CONSTRUCTOR
		constructor() {
			super(assets.getResult("background"));
			this.dx = 5;
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for Background Class
		 */
		public update(): void {
			this.x -= this.dx;
			this.checkBounds();
		}
		
		// PRIVATE METHODS
		
		/**
		 * Resets the background 
		 */
		private reset(): void {
			this.x = 0;
		}
		
		/**
		 * Checks to see if background needs to be reset
		 */
		private checkBounds(): void {
			if (this.x <= -2020) {
				this.reset();
			}
		
		}
	}
}