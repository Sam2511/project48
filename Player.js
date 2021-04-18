class Player{
    constructor(){
        this.body = createSprite(10,276,30,30);
        this.body.addImage(heroImg);
        this.body.scale = 0.1;

        this.health = 100;
    }

    
 
    move(){
        if(keyDown("UP_ARROW")){
            this.body.y = this.body.y - 7; 
        }
        else if(keyDown("DOWN_ARROW")){
            this.body.y = this.body.y + 7; 
        }
        else if(keyDown("LEFT_ARROW")){
            this.body.x = this.body.x - 7; 
        }
        else if(keyDown("RIGHT_ARROW") && this.body.x < 500){
            this.body.x = this.body.x + 7; 
        }
    }

   

    shoot(){
        
        if(keyWentDown("space") && this.body.visible){
            var bullet = createSprite(this.body.x + 30, this.body.y, 15, 5);
            bullet.velocityX = 45;
            bullet.shapeColor = "Blue";
            heroLaserG.add(bullet);
            HeroHit.play()
        }
  
    }


    destroy(){
        
        for(var a = 0; a < enemyLaserG.length; a = a + 1){
            if(enemyLaserG.get(a).isTouching(this.body)){
                this.health = this.health - 20;
                enemyLaserG.get(a).destroy();
                if(player.health !== 0){
                playerHit.play();
                }
            }
        }
        if(this.health<=0){
            gameState = "lost";
            this.body.destroy();
            this.body.visible = false;
            playerDestroy.play();
        }
     }
}