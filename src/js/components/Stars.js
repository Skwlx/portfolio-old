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

    generateStars(amount){
        let stars = [];
        for(let i = 0; i < amount; i++){
            stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: 5,
                color: "#fff",
                speed: Math.random() + 0.5,
            })
        }
        this.stars = stars;
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

    drawStars(){
        this.stars.forEach(star =>{
            this.drawStar(star);
        })
    }

    animateStars(){
        this.stars.forEach(star =>{
            star.y += star.speed;
            if(star.y >= this.height){
                star.y = 0;
            }
        })
    }

    resetCanvas(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0,0, this.width, this.height);
    }

    draw(){
        this.resetCanvas();
        this.drawStars();
        this.animateStars();
        window.requestAnimationFrame(() => this.draw());
    }

    run(){
        this.initCanvas();
        if(this.width < 479){
            this.generateStars(100);
        }
        else{
            this.generateStars(320);
        }
        this.draw();
    }
}


export default Stars;