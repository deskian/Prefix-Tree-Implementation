var PrefixTree = function(){

	this.words = 0;
	this.prefix = 0;
	this.children = [];
	
}
PrefixTree.prototype.addWords = function(str, index){
	//var self = this;
	//type check and make sure str is not undefined
	if(str && typeof str = 'string'){

		var temp;
		//make sure to start at 0 if no starting point is enter
		index = index || 0;
		//base case
		if (index === str.length){
			this.words++;
			return;
		}
		//keeping track of number of prefixes
		this.prefix++;
		//add new node if the letter doesn't exist
		if(this.children[0] === undefined){
			this.children[0] = new PrefixTree();
		}
		this.children.push(str[index]);
		this.children.addWords(str,index+1);

	}

}
PrefixTree.prototype.findWords = function(str){

}