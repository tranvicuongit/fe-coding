var canvasHelper = {
    canvas: undefined,
    resize: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
};


canvasHelper.canvas = document.querySelector('canvas');
var canvas = canvasHelper.canvas.getContext('2d');

// canvas resizer
canvasHelper.resize();
window.addEventListener('resize', () => {
    canvasHelper.resize();
});

// line
canvas.moveTo(0, 0);
canvas.lineTo(200, 100);
canvas.fillStyle = ""
canvas.stroke();

// circle
canvas.beginPath();
canvas.arc(300, 100, 50, 0, 2 * Math.PI);
canvas.strokeStyle = "#FF5733";
canvas.stroke();

canvas.beginPath();
canvas.moveTo(200, 200);
canvas.font = "32px Arial";
canvas.fillStyle = "#741400";
canvas.fillText("Hello World", 10, 220);

// text stroke type
canvas.beginPath();
canvas.font = "18px Arial";
canvas.strokeStyle = "#FF5733";
canvas.strokeText("Hello World", 220, 220);


// Create gradient

canvas.beginPath();
var grd = canvas.createLinearGradient(0, 0, 0, 80);
grd.addColorStop(0, "#FFC300");
grd.addColorStop(1, "#900C3F");
canvas.fillStyle = grd;
canvas.fillRect(410, 10, 80, 80);

// Create gradient
canvas.beginPath();
var grd2 = canvas.createRadialGradient(10, 240, 160, 5, 240, 160);
grd2.addColorStop(0, "#FFC300");
grd2.addColorStop(1, "#900C3F");
canvas.fillStyle = grd2;
canvas.fillRect(10, 240, 160, 160);