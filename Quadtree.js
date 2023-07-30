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
            new Rectangle(this.boundary.x, this.boundary.y, width, height, 'blue'));

        this.topright = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x + width, this.boundary.y, width, height, 'blue'));

        this.bottomleft = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x, this.boundary.y + height, width, height, 'blue'));

        this.bottomright = new Quadtree(this.capacity,
            new Rectangle(this.boundary.x + width, this.boundary.y + height, width, height, 'blue'));

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

        canvas.rectangle(this.boundary);
        this.points.forEach(p => {
            canvas.point(p);
        });
        if(this.topleft){
            this.topleft.draw(canvas);
            this.topright.draw(canvas);
            this.bottomleft.draw(canvas);
            this.bottomright.draw(canvas);
        }
        
    }
}