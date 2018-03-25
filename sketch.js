var bird;
var pipes = [];
var score;
var crashes;


function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  score = 0;
  crashes = 0;
  pipes.push(new Pipe());
  this.flappyBak = loadImage('flappybak.png');
  //angleMode(DEGREES);
}

function draw() {
  background(flappyBak);

  textSize(32);
  text('Score: ' + score + " Crashes: " + crashes, 40, 30);
  fill(0, 102, 153, 51);

  for(var i = pipes.length-1; i > 0; i--)
  {
    pipes[i].showPipe();
    pipes[i].update();

    if(pipes[i].hits(bird))
    {
      crashes += 1;
    }

    if(pipes[i].score(bird))
    {
      score += 1;
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


function mouseClicked()
{
  keyPressed();
}

function keyPressed()
{
  if(key == " ")
  {
    bird.bounce();
  }
}
