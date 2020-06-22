const canvas = document.querySelector('#sandbox');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


function Circle(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.dx = (Math.random() * 4) + 1;
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy = (Math.random() * 4) + 1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;


    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill()
    }

    this.animate = function () {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy
        }

        this.draw()
    }
}


const balls = [];

for (let i = 0; i < 20; i++) {
    let r = Math.floor(Math.random() * 30) + 15;
    let x = Math.random() * (canvas.width - r * 2) + r;
    let y = Math.random() * (canvas.height - r * 2) + r;
    let c = 'red';
    balls.push(new Circle(x, y, r, c))
}


canvas.addEventListener('click', function (e) {
    let r = Math.floor(Math.random() * 30) + 15;
    balls.push(new Circle(e.clientX, e.clientY, r, 'blue'))
})

function Update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < balls.length; i++) {
        balls[i].animate();
    }
    requestAnimationFrame(Update);
}
Update();


// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 300);
// ctx.lineTo(130, 200);
// ctx.lineTo(200, 100);
// ctx.stroke();
// // Graphic

// //RECT
// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.rect(200, 200, 100, 100);
// ctx.stroke()

// ctx.beginPath();
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'red'
// ctx.rect(250, 250, 100, 100);
// ctx.stroke();

// //CIRCLE

// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'orange';
// ctx.arc(600, 100, 30, 0, Math.PI * 2);
// ctx.fill();
// ctx.stroke()