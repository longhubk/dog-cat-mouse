function catchMouse(){

}
catchMouse.prototype.eat = function(mouse) {
	this.stomach.push(mouse)
}
module.exports = cat