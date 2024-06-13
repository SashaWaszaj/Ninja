const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class ninja {
    constructor (name, health, speed, strength){
        this.name = ninja;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
}
    sayname(){
        console.log(this.name);
    }
    showstats (){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinksake (){
        this.health += 10;
    }
}