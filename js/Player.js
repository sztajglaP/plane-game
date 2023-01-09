import { Projectile } from "./Projectile.js";

export class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.keys = {
            up: false,
            down: false
        };

        this.positionX = 10;
        this.positionY = this.canvas.height / 2;

        this.playerWidth = 75;
        this.playerHeight = 50;

        this.image = new Image();
        this.image.src = './image/Fly (1).png';

        this.projectiles = [];

        addEventListener('keydown', (e) => {
            if(e.keyCode == 38) {
                this.keys.up = true;
            } else if(e.keyCode == 40) {
                this.keys.down = true;
            }
        });

        addEventListener('keyup', (e) => {
            if(e.keyCode == 38) {
                this.keys.up = false;
            } else if(e.keyCode == 40) {
                this.keys.down = false;
            }
        });

        addEventListener('keyup', (e) => {
            this.shoot(e);
        });
    }

    draw = () => {
        this.ctx.drawImage(this.image, this.positionX, this.positionY, this.playerWidth, this.playerHeight);
    }

    update = () => {
        this.draw();
        this.movePlayer();
    }

    movePlayer = () => {
        if(this.keys.up == true) {
            this.positionY -= 5;
        }

        if(this.keys.down == true) {
            this.positionY += 5;
        }
    }

    shoot = (e) => {
        if(e.keyCode == 32) {
            this.projectiles.push(new Projectile(this.canvas, this.positionY));
        }
    }
}