module objects {
	// ENEMY CLOUD CLASS
	export class CloudEnemy extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES
		private dx: number;
		private dy: number;
		
		// CONSTRUCTOR
		constructor() {
			super("cloud");
			
			this.reset();
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update method for CloudEnemy Class
		 */
		public update(): void {
			this.x -= this.dx;
			this.y += this.dy;
			this.checkBounds();
		}
		
		// PRIVATE METHODS
		
		/**
		 * Resets the cloud position 
		 */
		 public reset(): void {
			this.dx = Math.floor(Math.random() * 5) + 3; // horizontal speed
			this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3); // vertical speed
			this.x = 1200;
			this.y = Math.floor(Math.random() * 600) + 1;
		}
		
		/**
		 * Checks to see if cloud needs to be reset
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