type Vector = {
    x: number;
    y: number;
};

export default class Circle {
    private size: number;
    private pos: Vector;
    private vel: Vector;
    readonly col: number;
    constructor(
        private ctx: CanvasRenderingContext2D,
        readonly x: number,
        readonly y: number
    ) {
        this.size = 10;
        this.pos = { x, y };
        this.vel = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
        };
        this.col = + Date.now();
    }

    public isDead() {
        return this.size < 0;
    }

    public drawLine(particles: Circle[]) {
        particles.forEach(other => {
            const d = this.dist(other)
            if (d < 50) {
                this.ctx.strokeStyle = `hsl(${this.col}, 80%, 50%)`;
                this.ctx.beginPath()
                this.ctx.moveTo(this.pos.x, this.pos.y);
                this.ctx.lineTo(other.pos.x, other.pos.y);
                this.ctx.stroke()
            }
        })
    }
    private dist(other: Circle) {
        return Math.sqrt((other.pos.x - this.pos.x) ** 2 + (other.pos.y - this.pos.y) ** 2)
    }
    private draw() {
        this.ctx.fillStyle = `hsla(${this.col}, 100%, 50%, ${this.size / 20})`;
        this.ctx.fillRect(this.pos.x - this.size * 0.5, this.pos.y - this.size * 0.5, this.size, this.size)
        // this.ctx.arc(this.pos.x, this.pos.y, 20, 0, Math.PI * 2, true)
    }

    public update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.size -= 0.1;

        this.draw();
    }
}
