	
	function Game()
	{
		this.girl = new Image();
		this.girl.src = 'Assets/player_temp.png';
		
		this.girl.width = 77.3;
		this.girl.height = 235,3;
		this.girl_x = canvas.width / 2 - this.girl.width / 2;
		this.girl_y = canvas.height;
		this.girl_yMax = canvas.height - (this.girl.height + 30);
        
        
        this.ballon = new Image();
		this.ballon.src = 'Assets/ballon.png';
		
		this.ballon.width = 62;
		this.ballon.height = 70;
		this.ballon_x = canvas.width / 2 - this.ballon.width / 2;
		this.ballon_y = canvas.height;
		this.ballon_yMax = canvas.height - ((this.ballon.height + this.girl.height) + 30);
		this.ballon_speed = 3;
		this.ballon_speedUp = this.ballon_speed;
				
		
		this.cloudsGame = new Image();
		this.cloudsGame.src = 'Assets/Background/cloudsGame.png';

		this.clouds_y = 0;
		this.clouds_y2 = canvas.height;
		
		this.objectsSpeed = 6;
		
		
		this.array = new Image();
		this.array.src = 'Assets/Obstacles/cloudArray.png';
		
		this.array.width = 180;
		this.array.height = 108;
		this.array_x1 = canvas.width / 2;
		this.array_x2 = 0 - 30;
		this.array_y1 = -this.array.height;
		this.array_y2 = -canvas.height;
		
	  
		this.pause = new Image();
		this.pause.src = 'Assets/Teclas/pause.png';
		
		this.pause.width = 58;
		this.pause.height = 58;
		this.pause_x = 240;
		this.pause_y = 10;
	  
		
		this.draw = function()
		{
			context.drawImage(this.cloudsGame,0,this.clouds_y,canvas.width,canvas.height);
			context.drawImage(this.cloudsGame,0,this.clouds_y2,canvas.width,canvas.height);
			context.drawImage(this.array,this.array_x1,this.array_y1,this.array.width,this.array.height);
			context.drawImage(this.array,this.array_x2,this.array_y2,this.array.width,this.array.height);
			context.drawImage(this.pause,this.pause_x,this.pause_y,this.pause.width,this.pause.height);
			context.drawImage(this.ballon,this.ballon_x,this.ballon_y,this.ballon.width,this.ballon.height);
		}
		
		
		this.update = function()
		{
			this.ballon_x += this.ballon_speed;
			
			
			this.clouds_y += this.objectsSpeed;
			this.clouds_y2 += this.objectsSpeed;
			
			if(this.clouds_y > canvas.height) this.clouds_y = -canvas.height;
			
			if(this.clouds_y2> canvas.height) this.clouds_y2 = -canvas.height;
			
			
			this.array_y1 += this.objectsSpeed;
			this.array_y2 += this.objectsSpeed;
			
			if(this.array_y1 > canvas.height) this.array_y1 = -canvas.height;
			
			if(this.array_y2 > canvas.height) this.array_y2 = -canvas.height;
			
			
			if(this.ballon_y > this.ballon_yMax) this.ballon_y -= this.ballon_speedUp;
			else this.ballon_y = this.ballon_yMax;
			
			
			//colision
			if (this.ballon_x < 0 || this.ballon_x + this.ballon.width  > canvas.width) killPlayer();
			
			if (this.ballon_x + this.ballon.width  > this.array_x1 && this.ballon_x  < this.array_x1 + this.array.width &&
					this.ballon_y + this.ballon.height > this.array_y1 && this.ballon_y < this.array_y1 + this.array.height)
					{
						killPlayer();
						//console.log("kill Player");
					}
			
			if (this.ballon_x + this.ballon.width  > this.array_x2 && this.ballon_x  < this.array_x2 + this.array.width &&
					this.ballon_y + this.ballon.height > this.array_y2 && this.ballon_y < this.array_y2 + this.array.height)
					{
						killPlayer();
						//console.log("kill Player");
					}
				}
	}