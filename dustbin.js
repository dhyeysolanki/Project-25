class dustbin
{
	constructor(x,y,width,height)
	{
		this.image = loadImage ("dustbingreen.png");
		this.x=x;
		this.y=y;
		this.dustbinWidth=width;
		this.dustbinHeight=height;
		
		this.angle=0;	
		
		this.dustbinbody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic:true})
		World.add(world, this.dustbinbody)

		this.dustbinbody1=Bodies.rectangle(1150, 655, 290, 15, {isStatic:true})
		World.add(world, this.dustbinbody1)

		this.dustbinbody2=Bodies.rectangle(1300, 587, 15, 150, {isStatic:true})
		World.add(world, this.dustbinbody2)
		
	}
	display()
	{
			var pos=this.dustbinbody.position;
			var pos1 = this.dustbinbody1.position;
			var pos2 = this.dustbinbody2.position;
			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			//rect(0,0,this.dustbinWidth, this.dustbinHeight);
			pop()

			push()
			translate(pos1.x, pos1.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			image (this.image, -130, -236, 320, 240);
			//rect(0,0, 290, 15);
			pop()

			push()
			translate(pos2.x, pos2.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			//rect(0,0, 15, 150);
			pop()
		
			
	}

}