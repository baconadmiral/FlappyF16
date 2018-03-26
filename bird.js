function Bird()
{
  this.image = loadImage('f16sprite.png');
  this.y = height/2;
  this.x = 100;

  this.gravity = 0.5;
  this.velocity = 0;
  this.birdWidth = 32;
  this.rot = 0;
  this.showBird = function()
  {
     translate(this.x, this.y);
     //image(this.image);

     if(this.rot < -0.6)
     {
       this.rot = -0.6
     }

     if(this.rot >= -0.6 && this.rot < 0.5)
     {
       this.rot += 0.02;
     }
    rotate(this.rot);

     image(this.image, -32, -10);
      //ellipse(this.x, this.y, this.birdWidth, this.birdWidth);
      //this.rot += 1;
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
    this.rot += -0.4;

  }

  this.crash = function()
  {
    return this.y >= height;
  }
}
