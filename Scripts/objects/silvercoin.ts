module objects {
	// SILVER COIN CLASS
	export class SilverCoin extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		
		// CONSTRUCTOR
		constructor() {
			super("silver");
			this.dx = 4;
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for SilverCoin Class
		 */
		public update(): void {
			this.x -= this.dx;
			this.checkBounds();
		}
		
		// PRIVATE METHODS
		
		/**
		 * Resets the coin position 
		 */
		public reset(): void {
			this.x = 2400;
			this.y = Math.floor(Math.random() * 590) + 5;
		}
		
		/**
		 * Checks to see if coin needs to be reset
		 */
		private checkBounds(): void {
			if (this.x <= (0 - this.width)) {
				this.reset();
			}
		
		}
	}
}