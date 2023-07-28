class Rectangle {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    intersects(r){
        return this.contains(new Point(r.x, r.y)) ||
        this.contains(new Point(r.x, r.y + h)) ||
        this.contains(new Point(r.x + r.w, r.y)) ||
        this.contains(new Point(r.x + r.w, r.y + h));
    }

    contains(p){
        return  p.x >= this.x && 
                p.x <= this.x + this.w &&
                p.y >= this.y && 
                p.y <= this.y + this.h;
    }
}