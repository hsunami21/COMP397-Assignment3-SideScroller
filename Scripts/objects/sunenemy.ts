module objects {
	// ENEMY SUN CLASS
	export class SunEnemy extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		private dy: number;
		
		// CONSTRUCTOR
		constructor() {
			super("sun2");
			
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for SunEnemy Class
		 */
		public update(): void {
			this.x -= this.dx;
			this.y += this.dy;
			this.checkBounds();
		}
		
		// PRIVATE METHODS
		
		/**
		 * Resets the sun position 
		 */
		private reset(): void {
			this.dx = Math.floor(Math.random() * 5) + 5; // horizontal speed
			this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
			this.x = 2000;
			this.y = Math.floor(Math.random() * 600) + 1;
		}
		
		/**
		 * Checks to see if sun needs to be reset
		 */
		private checkBounds(): void {
			if (this.x <= (0 - this.width)) {
				this.reset();
			}
			
			if ((this.y - (this.height / 2)) <= 0) {
				this.dy = -this.dy;
			}
			
			if ((this.y + (this.height / 2)) >= 600) {
				this.dy = -this.dy;
			}
		
		}
	}
}