        // project 21 //

        var wall, bullets 

        function setup() {
        createCanvas(400,400);
        wall = createSprite(350,200,20,50);
        speed = random(230,320)
        wall.shapeColor = "blue";
        wall.debug = true;
        wall.velocityX = 0
        wall.velocityY = 0

        bullets = createSprite(20,200,20,20);
        bullets.shapeColor = "white";
        bullets.debug = true;
    weight = random (30,50)
        
        bullets.velocityX = speed;
        }

        function draw() {

        background(0,0,0);  
            
        IStouching();
    BOUNCEOFF(wall,bullets)
        drawSprites();
        }
        function IStouching (){
            if (bullets.x - wall.x < wall.width/2 + bullets.width/2
                && wall.x - bullets.x < wall.width/2 + bullets.width/2) {
            bullets.velocityX = bullets.velocityX * (0);
            damage = 0.5*speed*speed*weight/wall.width*wall.width*wall.width

            if(damage>10){
        bullets.shapeColor = "red"
            }
            if(damge<10){
    bullets.shapeColor = "green"
            }
            }

            
        }
        function BOUNCEOFF (object1, object2){
            if (object2.x - object1.x < object1.width/2 + object2 .width/2
                && object1.x - object2 .x < object1.width/2 + object2 .width/2) {
                object2 .velocityX = object2 .velocityX * (-1);
                object1.velocityX = object1.velocityX * (-1);
            }
            if (object2 .y - object1.y < object1.height/2 + object2 .height/2
                && object1.y - object2 .y < object1.height/2 + object2 .height/2){
                object2 .velocityY = object2 .velocityY * (-1);
                object1.velocityY = object1.velocityY * (-1);
            }
        }