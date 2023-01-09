import { Player } from "./Player.js";
import { Target } from "./Target.js";

window.onload = () => {
    const game = new Game();
}

class Game {
    constructor() {
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');

        this.image = new Image();
        this.image.src = './image/BG.png';

        this.targets = [];

        this.canvas.width = 600;
        this.canvas.height = 450;
        this.startGame();

        this.points = 0;
    }

    startGame = () => {
        this.player = new Player(this.canvas);
        this.update();
        this.createTarget();

        setInterval(this.createTarget, 3000);
    }

    update = () => {
        requestAnimationFrame(this.update);
        this.createBackground();
        
        this.player.projectiles.forEach((projectile, projectileIndex) => {
            projectile.update(this.player.positionY);

            if(projectile.positionX > this.canvas.width) {
                this.player.projectiles.splice(projectileIndex, 1);
            }
        });

        this.player.update();
        this.checkPlayerCollision();

        this.targets.forEach((target, tergetIndex) => {
            target.update();

            if(target.positionX < 0) {
                this.targets.splice(tergetIndex, 1);
            }
        });

        this.player.projectiles.forEach((projectile, projectileIndex) => {
            this.targets.forEach((target, targetIndex) => {
                if(projectile.positionX >= target.positionX && projectile.positionY >= target.positionY - (target.height / 2) && projectile.positionY <= target.positionY + target.height / 2) {
                    this.player.projectiles.splice(projectileIndex, 1);
                    this.targets.splice(targetIndex, 1)
                    this.points++;
                }
            });
        });

        this.addPoints();
    }

    createBackground = () => {
        this.ctx.drawImage(this.image, 0, 0, 600, 450);
    }

    checkPlayerCollision = () => {
        if(this.player.positionY <= 0) {
            this.player.positionY = 0;
        } else if(this.player.positionY + this.player.playerHeight >= this.canvas.height) {
            this.player.positionY = this.canvas.height - this.player.playerHeight;
        }
    }

    createTarget = () => {
        this.targets.push(new Target(this.canvas));
    }

    addPoints = () => {
        this.ctx.font = "20px Arial";
        this.ctx.fillText(`Points: ${this.points}`, (this.canvas.width / 2) - 50, 30); 
    }
}