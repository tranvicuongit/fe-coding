var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

c.width = window.innerWidth - 4;
c.height = window.innerHeight - 54;

window.addEventListener('resize', () => {
    c.width = window.innerWidth - 4;
    c.height = window.innerHeight - 4;
});


var colors = [
    "#C2FFF0",
    "#B4A0E8",
    "#FFBFB4",
    "#E8DD99",
    "#8CFFB9",
    "#A3C8FF",
    "#E884D0",
    "#FFD697",
    "#A8E87D",
    "#6ED9FF"
];

var mouse = {
    x: 0,
    y: 0
};
var maxRadius = 40,
    minRadius = 2;

function Circle(x, y, dx, dy, rad, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = color;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * this.rad, false);
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function () {
        if (
            this.x + this.rad > c.width
            || this.x - this.rad < 0
        ) {
            this.dx = -this.dx;
        }
        if (
            this.y + this.rad > c.height
            || this.y - this.rad < 0
        ) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50
            && mouse.x - this.x > -50
            && mouse.y - this.y < 50
            && mouse.y - this.y > -50) {
            this.rad += this.rad < maxRadius ? 1 : 0;
        } else {
            this.rad -= this.rad > minRadius ? 1 : 0;
        }
        this.draw();
    }
}

var circles = [];
function run() {
    circles = [];
    var number = document.getElementById('number_of_circle').value;
    for (var i = 0; i < number; i++) {
        var _rad = Math.random() * minRadius,
            _x = Math.random() * (c.width - _rad * 2) + _rad,
            _y = Math.random() * (c.height - _rad * 2) + _rad,
            _dx = (Math.random() - 0.5) * 4,
            _dy = (Math.random() - 0.5) * 4,
            _color = colors[Math.floor(Math.random() * colors.length)];

        var _circle = new Circle(_x, _y, _dx, _dy, _rad, _color);
        circles.push(_circle);
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, c.width, c.height);

    for (var i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}
animate();
window.addEventListener('mousemove', function (e) {
    mouse = {
        x: e.x,
        y: e.y
    };
});

run();