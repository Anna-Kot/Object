function MyMath () {
    this.a = 5;
    this.b = 2;
    this.sum = function() {
        console.log(`Сума 5+2= ${this.a + this.b}`);
    }
    this.multiplication = function() {
        console.log(`Добуток 5*2= ${this.a * this.b}`);
    }
    this.division = function() {
        console.log(`Ділення 5/2= ${this.a / this.b}`);
    }
    this.subtraction = function() {
        console.log(`Різниця 5-2= ${this.a - this.b}`);
    }

}
let myMath = new MyMath();
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();