	
	function click(mouseX, mouseY) 
	{
		if(scene == 'menu')
		{
			if (mouseX >= menu.play_x && mouseX <= menu.play_x + menu.play.width && 
				mouseY >= menu.play_y && mouseY <= menu.play_y + menu.play.height) 
				{
					restart();
					scene = 'game';
				}
			
			else if(mouseX >= menu.credits_x && mouseX <= menu.credits_x + menu.credits.width &&
					mouseY >= menu.credits_y && mouseY <= menu.credits_y + menu.credits.height)
					{
						scene = 'credits';
					}
		}
		
		
		if(scene == 'game') 
		{
			if (mouseX >= game.pause_x && mouseX <= game.pause_x + game.pause.width && 
				mouseY >= game.pause_y && mouseY <= game.pause_y + game.pause.height)
				{
					scene = 'pause';
				}
			else game.ballon_speed *= -1;
		}
		
		
		if(scene == 'pause')
		{
			if (mouseX >= pause.cont_x && mouseX <= pause.cont_x + pause.cont.width &&
				mouseY >= pause.cont_y && mouseY <= pause.cont_y + pause.cont.height)
				{
					scene = 'game';
				}
			else if(mouseX >= pause.esc_x && mouseX <= pause.esc_x + pause.esc.width &&
					mouseY >= pause.esc_y && mouseY <= pause.esc_y + pause.esc.height)
					{
						scene = 'menu';
					}
		}
		
		
		if(scene == 'gameOver' || scene == 'credits')
		{
			if (mouseX >= back_x && mouseX <= back_x + back_w &&
				mouseY >= back_y && mouseY <= back_y + back_h)
				{
					scene = 'menu';
				}
		}
	}