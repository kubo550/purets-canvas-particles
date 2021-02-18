export default class Circle {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = 10;
        this.pos = { x, y };
        this.vel = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
        };
        this.col = +Date.now();
    }
    isDead() {
        return this.size < 0;
    }
    drawLine(particles) {
        particles.forEach(other => {
            const d = this.dist(other);
            if (d < 50) {
                this.ctx.strokeStyle = `hsl(${this.col}, 80%, 50%)`;
                this.ctx.beginPath();
                this.ctx.moveTo(this.pos.x, this.pos.y);
                this.ctx.lineTo(other.pos.x, other.pos.y);
                this.ctx.stroke();
            }
        });
    }
    dist(other) {
        return Math.sqrt((other.pos.x - this.pos.x) ** 2 + (other.pos.y - this.pos.y) ** 2);
    }
    draw() {
        this.ctx.fillStyle = `hsla(${this.col}, 100%, 50%, ${this.size / 20})`;
        this.ctx.fillRect(this.pos.x - this.size * 0.5, this.pos.y - this.size * 0.5, this.size, this.size);
        // this.ctx.arc(this.pos.x, this.pos.y, 20, 0, Math.PI * 2, true)
    }
    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.size -= 0.1;
        this.draw();
    }
}
