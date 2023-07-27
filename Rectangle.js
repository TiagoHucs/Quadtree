class Rectangle {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    contains(p){
        let esta = p.x >= this.x && 
        p.x <= this.x + this.w &&
        p.y >= this.y && 
        p.y <= this.y + this.h;
        return  p.x >= this.x && 
                p.x <= this.x + this.w &&
                p.y >= this.y && 
                p.y <= this.y + this.h;
    }
}