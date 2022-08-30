class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if(index == player.index){
          
          stroke(10);
          fill("rgb(61, 85, 117)");
          ellipse(x,y,60,60);
        
          camera.position.x = cars[index-1].position.x;
          camera.position.y = cars[index-1].position.y;



        }
      }

      this.handlePlayerControls();

      drawSprites();
    }
  }

  handlePlayerControls() {
    //manipulando eventos de teclado
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 50;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.positionY -= 10;  
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.positionX += 4; 
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.positionX -= 4;
    }
    if (keyIsDown(SPACE)) {
      player.rotate(180); 
    }
    player.update();
  }
}
