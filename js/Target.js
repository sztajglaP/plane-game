export class Target {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.image = new Image();
        this.image.src = './image/Bullet (1).png';

        this.width = 40;
        this.height = 40;

        this.positionX = this.canvas.width - 50;
        this.positionY = this.randomPositionY();
    
        this.moveX = 2;
    }

    draw = () => {
        this.ctx.drawImage(this.image, this.positionX, this.positionY, this.width, this.height);
    }

    update = () => {
        this.draw();
        this.positionX -= this.moveX;
    }

    randomPositionY = () => {
        return Math.floor(Math.random() * (this.canvas.height - this.height))
    }
}