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

    query(range){
        let found = [];
        if (this.boundary.intersects(range)){
            this.points.forEach(p => {
                if(range.contains(p)){
                    found.push(p);
                }
            })
            if(this.topleft){
                found = found.concat(this.topleft.query(range));
                found = found.concat(this.topright.query(range));
                found = found.concat(this.bottomleft.query(range));
                found = found.concat(this.bottomright.query(range));
            }
        }
        return found;
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

//criando canvas
var ca = new Canvas();

//criando pontos
let points = [];
for (let i = 1; i <= 1000; i++) {
    let x = Random.int(0, ca.canvas.width);
    let y = Random.int(0, ca.canvas.height);
    let p = new Point(x, y)
    points.push(p);
}

function meuMouseClick(mp){
    console.log(mp);
    let r = new Rectangle(mp.x,mp.y,200,200);
    ca.clear("black");
    qt.draw(ca);
    ca.rectangle(r,'green', 5);
    let qtPoints = qt.query(r);
    qtPoints.forEach(p => {
        if(r.contains(p)){
            ca.point(p,'red',5);
        }
    })

}

ca.onMouseClick = meuMouseClick;

var rect = new Rectangle(0, 0, ca.canvas.width, ca.canvas.height);
var distance = 40;



var qt;

function update() {
    qt = new Quadtree(4, rect);
    points.forEach(p => {
        p.x += Random.number(-2,2);
        p.y += Random.number(-2,2);
        qt.add(p);
    });
}

function render(){
    ca.clear("black");
    qt.draw(ca);        
    for (var i = 0; i < points.length; i++) {
        let a = points[i];
        for (var c = i + 1; c < points.length; c++) {
            let b = points[c];

            let x = a.x - b.x;
            let y = a.y - b.y;
            let h = Math.hypot(x,y);

            if(h <= distance){
                ca.line(a.x , a.y , b.x , b.y, "rgb(0,255,0)");
            }

        }
    }
}

function execute(){
    update();
    render();
    requestAnimationFrame(execute);
}

requestAnimationFrame(execute);
