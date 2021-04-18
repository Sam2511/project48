class Enemy{
    constructor(x,y){
        this.body = createSprite(x,y,30,30);
        this.body.shapeColor = "Red";
        this.body.velocityX = -7;
        this.body.addImage(enemyImg);
        this.body.scale = 0.1;

        enemyG.add(this.body);
    }
 
    move(x){

        if(this.body.x<x){
            this.body.velocityX = 0;
        }
        //console.log(this.body.x);

/*         if(keyDown("UP_ARROW")){
            this.body.y = this.body.y - 3; 
        }
        else if(keyDown("DOWN_ARROW")){
            this.body.y = this.body.y + 3; 
        }
        else if(keyDown("LEFT_ARROW")){
            this.body.x = this.body.x - 3; 
        }
        else if(keyDown("RIGHT_ARROW")){
            this.body.x = this.body.x + 3; 
        }
 */    }

    shoot(v){
        /* if(keyDown("space")){
            var bullet = createSprite(this.body.x + 30, this.body.y, 15, 5);
            bullet.velocityX = 10
            bullet.shapeColor = "red";
        } */

       if(this.body.visible === true){
        if(frameCount%20 === 0){
            var laser = createSprite(this.body.x , this.body.y, 15, 2);
            laser.velocityX = -v;
            laser.shapeColor = "red";
            enemyLaserG.add(laser);
            enemyShoot.play();
        }

        }
    
    }


    destroy(){
        //console.log("Enemies = " + enemyG.length);
        for(var a = 0; a < heroLaserG.length; a = a + 1){
            if(heroLaserG.get(a).isTouching(this.body)){
                this.body.destroy();
                this.body.visible = false;
                heroLaserG.get(a).destroy();
                enemyDestroy.play();
            }
        }

        if(enemyG.length === 0){
            gameState = "win"
          }
        

        
    }



    
}