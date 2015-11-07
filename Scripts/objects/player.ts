module objects {
	// PLAYER CLASS
	export class Player extends objects.GameObject {
		// CONSTRUCTOR
		constructor() {
			super("flyMan_still_fly");
		
			this.x = 100;
			
		}
		
		/** 
		 * Update Method for Player Class
		 */
		
		public update():void {
			this.y = stage.mouseY;
		}
	}
}