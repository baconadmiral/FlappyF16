var bird;
var pipes = [];
var score;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  score = 0;
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for(var i = pipes.length-1; i > 0; i--)
  {
    pipes[i].showPipe();
    pipes[i].update();

    if(pipes[i].hits(bird))
      console.log("HIT");

    if(pipes[i].score(bird))
    {
      score += 1;
      console.log("Score: " + score);
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
