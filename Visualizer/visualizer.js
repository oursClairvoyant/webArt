const microphone = new Microphone();
//canvas definiton
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let balls = [];
//class definiton for balls
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 8;
    this.color = this.getRandomColor();
    this.jumpForce = 0.1;
    this.fallForce = 0.1;
    this.isFalling = true;
  }

  getRandomColor = () => {
    let colors = ["blue", "white", "red", "cyan", "green", "yellow", "pink"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    return randomColor;
  };
  draw = () => {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  };

  fall = () => {
    this.jumpForce = 0;
    this.y += this.fallForce;
    this.fallForce += 0.05;
  };
  jump = () => {
    this.fallForce = 0;
    this.y -= this.jumpForce;
    this.jumpForce -= 0.05;
  };
}
//generate balls for visualizer
const generateBalls = () => {
  const distance = 30;
  const amountOfBalls = canvas.width / distance - 2;
  //fill balls array
  for (let i = 0; i < amountOfBalls; i++) {
    balls.push(new Ball(distance + i * distance, 100));
  }
};
generateBalls();

function animate() {
  if (microphone.initialized) {
    let samples = microphone.getSamples();
    //nettoie le canvas pour l'effet de chute des boules
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach((ball) => {
      if (ball.isFalling && ball.y < canvas.height / 2) {
        ball.fall();
      } else if (ball.y > canvas.height / 2) {
        ball.isFalling = false;
      }
        ball.isFalling = false;
        ball.jump();
      }
      if (!ball.isFalling) {
      }

      ball.draw();
    });
    //console.log(samples);
  }
  requestAnimationFrame(animate);
}
animate();
