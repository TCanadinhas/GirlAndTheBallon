	
	function Menu()
	{
		this.menu = new Image();
		this.menu.src = 'Assets/Scenes/menu.png';
		
		this.play = new Image();
		this.play.src = 'Assets/Teclas/play.png';
		
		this.play.width = 172;
		this.play.height = 87;
		this.play_x = canvas.width / 2 - this.play.width / 2;
		this.play_y = 380; //olhar arquivo psd
		
		
		this.credits = new Image();
		this.credits.src = 'Assets/Teclas/credits.png';
		
		this.credits.width = 148;
		this.credits.height = 54;
		this.credits_x = 80;
		this.credits_y = 480;
		
		
		this.draw = function()
		{
			context.drawImage(this.menu,0,0,canvas.width,canvas.height);
			context.drawImage(this.play,this.play_x,this.play_y,this.play.width,this.play.height);
			context.drawImage(this.credits,this.credits_x,this.credits_y,this.credits.width,this.credits.height);
		}
	}