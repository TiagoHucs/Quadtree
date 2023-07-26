class Quadtree {
    constructor(capacity,boundary){
        this.capacity = capacity;
        this.boundary = boundary;
        this.points = []
    }

    add(p){
        if(this.points < this.capacity){
            this.points.push(p);
            return;
        }
        // dividir
    }
    
    draw(canvas){
        canvas.clear("black");
        canvas.rectangle(this.boundary,"black");
        this.points.forEach(p => {
            canvas.point(p,"white",4);
        });
        
    }
}

var ca = new Canvas();
var rect = new Rectangle(0,0,ca.canvas.width,ca.canvas.height);
var qt = new Quadtree(4, rect);
for(let x = 100; x < 1000; x += 100){
    for(let y = 100; y < 800; y += 100){
        qt.add(new Point(x,y));
    }
}
qt.draw(ca);