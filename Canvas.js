class Canvas {
    constructor(){
        this.canvas = document.getElementById("canvas");
        if(!this.canvas){
            this.canvas = document.createElement("canvas");
            document.body.appendChild(this.canvas);
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
           // this.canvas.style.border = "1px solid black";
        
        }
        this.ctx = this.canvas.getContext("2d");
    }

    clear(color){
        if(!color){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        } else{
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        }
    }
    rectangle(r, color){
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(r.x, r.y, r.w, r.h);
    }

    point(p,color,weight){
        this.ctx.fillStyle = color;
        let w = weight || 1;
        let x = p.x;
        let y = p.y;
        if(w > 1){
            let m = w / 2;
            x -= m;
            y -= m;
        }
        this.ctx.fillRect(x,y,w,w);
    }
}