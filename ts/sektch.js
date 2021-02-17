import Circle from "./Circle.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 4;
const resize = () => {
    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight - 4;
};
const circles = [];
window.addEventListener('resize', resize);
window.addEventListener('mousemove', e => {
    const circle = new Circle(ctx, e.clientX, e.clientY);
    circles.push(circle);
});
const draw = () => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => circle.update());
    requestAnimationFrame(draw);
};
draw();
