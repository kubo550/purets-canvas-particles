import Circle from "./Circle.js"

const PARTICLES_PER_FRAME = 2

const canvas = document.querySelector("canvas")!;
const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 4;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const resize = () => {
    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight - 4;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let circles: Circle[] = []

window.addEventListener('resize', resize)

window.addEventListener('mousemove', e => {
    // for (let i = 0; i < PARTICLES_PER_FRAME; i++) {
    const circle = new Circle(ctx, e.clientX, e.clientY)
    circles.push(circle)
    // }
})


const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circles.forEach((circle, idx) => {
        circle.update()
        circle.drawLine([...circles].slice(idx))
    })
    circles = circles.filter(circle => !circle.isDead())

    requestAnimationFrame(draw)
}
draw()