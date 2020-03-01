let chalk = require("chalk")

function Dog(name){
	this.stomach = []
	this.name = name
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat)
}
Dog.prototype.sayhi = function(){
	console.log("hi i am a dog, my name is " + chalk.green(this.name))
}

module.exports = Dog