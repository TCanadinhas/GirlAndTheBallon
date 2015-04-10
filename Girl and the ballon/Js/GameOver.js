	
	function GameOver()
	{
		this.gameOver = new Image();
		this.gameOver.src = 'Assets/Scenes/gameOver.png';
		
		
		this.draw = function()
		{
			context.drawImage(this.gameOver,0,0,canvas.width,canvas.height);
			context.drawImage(back,back_x,back_y,back_w,back_h);
		}
	}