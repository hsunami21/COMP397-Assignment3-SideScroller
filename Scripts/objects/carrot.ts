module objects {
	// CARROT CLASS
	export class Carrot extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		
		// CONSTRUCTOR
		constructor() {
			super("carrot");
			
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for GoldCoin Class
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
			this.dx = Math.floor(Math.random() * 5) + 5;
			this.x = 1700;
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