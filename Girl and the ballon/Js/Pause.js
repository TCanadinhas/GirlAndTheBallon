	
	function Pause()
	{
		this.pause = new Image();
		this.pause.src = 'Assets/Scenes/pause.png';
		
		
		this.esc = new Image()
		this.esc.src = 'Assets/Teclas/esc.png';
		
		this.esc_w = 68;
		this.esc_h = 68;
		this.esc_x = 180;
		this.esc_y = 400;
		
		
		this.cont = new Image()
		this.cont.src = 'Assets/Teclas/continue.png';
		
		this.cont.width = 68;
		this.cont.height = 68;
		this.cont_x = 60;
		this.cont_y = 400;
		
		
		this.draw = function()
		{
			context.drawImage(this.pause,0,0,canvas.width,canvas.height);
			context.drawImage(this.esc,this.esc_x,this.esc_y,this.esc.width,this.esc.height);
			context.drawImage(this.cont,this.cont_x,this.cont_y,this.cont.width,this.cont.height);
		}
	}