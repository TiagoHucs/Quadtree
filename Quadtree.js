class Quadtree {
    constructor(capacity,boundary){
        this.capacity = capacity;
        this.boundary = boundary;
        this.points = [];
    }

    add(p){

        if (!this.boundary.contains(p)) {
            return false;
        }

        if(this.points.length < this.capacity){

            this.points.push(p);
            return true;
        }
        if(!this.topleft){
            this.divide();
        }
        let result =
            this.topleft.add(p) ||
            this.topright.add(p) ||
            this.bottomleft.add(p) ||
            this.bottomright.add(p);
        return result;
    }

    divide(){
        let width = this.boundary.w / 2;
        let height = this.boundary.h / 2;

        this.topleft = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x, this.boundary.y, width, height));

        this.topright = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x + width, this.boundary.y, width, height));

        this.bottomleft = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x, this.boundary.y + height, width, height));

        this.bottomright = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x + width, this.boundary.y + height, width, height));

    }
    
    draw(canvas){

        canvas.rectangle(this.boundary,"white");
        this.points.forEach(p => {
            canvas.point(p,"white",4);
        });
        if(this.topleft){
            this.topleft.draw(canvas);
            this.topright.draw(canvas);
            this.bottomleft.draw(canvas);
            this.bottomright.draw(canvas);
        }
        
    }
}

var ca = new Canvas();
var rect = new Rectangle(0, 0, ca.canvas.width, ca.canvas.height);
var qt = new Quadtree(4, rect);
for (let i = 1; i < 300; i++) {
    let x = Random.int(0, ca.canvas.width);
    let y = Random.int(0, ca.canvas.height);
    qt.add(new Point(x, y))
}
ca.clear("black");
qt.draw(ca);