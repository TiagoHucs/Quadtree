class Random {
    static number(min,max){
        let r = Math.random();
        let m = (min - max);
        let res = r * m + min;
        return res;
    }
    static color(min,max){
        let r = Math.floor(this.int(0,255))
        let g = Math.floor(this.int(0,255))
        let b = Math.floor(this.int(0,255))
        let c = "rgb(" + r + "," + g + "," + b + ")";
        return c;
    }
    static int(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min
    }


}