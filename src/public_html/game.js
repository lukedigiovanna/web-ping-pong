"use strict";
class GameEngine {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.updateThread = null;
        this.render = this.render.bind(this);
        this.canvas = document.getElementById("canvas");
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
        }
        this.updateThread = setInterval(() => {
            this.update();
        }, 50);
    }
    update() {
        console.log("Updating the game");
    }
    render() {
        if (this.canvas && this.ctx) {
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        window.requestAnimationFrame(this.render);
    }
}
const engine = new GameEngine();
engine.render();
