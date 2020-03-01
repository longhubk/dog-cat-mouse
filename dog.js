var chalk = require("chalk");

function Dog(name){
	this.name = name
	this.stomach = []

}

Dog.prototype.eat = function(cat){
	console.log(this.name)
	console.log(this.stomach)
}
Dog.prototype.sayHi = function(){
	console.log(this.name)
	console.log('hi i am a dog, my name is ' + chalk.green(this.name))
}

var dog1 = new Dog('tom')

dog1.sayHi()
module.exports = Dog