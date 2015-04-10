	
	function Credits()
	{
		this.credits = new Image();
		this.credits.src = 'Assets/Scenes/credits.png';
		
		
		this.draw = function()
		{
			context.drawImage(this.credits,0,0,canvas.width,canvas.height);
			context.drawImage(back,back_x,back_y,back_w,back_h);
		}
	}