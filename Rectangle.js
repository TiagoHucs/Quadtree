class Rectangle {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    intersects(rect){
        return Rectangle.intersects(this,rect) || Rectangle.intersects(rect,this)
    }

    static intersects(rectA,rectB){
        return rectA.contains(new Point(rectB.x, rectB.y)) ||
        rectA.contains(new Point(rectB.x, rectB.y + rectB.h)) ||
        rectA.contains(new Point(rectB.x + rectB.w, rectB.y)) ||
        rectA.contains(new Point(rectB.x + rectB.w, rectB.y + rectB.h));
    }

    contains(p){
        return  p.x >= this.x && 
                p.x <= this.x + this.w &&
                p.y >= this.y && 
                p.y <= this.y + this.h;
    }
}