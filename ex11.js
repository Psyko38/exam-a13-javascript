function filtrerPairs(tab) {
	let NewTab = [];
	for (let i of tab) {
		if (parseFloat(i) % 2 === 0) NewTab.push(i);
	}
	return NewTab;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Résultat attendu : [2, 4, 6]
console.log(filtrerPairs([0, -2, -4, 18, 5, 6])); // Résultat attendu : [0, -2, -4, 18, 6]
