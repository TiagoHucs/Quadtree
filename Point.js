class Point {

    constructor(x,y,weight,color){
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.i = 1; //instability
        this.ismoving = true;
        this.color = color || 'white';
        this.age = 0;
    }

    move(){
        if(this.ismoving){
            const i = this.i;
            this.x += i == 0 ? 0 : Random.number(-i,i);
            this.y += i == 0 ? 0 : Random.number(-i,i);
        }
    }

    stop(){
        this.ismoving = false;
    }

}


class Female extends Point {

    constructor(x,y,weight){
        super(x,y,weight,'red');
        this.pregnant = false;
        this.pregnantAge = 0;
    }

    gotPregnant(){
        if(!this.pregnant){
            console.log('pregnate')
            this.color = 'violet';
            this.pregnant = true;
        }
    }

    move(){
        super.move();
        if(this.pregnant){
            this.pregnantAge++;
            console.log(this.pregnantAge)
        }
    }


    makeBaby(){
        if(this.pregnantAge > 1000){
            this.pregnant = false;
            this.pregnantAge = 0;
            return new Point(this.x,this.y, 1);
        }
        return null;
    }


}


