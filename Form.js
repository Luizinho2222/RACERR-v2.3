class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Nickname");
    this.playButton = createButton("PLAY");
    this.titleImg = createImg("TrackName.png", "Track Name");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 50, height / 2 + 200);
    this.playButton.position(width / 2 - 30, height / 2 + 250);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Piloto : ${this.input.value()}
      </br>Loading...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();

  }
}
