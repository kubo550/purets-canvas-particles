type Vector = {
    x: number,
    y: number
}

export default class Circle {
    private size: number
    private pos: Vector
    private vel: Vector
    constructor(private ctx: CanvasRenderingContext2D, x: number, y: number) {
        this.size = 20
        this.pos = { x, y }
        this.vel = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        }
    }

    private draw() {
        this.ctx.fillStyle = "#0312e6"
        // this.ctx.arc(this.pos.x!, this.pos.y!, this.size, 0, 2 * Math.PI, true)
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size)
    }


    public update() {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y


        // this.edges()
        this.draw()

    }
}