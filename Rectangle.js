class Rectangle {
    constructor(x,y,width,height,weight, color){
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.color = color || 'rgb(050,050,050)';
        this.weight = weight || 1; 
    }

    intersects(rect){
        return Rectangle.intersects(this,rect);
    }

    static intersects(rectA,rectB){

        let centerA = new Point(rectA.x + rectA.w / 2, rectA.y + rectA.h / 2);
        let centerB = new Point(rectB.x + rectB.w / 2, rectB.y + rectB.h / 2);

        let diffX = Math.abs(centerA.x - centerB.x);
        let diffY = Math.abs(centerA.y - centerA.y);

        let dx = rectA.w / 2 + rectB.w / 2;
        let dy = rectA.h / 2 + rectB.h / 2;

        return (diffX <= dx && diffY <= dy);
    }

    contains(p){
        return  p.x >= this.x && 
                p.x <= this.x + this.w &&
                p.y >= this.y && 
                p.y <= this.y + this.h;
    }
}