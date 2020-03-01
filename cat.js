function Cat(name){
	this.name = name
}
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse)
}
module.exports = Cat