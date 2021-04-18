class Level{
    constructor(){
      
        //Variable for number of enemies
      



    }

    level1Setup(){

      

        player = new Player();

        enemy1 = new Enemy(1255,50);
        enemy2 = new Enemy(1255,150);
        enemy3 = new Enemy(1255,250);
        enemy4 = new Enemy(1255,350);
        enemy5 = new Enemy(1255,450);

    }

    level1Draw(){
      
      background(spaceImg);
        if(gameState === "play"){

          if(flag4 === 0 && noLevel === 1){
            level1BackMu.play();
            level1BackMu.loop();
            flag4 = 1;
            }

            fill("Orange");
            textSize(15);
            if(player.health > 0){
              fill("green");
              rect(20,20,player.health,10);
              text("HP: "+player.health,35,15);
            }
            player.move();
            player.shoot();
            player.destroy();
           
            enemy1.shoot(10);
            enemy1.move(1000);
            enemy1.destroy();
            enemy2.shoot(10);
            enemy2.move(1000);
            enemy2.destroy();
            enemy3.shoot(10);
            enemy3.move(1000);
            enemy3.destroy();
            enemy4.shoot(10);
            enemy4.move(1000);
            enemy4.destroy();
            enemy5.shoot(10);
            enemy5.move(1000);
            enemy5.destroy();

            player.body.collide(edges);
            
          }
          else if(gameState === "lost"){
            enemyLaserG.destroyEach();
            heroLaserG.destroyEach();
            textSize(60);
            textFont("Georgia");
            stroke("White");
            strokeWeight(3);
            fill("Orange")
            text("GAME OVER", 500,255);
            level1BackMu.stop();
            level2BackMu.stop();
            level3BackMu.stop();
          }
          else if(gameState === "win"){
            enemyLaserG.destroyEach();
            heroLaserG.destroyEach();
            player.body.destroy();
            gameState = "play";
            noLevel = 2;
          }

         
        
          console.log("gameState: " + gameState);
    }

    level2Setup(){
      player = new Player();

        enemy1 = new Enemy(1255,100);
        enemy2 = new Enemy(1255,200);
        enemy3 = new Enemy(1255,300);
        enemy4 = new Enemy(1255,400);
        enemy5 = new Enemy(1255,500);
     /*   enemy6 = new Enemy(1255,50);
        enemy7 = new Enemy(1255,150);
        enemy8 = new Enemy(1255,250);
        enemy9 = new Enemy(1255,350);
        enemy10 = new Enemy(1255,450);
        */
        
    }

    level2Draw(){
      background(lev2Ig);
      if(gameState === "play"){
        if(flag5 === 0 && noLevel === 2){
          level2BackMu.play();
          level2BackMu.loop();
          level1BackMu.stop();
          flag5 = 1;
          }
  
       

        fill("Orange");
        textSize(15);
        if(player.health > 0){
          fill("green");
          rect(20,20,player.health,10);
          text("HP: "+player.health,35,15);
        }
        
      player.move();
      player.shoot();
      player.destroy();
  
      enemy1.shoot(70);
      enemy1.move(1000);
      enemy1.destroy();
      enemy2.shoot(70);
      enemy2.move(1000);
      enemy2.destroy();
      enemy3.shoot(70);
      enemy3.move(1000);
      enemy3.destroy();
      enemy4.shoot(70);
      enemy4.move(1000);
      enemy4.destroy();
      enemy5.shoot(70);
      enemy5.move(1000);
      enemy5.destroy();
      /*enemy6.shoot(20);
      enemy6.move();
      enemy6.destroy();
      enemy7.shoot(20);
      enemy7.move();
      enemy7.destroy();
      enemy8.shoot(20);
      enemy8.move();
      enemy8.destroy();
      enemy9.shoot(20);
      enemy9.move();
      enemy9.destroy();
      enemy10.shoot(20);
      enemy10.move();
      enemy10.destroy();
     */
      player.body.collide(edges);
      }else if(gameState === "lost"){
        enemyLaserG.destroyEach();
        heroLaserG.destroyEach();
        textSize(60);
        textFont("Georgia");
            stroke("White");
            strokeWeight(3);
            fill("Orange")
        text("GAME OVER", 500,255);
        level1BackMu.stop();
            level2BackMu.stop();
            level3BackMu.stop();
      } 
      else if(gameState === "win"){
        enemyLaserG.destroyEach();
        heroLaserG.destroyEach();
        player.body.destroy();
        gameState = "play";
        noLevel = 3;
      }
      console.log("gameState: " + gameState);

    }

    level3Setup(){
        player = new Player();
        enemy1 = new Enemy(1255,100);
        enemy2 = new Enemy(1255,200);
        enemy3 = new Enemy(1255,300);
        enemy4 = new Enemy(1255,400);
        enemy5 = new Enemy(1255,500);
        enemy6 = new Enemy(1255,50);
        enemy7 = new Enemy(1255,150);
        enemy8 = new Enemy(1255,250);
        enemy9 = new Enemy(1255,350);
        enemy10 = new Enemy(1255,450);
       // boss = new Enemy(1350,277.5);
        //boss.body.addImage(bossImg);
       // boss.body.scale = 0.4;
        //boss.body.velocityX = 0;
    }

    level3Draw(){
      background(lev3Ig);
      if(gameState === "play"){
        if(flag6 === 0 && noLevel === 3 && gameState === "play"){
          level3BackMu.play();
          level3BackMu.loop();
          level2BackMu.stop();
          flag6 = 1;
          }
       

        fill("Orange");
        textSize(15);
        if(player.health > 0){
          fill("green");
          rect(20,20,player.health,10);
          text("HP: "+player.health,35,15);
        }
      player.move();
      player.shoot();
      player.destroy();
  
      enemy1.shoot(40);
      enemy1.move(1000);
      enemy1.destroy();
      enemy2.shoot(50);
      enemy2.move(1000);
      enemy2.destroy();
      enemy3.shoot(70);
      enemy3.move(1000);
      enemy3.destroy();
      enemy4.shoot(40);
      enemy4.move(1000);
      enemy4.destroy();
      enemy5.shoot(70);
      enemy5.move(1000);
      enemy5.destroy();
      enemy6.shoot(50);
      enemy6.move(1100);
      enemy6.destroy();
      enemy7.shoot(60);
      enemy7.move(1100);
      enemy7.destroy();
      enemy8.shoot(80);
      enemy8.move(1100);
      enemy8.destroy();
      enemy9.shoot(70);
      enemy9.move(1100);
      enemy9.destroy();
      enemy10.shoot(60);
      enemy10.move(1100);
      enemy10.destroy();
      player.body.collide(edges);
      }else if(gameState === "lost"){
        enemyLaserG.destroyEach();
        heroLaserG.destroyEach();
        textSize(60);
            textFont("Georgia");
            stroke("White");
            strokeWeight(3);
            fill("Orange")
        text("GAME OVER", 500,255);
        level1BackMu.stop();
            level2BackMu.stop();
            level3BackMu.stop();
      } 
      else if(gameState === "win" &&  noLevel === 3){
        enemyLaserG.destroyEach();
        heroLaserG.destroyEach();
        player.body.destroy();
        textSize(80);
        textFont("Georgia");
            stroke("White");
            strokeWeight(3);
            fill("lightBlue")
        text("GAME WON", 400,255);
        if(flag1 === 0){
        winningSong.play();
        winningSong.loop();
        level1BackMu.stop();
        level2BackMu.stop();
        level3BackMu.stop();
        flag1 = 1;
        }
       /* if(keyDown("r")){
          noLevel = 1;
        }*/
        //gameState = "play";
        //noLevel = ;
        /*boss.body.velocityX = -5;
        boss.move(1000);*/

      }



    }


    

}