class Canvas {
    constructor(){
        this.canvas = document.getElementById("canvas");
        if(!this.canvas){
            this.canvas = document.createElement("canvas");
            document.body.appendChild(this.canvas);
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        this.ctx = this.canvas.getContext("2d");
        this.canvas.addEventListener('click', e => {
            this.mouseclick(e);
        })
    }
    mouseclick(e){
        this.mousepos = new Point(e.layerX,e.layerY);
        if(this.onMouseClick) this.onMouseClick(this.mousepos);
    }

    clear(color){
        if(!color){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        } else{
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        }
    }
    rectangle(r, color, weight){
        this.ctx.lineWidth = weight || 1;
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

    line(x1,y1,x2,y2,color){
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1,y1);
        this.ctx.lineTo(x2,y2);
        this.ctx.stroke();
    }
}