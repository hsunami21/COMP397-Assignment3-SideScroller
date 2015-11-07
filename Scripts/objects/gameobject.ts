module objects {
	// GAME OBJECT CLASS
	export class GameObject extends createjs.Sprite {
		// PROTECTED INSTANCE VARIABLES
		protected width: number;
		protected height: number; 
		
		// CONSTRUCTOR
		constructor(imageString: string) {
			super(atlas, imageString);
			
			this.width = this.getBounds().width;
			this.height = this.getBounds().height;
			this.regX = this.width * 0.5;
			this.regY = this.height * 0.5;
		}
		
		update() {
			
		}
	}	
}