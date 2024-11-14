{
	elementalhair.AddAsset("media/entity/player/move.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/throw.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/move-weak.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/hugging.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/poses.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/sleeping.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/entity/player/special.png", "lea-boki-palette.png");
	elementalhair.AddAsset("media/gui/menu.png", "lea-boki-dialogue-palette.png", null, function(){ return !sc.options.get("element-hair-auto-neutral"); });
	elementalhair.AddAsset("media/face/lea.png", "lea-boki-dialogue-palette.png");
	elementalhair.AddAsset("media/face/lea-hand.png", "lea-boki-dialogue-palette.png");
	elementalhair.AddAsset("media/face/lea-panic.png", "lea-boki-dialogue-palette.png");
	elementalhair.AddAsset("media/face/lea-special.png", "lea-boki-dialogue-palette.png");
	elementalhair.AddAsset("media/parallax/title/lea.png", "lea-boki-dialogue-palette.png");
	
	//add meow when you level up, you can delete all this if you don't want a meow
	ig.Sound.bokimeow = new ig.Sound("media/sound/bokimeow.ogg", 0.45);
	ig.ENTITY.Player.inject({
	  setCurrentAnim(a, b, d, g, h) {
		  
		if (a != this.currentAnim && a == "levelUpJump")
			ig.SoundHelper.playAtEntity(ig.Sound.bokimeow, ig.game.playerEntity);

		return this.parent(a, b, d, g, h);
	  },
	});
	//end add meow
	
}