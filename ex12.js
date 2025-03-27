function filtrerLongsMots(mots) {
	let NewMots = [];
	for (let i of mots) {
		if (i.length > 5) NewMots.push(i);
	}
	return NewMots;
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(
	filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])
); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]
