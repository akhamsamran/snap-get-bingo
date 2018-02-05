/**
 * shuffles an array using the Fisher-Yates algorithm
 *
 * @see https://github.com/Daplie/knuth-shuffle Knuth shuffle
 * @param {Array} array of items to shuffle
 * @return {Array} shuffled array of items
 * @author Dylan McDonald
 **/
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


/**
 * loads bingo card based on shuffled array
 **/
function loadBingoCard() {
	var bingoSpaces = [
		"praises Jean-Luc", "quotes Janeway", "uses Captain Kirk voice", "tea earl grey hot", "difficult Star Trek question in Jeopardy",
		"WAT", "debugs lesson live", "throws Miguel in the brig", "messes up front end", "can't hear back row",
		"defers to Admirals", "makes fun of Admirals", "consults George in the middle of a lesson", "bad humor causes class to shake heads", "chain of bad humor more than 4 long",
		"talks to Admiral as they leave/enter", "mentions temperature in classroom", "puts lesson in Star Trek terms", "makes 1970s/1980s reference", "references Animaniacs/Simpsons",
		"accidently teaches in Spanish", "forces alumni to talk to the class", "calls for break in 24 hour time", "claims to know nothing about frontend",
		"re-hi all", "sends student downstairs to Java class", "let the project talk to you", "uses politifact scale",
		"quotes Stephen Colbert or Jon Stewart", "mentions the back or front paws", "solicits bribes in Bitcoin/Ethereum/LiteCoin", "buys/sells crypto currencies during break",
		"makes fun of .NET", "urges class to uninstall Windows", "blames/criticizes Comcast", "praises Bernie Sanders",
		"OH MY!", "blames Microsoft for poor software design", "uses Star Trek soundboard or YouTube video", "makes meme in the middle of lesson"
	];
	var freeSpace = "meows in class";

	var bingoCard = shuffle(bingoSpaces);
	var k = 0;
	var html = "";
	for (var i = 0; i < 5; i++) {
		html = html + "<tr>";
		for (var j = 0; j < 5; j++) {
			var content = "";
			if (i === 2 && i === j) {
				content = "<strong>FREE:</strong> " + freeSpace;
			} else {
				content = bingoCard[k];
				k++;
			}
			html = html + "<td>" + content + "</td>";
		}
		html = html + "</tr>";
	}

	document.getElementById("bingoCard").innerHTML = html;
}
/**
 * Task: get the contents of the top row, third column from Dylan's page/**
 I need to somehow get the contents of i === 1, j === 3
 i is a row, j is a column
 i is an attribute, j is ?

 **/

