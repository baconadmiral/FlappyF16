var bird;
var pipes = [];
var score;
var highScore;
var crashes;
var tries;
var gameStarted;


function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  this.score = 0;
  this.highScore = 0;
  this.tries = 0;
  this.crashes = 0;
  pipes.push(new Pipe());
  this.flappyBak = loadImage('flappybak.png');
  this.gameStarted = false;
}

function draw() {
  background(flappyBak);


  textSize(32);
  text('Score: ' + this.score + " High: " + this.highScore, 40, 30);
  text('Tries: ' + this.tries, 40, 70);
  fill(0, 102, 153, 51);

  if(!this.gameStarted)
  {
    pipes = [];
    bird = new Bird();
    pipes.push(new Pipe());
    textSize(32);
    fill(0);
    text("Press Any Key to Start", 40, height/2);
    textSize(16);
    text("(Hit Space or Click to Fly)", 100, height/2 + 20);

  }

  if(this.gameStarted)
  {


    for(var i = pipes.length-1; i > 0; i--)
    {
      pipes[i].showPipe();
      pipes[i].update();

      if(pipes[i].hits(bird) || bird.crash())
      {
        this.gameStarted = false;
        this.highScore = this.score;
        this.tries += 1;
        this.score = 0;
      }

      if(pipes[i].score(bird))
      {
        this.score += 1;
      }

      if(pipes[i].x < -50 )
      {
        pipes.splice(i, 1);
      }
    }


    bird.showBird();
    bird.update();

    if(frameCount % 100 == 0)
      pipes.push(new Pipe());
  }

}


function mouseClicked()
{
  keyPressed();
}

function keyPressed()
{
  if(!this.gameStarted)
    this.gameStarted = true;

  if(key == " ")
  {
    bird.bounce();
  }
}
