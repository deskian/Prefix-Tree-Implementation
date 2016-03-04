var PrefixTree = function(){

	this.prefix = 0;
	this.children = [];

}
PrefixTree.prototype.addWords = function(str, index){
	var self = this;
	//making sure str is not undefined
	if(str){

		//make sure to start at 0 if no starting point is enter
		index = index || 0;
		//base case
		if (index === str.length)
			self.words++;
			return;
		}
		//keeping track of number of prefixes
		self.prefix++;
		//add new node if the letter doesn't exist
		if(self.children[str[index]] === undefined){
			self.children[str[index]] = new PrefixTree();
		}
		self.children[str[index]].addWords(str,index+1);

	}

}

PrefixTree.prototype.findWords = function(str, index){
	var self = this;
	var tally = 0;
	//return false for empty string
	if(str.length === 0){
		return false;
	}
	//set index at 0 if nothing enter
	index = index || 0;
	//base case
	if(index === str.length && self.prefix !== 0){
		return true;
	}
	if(self.children[str[index]] !== undefined){
		self.children[str[index]].findWords(str, index+1);
	} else {
		return false;
	}

}