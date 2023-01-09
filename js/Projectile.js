export class Projectile {
    constructor(canvas, y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 10;
        this.height = 10;

        this.positionX = 80;
        this.positionY = y;

        this.moveX = 5;
    }

    draw = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.positionX, this.positionY + (this.height + 21), 5, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = 'blue';
        this.ctx.fill();
    }

    update = () => {
        this.draw();
        this.positionX += this.moveX;
    }
}