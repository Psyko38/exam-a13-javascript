function multiplierParDeux(tab) {
	let NewTab = [];
	for (let i of tab) {
		NewTab.push(i * 2);
	}
	return NewTab;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
