var tree = {
	"mike": {
		"Steve": {
			"Petter": {}
		}
	}
}

function printTree (tree) {
	var arr = [];
	function traverse (familyTree) {
		for (key in familyTree) {
			if (JSON.stringify(familyTree[key]) !== '{}') {
				arr.push(familyTree[key]);
				traverse(familyTree[key]);
			} else {
				return;
			}
		}
	}
	traverse(tree);
	return arr;
}

console.log(printTree(tree));