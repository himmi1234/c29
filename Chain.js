class Chain{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.02,
            length: 10
        }
        this.bodyA = body1;
        this.pointB = point2;
        this.joint = Constraint.create(options);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.joint );
    }

    display(){

        image(this.sling1,200,20);
        image(this.sling2,170,20);

        if(this.joint.bodyA){
        push();
        //fill(48,22,8);
        
        stroke(48,22,8);
        if(this.bodyA.position.x<220){
            strokeWeight(7);
        line(this.bodyA.position.x-20,this.bodyA.position.y,
           this.pointB.x-10,this.pointB.y);
        line(this.bodyA.position.x-20 , this.bodyA.position.y, 
            this.pointB.x + 30,this.pointB.y -3 );
        image(this.sling3,this.bodyA.position.x - 30, 
            this.bodyA.position.y-10,15,30);
        }
        else{
            strokeWeight(3);
        line(this.bodyA.position.x+25,this.bodyA.position.y,
                this.pointB.x-10,this.pointB.y);
        line(this.bodyA.position.x+25, this.bodyA.position.y, 
                 this.pointB.x + 30,this.pointB.y -3 );
        image(this.sling3,this.bodyA.position.x +25, 
                 this.bodyA.position.y-10,15,30);

        }
        pop();
        }
    }
    
}