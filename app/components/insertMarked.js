var marked = require('marked');

function insertMarked(st){
		return {
			__html: marked(st)
		};
}

module.exports = insertMarked;