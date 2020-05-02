class Stars{
    constructor(canvas){
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    }

    initCanvas(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0 ,0 ,this.width, this.height);
    }

    drawStar(star){
      this.ctx.save();
      this.ctx.fillStyle = star.color;
      this.ctx.beginPath();
      this.ctx.translate(star.x, star.y);
      this.ctx.moveTo(0, 0 - star.radius);
        for(let i = 0; i < 5; i++){
            this.ctx.rotate((Math.PI / 180) * 36);
            this.ctx.lineTo(0, 0 - star.radius * 0.5);
            this.ctx.rotate((Math.PI / 180) * 36);
            this.ctx.lineTo(0, 0 - star.radius);
        }
      this.ctx.fill()
      this.ctx.restore();
    }

    draw(){
        console.log("draw");
        window.requestAnimationFrame(() => this.draw());
        this.drawStar({
            x:40,
            y:40,
            color: '#fff',
            radius: 10,
        })
    }

    run(){
        this.initCanvas();
        this.draw();
    }
}


export default Stars;