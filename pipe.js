//This is a pipe

function Pipe()
{
  this.gapYLoc = random(100, height-100);
  this.gapSize = 230;
  this.top = this.gapYLoc -this.gapSize/2;
  this.bottom = this.gapYLoc;
  this.speed = 2;
  this.passed = false;

  this.x = width;
  this.pipeWidth = 20;

  this.showPipe = function()
  {
    fill(255);
    rect(this.x, 0, this.pipeWidth, this.top);

    rect(this.x, this.gapYLoc, this.pipeWidth, height-this.bottom );

  }

  this.hits = function(bird)
  {
    if(!this.passed)
    {
    if(bird.y < this.top || bird.y > this.bottom)
      {
        if(bird.x > this.x && bird.x < this.x + this.pipeWidth)
        {
          this.passed = true;
          return true;
        }
      }
    }
      return false;
  }

  this.score = function(bird)
  {
    if(!this.passed)
    {
    if(bird.x > this.x && bird.x < this.x + this.pipeWidth)
    {
      if(!this.hits(bird))
      {
        this.passed = true;
        return true;
      }
    }
  }

    return false;

  }

  this.update = function()
  {
    this.x -= this.speed;
  }
}
