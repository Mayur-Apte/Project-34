class hero {
    constructor(x,y,r){
        this.body = Bodies.rectangle(x,y,r);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var radius = this.body.radius;
        translate(this.body.position.x, this.body.position.y);
        
        
    }
}