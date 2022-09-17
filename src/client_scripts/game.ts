/* 
Handles all code for the game.
*/

class GameEngine {
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private updateThread: NodeJS.Timer = null as unknown as NodeJS.Timer;

    constructor() {
        // fetch the canvas
        this.render = this.render.bind(this);

        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
        }

        this.updateThread = setInterval(() => {
            this.update();
        }, 50);
    }

    /**
     * Handle game logic.
     */
    update() {
        
    }

    /**
     * Render the current state of the game.
     */
    render() {
        if (this.canvas && this.ctx) {
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
        }

        window.requestAnimationFrame(this.render);
    }
}

const engine: GameEngine = new GameEngine();
// begins the render loop.
engine.render(); 
