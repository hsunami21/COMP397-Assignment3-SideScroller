module objects {
	// BRONZE COIN CLASS
	export class BronzeCoin extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		
		// CONSTRUCTOR
		constructor() {
			super("bronze");
			this.dx = 5;
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for BronzeCoin Class
		 */
		public update(): void {
			this.x -= this.dx;
			this.checkBounds();
		}
		
		// PRIVATE METHODS
		
		/**
		 * Resets the coin position 
		 */
		private reset(): void {
			this.x = 1100;
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