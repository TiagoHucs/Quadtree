//criando canvas
var ca = new Canvas();

//criando pontos
let points = [];
for (let i = 1; i <= 200; i++) {
    let x = Random.int(0, ca.canvas.width);
    let y = Random.int(0, ca.canvas.height);
    let p = new Point(x, y, 1);
    points.push(p);
}

function meuMouseClick(mp){
    console.log(mp);
    let p = new Female(mp.x,mp.y,1);
    points.push(p);

}

ca.onMouseClick = meuMouseClick;

var rect = new Rectangle(0, 0, ca.canvas.width, ca.canvas.height);
var distance = 24;

var qt;

function update() {
    qt = new Quadtree(4, rect);
    points.forEach(p => {
        p.move();
        if(p instanceof Female){
            let baby = p.makeBaby();
            if(baby){
                points.push(baby);
            }
        }
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
                let color = "rgb(000,255,000)";
                ca.line(a.x , a.y , b.x , b.y, color);

                if (a instanceof Female && !(b instanceof Female)){
                    a.gotPregnant();
                }

                if (b instanceof Female && !(a instanceof Female)){
                    b.gotPregnant();
                }
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
