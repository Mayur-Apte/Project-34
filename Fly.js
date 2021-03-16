class fly {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
    }
    display(){
        if(this.fly.bodyA){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("brown");
            strokeWeight(5);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}