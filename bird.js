function Bird()
{
  this.y = height/2;
  this.x = 100;

  this.gravity = 0.5;
  this.velocity = 0;
  this.birdWidth = 32;

  this.showBird = function()
  {

      fill(255);
      ellipse(this.x, this.y, this.birdWidth, this.birdWidth);

  }

  this.update = function()
  {
    this.velocity += this.gravity;

    //Stop at bottom of window
    if(this.y <= height)
    {
      this.y  += this.velocity;
    }
    else {
      this.velocity = 0;
      this.y = height;
    }

    //Stop at top of window
    if(this.y <= 0)
       this.y = 0;

  }

  this.bounce = function()
  {
    this.velocity -= 10;
  }


}
